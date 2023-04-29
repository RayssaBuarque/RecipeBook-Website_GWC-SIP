/* .js files add interaction to your website */

var randomBtn = document.getElementById("randomBtn");

var randomRecipe = document.getElementById("randomRecipe");

var img = document.getElementById("randomPic");
var title = document.getElementById("randomTitle");
var a = document.getElementById("randomConnect");

var clickCount = 0;

randomBtn.addEventListener("click",display);

function display(){
  clickCount++;

  randomRecipe.style.visibility = "visible";

  if(clickCount > 4){
    clickCount = 1;
  }
  
  switch(clickCount) {
    case 1:
      title.innerHTML = "Curried chicken and potato traybake";
      img.src = "assets/recipes/recipe1.jpg";
      a.href = "recipes/recipe1.html";
      break;
    
    case 2:
      title.innerHTML = "Potato, pea & egg curry rotis";
      img.src = "assets/recipes/recipe2.jpg";
      a.href = "recipes/recipe2.html";
      break;

    case 3:
      title.innerHTML = "Banana Oatmeal Yogurt Pancakes";
      img.src = "assets/recipes/recipe3.jpg";
      a.href = "recipes/recipe3.html";
      break;

    case 4:
      title.innerHTML = "Red lentil & carrot soup";
      img.src = "assets/recipes/recipe4.jpg";
      a.href = "recipes/recipe4.html";
      break;
      
    default:
      title.innerHTML = "";
      img.src = "";
      a.href = "index.html";
  }
}