import axios from "./../../config/axios";

export default async () => {
    const result = await axios.get('/article/all');
    if(result.status == 200) {
        return await result.data;
    }
    return {error: 'Some error occurred in server side.'};
}