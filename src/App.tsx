import { useState } from "react";
import Logo from "./components/Logo";
import { Login } from "./pages/Login";
import { UserPage } from "./pages/UserPage";
import { Divider, Typography } from "@mui/material";
import { Routes, Route, Link, Navigate } from "react-router-dom";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minWidth: "100%",
        backgroundColor: "white",
        marginInline: "0px",
        padding: "8px 16px",
        marginBlockEnd: "32px"
      }}
    >
      <div
        style={{
          minWidth: "100%",
          marginInline: "0px",
          marginBottom: "16px",
          paddingInline: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "2px"
        }}
      >
        <Logo loggedIn={loggedIn} />
        <Divider />
        <Routes>
          <Route
            path="/"
            element={
              !loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <UserPage />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
