import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=gender,name,email,picture";
// const APIKEY = "SSCK-E7ZG-SHZG-JAA1";


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
