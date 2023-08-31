import './App.css';
import Pricing from './component/Task1/Pricing';
import DataTable from './component/Task2/DataTable';
import Header from './component/Header';
import {BrowserRouter ,Route , Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
              <Header />  
              <Routes>
              <Route path="/" element={<Pricing />}/>
              <Route path="/task1" element={<Pricing />}/>
              <Route path="/task2" element={<DataTable />}/>
              </Routes>
              
    </BrowserRouter>
  );
}

export default App;
