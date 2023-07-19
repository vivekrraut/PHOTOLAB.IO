import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Favourite from "./Components/Favourites/Favourite";
import Contact from "./Components/Contact/Contact";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/albums" element={<Gallery />} />
            <Route path="/favorites" element={<Gallery />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
