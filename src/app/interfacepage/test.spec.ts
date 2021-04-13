import {Trial} from './interfacepage.page'
import {FinalExam} from './interfacepage.page'
import {ShowConsole} from './interfacepage.page'

describe("Trial and FinalExam Testing", ()=>{
    let shower:ShowConsole;
    let trial:Trial;
    let fExam:FinalExam;
    beforeEach(()=>
    {
        shower=new ShowConsole();
        trial=new Trial("Випробування", 60, "Я існую", shower);
        fExam=new FinalExam("Екзамен", 100, shower);
    }
    )
    fit("Створення екземпляру класу Shower", ()=>{
        expect(shower).toBeTruthy();
    })

    fit("Створення екземпляру класу Trial", ()=>{
        expect(trial).toBeTruthy();
    })

    fit("Створення екземпляру класу FinalExam", ()=>{
        expect(fExam).toBeTruthy();            
    })
});