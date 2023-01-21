import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CheckoutPage from "./pages/checkout";

export default function RoutesComponents() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
