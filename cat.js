
class Cat{
    constructor(tiredness, hunger, loneliness, happiness, name){
        this._tiredness = tiredness;
        this._hunger = hunger;
        this._loneliness = loneliness;
        this._happiness = happiness;
        this._name = name;
    }

        sleep(sleepHours){
            this._tiredness = this._tiredness - sleepHours;
        }

        eat(foodPortion){
            this._hunger = this._hunger - foodPortion;
        }

        socialize(hoursWithFriends){
            this._loneliness = this._loneliness - hoursWithFriends;
        }

        fun(hoursHavingFun){
            this._happiness = this._happiness + hoursHavingFun;
        }

        checkInWithCat(){
            let sleepiness;
            let hungerLevel;
            let contentment;
            let socializing;
            if(this._tiredness >= 5){
                sleepiness = 'exhausted';
            } else if(this._tiredness < 5 && this._tiredness >= 1) {
                sleepiness = 'a little sleepy';
            } else {
                sleepiness = 'wide awake';
            }

            if(this._hunger >= 5){
                hungerLevel = 'ravenous';
            } else if(this._hunger < 5 &&  this._hunger >= 1){
                hungerLevel = 'ready to eat';
            } else {
                hungerLevel = 'satieted';
            }

            if(this._happiness >= 5){
                contentment = 'blissfull';
            } else if(this._happiness < 5){
                contentment = 'annoyed';
            } 

            if(this._loneliness >= 5){
                socializing = 'feels loved'
            } else if(this._loneliness < 5 && this._loneliness <= 1){
                socializing = 'would like to meet friends and get petted'
            } else{
                socializing = 'feels sad and lonely'
            }

            return `${this._name} is a cat with very specific needs and it is very important to fulfill them. At the moment ${this._name} is ${sleepiness} and ${hungerLevel}. I looks like ${this._name} is ${contentment} and  ${socializing}!`
        }
}

const catJonas = new Cat(4, 5, 2, 6, 'Jonas');

console.log(catJonas.checkInWithCat());

catJonas.sleep(8);

console.log(catJonas._tiredness);