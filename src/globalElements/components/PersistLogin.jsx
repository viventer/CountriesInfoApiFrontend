import { Outlet, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshMutation } from "../slices/authApiSlice";
import usePersist from "../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../slices/authSlice";
import ErrorInfo from "../../pages/login/components/ErrorInfo";
import HashLoader from "react-spinners/HashLoader";

import useLocalStorage from "../../hooks/useLocalStorage";

const PersistLogin = () => {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        try {
          await refresh();
          setTrueSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }

    return () => (effectRan.current = true);

    // eslint-disable-next-line
  }, []);

  let content;
  if (!persist) {
    content = <Outlet />;
  } else if (isLoading) {
    content = <HashLoader color="fff" />;
  } else if (isError) {
    localStorage.setItem("isLogged", false);
    content = <ErrorInfo message={`${error?.error} - Please login again`} />;
  } else if ((isSuccess && trueSuccess) || (token && isUninitialized)) {
    localStorage.setItem("isLogged", true);
    content = <Outlet />;
  }

  return content;
};
export default PersistLogin;
