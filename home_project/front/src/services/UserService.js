import axios from 'axios';

const URL = "http://localhost:8081/user";
const HEADER = {"headers":{"Content-Type":"application/json"}};

class UserService{

    login(data){
        const API = URL + "/login";
        return axios.post(API,data,HEADER);
    }

    register(data){
        const API = URL ;
        return axios.post(API,data,HEADER);
    }

    isLoggedin(){
        let id = localStorage.getItem("id");
        if(id==undefined){
            return false;
        }
        else{
            return true;
        }
    }

}

export default new UserService();