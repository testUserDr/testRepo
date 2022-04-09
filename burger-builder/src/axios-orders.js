import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://fir-udemy-example-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
