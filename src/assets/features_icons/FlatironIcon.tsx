export const FlatironIcon = ({ width = "24", height = "24", fill = "#0F2664" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 12L22 20H2C2 15.5815 5.5815 12 10 12H21ZM21 12L20 4H8M8.5 16H9.5M12.5 16H13.5M16.5 16H17.5"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};