import axios from 'axios';
const URL = "http://localhost:8080/api/books";
const HEADERS = {
    'headers':{'Content-Type' : 'application/json'}
}
class BookService{

    getAll(){
        const API = URL;
        return axios.get(API,HEADERS);
    }

    get(id){
        const API = URL + "/" + id;
        return axios.get(API,HEADERS);
    }

    add(data){
        const API = URL;
        return axios.post(API,data,HEADERS);
    }

    update(data){
        const API = URL;
        return axios.put(API,data,HEADERS);
    }

    delete(id){
        const API = URL + "/" + id;
        return axios.delete(API,HEADERS);
    }



}


export default new BookService();