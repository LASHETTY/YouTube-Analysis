
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { performanceData } from "@/lib/data";

interface PredictionData {
  date: string;
  views: number;
  subscribers: number;
}

interface PredictionChartProps {
  historicalData: typeof performanceData;
  predictionData: PredictionData[];
  title: string;
  description?: string;
}

export default function PredictionChart({ 
  historicalData, 
  predictionData, 
  title, 
  description 
}: PredictionChartProps) {
  // Combine historical and prediction data
  const combinedData = [
    ...historicalData.map(item => ({
      date: item.date,
      views: item.views,
      subscribers: item.subscribers,
      type: "historical"
    })),
    ...predictionData.map(item => ({
      date: item.date,
      views: item.views,
      subscribers: item.subscribers,
      type: "prediction"
    }))
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={combinedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
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
            <Line 
              type="monotone" 
              dataKey="views" 
              stroke="#3B82F6" 
              name="Views"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="subscribers" 
              stroke="#F59E0B" 
              name="Subscribers"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
