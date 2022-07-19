'use strict';
/*
Вам нужно написать функцию, которая в качестве параметра принимает
функцию и добавляет ей возможность кешировать вызовы.

Идея состоит в том,что при вызове функции с одинаковыми аргументами, нет смысла вызывать функцию каждый раз,
достаточно сохранять данные о результатах вызова.

Хранить нужно последние 10 вызовов.
 */

void function (){
    const callBack = (num) => {
        return num;
    }
    const map = new Map();
    const arr = [];
    const func = (callback) => {
        if (map.size >= 10) {
           const arrFirstElem = arr[0];
           map.delete(arrFirstElem);
           arr.shift();
        }
        arr.push(callback);
        arr.forEach(item => {
            map.set(item, item);
        })
    }

    func(callBack(1));
    func(callBack(2));
    func(callBack(3));
    func(callBack(4));
    func(callBack(5));
    func(callBack(5));
    func(callBack(5));
    func(callBack(5));
    func(callBack(6));
    func(callBack(7));
    func(callBack(8));
    func(callBack(9));
    func(callBack(10));
    func(callBack(11));
    func(callBack(12));
    func(callBack(13));
    console.log(map)
    console.log(arr)
}();

