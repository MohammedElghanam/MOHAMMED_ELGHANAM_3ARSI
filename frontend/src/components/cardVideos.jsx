import { Video } from 'lucide-react'
import useVideo from '../hooks/useVideo'
export default function CardVideos() {

  const { videos } = useVideo();

  return (
    <>
      <div className="space-y-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex items-center gap-2 p-2 bg-gray-50 rounded"
          >
            <Video className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{video.video}</span>
          </div>
        ))}
      </div>
    </>
  )
}
