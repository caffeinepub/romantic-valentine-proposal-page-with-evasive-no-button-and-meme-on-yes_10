import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function ValentineProposal() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonPositioned, setIsNoButtonPositioned] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe bounds for the button to move within
    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 20;

    // Generate random position within bounds
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
    setIsNoButtonPositioned(true);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  // Handle mouse enter for desktop
  const handleNoMouseEnter = () => {
    moveNoButton();
  };

  // Handle touch start for mobile
  const handleNoTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  // Handle pointer down for both desktop and mobile
  const handleNoPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  useEffect(() => {
    // Prevent scrolling on touch devices when interacting with the no button
    const preventScroll = (e: TouchEvent) => {
      if (noButtonRef.current?.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });
    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  if (accepted) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Heart className="w-20 h-20 text-primary fill-primary animate-pulse-heart" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Good choice
          </h1>
        </div>
        
        <div className="bg-card rounded-3xl p-6 shadow-2xl border-2 border-primary/20">
          <img
            src="/assets/generated/valentine-meme-piku.dim_1024x1024.png"
            alt="Good choice meme"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="space-y-2">
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            I knew you'd say yes! 💕
          </p>
          <p className="text-lg text-muted-foreground">
            You've made me the happiest person! ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-3xl shadow-2xl border-2 border-primary/20 p-8 md:p-12">
        <div className="space-y-8 text-center">
          {/* Hearts decoration */}
          <div className="flex justify-center gap-4">
            <Heart className="w-8 h-8 text-primary fill-primary animate-float" style={{ animationDelay: '0s' }} />
            <Heart className="w-12 h-12 text-primary fill-primary animate-float" style={{ animationDelay: '0.5s' }} />
            <Heart className="w-8 h-8 text-primary fill-primary animate-float" style={{ animationDelay: '1s' }} />
          </div>

          {/* Main question */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
              Will you be my Valentine?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              This is the most important question I'll ask today... 💝
            </p>
          </div>

          {/* Buttons container with relative positioning for the evasive button */}
          <div
            ref={containerRef}
            className="relative min-h-[200px] md:min-h-[250px] flex items-center justify-center pt-8"
          >
            {/* Yes button - always centered */}
            <button
              onClick={handleYesClick}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl md:text-2xl px-12 md:px-16 py-4 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-10"
            >
              Yes! 💕
            </button>

            {/* No button - moves on hover/touch */}
            <button
              ref={noButtonRef}
              onMouseEnter={handleNoMouseEnter}
              onTouchStart={handleNoTouchStart}
              onPointerDown={handleNoPointerDown}
              style={
                isNoButtonPositioned
                  ? {
                      position: 'absolute',
                      left: `${noButtonPosition.x}px`,
                      top: `${noButtonPosition.y}px`,
                      transition: 'all 0.3s ease-out',
                    }
                  : {
                      position: 'absolute',
                      left: '50%',
                      top: 'calc(50% + 80px)',
                      transform: 'translateX(-50%)',
                    }
              }
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full shadow-md touch-none select-none"
            >
              No
            </button>
          </div>

          {/* Hint text */}
          <p className="text-sm text-muted-foreground italic pt-4">
            (Hint: There's only one right answer... 😉)
          </p>
        </div>
      </div>
    </div>
  );
}
