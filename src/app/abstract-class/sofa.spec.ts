import {Sofa} from './sofa';
import {exception} from "console";

describe('Sofa Testing', ()=>{
    let sofa:Sofa;
    beforeEach(()=>{
        sofa=new Sofa("Sofa",5) 
    })
    fit("Створення екземпляру класу", ()=>{
        expect(sofa).toBeTruthy();
    })
    fit("Розрахунок ціни дивану з площиною 5",()=>{
        sofa.Price();
        let s=sofa.C;
        let p=((5*5)/3)+5000;
        expect(s.toFixed(2)).toBe(p.toFixed(2));
    })
});