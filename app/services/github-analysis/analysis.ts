import axios from "axios";
import { responseType } from "./GithubAnalysis";

export const fetchData = async (
  username: string,
  setResponse: (value: object) => void,
  setStatus: (value: boolean) => void,
  setUser: (value: { username?: string; profilePhotoUrl?: string }) => void
) => {
  try {
    const fetch = axios.get(`/api/getUserInfo?username=${username}`);
    fetch
      .then((res) => {
        setResponse(res.data);
        setStatus(true);
      })
      .catch((error) => {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setResponse({ message: "User not found", errorCode: 404 });
          setStatus(false);
        } else if (
          axios.isAxiosError(error) &&
          error.response?.status === 405
        ) {
          setResponse({
            message: "User has no public repositories",
          });
          // Set user info
          setUser({
            username: username,
            profilePhotoUrl: error.response.data.profilePhotoUrl,
          });
          setStatus(false);
        } else {
          setStatus(false);
        }
      });
  } catch (error) {
    console.error(error);
  }
};

export const fetchValue = async (
  status: boolean | undefined,
  response: object | undefined,
  setAnalysisData: (value: responseType) => void,
  setUser: React.Dispatch<
    React.SetStateAction<{
      username?: string;
      profilePhotoUrl?: string;
    }>
  >
) => {
  if (status) {
    try {
      const fetchAnalysis = axios.post("/api/getGithubAnalysis", response);
      fetchAnalysis.then((res) => {
        setAnalysisData(res.data);
        setUser({
            username: res.data?.value.username,
            profilePhotoUrl: res.data?.value.profilePhotoUrl,
          });
      });
    } catch (error) {
      console.error(error);
    }
  } else if (status === false) {
    setAnalysisData({ ...response, status: false });
  }
};
