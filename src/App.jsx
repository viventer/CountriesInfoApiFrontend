import { Routes, Route } from "react-router-dom";

import Layout from "./globalElements/components/Layout";
import Home from "./pages/home/components/Home";
import SignIn from "./pages/login/components/SignIn";
import SignUp from "./pages/login/components/SignUp";
import PersistLogin from "./globalElements/components/PersistLogin";
import RequireAuth from "./globalElements/components/RequireAuth";
import GenerateApiKey from "./pages/generateApiKey/components/GenerateApiKey";
import HowToStart from "./pages/howToStart/components/HowToStart";
import Missing from "./globalElements/components/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route index element={<Home />} />
        <Route path="howtostart" element={<HowToStart />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/generateapikey" element={<GenerateApiKey />} />
          </Route>
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
