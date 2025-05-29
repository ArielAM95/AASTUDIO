
interface ProgressIndicatorProps {
  total: number;
  current: number;
}

const ProgressIndicator = ({ total, current }: ProgressIndicatorProps) => {
  return (
    <div className="absolute top-4 left-4 right-16 flex gap-1">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            i === current ? 'bg-custom-turquoise' : 'bg-white/30'
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;
