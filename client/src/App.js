import logo from './logo.svg';
import { useEffect } from 'react';
import ws from './ws';
import { useDispatch } from 'react-redux';
import CardsContainer from './containers/CardsContainer';
import ChartsContainer from './containers/chartsContainer/ChartsContainer';
 

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ws(dispatch)
  }, [dispatch]);

  return (
    <div className="App">
      <CardsContainer />
      <ChartsContainer />     
    </div>
  );
}

export default App;
