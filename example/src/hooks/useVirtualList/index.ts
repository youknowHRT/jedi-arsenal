import { useEffect } from "react";

interface VirtualListProps {
  containerTarget: React.RefObject<HTMLDivElement>;
  wrapperTarget: React.RefObject<HTMLDivElement>;
  itemHeight: number;
  overscan?: number
}

const useVirtualList = <T = any>(list: any[], props: VirtualListProps)=>{
  const { containerTarget, wrapperTarget, itemHeight, overscan } = props
  const ulRef = containerTarget.current
  console.log("🚀 ~ useVirtualList ~ ulRef:", ulRef)
  useEffect(()=>{
    console.log("🚀2 ~ useVirtualList ~ ulRef:", ulRef)
  }, [])
  return []
}

export default useVirtualList
