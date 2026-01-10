import { Download, MoreVertical } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

import { useQuery } from "@tanstack/react-query";
import { fetchRoles, type Role } from "@/lib/api";

export function RolesTable() {
  const {
    data: roles,
    isLoading,
    error,
  } = useQuery<Role[]>({
    queryKey: ["roles"],
    queryFn: fetchRoles,
  });

  if (isLoading) {
    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
        <p className="mt-4 text-gray-500">Loading roles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm p-8 text-center">
        <p className="text-red-500 font-medium">Failed to load roles</p>
        <p className="text-sm text-gray-500 mt-1">{(error as Error).message}</p>
      </div>
    );
  }

  if (!roles || roles.length === 0) {
    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm p-8 text-center text-gray-500">
        No roles found.
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox />
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name <span className="inline-block ml-1">↓</span>
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date created
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role users
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.name}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {role.name}
              </TableCell>
              <TableCell className="text-gray-500 text-sm">
                {role.type}
              </TableCell>
              <TableCell className="text-gray-500 text-sm">
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(role.date))}
              </TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={
                    role.status === "Active"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-orange-50 text-orange-700 border-orange-200"
                  }
                >
                  {role.status === "Active" ? "● Active" : "● In Active"}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex -space-x-2">
                  {role.users.slice(0, 4).map((i) => (
                    <Avatar key={i} className="w-8 h-8 border-2 border-white">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${i + role.name}`}
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                  {role.users.length > 4 && (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 border-2 border-white text-[10px] font-medium text-gray-600">
                      +{role.users.length - 4}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
