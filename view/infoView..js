class InfoView{
    constructor(){
        this.jatekVegeElme=$(".jatekvege");
        this.kovetkezoJatekos=$(".kovetkezojatekos");
    }
    setJatekVege(ertek){
        this.jatekVegeElme.html(ertek);
    }
    setKovetkezoJatekos(ertek){
        this.kovetkezoJatekos.html(ertek);
    }
}