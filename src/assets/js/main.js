'use strict';


let d = new Date(2012, 1, 20, 3, 12);

let week = ['ПТ', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

function getEuropeDay(num){
    if (num == 0) {
        num = 6;
    } else {
        num--;
    }

    return num;
}

console.log(week[getEuropeDay(d.getDay())]);
