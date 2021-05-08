import axios from "./../../config/axios";

export default async (category) => {
  const result = await axios.post("/category/", category, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (result.status == 200) {
    return await result.data;
  }
  if (result.status == 400) {
    return { error: "Name is already taken." };
  }
  return { error: "Some error occurred in server side." };
};
