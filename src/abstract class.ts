

abstract class Department {

    abstract startDate: string;

    abstract describe(): void
}


class Acoounting extends Department {
    startDate: string = 'fsaf'

    describe() {
        cl(`working`)
    }
}