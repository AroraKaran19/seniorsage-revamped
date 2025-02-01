import axios from "axios";

export const fetchResumeAnalysis = async (file: File, setResumeData: (data: object | null) => void) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    // how to check time taken to fetch data
    const start = Date.now();
    await axios.post("/api/getResumeAnalysis", formData).then((res) => {
      setResumeData(res.data);
    });
    return (Date.now() - start) / 1000;
  } catch (error) {
    console.error(error);
		return { message: "Error in fetching resume analysis" };
  }
};
