export const formatPeople = (adults: any, children: any) => {
        let valueCountPeople = "";

        if (adults % 10 === 1 && adults !== 11) {
            valueCountPeople = adults + " взрослый, ";
        } else {
            valueCountPeople = adults + " взрослых, ";
        }


        if (children === 1) {
            valueCountPeople = valueCountPeople + children + " ребенок";
        } else if (children >= 2 && children <= 4) {
            valueCountPeople = valueCountPeople + children + " ребенка";
        } else {
            const lastDigit = children % 10;
            const secondLastDigit = Math.floor(children / 10) % 10;

            if (lastDigit >= 5 || lastDigit === 0 || (secondLastDigit !== 1 && lastDigit >= 1)) {
                valueCountPeople = valueCountPeople + children + " детей";
            } else {
                valueCountPeople = valueCountPeople + children + " ребенок";
            }
        }

        return valueCountPeople;
    };