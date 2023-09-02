import Pricing from './component/Task1/Pricing';
import Header from './component/header/Header';
import {BrowserRouter ,Route , Routes} from "react-router-dom";
import ShowTable from './component/Task2/ShowTable';

function App() {
  return (
    <BrowserRouter>
              <Header />  
              <Routes>
              <Route path="/" element={<Pricing />}/>
              <Route path="/task1" element={<Pricing />}/>
              <Route path="/task2" element={<ShowTable />}/>
              </Routes>
    </BrowserRouter>
  );
}

export default App;
