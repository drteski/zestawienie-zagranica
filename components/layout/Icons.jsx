export function CarbonAdd(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"></path>
    </svg>
  );
}

export function SvgSpinners180RingWithBg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      ></path>
      <path
        fill="currentColor"
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
      >
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </path>
    </svg>
  );
}

export function CarbonReportData(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15 20h2v4h-2zm5-2h2v6h-2zm-10-4h2v10h-2z"
      ></path>
      <path
        fill="currentColor"
        d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"
      ></path>
    </svg>
  );
}

export function CarbonChevronRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
      ></path>
    </svg>
  );
}

export function CarbonCollapseAll(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M30 15h-2V7H13V5h15a2.002 2.002 0 0 1 2 2Z"
      ></path>
      <path
        fill="currentColor"
        d="M25 20h-2v-8H8v-2h15a2.002 2.002 0 0 1 2 2Z"
      ></path>
      <path
        fill="currentColor"
        d="M18 27H4a2.002 2.002 0 0 1-2-2v-8a2.002 2.002 0 0 1 2-2h14a2.002 2.002 0 0 1 2 2v8a2.002 2.002 0 0 1-2 2ZM4 17v8h14.001L18 17Z"
      ></path>
    </svg>
  );
}

export function CarbonTrashCan(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"></path>
      <path
        fill="currentColor"
        d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"
      ></path>
    </svg>
  );
}
