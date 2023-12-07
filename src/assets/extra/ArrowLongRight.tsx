import React from "react";

export default function ArrowLongRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="160"
      height="16"
      viewBox="0 0 160 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M159.707 8.70709C160.098 8.31657 160.098 7.6834 159.707 7.29288L153.343 0.928919C152.953 0.538395 152.319 0.538395 151.929 0.928919C151.538 1.31944 151.538 1.95261 151.929 2.34313L157.586 7.99999L151.929 13.6568C151.538 14.0474 151.538 14.6805 151.929 15.0711C152.319 15.4616 152.953 15.4616 153.343 15.0711L159.707 8.70709ZM8.74228e-08 9L159 8.99999L159 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
        fill="#1E1E1E"
      />
    </svg>
  );
}
