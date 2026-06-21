import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
// import { useState } from 'react';
// import SidebarItem from './SidebarItem';

// This sidebar component is for both mobile and desktop
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SideBar = ({ children, expanded, setExpanded }: any) => {
  return (
    <div className="relative">
      {/* 
        This div is used to create the background overlay when the sidebar is expanded
        It is only visible on mobile screens
      */}
      <div
        className={`fixed inset-0 w-3 -z-10 block bg-gray-400  ${
          expanded ? "block sm:hidden" : "hidden"
        }`}
      />
      <aside
        className={`box-border h-screen transition-all ${
          expanded ? "w-5/6 sm:w-50" : "w-0 sm:w-15"
        }`}
      >
        <nav className="flex h-full w-full rounded-lg flex-col bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt=""
            />
            <div
              className={`${
                expanded ? "" : "hidden sm:block"
              } absolute top-10 -right-3 outline-hidden full-round`}
            >
              <button
                onClick={() => setExpanded((curr: boolean) => !curr)}
                className="bg-white h-6 w-6 outline-hidden full-round"
              >
                {expanded ? (
                  <ChevronLeftIcon className="h-3 w-3" />
                ) : (
                  <ChevronRightIcon className="h-3 w-3" />
                )}
              </button>
            </div>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
