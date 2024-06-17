import { Outlet } from "react-router-dom";
// import Header from "../organisms/Header";
import Header from "@/components/organisms/Header";
export default function Layout() {
  return (
    <div className="mx-auto max-w-3xl">
      <Header />
      <Outlet />
    </div>
  );
}
