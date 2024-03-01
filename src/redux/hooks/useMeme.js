import { useDispatch, useSelector } from "react-redux";
import { memeActionCreators } from "../slice";

export const useMeme = () => {
  const dispatch = useDispatch();
  const memeData = useSelector((state) => state?.memeData);

  const memeTitle = useSelector(
    (state) => state?.memeData?.memeData?.data?.title
  );

  const memeUrl = useSelector((state) => state?.memeData?.memeData?.data?.url);

  const isLoading = useSelector((state) => state?.isLoading);

  const fetchMeme = () => {
    dispatch(memeActionCreators.fetchMeme());
  };

  return {
    fetchMeme,
    memeData,
    isLoading,
    memeUrl,
    memeTitle,
  };
};
