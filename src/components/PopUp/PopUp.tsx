import styles from "./PopUp.module.scss"

type PopUpPropsType = {
    content: string | null
}

export const PopUp = ({ content }: PopUpPropsType) => {

    return <div className={styles.popUp}>
        <p>{content}</p>
    </div>

}