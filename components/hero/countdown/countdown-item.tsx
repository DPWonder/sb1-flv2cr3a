interface CountdownItemProps {
  value: number;
  unit: string;
}

export function CountdownItem({ value, unit }: CountdownItemProps) {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-gray-400 capitalize">{unit}</div>
    </div>
  );
}