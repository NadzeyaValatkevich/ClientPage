import { Transition } from 'react-transition-group';
import { CloseIcon } from "../../assets/icons/Close";
import style from "../Modal/Modal.module.scss";
import { ReactNode, useEffect } from 'react';
import classNames from "classnames";

type ModalPropsType = {
    active: boolean,
    onClose: (ev: React.MouseEvent<HTMLDivElement>) => void,
    setActive: (value: boolean) => void,
    children: ReactNode,
    type: string
};

export const Modal = ({ active, onClose, children, type }: ModalPropsType) => {

    // const hasVerticalScrollbar = () => {
    //     return document.documentElement.scrollHeight > window.innerHeight;
    // };

    useEffect(() => {
        if (active) {
            if (document.body.scrollHeight > window.innerHeight) {
                document.body.style.paddingRight = '17px';
            }
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = 'none';
        }
        return () => {
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = 'none';
        };
    }, [active]);

    if (!active) return null;

    return (
        <>
            <Transition in={active} timeout={350} unmountOnExit>
                {(state) => (
                    <div className={`${style.modal} ${style[`modal--${state}`]}`}>
                        {/* <div className={type === "houseModal" ? `${style.modalContent} ` : `${style.modalContentBooking}`}> */}
                        <div className={classNames(style.modalContent, {
                            [style.modalContentHouse]: type === "houseModal",
                            [style.modalContentBooking]: type === "bookingModal",
                        })}>
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