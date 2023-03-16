import { FC, ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Navigation />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
