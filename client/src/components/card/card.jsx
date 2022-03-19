
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrTicker } from '../../store/stock/stockReducer';
import Arrow from '../icons/arrow/arrow';
import styles from './styles.module.css';

let price = null;
export default function Card({ data }) {

    const dispatch = useDispatch();
    const ticker = useSelector(store => store.stock.currTicker);

    const [direction, setDirection] = useState('up');
    
    useEffect(() => {
        if (price) {
            setDirection(price <= data?.price 
                ? 'up' : 'down'); 
        }

        price = data.price;
    }, [data]);

    const handlerClick = () => dispatch(setCurrTicker(data?.ticker))

    return (<div className={`${styles.card} ${ticker === data?.ticker && styles.card_select}`} onClick={handlerClick}>
        <div className={styles.card__arrow} style={{backgroundColor: direction === 'up' ? '#13733328' : '#c5221f28' }}>
            <Arrow direction={direction} style={{transition: '0.3s'}}/>
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