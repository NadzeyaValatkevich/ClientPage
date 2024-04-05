import style from "./Logo.module.scss";

export const Logo = () => {
    return (
        <div className={style.logoBlock}>
            <svg width="106" height="80" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4232_20722)">
                    <path d="M41.6087 56.6573H37.6613L58.2323 12.4624H67.2101L44.1557 60.2235H34.7966L11.7422 12.4624H20.786L41.6087 56.6573Z" fill="white" />
                    <path d="M50.0563 28.7583H28.832L31.1756 23.8729L35.7484 14.3486H43.14L47.7128 23.8729L50.0563 28.7583Z" fill="#F39130" />
                    <path d="M44.2648 10.6883H34.6211L39.6133 0.226074L44.2648 10.6883Z" fill="#69C931" />
                </g>
                <defs>
                    <clipPath id="clip0_4232_20722">
                        <rect width="55.4237" height="60" fill="white" transform="translate(12)" />
                    </clipPath>
                </defs>
            </svg>
        </div>

    )
}