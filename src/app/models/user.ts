import { Blocked } from "./blocked"

export class User {
    id: number = 0
    name: string = ''
    isBlocked: Blocked = Blocked.No

    public constructor(id: number, name: string, isBlocked: Blocked) {
        this.id = id;
        this.name = name;
        this.isBlocked = isBlocked;
    }
}
