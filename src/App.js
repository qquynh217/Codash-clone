import logo from './logo.svg';
import './App.css';
import './route/components/Menu.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppRoutes } from "./route/AppRoutes"
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
