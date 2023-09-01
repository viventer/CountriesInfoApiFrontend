import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { useGenerateApiKeyMutation } from "../slices/apiKeysSlice";

import { StyledButton } from "../../../globalElements/styles/Buttons.styled";

export default function GenerateApiKeyButton() {
  const [getNewApiKey] = useGenerateApiKeyMutation();

  async function generateApiKey() {
    await getNewApiKey();
  }

  return (
    <StyledButton onClick={generateApiKey} className="flex generateNewButton">
      <FontAwesomeIcon icon={faPlusCircle} />
      <p>Generate new</p>
    </StyledButton>
  );
}
