export class Item {
    public name: string = ''
    public link: string = ''
    public price: number = 0
    public constructor(
        name: string,
        link: string,
        price: number
    )
    {
        this.name = name;
        this.link = link;
        this.price = price;
    }
}
