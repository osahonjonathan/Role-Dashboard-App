import { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { AnimatePresence, motion } from "framer-motion";

export function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 overflow-hidden">
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

      <Sidebar className="hidden md:flex flex-shrink-0" />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-900/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              variants={{
                open: { x: 0 },
                closed: { x: "-100%" },
              }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full z-10"
            >
              <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 p-4 md:p-8 overflow-auto w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
