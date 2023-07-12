import React from "react"
import Signup from "./Signup"
// import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ForumPage from "./InputData/Input"
import ImageCard from "./Display/ImageCard"
import BlogForm from "./Add/Add"
function App() {
  return (
   
      // <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path='/Details' component={ForumPage}/>
              <Route path='/Blog' component={ImageCard}/>
              <Route path='/Add' component={BlogForm}/>
            </Switch>
          </AuthProvider>
        </Router>
      // </div>
    
  )
}

export default App
