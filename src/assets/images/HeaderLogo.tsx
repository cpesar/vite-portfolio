const HeaderLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 400"
    width="130"
    height="110"
    style={
      {
        //   marginTop: "-40px",
        // marginRight: "-30px"
        //   marginLeft: "-30px",
      }
    }
  >
    {/* Computer Screen - Top section all purple, rest blue */}
    {/* Main screen outline with blue fill */}
    <path
      d="M100,155 L100,270 Q100,300 130,300 L370,300 Q400,300 400,270 L400,155 L100,155 Z"
      fill="rgb(140, 206, 222)"
    />

    {/* Top section all purple */}
    <path
      d="M100,155 L400,155 L400,130 Q400,100 370,100 L130,100 Q100,100 100,130 L100,155 Z"
      fill="rgb(197, 130, 182)"
    />

    {/* Code area with rounded corners */}
    <path
      d="M125,155 L375,155 L375,260 Q375,275 360,275 L140,275 Q125,275 125,260 Z"
      fill="rgb(140, 206, 222)"
    />

    {/* Screen Content: Centered < /> Brackets  */}
    {/* Brackets */}
    <text
      x="175"
      y="220"
      fontFamily="Consolas, monospace"
      fontSize="60"
      fill="rgb(250, 184, 83)"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      &lt;
    </text>
    <text
      x="265"
      y="220"
      fontFamily="Consolas, monospace"
      fontSize="60"
      fill="rgb(250, 184, 83)"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      /&gt;
    </text>

    {/* Blinking cursor */}
    <rect x="320" y="207" width="3" height="25" fill="#ffffff">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </rect>

    {/* Toolbar elements (dots for window controls)*/}
    <circle cx="130" cy="125" r="5" fill="#ff5f56" />
    <circle cx="150" cy="125" r="5" fill="#ffbd2e" />
    <circle cx="170" cy="125" r="5" fill="#27c93f" />
  </svg>
);

export default HeaderLogo;
