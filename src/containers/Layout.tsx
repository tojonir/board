import { FC, ReactNode } from "react";
import Navigation from "./Navigation";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-screen h-screen bg-no-repeat bg-cover overflow-hidden">
      <Navigation />
      <div className="h-[calc(100vh-50px)] flex">
        <div className="border-r min-w-[200px] w-1/4">
          <SideBar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
