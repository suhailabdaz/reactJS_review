import Dingolfi from "./components/Dingolfi";
import Desouza from "./components/Desouza";
import { BrowserRouter,Route,Routes } from "react-router-dom"; 


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dingolfi />} />
      <Route path="/desouza/:param" element={<Desouza />} />
    </Routes>
  </BrowserRouter>
  );
}



export default App;
