"use client";

interface Props {
  handleToggle: () => void;
}

function NavMobile({ handleToggle }: Props) {
  return (
    <div className="flex items-center md:hidden lg:order-2">
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="ml-1 inline-flex items-center rounded-lg p-2 text-sm lg:hidden"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={handleToggle}
      >
        <span className="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default NavMobile;
