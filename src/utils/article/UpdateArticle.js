import axios from "./../../config/axios";

export default async (article) => {
  const result = await axios.post(`/article/${article._id}`, article, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (result.status == 200) {
    return await result.data;
  }
  if (result.status == 400) {
    return { error: "Id is not valid." };
  }
  if (result.status == 404) {
    return { error: "Article not found." };
  }
  return { error: "Some error occurred in server side." };
};
