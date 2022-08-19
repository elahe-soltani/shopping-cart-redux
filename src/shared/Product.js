import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector , useDispatch} from "react-redux"
//function
import { shorten , isInCart , quantityCount }  from '../helpers/function';
//icons
import trashIcon from '../assets/icons/trash.svg';
//styles
import styles from './Product.module.css';
//Actions
import {addItem , removeItem , decrease , increase} from "../redux/cart/cartAction"
const Product = ({productData}) => {
    const state = useSelector (state => state.cartState);
    const dispatch= useDispatch();

    return (
        <div className={styles.container}>
            <img src={productData.image} alt='product' className={styles.cardImage}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Ditals</Link>
                <div className={styles.buttonContainer}>
                    {
                        isInCart(state , productData.id)?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}> ADD to cart</button>
                    }
                    {quantityCount (state , productData.id) > 1  && <button className={styles.smallButton} onClick={ ()=> dispatch(decrease(productData))}>-</button> }
                    {quantityCount (state, productData.id) === 1 && <button className={styles.smallButton} onClick={()=> dispatch(removeItem(productData))}><img src={trashIcon} alt='trash' style={{width:"15px"}}/></button>}
                    {quantityCount (state , productData.id) >0 && <span className={styles.counter}>{quantityCount(state , productData.id)}</span>}
                </div>
            </div>
        </div>
    );
};

export default Product;