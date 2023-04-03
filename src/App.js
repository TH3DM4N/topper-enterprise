import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

import HomePage from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import CreatePostPage from "./pages/CreatePostPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createpost" element={<CreatePostPage />} />
    </Routes>
  );
}

export default withAuthenticator(App);
