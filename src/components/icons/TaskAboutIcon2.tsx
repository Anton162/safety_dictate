import React from "react";
import styled from "styled-components";

export const TaskAboutIcon2 = () => {
  return (
    <StyledIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <path
          d="M12.5 42.5H22.5C26.6421 42.5 30 45.8579 30 50V25C30 17.9289 30 14.3934 27.8033 12.1967C25.6066 10 22.0711 10 15 10H12.5C10.143 10 8.96447 10 8.23223 10.7322C7.5 11.4645 7.5 12.643 7.5 15V37.5C7.5 39.857 7.5 41.0355 8.23223 41.7678C8.96447 42.5 10.143 42.5 12.5 42.5Z"
          stroke="#3C3C3C"
          stroke-width="2.5"
        />
        <path
          d="M47.5 42.5H37.5C33.3579 42.5 30 45.8579 30 50V25C30 17.9289 30 14.3934 32.1967 12.1967C34.3934 10 37.9289 10 45 10H47.5C49.857 10 51.0355 10 51.7678 10.7322C52.5 11.4645 52.5 12.643 52.5 15V37.5C52.5 39.857 52.5 41.0355 51.7678 41.7678C51.0355 42.5 49.857 42.5 47.5 42.5Z"
          stroke="#3C3C3C"
          stroke-width="2.5"
        />
      </svg>
      <h2>Обучение</h2>
    </StyledIcon>
  );
};

const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
