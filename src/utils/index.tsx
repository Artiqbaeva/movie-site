import React, { Suspense as ReactSuspense } from "react";
import logo from "@/assets/main-logo.svg";

export const Loading: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="Loading" className="h-16 w-auto mb-2" />
      <p className="text-gray-600 text-sm">Downloading...</p>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export const Suspense: React.FC<Props> = ({ children }) => {
  return <ReactSuspense fallback={<Loading />}>{children}</ReactSuspense>;
};
export default Suspense;