var isstatus=document.querySelector("h5")
var fr=document.querySelector("h6")
var image=document.querySelector("img")
var add=document.querySelector("#add")
var re=document.querySelector("#remove")
var card=document.querySelector("#card")
var icon=document.querySelector("#love")
var like=document.querySelector("#like")

image.addEventListener("dblclick",function(){
  icon.style.transform=' translate(30%,-90%) scale(1)'
  icon.style.color="red"
  icon.style.opacity=0.8
  setTimeout(function(){
    icon.style.opacity=0.6
  },1000)
  setTimeout(function(){
    icon.style.transform=' translate(30%,-90%) scale(0)'
  },2000)
 

  like.style.color="red"

})
like.addEventListener("click",function(){
  if(like.style.color=="red"){
    like.style.color="white"
  }
  else if(like.style.color=="white"){
    like.style.color="red"
  }
})

add.addEventListener("click",function(){
  fr.innerHTML="Friends"
  fr.style.color="green"
  
  fr.style.fontSize="15px"

  re.style.visibility="visible"
  
})

re.addEventListener("click",function(){
    fr.innerHTML="UnFriend!"
    fr.style.color="red"
    fr.style.fontSize="15px"

    re.style.visibility="hidden"
})