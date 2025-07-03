const Q = document.getElementById("Q")
const W = document.getElementById("W")
const E = document.getElementById("E")
const R = document.getElementById("R")
const ATTACK = document.getElementById("attack")

let ONHAND_WEAPON_NAME = document.getElementById("onhand_weapon_name")
let OFFHAND_WEAPON_NAME = document.getElementById("offhand_weapon_name")
let WEAPON_BULLETS_TEXT = document.getElementById("bullet_text")

let ONHAND_WEAPON_FRAME = document.querySelector(".onhand_weapon")
let OFFHAND_WEAPON_FRAME = document.querySelector(".offhand_weapon")
let WEAPON_BULLETS_FRAME = document.querySelector(".weapon_bullets")
let BULLETS = document.getElementById("bullets")

let weapons = ["severum","calibrum","gravitum","infernum","creshendum"]
let current_weapons = ["severum","calibrum"]


let onhand_weapon = ""
let offhand_weapon = ""

let incoming_weapon = []




let next_weapons = weapons


// BULLLETS ===== ====== ====  =====
let severum_bullets = 30
let calibrum_bullets = 10
let gravitum_bullets = 30
let infernum_bullets = 30
let creshendum_bullets = 30

let current_weapon_bullets = []
current_weapon_bullets.push(severum_bullets,calibrum_bullets)
let current_bullet = current_weapon_bullets[0]


// PRINT WEAPON BULLETS
for(let i = 0;i < current_weapon_bullets.length;i++){
    console.log(current_weapon_bullets[i])
}





function deploy_severum(){


    current_bullet = current_weapon_bullets[0]

    onhand_weapon = current_weapons[0]
    offhand_weapon = current_weapons[1]
 

    BULLETS.innerHTML =  current_bullet
    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon
    WEAPON_BULLETS_TEXT.textContent = current_bullet

    severum_style()
  

    return current_bullet
}


function deploy_calibrum(){

    current_bullet = current_weapon_bullets[1]
    
    onhand_weapon = current_weapons[0]
    offhand_weapon = current_weapons[1]

    BULLETS.innerHTML =  current_bullet
    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon
    WEAPON_BULLETS_TEXT.textContent =  current_bullet

    caliburm_style()
    
    return current_bullet
}

W.addEventListener("click", () =>{
    switch_weapons()
})





function switch_weapons(){

    current_weapons.reverse()
    current_weapon_bullets.reverse()
    console.log(current_weapons + ": " ,current_weapon_bullets)

    for(let i = 0; i < weapons.length; i++){
  
            
        
}


    onhand_weapon = current_weapons[0]
  
        if (onhand_weapon == weapons[0]){

            onhand_weapon = weapons[0]
            deploy_severum()
            current_bullet = deploy_severum()
            ONHAND_WEAPON_NAME.innerHTML  =  onhand_weapon
            WEAPON_BULLETS_TEXT.textContent =   current_weapon_bullets[0]

        }else if(onhand_weapon == weapons[1]){
            
            onhand_weapon = weapons[1]
            deploy_calibrum()
            current_bullet = deploy_calibrum()
            ONHAND_WEAPON_NAME.innerHTML =  onhand_weapon
            WEAPON_BULLETS_TEXT.textContent =  current_weapon_bullets[0]
        
        }else if(onhand_weapon == weapons[2]){
            ONHAND_WEAPON_NAME.innerHTML  =    onhand_weapon
        }else if(onhand_weapon == weapons[3]){
            ONHAND_WEAPON_NAME.innerHTML  =    onhand_weapon
        }else if(onhand_weapon == weapons[4]){
            ONHAND_WEAPON_NAME.innerHTML  =   onhand_weapon
        }

        }



function severum_style(){
    
    const style = document.createElement("style")
    
    style.textContent = `
        .onhand_weapon{
                background:linear-gradient(45deg,red,rgb(44, 47, 49),rgb(44, 47, 49));   
        }
    `
    document.head.appendChild(style)
}
function caliburm_style(){
    
    const style = document.createElement("style")
    
    style.textContent = `
        .onhand_weapon{
                background:linear-gradient(45deg,cyan,rgb(44, 47, 49),rgb(44, 47, 49));   
        }
    `
    document.head.appendChild(style)

}

ATTACK.addEventListener("click", () => {
     update_bullet()
})


function update_bullet(){
    current_weapon_bullets[0] -- 
    WEAPON_BULLETS_TEXT.innerHTML = current_weapon_bullets[0] 
    BULLETS.innerHTML = current_weapon_bullets[0]
}


function switch_new_weapons(){


}


// DEFAULT ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ====   ==== ==== ==== ==== ==== ====   ==== ==== ==== ==== ==== ==== 

deploy_severum()

