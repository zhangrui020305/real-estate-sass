"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Home,
  Users,
  Repeat,
  BarChart3,
  Settings,
  Building2,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Properties", href: "/properties", icon: Home },
  { name: "CRM", href: "/crm", icon: Users },
  { name: "Transactions", href: "/transactions", icon: Repeat },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full w-64 bg-white border-r border-gray-100 p-4">
      <div className="flex items-center gap-2 px-4 mb-8">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <Building2 className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none">RealEstate Pro</h1>
          <p className="text-xs text-gray-500">SaaS</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-blue-600" : "text-gray-400")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-4 py-4">
         <Link
            href="/settings"
            className="flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-gray-900"
         >
             <Settings className="w-5 h-5 text-gray-400"/>
             Settings
         </Link>
      </div>
    </div>
  );
}
