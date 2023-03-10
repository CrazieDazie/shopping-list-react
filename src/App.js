import './App.css';
import image from './shoppingbag.jpg';
import { ShoppingList } from './ShoppingList';

function App() {
  return (
    <div>
    
    <div className="app">
      <img src={ image } width="400px" alt="shopping" className='imgOne'/>
      <div className='container'>
      <h1>Shopping List</h1>
      </div>
      <ShoppingList/>
      

    </div>
    </div>
  );
}

export default App;
