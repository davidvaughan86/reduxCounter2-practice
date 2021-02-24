import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import RootReducer from './reducers/rootReducer';

function App() {
  return (
    <div className="App">
      <RootReducer />
    </div>
  );
}

export default App;
