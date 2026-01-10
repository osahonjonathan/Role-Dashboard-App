import { useState } from "react";
import { Download, Plus, Mail } from "lucide-react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RoleCard } from "@/components/settings/RoleCard";
import { RolesTable } from "@/components/settings/RolesTable";
import { SettingsTabs } from "@/components/settings/SettingsTabs";
import { SETTINGS_TABS, SELECTABLE_ROLES } from "@/constants/settings";

export default function Settings() {
  const [activeRole, setActiveRole] = useState("superadmin");

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your team and preferences here.
        </p>
      </div>

      <div className="w-full">
        <Tabs defaultValue="roles" className="w-full">
          <SettingsTabs />

          {SETTINGS_TABS.map((tab) => {
            const value = tab.toLowerCase().replace(" ", "-");
            if (value === "roles") return null;
            return (
              <TabsContent key={value} value={value} className="mt-8">
                <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center mb-4 shadow-sm">
                    <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{tab}</h3>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs">
                    We're currently building the {tab} section. Check back soon
                    for updates!
                  </p>
                </div>
              </TabsContent>
            );
          })}

          <TabsContent value="roles" className="mt-8 space-y-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  User Roles
                </h2>
                <p className="text-sm text-gray-500">
                  Update your roles details and information.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    Connected email
                  </h3>
                  <p className="text-sm text-gray-500">Select role account</p>
                </div>

                <div className="md:col-span-3">
                  <RadioGroup defaultValue="alternative" className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem
                        value="main"
                        id="main-email"
                        className="mt-1 border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="main-email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          My account email
                        </Label>
                        <p className="text-sm text-gray-500">
                          olivia@untitledui.com
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem
                          value="alternative"
                          id="alt-email"
                          className="mt-1 border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <Label
                          htmlFor="alt-email"
                          className="text-sm font-medium leading-none"
                        >
                          An alternative email
                        </Label>
                      </div>
                      <div className="relative max-w-md ml-7">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          defaultValue="billing@untitledui.com"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    Active Role
                  </h3>
                  <p className="text-sm text-gray-500">
                    Select active role available to the user.
                  </p>
                </div>

                <div className="md:col-span-3 space-y-4">
                  <RadioGroup
                    value={activeRole}
                    onValueChange={setActiveRole}
                    className="space-y-3"
                  >
                    {SELECTABLE_ROLES.map((role) => (
                      <RoleCard
                        key={role.id}
                        {...role}
                        isSelected={activeRole === role.id}
                        onSelect={setActiveRole}
                      />
                    ))}
                  </RadioGroup>

                  <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 mt-2 px-1">
                    <Plus className="w-4 h-4" />
                    Add role to user
                  </button>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    User Roles
                  </h2>
                </div>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download all
                </Button>
              </div>

              <RolesTable />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
