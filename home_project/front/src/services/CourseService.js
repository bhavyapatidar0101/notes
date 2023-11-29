import axios from "axios";

const URL = "http://localhost:8081/course";
const HEADER = {"headers":{"Content-Type":"application/json"}};

class CourseService{

    add(data){
        const API = URL;
        return axios.post(API,data,HEADER);
    }

    delete(id){
        const API = URL + "/"+id;
        return axios.delete(API,HEADER);
    }

    update(data){
        const API = URL;
        return axios.put(API,data,HEADER);

    }
    getAll(){
        const API = URL+"/all";
        return axios.get(API,HEADER);

    }

}
export default new CourseService();