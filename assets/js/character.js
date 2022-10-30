var char_0 = document.querySelector('#char-0');

const generate_char_HTML = ({ character, level, rarity }) =>
`
<!-- Character Card -->
<section class="rarity" style="box-shadow:0px 0px 0px var(--profile-border) var(--✰${rarity});">
    <div class="card">
        <div class="card-top">
            <div class="profile" style="background-image: url(${character});"></div>
        </div>
        <div class="card-bottom font">Lv. ${level}</div>
    </div>
</section>
`

function generate_cons_HTML({ constellation, rarity }) {
    let output = `
    <!-- Character Constellations -->
    <section class="cons">
    `;

    for (var i = 1; i <= 6; i++) {
        if (constellation >= i) {
            output += `    <div class="circle w-Sm c${i}" style="background-color: var(--✰${rarity});"></div>`;
        } else {
            output += `    <div class="circle w-Sm c${i}"></div>`;
        }
    }

    output += `</section>`;
    return output;
}

const generate_weapon_HTML = ({ weapon_rarity, weapon_refine, weapon_image, weapon_level }) =>
`
<!-- Weapon Card -->
<section class="rarity" style="box-shadow:0px 0px 0px var(--profile-border) var(--✰${weapon_rarity});">
    <div class="R font">${weapon_refine}</div>
    <div class="card">
        <div class="card-top">
            <div class="profile" style="background-image: url('${weapon_image}');"></div>
        </div>
        <div class="card-bottom font">Lv. ${weapon_level}</div>
    </div>
</section>
`

const generate_talents_HTML = ({ NA_image, E_image, Q_image, NA_lv, E_lv, Q_lv }) =>
`
<!-- Talents -->
<section class="talents">
    <div class="T1 circle w-Lg" style="background-image: url('${NA_image}');"></div>
    <div class="T2 circle w-Lg" style="background-image: url('${E_image}');"></div>
    <div class="T3 circle w-Lg" style="background-image: url('${Q_image}');"></div>
    <div class="Lv1 font">Lv. ${NA_lv}</div>
    <div class="Lv2 font">Lv. ${E_lv}</div>
    <div class="Lv3 font">Lv. ${Q_lv}</div>
</section>
`

const generate_artifact_HTML = ({ artifact_rarity, artifact_set, artifact_1, artifact_2, artifact_3, artifact_4, artifact_5 , artifact_benchmark }) =>
`
<!-- Artifacts -->
<section class="artifacts">
    <div class="margin">
        <section class="rarity" style="box-shadow:0px 0px 0px var(--profile-border) var(--✰${artifact_rarity});">
            <div class="circle w-XLg" style="background-image: url('${artifact_set}');"></div>
        </section>
    </div>
    <section class="A-container">
        <div class="A-top" style="border-color: var(--✰${artifact_rarity});">
            <div class="circle w-Md" style="background-image: url('${artifact_1}');"></div>
            <div class="circle w-Md" style="background-image: url('${artifact_2}');"></div>
            <div class="circle w-Md" style="background-image: url('${artifact_3}');"></div>
            <div class="circle w-Md" style="background-image: url('${artifact_4}');"></div>
            <div class="circle w-Md" style="background-image: url('${artifact_5}');"></div>
        </div>
        <div class="A-bottom font">
            ${artifact_benchmark}
            <div class="A-right">
                <div class="A-star"></div>
                <div class="A-star"></div>
                <div class="A-star"></div>
            </div>
        </div>
    </section>
</section>
`

function createCh(ch, lv, r, c, w_r, ref, w_img, w_lv, na_img, e_img, q_img, na, e, q, a_r, a_set, a1, a2, a3, a4, a5, a_txt) {
    this.character = ch;
    this.level = lv;
    this.rarity = r;
    this.constellation = c;

    this.weapon_rarity = w_r;
    this.weapon_refine = ref;
    this.weapon_image = w_img;
    this.weapon_level = w_lv;

    this.NA_image = na_img;
    this.E_image = e_img;
    this.Q_image = q_img;
    this.NA_lv = na;
    this.E_lv = e;
    this.Q_lv = q;

    this.artifact_rarity = a_r;
    this.artifact_set = a_set;
    this.artifact_1 = a1;
    this.artifact_2 = a2;
    this.artifact_3 = a3;
    this.artifact_4 = a4;
    this.artifact_5 = a5;
    this.artifact_benchmark = a_txt;
}

let char = 'https://muakasan.github.io/genshin-portraits/assets/UI_AvatarIcon_Albedo.png';
let char_level = 90;
let char_rarity = 5;
let char_cons = 1;

let weapon_rarity = 4;
let weapon_refine = 5;
let weapon_image = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Weapon_Cinnabar_Spindle_2nd.png';
let weapon_level = 90;

let talent_na_image = 'https://genshin.honeyhunterworld.com/img/s_383101.webp';
let talent_e_image = 'https://genshin.honeyhunterworld.com/img/s_383201.webp';
let talent_q_image = 'https://genshin.honeyhunterworld.com/img/s_383901.webp';
let talent_na = 1;
let talent_e = 9;
let talent_q = 8;

let artifact_rarity = 5;
let artifact_set = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Item_Bloom_Times.png';
const artifact_flower = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Icon_Flower_of_Life.png';
const artifact_feather = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Icon_Plume_of_Death.png';
const artifact_sands = 'https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Icon_Sands_of_Eon.png';
const artifact_goblet = 'https://static.wikia.nocookie.net/gensin-impact/images/3/37/Icon_Goblet_of_Eonothem.png';
const artifact_circlet = 'https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_Circlet_of_Logos.png';
let artifact_benchmark = "~20 Crit/Def rolls";

const Albedo = new createCh(
    char, 
    char_level, 
    char_rarity, 
    char_cons, 
    weapon_rarity,
    weapon_refine,
    weapon_image,
    weapon_level,
    talent_na_image, 
    talent_e_image, 
    talent_q_image, 
    talent_na, 
    talent_e, 
    talent_q,
    artifact_rarity,
    artifact_set,
    artifact_flower,
    artifact_feather,
    artifact_sands,
    artifact_goblet,
    artifact_circlet,
    artifact_benchmark);

/*
class Character {
    constructor(ch, lv, r, c) {
        this.character = ch;
        this.level = lv;
        this.rarity = r;
        this.constellation = c;
    }
}

class Details extends Character {
    constructor(ch, lv, r, c, w_r, ref, w_img, w_lv, na_img, e_img, q_img, na, e, q, a_r, a_set, a1, a2, a3, a4, a5, a_txt) {
        super(ch, lv, r, c);

        this.weapon_rarity = w_r;
        this.weapon_refine = ref;
        this.weapon_image = w_img;
        this.weapon_level = w_lv;

        this.NA_image = na_img;
        this.E_image = e_img;
        this.Q_image = q_img;
        this.NA_lv = na;
        this.E_lv = e;
        this.Q_lv = q;

        this.artifact_rarity = a_r;
        this.artifact_set = a_set;
        this.artifact_1 = a1;
        this.artifact_2 = a2;
        this.artifact_3 = a3;
        this.artifact_4 = a4;
        this.artifact_5 = a5;
        this.artifact_benchmark = a_txt;
    }
}

let Albedo_char = new Character(char, char_level, char_rarity, char_cons);
*/

char_0.innerHTML = generate_char_HTML(Albedo);
char_0.innerHTML += generate_cons_HTML(Albedo);
char_0.innerHTML += generate_weapon_HTML(Albedo);
char_0.innerHTML += generate_talents_HTML(Albedo);
char_0.innerHTML += generate_artifact_HTML(Albedo);
console.log(Albedo);