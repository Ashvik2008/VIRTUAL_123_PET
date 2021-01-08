//Creating variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //loading images here
  dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")
}

function setup() 
{
  //creating canvas
  createCanvas(500,500);
  
  //linking to database
  database = firebase.database();

  //foodStock value
  foodStock = database.ref('Food');
 foodStock.on("value",readStock);

 //creating the dog and adding image to it
  dog = createSprite(250,300,20,20);
  dog.addImage(dog1);
  dog.scale = 0.2
}


function draw()
 {  

  //creating the background
  background(46,139,87);

  //displaying  text1
  fill(255);
  text("PRESS THE UP ARROW TO FEED THE DOG",130,20);

  //displaying text2
  fill(255);
  textSize(20)
  text("MILK REMAINING : " + foodS,150,190)

  //function for the dog
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dog2);
  }
  if(keyWentUp(UP_ARROW))
  {
    dog.addImage(dog1);
  }

  //drawing the sprites
  drawSprites();
  

}

//function for readStock
function readStock(data)
{
  foodS = data.val();
}

//function for writeStock
function writeStock(x)
{

  if(x <= 0)
  {
    x = 0
  }
  else
  {
    x = x -1
  }
  database.ref('/').update
({
  Food: x
})
}