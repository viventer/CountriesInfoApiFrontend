import { Routes, Route } from "react-router-dom";

import Layout from "./globalElements/components/Layout";
import Home from "./pages/home/components/Home";
import SignIn from "./pages/login/components/SignIn";
import SignUp from "./pages/login/components/SignUp";
import Unauthorized from "./globalElements/components/Unauthorized";
import PersistLogin from "./globalElements/components/PersistLogin";
import RequireAuth from "./globalElements/components/RequireAuth";
import GenerateApiKey from "./pages/generateApiKey/components/GenerateApiKey";
import HowToStart from "./pages/howToStart/components/HowToStart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="howtostart" element={<HowToStart />} />

        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="/generateapikey" element={<GenerateApiKey />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
