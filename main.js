'use strict';
/*
Вам нужно написать функцию, которая в качестве параметра принимает
функцию и добавляет ей возможность кешировать вызовы. Идея состоит в том,
что при вызове функции с одинаковыми аргументами, нет смысла вызывать функцию каждый раз,
достаточно сохранять данные о результатах вызова.

Хранить нужно последние 10 вызовов.
 */

void function (){
    const callBack = () => {
        return {call:'call'}
    }
    const func = (callback) => {
        if (!localStorage.getItem('FunctionCache')){
            let callsCount = 0;
            const funcCallsCache = new Map();
            callsCount ++;
            funcCallsCache.set(callback, {calls:callsCount});
            localStorage.setItem('FunctionCache', JSON.stringify(funcCallsCache.get(callback)));
        } else {
            let getCount = JSON.parse(localStorage.getItem('FunctionCache')).calls;
            console.log(getCount)
            if (getCount < 10){
                const funcCallsCache = new Map();
                getCount ++;
                funcCallsCache.set(callback, {calls:getCount});
                localStorage.setItem('FunctionCache', JSON.stringify(funcCallsCache.get(callback)));
            } else {
                localStorage.clear();
            }
        }

    }
    func(callBack());
}();

