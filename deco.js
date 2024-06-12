class Deco{
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
    get images() {
        return this._images;
    }

    set images(value) {
        this._images = value;
    }
    get ville_id() {
        return this._ville_id;
    }

    set ville_id(value) {
        this._ville_id = value;
    }
    get pnj_id() {
        return this._pnj_id;
    }

    set pnj_id(value) {
        this._pnj_id = value;
    }
    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }
    constructor(id, nom, pnj_id, ville_id, images, price) {
        this._nom = nom;
        this._pnj_id = pnj_id;
        this._ville_id = ville_id;
        this._images = images;
        this._price = price;
        this._id = id;
    }
}