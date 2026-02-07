// Nihilist Penguin - Düşünceler
// Werner Herzog'un belgeselinden ilham alan varoluşsal alıntılar

const QUOTES = [
    // Varoluşsal düşünceler
    "Hiçbir şeyin anlamı yok... ama yine de yürüyoruz.",
    "Nereye gidiyorum? Önemli mi?",
    "Koloni geride kaldı. Şimdi sadece ben ve sonsuzluk.",
    "Dağlar beni çağırıyor... ya da öyle sanıyorum.",
    "Her adım, hiçliğe bir adım daha.",
    
    // Melankolik
    "Soğuk bile hissetmiyorum artık.",
    "Yalnızlık... belki de tek gerçeklik bu.",
    "Arkama bakmıyorum. Neden bakayım ki?",
    "Kar yağıyor. Her zaman kar yağıyor.",
    "Bu yolculuğun sonu yok. Belki de hiç yoktu.",
    
    // Absürt
    "Neden yürüyorum? Neden duruyorlar?",
    "Belki de deliyim. Belki onlar deli.",
    "Dağların ardında ne var? Muhtemelen daha çok dağ.",
    "Balık yemekten sıkıldım.",
    "Kolonide herkes aynıydı. Ben... farklıyım.",
    
    // Umut kırıntıları (ironic)
    "Belki dağların ardında bir cevap vardır.",
    "Ya da hiçbir şey. Hiçbir şey de güzel.",
    "En azından manzara güzel... sanırım.",
    "Yürümek güzel. Durmak... tuhaf.",
    "Karanlık yaklaşıyor. Ama her zaman öyle değil mi?",
    
    // Werner Herzog referansları
    "Doğa burada acımasız ve saçma.",
    "Evren umursamıyor. Hiç umursamadı.",
    "Kaos. Her yerde kaos. İçimde de.",
    "Anlam aramak... belki de en büyük hata.",
    "Ama yine de, bir adım daha..."
];

// Oyun sonu için özel alıntılar
const GAME_OVER_QUOTES = [
    "Ve böylece yolculuk sona erdi... bu sefer.",
    "Düştük. Ama düşmeden yürümek mümkün mü?",
    "Her son, yeni bir başlangıç. Ya da değil.",
    "Buz kazandı. Her zaman kazanır.",
    "Belki bir dahaki sefere... belki.",
    "Yeniden denemek... varoluşun özeti.",
    "Pes etmek kolay. Ama penguen pes etmez... galiba.",
    "Dağlar hâlâ orada. Bekliyor."
];

// Rastgele alıntı seç
function getRandomQuote() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

// Rastgele oyun sonu alıntısı seç
function getGameOverQuote() {
    return GAME_OVER_QUOTES[Math.floor(Math.random() * GAME_OVER_QUOTES.length)];
}
