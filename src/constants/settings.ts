export const SETTINGS_TABS = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Roles",
  "Notifications",
  "Integrations",
  "API",
] as const;

export const SELECTABLE_ROLES = [
  {
    id: "superadmin",
    title: "Superadmin",
    lastActive: "Last active 06/2023",
  },
  {
    id: "developeradmin",
    title: "Developeradmin",
    lastActive: "Last active 01/2023",
  },
  {
    id: "supportadmin",
    title: "Supportadmin",
    lastActive: "Last active 10/2022",
  },
] as const;

export const ROLES_DATA = [
  {
    name: "Superadmin",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "Active",
    users: [1, 2, 3, 4, 5],
  },
  {
    name: "Merchantadmin",
    type: "DEFAULT",
    date: "Feb 1, 2023",
    status: "Active",
    users: [1, 2, 3, 4],
  },
  {
    name: "supportadmin",
    type: "DEFAULT",
    date: "Feb 1, 2023",
    status: "Active",
    users: [1, 2, 3, 4, 5],
  },
  {
    name: "sales personnel",
    type: "CUSTOM",
    date: "Mar 1, 2023",
    status: "Active",
    users: [1, 2, 3],
  },
  {
    name: "Deputy sales personnel",
    type: "CUSTOM",
    date: "Apr 1, 2023",
    status: "In Active",
    users: [1, 2, 3, 4],
  },
  {
    name: "Developeradmin",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "Active",
    users: [1, 2, 3, 4],
  },
] as const;
