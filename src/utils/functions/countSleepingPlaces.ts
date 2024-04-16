import { TotalBeds } from "../../redux/types/rentalObjectTypes";
import { getNounEnding } from "./countRooms";

export const countSleepingPlaces = (sleepingPlaces: TotalBeds) => {

    const totalPlaces = Object.entries(sleepingPlaces).reduce((acc, [type, count]) => {
        if(type === "double_bed") {
            return acc + count * 2;
        }
        return  acc + count;
    }, 0)

    const placesString = `${totalPlaces} ${getNounEnding(totalPlaces, ['место', 'места', 'мест'])}`;

    return `${placesString}`
};
