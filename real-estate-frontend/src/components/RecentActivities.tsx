import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    type: "Property",
    user: {
      name: "Johnnn fihmaiter",
      image: "https://github.com/shadcn.png",
    },
    action: "Recent property updated",
    time: "May 12 - 9 hours ago",
    icon: "🏠",
  },
  {
    id: 2,
    type: "Client",
    user: {
      name: "Thinwied",
      image: "https://github.com/shadcn.png",
    },
    action: "Client interaction in New York",
    time: "13 minutes ago",
    icon: "👤",
  },
  {
    id: 3,
    type: "Property",
    user: {
      name: "From thumabdechek",
      image: "https://github.com/shadcn.png",
    },
    action: "Recent property updated",
    time: "2 hours ago",
    icon: "🏠",
  },
  {
    id: 4,
    type: "Client",
    user: {
      name: "Thinwied",
      image: "https://github.com/shadcn.png",
    },
    action: "Client interaction in New York",
    time: "13 minutes ago",
    icon: "👤",
  },
];

export function RecentActivities() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600 mt-1">
                   {/* Simplified icon logic for prototype */}
                   {activity.type === 'Property' ? (
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                   ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                   )}
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {activity.action} <span className="text-blue-600">{activity.user.name}</span>
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
