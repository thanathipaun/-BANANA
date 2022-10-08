import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Layout from './layouts/Layout';




function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="navbar" element={<Dashboard />} />
        </Route>
          <Route path="login" element={<Login />} />
      </Routes>

  );
}



export default App;
