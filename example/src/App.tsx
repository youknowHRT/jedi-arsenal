// import React from 'react';
import {JaButton,JaCalendar} from '@jedi-arsenal/components'
import dayjs from "dayjs";
import * as ja from '@jedi-arsenal/components'
import '@jedi-arsenal/components/dist/style.css'
function App(){
  console.log(ja,'🍉')
  return (
    <div>
      <h1>Hello World</h1>
      <JaButton>aaa</JaButton>

      <JaCalendar value={dayjs('2024-5-21')}
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
        />
    </div>
  )
}

export default App