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
        this._id = id;
        this._name = name;
        this._coordinates = coordinates;
        this._ville_id = ville_id;
    }
}

class Pnjs extends Pnj{

    constructor() {
        super();
    }


    InitPnjData(villes){
        const pnjs = [];
        /**
         * Shinshiro
         **/

        pnjs.push(new Pnj(1, "Kazuo","x=-14142,y=73,z=548",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(2,"Fumiaki","x=-14234,y=98,z=846",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(3,"Hanaya","x=-14234,y=98,z=846",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(4,"Hiroyuki","x=-14292,y=45,z=956",villes.getVilleByName(Shinshiro))) // tete de ville
        pnjs.push(new Pnj(5,"Sanemoto","x=-14251,y=64,z=960",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(6,"Kaori","x=-14251,y=64,z=941",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(7,"Junichi","x=-14251,y=64,z=941",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(8,"Anzu","x=-14245,y=64,z=921",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(9,"Masuku","x=-14066,y=71,z=1064",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(10,"Shigehiko","x=-14066,y=71,z=1064",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(11,"Taximoto","x=-14028,y=67,z=1111",villes.getVilleByName(Shinshiro)))
        pnjs.push(new Pnj(11,"Rantanmeka","x=-14035,y=67,z=1111",villes.getVilleByName(Shinshiro)))//todo l id
        pnjs.push(new Pnj(12,"Haruki","x=-14454,y=65,z=1036",villes.getVilleByName(Shinshiro)))

        /**
         * Eriador
         **/
        pnjs.push(new Pnj(13,"Belba Bessac","x=-16537,y=70,z=-4098",villes.getVilleByName(Eriador)))
        pnjs.push(new Pnj(14,"Adalgrim Touc","x=-16537,y=70,z=-4098",villes.getVilleByName(Eriador)))
        pnjs.push(new Pnj(15,"Drogo","x=-16741,y=79,z=-3919",villes.getVilleByName(Eriador)))
        pnjs.push(new Pnj(16,"Meriadoc Brandibouc","x=-16839,y=88,z=-3918",villes.getVilleByName(Eriador)))
        pnjs.push(new Pnj(17,"Clayborn","x=-16652,y=69,z=-4086",villes.getVilleByName(Eriador)))
        pnjs.push(new Pnj(18,"Sydell","x=-16654,y=69,z=-4096",villes.getVilleByName(Eriador)))

        /**
         * Drakaina
         **/
        pnjs.push(new Pnj(19,"Sigrid","x=-8448,y=76,z=12304",villes.getVilleByName(Drakaina)))
        pnjs.push(new Pnj(20,"Sigurd","x=-8440,y=75,z=12704",villes.getVilleByName(Drakaina)))
        pnjs.push(new Pnj(21,"Milchou","x=-8540,y=72,z=12742",villes.getVilleByName(Drakaina)))
        pnjs.push(new Pnj(22,"Gunnvor","x=-8546,y=72,z=12754",villes.getVilleByName(Drakaina)))
        pnjs.push(new Pnj(23,"Finnbjorn","x=-8546,y=72,z=12754",villes.getVilleByName(Drakaina)))
        pnjs.push(new Pnj(23,"Asulf","x=-8538,y=76,z=12803",villes.getVilleByName(Drakaina)))//todo l id

        /**
         * Rome
         **/
        pnjs.push(new Pnj(24,"Quartus","x=-18187,y=68,z=-3392",villes.getVilleByName(Rome)))
        pnjs.push(new Pnj(25,"Junius","x=-18253,y=69,z=-3330",villes.getVilleByName(Rome)))
        pnjs.push(new Pnj(26,"Faberien","x=-18248,y=68,z=-3371",villes.getVilleByName(Rome)))
        pnjs.push(new Pnj(27,"Decimus","x=-18679,y=79,z=-3221",villes.getVilleByName(Rome)))

        /**
         * Florenia
         **/
        pnjs.push(new Pnj(28,"Kiwix","x=-2502,y=97,z=-8151",villes.getVilleByName(Florenia)))
        pnjs.push(new Pnj(29,"Marcel","x=-2502,y=97,z=-8151",villes.getVilleByName(Florenia)))
        pnjs.push(new Pnj(30,"Soiduront","x=-2502,y=97,z=-8151",villes.getVilleByName(Florenia)))
        pnjs.push(new Pnj(31,"Roger","x=-2656,y=100,z=-8173",villes.getVilleByName(Florenia)))

        /**
         * Azuria
         **/
        pnjs.push(new Pnj(32,"Kuliens","x=-13456,y=106,z=6968",villes.getVilleByName(Azuria)))
        pnjs.push(new Pnj(33,"Zarus","x=-13510,y=133,z=7108",villes.getVilleByName(Azuria)))

        /**
         * Nakaram
         **/
        pnjs.push(new Pnj(34,"Pom Y Mai","x=9187,y=69,z=2395",villes.getVilleByName(Nakaram)))
        pnjs.push(new Pnj(35,"Isildur","x=9099,y=67,z=2332",villes.getVilleByName(Nakaram)))
        pnjs.push(new Pnj(36,"Amai","x=9639,y=66,z=2648",villes.getVilleByName(Nakaram)))
        pnjs.push(new Pnj(37,"Hubert","x=9506,y=70,z=2375",villes.getVilleByName(Nakaram)))


        /**
         * Pas2Ville
         **/
        pnjs.push(new Pnj(42,"Plus la","Absente",villes.getVilleByName(Pas2Ville)))

        return pnjs;
    }

    getPnjById(id){
        let result;
        pnjs.forEach(pnj=>{
            if(pnj._id === id){
                result = pnj;
            }
        });
        return result;
    }

    getPnjByName(name){
        let result;
        pnjs.forEach(pnj=>{
            if(pnj._name === name){
                result = pnj;
            }
        });
        return result;
    }
}