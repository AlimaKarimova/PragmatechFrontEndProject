// 2 tapsiriq - yazildi
// let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
// let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
// let ages = [23, 34, 40, 58, 60];
// let students = [names, surnames, ages]

//expected output
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
//     for (let i = 0; i <5; i++) {
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

// function info() {
//     students.map(student => console.log(`Ad: ${student.ad},Soyad:${student.soyad},Yas:${student.yas}`))    
// }
// info()


// //expected output
// // Ad: Eli,Soyad:Piriyev,Yas:23
// // Ad: Ehmed,Soyad:Memmedov,Yas:34

(function () {
    let i=1
    if (i < 100) {
        console.log(i);
        i++;
        return i;  
    }
    console.log(arguments.callee(i))

})()