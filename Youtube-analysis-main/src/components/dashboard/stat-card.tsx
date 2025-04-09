
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: number;
  className?: string;
}

export default function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend !== undefined) && (
          <div className="flex items-center text-xs text-muted-foreground">
            {trend !== undefined && (
              <>
                {trend > 0 ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-analytics-green" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-analytics-red" />
                )}
                <span className={trend > 0 ? "text-analytics-green" : "text-analytics-red"}>
                  {trend > 0 ? "+" : ""}
                  {trend}%
                </span>
                &nbsp;
              </>
            )}
            {description && <span>{description}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
