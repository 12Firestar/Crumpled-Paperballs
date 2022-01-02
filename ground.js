class Ground{
    constructor(x, y, w, h){

        var ground_options = {
            isStatic: true    
        }

        this.body = Bodies.rectangle(x, y, w, h, ground_options)
        this.w = w;
        this.h = h;
        World.add(world, this.body)
    
    }
    display(){
        var pos = this.body.position;
        push()
        rectMode(CENTER)
        stroke(255)
        fill(200)
        rect(pos.x, pos.y, this.w, this.h)
        pop()
    }
}