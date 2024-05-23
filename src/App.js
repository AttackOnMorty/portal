import { Divider } from "antd";
import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Topics from "./components/Topics";

const App = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex flex-1 justify-center">
        <div className="flex flex-1 flex-col max-w-5xl">
          <SearchInput />
          <Topics />
        </div>
      </div>
      <Divider />
      <Footer />
    </div>
  );
};

export default App;
