import axios from "./../../config/axios";

export default async (article) => {
  const result = await axios.post("/article/", article, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log('i am raja create article.');
  if (result.status == 200) {
    return await result.data;
  }
  if (result.status == 400) {
    return { error: "Title already taken." };
  }
  return { error: "Some error occurred in server side." };
};
