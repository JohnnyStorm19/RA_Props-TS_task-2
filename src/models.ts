export type TCurrencies = {
    [key: string]: string;
}

export type TItem = {
    listing_id: number;
    title: string;
    currency_code: string;
    quantity: number;
    price: string;
    url: string;
    mainImage: string
}

export type TItemProps = {
    item: TItem;
}

export type TListingProps = {
    recievedData: TItem[]
}