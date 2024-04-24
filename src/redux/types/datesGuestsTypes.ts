export type ChildAge = {
    value: number,
    label: string
};

export type GuestsType = {
    adults: number | null,
    children: number | null,
    childAges: Array<ChildAge | undefined>
};

export type DatesGuestsObjectType = {
    check_in_date: Date | string,
    check_out_date: Date | string,
    guests: GuestsType
}

export type DatesGuestsObjectRequestType = {
    check_in_date: Date | string,
    check_out_date: Date | string,
    max_places: number,
    main_object: number 
}