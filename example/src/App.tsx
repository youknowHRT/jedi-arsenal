import React from 'react';
import {Button,MessageProvider,ConfigProvider,MessageRef,Calendar} from '@jedi-arsenal/components'
import dayjs from "dayjs";
// import * as ja from '@jedi-arsenal/components'
import '@jedi-arsenal/components/build/es/style.css'
import {IconArrowLeft,IconCharts,IconMale, createFromIconfont} from '@jedi-arsenal/icons'

import {useLatest,useMount,useUnmount} from '@jedi-arsenal/hooks'
import { useEffect, useRef, useState } from 'react';

function App(){
  const messageRef = useRef<MessageRef>(null);
  const fn = () => {
    messageRef.current.add({
      content:'请求成功',
      type:'info',
    })
  }
  return (
    <ConfigProvider>
      <div>
        <MessageProvider ref={messageRef}></MessageProvider>
        <Button onClick={fn}>
          message基本使用
        </Button>
        <Calendar value={dayjs("2024-5-21")} locale="en-US" />
      </div>
    </ConfigProvider>
    // <div> <div><Button>老子与海</Button></div> xxx</div>
  )
}

export default App