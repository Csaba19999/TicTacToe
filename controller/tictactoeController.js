class TTTController{
    constructor(){
        const tomb = [];
        new Jatekter(tomb);
        const info = new InfoView();
        const kiertekel = new Kiertekel(tomb);

        //Ellenőrizzük hogy van e győztes.
        this.lepes = 0;
        $(window).on("kivalaszt", (event)=>{
            let aktElem = event.detail;
            if(this.lepes %2 === 0){
                aktElem.setElem("X");
            }else{
                aktElem.setElem("O");
            }
            this.lepes++;
            //console.log(tomb)
            console.log(kiertekel.ellenorzes());
            if((kiertekel.ellenorzes()==="X")){
                info.setJatekVege("Az X nyert");
                jatekVege();
            }else if((kiertekel.ellenorzes()==="O")){
                info.setJatekVege("Az O nyert");
                jatekVege();
            }else if(this.lepes === 9){
                info.setJatekVege("dönttetlen");
                jatekVege();
            }
        });

        
    }
    jatekVege(){
        tomb.forEach(element => {
            element.aktiv = false;
        });
    }

}