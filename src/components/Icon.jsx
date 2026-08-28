const paths = {
  shield: "M12 3 5 6.2v5.3c0 4.2 2.9 6.8 7 8.5 4.1-1.7 7-4.3 7-8.5V6.2L12 3Z",
  monitor: "M4 5.5h16v11H4v-11Zm4 14h8M12 16.5V19.5",
  check: "M5 12.5 9.5 17 19 7.5",
  clock: "M12 7.5V12l3 2M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
  calendar: "M7 4v3M17 4v3M4 9h16M6 6h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
  plus: "M12 8v8M8 12h8M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
  drop: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z",
  heart: "M12 20S4.5 15.4 3 10.8A5 5 0 0 1 12 7a5 5 0 0 1 9 3.8C19.5 15.4 12 20 12 20Z",
  pin: "M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21ZM12 11.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z",
  layers: "M12 4 4 8l8 4 8-4-8-4ZM4 12l8 4 8-4M4 16l8 4 8-4",
  pulse: "M3 12h4l2-6 4 12 2-6h6",
};

export function Icon({ name, size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
