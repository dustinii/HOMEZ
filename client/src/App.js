import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Ride from "./pages/Ride";
import Drive from "./pages/Drive";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Reviews from "./pages/Reviews";
import Developers from "./pages/Developers";
import Footer from "./components/Footer";
// import Image from "./components/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/drive" element={<Drive />} />
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          <Route path="/developers" element={<Developers />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
