import { useContext } from "react";
import { MessageRef } from "./message";
import { ConfigContext } from "./ConfigProvider";

export function useMessage(): MessageRef{
  const {messageRef} = useContext(ConfigContext)
  if(!messageRef){
    throw new Error('请在最外层添加ConfigProvider')
  }

  return messageRef.current!
}