import axios from "./../../config/axios";

export default async (user) => {
  const result = await axios.post("/user/", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (result.status == 200) {
    return await result.data;
  }
  if (result.status == 400) {
    return { error: "Username already taken." };
  }
  return { error: "Some error occurred in server side." };
};
