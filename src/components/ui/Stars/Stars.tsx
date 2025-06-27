import type { StarsProps } from "../../../types";
import { Button } from "../Button/Button";
import { Star } from "lucide-react";

export const Stars: React.FC<StarsProps> = ({
  interactive = false,
  children,
  onChange,
  rating
}) => {
  return (
    <div className="flex gap-1 justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Button
          key={star}
          variant="primary"
          className={`${
            interactive
              ? "cursor-pointer hover:scale-110 transition-transform"
              : ""
          }`}
          onClick={interactive && onChange ? () => onChange(star) : undefined}
          disabled={!interactive}
        >
          <Star
            size={interactive ? 24 : 20}
            className={`${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            } ${interactive ? 'hover:text-yellow-400' : ''}`}
            
          />
        </Button>
      ))}
      {children}
    </div>
  );
};
