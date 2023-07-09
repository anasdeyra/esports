export default function BottomDecoration() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
        className="absolute bottom-2 left-2 md:bottom-4 md:left-4 "
      >
        <path
          d="M2 0V28H29"
          stroke="white"
          stroke-opacity="0.5"
          stroke-width="3"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29"
        viewBox="0 0 28 29"
        fill="none"
        className="absolute bottom-2 right-2 md:bottom-4 md:right-4 "
      >
        <path
          d="M26 0V27H0"
          stroke="white"
          stroke-opacity="0.5"
          stroke-width="3"
        />
      </svg>
    </>
  );
}
