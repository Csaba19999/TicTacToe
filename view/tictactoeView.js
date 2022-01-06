/*Megjelenit egyetlen elemet*/

class Elem{
    constructor(szuloElem){
        this.node = szuloElem;
        szuloElem.append("<div><p></p></div>");
        this.elem = szuloElem.children("div:last");
        this.aktiv=true;
        this.pElem = this.elem.children("p");
        this.ertek="$";
        this.elem.on("click", () =>{
            if(this.aktiv){
                this.kattintasTrigger()
                this.aktiv=false;
            }
        });
    }
    setElem(ertek){
        this.ertek = ertek;
        this.pElem.html(ertek);
    }

    kattintasTrigger(){
        let esemeny = new CustomEvent("kivalaszt", {detail:this});
        window.dispatchEvent(esemeny);

    }
}

class Jatekter{
    constructor(tomb){
        const szuloElem = $("article");
        for (let index = 0; index < 9; index++) {
            const elem = new Elem(szuloElem);
            tomb.push(elem);
        }
        
        //elem.setElem("X");
    }
}