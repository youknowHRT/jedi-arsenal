import { useMemo } from "react";
import useToggle from "../useToggle";

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  set: (value: boolean) => void;
}

export default function useBoolean( defaultValue: boolean = false ): [boolean, Actions] {
  const [state, { set, toggle }] = useToggle(!!defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    return {
      setTrue,
      setFalse,
      toggle,
      set: v => set(!!v),
    };
  }, []);
  return [state, actions];
}
