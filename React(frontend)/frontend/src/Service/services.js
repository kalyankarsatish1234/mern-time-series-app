import axios from 'axios';
let baseURL='http://localhost:9000';
class Services{
    getData(){
        return axios.get(baseURL+'/getData')

    }    
}
export default new Services();
