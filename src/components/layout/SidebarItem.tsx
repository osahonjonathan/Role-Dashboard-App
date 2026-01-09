import { NavLink } from "react-router-dom";
import type { NavItem } from "@/types/navigation";

export function SidebarItem({ title, path, icon: Icon, badge }: NavItem) {
  return (
    <NavLink
      to={path}
      end={path === "/"}
      className={({ isActive }) =>
        `flex items-center justify-between px-3 py-2 rounded-md transition-colors group ${
          isActive
            ? "bg-gray-100 text-gray-900"
            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-3">
            {typeof Icon === "string" ? (
              <img
                src={Icon}
                alt={title}
                className={`w-5 h-5 object-contain ${
                  isActive ? "opacity-100" : "opacity-60 group-hover:opacity-80"
                }`}
              />
            ) : (
              <Icon
                size={20}
                className={
                  isActive
                    ? "text-gray-900"
                    : "text-gray-500 group-hover:text-gray-700"
                }
              />
            )}
            <span className="font-medium">{title}</span>
          </div>
          {badge && (
            <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-sm font-medium">
              {badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}
