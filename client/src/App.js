import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ws from './ws';
import { useDispatch } from 'react-redux';
 
function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    ws(dispatch)
  }, [dispatch])

  return (
    <div className="App">
       
    </div>
  );
}

export default App;
