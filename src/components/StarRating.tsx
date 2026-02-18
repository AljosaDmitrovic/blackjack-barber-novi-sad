interface StarRatingProps {
  rating?: number;
  count?: number;
  label?: string;
}

export default function StarRating({ rating = 5.0, count, label }: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="star w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.356 2.703c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.652 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.951-.69L9.049 2.927z" />
          </svg>
        ))}
      </div>
      <span className="font-bold text-primary text-sm">{rating.toFixed(1)}</span>
      {label && <span className="text-muted-foreground text-xs">{label}</span>}
      {count && <span className="text-muted-foreground text-xs">({count})</span>}
    </div>
  );
}
