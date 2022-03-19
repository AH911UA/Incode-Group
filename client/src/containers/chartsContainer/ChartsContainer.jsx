import { useDispatch, useSelector } from "react-redux";
import Charts from "../../components/charts/charts";
import { setCurrTicker } from "../../store/stock/stockReducer";
import styles from './styles.module.css';

export default function ChartsContainer() {
    const stocks = useSelector(store => store.stock.data);
    const dispatch = useDispatch();

    let ticker = useSelector(store => store.stock.currTicker);
    if (!ticker && stocks.length) {
        ticker = stocks[0][0]?.ticker;
        dispatch(setCurrTicker(ticker))
    }

    const data = stocks.reduce((curr, acc) => [...curr, 
        ...acc
            .filter(elem => elem.ticker === ticker)
            .map(elem => {
                const date = new Date(elem.last_trade_time);
                return {'date': `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`, 'price': elem.price}
            })
        ], []);
    return (<div className={styles.charts_container}>
        <Charts stocks={data} ticker={ticker}/>
    </div>)
}
