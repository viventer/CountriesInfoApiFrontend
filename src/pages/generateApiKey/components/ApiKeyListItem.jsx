import CopyToClipboard from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";

export function ApiKeyListItem({ index, apiKey, handleDelete }) {
  return (
    <li>
      <p>{`${apiKey.slice(0, 10)}...`}</p>
      <CopyToClipboard text={apiKey}>
        <button className="copyButton liButton" aria-label="copy to clipboard">
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
  );
}
