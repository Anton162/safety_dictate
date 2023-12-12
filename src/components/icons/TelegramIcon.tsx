import React from "react";
import styled from "styled-components";

export const TelegramIcon = () => {
  return (
    <CircularIcon>
      <button>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_194_73)">
            <path
              d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM11.712 5.44C11.592 6.704 11.072 9.776 10.808 11.192C10.696 11.792 10.472 11.992 10.264 12.016C9.8 12.056 9.448 11.712 9 11.416C8.296 10.952 7.896 10.664 7.216 10.216C6.424 9.696 6.936 9.408 7.392 8.944C7.512 8.824 9.56 6.96 9.6 6.792C9.60556 6.76655 9.60482 6.74014 9.59785 6.71504C9.59088 6.68995 9.57788 6.66693 9.56 6.648C9.512 6.608 9.448 6.624 9.392 6.632C9.32 6.648 8.2 7.392 6.016 8.864C5.696 9.08 5.408 9.192 5.152 9.184C4.864 9.176 4.32 9.024 3.912 8.888C3.408 8.728 3.016 8.64 3.048 8.36C3.064 8.216 3.264 8.072 3.64 7.92C5.976 6.904 7.528 6.232 8.304 5.912C10.528 4.984 10.984 4.824 11.288 4.824C11.352 4.824 11.504 4.84 11.6 4.92C11.68 4.984 11.704 5.072 11.712 5.136C11.704 5.184 11.72 5.328 11.712 5.44Z"
              fill="#3C3C3C"
            />
          </g>
          <defs>
            <clipPath id="clip0_194_73">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </CircularIcon>
  );
};

const CircularIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid var(--unnamed, #3c3c3c);
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;
