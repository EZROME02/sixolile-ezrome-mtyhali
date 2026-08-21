import portrait from "@/assets/sixolile-portrait.jpg.asset.json";

/**
 * Canonical portrait of Sixolile Ezrome Mtyhali.
 * Single source image, reused everywhere a personal photo is needed.
 * Only the container/crop changes per placement.
 */
export const PORTRAIT_URL = portrait.url;
export const PORTRAIT_ALT = "Professional portrait of Sixolile Ezrome Mtyhali";

type Props = {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function Portrait({ className = "", imgClassName = "", priority }: Props) {
  return (
    <div className={`relative overflow-hidden bg-secondary ${className}`}>
      <img
        src={PORTRAIT_URL}
        alt={PORTRAIT_ALT}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={`h-full w-full object-cover object-[center_18%] ${imgClassName}`}
      />
    </div>
  );
}
