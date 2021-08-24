a. justify-content row uzre mərkəzləşdirir, align-items isə column üzrə mərkələşir.

b. align-items divlerin nece yerlesdiyini nezere alir, mes ara mesafeleri varsa onlari nezere alib centering edir. Amma align-content ise hec birin nezere almir, sadece center edir. Yeni ara mesafeli 3 flex diviniz varsa align-content ile, merkezlesdirmek isteyende ara mesafeleri de yox olur.

c.her hansisa bir dive padding verende boyuyur, bu property ile divin olcusunu eyni saxlamaqla ona padding vere bilerik.


d. Eger her hansisa bir sectionda 5 diviniz var 4u eyni 1i ferqli style olacaqsa, bu zaman inline styling istifade etmek olar.


e.!important property'si normaldan artiq  ciddilik verir hemin style'a. eger bu property'ni istifade etmisinizse ondan qabaq butun style'lari override edir. Inherit ise oz ata divine gore hereket etmesini gozlemekdir. Yenin onun parent divi ne rengdirse o da o olmalidir.



suallar 
5. 100% ve 100vw ferqi nedir? 100vw divin olcusunden ferqli olaraq butun ekranin width'ni tutur, mesele bir dive 100px verib icindeki dive 100% versek 100px mesafe tutacaq, eger 100vw versek colundeki div 100px olsa da o butun ekranin width'ni tutacaq.

6. cm - santimetr
   mm - millimetr
   in - inch 
   em - body'e verdiyimiz font size'a baglidir, 2em = font-size * 2
   px - pixel
   pc - picas 
   pt - points



7. space around ara mesafeleri eyni olacaq kimi teyin edir.



8. pseudo classlar(::hover, ::focus) html taglerine elaveler etmek ucundur, yeni normalda html  file'da o classlar olmur sadece css'de o taglere colden de style vere biilirik.

pseudo elementler (::before :after) bu elementler de eyni sekilde html file'da olmur, bu elementler sayesinde siz bir classa iki design vere bilersiniz.




28 Iyul 2021: Javascript
Yazarken aglima gelen suallar:
1. Javascript ile divler yarada  bilirikse, niye butun seyfeni jsle yazmiriq?
2. ReactJs'le mobile app qururuqsa, Javascript de client-side dildirse, mobile applicationun server-side'i nece olur? 
3. Js kimi HTML ve CSS'i de browserde acdigimiza gore onlar da scripting dil sayilir?
4. Butun variable tiplerini bir birine convert ede bilirik mi?






Task'in cavablari:
1. Birinci məsələyə frontend tərəfdən baxsaq, Javascript HTML və Css"in statikliyinden istifade edib seyfeni dinamik hala getirmekde komek edir. Javascript client-side dil oldugu ucun, onun sayesinde istifadecinin verdiyi cavaba gore ekrana pop-up cixartmaq isteyirikse, bunu database'siz cox rahat bir sekilde ede bilirik. Diger bir mesele, Javascriptle mobile developmente cox rahat bir sekilde kecid etmek olur, normalda mobile development ucun Java ve ya basqa diller bilmek lazim idise, indi Javascript'n frameworku olan ReactJs'le de bunu ede bilirik. Hem de React vasitesi ile iki device ucun de istifade ede bilirik. Normalda android ucun Java ios ucun Swift bilmek lazimdi. ReactJs ise bu ikisini ozunde birlesdirib.

2. Yeni programlasdirma dilini ozbasima oyrenmeli olsaydim, birinci o dilin diger dillerden ferqli ve oxsar cehetlerini arasdirardim. Ferqli konseptleri oyrenmeye baslayardim. Sonra internetde hemin dille bagli mehsur projectleri tapib onlari ozum etmeye calisardim ve bu ferqli konseptleri orda yoxlamaga calisardim. Aglima gelen funsionalliqlari proqrama elave etmeye calisardim. Sonra oyrenme erefesinde bir insan tapib ona oyretmeye calisardim. sadece oyrenmek isteyiremse project yonumlu oyrenmeye ustunluk vererdim, Yox eger master etmek isteyiremse o programlasdirma dilini kitablara uz tutardim, core conseptleri oyrenerdim. 

3. Her seyden evvel o variable adindan daha once istifade etmediyimizi deqiqlesdirmeliyik. variable'n adi ozu ile uygun olmalidir, basa dusulmesi ucun. meselen funksiya adina uygun ola biler. variable adlari reqemle baslaya bilmez. Variable'lar keywordlerle yaradilmalidir. 

4. Javascript kodlari yuxaridan asagiya dogru oxunur, eger oxudugu zaman her hansisa variable'ye ve yaxud class'a ve yaxud obyekte rast gelse, gedib onun adini axtarir, tapa bilmediyi teqdirde error cixardir, tapdigi teqdirde yoluna davam edir.

5. Javascript programlasdirma dili client-side dil oldugu ucun Node.js yuklemeden localda js file'i acmaq olmaz.  Client side ile server side'n esas ferqi de odur ki, server-side'da code serverde run olunur. client-side'da ise istifadecinin browserinde. Js ile de biz gorunus dinamikliyini temin etdiyimiz ucun, js file'larini browserde aciriq.

6. Javascript operatorlarindan istifade ederken birinci tipine baxmaliyiq, hansi tiple hansi tipi hansi operatorla istifade edeceyik. meselen string ve number'in + operatoru ile davranisi ferqlidir  number ve number'n davranisi ferqli. 
   




men hec ne import etmesem, python'nun sadece built in functionlari isleyecek?
WSGI ne ise yarayir, tercumecilerden ferqi nedir.
web server ozu nece isleyir, web server kodumuzu basa dussun deye istifade edirikse, web server kodumuzu nece oxuyur?




Python research.

1. Python module və package nədir? Necə istifadə olunur?
2. 2. web server insanlarin paylasimlarinin qarismamasi ucundu daha cox bir baxima.bir yer kiralayirsan orda ancaq sene aid olur her sey.
4. web server internetde kiraladiginiz yerdi. wsgi ise web serverin kodunuzu basa dusmeyi ucun vesaitdir.
5. http request brauser ve serverin tekterefli elage sistemidir.






Flask Research:

Flask bir Python frameworkudur ve bize coxlu packageler vermesi ile meshurdur.