class Search{
    levenshteinDistance = (s, t) => {
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
    calculate = (a,b) => {
        return this.levenshteinDistance(a.toLowerCase(),b.toLowerCase()) < 3;
    }

    getPnjByName = (name) =>{

        let result = [];
        //pour les nom de pnjs en 2 mots
        pnjs.forEach(pnj => {
            const splitPnjName = pnj._name.split(" ");
            splitPnjName.forEach(pnjName => {
                if(this.calculate(name,pnjName)){
                    if (!result.includes(pnj)){
                        result.push(pnj);
                    }
                }
            });

            // pour les nom de pnj en une fois
            if (this.calculate(name,pnj._name)){
                if (!result.includes(pnj)){
                    result.push(pnj);
                }
            }

        });
        return result;
    }

    getDecoInPnj = (pnj)=>{
        let result = [];
        decos.forEach(deco=>{
            if(deco.pnj_id === pnj){
                result.push(deco);
            }
        });
        return result;
    }

    /**
     *
     * @param recherche = contenue de l'entrée utilisateur
     * @returns {*[deco(id, name, [pnj_id], image, price, event, craftable, [tags])]}
     * ca retourne les decos, base sur le mot de recherche en condition qu il soit conforme avec le nom des maires ou de la ville
     *
     */
    searchInVille = (recherche) => {
        let result = [];
        villes.forEach(city=> {
            if (this.calculate(recherche,city._name)){
                console.log(city._name)
                if(!result.includes(city)){
                    result.push(city);
                }
            }

            city._mayors.forEach(mayor => {
                if (this.calculate(recherche,mayor)){
                    if(!result.includes(city)){
                        result.push(city);
                    }
                }
            })

        });
        return result;
    }

    searchInTags = (recherche)=>{
        const result = []
        decos.forEach(deco => {
            deco.tags.forEach(tag=>{
                if(this.calculate(recherche,tag))
                    if(!result.includes(deco))
                        result.push(deco);
            });
        });
        return result;
    }
    searchDeco = (recherche) =>{
        let result = [];
        const splitSearch = recherche.split(" ");

        splitSearch.forEach(word=>{


            decos.forEach(deco =>{

                const splitDecoName = deco._name;
                // pour les decos en deux mots, ca prends chaque mot tout seul
                splitDecoName.split(" ").forEach(name => {
                    if(this.calculate(word,splitDecoName)){
                        if(!result.includes(deco))
                            result.push(deco);
                    }
                });

                // pour les nom de decos en une fois
                if(this.calculate(word,deco._name)){
                    if(!result.includes(deco))
                        result.push(deco);
                }
            });

            this.searchInVille(word).forEach(ville=>{
                this.getDecoInVille(ville,decos).forEach(deco => {
                    if(!result.includes(deco))
                        result.push(deco);
                });
            });

            this.getPnjByName(word).forEach(pnj => {
                this.getDecoInPnj(pnj).forEach(deco => {
                    if(!result.includes(deco))
                        result.push(deco);
                });
            });

            this.searchInTags(word).forEach(deco=>{
                if(!result.includes(deco))
                    result.push(deco);
            });

        });
        return result;
    }
    getVille = (name)=>{
        let result;
        villes.forEach(ville=> {
            if(ville._name === name){
                result = ville
            }
        });
        return result;
    }
    getDecoInVille = (ville, decos)=>{
        let result = [];
        decos.forEach(deco=>{
            if(deco._pnj_id._ville_id._name === ville._name){

                result.push(deco);
            }
        });
        return result;
    }
}