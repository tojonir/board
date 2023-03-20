import { FC, ReactNode } from "react";
import Navigation from "./Navigation";
import SideBar from "./SideBar";

interface LayoutProps {
  withSideBar?: boolean;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-screen h-screen flex overflow-hidden">
      <div className="shadow-md h-full min-w-[200px] w-1/6">
        <SideBar />
      </div>
      <div className="w-full">
        <Navigation />
        <div className="h-[calc(100vh-50px)] flex bg-gray-100">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
