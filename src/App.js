import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import './app/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return(
    <div>
      <NavBar/>
      <ItemListContainer bienvenida="Welcome"/>
    </div>
  );
}

export default App;