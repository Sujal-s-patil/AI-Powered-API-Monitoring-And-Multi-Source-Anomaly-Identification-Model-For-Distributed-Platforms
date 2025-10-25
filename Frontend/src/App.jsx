import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./app/Dashboard";
import LogsPage from "./components/Logs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
  <Route path="/logs" element={<LogsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
