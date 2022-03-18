
import { useEffect, useState } from 'react';
import Arrow from '../icons/arrow/arrow';
import styles from './styles.module.css';

export default function Card({ data }) {

    const [stock, setStock] = useState();
    let direction = 'up';
    useEffect(() => {

    }, [data]);

    return (<div className={styles.card}>
        <div className={styles.card__arrow} style={{backgroundColor: direction === 'up' ? '#13733328' : '#c5221f28' }}>
            <Arrow direction={direction} />
        </div>
        <div className={styles.card__main_data}>
            <h3>{data?.ticker}</h3>
            <p>{data?.price}</p>
        </div>
        
        <div className={styles.card__secondary_data}>
            <p>{data?.change_percent}&nbsp;%</p>
            <p>{data?.change}</p>
        </div>

    </div>)
}