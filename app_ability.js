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



let weapons = ["severum","calibrum","gravitum","infernum","crescendum"]
let current_weapons = ["severum","calibrum"]
let onhand_weapon = ""
let offhand_weapon = ""

let incoming_weapon = []
let next_weapons = weapons



// IMAGES ============================ ============================ ========================
let severum_image = " <img src='Weapons/Severum.png' class='weapon-image severum-image'  width='80'> "
let calibrum_image = " <img src='Weapons/Calibrum.png' class='weapon-image calibrum-image'  width='300' > "
let gravitum_image = " <img src='Weapons/Gravitum.png' class='weapon-image gravitum-image'  width='130' > "
let infernum_image = " <img src='Weapons/Infernum.png' class='weapon-image infernum-image'  width='280' > "
let crescendum_image = " <img src='Weapons/Crescendum.png' class='weapon-image crescendusm-image'  width='100' > "

let weapons_image = [severum_image,calibrum_image,gravitum_image,infernum_image,crescendum_image]
let current_weapon_image = [severum_image,calibrum_image]

// IMAGES ============================ ============================ ========================






// BULLLETS ===== ====== ====  =====
let severum_bullets = 1
let calibrum_bullets = 2
let gravitum_bullets = 3
let infernum_bullets = 4
let crescendum_bullets = 5

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

    onhand_weapon = weapons[0]
    offhand_weapon = current_weapons[1]

    BULLETS.innerHTML =  current_bullet
    WEAPON_BULLETS_TEXT.textContent = current_bullet

    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon
    OFFHAND_WEAPON_NAME.innerHTML = offhand_weapon

    return current_bullet

}



// CALIBRUM  ==================  ==================  ==================  ==================
function deploy_calibrum(){

    calibrum_style()
    current_bullet = current_weapon_bullets[1]

    onhand_weapon = weapons[1]
    offhand_weapon = current_weapons[1]

    BULLETS.innerHTML =  current_bullet
    WEAPON_BULLETS_TEXT.textContent =  current_bullet

    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon
    OFFHAND_WEAPON_NAME.innerHTML = offhand_weapon

    return current_bullet
}



// GRAVITUM  ==================  ==================  ==================  ==================
function deploy_gravitum(){

    gravitum_style()
    current_bullet = current_weapon_bullets[2]
    
    onhand_weapon = weapons[2]
    offhand_weapon = current_weapons[1]
    
    BULLETS.innerHTML =  current_bullet
    WEAPON_BULLETS_TEXT.textContent =  current_bullet
    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon
    OFFHAND_WEAPON_NAME = offhand_weapon

    return current_bullet 
}


function deploy_infernum(){

    infernum_style()
    current_bullet = current_weapon_bullets[3]
    
    onhand_weapon = weapons[3]
    offhand_weapon = current_weapons[1]
    
    BULLETS.innerHTML = current_bullet
    WEAPON_BULLETS_TEXT.textContent = current_bullet
    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon

    OFFHAND_WEAPON_NAME = offhand_weapon

    return current_bullet   

}


function deploy_crescendum(){

    crescendum_style()
    current_bullet = current_weapon_bullets[4]
    
    onhand_weapon = weapons[4]
    offhand_weapon = current_weapons[1]
    
    BULLETS.innerHTML = current_bullet
    WEAPON_BULLETS_TEXT.textContent =  current_bullet
    ONHAND_WEAPON_NAME.innerHTML = onhand_weapon

    OFFHAND_WEAPON_NAME = offhand_weapon

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
    offhand_weapon = current_weapons[1]

  
        if (onhand_weapon == weapons[0]){

                onhand_weapon = weapons[0]
                deploy_severum()
                ONHAND_WEAPON_NAME.innerHTML  =  onhand_weapon
                OFFHAND_WEAPON_NAME.innerHTML = offhand_weapon
                WEAPON_BULLETS_TEXT.textContent =   current_weapon_bullets[0]
                BULLETS.textContent = current_weapon_bullets[0]
            
        }else if(onhand_weapon == weapons[1]){
            
                onhand_weapon = weapons[1]
                deploy_calibrum()
                ONHAND_WEAPON_NAME.innerHTML =  onhand_weapon
                OFFHAND_WEAPON_NAME.innerHTML = offhand_weapon
                WEAPON_BULLETS_TEXT.textContent =  current_weapon_bullets[0]
                BULLETS.textContent = current_weapon_bullets[0]
        
         }else if(onhand_weapon == weapons[2]){

                onhand_weapon = weapons[2]
                deploy_gravitum()
                ONHAND_WEAPON_NAME.innerHTML = onhand_weapon
                OFFHAND_WEAPON_NAME.innerHTML = offhand_weapon
                WEAPON_BULLETS_TEXT.textContent = current_weapon_bullets[0]
                BULLETS.textContent = current_weapon_bullets[0]

        }else if(onhand_weapon == weapons[3]){

                onhand_weapon = weapons[3]
                deploy_infernum()
                ONHAND_WEAPON_NAME.innerHTML = onhand_weapon
                OFFHAND_WEAPON_NAME.innerHTML = offhand_weapon
                WEAPON_BULLETS_TEXT.textContent =  current_weapon_bullets[0]
                BULLETS.textContent = current_weapon_bullets[0]
         


        }else if(onhand_weapon == weapons[4]){

                onhand_weapon = weapons[4]
                deploy_crescendum()
                ONHAND_WEAPON_NAME.innerHTML = onhand_weapon
                OFFHAND_WEAPON_NAME.innerHTML = offhand_weapon
                WEAPON_BULLETS_TEXT.textContent = current_weapon_bullets[0]
                BULLETS.textContent = current_weapon_bullets[0]
         
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

// INFERNUM STYLE
function infernum_style(){
    style.textContent = `
        .onhand_weapon{
                background:linear-gradient(45deg,blue,rgb(44, 47, 49),rgb(44, 47, 49));           
        }
    `
    document.head.appendChild(style)
}



// CRESCENDUM STYLE
function crescendum_style(){
    style.textContent = `
        .onhand_weapon{
                background:linear-gradient(45deg,white,rgb(44, 47, 49),rgb(44, 47, 49));           
        }
    `
    document.head.appendChild(style)
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





function switch_arsenal() {

    if (current_weapon_bullets[0] <= 0) {
        console.log(onhand_weapon,": NO AMMO");

        let found = false;

        for (let i = 0; i < weapons.length; i++) {

            // Skip if already onhand or offhand
            if (weapons[i] === current_weapons[0] || weapons[i] === current_weapons[1]) continue;
            let bullet_count = 0;


            if (weapons[i] === "severum") bullet_count = severum_bullets;
            else if (weapons[i] === "calibrum") bullet_count = calibrum_bullets;
            else if (weapons[i] === "gravitum") bullet_count = gravitum_bullets;
            else if (weapons[i] === "infernum") bullet_count = infernum_bullets;
            else if (weapons[i] === "crescendum") bullet_count = crescendum_bullets;

            if (bullet_count > 0) {

                // Move current onhand to offhand, and new weapon to onhand
                let prev_onhand = current_weapons[0];
                let prev_onhand_bullets = current_weapon_bullets[0];
                current_weapons[0] = weapons[i];
                current_weapon_bullets[0] = bullet_count;

                current_weapons[1] = prev_onhand;
                current_weapon_bullets[1] = prev_onhand_bullets;

                // Deploy the new weapon visually
                if (weapons[i] === "severum") deploy_severum();
                else if(weapons[i] === "calibrum") deploy_calibrum();
                else if(weapons[i] === "gravitum") deploy_gravitum();
                else if(weapons[i] === "infernum") deploy_infernum();
                else if(weapons[i] === "crescendum") deploy_crescendum();

                found = true;
                break;

            }
        }

        if (!found) {
            BULLETS.innerHTML = 0;
            WEAPON_BULLETS_TEXT.innerHTML = 0;
        }


    } else {
        console.log("ACTIVE AMMO:");
    }

    

}


// DEFAULT ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ====   ==== ==== ==== ====

deploy_severum()

