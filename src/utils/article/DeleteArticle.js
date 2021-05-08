import axios from "./../../config/axios";

export default async (_id) => {
  const result = await axios.delete(`/article/${_id}`);
  if (result.status == 200) {
    return true;
  }
  if (result.status == 400) {
    return { error: "Id is not valid." };
  }
  if (result.status == 404) {
    return { error: "Article not found." };
  }
  return { error: "Some error occurred in server side." };
};
