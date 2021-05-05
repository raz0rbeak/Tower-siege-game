class Box{
    constructor(x, y, width, height) {
      this.image = loadImage("block.png");
        var options = {
            'restitution':0.8,
            'friction':0.2,

        }
        this.Visiblity = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        if(this.body.speed < 3){
          imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
        
      }
     score(){
       if(this.Visiblity<0 && this.Visiblity>-50){
         score++
       }
     }
}