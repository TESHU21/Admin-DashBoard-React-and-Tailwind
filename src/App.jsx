import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Transaction from "./pages/Transaction";
import Messages from "./pages/Messages";
import Settings from "./pages/detailpages/Settings";
import Profile from "./pages/detailpages/Profile";

import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
              <Route path="customers" element={<Customers />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="messages" element={<Messages />} />
            </Route>
            <Route path="login" element={<div>This the log in page</div>} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
