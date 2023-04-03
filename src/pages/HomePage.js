import React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { View, withAuthenticator } from "@aws-amplify/ui-react";

import Navbar from "../components/AppBar";
import Feed from "./Feed";

function HomePage() {
  return (
    <View className="App">
      <Navbar />
      <Feed />
    </View>
  );
}

export default withAuthenticator(HomePage);
