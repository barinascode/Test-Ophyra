export interface IProduct{
    id:string;
    title: string;
    description:string;
    image:string;
    price:string;
}

export interface IFetchProductsResponse {
    current_page : number;
    data : IProduct[];
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path :string;
    per_page: number;
    prev_page_url: string |null;
    to: number;
    total: number;
}
