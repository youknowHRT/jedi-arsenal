/**
 * title: 基本使用
 */

import React from "react";
import {MessageRef, MessageProvider, Button} from '@jedi-arsenal/components'

function App(){
  const messageRef = React.useRef<MessageRef>(null);
  const fn = () => {
    messageRef.current.add({
      content:'请求成功',
      type:'info',
    })
  }
  return (
    <div>
      <MessageProvider ref={messageRef}></MessageProvider>
      <Button onClick={fn}>
        message基本使用
      </Button>
    </div>
  )
}

export default App