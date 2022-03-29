// 1. (function() {
//     // sadəcə burda kod yazmağınıza icaze verilir
//     // teleb olunan 1-100 arasındakı ədədlərin ekrana cap edilməsini təmin etməkdir
//     // while for və digər loop expressionları istifadə etmək olmaz
// })()

// inputs

let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = [names, surnames, ages]

// //expected output
// // Ad: Eli,Soyad:Piriyev,Yas:23
// // Ad: Ehmed,Soyad:Memmedov,Yas:34

function inf() {
    const info = students.length;
    if (x = 0, x < info.length, x++) {
        console.log(`"Ad:"+ ${names} + ","+ "Soyad:"+${surnames}+ ","+"Yas:"+${ages}`)
    }
}
inf()



// inputs

// 3. let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
// let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
// let ages = [23, 34, 40, 58, 60];
// let students = {
//     adlar: names,
//     soyadlar: surnames,
//     yaslar: ages
// }

// //expected output
// // Ad: Eli,Soyad:Piriyev,Yas:23
// // Ad: Ehmed,Soyad:Memmedov,Yas:34

// inputs

// 4.  let students = [{
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