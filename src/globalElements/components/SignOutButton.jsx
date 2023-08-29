import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "../styles/Buttons.styled";
import { useLogoutMutation } from "../slices/authApiSlice";
import ErrorInfo from "../../pages/login/components/ErrorInfo";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";

export default function SignOutButton() {
  const [signOut, { data, isLoading, isError, error, isSuccess }] =
    useLogoutMutation();

  const navigate = useNavigate();

  async function handleLogOut() {
    await signOut();
    if (isError) {
      return <ErrorInfo message={error} />;
    } else if (isLoading) {
      return <HashLoader color="fff" />;
    } else if (isSuccess) {
      localStorage.setItem("isLogged", false);
      navigate("/");
    }
  }

  return (
    <StyledButton style={{ marginLeft: "1rem" }} onClick={handleLogOut}>
      <p>Sign out</p>
    </StyledButton>
  );
}
