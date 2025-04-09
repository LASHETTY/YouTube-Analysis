
// YouTube Analytics Mock Data
export interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  comments: number;
  duration: string;
  publishedAt: string;
  category: string;
}

export interface ChannelStats {
  totalViews: number;
  totalSubscribers: number;
  totalLikes: number;
  totalComments: number;
  totalVideos: number;
  averageViewsPerVideo: number;
  averageLikesPerVideo: number;
  averageCommentsPerVideo: number;
  engagementRate: number;
}

export interface PerformanceData {
  date: string;
  views: number;
  likes: number;
  comments: number;
  subscribers: number;
}

export const mockVideos: VideoData[] = [
  {
    id: 'v1',
    title: 'How to Use Python for Data Analysis',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=500&h=280&q=80',
    views: 186542,
    likes: 24680,
    comments: 1245,
    duration: '12:34',
    publishedAt: '2023-11-05',
    category: 'Education'
  },
  {
    id: 'v2',
    title: 'Python vs R for Data Science - Which One Should You Learn?',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=500&h=280&q=80',
    views: 142351,
    likes: 18935,
    comments: 985,
    duration: '18:21',
    publishedAt: '2023-12-10',
    category: 'Education'
  },
  {
    id: 'v3',
    title: 'Machine Learning with Python - Complete Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=500&h=280&q=80',
    views: 243689,
    likes: 32145,
    comments: 1785,
    duration: '34:56',
    publishedAt: '2024-01-15',
    category: 'Education'
  },
  {
    id: 'v4',
    title: 'Data Visualization Techniques Using Matplotlib',
    thumbnail: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&w=500&h=280&q=80',
    views: 98765,
    likes: 12567,
    comments: 643,
    duration: '15:42',
    publishedAt: '2024-02-20',
    category: 'Education'
  },
  {
    id: 'v5',
    title: 'Introduction to Data Science - Beginner Guide',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=500&h=280&q=80',
    views: 215478,
    likes: 27890,
    comments: 1523,
    duration: '22:17',
    publishedAt: '2024-03-05',
    category: 'Education'
  }
];

export const channelStats: ChannelStats = {
  totalViews: 886825,
  totalSubscribers: 54200,
  totalLikes: 116217,
  totalComments: 6181,
  totalVideos: 5,
  averageViewsPerVideo: 177365,
  averageLikesPerVideo: 23243,
  averageCommentsPerVideo: 1236,
  engagementRate: 13.8
};

export const performanceData: PerformanceData[] = [
  { date: '2023-11', views: 120000, likes: 15000, comments: 800, subscribers: 42000 },
  { date: '2023-12', views: 150000, likes: 19000, comments: 950, subscribers: 45000 },
  { date: '2024-01', views: 180000, likes: 23000, comments: 1200, subscribers: 48000 },
  { date: '2024-02', views: 195000, likes: 26000, comments: 1400, subscribers: 51000 },
  { date: '2024-03', views: 241825, likes: 33217, comments: 1831, subscribers: 54200 }
];

// Video category distribution
export const categoryDistribution = [
  { name: "Education", value: 5 },
  { name: "Technology", value: 0 },
  { name: "Entertainment", value: 0 },
  { name: "Gaming", value: 0 },
  { name: "Music", value: 0 }
];

// Growth prediction data (mock machine learning predictions)
export const growthPrediction = [
  { date: '2024-04', views: 265000, subscribers: 57500 },
  { date: '2024-05', views: 290000, subscribers: 61000 },
  { date: '2024-06', views: 320000, subscribers: 65000 }
];

// Audience engagement data
export const engagementByDay = [
  { day: 'Monday', engagement: 78 },
  { day: 'Tuesday', engagement: 82 },
  { day: 'Wednesday', engagement: 91 },
  { day: 'Thursday', engagement: 85 },
  { day: 'Friday', engagement: 94 },
  { day: 'Saturday', engagement: 100 },
  { day: 'Sunday', engagement: 96 }
];

// Format numbers for better display
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}
