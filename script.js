'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log(`Test`);
    }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);

//console.log(Object.keys(options).length);

/* let counter = 0;
for (let key in options) {
    if (typeof (options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Preference ${i} have value: ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Preference ${key} have value: ${options[key]}`);
        counter++;
    }
}
console.log(counter); */