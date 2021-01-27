var arr = [...document.querySelectorAll(".arrow")]
var ques = document.getElementsByClassName("question")
var newText = [...document.querySelectorAll(".add")]

var ans = ["You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan",  "No more than 2GB. All files in your account must fit your allotted storage space.", "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.", "Yes! Send us a message and we’ll process your request no questions asked.", "Chat and email support is available 24/7. Phone lines are open during normal business hours."]



for(let i=0;i<arr.length;i++){
arr[i].addEventListener("click", function tes()
{   
    newText[i].innerHTML = ans[i]
    arr[i].style.transform = "rotateX(180deg)"
    ques[i].style.fontWeight ="700"
    ques[i].style.color ="hsl(238, 29%, 16%)"


})
}

// arr.forEach(function transform(element)
// {   
//     arr.addEventListener("click", function transform(element){
//     element.style.transform = "rotateX(180deg)"
// })