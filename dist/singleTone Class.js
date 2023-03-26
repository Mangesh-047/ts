"use strict";
// let cl = console.log;
class School {
    constructor(schoolname, schoolID) {
        this.schoolname = schoolname;
        this.schoolID = schoolID;
    }
    static getInstance(sn, sid) {
        if (School.instance) {
            return this.instance;
        }
        else {
            return this.instance = new School(sn, sid);
        }
    }
}
// let sch = new School('Hitech','#123')
let sch = School.getInstance('fasdf', 'fasf');
let fsadfsdf = School.getInstance('fasdf', 'fasf');
cl(sch);
cl(fsadfsdf);
cl(School.instance);
