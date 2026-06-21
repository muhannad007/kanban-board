import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kanban from "./pages/Kanban";
// import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import Logo from "/logo.png";
import Symbol from "/symbol.png";
import Footer from "./components/Footer";

function App() {
  const [expanded, setExpanded] = useState(true);
  const navBarItems = [
    {
      icon: <HomeIcon />,
      text: "Home",
      active: true,
    },
    {
      icon: <UserIcon />,
      subMenu: [
        {
          icon: <UserIcon />,
          text: "Profile",
        },
        {
          icon: <CogIcon />,
          text: "Settings",
        },
      ],
      text: "Profile",
    },
    {
      icon: <CogIcon />,
      text: "Settings",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <div className="flex space-x-5 w-full">
          <SideBar
            className="relative"
            expanded={expanded}
            setExpanded={setExpanded}
          >
            {expanded ? (
              <img src={Symbol} className="m-auto" />
            ) : (
              <img src={Logo} className="m-auto" />
            )}
            <hr className="mb-4" />
            {navBarItems.map((item, index) => (
              <div key={index} className="flex mb-4">
                <i className={`w-6 ${!expanded && "m-auto"}`}>{item.icon}</i>
                {expanded && <h3 className="ml-2">{item.text}</h3>}
              </div>
            ))}
          </SideBar>
          <div className="w-full ml-2">
            {/* <NavBar /> */}
            <Routes>
              <Route path="/" element={<Kanban />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
