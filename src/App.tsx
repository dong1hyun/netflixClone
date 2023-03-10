import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Routes/Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies/:movieId" element={<Home />} />
        </Route>
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App;