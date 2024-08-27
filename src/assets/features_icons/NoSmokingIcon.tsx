export const NoSmokingIcon = ({ width = "24", height = "24", fill = "#0F2664" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 14.5H3C2.72386 14.5 2.5 14.7239 2.5 15C2.5 15.2761 2.72386 15.5 3 15.5H15C15.2761 15.5 15.5 15.2761 15.5 15L15 14.5Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.9931 15.2846C17.9979 15.2569 18.0004 15.2283 18.0004 15.1992V14.6992C18.0004 14.4231 17.7765 14.1992 17.5004 14.1992C17.3387 14.1992 17.1949 14.276 17.1035 14.395L17.9931 15.2846Z"
                fill={fill}
            />
            <path d="M20 14.6992V15.1992" stroke={fill} strokeLinecap="round" />
            <path
                d="M17.4999 12C17.4999 11 17.8283 8 14.9999 8C12.1714 8 11.5 6.28851 11.5 5C11.5 3.71149 12.5 2.5 15 2.5"
                stroke={fill}
                strokeLinecap="round"
            />
            <path
                d="M19.9998 11.9999C19.9998 10.5 20.4667 6.19336 16.9999 5.5C14.4999 5 17 3.5 18.5002 2.5"
                stroke={fill}
                strokeLinecap="round"
            />
            <path d="M3 3L21 21" stroke={fill} strokeLinecap="round" />
        </svg>
    );
};