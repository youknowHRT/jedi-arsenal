import type { Meta, StoryObj } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories, Source } from '@storybook/blocks';
import { useState, useEffect } from 'react';
import demo1 from './demo/demo1'

const Demo = ()=>{
 

  return (
    <>
      
    </>
  );
}
const showCode = `

`;


const meta = {
  title: 'Hooks/State/useToggle',
  component: Demo,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `${showCode}`, // 使用自定义的代码字符串覆盖默认的源代码展示
      },
      page: () => (
        <>
          <Title />
          <Subtitle>
            <span style={{fontSize: '15px'}}>切换状态的钩子</span>
          </Subtitle>
          <Subtitle>
            <div style={{color:'#333', fontWeight: 'bold', fontSize: '24px'}}>Examples</div>
          </Subtitle>
          <Primary />
          <Subtitle>
            <div style={{color:'#333', fontWeight: 'bold', fontSize: '24px'}}>API</div>
          </Subtitle>
          <Source code={`const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;`} />
        </>
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;


/**
 * 返回更新后的数据，有效处理闭包问题
 * 
 * # API
 * 
 * ```ts
 * const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;
 * ```
 */
export const Value: Story = {
  render: (args) => {
    return (
      // <div>{demo1}</div>
      // <code src="./demo/demo1.tsx"></code>
      <div>
        {`${demo1}`}
      </div>
    )
  },
};