import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import RootReducer from './reducers/rootReducer';
import ReduxCounter from './reduxCounter';
import {useState} from 'react'


function App() {
    const [count, setCount] = useState(0)


  return (
    <div className="App">
      <h1 className="appcounter">
        app counter
      </h1>
      <p className="appcounter2">
        count {count}
      </p>
      <button onClick={() => setCount(count+1)}className="buttons">
        INCREMENT
      </button>
      <button onClick={()=> setCount(count-1)}className="buttons">
        DECREMENT
      </button>
      <ReduxCounter />
    </div>
  );
}

export default App;
