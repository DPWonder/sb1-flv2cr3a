"use client";

import { Session } from "@/types/session";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import { useState } from "react";

interface SessionCardProps {
  session: Session;
}

export function SessionCard({ session }: SessionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="bg-black/50 border-gray-800 cursor-pointer transition-all hover:border-blue-500/50"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="secondary" className="mb-2">
              {session.type}
            </Badge>
            <h3 className="text-xl font-semibold">{session.title}</h3>
            <p className="text-sm text-gray-400 mt-1">
              {session.speaker}
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{session.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{session.location}</span>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-300">
              {session.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}