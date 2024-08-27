import { useEffect, useRef } from "react";
import styles from "./Popover.module.scss";

type PopoverPropsType = {
    isOpen: boolean,
    requirementsText?: string | string[],
    onClose?: () => void,
    refBtn: any
}

export const Popover = ({ isOpen, onClose, requirementsText, refBtn }: PopoverPropsType) => {
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleOutsideClick = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node) &&
                refBtn.current && !refBtn.current.contains(event.target as Node)) {
                onClose?.();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose, refBtn]);

    if (!isOpen) return null;

    return (
        <div className={styles.popover} ref={popoverRef}>
            {Array.isArray(requirementsText) ? (
                <ul className={styles.requirementsList}>
                    {requirementsText.map((item: string) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            ) : (
                <p>{requirementsText}</p>
            )}
        </div>
    )
}