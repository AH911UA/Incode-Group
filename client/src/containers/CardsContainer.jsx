import { useSelector } from "react-redux"
import CardList from "../components/cardList/cardList";


export default function CardsContainer() {
    const stock = useSelector(store => store.stock.data);
    return <CardList stock={stock}/>
}