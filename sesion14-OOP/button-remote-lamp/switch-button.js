let SwitchButton = function (){
    this.connectToLamp = function(electricLamp){
        this.lamp=electricLamp;
    }
    this.switchOff = function () {
        this.status=false;
        this.lamp.turnOff();
    }
    this.switchOn = function () {
        this.status=true;
        this.lamp.turnOn();
    }
}
