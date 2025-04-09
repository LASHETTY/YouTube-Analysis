
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PerformanceData } from "@/lib/data";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface PerformanceChartProps {
  data: PerformanceData[];
  title: string;
  description?: string;
}

export default function PerformanceChart({ data, title, description }: PerformanceChartProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis 
              dataKey="date" 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: "#94A3B8" }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: "#94A3B8" }}
              tickFormatter={(value) => {
                if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                return value;
              }}
            />
            <Tooltip 
              formatter={(value: number) => {
                if (value >= 1000000) return [`${(value / 1000000).toFixed(1)}M`, ''];
                if (value >= 1000) return [`${(value / 1000).toFixed(1)}K`, ''];
                return [value, ''];
              }}
              contentStyle={{ 
                backgroundColor: "#1E293B", 
                borderColor: "#334155",
                borderRadius: "8px"
              }}
              labelStyle={{ color: "#F1F5F9" }}
              itemStyle={{ color: "#F1F5F9" }}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="views" 
              stroke="#3B82F6" 
              fillOpacity={1}
              fill="url(#colorViews)" 
              name="Views"
            />
            <Area 
              type="monotone" 
              dataKey="likes" 
              stroke="#10B981" 
              fillOpacity={1}
              fill="url(#colorLikes)" 
              name="Likes"
            />
            <Area 
              type="monotone" 
              dataKey="comments" 
              stroke="#8B5CF6" 
              fillOpacity={1}
              fill="url(#colorComments)" 
              name="Comments"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
