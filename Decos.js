class Deco{
    get events() {
        return this._events;
    }
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
    get image() {
        return this._image;
    }
    get price() {
        return this._price;
    }
    get id() {
        return this._id;
    }
    #incrementId = 0;
    constructor(id, name, pnj_id, image, price, event, craftable, tags) {
        this._name = name;
        this._pnj_id = pnj_id;
        this._image = image;
        this._price = price;
        this._id = id;
        this._events = event;
        this._craftable = craftable;
        this._tags = tags;
    }
}

class Decos extends Deco{
    constructor() {
        super();
    }
    id = 0;
    CreateDeco(name, pnj_id, price, event, craftable, tags){
        return new Deco(this.id++, name, pnj_id, "img/" + name + ".png" , price, event, craftable, tags);
    }

    InitDecoData(objPnjs){
        const {createDeco} = new Deco();
        const decos = [];

        /**
         ** Shinshiro
         **/
        decos.push(this.CreateDeco("Pousse de Bambou", objPnjs.getPnjById(1),"5 blocs d'émeraude","","oui",["bambou","plante","pousse"]));
        decos.push(this.CreateDeco("Tronc De Bambou", objPnjs.getPnjById(1),"5 blocs d'émeraude","","oui",["bambou","plante","tronc"]));
        decos.push(this.CreateDeco("Citrouille Japonaise", objPnjs.getPnjById(1),"5 blocs d'émeraude","","oui",["plante","citrouille","japonaise"]));
        decos.push(this.CreateDeco("Durian", objPnjs.getPnjById(1),"5 blocs d'émeraude","","oui",["plante"]));
        decos.push(this.CreateDeco("Plan de construction", objPnjs.getPnjById(2),"5 blocs d'émeraude","","oui",["maison","plan","construction"]));
        decos.push(this.CreateDeco("Bonsaï cerisier à fleurs", objPnjs.getPnjById(3),"vase + 64 poudres d'os","","oui",["plante","arbre","cerisier","bonsaï","fleurs"]));
        decos.push(this.CreateDeco("Bonsaï ancien", objPnjs.getPnjById(3),"vase + 64 poudres d'os","","oui",["plante","arbre","bonsaï","ancien"]));
        decos.push(this.CreateDeco("Sabot de vénus en pot", objPnjs.getPnjById(3),"vase + 64 poudres d'os","","oui",["plante","sabot","venus","pot"]));
        decos.push(this.CreateDeco("Bambous en pot", objPnjs.getPnjById(3),"vase + 64 poudres d'os","","oui",["plante","bambou"]));
        decos.push(this.CreateDeco("Roseaux en pot", objPnjs.getPnjById(3),"vase + 64 poudres d'os","","oui",["plante","roseaux","pot"]));
        decos.push(this.CreateDeco("Lilas en pot", objPnjs.getPnjById(3),"vase + 64 poudres d'os","","oui",["plante","fleur","pot","lilas"]));
        decos.push(this.CreateDeco("Schlumbergera en pot", objPnjs.getPnjById(3),"vase + 64 poudres d'os","","oui",["plante","fleur","pot","Schlumbergera"]));
        decos.push(this.CreateDeco("Cactus en pot", objPnjs.getPnjById(3),"vase + 64 poudres d'os","","oui",["plante","cactus"]));
        decos.push(this.CreateDeco("vase noir", objPnjs.getPnjById(5),"5 blocs d'émeraude","","oui",["noir", "vase"]));
        decos.push(this.CreateDeco("vase orange", objPnjs.getPnjById(5),"5 blocs d'émeraude","","oui",["orange", "vase"]));
        decos.push(this.CreateDeco("vase marron", objPnjs.getPnjById(5),"5 blocs d'émeraude","","oui",["marron", "vase"]));
        decos.push(this.CreateDeco("vase jaune", objPnjs.getPnjById(5),"5 blocs d'émeraude","","oui",["jaune", "vase"]));
        decos.push(this.CreateDeco("vase violet", objPnjs.getPnjById(5),"5 blocs d'émeraude","","oui",["violet", "vase"]));
        decos.push(this.CreateDeco("vase blanc", objPnjs.getPnjById(5),"5 blocs d'émeraude","","oui",["blanc", "vase"]));
        decos.push(this.CreateDeco("vase bleu", objPnjs.getPnjById(5),"5 blocs d'émeraude","","oui",["bleu", "vase"]));
        decos.push(this.CreateDeco("vase vert", objPnjs.getPnjById(5),"5 blocs d'émeraude","","oui",["vert", "vase"]));
        decos.push(this.CreateDeco("Farine", objPnjs.getPnjById(6),"5 blocs d'émeraude","","oui",["ingredient"]));
        decos.push(this.CreateDeco("Pain", objPnjs.getPnjById(6),"5 blocs d'émeraude","","oui",["pain"]));
        decos.push(this.CreateDeco("Pain moisi", objPnjs.getPnjById(6),"5 blocs d'émeraude","","oui",["pain"]));
        decos.push(this.CreateDeco("Pain de seigle", objPnjs.getPnjById(6),"5 blocs d'émeraude","","oui",["pain"]));
        decos.push(this.CreateDeco("Pain de romarin", objPnjs.getPnjById(6),"5 blocs d'émeraude","","oui",["pain"]));
        decos.push(this.CreateDeco("Pain aux noix de raisin", objPnjs.getPnjById(6),"5 blocs d'émeraude","","oui",["pain"]));
        decos.push(this.CreateDeco("Pain au levain", objPnjs.getPnjById(6),"5 blocs d'émeraude","","oui",["pain"]));
        decos.push(this.CreateDeco("vase rose", objPnjs.getPnjById(7),"5 blocs d'émeraude","","oui",["rose", "vase"]));
        decos.push(this.CreateDeco("vase bleu foncé", objPnjs.getPnjById(7),"5 blocs d'émeraude","","oui",["bleu", "vase"]));
        decos.push(this.CreateDeco("vase jaune 2", objPnjs.getPnjById(7),"5 blocs d'émeraude","","oui",["jaune", "vase"]));
        decos.push(this.CreateDeco("vase cyan", objPnjs.getPnjById(7),"5 blocs d'émeraude","","oui",["cyan", "vase"]));
        decos.push(this.CreateDeco("vase violet foncé", objPnjs.getPnjById(7),"5 blocs d'émeraude","","oui",["violet", "vase"]));
        decos.push(this.CreateDeco("vase blanc jaune", objPnjs.getPnjById(7),"5 blocs d'émeraude","","oui",["blanc", "vase"]));
        decos.push(this.CreateDeco("vase rouge", objPnjs.getPnjById(7),"5 blocs d'émeraude","","oui",["rouge", "vase"]));
        decos.push(this.CreateDeco("vase gris", objPnjs.getPnjById(7),"5 blocs d'émeraude","","oui",["gris", "vase"]));
        decos.push(this.CreateDeco("Cheminée en brique", objPnjs.getPnjById(8),"5 blocs d'émeraude","","oui",["tete", "deco","maison"]));
        decos.push(this.CreateDeco("Cheminée en pierre taillée moussue", objPnjs.getPnjById(8),"5 blocs d'émeraude","","oui",["tete", "deco","maison"]));
        decos.push(this.CreateDeco("Cheminée en pierre moussue", objPnjs.getPnjById(8),"5 blocs d'émeraude","","oui",["tete", "deco","maison"]));
        decos.push(this.CreateDeco("Cheminée en roche lisse", objPnjs.getPnjById(8),"5 blocs d'émeraude","","oui",["tete", "deco","maison"]));
        decos.push(this.CreateDeco("Cheminée pierre", objPnjs.getPnjById(8),"5 blocs d'émeraude","","oui",["tete", "deco","maison"]));
        decos.push(this.CreateDeco("Cheminée en roche", objPnjs.getPnjById(8),"5 blocs d'émeraude","","oui",["tete", "deco","maison"]));
        decos.push(this.CreateDeco("Cheminée pierre taillée", objPnjs.getPnjById(8),"5 blocs d'émeraude","","oui",["tete", "deco","maison"]));
        decos.push(this.CreateDeco("Masque homme 1", objPnjs.getPnjById(9),"2 blocs d'émeraude","","oui",["tete", "deco","masque","personnage","homme"]));
        decos.push(this.CreateDeco("Masque homme 2", objPnjs.getPnjById(9),"2 blocs d'émeraude","","oui",["tete", "deco","masque","personnage","homme"]));
        decos.push(this.CreateDeco("Masque homme 3", objPnjs.getPnjById(9),"2 blocs d'émeraude","","oui",["tete", "deco","masque","personnage","homme"]));
        decos.push(this.CreateDeco("Masque homme 4", objPnjs.getPnjById(9),"2 blocs d'émeraude","","oui",["tete", "deco","masque","personnage","homme"]));
        decos.push(this.CreateDeco("Masque femme 1", objPnjs.getPnjById(9),"2 blocs d'émeraude","","oui",["tete", "deco","masque","personnage","femme"]));
        decos.push(this.CreateDeco("Masque femme 2", objPnjs.getPnjById(9),"2 blocs d'émeraude","","oui",["tete", "deco","masque","personnage","femme"]));
        decos.push(this.CreateDeco("Masque femme 3", objPnjs.getPnjById(9),"2 blocs d'émeraude","","oui",["tete", "deco","masque","personnage","femme"]));
        decos.push(this.CreateDeco("Masque femme 4", objPnjs.getPnjById(9),"2 blocs d'émeraude","","oui",["tete", "deco","masque","personnage","femme"]));
        decos.push(this.CreateDeco("Feuilles 1", objPnjs.getPnjById(10),"5 blocs d'émeraude","","oui",["tete", "deco","arbre","plante"]));
        decos.push(this.CreateDeco("Feuilles 2", objPnjs.getPnjById(10),"5 blocs d'émeraude","","oui",["tete", "deco","arbre","plante"]));
        decos.push(this.CreateDeco("Feuilles 3", objPnjs.getPnjById(10),"5 blocs d'émeraude","","oui",["tete", "deco","arbre","plante"]));
        decos.push(this.CreateDeco("Tronc et Feuilles 1", objPnjs.getPnjById(10),"5 blocs d'émeraude","","oui",["tete", "deco","arbre","plante", "bois"]));
        decos.push(this.CreateDeco("Tronc et Feuilles 2", objPnjs.getPnjById(10),"5 blocs d'émeraude","","oui",["tete", "deco","arbre","plante", "bois"]));
        decos.push(this.CreateDeco("Tronc et Feuilles 3", objPnjs.getPnjById(10),"5 blocs d'émeraude","","oui",["tete", "deco","arbre","plante", "bois"]));
        decos.push(this.CreateDeco("Lampion rouge simple", objPnjs.getPnjById(11),"64 teintures rouges / 1 Almericoins bronze ","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion rouge à frange", objPnjs.getPnjById(11),"Lampion rouge simple / 16 pepites d'or","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion rouge colonne", objPnjs.getPnjById(11),"3 Lampion rouge simple / 32 papier","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion rouge double droit", objPnjs.getPnjById(11),"1 Lampion rouge simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion rouge double de coin", objPnjs.getPnjById(11),"1 Lampion rouge simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion bleu simple", objPnjs.getPnjById(11),"64 teintures bleus / 1 Almericoins bronze ","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion bleu à frange", objPnjs.getPnjById(11),"Lampion bleu simple / 16 pepites d'or","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion bleu colonne", objPnjs.getPnjById(11),"3 Lampion bleu simple / 32 papier","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion bleu double droit", objPnjs.getPnjById(11),"1 Lampion bleu simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion bleu double de coin", objPnjs.getPnjById(11),"1 Lampion bleu simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion vert simple", objPnjs.getPnjById(11),"64 teintures verts / 1 Almericoins bronze ","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion vert à frange", objPnjs.getPnjById(11),"Lampion vert simple / 16 pepites d'or","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion vert colonne", objPnjs.getPnjById(11),"3 Lampion vert simple / 32 papier","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion vert double droit", objPnjs.getPnjById(11),"1 Lampion vert simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion vert double de coin", objPnjs.getPnjById(11),"1 Lampion vert simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion gris simple", objPnjs.getPnjById(11),"64 teintures griss / 1 Almericoins bronze ","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion gris à frange", objPnjs.getPnjById(11),"Lampion gris simple / 16 pepites d'or","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion gris colonne", objPnjs.getPnjById(11),"3 Lampion gris simple / 32 papier","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion gris double droit", objPnjs.getPnjById(11),"1 Lampion gris simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion gris double de coin", objPnjs.getPnjById(11),"1 Lampion gris simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion orange simple", objPnjs.getPnjById(11),"64 teintures oranges / 1 Almericoins bronze ","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion orange à frange", objPnjs.getPnjById(11),"Lampion orange simple / 16 pepites d'or","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion orange colonne", objPnjs.getPnjById(11),"3 Lampion orange simple / 32 papier","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion orange double droit", objPnjs.getPnjById(11),"1 Lampion orange simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion orange double de coin", objPnjs.getPnjById(11),"1 Lampion orange simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion rose simple", objPnjs.getPnjById(11),"64 teintures roses / 1 Almericoins bronze ","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion rose à frange", objPnjs.getPnjById(11),"Lampion rose simple / 16 pepites d'or","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion rose colonne", objPnjs.getPnjById(11),"3 Lampion rose simple / 32 papier","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion rose double droit", objPnjs.getPnjById(11),"1 Lampion rose simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion rose double de coin", objPnjs.getPnjById(11),"1 Lampion rose simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion violet simple", objPnjs.getPnjById(11),"64 teintures violet  s / 1 Almericoins bronze ","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion violet à frange", objPnjs.getPnjById(11),"Lampion violet simple / 16 pepites d'or","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion violet colonne", objPnjs.getPnjById(11),"3 Lampion violet simple / 32 papier","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion violet double droit", objPnjs.getPnjById(11),"1 Lampion violet simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion violet double de coin", objPnjs.getPnjById(11),"1 Lampion violet simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion jaune simple", objPnjs.getPnjById(11),"64 teintures   jaune  s / 1 Almericoins bronze ","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion jaune à frange", objPnjs.getPnjById(11),"Lampion jaune simple / 16 pepites d'or","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Lampion jaune colonne", objPnjs.getPnjById(11),"3 Lampion jaune simple / 32 papier","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion jaune double droit", objPnjs.getPnjById(11),"1 Lampion jaune simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Mini-Lampion jaune double de coin", objPnjs.getPnjById(11),"1 Lampion jaune simple / 1 baton","","oui",["lampion","lumiere"]));
        decos.push(this.CreateDeco("Chapeau crabe", objPnjs.getPnjById(12),"casque en cuir / 32 chair de crabes","","oui",["tete","crabe"]));

        /**
         ** Pas de Ville
         **/
        decos.push(this.CreateDeco("Lampion Exterieur",objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));
        decos.push(this.CreateDeco("Lampion rouge", objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));
        decos.push(this.CreateDeco("Lampion Exotique", objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));
        decos.push(this.CreateDeco("Lampion Vert", objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));
        decos.push(this.CreateDeco("Lampion Bicolore", objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));
        decos.push(this.CreateDeco("Lampion Orange", objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));
        decos.push(this.CreateDeco("Lampion Rose", objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));
        decos.push(this.CreateDeco("Lampion de fête",objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));
        decos.push(this.CreateDeco("Lampion festif", objPnjs.getPnjById(42),"5 blocs d'émeraude","","non",["tete", "deco","lampion"]));

        /**
         ** Eriador
         **/
        decos.push(this.CreateDeco("Chope de bière", objPnjs.getPnjById(13),"2 bloc d'or brut / 64 blé","","oui",["biere","chope", "alcool","taverne"]));
        decos.push(this.CreateDeco("Chope de vin", objPnjs.getPnjById(13),"2 bloc d'or brut / 64 baies sucrées","","oui",["vin","chope", "alcool","taverne"]));
        decos.push(this.CreateDeco("Bouteille1", objPnjs.getPnjById(13),"32 verres vert / Ac de bronze","","oui",["alcool","taverne"]));
        decos.push(this.CreateDeco("Bouteille2", objPnjs.getPnjById(13),"32 verres violet / Ac de bronze","","oui",["alcool","taverne"]));
        decos.push(this.CreateDeco("Barrique", objPnjs.getPnjById(14),"16 planches de chene noir / Ac d'or","","oui",["alcool","tonneau","taverne"]));
        decos.push(this.CreateDeco("3 Barriques", objPnjs.getPnjById(14),"3 Barrique / Ac d'argent","","oui",["alcool","tonneau","taverne"]));
        decos.push(this.CreateDeco("Grosse barique", objPnjs.getPnjById(14),"64 planches de chene noir / 3 Ac d'or","","oui",["alcool","tonneau","taverne"]));
        decos.push(this.CreateDeco("3 Grosses bariques", objPnjs.getPnjById(14),"3 Grosse barique / Ac d'argent","","oui",["alcool","tonneau","taverne","meuble"]));
        decos.push(this.CreateDeco("Tapis de taverne", objPnjs.getPnjById(14),"32 laine verte / Ac de bronze","","oui",["sol","taverne"]));
        decos.push(this.CreateDeco("Chaise de taverne", objPnjs.getPnjById(14),"16 planches d'acajou / Ac d'or","","oui",["taverne","meuble"]));
        decos.push(this.CreateDeco("Table de taverne", objPnjs.getPnjById(14),"32 planches d'acajou / 5 Ac d'argent","","oui",["taverne","meuble"]));
        decos.push(this.CreateDeco("Grande table de taverne", objPnjs.getPnjById(14),"64 planches d'acajou / 4 Ac d'or","","oui",["taverne","meuble"]));
        decos.push(this.CreateDeco("Banc de taverne", objPnjs.getPnjById(14),"48 planches d'acajou / 2 Ac d'or","","oui",["taverne","meuble"]));
        decos.push(this.CreateDeco("Lustre de taverne", objPnjs.getPnjById(14),"5 lanterne / 3 Ac d'or","","oui",["taverne","meuble","lampe","lumiere"]));

        decos.push(this.CreateDeco("Pasteque ouverte", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","legumes"]));
        decos.push(this.CreateDeco("Pasteque", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","legumes"]));
        decos.push(this.CreateDeco("Citrouille 1", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","legumes"]));
        decos.push(this.CreateDeco("Citrouille 2", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","legumes"]));
        decos.push(this.CreateDeco("Tonneau de raisins", objPnjs.getPnjById(15),"tonneau vide / 2 raisin violet","","oui",["tete", "deco","legumes","vin"]));
        decos.push(this.CreateDeco("Raisins rosé", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","fruit","vin"]));
        decos.push(this.CreateDeco("Raisins Violet", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","fruit","vin"]));
        decos.push(this.CreateDeco("Raisins noir", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","fruit","vin"]));
        decos.push(this.CreateDeco("Raisins noir 2", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","fruit","vin"]));
        decos.push(this.CreateDeco("Raisins blanc", objPnjs.getPnjById(15),"5 bloc d'émeraude","","oui",["tete", "deco","fruit","vin"]));
        decos.push(this.CreateDeco("Cidre de la compté", objPnjs.getPnjById(16),"32 verre vert / raisins blanc","","oui",["alcool","vin"]));
        decos.push(this.CreateDeco("Cuvée ecu de chene", objPnjs.getPnjById(16),"32 verre vert / raisins rosé","","oui",["alcool","vin"]));
        decos.push(this.CreateDeco("Rouge Uroc K ay", objPnjs.getPnjById(16),"32 verre vert / raisins violet","","oui",["alcool","vin"]));
        decos.push(this.CreateDeco("Champignon rouge", objPnjs.getPnjById(17),"5 bloc d'émeraude","","oui",["tete", "deco","plante"]));
        decos.push(this.CreateDeco("Champignon Marron", objPnjs.getPnjById(17),"5 bloc d'émeraude","","oui",["tete", "deco","plante"]));
        decos.push(this.CreateDeco("Champignon bleu", objPnjs.getPnjById(17),"5 bloc d'émeraude","","oui",["tete", "deco","plante"]));
        decos.push(this.CreateDeco("Champignon bleu nuit", objPnjs.getPnjById(17),"5 bloc d'émeraude","","oui",["tete", "deco","plante"]));
        decos.push(this.CreateDeco("Champignon violet", objPnjs.getPnjById(17),"5 bloc d'émeraude","","oui",["tete", "deco","plante"]));
        decos.push(this.CreateDeco("Grenadille", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Kiwi", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Orange rouge", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Goyave", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Myrtille 1", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Myrtille 2", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Pomme jaune", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Pomme verte 1", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Pomme verte 2", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Pomme orange", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Pomme rouge", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));
        decos.push(this.CreateDeco("Coton", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Maïs", objPnjs.getPnjById(18),"5 bloc d'émeraude","","oui",["tete", "deco","fruit"]));

        /**
         ** Drakaina
         **/
        decos.push(this.CreateDeco("Sjokk fisk suspendus", objPnjs.getPnjById(19),"3 Sjokk","","oui",["poisson"]));
        decos.push(this.CreateDeco("Tonneau de Sjokk fisk", objPnjs.getPnjById(19),"1 tonneau vide + 4 Sjokk","","oui",["poisson"]));
        decos.push(this.CreateDeco("Bûche de chene", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche acajou", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche sapin", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche chene noir", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche acacia", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche bouleau", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));


        decos.push(this.CreateDeco("Bûche de chene enneigé", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche acajou enneigé", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche sapin enneigé", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche chene noir enneigé", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche acacia enneigé", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Bûche bouleau enneigé", objPnjs.getPnjById(20),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));

        decos.push(this.CreateDeco("Pomme de pin 1", objPnjs.getPnjById(21),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Pomme de pin 2", objPnjs.getPnjById(21),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Tas de buche 1", objPnjs.getPnjById(21),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Tas de buche 2", objPnjs.getPnjById(21),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));

        decos.push(this.CreateDeco("Chien", objPnjs.getPnjById(22),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Loup", objPnjs.getPnjById(22),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Belier", objPnjs.getPnjById(22),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));

        decos.push(this.CreateDeco("Tonneau 1", objPnjs.getPnjById(22),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Tonneau 2", objPnjs.getPnjById(22),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Baril 1", objPnjs.getPnjById(22),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Baril 2", objPnjs.getPnjById(22),"5 bloc d'émeraude","","oui",["tete", "deco","bois"]));
        decos.push(this.CreateDeco("Plan de construction", objPnjs.getPnjById(22),"5 bloc d'émeraude","","oui",["maison","plan","construction"]));

        decos.push(this.CreateDeco("Plan de construction", objPnjs.getPnjById(24),"5 bloc d'émeraude","","oui",["maison","plan","construction"]));

        decos.push(this.CreateDeco("Jambon", objPnjs.getPnjById(25),"5 bloc d'émeraude","","oui",["tete", "deco","nourriture","viande"]));
        decos.push(this.CreateDeco("Jambon à os", objPnjs.getPnjById(25),"5 bloc d'émeraude","","oui",["tete", "deco","nourriture","viande"]));
        decos.push(this.CreateDeco("Jambon à os aux herbes", objPnjs.getPnjById(25),"5 bloc d'émeraude","","oui",["tete", "deco","nourriture","viande"]));
        decos.push(this.CreateDeco("Bacon", objPnjs.getPnjById(25),"5 bloc d'émeraude","","oui",["tete", "deco","nourriture","viande"]));
        decos.push(this.CreateDeco("Viande", objPnjs.getPnjById(25),"5 bloc d'émeraude","","oui",["tete", "deco","nourriture","viande"]));

        decos.push(this.CreateDeco("Torche en fer forgé", objPnjs.getPnjById(26),"3 bloc de fer brut / 1 torche","","oui",["lumiere"]));
        decos.push(this.CreateDeco("Torche en fer forgé mural", objPnjs.getPnjById(26),"3 bloc de fer brut / 1 torche","","oui",["lumiere"]));

        decos.push(this.CreateDeco("Cible", objPnjs.getPnjById(27),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Bougie rouge", objPnjs.getPnjById(27),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Coffre", objPnjs.getPnjById(27),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Globe terrestre", objPnjs.getPnjById(27),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Sceau", objPnjs.getPnjById(27),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Vieux livres", objPnjs.getPnjById(27),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Coffre royal", objPnjs.getPnjById(27),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Sac d or", objPnjs.getPnjById(27),"5 blocs d'émeraude","","oui",["tete", "deco"]));

        decos.push(this.CreateDeco("Perroquet Rouge", objPnjs.getPnjById(28),"5 blocs d'émeraude","","oui",["tete", "deco","animal"]));
        decos.push(this.CreateDeco("Perroquet vert", objPnjs.getPnjById(28),"5 blocs d'émeraude","","oui",["tete", "deco","animal"]));
        decos.push(this.CreateDeco("Perroquet jaune", objPnjs.getPnjById(28),"5 blocs d'émeraude","","oui",["tete", "deco","animal"]));
        decos.push(this.CreateDeco("Perroquet orange", objPnjs.getPnjById(28),"5 blocs d'émeraude","","oui",["tete", "deco","animal"]));
        decos.push(this.CreateDeco("Perroquet bleu", objPnjs.getPnjById(28),"5 blocs d'émeraude","","oui",["tete", "deco","animal"]));

        decos.push(this.CreateDeco("Arbuste violet", objPnjs.getPnjById(29),"5 blocs d'émeraude","","oui",["tete", "deco","fleurs"]));
        decos.push(this.CreateDeco("Arbuste rosé", objPnjs.getPnjById(29),"5 blocs d'émeraude","","oui",["tete", "deco","fleurs"]));
        decos.push(this.CreateDeco("Arbuste bordeaux", objPnjs.getPnjById(29),"5 blocs d'émeraude","","oui",["tete", "deco","fleurs"]));
        decos.push(this.CreateDeco("Arbuste rose", objPnjs.getPnjById(29),"5 blocs d'émeraude","","oui",["tete", "deco","fleurs"]));
        decos.push(this.CreateDeco("Arbuste marguerite", objPnjs.getPnjById(29),"5 blocs d'émeraude","","oui",["tete", "deco","fleurs"]));
        decos.push(this.CreateDeco("Arbuste rouge", objPnjs.getPnjById(29),"5 blocs d'émeraude","","oui",["tete", "deco","fleurs"]));
        decos.push(this.CreateDeco("Arbuste blanc", objPnjs.getPnjById(29),"5 blocs d'émeraude","","oui",["tete", "deco","fleurs"]));
        decos.push(this.CreateDeco("Arbuste bleu", objPnjs.getPnjById(29),"5 blocs d'émeraude","","oui",["tete", "deco","fleurs"]));

        decos.push(this.CreateDeco("Cagette de Truites fleurie", objPnjs.getPnjById(30),"3 truite fleurie / cagette vide","","oui",["tete", "deco","poissons"]));
        decos.push(this.CreateDeco("Truites fleuries suspendues", objPnjs.getPnjById(30),"4 truite fleurie / 16 ficelles","","oui",["tete", "deco","poissons"]));
        decos.push(this.CreateDeco("Jus de fruit", objPnjs.getPnjById(31),"5 blocs d'émeraude","","oui",["tete", "deco","boisson"]));
        decos.push(this.CreateDeco("Biere", objPnjs.getPnjById(31),"5 blocs d'émeraude","","oui",["tete", "deco","boisson","alcool"]));

        decos.push(this.CreateDeco("Oignon en poudre", objPnjs.getPnjById(32),"5 blocs d'émeraude","","oui",["tete", "deco","bocal"]));
        decos.push(this.CreateDeco("Noix de muscade", objPnjs.getPnjById(32),"5 blocs d'émeraude","","oui",["tete", "deco","bocal"]));
        decos.push(this.CreateDeco("Graine de moutarde", objPnjs.getPnjById(32),"5 blocs d'émeraude","","oui",["tete", "deco","bocal"]));
        decos.push(this.CreateDeco("Gingembre", objPnjs.getPnjById(32),"5 blocs d'émeraude","","oui",["tete", "deco","bocal"]));
        decos.push(this.CreateDeco("Aneth", objPnjs.getPnjById(32),"5 blocs d'émeraude","","oui",["tete", "deco","bocal"]));
        decos.push(this.CreateDeco("Curry", objPnjs.getPnjById(32),"5 blocs d'émeraude","","oui",["tete", "deco","bocal"]));
        decos.push(this.CreateDeco("Cacao", objPnjs.getPnjById(32),"5 blocs d'émeraude","","oui",["tete", "deco","bocal"]));
        decos.push(this.CreateDeco("Canelle", objPnjs.getPnjById(32),"5 blocs d'émeraude","","oui",["tete", "deco","bocal"]));
        decos.push(this.CreateDeco("Plan de construction", objPnjs.getPnjById(33),"5 bloc d'émeraude","","oui",["maison","plan","construction"]));

        decos.push(this.CreateDeco("Doudou Champinou rouge", objPnjs.getPnjById(34),"64 champignon marron / 32 champignon rouge","","oui",["peluche"]));
        decos.push(this.CreateDeco("Doudou Champinou brun", objPnjs.getPnjById(34),"64 + 32 champignon marron","","oui",["peluche"]));
        decos.push(this.CreateDeco("Doudou Champinou carmin", objPnjs.getPnjById(34),"64 champignon marron / 32 champignon carmin","","oui",["peluche"]));
        decos.push(this.CreateDeco("Doudou Champinou biscornue", objPnjs.getPnjById(34),"64 champignon marron / 32 champignon biscornu","","oui",["peluche"]));
        decos.push(this.CreateDeco("Doudou Mini-champi rouge", objPnjs.getPnjById(34),"64 champignon marron / 32 champignon rouge","","oui",["peluche"]));
        decos.push(this.CreateDeco("Doudou Mini-champi brun", objPnjs.getPnjById(34),"64 + 32 champignon marron","","oui",["peluche"]));
        decos.push(this.CreateDeco("Doudou Mini-champi carmin", objPnjs.getPnjById(34),"64 champignon marron / 32 champignon carmin","","oui",["peluche"]));
        decos.push(this.CreateDeco("Doudou Mini-champibiscornue", objPnjs.getPnjById(34),"64 champignon marron / 32 champignon biscornu","","oui",["peluche"]));
        decos.push(this.CreateDeco("Doudou Scorp slime", objPnjs.getPnjById(34),"16 bloc de slime / Doudou Mini-champi rouge","","oui",["peluche"]));


        decos.push(this.CreateDeco("Oeuf a la coque", objPnjs.getPnjById(35),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Jambon 2", objPnjs.getPnjById(35),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Verre vide", objPnjs.getPnjById(35),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Verre d eau", objPnjs.getPnjById(35),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Verre de thé", objPnjs.getPnjById(35),"5 blocs d'émeraude","","oui",["tete", "deco"]));
        decos.push(this.CreateDeco("Verre de lait", objPnjs.getPnjById(35),"5 blocs d'émeraude","","oui",["tete", "deco"]));

        decos.push(this.CreateDeco("Chapeau tortue", objPnjs.getPnjById(36),"32 ecailles de tortues / casque en cuir","","oui",["chapeau","tete","tortue"]));
        decos.push(this.CreateDeco("Soupe de tortue", objPnjs.getPnjById(36),"Tortue de Kemp de Nakaram / bol","","oui",["chapeau","tete","tortue","nourriture"]));
        decos.push(this.CreateDeco("Cagette de tortue", objPnjs.getPnjById(36),"3 Tortue de Kemp de Nakaram / cagette vide","","oui",["chapeau","tete","tortue","nourriture"]));
        decos.push(this.CreateDeco("Plan de construction", objPnjs.getPnjById(37),"5 bloc d'émeraude","","oui",["maison","plan","construction"]));

        /**
         * données decos
         */

        return decos;
    }

}