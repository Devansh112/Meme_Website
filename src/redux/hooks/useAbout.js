import { useDispatch, useSelector } from 'react-redux';
import { aboutActionCreators } from '../slice';

export const useAbout = () => {
  const dispatch = useDispatch();

  const toggleAbout = () => {
    dispatch(aboutActionCreators.toggleAbout());
  };

  const getAbout = useSelector(state => state?.about?.aboutEnable);

  return {
    toggleAbout,
    getAbout,
  };
};
