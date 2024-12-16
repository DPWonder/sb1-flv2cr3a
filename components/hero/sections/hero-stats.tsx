import { Bot, Calendar, Users } from "lucide-react";

export function HeroStats() {
  return (
    <div className="flex flex-wrap justify-center gap-6 text-center">
      <div className="flex items-center gap-2">
        <Calendar className="w-6 h-6 text-blue-500" />
        <span>September 15-17, 2025</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-6 h-6 text-blue-500" />
        <span>1,000+ Attendees</span>
      </div>
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 text-blue-500" />
        <span>50+ Speakers</span>
      </div>
    </div>
  );
}