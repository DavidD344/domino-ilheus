import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/fotos" element={<Fotos />}></Route> */}
    </Routes>
  );
}

export default App;
