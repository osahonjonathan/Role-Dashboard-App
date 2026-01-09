import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SETTINGS_TABS } from "@/constants/settings";

export function SettingsTabs() {
  return (
    <TabsList className="w-full justify-start h-auto p-0 bg-transparent border border-gray-200 rounded-lg overflow-hidden flex-wrap md:flex-nowrap">
      {SETTINGS_TABS.map((tab) => (
        <TabsTrigger
          key={tab}
          value={tab.toLowerCase().replace(" ", "-")}
          className="px-4 py-2 text-sm border-r border-gray-200 last:border-r-0 data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-b-purple-600 rounded-none h-10 transition-all hover:bg-gray-50/50"
        >
          {tab}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
