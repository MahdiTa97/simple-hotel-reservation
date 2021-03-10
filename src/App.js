import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Booking, Guest, Hotel, Payment, Room, Tables } from "./pages";
import Report from "./pages/Report";

function App() {
  return (
    <Router>
      <div>
        <header className="bg-red-300">
          <nav className="flex items-center justify-items-center py-4 px-3">
            <ul className="container flex flex-row gap-8 font-bold mx-auto">
              <li className="hover:text-red-500">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-red-500 font-light">
                <Link to="/Hotel">Hotel</Link>
              </li>
              <li className="hover:text-red-500 font-light">
                <Link to="/Room">Room</Link>
              </li>
              <li className="hover:text-red-500 font-light">
                <Link to="/Guest">Guest</Link>
              </li>
              <li className="hover:text-red-500 font-light">
                <Link to="/Payment">Payment</Link>
              </li>
              <li className="hover:text-red-500 font-light">
                <Link to="/Booking">Booking</Link>
              </li>
              <li className="hover:text-red-500 font-light">
                <Link to="/Booking">Personnel</Link>
              </li>
              <li className="hover:text-red-500 font-light">
                <Link to="/Booking">Tel</Link>
              </li>
              <li className="text-red-700 hover:text-gray-800 font-light">
                <Link to="/report">REPORTS</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Tables />
          </Route>
          <Route path="/hotel">
            <Hotel />
          </Route>
          <Route path="/room">
            <Room />
          </Route>
          <Route path="/guest">
            <Guest />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
