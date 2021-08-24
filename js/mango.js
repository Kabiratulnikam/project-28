class Mango{
constructor(x,y,r)
{
    var option ={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.x=x
 this.y=y
  this.r=r
  this.image=loadImage("images/mango.png")  
  this.body=Bodies.circle(this.x,this.y,this.r)
  World.add(world,this.body)
}
display(){
    var mangoPos=this.body.position
    image (this.image,0,0,this.r)
}
}