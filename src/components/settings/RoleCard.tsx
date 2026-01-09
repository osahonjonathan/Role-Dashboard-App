import { Plus, CheckCircle2 } from "lucide-react";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface RoleCardProps {
  id: string;
  title: string;
  lastActive: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function RoleCard({
  id,
  title,
  lastActive,
  isSelected,
  onSelect,
}: RoleCardProps) {
  return (
    <div
      className={`relative flex items-start p-4 border rounded-xl cursor-pointer transition-all ${
        isSelected
          ? "border-purple-600 bg-purple-50/30"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="mr-4 mt-1 bg-white p-2 rounded-lg border border-gray-200">
        <Plus className="w-5 h-5 text-gray-600" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-medium ${
              isSelected ? "text-purple-900" : "text-gray-900"
            }`}
          >
            {title}
          </span>
          <RadioGroupItem value={id} id={id} className="sr-only" />
          {isSelected && <CheckCircle2 className="w-5 h-5 text-purple-600" />}
        </div>
        <p className="text-sm text-gray-500">{lastActive}</p>
        <div className="mt-3 flex gap-3">
          <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
            Set as default
          </button>
          <button className="text-sm font-medium text-purple-700 hover:text-purple-800">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
