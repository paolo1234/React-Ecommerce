import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  console.log(props);
  return(<div>
    <h1>Ciao: {props.match.params.hatId}</h1>
    <Link to={`${props.match.url}/13`}> Hats </Link>
    <button onClick={() => props.history.push('/hats/12')}>12</button>
  </div>
  );
};

function App() {
  return (
    <div className="App">
      
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route path='/hats/:hatId' component={HatsPage}/>
    
    </div>
  );
}

export default App;
