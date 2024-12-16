"use client";

import { useState } from "react";
import { SessionCard } from "@/components/agenda/session-card";
import { AgendaFilters } from "@/components/agenda/agenda-filters";
import { sessions } from "@/data/sessions";
import { SessionFilter } from "@/types/session";

export function AgendaSection() {
  const [filters, setFilters] = useState<SessionFilter>({
    day: 'all',
    type: 'all',
  });

  const filteredSessions = sessions.filter((session) => {
    if (filters.day !== 'all' && session.day !== filters.day) return false;
    if (filters.type !== 'all' && session.type !== filters.type) return false;
    return true;
  });

  return (
    <section id="agenda" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Conference Schedule</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Three days of inspiring keynotes, technical sessions, and networking opportunities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <AgendaFilters 
          filters={filters}
          onFilterChange={setFilters}
        />
        
        <div className="mt-8 space-y-4">
          {filteredSessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
}