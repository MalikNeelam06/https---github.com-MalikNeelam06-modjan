// App.js
import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/item/:id" component={DetailPage} />
      </Routes>
    </Router>
  );
};

export default App;


