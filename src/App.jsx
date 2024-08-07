import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Protected from "./components/Protected.jsx";
import Profile from "./pages/Profile.jsx";
import OpenRoute from "./components/OpenRoute.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"#f0f0f5", overflowX:"hidden"}}>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
