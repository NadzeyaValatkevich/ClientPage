import { CloseIcon } from "../../assets/icons/Close"
import styles from "./Popup.module.scss"

type PopupPropsType = {
    content: string | null,
    setOpenModal: (value: boolean) => void,
    setModalBookingActive: (value: boolean) => void
    setModalContent: (value: string | null) => void
    resetStatus: () => void
}

export const Popup = ({ content, setOpenModal, setModalBookingActive, setModalContent, resetStatus }: PopupPropsType) => {

    const splitContentIntoSentences = (text: string | null) => {
        return text?.match(/[^\.!\?]+[\.!\?]+/g)
    };

    const sentences = splitContentIntoSentences(content);

    const handleOnClosePopup = () => {
        setOpenModal(false)
        setModalBookingActive(false)
        setModalContent(null)
        resetStatus()
    }

    return <div className={styles["popup-overlay"]}>
        <div className={styles["popup-content"]}>
            <CloseIcon onClick={handleOnClosePopup} color={"#0F2664"} />

            {sentences?.map((sentence: string, index: number) => (
                <p key={index}>{sentence.trim()}</p>
            )
            )}
        </div>
    </div>

}
