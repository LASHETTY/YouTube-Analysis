
import { Card, CardContent } from "@/components/ui/card";
import { VideoData, formatNumber } from "@/lib/data";
import { Play, ThumbsUp, MessageSquare } from "lucide-react";

interface VideoCardProps {
  video: VideoData;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-36 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white flex items-center">
          <Play className="w-3 h-3 mr-1" />
          {video.duration}
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-semibold text-sm line-clamp-2 mb-2">{video.title}</h3>
        <div className="flex justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <ThumbsUp className="w-3 h-3 mr-1" />
            {formatNumber(video.likes)}
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-3 h-3 mr-1" />
            {formatNumber(video.comments)}
          </div>
          <div>
            {formatNumber(video.views)} views
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
