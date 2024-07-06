/**
 * title: 更新message
 */
import React from 'react';
import {MessageProvider, MessageRef, Button} from '@jedi-arsenal/components'

function App(){
  const messageRef = React.useRef<MessageRef>(null);
  const fn = () => {
    const key = messageRef.current.add({
      content:'请求中',
      type:'info',
      duration: 3000
    })
    setTimeout(() => {
      messageRef.current.update(key,{content: '请求成功', type: 'success'})
    }, 2000)
  }
  return (
    <div>
      <MessageProvider ref={messageRef}></MessageProvider>
      <Button onClick={fn}>
        更新message
      </Button>
    </div>
  )
}

export default App