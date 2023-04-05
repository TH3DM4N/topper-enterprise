import React from "react";
import { useEffect, useState } from "react";
import { View, withAuthenticator } from "@aws-amplify/ui-react";
import Navbar from "../components/AppBar";

import { Auth } from "aws-amplify";

function SearchUsersPage() {
  useEffect(() => {}, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default withAuthenticator(SearchUsersPage);
