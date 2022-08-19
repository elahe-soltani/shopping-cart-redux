import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './CatgoriCard.module.css';
//images
import electronic from '../images/electronics.png';
import jewelery from '../images/jewelery.jpg';
import men from '../images/men.jpg';
import women from '../images/women.png';
const CatgoriCard = () => {
    return (
        <div className={styles.container}>
         <div>
            <img src={jewelery} alt="jewelery"/>
            <Link to={"/categori/jewelery"}>jewelery</Link>
            </div>
         <div>
            <img src={electronic} alt="electronic"/>
            <Link to={"/categori/electronics"}>electronic</Link>
          </div>
         <div>
         <img src={women} alt="women"/>
         <Link to={"/categori/women's clothing"}>women's clothing</Link> 
         </div>
         <div>
         <img src={men} alt="men"/>
         <Link to={"/categori/men's clothing"}>men's clothing</Link> 
         </div>
        </div>
    );
};

export default CatgoriCard;