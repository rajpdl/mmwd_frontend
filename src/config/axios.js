import axios from "axios";
const { DEV_URL } = require("./static_config");
export default axios.create({ baseURL: DEV_URL });
