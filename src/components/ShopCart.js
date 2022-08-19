import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
// component
import Cart from '../shared/Cart';
//style
import styles from './ShopCart.module.css';
//action
import {clear , cheackout} from '../redux/cart/cartAction'
const ShopCart = () => {
    const state = useSelector (state => state.cartState);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <div className={styles.cardConteiner}>
               {state.selectItems.map(item=><Cart key= {item.id} data={item}/> )}
            </div>
            {
                state.itemCounter > 0  && <div className={styles.payments}>
                    <p><span>Total Items:</span>{state.itemCounter}</p>
                    <p><span>Total payments:</span>{state.total}</p>
                    <div className={styles.buttonContainer} >
                        <button className={styles.clear} onClick={()=> dispatch(cheackout())}>Check Out</button>
                        <button className={styles.checkout} onClick={()=> dispatch(clear())}>Clear</button>
                    </div>
                </div>
            }

            {
                state.cheackout && <div className={styles.complete}>
                    <h3>Check Out Successfully</h3>
                    <Link to="/products">Buy more</Link>
                    </div>
            }

            {
                !state.cheackout && state.itemCounter === 0 && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to shop</Link>
                    </div>
            }
        </div>
    );
};

export default ShopCart;