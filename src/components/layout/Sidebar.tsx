import { Search, LogOut } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { mainNavItems, bottomNavItems } from "@/constants/navigation";

// Assets
import profileImage from "@/assets/icons/profile image.svg";
import profileIcon from "@/assets/icons/profile icon.svg";

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export function Sidebar({ className = "", onClose }: SidebarProps) {
  return (
    <div
      className={`h-screen w-72 bg-white border-r border-gray-200 flex flex-col ${className}`}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">U</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">
            Untitled UI
          </span>
        </div>

        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => (
          <div key={item.path} onClick={onClose}>
            <SidebarItem {...item} />
          </div>
        ))}

        <div className="pt-4 pb-1">
          {bottomNavItems.map((item) => (
            <div key={item.path} onClick={onClose}>
              <SidebarItem {...item} />
            </div>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-1">
            New features available!
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            Check out the new dashboard view. Pages now load faster.
          </p>
          <div className="w-full h-32 bg-gray-200 rounded-md mb-3 overflow-hidden relative group">
            <img
              src={profileImage}
              alt="New feature"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3 text-sm font-medium">
            <button className="text-gray-500 hover:text-gray-700">
              Dismiss
            </button>
            <button className="text-purple-600 hover:text-purple-700">
              What's new?
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <img
              src={profileIcon}
              alt="User avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">
                Olivia Rhye
              </span>
              <span className="text-sm text-gray-500">
                olivia@untitledui.com
              </span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
