import { Menu } from "lucide-react";

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 md:hidden sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">U</span>
        </div>
        <span className="text-xl font-semibold text-gray-900">Untitled UI</span>
      </div>
      <button
        onClick={onMenuClick}
        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
    </div>
  );
}
