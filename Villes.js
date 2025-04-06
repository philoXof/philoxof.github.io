
class Ville{
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get mayors() {
        return this._mayors;
    }
    /*get pnjs() {
        return this._pnjs; //todo
    }*/
    constructor(id, name, mayors) {

        this._id = id;
        this._name = name
        this._mayors = mayors;
    }

}

class Villes extends Ville{
    constructor() {
        super();
    }

    InitCityData(){


        const villes = [];
        /** *
         * Déjà faite (decoration dedans)
         * **/
        villes.push(new Ville(1,Eriador, ["jerem1664", "Nisudry"]));
        villes.push(new Ville(2,Yrias, ["_Ybrakxar"]));
        villes.push(new Ville(3,Shinshiro, ["DVN88819"]));
        villes.push(new Ville(4,Drakaina,["_Minesta_"]));
        villes.push(new Ville(5,Rome,["kiefer_grylls", "klein1445"]));
        villes.push(new Ville(6,Florenia,["Flifloux"]));
        villes.push(new Ville(7,Azuria,["Zappax0"]));

        /** *
         * En cours (dajout des decos)
         * **/
        villes.push(new Ville(8,Nakaram,["Adidix"]));

        /** *
         * A faire (données des deco)
         * **/
        villes.push(new Ville(9,Villers,["Tintin1712"]));
        villes.push(new Ville(10,Nassau,["Glommery"]));
        villes.push(new Ville(11,Helios,["LeftForDeath6"]));
        villes.push(new Ville(12,Inpou,["Gorderok", "Zzheyd"]));
        villes.push(new Ville(13,Almeria,["Gorderok", "Zzheyd"]));

        /** *
         * Villes en construction
         * **/
        villes.push(new Ville(14,Kotaiblis,["Xof__"]));
        villes.push(new Ville(15,Imynda,["Djox79"]));
        villes.push(new Ville(16,Highland,["MissDu39","Kimalo"]));

        /** *
         * Villes Morte je crois xd
         * **/
        villes.push(new Ville(17,Alorah,["Gorderok", "Zzheyd"]));
        villes.push(new Ville(18,Blackbay,["Arcks21"]));

        villes.push(new Ville(19,Pas2Ville,["Pas2Maire"]));

        return villes;
    }


}








