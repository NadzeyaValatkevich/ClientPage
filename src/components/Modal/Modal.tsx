import { Transition } from 'react-transition-group';
import { CloseIcon } from "../../assets/icons/Close";
import style from "../Modal/Modal.module.scss";
import { ReactNode } from 'react';

type ModalPropsType = {
    active: boolean,
    onClose: (ev: React.MouseEvent<HTMLDivElement>) => void,
    setActive: (value: boolean) => void,
    children: ReactNode,
    type: string
};

export const Modal = ({ active, onClose, setActive, children, type }: ModalPropsType) => {

    return (
        <>
            <Transition in={active} timeout={350} unmountOnExit>
                {(state) => (
                    <div className={`${style.modal} ${style[`modal--${state}`]}`} onClick={() => setActive(false)}>
                        <div className={type === "houseModal" ? `${style.modalContent} ` : `${style.modalContentBooking}`} onClick={e => e.stopPropagation()}>
                            {type === "houseModal"
                                ? <CloseIcon onClick={onClose} color={"#0F2664"} />
                                : <div className={style["modalContentBooking__header"]}>
                                    <h3 className={style["modalContentBooking__header-title"]}>Бронирование</h3>
                                    {/* <button className={style["modalContentBooking__header-btn"]}>Сохранить</button> */}
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