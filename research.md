# Sual 1.Javascript proqramlaşdırma dili hansı sahələrdə istifadə olunur?

В первую очередь JavaScript широко используется во фронтенд-разработке. Этот язык вместе с HTML и CSS входит в базовый набор инструментов фронтендера. На JavaScript создаются приложения, которые исполняются в браузере на стороне клиента. Они обеспечивают интерактивность сайтов. Например, когда пользователь заполняет форму и нажимает кнопку «Подписаться», мгновенная реакция на это действие обычно обеспечивается кодом, написанным на JavaScript.Сегодня сфера *применения JavaScript не ограничиваются браузерами и веб-приложениями. На этом языке. например, можно:*
-Разрабатывать нативные приложения. Например, с помощью фреймворка React Native создаются приложения для Android и iOS.
-Серверные приложения. Node.js применяется для бэкенд-разработки. 
-Десктопные приложения. JS применяется в офисных пакетах Microsoft и OpenOffice, в приложениях компании Adobe.
-Программировать оборудование и бытовую технику, например, платёжные терминалы и телевизионные приставки.

# Sual 2. Aşağıdakı proqramlaşdırma terminlərinin qısa acıqlamasını yazın:

### Compilers

Процессор — самая важная часть компьютера. Он обрабатывает информацию, выполняет команды пользователя и следит за работой всех подключенных устройств.Для того, чтобы процессор понимал, какие команды записаны в программе, программисты создали компилятор — программу, которая преобразует программный код в машинный.
Преобразование программного кода в машинный называется компиляцией.Компиляция только преобразует код. Она не запускает его на исполнение.Это сложный процесс, в котором сначала текст программы разбирается на части и анализируется, а затем генерируется код, понятный процессору:
1.разбор
2,анализ
3.генерация
Современные процессоры отличаются друг от друга устройством, поэтому машинный код для одного процессора будет понятен, а для другого нет. Это касается и операционных систем: одна и та же программа будет работать на Windows, но не запустится на Linux или MacOS. Поэтому нужно пользоваться тем компилятором, который работает с нужным процессором и операционной системой.
Если программа будет работать на нескольких операционных системах, то нужен кросс-компилятор — компилятор, который преобразует универсальный машинный код. Например, GNU Compiler Collection(сокращенно GCC) поддерживает C++, Objective-C, Java, Фортран, Ada, Go и поддерживает разную архитектуру процессоров. Если коротко то Компилятор — преобразует текст программы в машинный код, определяет ряд ошибок в программе и оптимизирует ее работу. Выбирая, где компилировать программу, важно помнить о том, что машинный код для процессоров и операционных систем будет разным, и подобрать правильный компилятор

### Interpreters

Как Компилятор так и Интерпретатор имеют одно предназначение — *конвертировать инструкции языка высокого уровня (как C или Java) в бинарную форму, понятную компьютеру*.
Интерпретаторы не очень сильно отличаются от компиляторов. Они также конвертируют высокоуровневые языки в читаемые машиной бинарные эквиваленты. Каждый раз когда интерпретатор получает на выполнение код языка высокого уровня, то прежде чем сконвертировать его в машинный код, он конвертирует этот код в промежуточный язык. Каждая часть кода интерпретируется и выполняется отдельно и последовательно, и если в какой-то  части будет найдена ошибка, она остановит интерпретацию кода без трансляции следующей части кода.
*Главные отличия между компилятором и интерпретатором:*
1.Интерпретатор берет одну инструкцию, транслирует и выполняет ее, а затем берет следующую инструкцию. Компилятор же транслирует всю программу сразу, а потом выполняет ее.
2.Компилятор генерирует отчет об ошибках после трансляции всего, в то время как интерпретатор прекратит трансляцию после первой найденной ошибки.
3.Компилятор по сравнению с интерпретатором требует больше времени для анализа и обработки языка высокого уровня.
4.Помимо времени на обработку и анализ, общее время выполнения кода компилятора быстрее в сравнении с интерпретатором.

### Translators

Транслятор(англ. translator – переводчик) – это программа-переводчик. Она *преобразует программу, написанную на одном из языков высокого уровня, в программу, состоящую из машинных команд*.
Транслятор обычно выполняет также диагностику ошибок.Язык, на котором представлена входная программа, называется исходным языком, а сама программа – исходным кодом. Выходной язык называется целевым языком или объектным кодом.Цель трансляции – преобразовать текст с одного языка на другой, который понятен адресату текста. В случае программ-трансляторов, адресатом является техническое устройство (процессор) или программа-интерпретатор.Язык процессоров (машинный код) обычно является низкоуровневым.*Трансляторы реализуются в виде компиляторов или интерпретаторов*.

### Assemblers

Ассеемблер —  это транслятор программы из текста на языке ассемблера, в программу на машинном языке.
Как и сам язык, ассемблеры, как правило, специфичны для конкретной архитектуры, операционной системы и варианта синтаксиса языка, поскольку работают с мнемониками машинных инструкций определённого процессора, Ассемблеры могут быть мультиплатформенными или вовсе универсальными, то есть работать на разных платформах и операционных системах.
*Assembler — язык программирования низкого уровня, представляющий собой формат записи машинных команд*,Команды языка ассемблера один в один соответствуют командам процессора.

### Programming paradigms

*Парадигма программирования – это совокупность принципов, методов и понятий, определяющих способ конструиров ания программ.*
Язык программирования не обязательно использует только одну парадигму. Языки, поддерживающие несколько парадигм, называются мультипарадигменными.Разновидности парадигмы:
*Императивное программирование*: это парадигма, основанная на составлении алгоритма действий (инструкций/команд), которые изменяют состояние (информацию/данные/память) программы. Первыми языками программирования, основанными на таком подходе, были машинные коды и ассемблеры. 
*Декларативное программирование*: это парадигма, при которой описывается желаемый результат, без составления детального алгоритма его получения. В пример можно привести HTML и SQL.
*Объектно-ориентированное программирование*: В дан­ной парадигме программирования про­грам­ма раз­би­ва­ет­ся на объ­ек­ты – струк­ту­ры дан­ных, и ме­то­ды при­ме­няе­мые к объ­ек­там для изме­не­ния или за­про­са их со­стоя­ния.
*Функциональное программирование*: Представление программы в форме набора чистых функций, порождающих результаты на основе входных данных.
*Логическое программирование*: Методология логического программирования - подход, согласно которому программа содержит описание проблемы в терминах фактов и логических формул, а решение проблемы система выполняет с помощью механизмов логического вывода.
*Структурное программиирование*: парадигма программирования, в основе которой лежит представление программы в виде иерархической структуры блоков.

### Debugging

*Отладка — это процесс обнаружения причин возникновения ошибки и ее последующего исправления*.

### Boolean

Boolean — *примитивный тип данных в программировании, которые могут принимать два возможных значения:true и false*.Присутствует в подавляющем большинстве языков программирования как самостоятельная сущность или реализуется через численный тип данных. В некоторых языках программирования за значение истина полагается 1, за значение ложь — 0.Традиционным применением булева типа данных являются значения «да»/«нет» в отношении результата сравнение чисел в более сложных операциях.Все операции сравнения двух величин — вещественных и целых переменных или константы с переменной (равно, больше, меньше), функции проверки принадлежности вхождения некоторого элемента в множество и проверка на непустоту пересечения множеств возвращают в качестве результата булев тип.

### Char

Символьный тип (Сhar) — тип данных, предназначенный для хранения одного символа в определённой кодировке.Основным применением является обращение к отдельным знакам строки.

### Null

в JavaScript есть 2 вида типов: примитивы (строки, логические значения, числа, символы) и объекты.Объекты — это сложные структуры данных.Но бывают ситуации, когда объект не может быть создан. Для таких случаев JavaScript предоставляет специальное значение null, которое указывает на отсутствующий объект. 
*Null — примитивное значение, которое представляет собой намеренное отсутствие какого-либо значения объекта*.Null является ложным значением. Если в условных выражениях встречается ложное значение, то JavaScript приравнивает ложное значение к false.

### Command-line interface

это программа командной строки, которая принимает ввод текста для выполнения функций операционной системы.Основные команды:
- cd(change directory):показывает, в какой папке ты сейчас находишься
- dir:Список файлов и каталогов
- cd название каталога: Смена текущего каталога
- mkdir название каталога:Создание каталога
- cd ..: сменить текущий каталог на родительский (то есть каталог, который содержит в себе текущий).
- del, rmdir, rm: Удаление файлов 

### Low-level language

Низкоуровневые языки программирования — это такие языки, при помощи которых есть возможность «напрямую» обращаться к аппаратному функционалу компьютера:
- к процессору
-  к оперативной памяти и тд.
Низкоуровневые языки программирования являются базовыми, на которых строятся компьютерные технологии.При помощи низкоуровневых языков пишут:
- операционные системы
- прошивки для ядра
- драйверы для периферийных устройств
их часто применяют в сферах программирования, где нужен очень жесткий контроль над устройством, например, в:
- военной сфере
- медицинских программах
- инженерии
- космической сфере  
**Самый низкоуровневый язык программирования — это машинный код, в котором есть только «единицы и нули».** Чуть «выше» машинного кода, но в статусе низкоуровневого языка, располагается язык **ассемблера.**Язык ассемблера представляет собой более функциональный и понятный синтаксис по сравнению с машинным кодом. При помощи ассемблера можно воздействовать на все процессы, происходящие внутри компьютера.

### High-level language

Высокоуровневый язык программирования — **язык программирования, разработанный для быстроты и удобства использования программистом**. Использование разнообразных трансляторов и интерпретаторов обеспечивает связь программ, написанных при помощи языков высокого уровня, с различными операционными системами и оборудованием, в то время как их исходный код остаётся, в идеале, неизменным. **Основная черта высокоуровневых языков — это абстракция, то есть введение смысловых конструкций, кратко описывающих такие структуры данных и операции над ними, описания которых на машинном коде (или другом низкоуровневом языке программирования) очень длинны и сложны для понимания.Языкам высокого уровня свойственно умение работать с комплексными структурами данных**. В большинстве из них интегрирована поддержка строковых типов, объектов, операций файлового ввода-вывода и т. п.Языки программирования высокого уровнязаметно проще в изучении и применении. Программы, написанные с их помощью, можно использовать на любой компьютерной платформе при условии, что для нее существует транслятор данного языка. Эти языки вообще никак не учитывают свойства конкретного процессора и не предоставляют прямых средств для обращения к нему. 


### Markup language

Языки разметки часто путают с языками программирования . Однако они не одинаковы, так как язык разметки не имеет арифметических функций или переменных, как это делают языки программирования. Исторически разметка использовалась и используется в издательской и коммуникационной индустрии, а также между авторами , издателями и типографиями .
- Язык форматной разметки (Layout Markup или Presentation Markup) обеспечивает возможность формирования представления размечаемых документов для их воспроизведения на мониторе компьютера или в твердой копии.TEX, RTF (Rich Text Format), PDF (Portable Document Format),Postscript, HTML (Hyper Text Markup Language).
- Язык контентной разметки (Content Markup) обеспечивает разметку, определяющую семантическую структуру документа. SGML (Standard Generalized Markup Language), XML(eXtensible Markup Language). 


# Sual03: Veb səhifəsinin işləmə prinsipini anlayabilmək üçün aşağıdakı mövhumları araşdıraraq yazın

### İnternet ve intranet arasındakı fərqlər nədir?

Интернет является глобальной информационной паутиной со всеми вытекающими последствиями – обилие данных разного типа и разной степени полезности, широкие возможности для пользователя, отсутствие четкого контроля со стороны каких-либо органов власти и прочее.
Интранет можно назвать «мини-Интернетом» — это внутренняя сеть предприятия, основанная на таких же принципах, что и глобальная паутина. Как правило, интранет содержит сведения о сотрудниках и партнерах компании, а также информацию о различных мероприятиях и нововведениях.  В интранете используются те же технологии, что и в Интернете – гипертекст, протокол HTTP и т.д., принципиальная разница заключается лишь в масштабах.
Интернет является значительно более крупной и динамичной системой. Интранет – это замкнутая сеть, отрезанная от внешнего виртуального мира, и развивается она исключительно по инициативе людей, ее контролирующих.**Существование интранета посвящено одной-единственной функции – систематизация и обработка данных компании.**

### Server-side və client-side ifadələrinin mənası nədir?

Сторона клиента и сторона сервера-это термины веб-разработки, которые описывают, где выполняется код приложения.Большая часть Интернета основана на клиент-серверной модели. В этой модели пользовательские устройства взаимодействуют через сеть с центрально расположенными серверами, чтобы получить необходимые им данные, а не друг с другом.Устройства конечных пользователей, такие как ноутбуки, смартфоны и настольные компьютеры, считаются "клиентами" серверов, как если бы они были клиентами, получающими услуги от компании. Клиентские устройства отправляют запросы на серверы для веб-страниц или приложений, а серверы обслуживают ответы.Модель клиент-сервер используется, потому что серверы обычно более мощные и надежные, чем пользовательские устройства. 

### Server nədir və necə işləyir?

Сервер — это мощный компьютер, предназначенный для хранения информации и обеспечения доступа к ней с удалённых клиентских устройств. Тип данных, которые хранятся на сервере, зависит от его вида и назначения.в зависимости от её типа и назначения может выполнять разные полезные функции: 
- хранить информацию одного или нескольких сайтов. Так работают серверы интернет-провайдеров, оказывающих услуги хостинга
- координировать взаимодействие множества компьютеров, находящихся в одной сети. Классический пример — игровые серверы
- использоваться для хранения корпоративных данных и доступа сотрудников к ним. Один из возможных примеров — сервер в центральном офисе компании, на котором хранится и регулярно обновляется бухгалтерская база данных.


### Domain nədir və necə işləyir?

**Домен — это онлайн-адрес сайта, место его размещения в интернете. С технической позиции доменный адрес — запись в базе данных.**Когда пользователь указывает в поисковой строке доменное имя, компьютер понимает, какой сайт необходимо показать и по какому адресу отправить запрос.Когда вы вбиваем в поисковую строку домен, браузер понимает, где искать нужный сервер. 
Раньше адреса сайтов указывали цифрами. Чтобы найти сайт, пользователь вводил IP-адрес — комбинацию из четырёх чисел, разделённых точками. Но если компьютер может запомнить любое количество числовых комбинаций, то людям сложно удержать в голове несколько сотен IP-адресов. Поэтому цифры заменили на текстовые имена.

### HTTP nədir və nəyə lazımdır

HTTP – широко распространённый **протокол передачи данных**, изначально предназначенный для гипертекстовых документов, то есть документов, которые могут содержать ссылки, позволяющие организовать переход к другим документам.Чтобы сформировать HTTP-запрос, необходимо составить стартовую строку, а также задать по крайней мере один заголовок – это заголовок Host, который является обязательным, и должен присутствовать в каждом запросе. 

### URL və URI ifadələri arasındakı fərqləri izah edin.

URI (Uniform Resource Identifier, унифицированный идентификатор ресурса) – **путь до конкретного ресурса** (например, документа), над которым необходимо осуществить операцию (например, в случае использования метода GET подразумевается получение ресурса). Некоторые запросы могут не относиться к какому-либо ресурсу, в этом случае вместо URI в стартовую строку может быть добавлена звёздочка (астериск, символ «*»). Например, это может быть запрос, который относится к самому веб-серверу, а не какому-либо конкретному ресурсу.
Uniform Resource Locator (унифицированный определитель местонахождения ресурса).URI может содержать URL и URN.но URL указывает только адрес ресурса.
- Основная цель URI - идентифицировать ресурс и отличить его от других ресурсов, используя местоположение или имя.
- Основная цель - получить адрес или местоположение ресурса.
- URİ Используется в файлах HTML, XML и библиотек тегов, таких как XSLT и jstl, для идентификации ресурсов и двоичных файлов.
- URL используется для поиска только веб-страниц


#### Javascript

### interpreter və compiler dillər arasındakı fərqləri haqqında araşdırma edərək öz anladığınız formada yazın

- Interpreter dillerinde yazilan kod masin diline tercume olunan zaman setir-setir tercume olunur ve eger her hansi bir setirde error olsa is dayanir.Error cixan setre kimi olan kod tercume olunur.Ustunlukleri:dinamik tipizasiya, programin icrasinin addim-addim izlenilmesi, icra zamani deyisiklik etmek imkani.
- Kompayler dillerinde yazilan kod tercume olunan zaman kod butovlukde tercume olunur.Eger bir yerde sehv olsa kod tercume olunmayacaq.Kompayler dillerin kod tercumesi daha suretle bas verir.


### dəyişən və məlumat növləri arasındakı fərq nədir? Bunlar nə üçün istifadə olunur?

Deyisenler vasitesile biz yaddasin mueyyen hissesine muraciet edirik.Melumat novu ise deyisen ustunde hansi emeliyyat novlerini apara bilerik onu gosterir.Meselen number melumat novleri ile muxtelif riyazi hesablamalari apara bilerik.

### hər dilin özünə məxsus məlumat növləri mövcuddur. Bu məlumat növlərin dillərə görə fərqlənməsinin səbəbləri sizcə nədir?

Ferqlenme sebebi dillerin evvelceden hansi meqsedle yaradilmasi  ve hansi sahelerde daha cox istifade olunmasidir.Misal ucun JS frontendde, Python Suni itellekt sahesinde, oyunlari yazilmasi ve ya programlasdirma dilinin yazilmasi ucun C ve C++ dillerinden daha cox istifade olunur.

### javascriptdə dəyişən təyin edilmək üçün əsas üç açar söz var . let,var,const. Bu açar sözlərin vəzifələri arasındakı fərqlər nələrdir?
- var scopa malik deyil, yeni funksiya icerisinde deyisen var vasitesile  teyin olunsa funksiya xaricinde de istifade olunacak.var vasitesile tekraren eyni deyisen teyin olunsa error olmayacak.
- let vasitesile sonradan deyeri deyisile bilen deyisenler teyin olunur.local ve global scopa malikdir.
- const vasitesile  teyin olunan deyisenlerin deyeri sonradan deyisilmir.local ve global scopa malikdir.
### Proqramçı olaraq bir proqram yazarkən işi görmə addımlarımız necə olmalıdır?
- output teyin olunur 
- input teyin olunur
- inputa catmaq ucun alqoritm qurulur

##### Javascript

### Javascript kodları necə formada yazıla bilər?
Script taginin icinde yazila biler html faylinin head ve ya body hissesinda ve ya ayrica fayl yaradib o fayli html-e import etmek olar.
### Javascript kodlarının script tagları daxilində yazmaqla ayrı fayl formatında yazıb import etmek arasında nə fərq var?
Js kodlari azdisa script taginda yazila biler, lakin Js kodlari coxdusa ayrica fayla yazmaq daha meqsedeuygundu kodun oxunaqligi baximindan.
### Madem mənim brauzerimdə V8-Engine yüklüdür niyə html kodu daxilində yazılan javascript kodları işləmir.
cunki brauzer onlari js kimi yox html-in bir hissesi kimi qebul edir.
### ";" hansı hallarda istifadə edilir?
bir statement bitende.istifadesi bezi hallarda mecburi deyil lakin her statement bitende qoymaq meslehet gorurlur.Bu halda brauzer terefinden kodun oxunaqligi artir.Bezi hallarda ise ; qoyulmamagi errora sebeb olur.meselen [] moterizelerin qabagina js ; avtomatik elave etmir bu da errora sebeb olur
### Javascript-də comment yazmaq üçün neçə üsul var.
iki: bir setirli comment // vasitesile multiply lines comment ise /* */ vasitesile yazilir.
### let,var,const ifadələri arasında fərqlər nədir?
- var scopa malik deyil, yeni funksiya icerisinde deyisen var vasitesile  teyin olunsa funksiya xaricinde de istifade olunacak.var vasitesile tekraren eyni deyisen teyin olunsa error olmayacak.
- let vasitesile sonradan deyeri deyisile bilen deyisenler teyin olunur.local ve global scopa malikdir.
- const vasitesile  teyin olunan deyisenlerin deyeri sonradan deyisilmir.local ve global scopa malikdir.
### dəyişən təyin edərkən adlandırma qaydaları nələrdir?
Deyisen bir reqemle baslaya bilmez." _ ", " $ ", ve herflerle baslaya biler.adlandirma zamani herf, reqem ve " _ ", " $ " isarelerinden istifade etmek olar.JS deyisenleri registra hessasdir.Meselen: var car ve var Car eyni deyisen qebul olunmur.en cox istifade olunan usullar CamelCase, lower CamelCase
### let x=5;x=7 yazıldığı zaman nəticə 7 olur.Belə olan halda 5 dəyərinin aqibəti nə olur? Yaddaşda yer tutur mu 5 dəyəri yoxsa başqa proses mi gedir?
 yaddasdan silinir
### 5 dəyəri yaddasa yazılarkən 2-li say sisteminə çevrilir və ona görə yaddaşda tutduğu yer hesablanır.Bəs 5.34 dəyərinin yaddaşda tutduğu yeri necə hesablamaq olar?
### undefined, NaN və null dəyərlərinin yaddaşda nə qədər yer tutduğunu araşdırın
### let a; bu formada dəyişən təyin etmişəm.Bu dəyişən yaddaşda stack-da mı yoxsa heap-də mi yerləşir.Bu dəyişən yaddaşda yer tuturmu? Tutursa nə qədər yer tutur?
primitiv deyerler stack yaddasda, obyekt ve funksiyalar ise heap yaddasda yer tutur.bu primit deyisen oldugu ucun stack yaddasda yer tutacaq.deyeri ise undefined oldugu ucun undefined ne qeder yer tutursa o qeder yer tutacaq.
### Ümumiyyətlə sizə görə bir məlumat növünü başqa məlumat növünə çevirmək nəyə lazımdır?
bu meqsedimizden asilidi.Misal ucun prompt vaitesile string data tipinde  daxil olunan melumat uzerinde riyazi emel aparmaq isteyirikse onu mutleq numbere cevirmeliyik.
### Type Conversion necə formada həyata keçirilir?
Implicit Conversion - automatic type conversion
Explicit Conversion - manual type conversion
Implicit Conversion-avtomatik formada bas vere biler, misal ucun string ve numberi toplayanda number avtomatik stringe cevrilir.ve ya number ve boolean deyisenleri toplasaq, boolean avtomatik numbere cevrilecek.Explicit Conversion-ozumuz ceviririk.
### Type Conversion metodlarının siyahısını çıxarın
Number()
String()
Boolean() 


# 19 mart task

### Imperative and Declarative Approach in programming
- Imperativ yanasma zamani yaddasa/melumata tesir etmek, onlarin veziyyetini deyismek ucun hereket alqoritmasi qurulur.Bu paradiqmaya esaslanan ilk proqramlasdirma dilleri masin kodlari ve assember olub.Yuksek dillere ise C, C++, Python, JavaScript, Java-ni misal getirmek olar.
- Deklarativ yanasma zamani ise arzu olunan netice tesvir olunur, lakin onu elde etmek ucun lazim olan hereket alqoritmasi tam xirdaliqlara qeder qurulmur.Yeni meqsed verilir amma meqsede nece catmalisan gosterilmir.Meselen Html ve Sql .Html teglerinden  istifade etdiyimiz zaman biz gostermirik ki yaddasin hansi hissesinden hansi melumati goturub ona hansi emeliyyatlari tetbiq etmeliyik.

### Proqramlaşdırma dillərinin dizayn olunması deyiləndə ağlınıza nə gəlir? Yəni bir proqramlaşdırma dili necə dizayn edilə bilər?

?

### Öz həyatınızda imperativ və deklarativ yanaşmaya aid nümunələr tapın

Gundelik heyatimizdan misal getirek.Yemek bisirmek isteyirik.Imperativ yanasmada:eti almalisan,onu yumalisan,cekmelisen,duzlamalisa,tavanin altini yandirirsan yag tokursen ve s.
Deklarativ yanasmada: axsama et yemeyi bisirilmelidi.

### Deklarativ yanaşma və funksiyalar arasında əlaqəni necə qura bilərsiniz?

Tutaq ki hazir metodlardan istifade edirik.Bu metodlar imperativ yanasma ile yazilib lakin biz onlari hazir metod seklinde istifade edirik ve qurdugumuz funksiya deklarativ yanasma ile qurulmus olur. 

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

global scope-da teyin olunan deyisenler kodun her yerinde funksiya daxilinde de istifade oluna biler,hem globalda hem de funksiyada deyisile biler.Funksiya daxilinde teyin olunan deyisenler ise yalniz funksiya daxilinde istifade oluna biler ve deyisile biler.  

### function ramdə necə yer tutur?

Funksiyalar, obyektler ve massivler heapde yer tutur.Onlarin tutdugu yer programm icra olunan zaman mueyyen ounur(kompilyasiya zamani yox),


<!-- novbeti ders ucun
Javascript kodlarının arxa planda işləmə prinsipi necədir?
Allocate memory-use memory- release memory ifadələri nə deməkdir?
Static allocation vs dynamic allocation
garbage collection nədir?
hoisting nədir?
scope və hoisting ifadələri arasında fərq nədir? -->
![https://felixgerschau.com/static/79486d91b22a7c1b4044fce88a4cae20/5a190/js-event-loop-explained.png]

[Melumatlar bu saytdan goturulub](https://felixgerschau.com/javascript-memory-management/#the-memory-heap-and-stack)

## :heavy_check_mark:Call Stack
![](https://felixgerschau.com/static/79486d91b22a7c1b4044fce88a4cae20/5a190/js-event-loop-explained.png)
Js biraxinli dildir.Yeni ki bir sefere ancaq bir isi gore biler cunki sadece bir call stack-e malikdir.Call stack mexanizmi  vasitesile Js intrepretatoru event-in cagirdigi funksiyalari izleye bilir.Her defe funksiya cagirilan zaman o call stack-in yuxari hissesine elave olunur.
Her defe funksiya yekunlasanda o call stack-den silinir.Eger cagirilan funksiya sayi hedden artiq coxdursa `Uncaught RangeError: Maximum call stack size exceeded` erroru cixacaq.
Heap-Куча JavaScript-это место, где хранятся объекты, когда мы определяем функции или переменные.

Веб-API
Выше я сказал, что JavaScript может делать только одну вещь за раз.

Хотя это верно для самого языка JavaScript, вы все равно можете делать что-то одновременно в браузере. Как уже следует из названия, это возможно с помощью API, предоставляемых браузерами.

Давайте посмотрим, как мы делаем запрос API, например. Если бы мы выполнили код в интерпретаторе JavaScript, мы не смогли бы сделать ничего другого, пока не получим ответ от сервера.

Это в значительной степени сделает веб-приложения непригодными для использования.

В качестве решения этой проблемы веб-браузеры предоставляют нам API, которые мы можем вызывать в нашем коде JavaScript. Однако выполнение обрабатывается самой платформой, поэтому она не блокирует стек вызовов.

Еще одним преимуществом веб-API является то, что они написаны в коде более низкого уровня (например, C), что позволяет им делать то, что просто невозможно в обычном JavaScript.

Они позволяют делать AJAX-запросы или манипулировать DOM, а также ряд других вещей, таких как гео-отслеживание, доступ к локальному хранилищу, сервисные работники и многое другое.


Функция либо завершает работу через оператор return, либо достигает конца области видимости.

Я создал эту небольшую визуализацию, чтобы облегчить понимание:


## yaddsa
В JavaScript, когда мы создаем переменные, функции или все, что вы можете придумать, движок JS выделяет память для этого и освобождает ее, как только она больше не нужна.

Выделение памяти-это процесс резервирования места в памяти, в то время как освобождение памяти освобождает пространство, готовое к использованию для других целей.

Каждый раз, когда мы назначаем переменную или создаем функцию, память для этого всегда проходит через одни и те же следующие этапы:

![](https://felixgerschau.com/static/87cb911a5bdda814cdc38a1679e327e5/5a190/memory-life-cycle.png)

Выделение памяти

JavaScript заботится об этом для нас: он выделяет память, которая нам понадобится для созданного нами объекта.

Использование памяти

Использование памяти-это то, что мы делаем явно в нашем коде: чтение и запись в память-это не что иное, как чтение или запись из переменной или в переменную.

Освободить память

Этот шаг также обрабатывается движком JavaScript. Как только выделенная память освобождается, ее можно использовать для новой цели.

## Куча памяти и стекКуча памяти и стек
Теперь мы знаем, что для всего, что мы определяем в JavaScript, движок выделяет память и освобождает ее, как только она нам больше не нужна.Теперь мы знаем, что для всего, что мы определяем в JavaScript, движок выделяет память и освобождает ее, как только она нам больше не нужна.

Следующий вопрос, который пришел мне в голову: где это будет храниться?Следующий вопрос, который пришел мне в голову: где это будет храниться?

Двигатели JavaScript имеют два места, где они могут хранить данные: и .Двигатели JavaScript имеют два места, где они могут хранить данные: куча памятикуча памяти и стекстек.

Кучи и стеки-это две структуры данных, которые движок использует для разных целей.Кучи и стеки-это две структуры данных, которые движок использует для разных целей.

### stack
Стек-это структура данных, которую JavaScript использует для хранения статических данных. Статические данные-это данные, размер которых движок знает во время компиляции. В JavaScript это включает в себя примитивные значения (строки, числа, логическиезначения, undefinedи null) и ссылки, которые указывают на объекты и функции.

Поскольку движок знает, что размер не изменится, он выделит фиксированный объем памяти для каждого значения.

Процесс выделения памяти непосредственно перед выполнением известен как статическое выделение памяти.

Поскольку движок выделяет фиксированный объем памяти для этих значений, существует ограничение на то, насколько большими могут быть примитивные значения.

Пределы этих значений и всего стека варьируются в зависимости от браузера.

## Куча: динамическое распределение памяти
Куча-это другое пространство для хранения данных, в котором JavaScript хранит объекты и функции.

В отличие от стека, движок не выделяет фиксированный объем памяти для этих объектов. Вместо этого по мере необходимости будет выделяться больше места.

Выделение памяти таким образом также называется динамическим распределением памяти.

Чтобы получить обзор, вот особенности двух хранилищ, сравниваемых бок о бок:
::
[](https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/5a190/stack-heap-pointers.png)