import type { Meta, StoryObj } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories, Source } from '@storybook/blocks';
import { useState, useEffect } from 'react';
import useLatest from './index';

const Demo = ()=>{
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(count2 + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(default): {count2}</p>
    </>
  );
}
const showCode = `
import React, { useState, useEffect } from 'react';
import {useLatest} from '@jedi-arsenal/hooks';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(count2 + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(default): {count2}</p>
    </>
  );
};
`;


const meta = {
  title: 'Hooks/Advanced/useLatest',
  component: Demo,
  parameters: {
    layout: 'centered',
    docs: {
      // defaultName: 'Documentation',
      source: {
        code: `${showCode}`, // 使用自定义的代码字符串覆盖默认的源代码展示
      },
      // description: {
      //   component: 'Another description, overriding the comments1'
      // },
      page: () => (
        <>
          <Title />
          <Subtitle>
            <span style={{fontSize: '15px'}}>返回更新后的数据，有效处理闭包问题</span>
          </Subtitle>
          {/* <Description/> */}
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
};