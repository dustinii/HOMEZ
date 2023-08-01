import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Ride from "./pages/Ride";
import Drive from "./pages/Drive";
import Footer from "./components/Footer";
import LoginHomez from "./pages/Login"
import SignupHomez from "./pages/Signup";

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
          <Route path="/login" element={<LoginHomez />}/>
          <Route path="/signup" element={<SignupHomez />}/>
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
