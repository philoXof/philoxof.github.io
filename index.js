class Deco{
    get tags() {
        return this._tags;
    }
    get nom() {
        return this._nom;
    }
    get pnj_id() {
        return this._pnj_id;
    }
    get images() {
        return this._images;
    }
    get price() {
        return this._price;
    }
    get id() {
        return this._id;
    }
    constructor(id, nom, pnj_id, images, price, tags) {
        this._nom = nom;
        this._pnj_id = pnj_id;
        this._images = images;
        this._price = price;
        this._id = id;
        this._tags = tags;
    }
}
class Pnj{
    get name() {
        return this._name;
    }
    get coordinates() {
        return this._coordinates;
    }
    get ville_id() {
        return this._ville_id;
    }
    get id() {
        return this._id;
    }
    constructor(id, name, coordinates, ville_id) {
        this._name = name;
        this._coordinates = coordinates;
        this._ville_id = ville_id;
        this._id = id;
    }
}
class Villes{
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get mayors() {
        return this._mayors;
    }
    constructor(id, name, mayors) {
        this._id = id;
        this._name = name
        this._mayors = mayors;
    }
}


const levenshteinDistance = (s, t) => {
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= s.length; j++) {
            arr[i][j] =
                i === 0
                    ? j
                    : Math.min(
                        arr[i - 1][j] + 1,
                        arr[i][j - 1] + 1,
                        arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
                    );
        }
    }
    return arr[t.length][s.length];
};
const calculate = (a,b) => {
    console.log(levenshteinDistance(a,b));
    return levenshteinDistance(a,b) < 3;
}

let villes = []
let eriador = new Villes(1, "eriador", ["jerem1664", "Nisudry"]);
villes.push(eriador)
let ville3 = new Villes(3, "oui", ["ybra"]);
villes.push(ville3)
let ville = new Villes(2, "ouisticram", ["ybra"]);
villes.push(ville)


let pnj = new Pnj(1,"robert","x / y / z",1);
let deco = new Deco(1, "test",1,1,[],"pieces d or");


let result=[];
const recherche = "jerem1664";


villes.forEach(ville=> {
    if (calculate(recherche,ville.name)){
        result.push(ville)
    }
    ville.mayors.forEach(mayor => {
        if (calculate(recherche,mayor)){
            result.push(ville)
        }
    })
});
console.log(result)