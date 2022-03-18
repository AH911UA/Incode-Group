import Card from "../card/card";
import { v4 as uid} from 'uuid';
import styles from './styles.module.css';
export default function CardList({stock}) {
    return (<div className={styles.cards}>
        {stock && stock.map(elem => <Card key={uid()} data={elem}/>)}
    </div>)
}