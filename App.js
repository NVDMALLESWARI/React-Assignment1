
import './App.css';
import Header from './Header';
import Products from './Products';
function App() {

  function doSomething(data){
    console.log("clicked"+data)
  }
  return (
    <div className="App">
      
      <Header></Header>
      <Products />
      
      {/* <Product></Product>  */}
      <button className='btn' onClick={()=>{doSomething("malli")}}>Click</button>
    </div>
    
  );
}

export default App;
