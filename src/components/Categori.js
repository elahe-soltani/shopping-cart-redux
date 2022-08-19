import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
//context
import { productContext } from '../context/ProductContextProvider';
//component
import Product from '../shared/Product';
//styles
import styles from './Categori.module.css';

const Categori = () => {
    const state=useSelector(state=> state.productsState);
    const params=useParams();
    const cat=params.cat;
    const pro=state.products.filter(item => item.category === cat)
    console.log(pro)
    
    return (
        <div>
            <div className={styles.container}>
            {
            pro.map(product => <Product 
                                key={product.id}
                                productData={product}
                                    />) 
                                   }
            
        </div>
        </div>
    );
};

export default Categori;