import { Transition } from 'react-transition-group';
import { CloseIcon } from "../../assets/icons/Close";
import style from "../Modal/Modal.module.scss";
import { ReactNode, useEffect } from 'react';

type ModalPropsType = {
    active: boolean,
    onClose: (ev: React.MouseEvent<HTMLDivElement>) => void,
    setActive: (value: boolean) => void,
    children: ReactNode,
    type: string
};

export const Modal = ({ active, onClose, children, type }: ModalPropsType) => {

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [active]);

    return (
        <>
            <Transition in={active} timeout={350} unmountOnExit>
                {(state) => (
                    // <div className={`${style.modal} ${style[`modal--${state}`]}`} onClick={() => setActive(false)}>
                    <div className={`${style.modal} ${style[`modal--${state}`]}`}>
                        <div className={type === "houseModal" ? `${style.modalContent} ` : `${style.modalContentBooking}`} onClick={e => e.stopPropagation()}>
                            {type === "houseModal"
                                ? <CloseIcon onClick={onClose} color={"#0F2664"} />
                                : <div className={style["modalContentBooking__header"]}>
                                    <h3 className={style["modalContentBooking__header-title"]}>Бронирование</h3>
                                    <CloseIcon onClick={onClose} color={"#0F2664"} />
                                </div>
                            }
                            {children}
                        </div>
                    </div>
                )}

            </Transition >
        </>
    )
}