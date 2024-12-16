"use client";

import { SessionFilter, SessionType, DayType } from "@/types/session";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sessionTypes, conferenceDays } from "@/data/sessions";

interface AgendaFiltersProps {
  filters: SessionFilter;
  onFilterChange: (filters: SessionFilter) => void;
}

export function AgendaFilters({ filters, onFilterChange }: AgendaFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Select
        value={filters.day}
        onValueChange={(value) => 
          onFilterChange({ ...filters, day: value as DayType | 'all' })
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Day" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Days</SelectItem>
          {conferenceDays.map((day) => (
            <SelectItem key={day} value={day}>
              {day}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.type}
        onValueChange={(value) => 
          onFilterChange({ ...filters, type: value as SessionType | 'all' })
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Session Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {sessionTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}