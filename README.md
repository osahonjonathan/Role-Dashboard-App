# Role Dashboard App - Settings Module

This project is a high-fidelity frontend dashboard built with **React**, **TypeScript**, and **Vite**. It features a comprehensive Settings module with a focus on user role management, responsive navigation, and smooth user experience. It follows a modular architecture and utilizes modern UI/UX principles to provide a premium feel.

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Testing](#testing)
3. [Design Decisions and Assumptions](#design-decisions-and-assumptions)
4. [AI Prompts Used](#ai-prompts-used)
5. [Reflection Questions](#reflection-questions)

---

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/osahonjonathan/RoleDashBoardApp.git
   cd role-dashboard-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   This will open the application in your default browser at `http://localhost:5173/`

---

## Testing

The project includes a comprehensive testing suite using **Vitest** and **React Testing Library**. Tests cover critical components and the API service layer.

1. **Run all tests**:

   ```bash
   npm run test
   ```

   This will start the Vitest test runner in watch mode.

2. **Run tests once (CI mode)**:

   ```bash
   npm run test -- --run
   ```

3. **What is tested**:
   - **Components**: `RoleCard` and `RolesTable` are tested for rendering, user interactions, and state changes (Loading/Error/Success).
   - **Service Layer**: The `api.ts` utility is tested to ensure proper data fetching and response handling.
   - **Integration**: React Query integration is tested through component mocks.

---

## Design Decisions and Assumptions

### Frontend Architecture and State Management

- **React with TypeScript**: Chosen for its robust component-based architecture and type safety, ensuring a scalable and maintainable codebase.
- **Modular Component Structure**: The `Settings` page is refactored into focused, reusable components:
  - `RoleCard`: Handles individual role selection cards.
  - `RolesTable`: Manages the detailed user roles data display.
  - `SettingsTabs`: Centralizes the tabbed navigation logic.
- **Constant-Driven Design**: All hardcoded data (navigation, roles, table data) is extracted into `src/constants/settings.ts`. This makes the UI code cleaner and allows for easy data updates without touching the components.
- **Data Immutability**: Uses `readonly` TypeScript types for constants to ensure data integrity across the application.

### UI/UX Design and Responsiveness

- **Tailwind CSS**: Used for all styling to achieve a high-fidelity "Untitled UI" aesthetic with vibrant purple accents, smooth shadows, and consistent spacing.
- **Shadcn/UI & Radix UI**: Leveraged for accessible, high-quality primitive components like Tabs, Radio Groups, and Checkboxes.
- **Responsive Sidebar**:
  - **Desktop**: A fixed, always-accessible sidebar for quick navigation.
  - **Mobile**: A smooth, slide-in sidebar overlay triggered by a `MobileHeader` menu button.
- **Micro-Animations**: Uses **Framer Motion** for:
  - Horizontal page transitions between different tabs and pages.
  - Smooth entry/exit animations for the mobile sidebar navigation.
- **Placeholder States**: Implemented dynamic placeholders for "under construction" sections (Profile, Password, Team) to provide a polished feel even when features are still developing.

- **API-Driven Data**: The application is integrated with a live REST API (`https://role-api-psi.vercel.app/api`) to fetch real-time roles data. This replaces the initial static constant approach and implements modern data fetching patterns.
- **Environment Configuration**: API base URLs and other sensitive configurations are managed via `.env` files and `import.meta.env` for security and multi-environment support.
- **Automated Testing**: Unit and integration tests are implemented to ensure the reliability of the UI and data layer, following standard frontend engineering practices.
- **Modern Browsers**: Targeted for modern evergreen browsers that support CSS grid, flexbox, and modern JavaScript features.

---

## AI Prompts Used

### Structural Refactoring

- "Refactor the Settings page into modular components. Extract the roles table and the role selection cards into separate files in `src/components/settings`."
- "Move all hardcoded arrays and strings from the Settings page into a dedicated `src/constants/settings.ts` file. Map over these constants to keep the JSX clean."

### Animation & Layout Fixes

- "The page transitions are flickering and duplicating during the animation. Fix this using `useOutlet` and `AnimatePresence` to handle exit animations correctly."
- "The mobile sidebar isn't sliding out smoothly. Change the container to a `motion.div` and use variants to sync the backdrop fade and the sidebar slide."
- "Fix the layout so the Sidebar is fixed on the side and only the main content area scrolls when the page gets long."

### Logic & Styling

- "Create a reusable `SettingsTabs` component. Use the `data-[state=active]` selector in Tailwind to style the active tab with a purple bottom border and a white background."
- "Generate a project structure for the roles table that includes user avatar groups and status badges (Active/Inactive)."

---

## Reflection Questions

### UI Design Approach

- **Modularization**: By breaking down `Settings.tsx`, we turned a 400-line file into a clean 100-line layout. This significantly reduces cognitive load for developers working on the code.
- **Design Matching**: Great care was taken to match the "Untitled UI" mockup, focusing on details like the specific purple hex codes (#7F56D9), rounded border-radii (xl), and subtle border colors (gray-200).

### State & Navigation

- **Implicit State**: Using Radix UI's Tabs component allowed us to handle complex tab switching and active states without writing a single line of manual `useState` logic for the navigation itself.
- **Animation Synchronization**: The biggest challenge was the page transition logic. Using `useOutlet` from `react-router-dom` was the key to allowing Framer Motion to see "two pages" at once during the transition.

### Challenges & Solutions

- **Readonly Constraints**: When moving data to constants, TypeScript flagged errors in components expecting mutable arrays. This was solved by updating component interfaces to accept `readonly` data structures, improving the overall type safety of the project.
- **Fixed vs. Scrolling**: Balancing a fixed sidebar with a scrolling content area required switching from `min-h-screen` to `h-screen overflow-hidden` on the main container to lock the viewport.

---
