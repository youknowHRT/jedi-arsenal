import { useMount, useToggle } from '@jedi-arsenal/hooks';
import {ConfigProvider, useMessage} from '@jedi-arsenal/components'
const MyComponent = () => {
  const message = useMessage();
  useMount(() => {
    message.add({
      content:'mount',
    })
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useToggle();

  return (
    <ConfigProvider>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </ConfigProvider>
  );
};