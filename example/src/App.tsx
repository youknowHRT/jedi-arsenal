// import React from 'react';
import {JaButton,JaCalendar} from '@jedi-arsenal/components'
import dayjs from "dayjs";
import * as ja from '@jedi-arsenal/components'
import '@jedi-arsenal/components/dist/style.css'

import * as JAIcon from '@jedi-arsenal/icons'
import {IconArrowLeft,IconCharts,IconMale, createFromIconfont} from '@jedi-arsenal/icons'
// import * as JAHooks from '@jedi-arsenal/hooks'
import * as JAHooks from '../../packages/hooks/dist/jedi-arsenal-hooks.es'
import {useLatest,useMount,useUnmount} from '@jedi-arsenal/hooks'
import { useEffect, useState } from 'react';
// import VList from './hooks/useVirtualList/demo'

// const IconFont = createFromIconfont({scriptUrl:['//at.alicdn.com/t/font_2272352_fbiepekoe2p.js']})
const MyComponent = () => {
  useUnmount(() => {
    console.log('unmount')
  });

  return <p>Hello World!</p>;
};
function App(){
  console.log(JAHooks,'🍉')

  const [count, setCount] = useState(0);
  const countRef = JAHooks.useLatest(count)
  countRef.current = count
  useEffect(() => {
    // const timer = setInterval(() => {
    //   setCount(countRef.current + 1);
    // }, 1000);
    // return ()=>clearInterval(timer); 
  },[])
  // useMount(
   
  // )
  const [state, setState] = useState(true);
  return (
    <div>
      <h1>Hello World</h1>{count}
      <button type="button" onClick={()=>setState(!state)}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}


      {/* <VList/> */}


      {/* <JaButton>aaa</JaButton>
      <IconArrowLeft/>
      <IconCharts/>
      <IconMale/>
      <IconFont type="i-surgery" fill="blue"/> */}

      {/* <JaCalendar value={dayjs('2024-5-21')}
      locale="en-US"
      onChange={(date) => {
        alert(date.format('YYYY-MM-DD'));}}
        dateRender={(value)=>{
          return <div>
            <p style={{background: 'yellowgreen',height:'300px' }}>
              {value.format('YYYY/MM/DD')}
            </p>
          </div>
        }}
        dateInnerContent={(value)=>{
          return <div>
            <p style={{background: 'yellowgreen',height:'30px' }}>
              {value.format('YYYY/MM/DD')}
            </p>
          </div>
        }}
        /> */}
    </div>
  )
}

export default App