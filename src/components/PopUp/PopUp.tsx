import { CloseIcon } from "../../assets/icons/Close"
import styles from "./Popup.module.scss"

type PopupPropsType = {
    content: string | null,
    setOpenModal: (value: boolean) => void
}

export const Popup = ({ content, setOpenModal }: PopupPropsType) => {

    const splitContentIntoSentences = (text: string | null) => {
        return text?.match(/[^\.!\?]+[\.!\?]+/g)
    };

    const sentences = splitContentIntoSentences(content);

    const handleOnClosePopup = () => {
        setOpenModal(false)
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