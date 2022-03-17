

// 1. a b və c ədədləri verilir. a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.
// let a = 230;
// let b = 23;
// let c = 13;
// if(c!=a && c!=b && a!=b){
//     if (c-a>0 && c-b>0){
//         if (c-a>c-b){
//             console.log('b c-ye yaxindir')
//         }
//         else {
//             console.log('a c-ye yaxindir')
        
//         }
//     }
//     else {
//         if (c-a>c-b){
//             console.log('a c-ye yaxindir')
//         }
//         else {
//             console.log('b c-ye yaxindir')
        
//         }
//     }
// }
// else{
//     console.log('beraberlik sertini pozmusuz')
    
// }



// 2.  x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir)
// prompt vasitesile daxil olunan her deyer string qebul olunur deye bu usulla yazdim.
// let x= null;
// let netice= typeof x;
// alert(`daxil etdiyiniz deyerin data tipi ${netice}`)



// 3. verilən x ədədinin rəqəmlərini ekrana çap edən proqram yazın
// let x = 625;
// let y = String(x);
// for (let i = 0; i < y.length; i++) {
//     console.log(y[i])
// }



// 4. verilən 4 ədədi böyükdən kiçiyə doğru ekrana çap edən program yazın

// const Numbers= [65, 3, 84, 12];
// let AzalanSira= Numbers.sort(function(a, b){return b-a});
// console.log(AzalanSira)


// 5. verilən kəsirli ədədin (nümumə: 4.234) tam hissəsi ilə kəsirli hissəsini ayrı ayrı ekrana çap edən program yazın

// let x = 4.234;
// x= String(x)
// let y = x.split(".");
// alert(y[0])
// alert(y[1])

// 6. 3 nöqtənin koordinatları verilir.Bu verilən koordinatlara görə a nöqtəsinə ən yaxın nöqtəni tapan proqram yazın
// a_x=120,a_y=200
// b_x=230,b_y=400
// c_x=210,c_y=345