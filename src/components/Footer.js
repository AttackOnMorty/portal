import { HeartFilled } from "@ant-design/icons";

const Footer = () => (
  <footer className="pb-6 flex justify-center">
    <p className="text-xs sm:text-sm font-light">
      Crafted with <HeartFilled style={{ color: "#eb2f96" }} /> by{" "}
      <a
        className="text-blue-500 hover:underline"
        // TODO: Use LinkedIn profile link
        href="https://github.com/AttackOnMorty"
        target="_black"
        rel="noreferrer"
      >
        Luke Mao
      </a>
    </p>
  </footer>
);

export default Footer;
