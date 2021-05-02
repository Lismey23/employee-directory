import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=15";
// const APIKEY = "SSCK-E7ZG-SHZG-JAA1";


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
