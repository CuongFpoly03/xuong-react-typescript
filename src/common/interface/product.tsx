export interface IProduct {
    _id?: string,
    namePro: string
    pricePro: number
    imgPro?: string[] | undefined;
    thumbnail?: string,
    quantityPro?: number
    descriptionPro?: string;
    color: string,
    size: string,
    category?: string,
    user?: string;
}

export interface Inputs {
    namePro: string
    pricePro: number
    imgPro: string[] | undefined;
    thumbnail?: string;
    quantityPro?: number
    descriptionPro?: string; color: string,
    size: string,
    category: string;
}