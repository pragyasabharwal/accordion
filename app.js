var arr = [...document.querySelectorAll(".arrow")]
var ques = document.getElementsByClassName("question")
var newText = [...document.querySelectorAll(".add")]

for(let i=0;i<arr.length;i++){
arr[i].addEventListener("click", function()
{   
        
        if (newText[i].style.display === "block") {
        
        newText[i].style.display = "none";
        arr[i].style.transform = "unset"
        ques[i].style.fontWeight ="unset"
        ques[i].style.color ="hsl(240, 6%, 50%)"
      } else {
        newText[i].style.display = "block";
        arr[i].style.transform = "rotateX(180deg)"
        ques[i].style.fontWeight ="700"
        ques[i].style.color ="hsl(238, 29%, 16%)"

      }
      

  

})
}

// arr.forEach(function transform(element)
// {   
//     arr.addEventListener("click", function transform(element){
//     element.style.transform = "rotateX(180deg)"
// })