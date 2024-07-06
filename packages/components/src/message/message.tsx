import { CSSProperties, FC, ReactNode, forwardRef, useEffect, useImperativeHandle, useMemo, RefObject, createRef } from "react"
import useStore from "./useStore";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './styles/index.scss'
import { createPortal } from "react-dom";
import { useTimer } from "./useTimer";
import {IconCheckCircle, IconCloseCircle, IconExclamationCircle, IconInfoCircle} from "@jedi-arsenal/icons"

export type Position = 'top' | 'bottom'

export interface MessageProps {
  style?: CSSProperties;
  className?: string | [],
  content: ReactNode
  duration?: number;
  onClose?: (...args: any) => void;
  id?: number;
  position?: Position;
  type?: 'success' | 'error' | 'warning' | 'info' // 'loading'
}
const iconNodeObj = {
  success: <IconCheckCircle style={{color:"var(--ja-color-success)"}}/>,
  error: <IconCloseCircle style={{color:"var(--ja-color-error)"}}/>,
  warning: <IconExclamationCircle style={{color:"var(--ja-color-warning)"}}/>,
  info: <IconInfoCircle style={{color:"var(--ja-color-info)"}}/>
}

interface MessageItemProps extends MessageProps {
  remove: (id: number)=> void
}
const MessageItem: FC<MessageItemProps> =item => {
  const {type='info'} = item
  const {onMouseEnter, onMouseLeave} = useTimer({
    id: item.id!,
    duration: item.duration,
    remove: item.remove!,
    onClose: item.onClose!,
  })
  const icon = useMemo(()=>{
    return iconNodeObj[type]
  },[type])

  return <div className="message-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {icon}
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
              const onClose = (id: number)=>{
                remove(id)
                item?.onClose && item.onClose()
              }
              return <CSSTransition key={item.id} timeout={300} classNames="message" nodeRef={nodeRef}>
                <MessageItem {...item} onClose={onClose} remove={remove}></MessageItem>
              </CSSTransition>
            })
          }
        </TransitionGroup>
      })
    }
  </div>

  const el= useMemo(()=>{
    const el = document.createElement('div')
    el.className = 'ja-message-box'
    document.body.appendChild(el)
    return el
  },[])

  return createPortal(messageWrapper, el)
})