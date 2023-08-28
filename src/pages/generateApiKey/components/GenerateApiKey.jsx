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
        <p>{`${entity.slice(0, 10)}...`}</p>
        <CopyToClipboard text={entity}>
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
    apiKeysList = <ol>{listItems}</ol>;
    heading = (
      <h2>
        Your API keys <span>[max. 3]</span>
      </h2>
    );
  } else {
    heading = <h2>You don't have any API keys</h2>;
  }

  const [
    removeApiKey,
    {
      data: message,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
      error: deleteError,
    },
  ] = useDeleteApiKeyMutation();

  async function handleDelete(id) {
    const response = await removeApiKey(id);
  }

  const isMaxIdNumber = apiKeys?.ids?.length >= 3;
  return (
    <StyledGenerateApiKey>
      {heading}
      {otherContent || apiKeysList}
      {!isMaxIdNumber && <GenerateApiKeyButton />}
      <h2>Check how to use your API keys</h2>
      <HowToStartButton />
    </StyledGenerateApiKey>
  );
}
