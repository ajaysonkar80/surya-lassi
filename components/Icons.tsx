'use client';

// SVG Icons matching brand colors

export const IconPistachios = ({ className = 'w-12 h-12' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="currentColor"
    />
    <path
      d="M10.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-6 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
      fill="currentColor"
    />
  </svg>
);

export const IconBerry = ({ className = 'w-12 h-12' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="6" r="2.5" fill="currentColor" />
    <circle cx="16" cy="6" r="2.5" fill="currentColor" />
    <circle cx="6" cy="14" r="3" fill="currentColor" />
    <circle cx="14" cy="12" r="3.5" fill="currentColor" />
    <circle cx="18" cy="15" r="2.5" fill="currentColor" />
    <path
      d="M12 2v4M10 3v3M14 3v3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const IconProtein = ({ className = 'w-12 h-12' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Atom/Molecule representation */}
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <circle cx="18" cy="8" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="18" cy="16" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="6" cy="8" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="6" cy="16" r="2" fill="currentColor" opacity="0.7" />

    {/* Orbital paths */}
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="4"
      ry="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
  </svg>
);

export const IconCulture = ({ className = 'w-12 h-12' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Pot/Vessel */}
    <path
      d="M6 8h12M6 8c0-1.5 2-3 6-3s6 1.5 6 3M6 8v8c0 2 2 3 6 3s6-1 6-3V8M8 8v6c0 1 1 2 4 2s4-1 4-2V8"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M5 8h14M6 8c0-1.5 2.5-3 6-3s6 1.5 6 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6 8v8c0 2 2 3 6 3s6-1 6-3V8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const IconArrowRight = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export const IconCheck = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const IconMail = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);