import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./Home";
import Editor from "./Editor";
import { pageLoad } from "./redux/actions/pageAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/editor/:pageId" element={<Editor />}></Route>
      </Routes>
    </Router>
  );
}

export default App;