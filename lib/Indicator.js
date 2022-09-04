const Indicator = ({ className, fill }) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 10 6"
      width="10"
      height="6"
      className={className}
    >
      <path
        id="Rounded Rectangle 1"
        className="s0"
        d="m3 0h4c1.7 0 3 1.3 3 3 0 1.7-1.3 3-3 3h-4c-1.7 0-3-1.3-3-3 0-1.7 1.3-3 3-3z"
      />
    </svg>
  )
}

export default Indicator
