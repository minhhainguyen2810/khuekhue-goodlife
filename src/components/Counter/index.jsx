import { useState } from "react";

const Counter = ({ className }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="align-items-center d-flex">
      <a
        onClick={() => setCount((state) => (state > 1 ? state - 1 : 1))}
        role="button"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.23684 12.5C7.68456 12.5 7.23684 12.9477 7.23684 13.5C7.23684 14.0523 7.68456 14.5 8.23684 14.5H18.7632C19.3154 14.5 19.7632 14.0523 19.7632 13.5C19.7632 12.9477 19.3154 12.5 18.7632 12.5H8.23684Z"
            fill="#C98860"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.65789 0C0.743768 0 0 0.743768 0 1.65789V25.3421C0 26.2562 0.743768 27 1.65789 27H25.3421C26.2562 27 27 26.2562 27 25.3421V1.65789C27 0.743768 26.2562 0 25.3421 0H1.65789ZM2 25V2H25V25H2Z"
            fill="#C98860"
          />
        </svg>
      </a>
      <span className={className}>{count}</span>
      <a onClick={() => setCount((state) => state + 1)} role="button">
        <svg
          width="28"
          height="27"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 6.90788C14.5727 6.90788 15.037 7.3556 15.037 7.90788V12.5H19.4581C20.0308 12.5 20.4951 12.9477 20.4951 13.5C20.4951 14.0523 20.0308 14.5 19.4581 14.5H15.037V18.7631C15.037 19.3154 14.5727 19.7631 14 19.7631C13.4273 19.7631 12.963 19.3154 12.963 18.7631V14.5H8.54191C7.96917 14.5 7.50487 14.0523 7.50487 13.5C7.50487 12.9477 7.96917 12.5 8.54191 12.5H12.963V7.90788C12.963 7.3556 13.4273 6.90788 14 6.90788Z"
            fill="#C98860"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.65789C0 0.743768 0.771315 0 1.7193 0H26.2807C27.2287 0 28 0.743768 28 1.65789V25.3421C28 26.2562 27.2287 27 26.2807 27H1.7193C0.771315 27 0 26.2562 0 25.3421V1.65789ZM2.07407 2V25H25.9259V2H2.07407Z"
            fill="#C98860"
          />
        </svg>
      </a>
    </div>
  );
};

export default Counter;
