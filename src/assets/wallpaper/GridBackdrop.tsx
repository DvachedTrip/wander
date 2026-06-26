function GridBackdrop() {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-1"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="#1f2922"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export default GridBackdrop;
