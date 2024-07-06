/**
 * title: hooks 调用
 */

import React from "react";
import {ConfigProvider, useMessage, Button} from '@jedi-arsenal/components'

function Aaa() {
  const message = useMessage();

  return <Button onClick={() =>{
    message.add({
      content:'请求成功',
    })
  }}>成功</Button>
}
function App(){
  return (
    <ConfigProvider>
      <div>
        <Aaa></Aaa>
      </div>
    </ConfigProvider>
  )
}

export default App