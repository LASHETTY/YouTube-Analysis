
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface EngagementChartProps {
  data: Array<{ day: string; engagement: number }>;
  title: string;
  description?: string;
}

export default function EngagementChart({ data, title, description }: EngagementChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="day" 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: "#94A3B8" }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: "#94A3B8" }}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: "#1E293B", 
                borderColor: "#334155",
                borderRadius: "8px"
              }}
              labelStyle={{ color: "#F1F5F9" }}
              formatter={(value) => [`${value}%`, 'Engagement']}
            />
            <Bar 
              dataKey="engagement" 
              fill="#8B5CF6" 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
