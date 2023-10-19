import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegister from "./pages/userRegister";
import GetStarted from "./pages/getStarted";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="sign-up" element={<UserRegister />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
