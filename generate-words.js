import fs from 'node:fs';
import path from 'node:path';

// This list is intentionally curated. Do not infer antonyms from word prefixes.
const curatedPairs = [
  {
    "a": "stor",
    "b": "liten",
    "description": "Stor och liten beskriver motsatta storlekar.",
    "examples": [
      "Den stora resväskan stod bredvid den lilla väskan.",
      "Vi valde ett stort bord i stället för ett litet."
    ]
  },
  {
    "a": "snabb",
    "b": "långsam",
    "description": "Snabb och långsam beskriver olika hastighet.",
    "examples": [
      "Den snabba cyklisten passerade den långsamma gruppen.",
      "En snabb dator svarar fortare än en långsam dator."
    ]
  },
  {
    "a": "varm",
    "b": "kall",
    "description": "Varm och kall beskriver motsatta temperaturer.",
    "examples": [
      "Teet är varmt, medan saften är kall.",
      "En varm jacka hjälper under en kall vinterdag."
    ]
  },
  {
    "a": "glad",
    "b": "ledsen",
    "description": "Glad och ledsen beskriver motsatta känslolägen.",
    "examples": [
      "Maja blev glad över nyheten, men hennes vän blev ledsen.",
      "Han kände sig glad efter samtalet och ledsen när det tog slut."
    ]
  },
  {
    "a": "ljus",
    "b": "mörk",
    "description": "Ljus och mörk beskriver motsatta grader av ljus eller färg.",
    "examples": [
      "Rummet är ljust på dagen och mörkt på natten.",
      "En ljus färg syns tydligt mot en mörk bakgrund."
    ]
  },
  {
    "a": "hög",
    "b": "låg",
    "description": "Hög och låg beskriver motsatta nivåer eller höjder.",
    "examples": [
      "Det höga huset står bredvid ett lågt hus.",
      "Musiken var för hög, så vi sänkte volymen till en låg nivå."
    ]
  },
  {
    "a": "ung",
    "b": "gammal",
    "description": "Ung och gammal beskriver motsatta åldrar.",
    "examples": [
      "Den unga hunden lekte med den gamla hunden.",
      "Hon är ung, medan hennes farfar är gammal."
    ]
  },
  {
    "a": "full",
    "b": "tom",
    "description": "Full och tom beskriver om något innehåller mycket eller ingenting.",
    "examples": [
      "Glaset är fullt, medan koppen är tom.",
      "Den fulla bussen körde förbi en nästan tom hållplats."
    ]
  },
  {
    "a": "öppen",
    "b": "stängd",
    "description": "Öppen och stängd beskriver motsatta lägen för exempelvis en dörr eller butik.",
    "examples": [
      "Butiken är öppen på dagen och stängd på natten.",
      "Dörren stod öppen, men fönstret var stängt."
    ]
  },
  {
    "a": "lätt",
    "b": "svår",
    "description": "Lätt och svår beskriver hur enkel eller krävande en uppgift är.",
    "examples": [
      "Den första uppgiften var lätt, men nästa var svår.",
      "Det är lätt att följa en tydlig instruktion; utan den blir uppgiften svår."
    ]
  },
  {
    "a": "enkel",
    "b": "komplicerad",
    "description": "Enkel och komplicerad beskriver motsatta grader av komplexitet.",
    "examples": [
      "Regeln är enkel, men undantaget är komplicerat.",
      "Hon gav en enkel förklaring av ett komplicerat problem."
    ]
  },
  {
    "a": "ren",
    "b": "smutsig",
    "description": "Ren och smutsig beskriver om något saknar eller har smuts.",
    "examples": [
      "Skjortan var ren innan den hamnade i den smutsiga tvättkorgen.",
      "Han tvättade den smutsiga bilen tills den blev ren."
    ]
  },
  {
    "a": "stark",
    "b": "svag",
    "description": "Stark och svag beskriver motsatta grader av kraft eller intensitet.",
    "examples": [
      "Kaffet är starkt, men teet är svagt.",
      "Den starka vinden avtog till en svag bris."
    ]
  },
  {
    "a": "hård",
    "b": "mjuk",
    "description": "Hård och mjuk beskriver motsatta grader av fasthet.",
    "examples": [
      "Kudden är mjuk, men bänken är hård.",
      "Brödet blev hårt när det torkade, medan nybakat bröd är mjukt."
    ]
  },
  {
    "a": "tidig",
    "b": "sen",
    "description": "Tidig och sen beskriver när något sker i förhållande till en tidpunkt.",
    "examples": [
      "Tåget var tidigt, men bussen var sen.",
      "Hon kom tidigt till mötet och hennes kollega kom sent."
    ]
  },
  {
    "a": "billig",
    "b": "dyr",
    "description": "Billig och dyr beskriver om något kostar lite eller mycket.",
    "examples": [
      "Den billiga pennan kostar tio kronor; den dyra kostar hundra.",
      "Vi hittade en billig lunch i närheten av den dyra restaurangen."
    ]
  },
  {
    "a": "bred",
    "b": "smal",
    "description": "Bred och smal beskriver motsatta mått från sida till sida.",
    "examples": [
      "Den breda vägen smalnar av till en smal gränd.",
      "Vi valde en bred hylla i stället för en smal."
    ]
  },
  {
    "a": "torr",
    "b": "våt",
    "description": "Torr och våt beskriver om något saknar eller har fukt.",
    "examples": [
      "Handduken är torr, men jackan är fortfarande våt.",
      "Efter regnet var marken våt och stenarna torra."
    ]
  },
  {
    "a": "tyst",
    "b": "högljudd",
    "description": "Tyst och högljudd beskriver olika ljudnivåer.",
    "examples": [
      "Biblioteket är tyst, men gatan utanför är högljudd.",
      "Ett tyst rum kan kännas skönt efter en högljudd konsert."
    ]
  },
  {
    "a": "snäll",
    "b": "elak",
    "description": "Snäll och elak beskriver motsatta sätt att behandla andra.",
    "examples": [
      "Den snälla grannen hjälpte oss, medan den elaka figuren förstörde leken.",
      "Hon var snäll mot den nya eleven, trots att någon annan varit elak."
    ]
  },
  {
    "a": "frisk",
    "b": "sjuk",
    "description": "Frisk och sjuk beskriver motsatta hälsotillstånd.",
    "examples": [
      "Hon var frisk hela vintern, men blev sjuk på våren.",
      "Barnet stannade hemma eftersom det var sjukt och inte friskt nog för skolan."
    ]
  },
  {
    "a": "rätt",
    "b": "fel",
    "description": "Rätt och fel beskriver om något stämmer eller inte.",
    "examples": [
      "Ditt svar är rätt; mitt första svar var fel.",
      "Det är rätt att kontrollera uppgiften om något verkar fel."
    ]
  },
  {
    "a": "äkta",
    "b": "falsk",
    "description": "Äkta och falsk beskriver om något är genuint eller förfalskat.",
    "examples": [
      "Signaturen var äkta, men dokumentet var falskt.",
      "Experten såg skillnad på en äkta tavla och en falsk kopia."
    ]
  },
  {
    "a": "rolig",
    "b": "tråkig",
    "description": "Rolig och tråkig beskriver om något väcker glädje eller känns långsamt och ointressant.",
    "examples": [
      "Filmen var rolig, men föreläsningen efteråt var tråkig.",
      "Vi hade en rolig kväll efter en tråkig dag på kontoret."
    ]
  },
  {
    "a": "pigg",
    "b": "trött",
    "description": "Pigg och trött beskriver motsatta grader av vakenhet och energi.",
    "examples": [
      "Efter en god natts sömn var jag pigg, men på kvällen blev jag trött.",
      "Katten var pigg på morgonen och trött efter leken."
    ]
  },
  {
    "a": "bra",
    "b": "dålig",
    "description": "Bra och dålig uttrycker en positiv respektive negativ bedömning.",
    "examples": [
      "Vädret var bra i går men dåligt i dag.",
      "En bra plan kan hjälpa när något går dåligt."
    ]
  },
  {
    "a": "köpa",
    "b": "sälja",
    "description": "Köpa och sälja beskriver motsatta sidor av ett köp.",
    "examples": [
      "Vi ska köpa en cykel av butiken som säljer den.",
      "Hon köpte den gamla stolen och sålde sitt skrivbord."
    ]
  },
  {
    "a": "öka",
    "b": "minska",
    "description": "Öka och minska beskriver om en mängd eller nivå blir större eller mindre.",
    "examples": [
      "Vi ökade hastigheten och minskade den sedan igen.",
      "Företaget vill öka försäljningen och minska kostnaderna."
    ]
  },
  {
    "a": "tända",
    "b": "släcka",
    "description": "Tända och släcka beskriver att starta respektive avsluta en låga eller ett ljus.",
    "examples": [
      "Han tände lampan när det blev mörkt och släckte den när han gick.",
      "Tänd ett ljus när du läser och släck det innan du lämnar rummet."
    ]
  },
  {
    "a": "vinna",
    "b": "förlora",
    "description": "Vinna och förlora beskriver motsatta resultat i en tävling eller match.",
    "examples": [
      "Laget ville vinna finalen men visste att det kunde förlora.",
      "Man kan vinna en match och ändå förlora nästa."
    ]
  },
  {
    "a": "börja",
    "b": "sluta",
    "description": "Börja och sluta markerar starten respektive slutet på något.",
    "examples": [
      "Mötet började klockan nio och slutade klockan tio.",
      "Hon började läsa på morgonen och slutade när biblioteket stängde."
    ]
  },
  {
    "a": "skratta",
    "b": "gråta",
    "description": "Skratta och gråta är olika känslomässiga reaktioner.",
    "examples": [
      "Barnet skrattade åt skämtet men grät när ballongen flög iväg.",
      "Ibland kan man skratta av glädje och gråta av sorg."
    ]
  },
  {
    "a": "vän",
    "b": "fiende",
    "description": "Vän och fiende beskriver motsatta relationer mellan personer eller grupper.",
    "examples": [
      "I berättelsen blev den gamla fienden till slut en vän.",
      "En vän hjälper dig, medan en fiende motarbetar dig."
    ]
  }
];

const words = {};
for (const pair of curatedPairs) {
  words[pair.a] = {
    opposite: pair.b,
    description: pair.description,
    examples: pair.examples,
    related: [pair.b],
  };
  words[pair.b] = {
    opposite: pair.a,
    description: pair.description,
    examples: pair.examples,
    related: [pair.a],
  };
}

const outputPath = path.join(process.cwd(), 'src', 'data', 'words.ts');
fs.writeFileSync(outputPath, 'export const words = ' + JSON.stringify(words, null, 2) + ' as const;\n', 'utf-8');
console.log('Generated ' + Object.keys(words).length + ' curated word pages.');
