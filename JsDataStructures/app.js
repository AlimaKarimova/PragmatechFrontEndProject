// 1 tapsiriq yazildi
// (function (i){
//     console.log(i)
//     if (i < 100) {
//         1*arguments.callee(++i)
//     }
// })(1)


// 2 tapsiriq - yazildi
// let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
// let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
// let ages = [23, 34, 40, 58, 60];
// let students = [names, surnames, ages]

// expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

// function info() {
//     let uzunluq=names.length;

//     for (let i = 0; i < uzunluq; i++ ) {      
//         console.log(`Ad: ${names[i]},Soyad:${surnames[i]},Yas:${ages[i]}`)
//     }
// }
// info()



// 3 tapsiriq - yazildi

// let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
// let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
// let ages = [23, 34, 40, 58, 60];
// let students = {
//     adlar: names,
//     soyadlar: surnames,
//     yaslar: ages
// }

// function info() {
//     let uzunluq=names.length;
//     for (let i = 0; i <uzunluq; i++) {
//         console.log(`Ad: ${students.adlar[i]},Soyad:${students.soyadlar[i]},Yas:${students.yaslar[i]}`)
//     }

// }
// info()

// //expected output
// // Ad: Eli,Soyad:Piriyev,Yas:23
// // Ad: Ehmed,Soyad:Memmedov,Yas:34

// 4tapsiriq - yazildi

// let students = [{
//     ad: 'Eli',
//     soyad: 'Piriyev',
//     yas: 23
// }, {
//     ad: 'Ehmed',
//     soyad: 'Memmedov',
//     yas: 34
// }, {
//     ad: 'Sara',
//     soyad: 'Qurbanova',
//     yas: 40
// }, {
//     ad: 'Sevda',
//     soyad: 'Ezizova',
//     yas: 58
// }, {
//     ad: 'Qurban',
//     soyad: 'Sadiqzade',
//     yas: 60
// }]

// //expected output
// // Ad: Eli,Soyad:Piriyev,Yas:23
// // Ad: Ehmed,Soyad:Memmedov,Yas:34

// function info() {
//     students.map(student => console.log(`Ad: ${student.ad},Soyad:${student.soyad},Yas:${student.yas}`))    
// }
// info()




// (function (i){
//     console.log(i)
//     if (i < 100) {
//         1*arguments.callee(++i)
//     }
// })(1)