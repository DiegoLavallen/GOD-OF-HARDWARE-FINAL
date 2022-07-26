
import './App.css'; 
import NavBar from './Components/NavBar.js'; 
import ItemListContainer from './Components/ItemListContainer.js' 
 
 
function App() { 
  return ( 
    <> 
      <header> 
      <NavBar /> 
      </header> 
       
     <ItemListContainer greeting='Hola, bienvenidos a GOD OF HARDWARE' /> 
 
    </> 
         
 
   
  ); 
} 
 
 
export default App;
