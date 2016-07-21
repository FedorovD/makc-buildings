var inputDataFrame = document.querySelector(".input-data");
//value
var mainBuilding = document.querySelector("#mainBuilding");
var outBuilding = document.querySelector("#outBuilding");
var bath = document.querySelector("#bath");
var homeAssets = document.querySelector("#homeAssets");
var fence = document.querySelector("#fence");
var civilRespons = document.querySelector("#civilRespons");
var nextBtn = document.querySelector(".next-btn");
var calcBtn = document.querySelector(".calc-btn");

var riskPackageComboBox = document.querySelector(".riskPackageComboBox");
var homeAssetsComboBox = document.querySelector(".homeAssetsComboBox");
var typesOfFenceComboBox = document.querySelector(".typesOfFenceComboBox");
var civilResponsComboBox = document.querySelector(".civilResponsibilityComboBox");
var typesOfBuildingsComboBox = document.querySelector(".typesOfBuildingsComboBox");
var choiceAccommodationComboBox = document.querySelector(".choiceAccommodationComboBox");
var franchiseComboBox = document.querySelector(".franchiseComboBox");
var threeOptions = document.querySelector(".threeOptions");
var rent = document.querySelector(".rent");
var part = document.querySelector(".part");
var withoutFoundation = document.querySelector(".withoutFoundation");
var allHomeAssets = document.querySelector(".allHomeAssets");
var terror = document.querySelector(".terror");
var firstRiskComboBox = document.querySelector(".firstRiskComboBox");
var protectedByPSC = document.querySelector(".protectedByPSC");
var autoFireExtSyst = document.querySelector(".autoFireExtSyst");
var alarmAndPatrol = document.querySelector(".alarmAndPatrol");
var fireExtinguisher = document.querySelector(".fireExtinguisher");
var windowProtection = document.querySelector(".windowProtection");
var firstRisk = document.querySelector(".firstRisk");
var correction = document.querySelector(".correction");

var parameters = document.querySelector(".parameters");


//Koef
var mainBuildingsK, outBuildingsK, bathK, homeAssetsK, fenceK, civilResponsibilityK;





nextBtn.addEventListener("click", function () {
    next();
})

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        next();
    }
})

function next() {
    if (mainBuilding.value) {
        inputDataFrame.classList.add("magic");
        setTimeout(function () {
            inputDataFrame.classList.add("hide");
        }, 580)
        mainBuilding.classList.remove("input-error");
        parameters.classList.add("show");

        console.log("sum: " + calc(mainBuilding, outBuilding, bath, homeAssets, fence));

        //Если введено дом.имущ
        if (homeAssets.value != 0) {
            homeAssetsComboBox.classList.remove("hide");
        }

        //Если введено ограждение
        if (fence.value != 0) {
            typesOfFenceComboBox.classList.remove("hide");
        } else {
            typesOfFenceComboBox.disabled = true;
        }

        //Если введено ГО
        if (civilRespons.value != 0) {
            civilResponsComboBox.classList.remove("hide");
        } else {
            civilResponsComboBox.disabled = true;
        }


        if (calc(mainBuilding, outBuilding, bath, homeAssets, fence) < 1000000) {




        } else {

            typesOfBuildingsComboBox.classList.remove("hide");
            threeOptions.classList.remove("hide");
            rent.classList.remove("hide");
            part.classList.remove("hide");
            withoutFoundation.classList.remove("hide");
            allHomeAssets.classList.remove("hide");
            terror.classList.remove("hide");
            firstRiskComboBox.classList.remove("hide");
            protectedByPSC.classList.remove("hide");
            autoFireExtSyst.classList.remove("hide");
            alarmAndPatrol.classList.remove("hide");
            fireExtinguisher.classList.remove("hide");
            windowProtection.classList.remove("hide");
            firstRisk.classList.remove("hide");
            correction.classList.remove("hide");


        }



    } else {
        mainBuilding.classList.toggle("input-error");
    }

}

//3 группы если дом.имущ. "По описи"
homeAssetsComboBox.addEventListener("mouseout", function () {
    if (document.querySelector(".homeAssetsComboBox").options.selectedIndex != 0) {
        document.querySelector(".homeAssetsComboBox").classList.add("select-clicked");
    }
    if (document.querySelector(".homeAssetsComboBox").options.selectedIndex === 2) {
        document.querySelector(".groupRadio").classList.remove("hide");
    } else {
        document.querySelector(".groupRadio").classList.add("hide");
    }

})


riskPackageComboBox.addEventListener("mouseout", function () {
    if (document.querySelector(".riskPackageComboBox").options.selectedIndex != 0) {
        document.querySelector(".riskPackageComboBox").classList.add("select-clicked");
    }
})
typesOfBuildingsComboBox.addEventListener("mouseout", function () {
    if (document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex != 0) {
        document.querySelector(".typesOfBuildingsComboBox").classList.add("select-clicked");
    }
    if (document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex == 2 || document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex == 3) {
        document.querySelector(".wholeOrNot").classList.remove("hide");
    } else {
        document.querySelector(".wholeOrNot").classList.add("hide");
    }
})
civilResponsComboBox.addEventListener("mouseout", function () {
    if (document.querySelector(".civilResponsibilityComboBox").options.selectedIndex != 0) {
        document.querySelector(".civilResponsibilityComboBox").classList.add("select-clicked");
    }
})
choiceAccommodationComboBox.addEventListener("mouseout", function () {
    if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex != 0) {
        document.querySelector(".choiceAccommodationComboBox").classList.add("select-clicked");
    }
})
franchiseComboBox.addEventListener("mouseout", function () {
    if (document.querySelector(".franchiseComboBox").options.selectedIndex != 0) {
        document.querySelector(".franchiseComboBox").classList.add("select-clicked");
    }
})
typesOfFenceComboBox.addEventListener("mouseout", function () {
    if (document.querySelector(".typesOfFenceComboBox").options.selectedIndex != 0) {
        document.querySelector(".typesOfFenceComboBox").classList.add("select-clicked");
    }
})
firstRiskComboBox.addEventListener("mouseout", function () {
    if (document.querySelector(".firstRiskComboBox").options.selectedIndex != 0) {
        document.querySelector(".firstRiskComboBox").classList.add("select-clicked");
    }
})
correction.addEventListener("mouseout", function () {
    if (document.querySelector(".correction").options.selectedIndex != 0) {
        document.querySelector(".correction").classList.add("select-clicked");
    }
})


function calc(mainBuilding, outBuilding, bath, homeAssets, fence) {
    if (!parseInt(mainBuilding.value)) mainBuilding.value = 0;
    if (!parseInt(outBuilding.value)) outBuilding.value = 0;
    if (!parseInt(bath.value)) bath.value = 0;
    if (!parseInt(homeAssets.value)) homeAssets.value = 0;
    if (!parseInt(fence.value)) fence.value = 0;

    return parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value);
}

calcBtn.addEventListener("click", function () {
    
    
    
    
    
    if (calc(mainBuilding, outBuilding, bath, homeAssets, fence) <= 1000000) {
        if(document.querySelector(".riskPackageComboBox").options.selectedIndex!=0 &&
           document.querySelector(".choiceAccommodationComboBox").options.selectedIndex!=0 &&
           document.querySelector(".franchiseComboBox").options.selectedIndex!=0){
            if(civilResponsComboBox.disabled == true && typesOfFenceComboBox.disabled == true){
                //1
                calcK();
                showOut();
            } else if(civilResponsComboBox.disabled == true && typesOfFenceComboBox.disabled == false){
                //2
                if(document.querySelector(".typesOfFenceComboBox").options.selectedIndex!=0){
                    calcK(); 
                    showOut();
                }
            }else if(civilResponsComboBox.disabled == false && typesOfFenceComboBox.disabled == true){
                //3
                if(document.querySelector(".civilResponsibilityComboBox").options.selectedIndex!=0){
                    calcK(); 
                    showOut();
                }
            }else{
                //4
                calcK(); 
                showOut();
            }
        }
    } else if (calc(mainBuilding, outBuilding, bath, homeAssets, fence) > 1000000){
        if(document.querySelector(".riskPackageComboBox").options.selectedIndex!=0 &&
           document.querySelector(".choiceAccommodationComboBox").options.selectedIndex!=0 &&
           document.querySelector(".franchiseComboBox").options.selectedIndex!=0 &&
           document.querySelector(".firstRiskComboBox").options.selectedIndex!=0 &&
           document.querySelector(".correction").options.selectedIndex!=0 &&
           document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex!=0){
            
           
            
                if(document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex == 2 || 
                   document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex == 3){
                if(document.querySelector("#whole").checked || document.querySelector("#onlyDecor").checked){
                    calcK(); 
                    showOut();
                }  
            }else if(document.querySelector(".typesOfBuildingsComboBox".options.selectedIndex == 1)){
                     calcK(); 
                    showOut();
            }

            if(civilResponsComboBox.disabled == true && typesOfFenceComboBox.disabled == true){
                //1
                calcK();
                showOut();
            } else if(civilResponsComboBox.disabled == true && typesOfFenceComboBox.disabled == false){
                //2
                if(document.querySelector(".typesOfFenceComboBox").options.selectedIndex!=0){
                    calcK(); 
                    showOut();
                }
            }else if(civilResponsComboBox.disabled == false && typesOfFenceComboBox.disabled == true){
                //3
                if(document.querySelector(".civilResponsibilityComboBox").options.selectedIndex!=0){
                    calcK(); 
                    showOut();
                }
            }else{
                //4
                calcK(); 
                showOut();
            }
            
            
            
            
            
            
        }
    }
    

    
    

    
    
    
    
    
})




function calcK() {
    
    
    //<1kk
    
    if (calc(mainBuilding, outBuilding, bath, homeAssets, fence) <= 1000000) {
        //<1kk
        if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 1) {
            //Базовый
            if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 1) {
                mainBuildingsK = 0.42;
            } else if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 2) {
                mainBuildingsK = 0.52;
            }


        } else if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 2) {
            //Полный
            if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 1) {
                mainBuildingsK = 0.56;
            } else if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 2) {
                mainBuildingsK = 0.62;
            }
        }


        if (outBuilding.value) {
            if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 1) {
                outBuildingsK = 0.5;
            } else if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 2) {
                outBuildingsK = 0.7;
            }
        }
        if (bath.value) {
            if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 1) {
                bathK = 0;
            } else if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 2) {
                bathK = 1.1;
            }
        }
        if (homeAssets.value) {
            if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 1) {
                if (document.querySelector(".homeAssetsComboBox").options.selectedIndex === 1) {
                    homeAssetsK = 0;
                } else {
                    if (document.querySelector("#firstGroup").checked) {
                        homeAssetsK = 0.6;
                    } else if (document.querySelector("#secondGroup").checked) {
                        homeAssetsK = 0.78;
                    } else if (document.querySelector("#thirdGroup").checked) {
                        homeAssetsK = 1.0;
                    }
                }

            } else if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 2) {
                if (document.querySelector(".homeAssetsComboBox").options.selectedIndex === 1) {
                    homeAssetsK = 1.6;
                } else if (document.querySelector(".homeAssetsComboBox").options.selectedIndex === 2) {
                    if (document.querySelector("#firstGroup").checked) {
                        homeAssetsK = 0.8;
                    } else if (document.querySelector("#secondGroup").checked) {
                        homeAssetsK = 1.0;
                    } else if (document.querySelector("#thirdGroup").checked) {
                        homeAssetsK = 1.5;
                    }
                }


            }
        }




    } else if (calc(mainBuilding, outBuilding, bath, homeAssets, fence) > 1000000) {
        //>1kk
        if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 1) {
            //Базовый
            if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 1) {
                mainBuildingsK = 0.39;
            } else if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 2) {
                mainBuildingsK = 0.34;
            }

            if (document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex === 1) {
                mainBuildingsK = 0.39;
            } else if (document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex === 2) {
                if (document.querySelector("#whole").checked) {
                    mainBuildingsK = 0.34;
                } else if (document.querySelector("#onlyDecor").checked) {
                    mainBuildingsK = 0.50;
                }
            } else if (document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex === 3) {
                if (document.querySelector("#whole").checked) {
                    mainBuildingsK = 0.30;
                } else if (document.querySelector("#onlyDecor").checked) {
                    mainBuildingsK = 0.40;
                }
            }

            if (outBuilding.value) {
                outBuildingsK = 0.50;
            }
        } else if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 2) {
            //Полный
            if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 1) {
                mainBuildingsK = 0.55;
            } else if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 2) {
                mainBuildingsK = 0.47;
            }

            if (document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex === 1) {
                mainBuildingsK = 0.55;
            } else if (document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex === 2) {
                if (document.querySelector("#whole").checked) {
                    mainBuildingsK = 0.47;
                } else if (document.querySelector("#onlyDecor").checked) {
                    mainBuildingsK = 0.60;
                }
            } else if (document.querySelector(".typesOfBuildingsComboBox").options.selectedIndex === 3) {
                if (document.querySelector("#whole").checked) {
                    mainBuildingsK = 0.38;
                } else if (document.querySelector("#onlyDecor").checked) {
                    mainBuildingsK = 0.50;
                }
            }


            if (outBuilding.value) {
                outBuildingsK = 0.60;
            }

            if (bath.value) {
                bathK = 1.0;
            }
        }

        if (homeAssets.value) {
            if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 1) {
                if (document.querySelector(".homeAssetsComboBox").options.selectedIndex === 1) {
                    homeAssetsK = 0;
                } else {
                    if (document.querySelector("#firstGroup").checked) {
                        homeAssetsK = 0.24;
                    } else if (document.querySelector("#secondGroup").checked) {
                        homeAssetsK = 0.32;
                    } else if (document.querySelector("#thirdGroup").checked) {
                        homeAssetsK = 0.36;
                    }
                }

            } else if (document.querySelector(".riskPackageComboBox").options.selectedIndex === 2) {
                if (document.querySelector(".homeAssetsComboBox").options.selectedIndex === 1) {
                    homeAssetsK = 1.0;
                } else if (document.querySelector(".homeAssetsComboBox").options.selectedIndex === 2) {
                    if (document.querySelector("#firstGroup").checked) {
                        homeAssetsK = 0.30;
                    } else if (document.querySelector("#secondGroup").checked) {
                        homeAssetsK = 0.39;
                    } else if (document.querySelector("#thirdGroup").checked) {
                        homeAssetsK = 0.44;
                    }
                }


            }
        }

        if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 1) {} else if (document.querySelector(".choiceAccommodationComboBox").options.selectedIndex === 2) {
            mainBuildingsK *= 1.1;
            outBuildingsK *= 1.1;
            bathK *= 1.1;
            homeAssetsK *= 1.6;
        }

        if (document.querySelector("#threeOptions").checked) {
            mainBuildingsK *= 1.2;
            outBuildingsK *= 1.2;
        }

        if (document.querySelector("#rent").checked) {
            mainBuildingsK *= 1.2;
        }

        if (document.querySelector("#part").checked) {
            mainBuildingsK *= 1.2;
        }

        if (document.querySelector("#withoutFoundation").checked) {
            mainBuildingsK *= 1.11;
            outBuildingsK *= 1.11;
            bathK *= 1.11;
        }

        if (document.querySelector("#allHomeAssets").checked) {
            homeAssetsK *= 2.0;
        }

        if (document.querySelector("#terror").checked) {
            mainBuildingsK *= 1.1;
            outBuildingsK *= 1.1;
            bathK *= 1.1;
            homeAssetsK *= 1.1;
            fenceK *= 1.1;
        }

        if (document.querySelector(".firstRiskComboBox").options.selectedIndex === 1) {} else if (document.querySelector(".firstRiskComboBox").options.selectedIndex === 2) {
            mainBuildingsK *= 1.8;
            outBuildingsK *= 1.8;
            bathK *= 1.8;
            homeAssetsK *= 1.8;
        } else if (document.querySelector(".firstRiskComboBox").options.selectedIndex === 3) {
            mainBuildingsK *= 1.6;
            outBuildingsK *= 1.6;
            bathK *= 1.6;
            homeAssetsK *= 1.6;
        } else if (document.querySelector(".firstRiskComboBox").options.selectedIndex === 4) {
            mainBuildingsK *= 1.4;
            outBuildingsK *= 1.4;
            bathK *= 1.4;
            homeAssetsK *= 1.4;
        } else if (document.querySelector(".firstRiskComboBox").options.selectedIndex === 5) {
            mainBuildingsK *= 1.2;
            outBuildingsK *= 1.2;
            bathK *= 1.2;
            homeAssetsK *= 1.2;
        }


        //downK

        if ((parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value)) > 3000000 &&
            (parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value)) <= 6000000
        ) {
            mainBuildingsK *= 0.9;
            outBuildingsK *= 0.9;
            homeAssetsK *= 0.9;
            
        } else if ((parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value)) > 6000000 &&
            (parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value)) <= 10000000
        ) {
            mainBuildingsK *= 0.85;
            outBuildingsK *= 0.85;
            homeAssetsK *= 0.85;
            
        } else if ((parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value)) > 10000000 &&
            (parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value)) <= 15000000
        ) {
            mainBuildingsK *= 0.8;
            outBuildingsK *= 0.8;
            homeAssetsK *= 0.8;

        } else if ((parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value)) > 15000000) {
            mainBuildingsK *= 0.7;
            outBuildingsK *= 0.7;
            homeAssetsK *= 0.7;
        }
        
        
        if (document.querySelector("#protectedByPSC").checked) {
            mainBuildingsK *= 0.85;
            outBuildingsK *= 0.85;
            bathK *= 0.85;
            homeAssetsK *= 0.85;
            fenceK *= 0.85;
        }
        
        if (document.querySelector("#autoFireExtSyst").checked) {
            mainBuildingsK *= 0.85;
        }

        if (document.querySelector("#alarmAndPatrol").checked) {
            mainBuildingsK *= 0.95;
            outBuildingsK *= 0.95;
            bathK *= 0.95;
            homeAssetsK *= 0.95;
            fenceK *= 0.95;
        }
        
        if (document.querySelector("#fireExtinguisher").checked) {
            mainBuildingsK *= 0.95;
            outBuildingsK *= 0.95;
            bathK *= 0.95;
            homeAssetsK *= 0.95;
            fenceK *= 0.95;
        }
        
        if (document.querySelector("#windowProtection").checked) {
            mainBuildingsK *= 0.95;
        }
        
        if (document.querySelector("#firstRisk").checked) {
            mainBuildingsK *= 0.90;
        }
        
        if (document.querySelector(".correction").options.selectedIndex === 2) {
            mainBuildingsK *= 0.95;
            outBuildingsK *= 0.95;
            bathK *= 0.95;
            homeAssetsK *= 0.95;
        }else if (document.querySelector(".correction").options.selectedIndex === 3) {
            mainBuildingsK *= 0.90;
            outBuildingsK *= 0.90;
            bathK *= 0.90;
            homeAssetsK *= 0.90;
        }else if (document.querySelector(".correction").options.selectedIndex === 4) {
            mainBuildingsK *= 0.85;
            outBuildingsK *= 0.85;
            bathK *= 0.85;
            homeAssetsK *= 0.85;
        }else if (document.querySelector(".correction").options.selectedIndex === 5) {
            mainBuildingsK *= 0.80;
            outBuildingsK *= 0.80;
            bathK *= 0.80;
            homeAssetsK *= 0.80;
        }
        
        
        
    }

    //forAll

    if (civilRespons.value) {
        if (document.querySelector(".civilResponsibilityComboBox").options.selectedIndex === 1) {
            civilResponsibilityK = 0.5;
        } else if (document.querySelector(".civilResponsibilityComboBox").options.selectedIndex === 2) {
            civilResponsibilityK = 0.7;
        }
    }
    if (fence.value) {
        if (document.querySelector(".typesOfFenceComboBox").options.selectedIndex === 1) {
            fenceK = 0.4;
        } else if (document.querySelector(".typesOfFenceComboBox").options.selectedIndex === 2) {
            fenceK = 0.6;
        } else if (document.querySelector(".typesOfFenceComboBox").options.selectedIndex === 3) {
            fenceK = 1.5;
        } else if (document.querySelector(".typesOfFenceComboBox").options.selectedIndex === 4) {
            fenceK = 2.0;
        }
    }

    if (!document.querySelector("#buildingIsFinished").checked) {
        mainBuildingsK *= 1.2;
    }

    if (document.querySelector(".franchiseComboBox").options.selectedIndex === 1) {} 
    else if (document.querySelector(".franchiseComboBox").options.selectedIndex === 2) {
        mainBuildingsK *= 0.92;
        outBuildingsK *= 0.92;
        bathK *= 0.92;
        homeAssetsK *= 0.92;
        fenceK *= 0.92;
        civilResponsibilityK *= 0.92;
    } else if (document.querySelector(".franchiseComboBox").options.selectedIndex === 3) {
        mainBuildingsK *= 0.88;
        outBuildingsK *= 0.88;
        bathK *= 0.88;
        homeAssetsK *= 0.88;
        fenceK *= 0.88;
        civilResponsibilityK *= 0.88;
    } else if (document.querySelector(".franchiseComboBox").options.selectedIndex === 4) {
        mainBuildingsK *= 0.84;
        outBuildingsK *= 0.84;
        bathK *= 0.84;
        homeAssetsK *= 0.84;
        fenceK *= 0.84;
        civilResponsibilityK *= 0.84;
    } else if (document.querySelector(".franchiseComboBox").options.selectedIndex === 5) {
        mainBuildingsK *= 0.80;
        outBuildingsK *= 0.80;
        bathK *= 0.80;
        homeAssetsK *= 0.80;
        fenceK *= 0.80;
        civilResponsibilityK *= 0.80;
    }

   
    console.log("main: " + mainBuildingsK);
    console.log("out: " + outBuildingsK);
    console.log("bath: " + bathK);
    console.log("homeA: " + homeAssetsK);
    console.log("fence: " + fenceK);
    console.log("civilR: " + civilResponsibilityK);
}


function showOut(){
    document.querySelector(".parameters").classList.remove("show");
    document.querySelector(".out").classList.remove("hide");
    document.querySelector(".out").classList.add("show");
    
    document.querySelector(".insuranceSum1").value = mainBuilding.value;
    document.querySelector(".insuranceSum2").value = outBuilding.value;
    document.querySelector(".insuranceSum3").value = bath.value;
    document.querySelector(".insuranceSum4").value = homeAssets.value;
    document.querySelector(".insuranceSum5").value = fence.value;
    document.querySelector(".insuranceSum6").value = civilRespons.value;
    document.querySelector(".insuranceSum7").value = (parseInt(mainBuilding.value) + parseInt(outBuilding.value) + parseInt(bath.value) + parseInt(homeAssets.value) + parseInt(fence.value));
    
    document.querySelector(".insuranceRate1").value = mainBuildingsK.toFixed(2);
    document.querySelector(".insuranceRate2").value = outBuildingsK.toFixed(2);
    document.querySelector(".insuranceRate3").value = bathK.toFixed(2);
    document.querySelector(".insuranceRate4").value = homeAssetsK.toFixed(2);
    document.querySelector(".insuranceRate5").value = fenceK.toFixed(2);
    document.querySelector(".insuranceRate6").value = civilResponsibilityK.toFixed(2);
    
    document.querySelector(".insurancePrem1").value = (mainBuildingsK*mainBuilding.value*0.01).toFixed(2);
    document.querySelector(".insurancePrem2").value = (outBuildingsK*outBuilding.value*0.01).toFixed(2);
    document.querySelector(".insurancePrem3").value = (bathK*bath.value*0.01).toFixed(2);
    document.querySelector(".insurancePrem4").value = (homeAssetsK*homeAssets.value*0.01).toFixed(2);
    document.querySelector(".insurancePrem5").value = (fenceK*fence.value*0.01).toFixed(2);
    document.querySelector(".insurancePrem6").value = (civilResponsibilityK*civilRespons.value*0.01).toFixed(2);
    document.querySelector(".insurancePrem7").value = parseFloat(document.querySelector(".insurancePrem1").value)+
                                                      parseFloat(document.querySelector(".insurancePrem2").value)+
                                                      parseFloat(document.querySelector(".insurancePrem3").value)+
                                                      parseFloat(document.querySelector(".insurancePrem4").value)+
                                                      parseFloat(document.querySelector(".insurancePrem5").value)+
                                                      parseFloat(document.querySelector(".insurancePrem6").value);
    
  
    
}