const Q = document.getElementById("Q")
const W = document.getElementById("W")
const E = document.getElementById("E")
const R = document.getElementById("R")
const ATTACK = document.getElementById("attack"
    
)

let ONHAND_WEAPON_NAME  = document.getElementById("onhand_weapon_name")
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



// IMAGES ============================
let severum_image = " <img src='Weapons/Severum.png' class='weapon-image severum-image'  width='80'> "
let calibrum_image = " <img src='Weapons/Calibrum.png' class='weapon-image calibrum-image'  width='300' > "
let gravitum_image = " <img src='Weapons/Gravitum.png' class='weapon-image gravitum-image'  width='130' > "
let infernum_image = " <img src='Weapons/Infernum.png' class='weapon-image infernum-image'  width='280' > "
let crescendum_image = " <img src='Weapons/Crescendum.png' class='weapon-image crescendusm-image'  width='100' > "

let weapons_image = [severum_image,calibrum_image,gravitum_image,infernum_image,crescendum_image]
let current_weapon_image = [severum_image,calibrum_image]
// IMAGES ============================





// BULLLETS ===== ====== ====  =====
let severum_bullets = 30
let calibrum_bullets = 10
let gravitum_bullets = 30
let infernum_bullets = 30
let crescendum_bullets = 30

let current_weapon_bullets = []
current_weapon_bullets.push(severum_bullets,calibrum_bullets)
let current_bullet = current_weapon_bullets[0]

// PRINT WEAPON BULLETS
for(let i = 0;i < current_weapon_bullets.length;i++){
    console.log(current_weapon_bullets[i])
}





 onhand_weapon = current_weapons[0]
offhand_weapon = current_weapons[1]

//  SEVERUM  ==================  ==================  ==================  ==================
function deploy_severum(){

     severum_style()
    current_bullet = current_weapon_bullets[0]


    BULLETS.innerHTML =  current_bullet
    WEAPON_BULLETS_TEXT.textContent = current_bullet
    ONHAND_WEAPON_FRAME.innerHTML =  severum_image
    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon

    OFFHAND_WEAPON_FRAME.innerHTML = calibrum_image
    OFFHAND_WEAPON_NAME = offhand_weapon

    return current_bullet
}



//  CALIBRUM  ==================  ==================  ==================  ==================
function deploy_calibrum(){

    calibrum_style()
    current_bullet = current_weapon_bullets[1]
   
    BULLETS.innerHTML =  current_bullet
    WEAPON_BULLETS_TEXT.textContent =  current_bullet
    ONHAND_WEAPON_FRAME .innerHTML = calibrum_image
    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon


    OFFHAND_WEAPON_FRAME.innerHTML = severum_image
    OFFHAND_WEAPON_NAME = offhand_weapon

    return current_bullet
}



//  GRAVITUM  ==================  ==================  ==================  ==================
function deploy_gravitum(){

   gravitum_style()
    current_bullet = current_weapon_bullets[1]
    
    onhand_weapon = current_weapons[0]
    offhand_weapon = current_weapons[1]

    
    BULLETS.innerHTML =  current_bullet
    WEAPON_BULLETS_TEXT.textContent =  current_bullet
    ONHAND_WEAPON_FRAME .innerHTML = calibrum_image
    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon


    return current_bullet   
}



W.addEventListener("click", () =>{
    switch_weapons()
})


function switch_weapons(){

    current_weapons.reverse()
    current_weapon_bullets.reverse()
    current_weapon_image.reverse()


    console.log(current_weapons + ": " ,current_weapon_bullets)

    onhand_weapon = current_weapons[0]
  
        if (onhand_weapon == weapons[0]){

                onhand_weapon = weapons[0]
                deploy_severum()
                ONHAND_WEAPON_NAME.innerHTML  =  onhand_weapon
                WEAPON_BULLETS_TEXT.textContent =   current_weapon_bullets[0]
                BULLETS.textContent = current_weapon_bullets[0]
            
        }else if(onhand_weapon == weapons[1]){
            
                onhand_weapon = weapons[1]
                deploy_calibrum()
                ONHAND_WEAPON_NAME.innerHTML =  onhand_weapon
                WEAPON_BULLETS_TEXT.textContent =  current_weapon_bullets[0]
                BULLETS.textContent = current_weapon_bullets[0]
        
         }else if(onhand_weapon == weapons[2]){

                onhand_weapon =weapons[2]
                deploy_gravitum()
                ONHAND_WEAPON_NAME.innerHTML  =    onhand_weapon
                WEAPON_BULLETS_TEXT.textContent =  current_weapon_bullets[0]
                BULLETS.textContent = current_weapon_bullets[0]

        }else if(onhand_weapon == weapons[3]){

                ONHAND_WEAPON_NAME.innerHTML  =    onhand_weapon

        }else if(onhand_weapon == weapons[4]){
                ONHAND_WEAPON_NAME.innerHTML  =   onhand_weapon
        }


        }






// STYLING 
const style = document.createElement("style")


// SEVERUM STYLE
function severum_style(){
    
    style.textContent = `
        .onhand_weapon{
                background:linear-gradient(45deg,red,rgb(44, 47, 49),rgb(44, 47, 49));   
        }
    `
    document.head.appendChild(style)
}


// CALIBRUM STYLE
function calibrum_style(){

    style.textContent = `
        .onhand_weapon{
                background:linear-gradient(45deg,cyan,rgb(44, 47, 49),rgb(44, 47, 49));           
        }
    `
    document.head.appendChild(style)
}



// GRAVITUM STYLE
function gravitum_style(){

    style.textContent = `
        .onhand_weapon{
                background:linear-gradient(45deg,purple,rgb(44, 47, 49),rgb(44, 47, 49));           
        }
    `
    document.head.appendChild(style)
}



function deploy_image_props(){
    style.textContent = `
        .weapon-image{
                 margin-right:1rem;
        }
    `
}




ATTACK.addEventListener("click", () => {
     switch_arsenal()
     update_bullet()
})




function update_bullet(){
        current_weapon_bullets[0] -- 
        WEAPON_BULLETS_TEXT.innerHTML = current_weapon_bullets[0] 
        BULLETS.innerHTML = current_weapon_bullets[0]
        
}

function switch_arsenal(){

    if (current_weapon_bullets[0] <= "0"){
        console.log("NO AMMO")
        const current_bullet = 0;

    }else{
        console.log("THERES AMMO")

    }
}






// DEFAULT ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ====   ==== ==== ==== ==== ==== ====   ==== ==== ==== ==== ==== ==== 

deploy_severum()

