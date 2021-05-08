import axios from "./../../config/axios";

export default async (_id) => {
  const result = await axios.delete(`/category/${_id}`);
  console.log(result);
  if (result.status == 200) {
    return true;
  }
  if (result.status == 400) {
    return { error: "Id is not valid." };
  }
  if (result.status == 404) {
    return { error: "Category not found." };
  }
  return { error: "Some error occurred in server side." };
};
