//Atributos do personagem:
const nome = "Arthur Targaryen";
let classe = "Rei Mago"; //Maior classe possivel
let racaPersonagem = "Humano";
let nivel = 10000000000000000000000000000000000;
let vida = 100000000000000000000;
let inteligência = 1000000;
let moedas = 10000000000;
let xp = 100000000000000000;

//Novos atributos:
let manaMaxima = 50000000000;
let forcaBruta = 150000000000000000;
let defesa = 124000000;
let agilidade = 12000000;

//Atributos da Arma:
const NOMEARMA = "Cumpridor de Promessas"; //Cajado
let DANO_BASE = 100000000000000000000000000000000000;
const RARIDADEARMA = "Divino";
const ELEMENTOARMA = "Amaterasu"; //Chama negra que nunca apaga

//Atributos da Armadura:
const NOMEARMADURA = "Drogon";
let DEFESA_BASE = 1000000000000000000000000000000;
const RARIDADEARMADURA = "Divino";
const MATERIAL = "Aço Valiriano";


//=====Novos atributos para aventura=====//
let inventario = ["Cumpridor de Promessas(Cajado)", "Adaga encantada", "Drogon(Armadura"];
let aliados = ["Zagreu", "Kasume", "Piter", "Frodo"];
let inimigosEncontrados = ["Demônios", "Minotauro", "Goblins"];
let tesourosEncontrados = [];

console.log(`${nome} em seus dias tranquilos na seu novo castelo se lembra de uma vez que foi chamado para limpar o temido... O Castelo Infinito`);
console.log("==================================");
console.log("🏰Lembranças Castelo Infinito🏰")
console.log("==================================");
console.log("Era uma época em que Arthur ainda buscava uma vida melhor para todos os habitantes do seu continente.");

// ======= CAPÍTULO 1: Explorando o Castelo (FOR + salas) =======
let salasCastelo = ["Salão de Espelhos", "Câmara da Magia", "Covil Subterrâneo"];

console.log("🔍 Iniciando a exploração do Castelo Infinito...");

for (let i = 0; i < salasCastelo.length; i++) {
    console.log("Chega na sala" (i +))                                     
}

/*
for (let i = 0; i < salasCastelo.length; i++) { // <-- FOR para percorrer cada sala
    console.log("🚪 Sala " + (i + 1) + ": " + salasCastelo[i]);
    if (i === 0) {
        console.log("🪞 Espelhos revelam os medos internos de Arthur...");
        vida -= 10000000;
    } else if (i === 1) {
        console.log("✨ Magias antigas encantam o cajado com ainda mais poder.");
        inventario.push("Fragmento Arcano");
        DANO_BASE *= 2;
    } else {
        console.log("🐍 Criaturas rastejantes tentam emboscá-lo, mas são derrotadas!");
        tesourosEncontrados.push("Colar da Resistência");
        xp += 10000;
    }
}
*/

// ======= CAPÍTULO 2: Preparando o Grupo (FOR + aliados) =======
console.log("");
console.log("🧑‍🤝‍🧑 CAPÍTULO 2: Reunindo os Aliados de Guerra");

for (let i = 0; i < aliados.length; i++) { // <-- FOR para percorrer os aliados
    let aliado = aliados[i];
    console.log("🧙 Aliado " + (i + 1) + ": " + aliado + " responde ao chamado de Arthur.");

    if (i === 0) {
        console.log("🔮 " + aliado + " aumenta a regeneração de mana com feitiços sagrados.");
        manaMaxima += 10000;
    } else if (i === 1) {
        console.log("🛡️ " + aliado + " reforça a defesa mágica de Arthur.");
        defesa += 50000;
    } else {
        console.log("⚔️ " + aliado + " treina Arthur com novas técnicas de combate.");
        forcaBruta += 1000000000;
    }
}

// ======= CAPÍTULO 3: Batalha com os Inimigos (FOR + inimigos) =======
console.log("");
console.log("⚔️ CAPÍTULO 3: Confronto contra as Criaturas do Castelo");

let danoRecebido = [];

for (let i = 0; i < inimigosEncontrados.length; i++) { // <-- FOR para simular batalha contra cada inimigo
    let inimigo = inimigosEncontrados[i];
    let dano = Math.floor(Math.random() * 10000) + 1000;

    console.log("💢 Enfrentando " + inimigo + "! Dano causado: " + dano);
    danoRecebido.push(dano);

    if (i === 0) {
        console.log("🔥 Os demônios são selados com magia negra!");
        tesourosEncontrados.push("Amuleto de Fogo");
    } else if (i === 1) {
        console.log("🐂 O Minotauro é derrotado em combate direto!");
        vida -= 500000;
        tesourosEncontrados.push("Chifre Sagrado");
    } else {
        console.log("🗡️ Goblins são dizimados em segundos.");
        xp += 5000;
    }
}

// ======= CÁLCULO FINAL DE DANO (FOR + somatório) =======
let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) { // <-- FOR para somar o dano total
    danoTotal += danoRecebido[i];
    console.log("📊 Rodada " + (i + 1) + ": Dano causado: " + danoRecebido[i]);
}
console.log("💥 Dano total causado no castelo: " + danoTotal);

// ======= DESAFIO EXTRA: Separando Itens por Raridade (FOR + includes) =======
let itensRaros = [];
let itensComuns = [];

for (let i = 0; i < inventario.length; i++) { // <-- FOR para classificar o inventário
    let item = inventario[i];
    if (item.includes("Encantada") || item.includes("Cajado")) {
        itensRaros.push(item);
    } else {
        itensComuns.push(item);
    }
}

console.log("💎 Itens Raros: " + itensRaros);
console.log("🔧 Itens Comuns: " + itensComuns);

// ======= EPÍLOGO =======
console.log("");
console.log("👑 === EPÍLOGO: Arthur - O Rei dos Castelos Mágicos ===");

console.log("📈 Estatísticas finais:");
console.log("• Nível: " + nivel);
console.log("• XP: " + xp);
console.log("• Vida: " + vida);
console.log("• Mana Máxima: " + manaMaxima);
console.log("• Força Bruta: " + forcaBruta);
console.log("• Itens no inventário: " + inventario.length);
console.log("• Aliados: " + aliados.length);
console.log("• Tesouros encontrados: " + tesourosEncontrados.length);

console.log("");
console.log("🌌 A história de Arthur continua...");
console.log("Agora dominando não só magia, mas também os mistérios dos arrays e laços de repetição.");
console.log("O Castelo Infinito foi apenas uma prova de sua habilidade.");
console.log("Cada batalha forjou sua mente como um verdadeiro Arqui-Mago dos Algoritmos.");
console.log("Seus aliados juraram lealdade eterna, e o mundo voltou a ter esperança.");
console.log("No céu, uma nova constelação surgiu: a do Rei Mago Arthur.");
console.log("Ele observa o mundo do alto de seu castelo, pronto para o próximo bug dimensional.");
console.log("E assim, a jornada não termina. Ela apenas evolui...");
console.log("⚡ Arthur Targaryen, o Imutável, Rei das Estruturas Eternas ⚡");
console.log("🎯 FIM DO NÍVEL 3 | Prepare-se para o Desafio 4!");