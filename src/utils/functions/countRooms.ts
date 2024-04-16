export const countRooms = (rooms: string[]) => {
    
    const bedroomCount = rooms.filter((room: string) => room === "спальня").length; 
    const livingRoomCount = rooms.filter((room: string) => room === "гостиная").length; 

    const bedroomString = `${bedroomCount} ${getNounEnding(bedroomCount, ['спальня', 'спальни', 'спален'])}`;
    const livingRoomString = `${livingRoomCount} ${getNounEnding(livingRoomCount, ['гостиная', 'гостиные', 'гостиных'])}`;

    return `${bedroomString}, ${livingRoomString}`;
};

export function getNounEnding(num: number, endings: string[]) {
    if(num % 10 === 1 && num % 100 !== 11) {
        return endings[0]
    } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
        return endings[1];
    } else {
        return endings[2];
    }
}