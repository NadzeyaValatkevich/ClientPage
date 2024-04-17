export type ChildAge = {
    value: number,
    label: string
};

export type Guests = {
    adults: number | null,
    children: number | null,
    childAges: ChildAge | null[]
};

export type DatesGuestsObjectType = {
    check_in_date: Date | string,
    check_out_date: Date | string,
    guests: Guests
}

export type DatesGuestsObjectRequestType = {
    check_in_date: Date | string,
    check_out_date: Date | string,
    max_places: number,
    main_object: number 
}