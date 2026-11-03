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
,
  {
    "a": "rik",
    "b": "fattig",
    "description": "Rik och fattig beskriver motsatta grader av tillgångar.",
    "examples": [
      "Den rika familjen skänkte pengar till fattiga barn.",
      "Han blev rik på idéer, även om han inte var rik på pengar."
    ]
  },
  {
    "a": "vacker",
    "b": "ful",
    "description": "Vacker och ful beskriver motsatta estetiska omdömen.",
    "examples": [
      "Den vackra byggnaden stod bredvid ett fult skjul.",
      "Hon tyckte att tavlan var vacker, medan hennes bror tyckte att den var ful."
    ]
  },
  {
    "a": "modig",
    "b": "rädd",
    "description": "Modig och rädd beskriver olika sätt att möta fara eller osäkerhet.",
    "examples": [
      "Den modiga brandmannen gick in medan den rädda mannen väntade utanför.",
      "Hon var modig nog att säga ifrån trots att hon var rädd."
    ]
  },
  {
    "a": "trygg",
    "b": "otrygg",
    "description": "Trygg och otrygg beskriver om någon känner säkerhet eller osäkerhet.",
    "examples": [
      "Barnet kände sig tryggt hemma men otryggt på den mörka vägen.",
      "En trygg miljö kan hjälpa den som känner sig otrygg."
    ]
  },
  {
    "a": "smart",
    "b": "dum",
    "description": "Smart och dum används som motsatser när man beskriver klokhet eller omdöme.",
    "examples": [
      "Det var ett smart beslut att fråga, inte ett dumt misstag.",
      "En smart lösning gjorde den dumma regeln onödig."
    ]
  },
  {
    "a": "mätt",
    "b": "hungrig",
    "description": "Mätt och hungrig beskriver om man har ätit tillräckligt eller behöver mat.",
    "examples": [
      "Efter lunchen var hon mätt, men före maten var hon hungrig.",
      "Barnen gick från hungriga till mätta efter middagen."
    ]
  },
  {
    "a": "lugn",
    "b": "stressad",
    "description": "Lugn och stressad beskriver motsatta känslotillstånd.",
    "examples": [
      "Han var lugn före provet men blev stressad när tiden tog slut.",
      "En promenad hjälper mig att känna mig lugn när jag är stressad."
    ]
  },
  {
    "a": "nära",
    "b": "långt",
    "description": "Nära och långt beskriver kort respektive stort avstånd.",
    "examples": [
      "Skolan ligger nära, men sjukhuset ligger långt bort.",
      "Vi bor nära stationen och långt från flygplatsen."
    ]
  },
  {
    "a": "tjock",
    "b": "tunn",
    "description": "Tjock och tunn beskriver motsatta grader av bredd eller täthet.",
    "examples": [
      "Boken är tjock, medan häftet är tunt.",
      "Hon tog på sig en tjock jacka över den tunna tröjan."
    ]
  },
  {
    "a": "höger",
    "b": "vänster",
    "description": "Höger och vänster anger motsatta sidor eller riktningar.",
    "examples": [
      "Sväng höger vid bron och sedan vänster vid torget.",
      "Han skriver med höger hand men sparkar med vänster fot."
    ]
  },
  {
    "a": "upp",
    "b": "ner",
    "description": "Upp och ner anger motsatta riktningar.",
    "examples": [
      "Hissen åkte upp först och sedan ner igen.",
      "Ballongen steg upp medan stenen föll ner."
    ]
  },
  {
    "a": "in",
    "b": "ut",
    "description": "In och ut anger motsatta riktningar över en gräns.",
    "examples": [
      "Katten gick in genom dörren och sedan ut i trädgården.",
      "Ta in cykeln när det regnar och ställ ut den när solen skiner."
    ]
  },
  {
    "a": "dag",
    "b": "natt",
    "description": "Dag och natt är dygnets ljusa respektive mörka del.",
    "examples": [
      "På dagen arbetar hon och på natten sover hon.",
      "Det är ljust på dagen och mörkt på natten."
    ]
  },
  {
    "a": "fred",
    "b": "krig",
    "description": "Fred och krig beskriver frånvaro respektive förekomst av väpnad konflikt.",
    "examples": [
      "Efter många år av krig hoppades människorna på fred.",
      "Avtalet avslutade kriget och inledde en period av fred."
    ]
  },
  {
    "a": "liv",
    "b": "död",
    "description": "Liv och död beskriver att leva respektive att inte längre leva.",
    "examples": [
      "Berättelsen handlar om liv och död.",
      "Läkaren kämpade för patientens liv och familjen sörjde efter dödsfallet."
    ]
  },
  {
    "a": "tillåta",
    "b": "förbjuda",
    "description": "Tillåta och förbjuda beskriver att ge respektive neka tillstånd.",
    "examples": [
      "Skolan tillåter cyklar på gården men förbjuder dem i korridoren.",
      "Lagen tillåter vissa saker och förbjuder andra."
    ]
  },
  {
    "a": "spara",
    "b": "slösa",
    "description": "Spara och slösa beskriver att använda resurser varsamt respektive utan eftertanke.",
    "examples": [
      "Hon försökte spara pengar i stället för att slösa dem.",
      "Vi sparar vatten när det är torrt och slösar inte med det."
    ]
  },
  {
    "a": "minnas",
    "b": "glömma",
    "description": "Minnas och glömma beskriver att komma ihåg respektive inte komma ihåg.",
    "examples": [
      "Jag minns mötet tydligt men har glömt vad vi åt.",
      "Skriv ner adressen så att du inte ska glömma den."
    ]
  },
  {
    "a": "lyckas",
    "b": "misslyckas",
    "description": "Lyckas och misslyckas beskriver att nå respektive inte nå ett mål.",
    "examples": [
      "Hon lyckades med uppgiften efter att först ha misslyckats.",
      "Man kan misslyckas en gång och lyckas nästa gång."
    ]
  },
  {
    "a": "bygga",
    "b": "riva",
    "description": "Bygga och riva beskriver att uppföra respektive ta bort en konstruktion.",
    "examples": [
      "De ska bygga en ny bro och riva den gamla.",
      "Hantverkarna byggde väggen och rev den senare."
    ]
  },
  {
    "a": "aktiv",
    "b": "passiv",
    "description": "Aktiv och passiv beskriver att delta eller agera respektive att inte göra det.",
    "examples": [
      "Eleven var aktiv under diskussionen men passiv under föreläsningen.",
      "En aktiv medlem hjälper till, medan en passiv medlem mest lyssnar."
    ]
  },
  {
    "a": "positiv",
    "b": "negativ",
    "description": "Positiv och negativ beskriver motsatta värderingar eller riktningar.",
    "examples": [
      "Hon var positiv till förslaget, medan han var negativ.",
      "Testresultatet var negativt, men läkarens besked var positivt."
    ]
  },
  {
    "a": "närvarande",
    "b": "frånvarande",
    "description": "Närvarande och frånvarande beskriver att vara på plats respektive inte vara där.",
    "examples": [
      "De flesta elever var närvarande, men två var frånvarande.",
      "Läraren noterade vilka som var närvarande och frånvarande."
    ]
  },
  {
    "a": "många",
    "b": "få",
    "description": "Många och få beskriver stor respektive liten mängd.",
    "examples": [
      "Många kom tidigt, men få stannade sent.",
      "Det fanns många äpplen och få päron."
    ]
  },
  {
    "a": "mer",
    "b": "mindre",
    "description": "Mer och mindre beskriver större respektive mindre mängd eller grad.",
    "examples": [
      "Vill du ha mer kaffe eller mindre socker?",
      "Hon tränar mer på sommaren och mindre på vintern."
    ]
  },
  {
    "a": "alltid",
    "b": "aldrig",
    "description": "Alltid och aldrig beskriver motsatta frekvenser.",
    "examples": [
      "Han kommer alltid i tid och kommer aldrig för sent.",
      "Jag brukar alltid låsa dörren och aldrig lämna den öppen."
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
