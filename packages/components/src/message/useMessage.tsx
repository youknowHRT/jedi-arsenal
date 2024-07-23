import * as React from 'react';
import { MessageRef } from "./message";
import { ConfigContext } from "../config-provider/ConfigProvider";

export function useMessage(): MessageRef{
  const {messageRef} = React.useContext(ConfigContext)
  if(!messageRef){
    throw new Error('请在最外层添加ConfigProvider')
  }
  
  return messageRef.current!
}