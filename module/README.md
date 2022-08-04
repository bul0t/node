# module
Модули node.js, изучаем exports и require.

- в node.js любой JavaScript файл является модулем
- у каждого модуля есть объект `exports`, который экспортирует значения из модуля
    - экспертируемые значения хранятся в свойства объекта exports
- `require()` - импорт значений из модуля

Создаём в папке `example` рядом с файлом `main.js`, файл `second.js`, тамже создадим переменную:

    let a = 3;

Нам нужно из файла `main.js` получить доступ к этой переменной.

## exports (переменная)

Файл second.js:

    exports.a = 5; // экспортируем значение 5

Файл main.js:

    const second = require('./second');
    console.log(second);   // { a: 5 }
    console.log(second.a); // 5

## exports (функция)

Файл second.js:

    function hello(msg) {
        console.log("hello " + msg)
    }

    exports.hello = hello

Файл main.js:

    const second = require('./second');
    second.hello('Ivan') // hello Ivan

## module.exports
Вместо `exports.value` можно использовать `module.exports`.

Файл second.js:

    function hello(msg) {
        console.log("hello " + msg)
    }

    module.exports = hello

Файл main.js:

    const second = require('./second');
    second('Ivan') // hello Ivan

При `exports.value` в second хранится объект, при `module.exports` в second хранится значение.
