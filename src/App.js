import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Register from "./components/Register";
import Layout from './layouts/Layout';




function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>

  );
}



export default App;
