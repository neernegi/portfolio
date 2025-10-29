import React from "react";
import "../styles/wave.css";



function Wave({ children, color }) {
  // Check if color is a gradient or solid color
  const isGradient = color.includes("linear-gradient");

  // Parse gradient if it's a linear-gradient
  let gradientStops = [];
  if (isGradient) {
    // Extract colors and percentages from the gradient string
    // Example: "linear-gradient(135deg, #0a0a1f 0%, #16162e 50%, #0a0a1f 100%)"
    const colorMatches = color.match(/#[0-9a-fA-F]{6}\s+\d+%/g);
    if (colorMatches) {
      gradientStops = colorMatches.map((match) => {
        const [colorVal, offset] = match.split(/\s+/);
        return { color: colorVal, offset: offset };
      });
    }
  }

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="svg-first"
    
      >
        {isGradient && (
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              {gradientStops.map((stop, index) => (
                <stop key={index} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          </defs>
        )}
        <path
          fill={isGradient ? "url(#waveGradient)" : color}
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="svg-second"
      
      >
        {isGradient && (
          <defs>
            <linearGradient
              id="waveGradientBottom"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              {gradientStops.map((stop, index) => (
                <stop key={index} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          </defs>
        )}
        <path
          fill={isGradient ? "url(#waveGradientBottom)" : color}
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Wave;
