class Deco{
    get craftable() {
        return this._craftable;
    }
    get tags() {
        return this._tags;
    }
    get name() {
        return this._name;
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
    constructor(id, name, pnj_id, images, price, event, craftable) {
        this._name = name;
        this._pnj_id = pnj_id;
        this._images = images;
        this._price = price;
        this._id = id;
        this._tags = event;
        this._craftable = craftable;
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
    get name() {
        return this._name;
    }
    get mayors() {
        return this._mayors;
    }
    constructor(name, mayors) {
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
    return levenshteinDistance(a.toLowerCase(),b.toLowerCase()) < 3;
}

const getVille = (name)=>{
    let result;
    villes.forEach(ville=> {
        if(ville._name === name){
            result = ville
        }
    });
    return result;
}
const getPnj = (id)=>{
    let result;
    pnjs.forEach(pnj=>{
        if(pnj._id === id){
            result = pnj;
        }
    });
    return result;
}
const searchInVille = (recherche) =>{
    let result = [];
    villes.forEach(ville=> {
        if (calculate(recherche,ville.name)){
            if(!result.includes(ville)){
                result.push(ville);
            }
        }
        ville._mayors.forEach(mayor => {
            if (calculate(recherche,mayor)){
                if(!result.includes(ville)){
                    result.push(ville);
                }
            }
        })
    });
    return result;
};
const getDecoInVille = (ville)=>{
    let result = [];
    decos.forEach(deco=>{
        if(deco.pnj_id.ville_id === ville){
            result.push(deco);
        }
    });
    return result;
}
const getPnjByName = (name) =>{
    let result = [];
    pnjs.forEach(pnj => {
        if (calculate(name,pnj._name)){
            if (!result.includes(pnj)){
                result.push(pnj);
            }
        }
    });
    return result;
}
const getDecoInPnj = (pnj)=>{
    let result = [];
    decos.forEach(deco=>{
        if(deco.pnj_id === pnj){
            result.push(deco);
        }
    });
    return result;
}

let id_deco = 0;
const createDeco = (name, pnj_id, images, price, event, craftable)=>{
    id_deco += 1;
    return new Deco(id_deco, name, pnj_id, images, price, event, craftable);
}

let villes = [];
let pnjs =[];
let decos = [];

/**
 * data ville
 */
const Shinshiro = "Shinshiro";
const Eriador = "Eriador";
const Yrias = "Yrias";
const Florenia = "Florénia";
const Highland = "Highland";
const Rome = "Rome";
const Imynda = "Imynda";
const Inpou = "Inpou";
const Almeria = "Alméria";
const Azuria = "Azuria";
const Drakaina = "Drakaina";
const Nakaram = "Nakaram";
const Villers = "Villers";
const Nassau = "Nassau";
const Helios = "Helios";
const Kotaiblis = "Kotaiblis";
const Alorah = "Alorah";

villes.push(new Villes(Eriador, ["jerem1664", "Nisudry"]));
villes.push(new Villes(Yrias, ["_Ybrakxar"]));
villes.push(new Villes(Shinshiro, ["DVN88819"]));
villes.push(new Villes(Florenia,["Flifloux"]));
villes.push(new Villes(Highland,["MissDu39","Kimalo"]));
villes.push(new Villes(Rome,["kiefer_grylls", "klein1445"]));
villes.push(new Villes(Imynda,["Djox79"]));
villes.push(new Villes(Inpou,["Gorderok", "Zzheyd"]));
villes.push(new Villes(Almeria,["Gorderok", "Zzheyd"]));
villes.push(new Villes(Azuria,["Zappax0"]));
villes.push(new Villes(Drakaina,["_Minesta_"]));
villes.push(new Villes(Nakaram,["Adidix"]));
villes.push(new Villes(Villers,["Tintin1712"]));
villes.push(new Villes(Nassau,["Glommery"]));
villes.push(new Villes(Helios,["LeftForDeath6"]));
villes.push(new Villes(Kotaiblis,["Xof__"]));
villes.push(new Villes(Alorah,["Gorderok", "Zzheyd"]));
/**
 * data ville
 */

/**
 * données pnj
 */
pnjs.push(new Pnj(1, "Kazuo","x=-14142,y=73,z=548",getVille(Shinshiro)))
pnjs.push(new Pnj(2,"Fumiaki","x=-14234,y=98,z=846",getVille(Shinshiro)))
/**
 * données pnj
 */

/**
 * données decos
 */
decos.push(createDeco("Pousse de Bambou", getPnj(1),["https://cdn.discordapp.com/attachments/1251252569691656204/1251252628776685758/image.png?ex=666de751&is=666c95d1&hm=263d50b78682c14dc35f05a5d5f0bc6394c50f6a706ce2b28e291bd9d6ec007b&"],"5 blocs d'émeraude","","oui",))
decos.push(createDeco("Tronc De Bambou", getPnj(1),["https://cdn.discordapp.com/attachments/1251252569691656204/1251264505233674311/image.png?ex=666df261&is=666ca0e1&hm=9c7f98ca924f183827bf30f14d62890e3599fcad2169365482025a2093fdb1bc&"],"5 blocs d'émeraude","","oui",))
decos.push(createDeco("Citrouille Japonaise", getPnj(1),["https://cdn.discordapp.com/attachments/1251252569691656204/1251286810013864136/image.png?ex=666e0727&is=666cb5a7&hm=ac2062b400f331660fb13874d7596f4fafde57fc45390d868418f7351776b036&"],"5 blocs d'émeraude","","oui",))
decos.push(createDeco("Durian", getPnj(1),["https://cdn.discordapp.com/attachments/1251252569691656204/1251287213426081803/image.png?ex=666e0787&is=666cb607&hm=1f3d5662307354e06dc2798572dfa1eeaeb29d51cb6844bb0957aa2fae96ac44&"],"5 blocs d'émeraude","","oui",))
decos.push(createDeco("Plan de construction", getPnj(2),["https://cdn.discordapp.com/attachments/1251252569691656204/1251289803413000304/image.png?ex=666e09f0&is=666cb870&hm=a807f5cf4770f301eec29b1fd314aa899fb2d070741fdbd57d8872801042245f&"],"5 blocs d'émeraude","","oui",))
/**
 * données decos
 */



const searchDeco = (recherche) =>{
    let result = [];
    decos.forEach(deco =>{
       if(calculate(recherche,deco._name)){
           if(!result.includes(deco)){
               result.push(deco);
           }
       }
    });

    searchInVille(recherche).forEach(ville=>{
        getDecoInVille(ville).forEach(deco => {
           if(!result.includes(deco)){
               result.push(deco);
           }
       });
    });

    getPnjByName(recherche).forEach(pnj => {
        getDecoInPnj(pnj).forEach(deco => {
            if(!result.includes(deco)){
                result.push(deco);
            }
        });
    });

    //ajouter les tags plus tard
    return result;
}

const result = searchDeco("kazuo");
console.log(result.length === 0 ? "Pas de résultat" : result);