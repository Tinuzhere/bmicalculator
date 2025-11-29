interface AdPlaceholderProps {
  position: 'top' | 'sidebar' | 'bottom';
}

export default function AdPlaceholder({ position }: AdPlaceholderProps) {
  const getSize = () => {
    switch (position) {
      case 'top':
        return 'h-24 sm:h-32';
      case 'sidebar':
        return 'h-64 sm:h-96';
      case 'bottom':
        return 'h-24 sm:h-32';
    }
  };

  return (
    <div className={`${getSize()} bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center`}>
      <span className="text-gray-400 text-sm font-medium">Ad Space - {position}</span>
    </div>
  );
}
