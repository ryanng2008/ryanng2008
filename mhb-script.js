const headingsMap = [
    "我们赞成Methamphetamine",
    "我们反对美国狗",
    "Heisenberg from Breaking Bad is named after the Heisenberg Blimp",
    "Our headquarters are in Albuquerque, New Mexico, USA",
    "Breaking Bad is a critically acclaimed television series that follows the story of high school chemistry teacher Walter White as he descends into a life of crime.",
    "大家請在 soundcloud 上支持我們的科學老師 stephen miller",
    "不同意請舉手沒有沒有沒有沒有沒有通過！",
    "谁是最好的Formula 1 司机, Mbappe, Messi?",
    "\"Meet Walter White, a professional with a diverse set of skills and interests. With experience in the blimps manufacturing and chemical engineering industry, as well as cybersecurity, he brings a unique perspective to any project. When not working, you can find him DJing or practicing parkour, showcasing his passion for both music and physical fitness.\"",
    "As the series progresses, we see Walter's transformation from a timid and meek high school teacher to a ruthless and calculating criminal mastermind. ",
]

// headingsMap.set(1,"我们赞成Methamphetamine");
// headingsMap.set(2,"我们反对美国狗");
// headingsMap.set(3,"Heisenberg from Breaking Bad is named after the Heisenberg Blimp");
// headingsMap.set(4,"Our headquarters are in Albuquerque, New Mexico, USA")


const imageUrls = [
    "https://media.discordapp.net/attachments/902854319353769991/1069261779076665414/azn_MiG-31_foxbat_breakdancing_3f953d54-40c7-4ec4-8790-ab2c55551d8f.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069262726372786296/Taikutsu_Tianmanmen_Square_protests_1989_508a4982-63e2-44b9-b302-69646ea019ab.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069267344452489227/Ryn_Burning_Norway_flag_bcbceafb-3326-4bb7-824c-9a41deca1598.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069267409267068989/Ryn_Eurofighter_typhoon_drinking_water_df1cd4dd-54c3-4563-94be-7d73bc9e2dcc.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069267445350670376/Ryn_Eurofighter_typhoon_drinking_water_ca1136e0-ed4b-4b00-add3-0f7164d671de.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069273052300456016/Stardium_transgender_hearts_of_iron_4_addict_5670bbb9-0be3-4d7b-a380-b358bef0e318.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069262980878971000/Taikutsu_Tank_Man_Tiananmen_protests_1989_f513f1a4-6c4d-4a43-8a19-07f6593669db.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069263519956091013/Stardium_Petr_Pavel_with_a_gun_next_to_a_destroyed_kremlin_7dbbea83-6b30-4296-a16d-6b661e8fd7fb.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069263930775572540/Taikutsu_Vladimir_Putin_in_T-34_fighting_Volodymyr_Zelenskyy_in_7647d68a-c12b-4547-a1c8-3a717a41f877.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069264114045702154/Taikutsu_M1_Abrams_in_a_nursery_bbca009c-8391-4378-aa08-3f8543dbf4b6.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069264193586479144/Stardium_Ron_DeSantis_holding_a_pride_flag_4c58cfb1-d53b-4260-875c-490e67518eee.png",

    "https://media.discordapp.net/attachments/932292040488796222/1069265296046694450/azn_mugshot_of_joe_biden_for_drinking_under_the_influence_91c0095e-9ac5-429e-bce1-c550d6feb1c5.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069264910883754075/Stardium_A_big_sign_that_says_Literally_1984_in_Moscow_ed9920b3-fefa-49d9-9239-395fc618f452.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069265339550019654/Taikutsu_Leopard_2_attacking_a_kindergarten_06e3abeb-3ef8-4348-83ff-b76e588a9974.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069265560971522168/azn_joe_biden_chasing_an_ice_cream_truck_bc9d2499-fd90-400d-8d11-d2838e572f70.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069265986848567416/Screenshot_2023-01-29_at_10.41.11_PM.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069267683268366396/Ryn_Burning_Norway_flag_5066834f-7d7c-4355-b22f-90fd3c308b0a.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069269204072669214/Ryn_Donald_trump_2024_inauguration_speech_in_D.C_6095f4ac-6339-4f58-9ded-13c4a2974ee9.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069269210653532170/Ryn_vladimir_putin_as_an_african_american_dea0a09b-4d99-420f-b287-2c6ac188cccb.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069269463008022560/azn_the_leader_of_germany_from_1939-1945_26740333-6855-4c6f-851d-3dfba7850e87.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069270123376025620/Britannia_The_emaciated_aftermath_healthily_organized_the_envio_dd71b78a-2f76-4dc8-927e-ff49564360c8.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069269755443302430/Britannia_Colourless_green_ideas_sleep_furiously_3dff06cc-fd9b-4623-83c0-8d01320f7df0.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069273132180963418/Screenshot_2023-01-29_at_11.09.35_PM.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069273558833954856/Stardium_Abdul_taking_a_photo_with_the_twin_towers_d1e4589a-034b-4e6d-9da8-077c0fef6b9b.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069273936770125824/piano_43a111b2-096f-4876-9d87-f13d84fb72e0.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069274032358310008/felei_united_airlines_flight_11_world_trade_center_september_20_235878fb-3550-42a9-9e37-a17a612e0b4f.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069274072938205254/Stardium_world_war_2_German_flag_on_top_of_the_White_House_a0357d33-6a83-43dd-abf7-043a7a9d60df.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069274233458393119/felei_world_trade_center_twin_towers_on_fire_september_2001_wit_5f08f7f5-6a93-41aa-a3f2-af2e0cbf2b38.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069274643376124004/azn_world_trade_center_twin_towers_on_fire_september_2001_with__d42d9552-63f2-48c0-a5ca-5fbae4e038b2.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069275900207702168/Ryn_Twin_Towers_of_the_world_trade_center_on_fire_with_an_airp_4fd962f7-d875-46ea-a50a-0793f856b142.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069275903454085170/Ryn_Twin_Towers_of_the_world_trade_center_on_fire_with_an_airp_ddf9086e-3561-48d3-afb2-ea6719597277.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069275934055731281/Ryn_Twin_Towers_of_the_world_trade_center_on_fire_with_an_airp_91b01bf4-1485-42b1-9800-ddd30d885c2d.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069275937247596564/felei_Indian_lady_whos_a_teacher_with_grey_short_hair_glasses_y_f37ba7a1-f614-4a4a-9560-d17fd1d4f2ff.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069276231117312121/Ryn_Twin_Towers_of_the_world_trade_center_on_fire_with_an_airp_6070c161-2cff-4675-933a-60829c73ade7.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069277515522256966/azn_a_blonde_romanian_man_with_short_hair_usually_wearing_a_bla_04a60f6d-e3d4-4d91-bc8f-63490bf52d26.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069278015495884800/Ryn_M1A2_Abrams_the_size_of_a_battleship_at_sea_2c9e30be-4bb5-4a32-9ad3-d9167e6c60bd.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069278091928666112/Ryn_nothing_c167e260-a735-4fd8-a3d0-2267880a25f4.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069278133267730643/Ryn_a_blonde_romanian_man_with_short_hair_usually_wearing_a_bl_af314ab1-317a-4b19-b6f1-95009b3483d1.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069275780196085850/Stardium_Indian_lady_whos_a_teacher_with_grey_short_hair_glasse_db06a2a5-8427-496c-8140-b80e306c11ac.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069278995528564756/azn_a_blonde_romanian_man_with_short_hair_usually_wearing_a_bla_99da83ca-484d-4716-9931-505ba55fb0f5.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069279316761911396/Ryn_everything_at_once_43a19ab3-a505-4589-b159-7b63ce2d64a6.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069279319177822278/Ryn_everything_at_once_fdb54d14-3336-440a-ad2a-4355ff2747f1.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069279923803525252/Britannia_the_sun_setting_on_the_British_empire_3e896b86-2aa1-490d-a1d4-5216a8e9b7bb.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069279509238530170/Stardium_France_winning_the_2022_World_Cup_81d2821b-81a0-49d9-b7fa-c529b5cf52b2.png",
    "https://media.discordapp.net/attachments/902854319353769991/1069280044612071485/Ryn_the_heisenberg_disaster_16391d9d-9159-42a4-9790-c4fa5e2dade7.png",
    "https://cdn.discordapp.com/attachments/902854319353769991/1069280047682297856/Ryn_the_heisenberg_disaster_4f561c71-785f-48b3-b444-8e51ffb43a47.png",  
    // more URLs here
];

const imgContainer = document.getElementById("image-container");
console.log(imgContainer);

imageUrls.forEach(url => {
    const imgh = document.createElement("img");
    imgh.classList.add("midjourney-image");
    imgh.src = url;
    imgh.alt = "";
    console.log(imgh);
    imgContainer.appendChild(imgh);
});

const vinylUrl = "https://media1.giphy.com/media/LwBTamVefKJxmYwDba/giphy.gif?cid=6c09b952x9xiwtdwo6v7o6eh0sxsmelpba78j1puetk8inbs&rid=giphy.gif&ct=s";

const vinylContainer = document.getElementById("vinyl-container");
console.log(vinylContainer);

for(let j = 0; j < 6; j++) {
    const img = document.createElement("img");
    img.classList.add("vinyl");
    img.src = vinylUrl;
    img.alt = "spinning vinyls!";

    vinylContainer.appendChild(img);
}


const throttle = (func, limit) => {
    let lastFunc
    let lastRan
    return function() {
        const context = this
        const args = arguments
        if (!lastRan) {
            func.apply(context, args)
            lastRan = Date.now()
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args)
                    lastRan = Date.now()
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}

const changeBackgroundColor = () => {

    // Get the element you want to apply the gradient to

    // Generate a random linear gradient
    const gradient = `linear-gradient(to right, 
  hsl(${Math.floor(Math.random() * 360)}, 100%, 50%), 
  hsl(${Math.floor(Math.random() * 360)}, 100%, 50%))`;

    // Set the element's background to the gradient
    document.body.style.background = gradient;
}


const randHeading = () => {
    return headingsMap[Math.floor(Math.random()*headingsMap.length)];
}

const changeText = () => {
    heading = document.getElementById("random");
    console.log('clicked');
    const chRandHeading = () => {
        heading.innerHTML = randHeading();
    }
    //document.getElementById("random").innerText = randHeading();
    document.getElementById("random").addEventListener("click", throttle(chRandHeading, 500), true);
}

setInterval(changeBackgroundColor, 1000);
