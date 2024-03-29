// - Напишите функцию cutString(str, n), которая делит строку на подстроки,
// состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutterString = (str, n) => {
    let res = [];
    while (str.length) {
        res.push(str.substr(0, n))
        str = str.slice(n)
    }
    return res
};
console.log(cutterString('шотатам', 3))


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати
// в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше
// ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validateMail = (mail) => {
    let lastAt = mail.lastIndexOf('@');
    let lastDot = mail.lastIndexOf('.');
    return (lastAt < lastDot && lastAt > 0 &&
        mail.indexOf('@@') === -1 && lastDot > 2 &&
        (mail.length - lastDot) > 2);
}

console.log(validateMail('some.email@gmail.com'))
console.log(validateMail('someeMAIL@gmail.com'))
console.log(validateMail('someeMAIL@i.ua'))
console.log(validateMail('some.email@gmail.com'))
console.log(validateMail('  .   '))


// - є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

coursesArray.sort((a, b) => b.modules.length - a.modules.length)

console.log(coursesArray)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів
// stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => {
    let counts = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch) {
            counts.push(str[i])
        }
    }
    return counts.length
}

console.log(count('Астрономия это наука о небесных объектах', 'о'));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши
// у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString = (stri, n) => stri.split(' ', n).join(' ');

console.log(cutString(str, 5))