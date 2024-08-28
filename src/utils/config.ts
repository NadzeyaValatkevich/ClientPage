declare global {
    interface Window {
        extended: {
            REACT_APP_HOST: string;
        };
    }
}

export const API_HOST = window.extended.REACT_APP_HOST;
