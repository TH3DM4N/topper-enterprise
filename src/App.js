import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

import HomePage from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import CreatePostPage from "./pages/CreatePostPage";
import OnBoardPage from "./pages/OnBoardPage";

import { Routes, Route } from "react-router-dom";
import SearchUsers from "./pages/SearchUsers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnBoardPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createpost" element={<CreatePostPage />} />
      <Route path="/search" element={<SearchUsers />} />
    </Routes>
  );
}

export default withAuthenticator(App);
