import React, {useContext} from 'react';
import { Link , useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//styles
import styles from './ProductDetails.module.css';

const ProductDetalis = () => {
    const params = useParams();
    const id=params.id;
    const data=useSelector(state => state.productsState.products);
    const product=data[id-1];
    const {image , title , description , price , category }= product;
    return (
        <div className={styles.container}>
            
            <img src={image} className={styles.image} alt='products' />
            <div className={styles.textContainer}>
            <div className={styles.content}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}><span>Category : </span>{category}</p>
            </div>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to='/products'>Back to shop</Link>

            </div>
            </div>
        </div>
    );
};

export default ProductDetalis;