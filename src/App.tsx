import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegister from "./pages/userRegister";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-up" element={<UserRegister />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
