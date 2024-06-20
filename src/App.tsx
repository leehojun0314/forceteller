import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
// import Home from "@/pages/Home";
import Result from "@/pages/Result";
import Profile from "@/pages/Profile";
import Confirm from "@/pages/Confirm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Profile />} />
            <Route path="/profile/confirm" element={<Confirm />} />
            <Route path="result" element={<Result />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
