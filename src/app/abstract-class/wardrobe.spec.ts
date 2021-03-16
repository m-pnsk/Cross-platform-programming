import {Wardrobe} from './wardrobe';
import {exception} from "console";

describe('Wardrobe Testing', ()=>{
    let wardrobe:Wardrobe;
    beforeEach(()=>{
        wardrobe=new Wardrobe("Шафа",30) 
    })
    fit("Створення екземпляру класу", ()=>{
        expect(Wardrobe).toBeTruthy();
    })
    fit("Розрахунок ціни шафи з об'ємом 30",()=>{
        wardrobe.Price();
        let s=wardrobe.C;
        let p=75*30;
        expect(s.toFixed(2)).toBe(p.toFixed(2));
    })
});