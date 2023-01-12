export class Item {
    name: string = ''
    imageLink: string = ''
    price: number = 0
    inStock: boolean = true

    public constructor(name: string, imageLink: string, price: number) {
        this.name = name;
        this.imageLink = imageLink;
        this.price = price;
    }
}
