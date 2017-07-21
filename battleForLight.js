    // End goal
    const aragorn = new Hero({ name: "Aragorn", hp: 100, damage : 15, armor : 10, alliance : "light" });
    const orc = new Hero({ name: "Thrall", hp: 40, damage : 10, armor : 10, alliance : "Dark"  });
    const saruman = new Hero({ name: "Saruman", hp: 70, damage : 35, armor : 5, alliance : "Dark" });

    function Hero(actor) {
        console.log (actor.name + ' has entered the screen healthy with ' + actor.hp + ' hit points');
        this.name   = actor.name; 
        this.hp     = actor.hp;
        this.damage = actor.damage;
        this.armor  = actor.armor;
        this.alliance = actor.alliance;
    }

    battle = function(attacker, defender){
        if(attacker.hp > 0 && defender.hp > 0){
            console.log(attacker.name + ' strikes ' + defender.name);
            defender.hp = defender.hp - (attacker.damage - defender.armor);
        }
        
        if (defender.hp <= 0){
            console.log(defender.name + ' has obtained fatal damage, only the gods may save him.');
        }else{
            console.log('ouch! ' + defender.name + ' has lost ' + (attacker.damage-defender.armor) + ' hit points, he now has ' + defender.hp + ' remaining');
        }   
        getBattleOpponent();
    }

    getBattleOpponent = function(){
        if (aragorn.hp <=0){
            console.log("The light has gotten dimmer! Who will rise up.");
            return;
        }else if(orc.hp < 1 && saruman.hp < 1){
            console.log("A new light begins to shine.");
            return;
        }

        if(parseInt(Math.random() * 2)){
            battle(aragorn,readyForBattle(orc,saruman));
        }else{
            battle(readyForBattle(orc,saruman), aragorn);
        }
        checkActorHealth();
    }

    readyForBattle = function(actor1,actor2){
        if(actor1.hp > 0 && actor2 > 0){
            return ((parseInt(Math.random() * 2))? actor1  : actor2)
        }else{
            return ((actor1.hp > actor2.hp)? actor1 : actor2)
        }
    }

    resetActors = function (){
        aragorn.hp = 100;
        orc.hp = 20;
        saruman.hp = 50;
    }

    checkActorHealth = function(){
        console.log(aragorn.hp +' : '+ orc.hp +' : '+ saruman.hp);    
    }
    getBattleOpponent();
