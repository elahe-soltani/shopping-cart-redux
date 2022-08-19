import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// //component
import Product from '../shared/Product';
import CatgoriCard from '../shared/CatgoriCard';
import Loader from './Loader';
//redux
import {fetchProducts} from '../redux/products/productsAction'

//styles
import styles from './Store.module.css';

const Store = () => {
    const dispatch = useDispatch() ;
    const productsState = useSelector (state => state.productsState)

    useEffect (() =>{
      if(!productsState.products.length) dispatch(fetchProducts())
    } ,[])
    
    const projewlery=productsState.products.filter(item => item.category ==="jewelery")
    const prodigital=productsState.products.filter(item => item.category ==="electronics")
    const prowomen=productsState.products.filter(item => item.category ==="women's clothing")
    const promen=productsState.products.filter(item => item.category ==="men's clothing")
    return (
        <>
        
        <CatgoriCard />
        {
        productsState.loading ? 
        <Loader />
        :
        productsState.error ?
        <p>something wrong</p> :
        null
        }
        <div className={styles.name}>jewelery</div>
        <div className={styles.container}>
        
            {
                 projewlery.map(product => <Product 
                                       key={product.id}
                                       productData={product}
                                    />) 
                                   }
            
            
        </div>
        <div className={styles.name}>electric</div>
        <div className={styles.container}>
            {
                 prodigital.map(product => <Product 
                                       key={product.id}
                                       productData={product}
                                    />) 
                                   }
            
            
        </div>
        <div className={styles.name}>women clods</div>
        <div className={styles.container}>
            {
                 prowomen.map(product => <Product 
                                       key={product.id}
                                       productData={product}
                                    />) 
                                   }
            
            
        </div>
        <div className={styles.name}>men clods</div>
        <div className={styles.container}>
            {
                 promen.map(product => <Product 
                                       key={product.id}
                                       productData={product}
                                    />) 
                                   }
            
            
        </div>

        </>
        
    );
};

export default Store;