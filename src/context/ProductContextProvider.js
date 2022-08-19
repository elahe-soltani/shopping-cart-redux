import React, {useState , useEffect , createContext} from 'react';
//api
import {getProuducts} from '../services/api';

export const productContext = createContext();
const ProductContextProvider = ({children}) => {

    const [products , setProducts] = useState ([]);

    useEffect (()=>{
        const fetchApi = async () => {
           setProducts (await getProuducts()); 
        }
        fetchApi();

    },[])


    return (
        <productContext.Provider value={products}>
          {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;