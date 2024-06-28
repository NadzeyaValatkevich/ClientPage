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
                d="M2.00391 9.03835C4.65739 6.38866 8.25401 4.90039 12.0039 4.90039C15.7538 4.90039 19.3504 6.38866 22.0039 9.03835"
                stroke={fill}
                strokeWidth="1.08681"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.44629 13.4809C7.92229 12.0109 9.92057 11.1855 12.0037 11.1855C14.0868 11.1855 16.0851 12.0109 17.5611 13.4809"
                stroke={fill}
                strokeWidth="1.08681"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.0247 18.5298C12.3964 18.5298 12.6978 18.2285 12.6978 17.8567C12.6978 17.485 12.3964 17.1836 12.0247 17.1836C11.6529 17.1836 11.3516 17.485 11.3516 17.8567C11.3516 18.2285 11.6529 18.5298 12.0247 18.5298Z"
                fill={fill}
                stroke={fill}
                strokeWidth="1.08681"
                strokeMiterlimit="10"
            />
        </svg>
    );
};