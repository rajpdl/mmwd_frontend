import axios from "./../../config/axios";

export default async (user) => {
  const result = await axios.post(`/user/${user._id}`, user, {
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
    return { error: "User not found." };
  }
  return { error: "Some error occurred in server side." };
};
