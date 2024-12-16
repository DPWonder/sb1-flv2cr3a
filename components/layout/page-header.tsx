interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}