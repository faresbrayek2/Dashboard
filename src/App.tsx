import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import { SimpleFooter } from "./components/Reusable/Footer";
import { DefaultSidebar } from "./components/Reusable/Sidebar";
import { DrawerWithNavigation } from "./components/Reusable/Sidebar/MobileDrawer";
import { NavbarWithSearch } from "./components/Reusable/Navbar";

const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <DefaultSidebar />
        <div className="flex flex-col w-full">
          <NavbarWithSearch />
          <DrawerWithNavigation />
        </div>
      </div>

      <RouterProvider router={router} />
      <SimpleFooter />
    </>
  );
};

export default App;
