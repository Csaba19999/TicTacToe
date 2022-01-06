class Kiertekel{
    constructor(tomb){
        this.tomb = tomb,
        console.log(this.tomb);



    }
    getFuggooleges(){
        let ellY ="";
        for (let index = 0; index < 3; index++) {
            ellY+=this.tomb[index].ertek+this.tomb[index+3].ertek+this.tomb[index+6].ertek
            ellY+="@";
        }
        return ellY;
    }
    getVizszintes(){
        let ellX = "";
        this.tomb.forEach((element, index) => {
            ellX+=element.ertek;
            if(index%3==2){
                ellX+="@";
            }
        });
        return ellX;
    }
    getAtlo(){
        let ell = this.tomb[0].ertek+this.tomb[4].ertek+this.tomb[8].ertek;
        ell += this.tomb[2].ertek+this.tomb[4].ertek+this.tomb[6].ertek;
        return ell;
    }

    ellenorzes(){
        let ell = this.getVizszintes()+"@"+this.getAtlo()+"@"+this.getFuggooleges();
        let allapot = "";
        if(ell.indexOf("XXX")>=0){
            allapot = "X";
        }else if(ell.indexOf("OOO")>=0){
            allapot = "O";
        }
        return allapot;
    }

}