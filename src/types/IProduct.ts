export interface IProduct {
   id: number;
   title: string;
   price: number;
   count: number
}

export interface IProductWithCount extends IProduct {
  count: number;
}