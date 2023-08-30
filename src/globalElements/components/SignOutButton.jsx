import { StyledButton } from "../styles/Buttons.styled";
import { useLogoutMutation } from "../slices/authApiSlice";
import ErrorInfo from "../../pages/login/components/ErrorInfo";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function SignOutButton() {
  const [signOut, { isLoading, isError, error }] = useLogoutMutation();

  const navigate = useNavigate();

  const { setIsLogged } = useAuth();

  async function handleLogOut() {
    await signOut();
    if (isError) {
      return <ErrorInfo message={error} />;
    } else if (isLoading) {
      return <HashLoader color="fff" />;
    } else {
      setIsLogged(false);
      navigate("/");
      window.location.reload();
    }
  }

  return (
    <StyledButton style={{ marginLeft: "1rem" }} onClick={handleLogOut}>
      <p>Sign out</p>
    </StyledButton>
  );
}
