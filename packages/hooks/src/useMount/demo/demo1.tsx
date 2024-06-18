import { useMount, useToggle } from '@jedi-arsenal/hooks';

const MyComponent = () => {
  useMount(() => {
    alert('mount!')
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useToggle();

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};