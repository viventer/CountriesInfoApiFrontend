import { useGenerateApiKeyMutation } from "../slices/apiKeysSlice";
import { StyledButton } from "../../../globalElements/styles/Buttons.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function GenerateApiKeyButton() {
  const [getNewApiKey, { data: apiKey, isLoading, isSuccess, isError, error }] =
    useGenerateApiKeyMutation();

  async function generateApiKey() {
    const response = await getNewApiKey();
    console.log(response);
  }

  return (
    <StyledButton onClick={generateApiKey} className="flex">
      <FontAwesomeIcon icon={faPlusCircle} />
      <p className="bold">Generate new</p>
    </StyledButton>
  );
}
