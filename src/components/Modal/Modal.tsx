import { Transition } from 'react-transition-group';
import { CloseIcon } from "../../assets/icons/Close";
import style from "../Modal/Modal.module.scss";
import { ReactNode } from 'react';



type ModalPropsType = {
    active: boolean,
    onClose: (ev: React.MouseEvent<HTMLDivElement>) => void,
    setActive: (value: boolean) => void,
    children: ReactNode
};

export const Modal = ({ active, onClose, setActive, children }: ModalPropsType) => {

    return (
        <>
            <Transition in={active} timeout={350} unmountOnExit>
                {(state) => (
                    <div className={`${style.modal} ${style[`modal--${state}`]}`} onClick={() => setActive(false)}>
                        {/* <div className="modalWrapper"> */}
                        <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                            <CloseIcon onClick={onClose} />
                            {children}
                        </div>
                        {/* </div> */}
                    </div>
                )}

            </Transition >
        </>
    )
}