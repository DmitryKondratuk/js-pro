// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количнство студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}
// 1task
console.log(Object.keys(subjects).join(','))

// 2task
let sumStudent = 0;
function sumStudents(subjects) {
    sumStudent = 0;
    for (let salary of Object.values(subjects)) {
        sumStudent += salary.students;
    }
}
sumStudents(subjects);
console.log(sumStudent)

let sumTeacher = 0;
function sumTeachers(subjects) {
    sumTeacher = 0;
    for (let salary of Object.values(subjects)) {
        sumTeacher += salary.teachers;
    }
}
sumTeachers(subjects);
console.log(sumTeacher)

// 3task
let sum = 0;
let subjectsArr = Object.values(subjects);
subjectsArr.forEach(element => {
    sum += element.students;
});
console.log(sum / subjectsArr.length)

// 4task
let newArr=Object.values(subjects)
console.log(newArr)



// 5task
let newArrSubjects = Object.entries(subjects)


function sortTeacher(newArrSubjects) {
    let sortArrSubjectsTeacher = newArrSubjects.slice();
    sortArrSubjectsTeacher.sort(function (left, right) {
        if (left.teachers < right.teachers) {
            return 1
        } else {
            return -1
        }
    })
   console.log(sortArrSubjectsTeacher) 
}
sortTeacher(newArrSubjects)