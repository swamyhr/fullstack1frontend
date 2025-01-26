import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ViewUser from './user/ViewUser';
import AddOrEditUser from './user/AddOrEditUser';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/addOrEditUser/:id" element={<AddOrEditUser/>}/>
          {/* <Route exact path="/editUser/:id" element={<EditUser/>}/> */}
          <Route exact path="/view" element={<ViewUser/>}/>
        </Routes>
      </Router>

      {/* <Home/> */}
    </div>
  );
}

export default App;
