"use client";

import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { PropertyViewsChart } from "@/components/Charts/PropertyViewsChart";
import { LeadSourceChart } from "@/components/Charts/LeadSourceChart";
import { RecentActivities } from "@/components/RecentActivities";
import { Button } from "@/components/ui/button";

const activeListingsData = [
  { value: 400 },
  { value: 300 },
  { value: 550 },
  { value: 450 },
  { value: 650 },
  { value: 600 },
  { value: 700 },
];

const leadsData = [
  { value: 200 },
  { value: 250 },
  { value: 220 },
  { value: 300 },
  { value: 280 },
  { value: 350 },
  { value: 320 },
];

const revenueData = [
  { value: 1000 },
  { value: 1200 },
  { value: 1100 },
  { value: 1300 },
  { value: 1250 },
  { value: 1400 },
  { value: 1350 },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                 <h1 className="text-2xl font-bold tracking-tight">Welcome back, Agent Smith,</h1>
                 <p className="text-sm text-gray-500">Welcome to real estate SaaS platform UI design.</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                + Dashboard
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Active Listings"
                value="1,245"
                change="12%"
                trend="up"
                data={activeListingsData}
              />
              <StatCard
                title="Leads this Month"
                value="350"
                change="5%"
                trend="up"
                data={leadsData}
              />
              <StatCard
                title="Revenue YTD"
                value="$1.2M"
                change="18%"
                trend="up"
                data={revenueData}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <PropertyViewsChart />
               <LeadSourceChart />
            </div>

            <div className="grid grid-cols-1">
               <RecentActivities />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
