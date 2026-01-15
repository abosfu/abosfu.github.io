interface BackgroundTextProps {
  text?: string;
  verticalPosition?: number; // Percentage from top (0-100)
  horizontalOffset?: 'left' | 'center' | 'right'; // Left/right displacement
  opacity?: number;
}

export function BackgroundText({
  text = 'Building Systems',
  verticalPosition = 50,
  horizontalOffset = 'center',
  opacity = 0.03,
}: BackgroundTextProps) {
  const horizontalClasses = {
    left: 'left-8 lg:left-16',
    center: 'left-1/2',
    right: 'right-8 lg:right-16',
  };

  const transformStyle = horizontalOffset === 'center' 
    ? 'translate(-50%, -50%)' 
    : 'translateY(-50%)';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute ${horizontalClasses[horizontalOffset]} text-transparent font-['Space_Grotesk'] select-none`}
        style={{
          top: `${verticalPosition}%`,
          transform: transformStyle,
          fontSize: 'clamp(120px, 20vw, 280px)',
          fontWeight: 700,
          WebkitTextStroke: `1px rgba(11, 11, 12, ${opacity})`,
          lineHeight: '1',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </div>
    </div>
  );
}

