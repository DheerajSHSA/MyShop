enum Blocked {
    Yes = 'Yes',
    No = 'No'
}

export class User {
    public constructor(
        public id: number,
        public name: string,
        public isBlocked: Blocked
    )
    {

    }
}
