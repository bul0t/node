# Node.js
Node.js - платформа, которая превращает JavaScript из языка логики веб-страниц, в язык общего назначения наподобие: Python, Java, C#.

- пишем первый скрипт
- пользовательские модули (module) 
- системные модули
    - чтение/запись `fs`

## Установка node.js
Установка https://nodejs.org/en/

После установки в терминале можно набрать `node` выведется приветствие, версия установленной node и приглашение к вводу кода на JavaScript.

    3 + 5 // 8

    let a = 3
    a + 2 // 5

Чтобы выйти из `node.js`, нажмите два раза `Ctrl + C`.

## Hello World!
Создадим программу которая будет выводить надпись в консоли `Hello World!`.
- создаём файл `main.js`
- пишем в нём код `console.log("Hello World!")`
- открываем в терминале папку где хранится файл `main.js`
- вводим команду `node main`

В консоли выведется `Hello World!`.

## Hello World! (передаём аргументы)
`process.argv` - process глобальный объект, argv свойство которое получает доступ к аргументам, передаваемым при запуске скрипта `node main`

    console.log(process.argv)
    console.log("Hello World!")

При запуске без аргументов, покажет путь до ноды и путь до скрипта. Если аргументы присутствуют то покажет путь до ноды, путь до скрипта, а затем аргументы `node main AR1`.

Выведем аргументы без путей к файлам:

    let args = process.argv.splice(2)
    console.log(args)
    console.log("Hello World!")

Вводим в консоли `node main AR1`, `node main AR1 AR2`.

Создадим скрипт который будет выводит ошибку если введено 0 аргументов и имя аргумента если он введен:

    let args = process.argv.splice(2)

    if(args.length === 0)
        throw new Error('Укажите хотя бы один аргумент!')

    console.log(`Hello, ${args[0]}!`)
