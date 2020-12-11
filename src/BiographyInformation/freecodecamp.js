/*^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
Вы можете искать пробелы, используя \s сопоставляет [\r\n\t\f\v]

Напомним, что вы используете
знак плюса +для поиска одного или нескольких символов
звездочку *для поиска нуля или более символов.

спецификатор количества { }
*/


//идет сравнение по символам!

/*1) Имена пользователей могут содержать только буквенно-цифровые символы.

2) Единственные числа в имени пользователя должны быть в конце.
В конце их может быть ноль или больше. Имя пользователя не может начинаться с цифры.

3) Буквы имени пользователя могут быть строчными и прописными.

4) Имя пользователя должно состоять не менее чем из двух символов.
В двухсимвольном имени пользователя в качестве символов можно использовать только буквы алфавита.

?! - говорит, что не ожидает там такого впереди идущего */

const myString = 'rinat     vereshsagin  kl  jk linli nl inli   linlinl in lin lin lin       nlinlin n li';
const onlyThreeWords = /(\w{1,})/g; // change this line
// const onlyThreeWords = /^(\w{1,}\s{1,}?){3}/g; // change this line

console.log(onlyThreeWords.test(myString));
console.log(myString.match(onlyThreeWords).filter((_, i) => {
  return (i < 3);
}));


