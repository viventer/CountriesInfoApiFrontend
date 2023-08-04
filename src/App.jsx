import { Routes, Route } from "react-router-dom";

import Layout from "./globalElements/components/Layout";
import Main from "./pages/main/components/Main";
import SignIn from "./pages/login/components/SignIn";
import SignUp from "./pages/login/components/SignUp";
import Unauthorized from "./globalElements/components/Unauthorized";
import PersistLogin from "./globalElements/components/PersistLogin";
import RequiredAuth from "./globalElements/components/RequiredAuth";
import GenerateApiKey from "./pages/generateApiKey/components/GenerateApiKey";
import HowToStart from "./pages/howToStart/components/HowToStart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="howtostart" element={<HowToStart />} />

        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequiredAuth />}>
            <Route path="/generateapikey" element={<GenerateApiKey />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;