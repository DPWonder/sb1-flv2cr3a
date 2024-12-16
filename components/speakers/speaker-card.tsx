import { Speaker } from "@/types/speaker";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";

interface SpeakerCardProps {
  speaker: Speaker;
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <Card className="overflow-hidden bg-black/50 border-gray-800">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold">{speaker.name}</h3>
        <p className="text-sm text-gray-400">
          {speaker.role} at {speaker.company}
        </p>
        <p className="mt-2 text-sm text-gray-300">{speaker.bio}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {speaker.topics.map((topic) => (
            <Badge key={topic} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
        
        <div className="mt-4 flex gap-4">
          {speaker.twitter && (
            <a
              href={`https://twitter.com/${speaker.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {speaker.linkedin && (
            <a
              href={`https://linkedin.com/in/${speaker.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}