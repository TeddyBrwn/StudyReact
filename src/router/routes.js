import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../page/home";
import UseStatePage from "../page/UseStatePage";
import UseEffectFetchPage from "../page/UseEffectFetchPage";
import UseEffectAxiosPage from "../page/UseEffectAxiosPage";
import InputFormDataPage from "../page/InputFormDataPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Mặc định Home */}
        <Route path="/use-state" element={<UseStatePage />} />
        <Route path="/use-effect-fetch" element={<UseEffectFetchPage />} />
        <Route path="/use-effect-axios" element={<UseEffectAxiosPage />} />
        <Route path="/input-form-data" element={<InputFormDataPage />} />
        {/* Route cho About */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
