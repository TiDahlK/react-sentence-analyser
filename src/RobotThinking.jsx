import "./RobotThinking.css";

const CuteRobotThinking = ({ renderBubbles }) => {
  return (
    <div
      style={{
        transform: "scale(0.5)",
        transformOrigin: "top left",
        maxWidth: "200px",
        position: "absolute",
        top: "-143%",
        left: "70%",
        zIndex: 0,
      }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* Head */}
          <g className="animate-bob">
            {/* Robot Antenna */}
            <line
              x1="100"
              y1="40"
              x2="100"
              y2="60"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
            <circle cx="100" cy="35" r="5" fill="var(--color-primary)" />
            <rect
              x="60"
              y="60"
              width="80"
              height="60"
              rx="20"
              fill="white"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />

            {/* Eyes */}
            <circle cx="85" cy="90" r="7" fill="var(--color-primary)" />
            <circle cx="115" cy="90" r="7" fill="var(--color-primary)" />

            {/* Blush */}
            <circle
              cx="75"
              cy="100"
              r="3"
              fill="var(--color-primary)"
              opacity="0.1"
            />
            <circle
              cx="125"
              cy="100"
              r="3"
              fill="var(--color-primary)"
              opacity="0.1"
            />
          </g>

          {/* Thought Bubbles */}
          {renderBubbles && (
            <g>
              <circle
                cx="145"
                cy="40"
                r="7"
                fill="var(--color-primary)"
                className="animate-pulse delay-200"
              />
              <circle
                cx="160"
                cy="25"
                r="4"
                fill="var(--color-primary)"
                className="animate-pulse delay-400"
              />
              <circle
                cx="170"
                cy="15"
                r="2.5"
                fill="var(--color-primary)"
                className="animate-pulse delay-600"
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};

export default CuteRobotThinking;
