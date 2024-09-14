import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:col-span-4">
        <Navbar />
        <div>
          <div className="px-4 py-16 sm:px-8 lg:px-16">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
