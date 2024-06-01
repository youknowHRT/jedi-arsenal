// import React from 'react';
import {JaButton,JaCalendar} from '@jedi-arsenal/components'
import dayjs from "dayjs";
import * as ja from '@jedi-arsenal/components'
import '@jedi-arsenal/components/dist/style.css'

import * as JAIcon from '@jedi-arsenal/icons'
import {IconArrowLeft,IconCharts,IconMale, createFromIconfont} from '@jedi-arsenal/icons'

const IconFont = createFromIconfont({scriptUrl:['//at.alicdn.com/t/font_2272352_fbiepekoe2p.js']})
function App(){
  console.log(JAIcon,'🍉')
  return (
    <div>
      <h1>Hello World</h1>
      <JaButton>aaa</JaButton>
    <IconArrowLeft/>
    <IconCharts/>
    <IconMale/>
    <IconFont type="i-surgery" fill="blue"/>
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