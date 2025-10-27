"use client"; // Ensure this is a Client Component

import React from "react";
import { Provider } from "react-redux";
import {store} from "../app/store";

const ProviderWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
