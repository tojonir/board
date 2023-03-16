import { FC, ReactNode } from "react";
import Navigation from "./Navigation";
import bg from "@assets/space.jpg";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className="w-screen h-screen bg-no-repeat bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navigation />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
