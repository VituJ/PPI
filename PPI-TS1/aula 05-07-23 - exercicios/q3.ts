export class Televisao {

    volume : number = 25;
    canal : number= 0;

}

export class ControleRemoto {

    aumentarVolume(tv: Televisao){
        if (tv.volume < 100){
            tv.volume++;
        }
    }

    diminuirVolume(tv: Televisao){
        if (tv.volume > 0){
            tv.volume--;
        } 
    }

    obterVolume(tv: Televisao){
        return tv.volume;
    }

    aumentarCanal(tv: Televisao){
        if (tv.canal < 800){
            tv.canal++;
        }
    }

    diminuirCanal(tv: Televisao){
        if (tv.canal > 0){
            tv.canal--;
        } 
    }

    indicarCanal(tv: Televisao, n: number = 0){
        if(n > 0 && n <800){
            tv.canal = n;
        }
    }

    obterCanal(tv: Televisao){
        return tv.canal;
    }
}

let LGTV = new Televisao();
let ControleLGTV = new ControleRemoto();

ControleLGTV.aumentarVolume(LGTV);
ControleLGTV.diminuirVolume(LGTV);
ControleLGTV.aumentarVolume(LGTV);
console.log(ControleLGTV.obterVolume(LGTV));

ControleLGTV.aumentarCanal(LGTV);
ControleLGTV.aumentarCanal(LGTV);
ControleLGTV.diminuirCanal(LGTV);
console.log(ControleLGTV.obterCanal(LGTV));

ControleLGTV.indicarCanal(LGTV, 87);
console.log(ControleLGTV.obterCanal(LGTV));

console.log(LGTV)