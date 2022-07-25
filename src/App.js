import './style/style.css';
import React,{useState} from 'react';
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';

const App = () => {
  const [loginToken, setLoginToken] = useState(false);

  return (
    <div className="App">
      {
        loginToken ? <ProductList setLoginToken={setLoginToken} /> : <LoginForm setLoginToken={setLoginToken}/>
      }
    </div>
 );
}

export default App;
