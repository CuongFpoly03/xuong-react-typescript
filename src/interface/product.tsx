export interface IProduct {
    _id?: string,
    namePro: string
    pricePro: number
    imgPro?: string
    imglistPro?: string
    quantityPro?: number
    descriptionPro?: string;
    category?: string;
    user?: string;
}

export interface Inputs {
    namePro: string
    pricePro: number
    imgPro?: string
    imglistPro?: string
    quantityPro?: number
    descriptionPro?: string;
}