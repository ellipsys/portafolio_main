const data = ['abeja', 'aguila', 'araña', 'ballena', 'burro', 'cabra', 'cocodrilo', 'conejo', 'castor', 'zorro']

function arrayToObject(animales) {
    let animals = {}
    for (let i = 0; i < animales.length; i++) {
        if (animales[i][0] in animals ? animals[animales[i][0]].push(animales[i]):animals[animales[i][0]]=[animales[i]]);
        
    }

    return animals
}
console.log(arrayToObject(data));
let alfa = {
    a: [ 'abeja', 'aguila', 'araña' ],
    b: [ 'ballena', 'burro' ],
    c: [ 'cabra', 'cocodrilo', 'conejo', 'castor' ],
    z: [ 'zorro' ]
}
//console.log(alfa.a.push("andres"));
//console.log(alfa.a);
//console.log("a" in alfa);