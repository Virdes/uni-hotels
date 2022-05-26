import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/featured" element={<Featured/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
