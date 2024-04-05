export type ChildAge = {
    value: number,
    label: string
};

export type Guests = {
    adults: number | null,
    children: number | null,
    childAges: ChildAge | null[]
};

export type DatesGuestsObject = {
    checkInDate: Date | null,
    checkOutDate: Date | null,
    guests: Guests
}