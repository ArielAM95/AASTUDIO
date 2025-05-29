
interface NavigationDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const NavigationDots = ({ total, current, onDotClick }: NavigationDotsProps) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            current === index ? 'bg-custom-turquoise w-6' : 'bg-white/50'
          }`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
