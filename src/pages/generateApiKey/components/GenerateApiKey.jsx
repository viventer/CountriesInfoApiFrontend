import { useGetApiKeysQuery } from "../slices/apiKeysSlice";
import { selectAllApiKeys } from "../slices/apiKeysSlice";

import { StyledGenerateApiKey } from "../styles/GenerateApiKey.styled";
import GenerateApiKeyButton from "./GenrateApiKeyButton";
import ErrorInfo from "../../login/components/ErrorInfo";

import HashLoader from "react-spinners/HashLoader";

export default function GenerateApiKey() {
  const {
    data: apiKeys,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetApiKeysQuery();

  console.log(apiKeys);

  let otherContent;
  let apiKeysList;
  let heading;
  let isAnyApiKey = apiKeys?.ids?.length;
  if (isLoading) {
    otherContent = (
      <div className="flex">
        <HashLoader color="fff" />
      </div>
    );
  } else if (isError) {
    otherContent = <ErrorInfo message={error} />;
  } else if (isAnyApiKey) {
    const { entities } = apiKeys;
    const listItems = Object.values(entities).map((entity, index) => (
      <li key={index}>{entity}</li>
    ));
    apiKeysList = <ol>{listItems}</ol>;
    heading = <h2>Your API keys:</h2>;
  } else {
    heading = <h2>You don't have any API keys</h2>;
  }

  return (
    <StyledGenerateApiKey>
      {heading}
      {otherContent || apiKeysList}
      <GenerateApiKeyButton />
    </StyledGenerateApiKey>
  );
}
