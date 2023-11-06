import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Screen1 from "./pages/screen1/screen1";
import Screen2 from "./pages/screen2/screen2";
import Screen3 from "./pages/screen3/screen3";
import Screen4 from "./pages/screen4/screen4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/screen1" />} />
        <Route path="screen1" element={<Screen1 />} />
        <Route path="screen2" element={<Screen2 />} />
        <Route path="screen3" element={<Screen3 />} />
        <Route path="screen4" element={<Screen4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
