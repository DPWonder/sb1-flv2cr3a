"use client";

import { formatTimeUnit } from "@/lib/utils/date";

interface CountdownItemProps {
  value: number;
  label: string;
}

export function CountdownItem({ value, label }: CountdownItemProps) {
  const displayValue = formatTimeUnit(value);
  
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
        {displayValue}
      </div>
      <div className="text-sm text-gray-400 capitalize mt-1">{label}</div>
    </div>
  );
}