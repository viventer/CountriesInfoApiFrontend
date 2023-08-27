import { useGetApiKeysQuery } from "../slices/apiKeysSlice";

import { StyledGenerateApiKey } from "../styles/GenerateApiKey.styled";
import GenerateApiKeyButton from "./GenrateApiKeyButton";
import ErrorInfo from "../../login/components/ErrorInfo";
import HowToStartButton from "../../home/components/HowToStartButton";

import HashLoader from "react-spinners/HashLoader";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function GenerateApiKey() {
  const {
    data: apiKeys,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetApiKeysQuery();

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
    let listItems = Object.values(entities).map((entity, index) => (
      <li key={index}>
        {entity}
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ));
    apiKeysList = <ol>{listItems}</ol>;
    heading = <h2>Your API keys:</h2>;
  } else {
    heading = <h2>You don't have any API keys</h2>;
  }

  function handleDelete(id) {}

  const isMaxIdNumber = apiKeys?.ids?.length >= 3;
  return (
    <StyledGenerateApiKey>
      {heading}
      {otherContent || apiKeysList}
      {!isMaxIdNumber && <GenerateApiKeyButton />}
      <h3>Check how to use your API keys:</h3>
      <HowToStartButton />
    </StyledGenerateApiKey>
  );
}
