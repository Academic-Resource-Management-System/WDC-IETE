import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function AnimatedNumber({ targetNumber, duration }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation runs only once when it becomes visible
  });

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? targetNumber : 0 },
    config: { duration },
  });

  return (
    <div ref={ref}>
      <animated.div>
        {number.interpolate((value) => Math.floor(value))}
      </animated.div>
    </div>
  );
}

export default AnimatedNumber;
