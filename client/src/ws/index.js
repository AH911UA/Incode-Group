import { io } from "socket.io-client";
import { setStock } from "../store/stock/stockReducer";

const ENDPOINT = 'http://localhost:4000';
const socket = io(ENDPOINT);

socket.emit('start');

export default function ws(dispatch) {
    
    socket.on('ticker', (data) => {
        if (Array.isArray(data)) {
            dispatch(setStock(data));
        }
    });

    socket.on("disconnect", () => {
        socket.connect();
    });
}
