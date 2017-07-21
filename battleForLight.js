
// End goal
const aragorn = new Hero({ name: "Aragorn", hp: 100, damage : 15, armor : 5, alliance : "light" });
const orc = new Hero({ name: "Thrall", hp: 30, damage : 10, armor : 10, alliance : "Dark"  });
const saruman = new Hero({ name: "Saruman", hp: 50, damage : 25, armor : 5, alliance : "Dark" });

function Hero(actor) {
    console.log (actor.name + ' has entered the screen healthy with ' + actor.hp + ' hit points');
    this.name   = actor.name; 
    this.hp     = actor.hp;
    this.damage = actor.damage;
    this.armor  = actor.armor;
    this.alliance = actor.alliance;
}

battle = function(attacker, defender){
    console.log(attacker.name + ' strikes ' + defender.name);
    defender.hp = defender.hp - (attacker.damage - defender.armor);
    
    if (defender.hp <= 0){
        console.log(defender.name + ' has obtained fatal damage, only the gods may save you.')
            if (aragorn.hp > 0 && orc.hp >0 || saruman.hp > 0){
                getBattleOpponent();
            }else{
                console.log(attacker.name + ' has no one left to fight.')
            }
    }else{
        console.log('ouch! ' + defender.name + ' has lost ' + (attacker.damage-defender.armor) + ' hit points, he now has ' + defender.hp + ' remaining');
        getBattleOpponent();
    }   
}

getBattleOpponent = function(){
    if (aragorn.hp <=0){
        console.log("the light has gotten dimmer! Who will rise up.");
        return;
    };
    if(parseInt(Math.random() * 2)){
        (parseInt(Math.random() * 2)) ? battle(aragorn, saruman): battle(aragorn, orc);
    }   else {
        (parseInt(Math.random() * 2)) ? battle(orc, aragorn):battle(saruman, aragorn);        
    }
}

resetActors = function (){
    aragorn.hp = 100;
    orc.hp = 20;
    saruman.hp = 50;
};
getBattleOpponent();
