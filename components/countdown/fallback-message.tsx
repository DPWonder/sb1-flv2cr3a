interface FallbackMessageProps {
  eventDate: Date;
}

export function FallbackMessage({ eventDate }: FallbackMessageProps) {
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <noscript>
      <div className="text-center text-xl text-gray-300">
        Event starts on {formattedDate}!
      </div>
    </noscript>
  );
}