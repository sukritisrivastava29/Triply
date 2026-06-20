import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import AIPlanner from "./pages/AIPlanner";
import About from "./pages/About";
import Packages from "./pages/Packages";
import ForgotPass from "./pages/ForgotPass";
import Register from "./pages/Register";
import BookNow from "./pages/BookNow";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destination/:id" element={<DestinationDetails />} />
      <Route path="/ai-planner" element={<AIPlanner />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book" element={<BookNow />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;