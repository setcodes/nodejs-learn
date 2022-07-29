# Nodejs-learn

## Performing learning exercises node.js


## Exercise - 1:
### REPL
1. Запустить REPL режим и разбить слово "node" и с помощью reduce получить слово "edon";
> - exercise1/repl.js (learning REPL)

2. Создание калькулятор где основная обработка происходит в файле index.js а все функции вынесены в одноименные файлы: add.js, multiply.js и тд. Входящие аргументы можно плучить при помощи process.argv;
> - exercise1/calculator-common-js/index.js (learning module.js & commom.js)

3. Изменить задание №2 так, чтобы получать сообщения через Event
 > - exercise1/calculator-common-js-emitter/index.js (learning eventEmiter)

### args
   - 1 - number;
   - 2 - expression (+, -, x, /);
   - 3 - number;
   - 4 (optional) - the number of numbers after the decimal point;

return result number vs emitter msg console.log

### example
  > : node index.js 10 + 10 1


 ## Exercise - 2:
 1. Разработать приложение таймер, куда передается время звонка и после окончания таймер отображает сообщение. 
    Сообщение выводится при помощи библиотеки node-notifier.

  > - exercise2/callTimer.js

### usage
`npm i`

`node calltimer.js 30s`

### args
- `node calltimer.js 1000` default ms / timer done 1000 ms
- `node calltimer.js 10s` timer done 10 second
- `node calltimer.js 1m` timer done 10 minute

## Exercise - 3:
 1. Создать cli приложение, которе принимает как аргумент путь или название директории и производит рекурсивный подсчет 
    всех файлов от корня переданного аргумента. 

* Использовать fs для работы с файловой системой;
* Использовать worker thread для улучшения производительности. 
* дополнительно установлена библиотека chalk для подсветки вывода


### usage
`npm i`

`node app.js testDir`

output:
```output
DONE  Количество файлов: 5 шт.
DONE  Количество вложенных директорий: 3 шт.
INFO  Общий объем файлов: 4 kb
INFO  Затраченное время на выполнение: 90.4 ms
INFO  Worker завершил работу
```

### args
- `node app.js path` path: directory for counting files
