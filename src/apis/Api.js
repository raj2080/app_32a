import axios from "axios";

//creating backend configuration!

const Api = axios.create({
      // backend url
    baseURL : "http://localhost:5000" ,

    withCredentials : true,

    headers : {

        "Content-Type" : "application/json"
    }

})


//Test API
export const testApi = () => Api.get('/test')

  //http://localhost:5000/test