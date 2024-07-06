// import React from 'react';
import {MessageProvider, MessageRef, ConfigProvider, useMessage} from '@jedi-arsenal/components'
import dayjs from "dayjs";
import * as ja from '@jedi-arsenal/components'
import '@jedi-arsenal/components/dist/style.css'

import * as JAIcon from '@jedi-arsenal/icons'
import {IconArrowLeft,IconCharts,IconMale, createFromIconfont} from '@jedi-arsenal/icons'
// import * as JAHooks from '@jedi-arsenal/hooks'
import * as JAHooks from '../../packages/hooks/dist/jedi-arsenal-hooks.es'
import {useLatest,useMount,useUnmount} from '@jedi-arsenal/hooks'
import { useEffect, useRef, useState } from 'react';
// import VList from './hooks/useVirtualList/demo'

// const IconFont = createFromIconfont({scriptUrl:['//at.alicdn.com/t/font_2272352_fbiepekoe2p.js']})
const MyComponent = () => {
  useUnmount(() => {
    console.log('unmount')
  });

  return <p>Hello World!</p>;
};

function Aaa(props) {
  console.log("🚀 ~ Aaa ~ type:", props)
  const {type} = props
  const message = useMessage();

  return <button onClick={() =>{
    message.add({
      content:'请求成功',
      duration: 1000000,
      type
    })
  }}>成功</button>
}
function App(){
  // console.log(ja,'🍉')
  // const [state, setState] = useState(true);
  const messageRef = useRef<MessageRef>(null);
  
  return (
    <ConfigProvider>
      <div>
        <MessageProvider ref={messageRef}></MessageProvider>
        <Aaa type='success'></Aaa>
        <Aaa type='warning'></Aaa>
        <Aaa type='error'></Aaa>
        <Aaa type='info'></Aaa>
        <button onClick={()=>{
          messageRef.current.add({
            content:'请求成功sssssss',
            // duration: 1000000,
            type:'success',
            onClose: ()=>{
              console.log('🍎🍎🍎🍎🍎🍎')
            }
          })
        }}>ssssss</button>
      </div>
    </ConfigProvider>
  )
}

export default App