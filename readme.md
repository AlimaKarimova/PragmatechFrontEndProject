### Imperative and Declarative Approach in programming
- Imperativ yanasma zamani yaddasa/melumata tesir etmek, onlarin veziyyetini deyismek ucun hereket alqoritmasi qurulur.Bu paradiqmaya esaslanan ilk proqramlasdirma dilleri masin kodlari ve assember olub.Yuksek dillere ise C, C++, Python, JavaScript, Java-ni misal getirmek olar.
- Deklarativ yanasma zamani ise arzu olunan netice tesvir olunur, lakin onu elde etmek ucun lazim olan hereket alqoritmasi tam xirdaliqlara qeder qurulmur.Yeni meqsed verilir amma meqsede nece catmalisan gosterilmir.Meselen Html ve Sql .Html teglerinden  istifade etdiyimiz zaman biz gostermirik ki yaddasin hansi hissesinden hansi melumati goturub ona hansi emeliyyatlari tetbiq etmeliyik.

### Proqramlaşdırma dillərinin dizayn olunması deyiləndə ağlınıza nə gəlir? Yəni bir proqramlaşdırma dili necə dizayn edilə bilər?

?

### Öz həyatınızda imperativ və deklarativ yanaşmaya aid nümunələr tapın

Gundelik heyatimizdan misal getirek.Yemek bisirmek isteyirik.Imperativ yanasmada:eti almalisan,onu yumalisan,cekmelisen,duzlamalisa,tavanin altini yandirirsan yag tokursen ve s.
Deklarativ yanasmada: axsama et yemeyi bisirilmelidi.

### Deklarativ yanaşma və funksiyalar arasında əlaqəni necə qura bilərsiniz?

Tutaq ki hazir metodlardan istifade edirik.Bu metodlar imperativ yanasma ile yazilibç lakin biz onlari hazir metod seklinde istifade edirik ve qurdugumuz funksiya deklarativ yanasma ile qurulmus olur. 

### imperative və deklarative yanaşmaya aid kod nümunələri yazın özünüz üçün. Düzgün olub olmadığını yoldaşlarınızla analiz edin

function onlyOdd(array) {
  let result = []

  for (const element of array) {
    if (element % 2 !== 0) {
      result.push(element)
    }
  }

  return result
}
Bu imperativ yanasmadi.prosesin nece bas verdiyini xirdaliqlara qeder gosterilib.


function onlyOdd(array) {
  return array.filter((element) => element % 2 !== 0)
}

Bu ise deklarativ yanasmadi. Hazir metoddan istifade etmisik. Arxada prosesin nece bas verdiyi hansi addimlar atildigi gosterilmeyib.


### Function necə formada təyin olunur?
iki formada:function declaration ve function expression;
function makePair(num1, num2) {
    const arr = [];
    return arr.concat(nu++m1, num2)
}

function expression ile funksiya yaradilan zaman bir deyisen yaradilir ve funksiya ona menimsenilir.
var a = function() { 
    return 10; 
}
f.declaration vasitesile funksiya yaradilan zaman o kodun istenilen yerinde istifade oluna biler.F.expression ile yaradilan zaman ise yalniz teyin olunandan sonra istifade oluna biler.

### Fərqli formada function təyin etmə sizcə hansı hallarda lazım ola bilər?

Function expression az hallarda istifade olunsa da ele veziyyetler var ki f.declarationdan istifade bir sira problemlere sebeb olur.
Use strict rejimde f.declaration yalniz yerlesdiyi kod blokunun icinde gorunur, kod blokundan kenarda onu istifade etmek olmur.
amma eger f.expressiondan istifade olunsa evvelceden deyiseni elan edib sonra kod blokun icinde deyisene funksiya menimsetsek, bu funksiyani kod blokundan kenarda da istifade ede bilerik.

### function scope və global scope arasında fərqlər nədir?

global scope-da teyin olunan deyisenler kodun her yerinde funksiya daxilinde de istifade oluna biler.Funksiya daxilinde teyin olunan deyisenler ise yalniz funksiya daxilinde istifade oluna biler.  

### function ramdə necə yer tutur?
Куча (Heap) — это распределение динамической памяти. Объекты, функции и массивы в JavaScript размещаются в куче. Размер кучи определяется во время выполнения программы (а не во время компиляции), что делает ее динамической.
Funksiyalar, obyektler ve massivler heapde yer tutur.Onlarin tutdugu yer programm icra olunan zaman mueyyen ounur(kompilyasiya zamani yox),


<!-- novbeti ders ucun
Javascript kodlarının arxa planda işləmə prinsipi necədir?
Allocate memory-use memory- release memory ifadələri nə deməkdir?
Static allocation vs dynamic allocation
garbage collection nədir?
hoisting nədir?
scope və hoisting ifadələri arasında fərq nədir? -->