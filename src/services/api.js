import axios from 'axios';

const BASE_URL="https://fakestoreapi.com";

const getProuducts= async ()=>{
   const response= await axios.get(`${BASE_URL}/products`);
   return response.data
}
export {getProuducts}