import React from "react";
// import { Card, Button, Alert } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
// import {  useHistory } from "react-router-dom";
// import ForumPage from "./InputData/Input";
import ProfilePage from "./Profile/Profile";
export default function Dashboard() {
  // const [error, setError] = useState("");
  // const { currentUser, logout } = useAuth();
  // const history = useHistory();

  // async function handleLogout() {
  //   setError("");

  //   try {
  //     await logout();
  //     history.push("/login");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

  return (
    <>
      <ProfilePage/>
    </>
  );
}
