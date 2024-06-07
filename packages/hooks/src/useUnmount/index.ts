import { useEffect } from "react"
import useLatest from "../useLatest"
import isDev from "../utils/isDev"
import { isFunction } from "../utils"

const useUnmount = (fn: ()=> void)=>{
  if(isDev){
    if(isFunction(!fn)){
      console.error(`useUnmount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,)
    }
  }

  const fnRef = useLatest(fn)

  useEffect(
    ()=>()=>{
      fnRef.current()
    },
    []
  )
}

export default useUnmount