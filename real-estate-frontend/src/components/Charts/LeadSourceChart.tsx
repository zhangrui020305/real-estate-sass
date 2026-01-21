"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Bendtomniate", value: 400 },
  { name: "Cost", value: 300 },
  { name: "Lead Source", value: 300 },
  { name: "Tations", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe"];

export function LeadSourceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Lead Source Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend
                 verticalAlign="middle"
                 align="right"
                 layout="vertical"
                 iconType="circle"
                 wrapperStyle={{ fontSize: "12px", color: '#666' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
