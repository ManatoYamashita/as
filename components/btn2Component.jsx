import React from 'react';
import styles from '../styles/btnComponent.module.css';

function Btn2({ text, onClick }) {
    return (
        <button className={styles.button2} onClick={onClick}>{text}</button>
    );
}

export default Btn2;
