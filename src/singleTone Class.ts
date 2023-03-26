// let cl = console.log;


class School {

    static instance: School;

    private constructor(
        public schoolname: string,
        public schoolID: string
    ) { }

    static getInstance(sn: string, sid: string) {
        if (School.instance) {
            return this.instance
        } else {
            return this.instance = new School(sn, sid)
        }
    }
}

// let sch = new School('Hitech','#123')


let sch = School.getInstance('fasdf', 'fasf')
let fsadfsdf = School.getInstance('fasdf', 'fasf')

cl(sch)
cl(fsadfsdf)

cl(School.instance)