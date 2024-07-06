/**
 * title: 其他三种提示类型
 */

import {ConfigProvider, useMessage, Button} from '@jedi-arsenal/components'

function Aaa() {
  const message = useMessage();

  return (
    <div>
      <Button onClick={() =>{ message.add({ content:'请求成功', type: 'success'}) }}>成功</Button>
      <Button onClick={() =>{ message.add({ content:'请求成功', type: 'warning'}) }}>警告</Button>
      <Button onClick={() =>{ message.add({ content:'请求成功', type: 'error' }) }}>报错</Button>
    </div>
  )
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