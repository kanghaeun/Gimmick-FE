import React from 'react';
import Svg, {Circle, Defs, Mask} from 'react-native-svg';
import {scale} from 'react-native-size-matters';
import styled from 'styled-components/native';

const CircularProgress = ({icon, color, progress}) => {
  const radius = scale(110);
  const smallCircleRadius = scale(6.5);
  const circleCount = 8;
  const strokeWidth = scale(5);

  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * progress;

  const getSmallCircleStyle = index => {
    if (progress === 1) {
      return {
        fill: 'transparent',
        stroke: color,
        strokeWidth: 1.5,
        strokeOpacity: 0.64,
        fillOpacity: 0.64,
      };
    }

    const normalizedIndex = (index + 7) % circleCount;
    const circleThreshold = 1 - (normalizedIndex + 1) / circleCount;
    const isActive = progress <= circleThreshold;

    return {
      fill: isActive ? color : 'transparent',
      stroke: color,
      strokeWidth: 1.5,
      strokeOpacity: 0.64,
      fillOpacity: 0.64,
    };
  };

  const smallCirclePositions = Array.from({length: circleCount}).map(
    (_, index) => {
      const startAngle = -Math.PI / 2;
      const angle = startAngle + (index * 2 * Math.PI) / circleCount;
      return {
        x: radius + radius * Math.cos(angle),
        y: radius + radius * Math.sin(angle),
      };
    },
  );

  return (
    <Container>
      <Svg
        height={`${radius * 2.2}px`}
        width={`${radius * 2.2}px`}
        viewBox={`-${radius * 0.1} -${radius * 0.1} ${radius * 2.2} ${
          radius * 2.2
        }`}>
        <Defs>
          <Mask id="circleMask">
            <Circle
              cx={radius}
              cy={radius}
              r={radius + strokeWidth / 2}
              fill="white"
            />
            {smallCirclePositions.map((pos, index) => (
              <Circle
                key={`mask-${index}`}
                cx={pos.x}
                cy={pos.y}
                r={smallCircleRadius + strokeWidth / 2}
                fill="black"
              />
            ))}
          </Mask>
        </Defs>

        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={color}
          strokeOpacity={0.3}
          strokeWidth={strokeWidth}
          fill="none"
          mask="url(#circleMask)"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={color}
          strokeOpacity={0.64}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
          mask="url(#circleMask)"
        />

        {smallCirclePositions.map((pos, index) => {
          const style = getSmallCircleStyle(index);
          return (
            <Circle
              key={`circle-${index}`}
              cx={pos.x}
              cy={pos.y}
              r={smallCircleRadius}
              {...style}
            />
          );
        })}
      </Svg>
      <ImageContainer>
        <FoodText>{icon}</FoodText>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin-top: ${scale(40)}px;
`;

const ImageContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const FoodText = styled.Text`
  font-size: 125px;
`;

export default CircularProgress;
