// 2 tapsiriq - yazildi
// let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
// let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
// let ages = [23, 34, 40, 58, 60];
// let students = [names, surnames, ages]

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

// function inf() {
//     let uzunluq=names.length;

//     for (let i = 0; i < uzunluq; i++ ) {      
//         console.log(`Ad: ${names[i]},Soyad:${surnames[i]},Yas:${ages[i]}`)
//     }
// }
// inf()



// 3 tapsiriq - tezeden baxilmalidi keys values bunlara bax 

// let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
// let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
// let ages = [23, 34, 40, 58, 60];
// let students = {
//     adlar: names,
//     soyadlar: surnames,
//     yaslar: ages
// }

// function Info() {

//         for (let i = 0; i < names.length; i++) {
//             console.log(`Ad: ${names[i]},Soyad:${surnames[i]},Yas:${ages[i]}`)
//         }
// }
// Info()

// //expected output
// // Ad: Eli,Soyad:Piriyev,Yas:23
// // Ad: Ehmed,Soyad:Memmedov,Yas:34

// inputs

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

// function info() {
//     students.map(student => console.log(`Ad: ${student.ad},Soyad:${student.soyad},Yas:${student.yas}`))    
// }
// info()


// //expected output
// // Ad: Eli,Soyad:Piriyev,Yas:23
// // Ad: Ehmed,Soyad:Memmedov,Yas:34