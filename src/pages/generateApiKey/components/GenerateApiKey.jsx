import {
  useDeleteApiKeyMutation,
  useGetApiKeysQuery,
} from "../slices/apiKeysSlice";

import { StyledGenerateApiKey } from "../styles/GenerateApiKey.styled";
import GenerateApiKeyButton from "./GenrateApiKeyButton";
import ErrorInfo from "../../login/components/ErrorInfo";
import HowToStartButton from "../../home/components/HowToStartButton";

import HashLoader from "react-spinners/HashLoader";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyToClipboard from "react-copy-to-clipboard";

import { useState } from "react";

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
      <li key={index}>
        <p>{`${apiKey.slice(0, 10)}...`}</p>
        <CopyToClipboard text={apiKey}>
          <button
            className="copyButton liButton"
            aria-label="copy to clipboard"
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </CopyToClipboard>
        <button
          onClick={() => handleDelete(index)}
          className="deleteButton liButton"
          aria-label="delete"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    ));
  }

  const [
    removeApiKey,
    { isSuccess: isDeleteSuccess, isError: isDeleteError, error: deleteError },
  ] = useDeleteApiKeyMutation();

  async function handleDelete(id) {
    const response = await removeApiKey(id);
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
