import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import tech from "../src/images/tech.png"
import SignIn from "./Authentication/SignIn";
import { useState, useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUser(user)
        console.log(user)
      }else{
        setUser("")
      }
    })
  }, []);

  return (
    <Router>
      {!user ? (
        <SignIn />
      ) : (
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/blog-webpage">
                <Home />
              </Route>
              <Route path="/blog-webpage/Create">
                <Create />
              </Route>
              <Route path="/blog-webpage/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            
          </div>

        </div>
      )}
    </Router>
  );
}

export default App;
