import React from 'react';

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'full' | 'icon' | 'stacked';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  size?: number | string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'auto',
  className = '',
  size,
  ...props
}) => {
  // Theme-aware colors: if explicit theme is chosen, use literal colors, otherwise use CSS variables
  let ringColor = 'var(--logo-ring, #063D2E)';
  let leafColor = 'var(--logo-leaf, #00B884)';
  let veinColor = 'var(--logo-vein, #F8FAF7)';
  let sunColor = 'var(--logo-sun, #FFB800)';
  let textUrjaColor = 'var(--logo-text, #063D2E)';
  let textTerraColor = 'var(--logo-accent, #00B884)';

  if (theme === 'dark') {
    ringColor = '#F8FAF7';
    leafColor = '#00B884';
    veinColor = '#0D1914';
    sunColor = '#FFB800';
    textUrjaColor = '#F8FAF7';
    textTerraColor = '#00B884';
  } else if (theme === 'light') {
    ringColor = '#063D2E';
    leafColor = '#00B884';
    veinColor = '#F8FAF7';
    sunColor = '#FFB800';
    textUrjaColor = '#063D2E';
    textTerraColor = '#00B884';
  }

  const fontFamilies = "Outfit, Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="urjaTerra Icon"
        className={className}
        style={size ? { width: size, height: size } : undefined}
        {...props}
      >
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke={ringColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="200 64"
        />
        <path
          d="M34 68C30 46 46 32 66 34C68 54 54 70 34 68Z"
          fill={leafColor}
        />
        <path
          d="M34 68L58 44"
          fill="none"
          stroke={veinColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="75" cy="25" r="7.5" fill={sunColor} />
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <svg
        viewBox="0 0 360 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="urjaTerra"
        className={className}
        style={size ? { height: size, width: 'auto' } : undefined}
        {...props}
      >
        <g transform="translate(110 0) scale(1.4)">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={ringColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="200 64"
          />
          <path
            d="M34 68C30 46 46 32 66 34C68 54 54 70 34 68Z"
            fill={leafColor}
          />
          <path
            d="M34 68L58 44"
            fill="none"
            stroke={veinColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="75" cy="25" r="7.5" fill={sunColor} />
        </g>
        <text
          x="180"
          y="228"
          textAnchor="middle"
          fontFamily={fontFamilies}
          fontSize="72"
          letterSpacing="-1.5"
        >
          <tspan fill={textUrjaColor} fontWeight="500">
            urja
          </tspan>
          <tspan fill={textTerraColor} fontWeight="700">
            Terra
          </tspan>
        </text>
      </svg>
    );
  }

  // Default: Horizontal 'full' logo
  return (
    <svg
      viewBox="0 0 420 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="urjaTerra"
      className={className}
      style={size ? { height: size, width: 'auto' } : undefined}
      {...props}
    >
      <g transform="translate(0 0)">
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke={ringColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="200 64"
        />
        <path
          d="M34 68C30 46 46 32 66 34C68 54 54 70 34 68Z"
          fill={leafColor}
        />
        <path
          d="M34 68L58 44"
          fill="none"
          stroke={veinColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="75" cy="25" r="7.5" fill={sunColor} />
      </g>
      <text
        x="116"
        y="70"
        fontFamily={fontFamilies}
        fontSize="62"
        letterSpacing="-1.2"
      >
        <tspan fill={textUrjaColor} fontWeight="500">
          urja
        </tspan>
        <tspan fill={textTerraColor} fontWeight="700">
          Terra
        </tspan>
      </text>
    </svg>
  );
};
