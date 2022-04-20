import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from '../components/Signin';
import Auth from '../components/Auth';

const createRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default createRoutes;
