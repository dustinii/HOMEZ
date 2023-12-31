import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from "@apollo/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Ride from "./pages/Ride";
import PastDrives from "./pages/PastDrives";
import Drive from "./pages/Drive";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OneRide from "./pages/OneRide";
// import Reviews from "./pages/Reviews";
import Developers from "./pages/Developers";
import Footer from "./components/Footer";
import LoginHomez from "./pages/Login"
import SignupHomez from "./pages/Signup";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Donate from "./pages/Donate";
import { setContext } from '@apollo/client/link/context';
import "./App.css"

// import Image from "./components/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Ride />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/ride" element={<Ride />} /> */}
          <Route path="/drive" element={<Drive />} />
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          <Route path="/developers" element={<Developers />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rides/:rideId" element={<OneRide />} />
          <Route path="/pastrides" element={<PastDrives />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
