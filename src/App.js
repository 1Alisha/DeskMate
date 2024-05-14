import './App.css';
import Home from "./components/Home.js"
import EditorPage from "./components/EditorPage.js"
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/editor/:roomId' element={<EditorPage/>}/>

      
    </Routes>
    </>
  );
}

export default App;
