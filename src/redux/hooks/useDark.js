import { useDispatch, useSelector } from "react-redux";
import { toggleDark } from "../slice";
export const useDark = () => {
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(toggleDark());
  };

  const getDark = useSelector((state) => state?.darkMode?.darkMode);

  return {
    toggleDarkMode,
    getDark,
  };
};
