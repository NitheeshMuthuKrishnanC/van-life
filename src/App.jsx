import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const currentYear = new Date();
  return (
    <>
      <header>
        <nav className="flex w-full justify-between items-center pr-4 pl-4 gap-8 bg-gray-200 text-black p-4">
          <h1 className="text-3xl font-bold font-['arial']">
            <Link to="/">#VANLIFE</Link>
          </h1>
          <ul className="flex gap-4 focus:underline">
            <li className="hover:underline font-['arial'] text-lg">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline font-['arial'] text-lg">
              <Link to="/vans">Vans</Link>
            </li>
          </ul>
        </nav>
      </header>
      <footer className="bg-gray-800 text-gray-200 w-full p-4 left-0 bottom-0 absolute text-center">
        <p> Ⓒ {currentYear.getFullYear()} #VANLIFE -Nitheeshmk</p>
      </footer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
