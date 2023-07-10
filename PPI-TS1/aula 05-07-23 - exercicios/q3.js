"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleRemoto = exports.Televisao = void 0;
class Televisao {
    constructor() {
        this.volume = 25;
        this.canal = 0;
    }
}
exports.Televisao = Televisao;
class ControleRemoto {
    aumentarVolume(tv) {
        if (tv.volume < 100) {
            tv.volume++;
        }
    }
    diminuirVolume(tv) {
        if (tv.volume > 0) {
            tv.volume--;
        }
    }
    obterVolume(tv) {
        return tv.volume;
    }
    aumentarCanal(tv) {
        if (tv.canal < 800) {
            tv.canal++;
        }
    }
    diminuirCanal(tv) {
        if (tv.canal > 0) {
            tv.canal--;
        }
    }
    indicarCanal(tv, n = 0) {
        if (n > 0 && n < 800) {
            tv.canal = n;
        }
    }
    obterCanal(tv) {
        return tv.canal;
    }
}
exports.ControleRemoto = ControleRemoto;
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
console.log(LGTV);
