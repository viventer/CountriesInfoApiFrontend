import { useSelector } from "react-redux";
import { selectCurrentToken } from "../globalElements/slices/authSlice";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isEditor = false;
  let isAdmin = false;
  let status = "User";

  if (token) {
    const decoded = jwtDecode(token);
    console.log(decoded);
    const { username, roles } = decoded.UserInfo;

    isEditor = roles?.editor ? true : false;
    isAdmin = roles?.admin ? true : false;

    if (isAdmin) status = "Admin";
    if (isEditor) status = "Editor";

    return { username, roles, status, isEditor, isAdmin };
  }

  return { username: "", roles: {}, isEditor, isAdmin, status };
};
export default useAuth;
