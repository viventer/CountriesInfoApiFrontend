import { ApiKeyListItem } from "./ApiKeyListItem";
import { useState } from "react";

import HashLoader from "react-spinners/HashLoader";

import {
  useDeleteApiKeyMutation,
  useGetApiKeysQuery,
} from "../slices/apiKeysSlice";

import { StyledGenerateApiKey } from "../styles/GenerateApiKey.styled";
import GenerateApiKeyButton from "./GenerateApiKeyButton";
import ErrorInfo from "../../../globalElements/components/ErrorInfo";
import HowToStartButton from "../../home/components/HowToStartButton";

export default function GenerateApiKey() {
  const [errorMsg, setErrorMsg] = useState();

  const {
    data: apiKeysRawData,
    isLoading: isGetLoading,
    isError: isGetError,
    error: getError,
  } = useGetApiKeysQuery();

  let loader;
  let isAnyApiKey = apiKeysRawData?.ids?.length;
  let apiKeysList;
  if (isGetLoading) {
    loader = (
      <div className="flex">
        <HashLoader color="fff" />
      </div>
    );
  } else if (isGetError) {
    setErrorMsg(getError);
  } else if (isAnyApiKey) {
    const { entities: apiKeys } = apiKeysRawData;
    const listItems = getListItems(apiKeys);
    apiKeysList = <ol>{listItems}</ol>;
  }

  function getListItems(apiKeys) {
    return Object.values(apiKeys).map((apiKey, index) => (
      <ApiKeyListItem
        key={index}
        index={index}
        apiKey={apiKey}
        handleDelete={handleDelete}
      />
    ));
  }

  const [removeApiKey, { isError: isDeleteError, error: deleteError }] =
    useDeleteApiKeyMutation();

  async function handleDelete(id) {
    await removeApiKey(id);
    if (isDeleteError) {
      setErrorMsg(deleteError.data.message);
    }
  }

  const isMaxIdNumber = apiKeysRawData?.ids?.length >= 3;
  const heading = apiKeysList ? (
    <h2>
      Your API keys <span>[max. 3]</span>
    </h2>
  ) : (
    <h2>You don't have any API keys</h2>
  );
  return (
    <StyledGenerateApiKey>
      {heading}
      {errorMsg && <ErrorInfo message={errorMsg} />}
      {loader || apiKeysList}
      {!isMaxIdNumber && <GenerateApiKeyButton />}
      <h2>Check how to use your API keys</h2>
      <HowToStartButton />
    </StyledGenerateApiKey>
  );
}
