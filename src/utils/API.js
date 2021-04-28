import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "SSCK-E7ZG-SHZG-JAA1";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
