import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contacts,
  Login,
  Profile,
  Signup,
  NotFound,
} from "./pages";
import { Navbar, Footer, Protected } from "./components";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
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
      <Footer />
    </div>
  );
}

export default App;
