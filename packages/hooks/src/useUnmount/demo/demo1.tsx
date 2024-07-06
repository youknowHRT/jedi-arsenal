import { useUnmount, useToggle } from '@jedi-arsenal/hooks';
import {ConfigProvider, useMessage} from '@jedi-arsenal/components'
const MyComponent = () => {
  const message = useMessage();
  useUnmount(() => {
    message.add({
      content:'unmount',
    })
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useToggle(true);

  return (
    <ConfigProvider>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </ConfigProvider>
  );
};