import styles from "./Close.module.scss";

type CloseIconPropsType = {
  onClick: (ev: React.MouseEvent<HTMLDivElement>) => void
};

export const CloseIcon = ({ onClick }: CloseIconPropsType) => {

  return (
    <div onClick={onClick} className={styles.closeIcon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="#3f260a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#424242"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
