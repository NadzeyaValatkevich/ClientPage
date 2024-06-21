export const WifiIcon = ({ width = "24", height = "24", fill = "#0F2664" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.00391 9.03774C4.65739 6.38805 8.25401 4.89978 12.0039 4.89978C15.7538 4.89978 19.3504 6.38805 22.0039 9.03774"
                stroke={fill}
                strokeWidth="1.08681"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.44629 13.4805C7.92229 12.0105 9.92057 11.1852 12.0037 11.1852C14.0868 11.1852 16.0851 12.0105 17.5611 13.4805"
                stroke={fill}
                strokeWidth="1.08681"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.0247 18.529C12.3964 18.529 12.6978 18.2276 12.6978 17.8559C12.6978 17.4841 12.3964 17.1827 12.0247 17.1827C11.6529 17.1827 11.3516 17.4841 11.3516 17.8559C11.3516 18.2276 11.6529 18.529 12.0247 18.529Z"
                fill={fill}
                stroke={fill}
                strokeWidth="1.08681"
                strokeMiterlimit="10"
            />
        </svg>
    );
};