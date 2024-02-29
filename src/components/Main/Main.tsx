import styleContainer from "../../common/styles/Container.module.scss";
import { HouseCard } from "../HouseCard";
import style from "./Main.module.scss";

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <HouseCard />
                <HouseCard />
            </div>
        </div>
    )
}