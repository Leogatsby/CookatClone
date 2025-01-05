import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<div>쿠켓신공 페이지</div>} />
        <Route path="/best" element={<div>베스트 페이지</div>} />
        <Route path="/new-items" element={<div>신상품 페이지</div>} />
        <Route path="/discount" element={<div>할인중 페이지</div>} />
        <Route path="/events" element={<div>이벤트 페이지</div>} />
      </Routes>
    </Router>
  );
}

export default App;
