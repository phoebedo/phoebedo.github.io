import _ from "lodash";

let autoId = 1;
let studentsPerPage = 5;
let students = [];

let data = localStorage.getItem("data");

if (data) {
    students = JSON.parse(data);
    if (students.length > 0) autoId = students[0].id + 1;
}

function getAll() {
    return _.cloneDeep(students);
}

function getOnePage(page) {
    const clone = _.cloneDeep(students);
    const total = _.ceil(clone.length / studentsPerPage);

    if (page > total) return [];
    else {
        const start = (page - 1) * studentsPerPage;
        const end = start + studentsPerPage;

        return {
            prev: page - 1 > 0 ? page - 1 : null,
            current: page,
            next: page + 1 <= total ? page + 1 : null,
            pages: total,
            total: clone.length,
            data: _.slice(clone, start, end),
        };
    }
}

function getOne(id) {
    const student = _.find(students, { id });

    if (student) return _.cloneDeep(student);
    else return null;
}

function addOne(obj) {
    console.log(obj);
    const newStudent = _.assign({ id: autoId }, obj);
    students.unshift(newStudent);
    autoId += 1;
    saveToLocal();

    return _.cloneDeep(newStudent);
}

function removeOne(id) {
    const student = _.find(students, { id });

    if (student) {
        _.pull(students, student);
        console.log(students);
        saveToLocal();

        return student;
    } else return false;
}

function updateOne({ id, name, dob, email, phone }) {
    const student = _.find(students, { id });

    if (student) {
        _.assign(student, { name, dob, email, phone });
        saveToLocal();

        return true;
    } else {
        return null;
    }
}

function search(value, page) {
    const clone = _.cloneDeep(students);
    const words = _.words(_.lowerCase(value));

    let matchScore = _.map(clone, (s) => {
        const fulltext = _.lowerCase(
            _.join(_.at(s, ["name", "email", "phone"]), " ")
        );

        let total = 0;

        _.each(words, (w) => {
            total += _.split(fulltext, w).length - 1;
        });

        return { student: s, score: total };
    });

    let matchStudent = _.filter(matchScore, "score");
    let sortByScore = _.reverse(_.sortBy(matchStudent, "score"));
    let result = _.map(sortByScore, (item) => item.student);

    const total = _.ceil(result.length / studentsPerPage);

    if (page > total) return [];
    else {
        const start = (page - 1) * studentsPerPage;
        const end = start + studentsPerPage;

        return {
            prev: page - 1 > 0 ? page - 1 : null,
            current: page,
            next: page + 1 <= total ? page + 1 : null,
            pages: total,
            total: result.length,
            data: _.slice(result, start, end),
        };
    }
}

function saveToLocal() {
    localStorage.setItem("data", JSON.stringify(students));
}

export { getAll, getOnePage, getOne, addOne, removeOne, updateOne, search };
