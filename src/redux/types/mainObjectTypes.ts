type AddressType = {
    region: string;
    locality: string;
    address: string
};

export type MainObjectType = {
    id: number;
    name: string;
    booking_photo: string;
    full_address: AddressType | null;
    country: string | null;
}