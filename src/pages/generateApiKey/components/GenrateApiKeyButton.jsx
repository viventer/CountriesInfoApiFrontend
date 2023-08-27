import { StyledGenerateApiKeyButton } from "../styles/GenerateApiKey.styled";
import { useGenerateApiKeyMutation } from "../slices/apiKeysSlice";

export default function GenerateApiKeyButton() {
  const [getNewApiKey, { data: apiKey, isLoading, isSuccess, isError, error }] =
    useGenerateApiKeyMutation();

  async function generateApiKey() {
    const response = await getNewApiKey();
    console.log(response);
  }

  return (
    <StyledGenerateApiKeyButton onClick={generateApiKey}>
      <p>GENERATE NEW</p>
    </StyledGenerateApiKeyButton>
  );
}
