import type { Meta, StoryObj } from '@storybook/react';
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
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      source: {
        code: `${showCode}`, // 使用自定义的代码字符串覆盖默认的源代码展示
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;


/**
 * 返回更新后的数据，有效处理闭包问题
 */
export const Value: Story = {
  // render(args) {
  //   return <div>
  //   </div>
  // }
};