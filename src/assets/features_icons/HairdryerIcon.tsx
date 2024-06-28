export const HairdryerIcon = ({ width = "24", height = "24", fill = "#0F2664" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="14.5" cy="7" r="4.5" stroke="#583711" />
            <path
                d="M11 4.5H2.6C2.54477 4.5 2.5 4.54477 2.5 4.6V9.9C2.5 9.95523 2.54477 10 2.6 10H11"
                stroke={fill}
            />
            <path d="M5 5V9.5" stroke={fill} />
            <path
                d="M18.5 4.5H20.4C20.4552 4.5 20.5 4.54477 20.5 4.6V9.9C20.5 9.95523 20.4552 10 20.4 10H18"
                stroke={fill}
            />
            <path
                d="M14 11.5L17.4662 21.4035C17.4848 21.4564 17.5432 21.4838 17.5957 21.4641L21.4043 20.0359C21.4568 20.0162 21.4829 19.9572 21.462 19.9051L17.5 10"
                stroke={fill}
            />
            <path d="M13 7H16" stroke={fill} strokeLinecap="round" />
        </svg>
    );
};