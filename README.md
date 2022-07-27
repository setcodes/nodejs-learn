# Nodejs-learn

## Performing learning exercises node.js


## lesson - 1:
### REPL
1. Запустить REPL режим и разбить слово "node" и с помощью reduce получить слово "edon";
> - repl.js (learning REPL)

2. Создание калькулятор где основная обработка происходит в файле index.js а все функции вынесены в одноименные файлы: add.js, multiply.js и тд. Входящие аргументы можно плучить при помощи process.argv;
> - calculator.js (learning module.js & commom.js)

3. Изменить задание №2 так, чтобы получать сообщения через Event
 > - calculator-event.js (learning eventEmiter)

 ## lesson - 2:
 1. Разработать приложение таймер, куда передается время звонка и после окончания таймер отображается сообщения.
  > - callTimer.js

## lesson - 3:
 1. Создать cli приложение, которе принимает как аргумент путь или название директории и производит рекурсивный подсчет 
    всех файлов от корня переданного аргумента. 

* Использовать fs для работы с файловой системой;
* Использовать worker thread для улучшения производительности.  
