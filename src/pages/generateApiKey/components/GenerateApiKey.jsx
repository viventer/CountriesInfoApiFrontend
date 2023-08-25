import { useGetApiKeysQuery } from "../slices/apiKeysSlice";
import { StyledGenerateApiKey } from "../styles/GenerateApiKey.styled";

import HashLoader from "react-spinners/HashLoader";

export default function GenerateApiKey() {
  const {
    data: apiKeys,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetApiKeysQuery();

  let content;

  if (isLoading) content = <HashLoader color="fff" />;

  return <StyledGenerateApiKey></StyledGenerateApiKey>;
}
