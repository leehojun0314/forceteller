import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="result" element={<Result />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
