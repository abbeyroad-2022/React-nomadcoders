//import CoinTracker from "./components/CoinTracker";
//import TodoList from "./components/TodoList";
//import MovieApp from "./components/MovieApp";
//import Test from "./components/Test";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//예전버전import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'
import Detail from './routes/Detail';
import Home from './routes/Home';
import Test2 from "./components/Test2";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Link to={`/movieClass/`}>Test2</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/movieClass/" element={<Test2 />} />
      </Routes>
    </Router>
  )
};

export default App;