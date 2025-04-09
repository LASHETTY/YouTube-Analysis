
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/dashboard/stat-card";
import PerformanceChart from "@/components/dashboard/performance-chart";
import VideoCard from "@/components/dashboard/video-card";
import EngagementChart from "@/components/dashboard/engagement-chart";
import PredictionChart from "@/components/dashboard/prediction-chart";
import CategoryChart from "@/components/dashboard/category-chart";
import { 
  channelStats, 
  mockVideos, 
  performanceData,
  formatNumber,
  engagementByDay,
  growthPrediction,
  categoryDistribution
} from "@/lib/data";
import { Youtube, VideoIcon, ChartBar, Play } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-analytics-background px-6">
        <div className="flex items-center gap-2">
          <Youtube className="h-6 w-6 text-analytics-red" />
          <h1 className="text-xl font-semibold">YouTube Analytics</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-800/20 dark:text-green-300">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
              Data updated: April 7, 2025
            </span>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6 bg-analytics-background">
        <div className="space-y-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="audience">Audience</TabsTrigger>
                <TabsTrigger value="predictions">Predictions</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Total Views"
                  value={formatNumber(channelStats.totalViews)}
                  description="Lifetime channel views"
                  trend={15}
                />
                <StatCard
                  title="Subscribers"
                  value={formatNumber(channelStats.totalSubscribers)}
                  description="Total subscribers"
                  trend={7}
                />
                <StatCard
                  title="Average Views"
                  value={formatNumber(channelStats.averageViewsPerVideo)}
                  description="Per video"
                  trend={4}
                />
                <StatCard
                  title="Engagement Rate"
                  value={`${channelStats.engagementRate}%`}
                  description="Likes + comments / views"
                  trend={2}
                />
              </div>

              <PerformanceChart 
                data={performanceData}
                title="Channel Performance"
                description="Monthly performance metrics"
              />

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Top Videos</CardTitle>
                    <CardDescription>Your most viewed content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {mockVideos.slice(0, 3).map((video) => (
                        <VideoCard key={video.id} video={video} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <CategoryChart 
                  data={categoryDistribution}
                  title="Content Categories"
                  description="Distribution by category"
                />
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mockVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="audience" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Total Subscribers"
                  value={formatNumber(channelStats.totalSubscribers)}
                  description="Current count"
                  trend={7}
                  icon={<ChartBar className="h-4 w-4" />}
                />
                <StatCard
                  title="Watch Time"
                  value="2,543 hours"
                  description="Last 28 days"
                  trend={12}
                  icon={<Play className="h-4 w-4" />}
                />
                <StatCard
                  title="Average View Duration"
                  value="8:24"
                  description="Per video"
                  trend={3}
                  icon={<VideoIcon className="h-4 w-4" />}
                />
                <StatCard
                  title="Subscriber Growth"
                  value="12%"
                  description="Last 28 days"
                  trend={5}
                  icon={<ChartBar className="h-4 w-4" />}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <EngagementChart 
                  data={engagementByDay} 
                  title="Engagement by Day of Week"
                  description="Average engagement percentage by day"
                />
                <Card>
                  <CardHeader>
                    <CardTitle>Audience Demographics</CardTitle>
                    <CardDescription>Viewer age and gender distribution</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[240px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <p>Demographics data visualization would appear here</p>
                      <p className="text-sm mt-2">Based on YouTube Analytics API data</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="predictions" className="space-y-6">
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                <PredictionChart 
                  historicalData={performanceData}
                  predictionData={growthPrediction}
                  title="Growth Predictions"
                  description="Predicted vs. actual performance (ML-based)"
                />
                <Card>
                  <CardHeader>
                    <CardTitle>Content Recommendations</CardTitle>
                    <CardDescription>AI-generated recommendations for growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <div className="mt-0.5 rounded-full bg-analytics-blue/20 p-1">
                          <div className="h-2 w-2 rounded-full bg-analytics-blue"></div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Upload more frequently</p>
                          <p className="text-xs text-muted-foreground">Videos published consistently perform 34% better</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-0.5 rounded-full bg-analytics-green/20 p-1">
                          <div className="h-2 w-2 rounded-full bg-analytics-green"></div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Optimize thumbnails</p>
                          <p className="text-xs text-muted-foreground">Videos with optimized thumbnails get 22% more views</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-0.5 rounded-full bg-analytics-purple/20 p-1">
                          <div className="h-2 w-2 rounded-full bg-analytics-purple"></div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Add more tutorials</p>
                          <p className="text-xs text-muted-foreground">Tutorial videos have 41% higher engagement</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-0.5 rounded-full bg-analytics-yellow/20 p-1">
                          <div className="h-2 w-2 rounded-full bg-analytics-yellow"></div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Increase video length</p>
                          <p className="text-xs text-muted-foreground">Longer videos (15-25 min) perform 18% better</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
