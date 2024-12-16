"use client";

import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { SessionCard } from "@/components/agenda/session-card";
import { AgendaFilters } from "@/components/agenda/agenda-filters";
import { sessions } from "@/data/sessions";
import { SessionFilter } from "@/types/session";

export default function AgendaPage() {
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
    <>
      <Navigation />
      <PageHeader
        title="Conference Agenda"
        description="Explore our lineup of keynotes, workshops, and sessions"
      />
      
      <main className="container mx-auto px-4 py-16">
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
      </main>
      
      <Footer />
    </>
  );
}