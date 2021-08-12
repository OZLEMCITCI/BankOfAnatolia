import axios from "axios"

const BASE_URL = "http://localhost:8081";

class BankService{
    resgister(userInfo) {
        return axios.post(BASE_URL+"auth/register",userInfo)
    }
}

export default new BankService();