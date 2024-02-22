import styleContainer from "../../common/styles/Container.module.scss";
import { HouseCard } from "../HouseCard";

export const Main = () => {
    return (
        <div>
            <div className={styleContainer.container}>
                <HouseCard />

            </div>
        </div>
    )
}