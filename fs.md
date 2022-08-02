# fs
`fs` - системный модуль node.js отвечающий за чтение/запись файлов.

В файле `main.js` напишем:

    const fs = require('fs');

Здесь `('fs')` точку со слешэм `./` указывать не нужно.  
В этой же папке создадим текстовые файлы `text.txt`, `folder/text2.txt` и напишем в них `Привет МИР!` и `Привет МИР 2!`.

## Методы fs
- fs.readFileSync() - прочитать содержимое файла
- fs.writeFileSync() - записать в файл
- fs.readdirSync() - показать содержимое папки
- fs.unlinkSync() - удалить файл
- fs.rmdirSync() - удалить папку

## Примеры
Прочитаем содержимое файла `folder/text2.txt`. В файле `main.js` напишем:

    const fs = require('fs');

    let content = fs.readFileSync('folder/text2.txt', 'utf-8');
    console.log(content); // Привет МИР 2!

Запишем информацию в файл:

    let content2 = 'Файл автоматически создастся, если его нет!';
    fs.writeFileSync('folder/text3.txt', content2);

Показать содержимое папки:

    console.log(fs.readdirSync('./')); // показать содержимое текущей папки
    console.log(fs.readdirSync('folder')); // показать содержимое папки folder

Удалить файл:

    fs.unlinkSync('text.txt');

Удалить папку, но перед эти нужно удалить все файлы внутри папки:

    fs.rmdirSync('folder'); // удаляем папку
