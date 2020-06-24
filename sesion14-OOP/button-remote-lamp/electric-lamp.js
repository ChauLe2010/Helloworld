let ElectricLamp = function (){
    this.turnOff = function (){
        this.status=false;
    }
    this.turnOn = function (){
        this.status=true;
    }
    this.light = function (){
        if(this.status)
             document.write("Lighting!");
        else
            document.write("Not lighting! ");
    }
}
