import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          {/* <div> */}
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create></Create>} />
          {/* </div> */}
          {/* <div style={{ marginTop: 20 }}> */}
          {/* <Route path="/read" element={<Read />} /> */}
          {/* </div> */}

          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
