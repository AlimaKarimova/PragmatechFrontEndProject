#### Sual 01
JavaScript nədir və necə işləyir?

#### Sual 02
DOM Traversing nədir? Nümunələr ilə izah edin.
DOM vasitesile biz veb saytin elementlerini deyise bilerik amma bunun ucun evvelce biz elementleri 'elde etmeliyik'.DOM-da butun emeliyyatlar document obyektinden baslayir.DOM-a giris ucun esas noqtedi.
DOM позволяет нам делать что угодно с элементами и их содержимым, но для начала нужно получить соответствующий DOM-объект.
DOM-da hereket etmek ucun istifade olunan esas "gostericiler".
[DOM elementler uzre naviqasiya](Screenshot_5.png)
en yuxarida olan elementler document obyektin xususiyyetleri kimi elde olunur.
<html> = document.documentElement
<body> = document.body
<head> = document.head


#### Sual 03
DOM Element və DOM Node arasındakı fərq nədir?
DOM-brauzere yuklenen veb saytin strukturunun bir birinin icine yerlesdirilmis obyektler(duyunler) seklinde tesviridir.DOM vasitesile veb saytin strukturu uzre hereket ede,onu idare ede, elementleri deyise, elave ede ve ya sile bilerik.DOM duyunlerden(nodes) ibaretdir.BU duyunler mueyyen bir ierarxiyaya malikdir.Her bir duyunun parent ve child-i ola biler.Nodes-larin bir nece tipi var.
- Node.ELEMENT_NODE
- Node.ATTRIBUTE_NODE
- Node.TEXT_NODE
- Node.CDATA_SECTION_NODE
- Node.PROCESSING_INSTRUCTION_NODE
- Node.COMMENT_NODE
- Node.DOCUMENT_NODE
- Node.DOCUMENT_TYPE_NODE
- Node.DOCUMENT_FRAGMENT_NODE
- Node.NOTATION_NODE
Burdan gore bilerik ki, node tiplerinden biri de  Node.ELEMENT_NODE.Bir sozle element dom duyunlerinin novlerinden biridir.

#### Sual 04
HTML daxilində var olan hər hansı elementi silmək üçün nə etmək lazımdır?
Element.remove() metodundan istifade etmek lazimdir.

#### Sual 05
HTML daxilində olan bir elementi kopyalayaraq başqa bir elementin daxilinə yerləşdirmək üçün nə etmək lazımdır?
innerHTML() metodundan istifade etmek lazimdir.