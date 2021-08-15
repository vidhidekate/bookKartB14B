export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  static price: any;

    constructor(id = 0 , name = '', description= '', price= 0, imageUrl= 'https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png' ){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
    

}
