import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function Layout() {
  return (
    <div className="mx-auto h-screen max-w-3xl">
      <Header />
      <Outlet />
    </div>
  );
}
