### V8 Execution Context

JS high level dil olduguna gore birbasa masin dili ile isleye bilmir.
`Engine`- kodu masin diline ceviren kompilyator ve ya intrepretatordur.
JS-in bir co engine-lari var onlardan biri de V8-dir.Engine-larin is muhiti brauzerlerin daxilidir.Lakin Node Js yaradilandan sonra brauzerden kenarda istifade ede bilerik.
`Context`- JS-in icra olunma muhitidir.Yeni JS kodunun kompilyasiyasinin bas verdiyi ve icra olundu yerdir.Faktiki olaraq context JS global obyektin saxlanildigi yerdir.V8-in oz stack-i var, orda V8-in stack obyektleri saxlanilir.Hemcinin 

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

![event loop](https://miro.medium.com/max/800/0*4uI-TV9sKk4WwB5O.png)
![event loop](https://habrastorage.org/r/w1560/getpro/habr/post_images/d1a/f0e/8a4/d1af0e8a458a975c34df719a4572f7d6.png)

JS tekaxinli olmasina baxmayaraq brauzer API-leri sayesinde paralel olaraq bir nece is gormek mumkundur.

![video about js event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

- Loupe runs entirely in your browser.
- It takes your code.
- Runs it through esprima, a JS parser.
- Instruments it a bunch so that loupe knows where function calls, timeouts, dom events, etc happen.
- Adds a whole bunch of while loops everywhere to slow down the code as it runs.
- This modified code is then turned back into JavaScript and sent to a webworker (in your browser) which runs it.
- As it runs, the instrumentation sends messages to the visualisation about what is going on so it can animate things at the right time.
- It also has some extra magic to make dom events, and timers work properly.

Bu saytda event loop-un nece islediyne baxa bilerik: !(http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)



### Parser

![](https://miro.medium.com/proxy/1*ZIH_wjqDfZn6NRKsDi9mvA.png)

Parserin isi kodu goturub onu tokenlere parcalamaq ve ***AST*** - `Abstract Sintatic Tree` yaratmaqdir.

### AST

`Abstract Sintatic Tree` - Proqrammin(kodun) yaddasda strukturlu sekilde tesviridir.
AST duyunlerden(nodes) ibaretdir.Her duyun-type xusussiyetine malik JS obyektdir

### Binary Code

`Binary code`- melumatlarin ikili say sistemi vasitesile(0 ve 1) tesvir olunmasi demekdir.

### JİT

Kompilyasiya dillerinden ferqli olaraq Js-de kompilyasiya icra zamani bas verir evvelceden yox.JIT(aciqlamasi Just In Time demekdir) kompilyator cari zamanda isleyereq intrepretatora oxsasa da, onun melumat yigan bir sistemi var.Bu sistem `monitor` ve ye `profiler` adlanir.Bu sistem bir nece defe tekrarlanan kodlari axtarir ve onlari tekrarlanma tezliyine gore onlari "warm","hot" kimi qruplara bolur ve onlari esas kompilyatora gonderir.

### Javascript objects

JS-de 8 data tipi var onlardan 7si primitiv 1-i ise reference-dir:obyekt.`Obyektler` eyni ve ya muxtelif xasseli deyerleri saxlamaq ucun istifade olunur.Obyektler heap yaddasda saxlanilir ve birbasa onlarin ustunde emliyyat ede bilmirik.Onlarla emeliyyat aparmaq ucun reference-den istifade edirik.
