import React from 'react';
import LogoBurger from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) =>(
    <div className={classes.Logo}>
        <img src={LogoBurger} alt="MyBurger"/>
    </div>
);


export default logo;