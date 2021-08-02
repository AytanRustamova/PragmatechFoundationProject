

// 1-100 edelerin cemi;

// var i;
// var multiple = 0;
// for( i = 0; i<=100; i++){
//     multiple = multiple + i;
// }

// console.log(multiple);


// Kvadratlarindan yeni array yaratmaq.

// let arr=[1,3,4,6,89,12,67,34,89,123];
// let newArray = [];
// let i;
// for( i = 0; i<arr.length; i++){
//     let arrPow = Math.pow(arr[i], 2);
//     newArray.push(arrPow);
// }

// console.log(newArray);



// En boyuk eded;

// let arr=[1,3,4,6,89,12,67,34,89,123];
// let compare = 0; 
// let i;

// for(i=0; i<=arr.length; i++){
//     if(arr[i] > compare){
//      compare = arr[i];
//     }
// }
// console.log(compare);

// Arraydeki ededlerin cemi;

// let arr=[1,3,4,6,89,12,67,34,89,123];
// let multiple = 0;

// for(i=0; i<arr.length; i++){
//     multiple = multiple + arr[i];

// }

// console.log(multiple);




// Arraydeki tek ededler;

// let arr=[1,3,4,6,89,12,67,34,89,123];
// let i;
// let newArray = [];
// for(i=0; i<arr.length; i++){
//     let tekEded = arr[i] % 2;
//     if(tekEded != 0){
//         newArray.push(arr[i]);
//     }
// }
// console.log(newArray);








// let info = "Bu sahəyə yeni başlayanlar üçün programlaşdırma həddindən artıq qarışıq və çətin gələ bilər. İnternetdə tonlarla qaynaqları görüb gözünüz qorxa bilər. Düşünə bilərsiniz ki, bu qədər konsepti necə öyrənə bilərəm və yaxud bu mənim nə qədər zamanımı alar. Əfsanələrə görə, əgər riyaziyyatı yaxşı bilmirsinizsə sizin bu sahədə uğurlu ola bilməyiniz mümkün deyil. Və yaxud bu sahədə ali təhsiliniz yoxdursa heç bir yerdə iş tapa bilməyəcəksiniz. Əslində isə bu sahəyə giriş etdikdən sonra heç də elə olmadığını görəcəksiniz."


// Number of Chracters

//   let countInfoChareacter = info.length

//     console.log(countInfoChareacter);



// Number of Letters
// let str = 'Bu sahəyə yeni başlayanlar üçün programlaşdırma həddindən artıq qarışıq və çətin gələ bilər. İnternetdə tonlarla qaynaqları görüb gözünüz qorxa bilər. Düşünə bilərsiniz ki, bu qədər konsepti necə öyrənə bilərəm və yaxud bu mənim nə qədər zamanımı alar. Əfsanələrə görə, əgər riyaziyyatı yaxşı bilmirsinizsə sizin bu sahədə uğurlu ola bilməyiniz mümkün deyil. Və yaxud bu sahədə ali təhsiliniz yoxdursa heç bir yerdə iş tapa bilməyəcəksiniz. Əslində isə bu sahəyə giriş etdikdən sonra heç də elə olmadığını görəcəksiniz.'
// let letterCount = str.replace(/\s+/g, '').length;

// console.log(letterCount);



// Number of Words

// var str = "Bu sahəyə yeni başlayanlar üçün programlaşdırma həddindən artıq qarışıq və çətin gələ bilər. İnternetdə tonlarla qaynaqları görüb gözünüz qorxa bilər. Düşünə bilərsiniz ki, bu qədər konsepti necə öyrənə bilərəm və yaxud bu mənim nə qədər zamanımı alar. Əfsanələrə görə, əgər riyaziyyatı yaxşı bilmirsinizsə sizin bu sahədə uğurlu ola bilməyiniz mümkün deyil. Və yaxud bu sahədə ali təhsiliniz yoxdursa heç bir yerdə iş tapa bilməyəcəksiniz. Əslində isə bu sahəyə giriş etdikdən sonra heç də elə olmadığını görəcəksiniz.";
// var wordCount = str.match(/(\w+)/g).length;
// console.log(wordCount);

// Number of special letters

// Arasdir: bu funksiya boyuk ve kicik herfleri detect etmir .
// var temp = "Bu sahəyə yeni başlayanlar üçün programlaşdırma həddindən artıq qarışıq və çətin gələ bilər. İnternetdə tonlarla qaynaqları görüb gözünüz qorxa bilər. Düşünə bilərsiniz ki, bu qədər konsepti necə öyrənə bilərəm və yaxud bu mənim nə qədər zamanımı alar. Əfsanələrə görə, əgər riyaziyyatı yaxşı bilmirsinizsə sizin bu sahədə uğurlu ola bilməyiniz mümkün deyil. Və yaxud bu sahədə ali təhsiliniz yoxdursa heç bir yerdə iş tapa bilməyəcəksiniz. Əslində isə bu sahəyə giriş etdikdən sonra heç də elə olmadığını görəcəksiniz.";
// var count = (temp.match(/s/g) || []).length;
// console.log(count);


