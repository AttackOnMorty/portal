import { GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";

import Logo from "../assets/logo.png";

const Header = () => (
  <header className="px-6 sm:px-14 py-4 flex justify-between">
    <div className="flex items-center">
      <img src={Logo} alt="logo" className="w-10 h-10 mr-1" />
      <h1 className="text-lg sm:text-2xl font-mono pointer-events-none">
        ortal
      </h1>
    </div>
    <div className="flex items-center">
      <a
        href="https://github.com/AttackOnMorty/portal"
        target="_black"
        rel="noreferrer"
        aria-label="Go to GitHub repository"
      >
        <Button type="text">
          <GithubOutlined className="text-xl" />
        </Button>
      </a>
    </div>
  </header>
);

export default Header;
