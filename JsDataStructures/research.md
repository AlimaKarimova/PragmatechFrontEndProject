### V8 Execution Context

### Memory Heap
JS engine-lar melumatlari saxlamaq ucun  2 yere malikdir: ***heap*** ve ***stack***.
Engine-lar onlari muxtelif meqsedler ucun istifade edir.
![](https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/5a190/stack-heap-pointers.png)

Heap obyekt ve funksiyalari, yeni dinamik melumatlari yaddasda saxlamaq ucun nezerde tutulub.
###### *Heap* ve *Stack*-in ferqli cehetleri:

1.                     Stack- primitiv deyerler                               Heap - obyekt ve funksiyalar      
2.                     Stack - hecm kompilyasiya zamani melumdur              Heap - hecm icra zamani melumdur   
3.                     Stack - limitli yaddas hecmi ayirir.                   Heap - ayrilan yaddas hecmine limit qoymur

### Event Loop
![](https://habrastorage.org/r/w1560/getpro/habr/post_images/42f/b62/4db/42fb624db53215724d750b3c416b1bf5.png)
![](https://habrastorage.org/r/w1560/getpro/habr/post_images/d1a/f0e/8a4/d1af0e8a458a975c34df719a4572f7d6.png)
Coxaxinliq Js-de event loop vasitesile temin olunur.

### Parser

![](https://miro.medium.com/proxy/1*ZIH_wjqDfZn6NRKsDi9mvA.png)
Parserin isi kodu goturub onu tokenlere parcalamaq ve ***AST*** - `Abstract Sintatic Tree` yaratmaqdir.

### AST

`Abstract Sintatic Tree` - proqrammin(kodun) yaddasda strukturlu sekilde tesviridir.
Как указано выше, парсер буде строить структуру, которая показывает семантику программы. AST состоит из узлов (nodes). Каждый узел — обычный JavaScript объект, у которого есть свойство type, которое определяет тип узла, а также дополнительная информация, которая зависит от типа.

### Binary Code

`Binary code`- melumatlarin ikili say sistemi vasitesile(0 ve 1) tesvir olunmasi demekdir.

### JİT

JIT-in aciqlamasi Just In Time demekdir.kompilyasiya dillerinden ferqli olaraq Js-de kompilyasiya icra zamani bas verir evvelceden yox.

### Javascript objects

JS-de 8 data tipi var onlardan 7si primitiv 1-i ise reference-dir:obyekt.`Obyektler` eyni ve ya muxtelif xasseli deyerleri saxlamaq ucun istifade olunur.Obyektler heap yaddasda saxlanilir ve birbasa onlarin ustunde emliyyat ede bilmirik.Onlarla emeliyyat aparmaq ucun reference-den istifade edirik.
