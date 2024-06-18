import { useUnmount, useToggle } from '@jedi-arsenal/hooks';

const MyComponent = () => {
  useUnmount(() => {
    alert('unmount!')
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useToggle(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};