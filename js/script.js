var inputDataFrame = document.querySelector(".input-data");
//value
var mainBuilding = document.querySelector("#mainBuilding");
var outBuilding = document.querySelector("#outBuilding");
var bath = document.querySelector("#bath");
var homeAssets = document.querySelector("#homeAssets");
var fence = document.querySelector("#fence");
var civilRespons = document.querySelector("#civilRespons");
var nextBtn = document.querySelector(".next-btn");

var parameters = document.querySelector(".parameters");


//Koef
var mainBuildingsK, outBuildingsK, bathK,  homeAssetsK, fenceK, civilResponsibilityK;





nextBtn.addEventListener("click", function () {
        next();
})   

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        next(); 
        }
    }
)

function next(){
    if (mainBuilding.value) {
        inputDataFrame.classList.add("magic");
        setTimeout(function(){inputDataFrame.classList.add("hide");}, 580)
        mainBuilding.classList.remove("input-error");
        parameters.classList.add("show");
        
        console.log(calc(mainBuilding, outBuilding, bath, homeAssets, fence));
        
        if(calc(mainBuilding, outBuilding, bath, homeAssets, fence)<1000000){
            
            
        }else{
            
        }
        
    }else{
        mainBuilding.classList.toggle("input-error");
    }
    
} 

function calc(mainBuilding, outBuilding, bath, homeAssets, fence){
    if(!parseInt(mainBuilding.value)) mainBuilding.value=0;
    if(!parseInt(outBuilding.value)) outBuilding.value=0;
    if(!parseInt(bath.value)) bath.value=0;
    if(!parseInt(homeAssets.value)) homeAssets.value=0;
    if(!parseInt(fence.value)) fence.value=0;
    
    return parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value)
        + parseInt(homeAssets.value) + parseInt(fence.value);
}