
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
    villes = [];
    constructor() {
        super();
    }

    InitVilleData(){
        /** *
         * Déjà faite (decoration dedans)
         * **/
        this.villes.push(new Ville(1,Eriador, ["jerem1664", "Nisudry"]));
        this.villes.push(new Ville(2,Yrias, ["_Ybrakxar"]));
        this.villes.push(new Ville(3,Shinshiro, ["DVN88819"]));
        this.villes.push(new Ville(4,Drakaina,["_Minesta_"]));
        this.villes.push(new Ville(5,Rome,["kiefer_grylls", "klein1445"]));
        this.villes.push(new Ville(6,Florenia,["Flifloux"]));
        this.villes.push(new Ville(7,Azuria,["Zappax0"]));

        /** *
         * En cours (dajout des decos)
         * **/
        this.villes.push(new Ville(8,Nakaram,["Adidix"]));

        /** *
         * A faire (données des deco)
         * **/
        this.villes.push(new Ville(9,Villers,["Tintin1712"]));
        this.villes.push(new Ville(10,Nassau,["Glommery"]));
        this.villes.push(new Ville(11,Helios,["LeftForDeath6"]));
        this.villes.push(new Ville(12,Inpou,["Gorderok", "Zzheyd"]));
        this.villes.push(new Ville(13,Almeria,["Gorderok", "Zzheyd"]));

        /** *
         * Villes en construction
         * **/
        this.villes.push(new Ville(14,Kotaiblis,["Xof__"]));
        this.villes.push(new Ville(15,Imynda,["Djox79"]));
        this.villes.push(new Ville(16,Highland,["MissDu39","Kimalo"]));

        /** *
         * Villes Morte je crois xd
         * **/
        this.villes.push(new Ville(17,Alorah,["Gorderok", "Zzheyd"]));
        this.villes.push(new Ville(18,Blackbay,["Arcks21"]));

        this.villes.push(new Ville(19,Pas2Ville,["Pas2Maire"]));

        return this.villes;
    }

    getVilleByName(name){
        let result;
        this.villes.forEach(ville=>{
            if(ville._name.toString() === name){
                result = ville;
            }
        });
        return result;
    }

}








