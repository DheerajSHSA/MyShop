export class Item {
    public name: string = "";
    public image: File = new File([], 'defaultName');
    public price: number = 0;

    public constructor(name: string, file: File, price: number)
    {
        this.name = name;
        this.image = file;
        this.price = price;
    }
}
