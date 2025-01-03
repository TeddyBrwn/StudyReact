import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Main content, chiếm toàn bộ không gian còn lại */}
      <main className="flex flex-grow justify-center items-center">
        <Outlet />
      </main>

      {/* Footer luôn nằm dưới */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
