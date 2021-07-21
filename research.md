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