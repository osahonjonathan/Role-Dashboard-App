import type { NavItem } from "@/types/navigation";

import homeIcon from "@/assets/icons/home.svg";
import dashboardIcon from "@/assets/icons/dashboard.svg";
import projectsIcon from "@/assets/icons/projects.svg";
import tasksIcon from "@/assets/icons/task.svg";
import reportingIcon from "@/assets/icons/reporting.svg";
import usersIcon from "@/assets/icons/users.svg";
import supportIcon from "@/assets/icons/support.svg";
import settingsIcon from "@/assets/icons/settings.svg";

export const mainNavItems: NavItem[] = [
  { title: "Home", path: "/home", icon: homeIcon },
  { title: "Dashboard", path: "/dashboard", icon: dashboardIcon, badge: 10 },
  { title: "Projects", path: "/projects", icon: projectsIcon },
  { title: "Tasks", path: "/tasks", icon: tasksIcon },
  { title: "Reporting", path: "/reporting", icon: reportingIcon },
  { title: "Users", path: "/users", icon: usersIcon },
];

export const bottomNavItems: NavItem[] = [
  { title: "Support", path: "/support", icon: supportIcon },
  { title: "Settings", path: "/", icon: settingsIcon },
];
