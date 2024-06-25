import { CSSProperties, FC, ReactNode, forwardRef, useEffect, useImperativeHandle, useMemo, RefObject, createRef } from "react"
import useStore from "./useStore";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './styles/index.scss'
import { createPortal } from "react-dom";
import { useTimer } from "./useTimer";

export type Position = 'top' | 'bottom'

export interface MessageProps {
  style?: CSSProperties;
  className?: string | [],
  content: ReactNode | string
  duration?: number;
  onClose?: (...args: any) => void;
  id?: number;
  position?: Position;
}

const MessageItem: FC<MessageProps> =item =>{
  const {onMouseEnter, onMouseLeave} = useTimer({
    id: item.id!,
    duration: item.duration,
    remove: item.onClose!
  })
  return <div className="message-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {item.content}
  </div>
}

export interface MessageRef {
  add: (messageProps: MessageProps)=> number,
  remove: (id: number)=> void,
  clearAll: ()=> void,
  update: (id: number, messageProps: MessageProps)=> void,
}

export const MessageProvider = forwardRef<MessageRef,{}>((props,ref)=>{
  const {messageList, add, update, remove, clearAll} = useStore('top')

  if('current' in ref!){
    ref.current = {
      add,
      remove,
      clearAll,
      update
    }
  }
  // useImperativeHandle(ref, ()=>{
  //   return {
  //     add,
  //     remove,
  //     clearAll,
  //     update
  //   }
  // },[])

  const positions = Object.keys(messageList) as Position[]

  const messageWrapper = <div className="message-wrapper">
    {
      positions.map(direction=>{
        return <TransitionGroup className={`message-wrapper-${direction}`} key={direction}>
          {
            messageList[direction].map(item=>{
              const nodeRef = createRef<HTMLElement>()
              return <CSSTransition key={item.id} timeout={300} classNames="message" nodeRef={nodeRef}>
                <MessageItem onClose={remove} {...item}></MessageItem>
              </CSSTransition>
            })
          }
        </TransitionGroup>
      })
    }
  </div>

  const el= useMemo(()=>{
    const el = document.createElement('div')
    el.className = 'wrapper'
    document.body.appendChild(el)
    return el
  },[])

  return createPortal(messageWrapper, el)
})