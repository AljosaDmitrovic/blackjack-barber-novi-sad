import logo from '@/assets/blackjack-vektor.svg';

type BrandLogoProps = {
  className?: string;
};

/** Vector mark from `src/assets/blackjack-vektor.svg` */
export default function BrandLogo({ className = 'h-10 w-auto' }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt=""
      className={`block object-contain object-left shrink-0 max-w-[min(100%,220px)] ${className}`}
    />
  );
}
