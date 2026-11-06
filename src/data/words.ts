export type WordEntry = Readonly<Record<'opposite' | 'description', string> & Record<'examples' | 'related', readonly string[]>>;

export const words: Record<string, WordEntry> = {
  "stor": {
    "opposite": "liten",
    "description": "Stor och liten beskriver hur stort något är.",
    "examples": [
      "Huset är stort, men stugan är liten.",
      "Vi valde ett stort bord i stället för ett litet."
    ],
    "related": [
      "liten"
    ]
  },
  "liten": {
    "opposite": "stor",
    "description": "Stor och liten beskriver hur stort något är.",
    "examples": [
      "Huset är stort, men stugan är liten.",
      "Vi valde ett stort bord i stället för ett litet."
    ],
    "related": [
      "stor"
    ]
  },
  "snabb": {
    "opposite": "långsam",
    "description": "Snabb och långsam beskriver hur fort något går.",
    "examples": [
      "Haren är snabb, men snigeln är långsam.",
      "Den snabba cyklisten körde förbi den långsamma cyklisten."
    ],
    "related": [
      "långsam"
    ]
  },
  "långsam": {
    "opposite": "snabb",
    "description": "Snabb och långsam beskriver hur fort något går.",
    "examples": [
      "Haren är snabb, men snigeln är långsam.",
      "Den snabba cyklisten körde förbi den långsamma cyklisten."
    ],
    "related": [
      "snabb"
    ]
  },
  "varm": {
    "opposite": "kall",
    "description": "Varm och kall beskriver olika temperaturer.",
    "examples": [
      "Teet är varmt, men saften är kall.",
      "På sommaren är luften ofta varm. På vintern är den ofta kall."
    ],
    "related": [
      "kall"
    ]
  },
  "kall": {
    "opposite": "varm",
    "description": "Varm och kall beskriver olika temperaturer.",
    "examples": [
      "Teet är varmt, men saften är kall.",
      "På sommaren är luften ofta varm. På vintern är den ofta kall."
    ],
    "related": [
      "varm"
    ]
  },
  "glad": {
    "opposite": "ledsen",
    "description": "Glad och ledsen beskriver olika känslor.",
    "examples": [
      "Hon blev glad när hon vann och ledsen när hon förlorade.",
      "Han var ledsen på morgonen men glad efter besöket."
    ],
    "related": [
      "ledsen"
    ]
  },
  "ledsen": {
    "opposite": "glad",
    "description": "Glad och ledsen beskriver olika känslor.",
    "examples": [
      "Hon blev glad när hon vann och ledsen när hon förlorade.",
      "Han var ledsen på morgonen men glad efter besöket."
    ],
    "related": [
      "glad"
    ]
  },
  "ljus": {
    "opposite": "mörk",
    "description": "Ljus och mörk kan beskriva ett rum eller en färg.",
    "examples": [
      "Rummet är ljust på dagen och mörkt på natten.",
      "Hon valde en ljus tröja och mörka byxor."
    ],
    "related": [
      "mörk"
    ]
  },
  "mörk": {
    "opposite": "ljus",
    "description": "Ljus och mörk kan beskriva ett rum eller en färg.",
    "examples": [
      "Rummet är ljust på dagen och mörkt på natten.",
      "Hon valde en ljus tröja och mörka byxor."
    ],
    "related": [
      "ljus"
    ]
  },
  "hög": {
    "opposite": "låg",
    "description": "Hög och låg kan beskriva en höjd eller en nivå.",
    "examples": [
      "Det höga huset står bredvid ett lågt hus.",
      "Hyllan är för hög för mig. Jag behöver en lägre hylla."
    ],
    "related": [
      "låg"
    ]
  },
  "låg": {
    "opposite": "hög",
    "description": "Hög och låg kan beskriva en höjd eller en nivå.",
    "examples": [
      "Det höga huset står bredvid ett lågt hus.",
      "Hyllan är för hög för mig. Jag behöver en lägre hylla."
    ],
    "related": [
      "hög"
    ]
  },
  "ung": {
    "opposite": "gammal",
    "description": "Ung och gammal beskriver olika åldrar. När gammal handlar om en sak kan motsatsen i stället vara ny.",
    "examples": [
      "Den unga hunden leker med den gamla hunden.",
      "Trädet vid huset är gammalt, men trädet vid grinden är ungt."
    ],
    "related": [
      "gammal"
    ]
  },
  "gammal": {
    "opposite": "ung",
    "description": "Ung och gammal beskriver olika åldrar. När gammal handlar om en sak kan motsatsen i stället vara ny.",
    "examples": [
      "Den unga hunden leker med den gamla hunden.",
      "Trädet vid huset är gammalt, men trädet vid grinden är ungt."
    ],
    "related": [
      "ung"
    ]
  },
  "full": {
    "opposite": "tom",
    "description": "Full betyder här att det inte finns plats för mer. Tom betyder att inget finns i.",
    "examples": [
      "Glaset är fullt, men koppen är tom.",
      "Lådan var tom innan vi fyllde den. Nu är den full."
    ],
    "related": [
      "tom"
    ]
  },
  "tom": {
    "opposite": "full",
    "description": "Full betyder här att det inte finns plats för mer. Tom betyder att inget finns i.",
    "examples": [
      "Glaset är fullt, men koppen är tom.",
      "Lådan var tom innan vi fyllde den. Nu är den full."
    ],
    "related": [
      "full"
    ]
  },
  "öppen": {
    "opposite": "stängd",
    "description": "Öppen och stängd kan beskriva en dörr eller en butik.",
    "examples": [
      "Butiken är öppen på dagen och stängd på natten.",
      "Dörren är öppen, men fönstret är stängt."
    ],
    "related": [
      "stängd"
    ]
  },
  "stängd": {
    "opposite": "öppen",
    "description": "Öppen och stängd kan beskriva en dörr eller en butik.",
    "examples": [
      "Butiken är öppen på dagen och stängd på natten.",
      "Dörren är öppen, men fönstret är stängt."
    ],
    "related": [
      "öppen"
    ]
  },
  "lätt": {
    "opposite": "svår",
    "description": "Här handlar lätt och svår om hur enkel en uppgift är. När lätt handlar om vikt är motsatsen tung.",
    "examples": [
      "Den första uppgiften var lätt, men nästa var svår.",
      "Provet var svårt för mig men lätt för min kompis."
    ],
    "related": [
      "svår"
    ]
  },
  "svår": {
    "opposite": "lätt",
    "description": "Här handlar lätt och svår om hur enkel en uppgift är. När lätt handlar om vikt är motsatsen tung.",
    "examples": [
      "Den första uppgiften var lätt, men nästa var svår.",
      "Provet var svårt för mig men lätt för min kompis."
    ],
    "related": [
      "lätt"
    ]
  },
  "enkel": {
    "opposite": "komplicerad",
    "description": "Enkel betyder att något är lätt att förstå eller göra. Komplicerad betyder att något har många delar eller är svårt att förstå.",
    "examples": [
      "Regeln är enkel, men undantaget är komplicerat.",
      "Den enkla planen var lätt att följa. Den komplicerade planen var svår att följa."
    ],
    "related": [
      "komplicerad"
    ]
  },
  "komplicerad": {
    "opposite": "enkel",
    "description": "Enkel betyder att något är lätt att förstå eller göra. Komplicerad betyder att något har många delar eller är svårt att förstå.",
    "examples": [
      "Regeln är enkel, men undantaget är komplicerat.",
      "Den enkla planen var lätt att följa. Den komplicerade planen var svår att följa."
    ],
    "related": [
      "enkel"
    ]
  },
  "ren": {
    "opposite": "smutsig",
    "description": "Ren betyder att något är utan smuts. Smutsig betyder att det finns smuts på något.",
    "examples": [
      "Skjortan är ren, men byxorna är smutsiga.",
      "Bilen var smutsig före tvätten och ren efteråt."
    ],
    "related": [
      "smutsig"
    ]
  },
  "smutsig": {
    "opposite": "ren",
    "description": "Ren betyder att något är utan smuts. Smutsig betyder att det finns smuts på något.",
    "examples": [
      "Skjortan är ren, men byxorna är smutsiga.",
      "Bilen var smutsig före tvätten och ren efteråt."
    ],
    "related": [
      "ren"
    ]
  },
  "stark": {
    "opposite": "svag",
    "description": "Stark och svag kan beskriva kraft, vind eller smak.",
    "examples": [
      "Den starka vinden blev svagare under kvällen.",
      "Kaffet är starkt i dag. I går var det svagt."
    ],
    "related": [
      "svag"
    ]
  },
  "svag": {
    "opposite": "stark",
    "description": "Stark och svag kan beskriva kraft, vind eller smak.",
    "examples": [
      "Den starka vinden blev svagare under kvällen.",
      "Kaffet är starkt i dag. I går var det svagt."
    ],
    "related": [
      "stark"
    ]
  },
  "hård": {
    "opposite": "mjuk",
    "description": "Hård och mjuk beskriver hur något känns när man trycker på det.",
    "examples": [
      "Kudden är mjuk, men bänken är hård.",
      "Brödet är mjukt när det är färskt och hårt när det har torkat."
    ],
    "related": [
      "mjuk"
    ]
  },
  "mjuk": {
    "opposite": "hård",
    "description": "Hård och mjuk beskriver hur något känns när man trycker på det.",
    "examples": [
      "Kudden är mjuk, men bänken är hård.",
      "Brödet är mjukt när det är färskt och hårt när det har torkat."
    ],
    "related": [
      "hård"
    ]
  },
  "tidig": {
    "opposite": "sen",
    "description": "Tidig och sen beskriver när något händer jämfört med en bestämd tid.",
    "examples": [
      "Det första tåget var tidigt, men nästa tåg var sent.",
      "Vi åt en tidig lunch och en sen middag."
    ],
    "related": [
      "sen"
    ]
  },
  "sen": {
    "opposite": "tidig",
    "description": "Tidig och sen beskriver när något händer jämfört med en bestämd tid.",
    "examples": [
      "Det första tåget var tidigt, men nästa tåg var sent.",
      "Vi åt en tidig lunch och en sen middag."
    ],
    "related": [
      "tidig"
    ]
  },
  "billig": {
    "opposite": "dyr",
    "description": "Billig betyder att något kostar lite. Dyr betyder att något kostar mycket.",
    "examples": [
      "Den billiga pennan kostar tio kronor. Den dyra kostar hundra.",
      "Vi valde ett billigt hotell i stället för ett dyrt."
    ],
    "related": [
      "dyr"
    ]
  },
  "dyr": {
    "opposite": "billig",
    "description": "Billig betyder att något kostar lite. Dyr betyder att något kostar mycket.",
    "examples": [
      "Den billiga pennan kostar tio kronor. Den dyra kostar hundra.",
      "Vi valde ett billigt hotell i stället för ett dyrt."
    ],
    "related": [
      "billig"
    ]
  },
  "bred": {
    "opposite": "smal",
    "description": "Bred och smal beskriver hur mycket plats något tar från sida till sida.",
    "examples": [
      "Den breda vägen leder till en smal gränd.",
      "Vi valde en bred hylla i stället för en smal."
    ],
    "related": [
      "smal"
    ]
  },
  "smal": {
    "opposite": "bred",
    "description": "Bred och smal beskriver hur mycket plats något tar från sida till sida.",
    "examples": [
      "Den breda vägen leder till en smal gränd.",
      "Vi valde en bred hylla i stället för en smal."
    ],
    "related": [
      "bred"
    ]
  },
  "torr": {
    "opposite": "våt",
    "description": "Torr betyder att något inte är vått. Våt betyder att det finns vatten eller annan vätska på eller i något.",
    "examples": [
      "Handduken är torr, men jackan är våt.",
      "Skorna var våta efter regnet. Nu är de torra."
    ],
    "related": [
      "våt"
    ]
  },
  "våt": {
    "opposite": "torr",
    "description": "Torr betyder att något inte är vått. Våt betyder att det finns vatten eller annan vätska på eller i något.",
    "examples": [
      "Handduken är torr, men jackan är våt.",
      "Skorna var våta efter regnet. Nu är de torra."
    ],
    "related": [
      "torr"
    ]
  },
  "tyst": {
    "opposite": "högljudd",
    "description": "Tyst och högljudd beskriver hur mycket ljud någon eller något gör.",
    "examples": [
      "Klassen var högljudd på rasten men tyst under provet.",
      "Han var högljudd under matchen och tyst på vägen hem."
    ],
    "related": [
      "högljudd"
    ]
  },
  "högljudd": {
    "opposite": "tyst",
    "description": "Tyst och högljudd beskriver hur mycket ljud någon eller något gör.",
    "examples": [
      "Klassen var högljudd på rasten men tyst under provet.",
      "Han var högljudd under matchen och tyst på vägen hem."
    ],
    "related": [
      "tyst"
    ]
  },
  "snäll": {
    "opposite": "elak",
    "description": "Snäll och elak beskriver hur någon behandlar andra.",
    "examples": [
      "Det är snällt att hjälpa och elakt att retas.",
      "Hon är snäll mot sin vän och säger inga elaka saker."
    ],
    "related": [
      "elak"
    ]
  },
  "elak": {
    "opposite": "snäll",
    "description": "Snäll och elak beskriver hur någon behandlar andra.",
    "examples": [
      "Det är snällt att hjälpa och elakt att retas.",
      "Hon är snäll mot sin vän och säger inga elaka saker."
    ],
    "related": [
      "snäll"
    ]
  },
  "frisk": {
    "opposite": "sjuk",
    "description": "Frisk och sjuk beskriver hur någon mår. Frisk betyder här att inte vara sjuk.",
    "examples": [
      "Hon var sjuk i går men är frisk i dag.",
      "Barnet stannade hemma när det var sjukt och gick till skolan när det var friskt."
    ],
    "related": [
      "sjuk"
    ]
  },
  "sjuk": {
    "opposite": "frisk",
    "description": "Frisk och sjuk beskriver hur någon mår. Frisk betyder här att inte vara sjuk.",
    "examples": [
      "Hon var sjuk i går men är frisk i dag.",
      "Barnet stannade hemma när det var sjukt och gick till skolan när det var friskt."
    ],
    "related": [
      "frisk"
    ]
  },
  "rätt": {
    "opposite": "fel",
    "description": "Rätt betyder här att något stämmer. Fel betyder att det inte stämmer.",
    "examples": [
      "Ditt svar är rätt, men mitt svar är fel.",
      "Jag skrev fel nummer först och rätt nummer sedan."
    ],
    "related": [
      "fel"
    ]
  },
  "fel": {
    "opposite": "rätt",
    "description": "Rätt betyder här att något stämmer. Fel betyder att det inte stämmer.",
    "examples": [
      "Ditt svar är rätt, men mitt svar är fel.",
      "Jag skrev fel nummer först och rätt nummer sedan."
    ],
    "related": [
      "rätt"
    ]
  },
  "äkta": {
    "opposite": "falsk",
    "description": "Äkta betyder här att något är vad det sägs vara. Falsk betyder att det är gjort för att verka äkta.",
    "examples": [
      "Den här sedeln är äkta, men den där är falsk.",
      "Experten såg skillnad på en äkta tavla och en falsk tavla."
    ],
    "related": [
      "falsk"
    ]
  },
  "falsk": {
    "opposite": "äkta",
    "description": "Äkta betyder här att något är vad det sägs vara. Falsk betyder att det är gjort för att verka äkta.",
    "examples": [
      "Den här sedeln är äkta, men den där är falsk.",
      "Experten såg skillnad på en äkta tavla och en falsk tavla."
    ],
    "related": [
      "äkta"
    ]
  },
  "rolig": {
    "opposite": "tråkig",
    "description": "Rolig och tråkig beskriver hur någon upplever en sak eller en händelse.",
    "examples": [
      "Filmen var rolig, men boken var tråkig.",
      "Vi hade en rolig kväll efter en tråkig dag."
    ],
    "related": [
      "tråkig"
    ]
  },
  "tråkig": {
    "opposite": "rolig",
    "description": "Rolig och tråkig beskriver hur någon upplever en sak eller en händelse.",
    "examples": [
      "Filmen var rolig, men boken var tråkig.",
      "Vi hade en rolig kväll efter en tråkig dag."
    ],
    "related": [
      "rolig"
    ]
  },
  "pigg": {
    "opposite": "trött",
    "description": "Pigg betyder att man har energi. Trött betyder att man behöver vila eller sova.",
    "examples": [
      "Jag är pigg på morgonen och trött på kvällen.",
      "Efter en god natts sömn var hon pigg. Före läggdags var hon trött."
    ],
    "related": [
      "trött"
    ]
  },
  "trött": {
    "opposite": "pigg",
    "description": "Pigg betyder att man har energi. Trött betyder att man behöver vila eller sova.",
    "examples": [
      "Jag är pigg på morgonen och trött på kvällen.",
      "Efter en god natts sömn var hon pigg. Före läggdags var hon trött."
    ],
    "related": [
      "pigg"
    ]
  },
  "bra": {
    "opposite": "dålig",
    "description": "Bra och dålig beskriver om vi tycker att något fungerar väl eller mindre väl.",
    "examples": [
      "Vädret var bra i går men dåligt i dag.",
      "Skorna är bra för en promenad men dåliga för löpning."
    ],
    "related": [
      "dålig"
    ]
  },
  "dålig": {
    "opposite": "bra",
    "description": "Bra och dålig beskriver om vi tycker att något fungerar väl eller mindre väl.",
    "examples": [
      "Vädret var bra i går men dåligt i dag.",
      "Skorna är bra för en promenad men dåliga för löpning."
    ],
    "related": [
      "bra"
    ]
  },
  "köpa": {
    "opposite": "sälja",
    "description": "Köpa och sälja beskriver samma affär från två håll. Köparen betalar och säljaren får pengarna.",
    "examples": [
      "Jag köper en cykel av dig, och du säljer den till mig.",
      "Butiken säljer bröd som kunderna köper."
    ],
    "related": [
      "sälja"
    ]
  },
  "sälja": {
    "opposite": "köpa",
    "description": "Köpa och sälja beskriver samma affär från två håll. Köparen betalar och säljaren får pengarna.",
    "examples": [
      "Jag köper en cykel av dig, och du säljer den till mig.",
      "Butiken säljer bröd som kunderna köper."
    ],
    "related": [
      "köpa"
    ]
  },
  "öka": {
    "opposite": "minska",
    "description": "Öka betyder att något blir större eller mer. Minska betyder att något blir mindre.",
    "examples": [
      "Antalet besökare ökade på sommaren och minskade på hösten.",
      "Vi ökade värmen när vi frös och minskade den när det blev för varmt."
    ],
    "related": [
      "minska"
    ]
  },
  "minska": {
    "opposite": "öka",
    "description": "Öka betyder att något blir större eller mer. Minska betyder att något blir mindre.",
    "examples": [
      "Antalet besökare ökade på sommaren och minskade på hösten.",
      "Vi ökade värmen när vi frös och minskade den när det blev för varmt."
    ],
    "related": [
      "öka"
    ]
  },
  "tända": {
    "opposite": "släcka",
    "description": "Tända betyder att få något att lysa eller brinna. Släcka betyder att få det att sluta lysa eller brinna.",
    "examples": [
      "Hon tände lampan när hon kom och släckte den när hon gick.",
      "Vi tänder ljusen till middagen och släcker dem efteråt."
    ],
    "related": [
      "släcka"
    ]
  },
  "släcka": {
    "opposite": "tända",
    "description": "Tända betyder att få något att lysa eller brinna. Släcka betyder att få det att sluta lysa eller brinna.",
    "examples": [
      "Hon tände lampan när hon kom och släckte den när hon gick.",
      "Vi tänder ljusen till middagen och släcker dem efteråt."
    ],
    "related": [
      "tända"
    ]
  },
  "vinna": {
    "opposite": "förlora",
    "description": "Vinna och förlora beskriver olika resultat i en match eller tävling.",
    "examples": [
      "Vårt lag vann, och det andra laget förlorade.",
      "Vi vann den första matchen men förlorade den andra."
    ],
    "related": [
      "förlora"
    ]
  },
  "förlora": {
    "opposite": "vinna",
    "description": "Vinna och förlora beskriver olika resultat i en match eller tävling.",
    "examples": [
      "Vårt lag vann, och det andra laget förlorade.",
      "Vi vann den första matchen men förlorade den andra."
    ],
    "related": [
      "vinna"
    ]
  },
  "börja": {
    "opposite": "sluta",
    "description": "Börja betyder att något startar. Sluta betyder att något tar slut.",
    "examples": [
      "Mötet började klockan nio och slutade klockan tio.",
      "Hon började läsa efter lunch och slutade före middagen."
    ],
    "related": [
      "sluta"
    ]
  },
  "sluta": {
    "opposite": "börja",
    "description": "Börja betyder att något startar. Sluta betyder att något tar slut.",
    "examples": [
      "Mötet började klockan nio och slutade klockan tio.",
      "Hon började läsa efter lunch och slutade före middagen."
    ],
    "related": [
      "börja"
    ]
  },
  "skratta": {
    "opposite": "gråta",
    "description": "Skratta och gråta används ofta som motsatser när man talar om känslor. Men man kan också gråta av glädje eller skratta när man är nervös.",
    "examples": [
      "Barnet skrattade åt skämtet men grät när ballongen gick sönder.",
      "Hon grät när hon slog sig och skrattade när pappa skojade."
    ],
    "related": [
      "gråta"
    ]
  },
  "gråta": {
    "opposite": "skratta",
    "description": "Skratta och gråta används ofta som motsatser när man talar om känslor. Men man kan också gråta av glädje eller skratta när man är nervös.",
    "examples": [
      "Barnet skrattade åt skämtet men grät när ballongen gick sönder.",
      "Hon grät när hon slog sig och skrattade när pappa skojade."
    ],
    "related": [
      "skratta"
    ]
  },
  "vän": {
    "opposite": "fiende",
    "description": "En vän är någon man tycker om och litar på. En fiende är någon som vill en illa eller som man är i konflikt med.",
    "examples": [
      "I sagan blev den gamla fienden en vän.",
      "Hjälten fick hjälp av sina vänner och kämpade mot sina fiender."
    ],
    "related": [
      "fiende"
    ]
  },
  "fiende": {
    "opposite": "vän",
    "description": "En vän är någon man tycker om och litar på. En fiende är någon som vill en illa eller som man är i konflikt med.",
    "examples": [
      "I sagan blev den gamla fienden en vän.",
      "Hjälten fick hjälp av sina vänner och kämpade mot sina fiender."
    ],
    "related": [
      "vän"
    ]
  },
  "rik": {
    "opposite": "fattig",
    "description": "Rik betyder här att ha mycket pengar. Fattig betyder att ha lite pengar.",
    "examples": [
      "Hon var fattig som barn men blev rik som vuxen.",
      "Den rika mannen gav pengar till en fattig familj."
    ],
    "related": [
      "fattig"
    ]
  },
  "fattig": {
    "opposite": "rik",
    "description": "Rik betyder här att ha mycket pengar. Fattig betyder att ha lite pengar.",
    "examples": [
      "Hon var fattig som barn men blev rik som vuxen.",
      "Den rika mannen gav pengar till en fattig familj."
    ],
    "related": [
      "rik"
    ]
  },
  "vacker": {
    "opposite": "ful",
    "description": "Vacker och ful beskriver vad någon tycker om hur något ser ut.",
    "examples": [
      "Hon tyckte att tavlan var vacker, men han tyckte att den var ful.",
      "Huset var fult före målningen och vackert efteråt."
    ],
    "related": [
      "ful"
    ]
  },
  "ful": {
    "opposite": "vacker",
    "description": "Vacker och ful beskriver vad någon tycker om hur något ser ut.",
    "examples": [
      "Hon tyckte att tavlan var vacker, men han tyckte att den var ful.",
      "Huset var fult före målningen och vackert efteråt."
    ],
    "related": [
      "vacker"
    ]
  },
  "modig": {
    "opposite": "rädd",
    "description": "Modig och rädd används ibland som motsatser. Men man kan vara rädd och ändå vara modig, eftersom mod handlar om att våga trots rädslan.",
    "examples": [
      "Hon var rädd för att tala inför klassen men var modig och försökte ändå.",
      "Han kände sig rädd före hoppet och modig efteråt."
    ],
    "related": [
      "rädd"
    ]
  },
  "rädd": {
    "opposite": "modig",
    "description": "Modig och rädd används ibland som motsatser. Men man kan vara rädd och ändå vara modig, eftersom mod handlar om att våga trots rädslan.",
    "examples": [
      "Hon var rädd för att tala inför klassen men var modig och försökte ändå.",
      "Han kände sig rädd före hoppet och modig efteråt."
    ],
    "related": [
      "modig"
    ]
  },
  "trygg": {
    "opposite": "otrygg",
    "description": "Trygg betyder att känna sig säker. Otrygg betyder att känna sig osäker eller rädd.",
    "examples": [
      "Barnet kände sig tryggt hemma men otryggt på den mörka vägen.",
      "Hon kände sig otrygg ensam men trygg när hennes vän kom."
    ],
    "related": [
      "otrygg"
    ]
  },
  "otrygg": {
    "opposite": "trygg",
    "description": "Trygg betyder att känna sig säker. Otrygg betyder att känna sig osäker eller rädd.",
    "examples": [
      "Barnet kände sig tryggt hemma men otryggt på den mörka vägen.",
      "Hon kände sig otrygg ensam men trygg när hennes vän kom."
    ],
    "related": [
      "trygg"
    ]
  },
  "smart": {
    "opposite": "dum",
    "description": "Smart betyder här klok. Dum betyder här oklok. Orden beskriver en idé eller ett beslut.",
    "examples": [
      "Det var smart att spara biljetten och dumt att kasta den.",
      "Vi valde en smart lösning i stället för en dum."
    ],
    "related": [
      "dum"
    ]
  },
  "dum": {
    "opposite": "smart",
    "description": "Smart betyder här klok. Dum betyder här oklok. Orden beskriver en idé eller ett beslut.",
    "examples": [
      "Det var smart att spara biljetten och dumt att kasta den.",
      "Vi valde en smart lösning i stället för en dum."
    ],
    "related": [
      "smart"
    ]
  },
  "mätt": {
    "opposite": "hungrig",
    "description": "Mätt betyder att ha ätit tillräckligt. Hungrig betyder att vilja eller behöva äta.",
    "examples": [
      "Hon var hungrig före lunchen och mätt efteråt.",
      "Barnen kom hungriga till bordet och gick därifrån mätta."
    ],
    "related": [
      "hungrig"
    ]
  },
  "hungrig": {
    "opposite": "mätt",
    "description": "Mätt betyder att ha ätit tillräckligt. Hungrig betyder att vilja eller behöva äta.",
    "examples": [
      "Hon var hungrig före lunchen och mätt efteråt.",
      "Barnen kom hungriga till bordet och gick därifrån mätta."
    ],
    "related": [
      "mätt"
    ]
  },
  "lugn": {
    "opposite": "stressad",
    "description": "Lugn och stressad beskriver hur man kan känna sig.",
    "examples": [
      "Hon var stressad före provet och lugn efteråt.",
      "Jag känner mig stressad när jag har bråttom och lugn när jag har gott om tid."
    ],
    "related": [
      "stressad"
    ]
  },
  "stressad": {
    "opposite": "lugn",
    "description": "Lugn och stressad beskriver hur man kan känna sig.",
    "examples": [
      "Hon var stressad före provet och lugn efteråt.",
      "Jag känner mig stressad när jag har bråttom och lugn när jag har gott om tid."
    ],
    "related": [
      "lugn"
    ]
  },
  "nära": {
    "opposite": "långt",
    "description": "Nära betyder på kort avstånd. Långt betyder på stort avstånd.",
    "examples": [
      "Skolan ligger nära, men sjukhuset ligger långt bort.",
      "Vi bor nära stationen och långt från flygplatsen."
    ],
    "related": [
      "långt"
    ]
  },
  "långt": {
    "opposite": "nära",
    "description": "Nära betyder på kort avstånd. Långt betyder på stort avstånd.",
    "examples": [
      "Skolan ligger nära, men sjukhuset ligger långt bort.",
      "Vi bor nära stationen och långt från flygplatsen."
    ],
    "related": [
      "nära"
    ]
  },
  "tjock": {
    "opposite": "tunn",
    "description": "Tjock och tunn beskriver ett mått, till exempel hur mycket papper det finns i en bok.",
    "examples": [
      "Boken är tjock, men häftet är tunt.",
      "Hon tog på sig en tjock jacka över den tunna tröjan."
    ],
    "related": [
      "tunn"
    ]
  },
  "tunn": {
    "opposite": "tjock",
    "description": "Tjock och tunn beskriver ett mått, till exempel hur mycket papper det finns i en bok.",
    "examples": [
      "Boken är tjock, men häftet är tunt.",
      "Hon tog på sig en tjock jacka över den tunna tröjan."
    ],
    "related": [
      "tjock"
    ]
  },
  "höger": {
    "opposite": "vänster",
    "description": "Höger och vänster är motsatta sidor eller riktningar.",
    "examples": [
      "Sväng höger vid bron och vänster vid torget.",
      "Han håller boken i höger hand och pennan i vänster hand."
    ],
    "related": [
      "vänster"
    ]
  },
  "vänster": {
    "opposite": "höger",
    "description": "Höger och vänster är motsatta sidor eller riktningar.",
    "examples": [
      "Sväng höger vid bron och vänster vid torget.",
      "Han håller boken i höger hand och pennan i vänster hand."
    ],
    "related": [
      "höger"
    ]
  },
  "upp": {
    "opposite": "ner",
    "description": "Upp och ner är motsatta riktningar.",
    "examples": [
      "Hissen åkte upp först och sedan ner igen.",
      "Bollen kastades upp och föll sedan ner."
    ],
    "related": [
      "ner"
    ]
  },
  "ner": {
    "opposite": "upp",
    "description": "Upp och ner är motsatta riktningar.",
    "examples": [
      "Hissen åkte upp först och sedan ner igen.",
      "Bollen kastades upp och föll sedan ner."
    ],
    "related": [
      "upp"
    ]
  },
  "in": {
    "opposite": "ut",
    "description": "In och ut är motsatta riktningar, till exempel genom en dörr.",
    "examples": [
      "Katten gick in i huset och sedan ut i trädgården.",
      "Vi gick in när det började regna och ut när regnet slutade."
    ],
    "related": [
      "ut"
    ]
  },
  "ut": {
    "opposite": "in",
    "description": "In och ut är motsatta riktningar, till exempel genom en dörr.",
    "examples": [
      "Katten gick in i huset och sedan ut i trädgården.",
      "Vi gick in när det började regna och ut när regnet slutade."
    ],
    "related": [
      "in"
    ]
  },
  "dag": {
    "opposite": "natt",
    "description": "Dag är den ljusa delen av dygnet. Natt är den mörka delen.",
    "examples": [
      "Hon arbetar på dagen och sover på natten.",
      "Butiken är öppen på dagen och stängd på natten."
    ],
    "related": [
      "natt"
    ]
  },
  "natt": {
    "opposite": "dag",
    "description": "Dag är den ljusa delen av dygnet. Natt är den mörka delen.",
    "examples": [
      "Hon arbetar på dagen och sover på natten.",
      "Butiken är öppen på dagen och stängd på natten."
    ],
    "related": [
      "dag"
    ]
  },
  "fred": {
    "opposite": "krig",
    "description": "Fred betyder här att det inte är krig. Krig är en väpnad konflikt mellan länder eller grupper.",
    "examples": [
      "Efter många år av krig blev det fred.",
      "Familjen flydde från kriget och hoppades på fred."
    ],
    "related": [
      "krig"
    ]
  },
  "krig": {
    "opposite": "fred",
    "description": "Fred betyder här att det inte är krig. Krig är en väpnad konflikt mellan länder eller grupper.",
    "examples": [
      "Efter många år av krig blev det fred.",
      "Familjen flydde från kriget och hoppades på fred."
    ],
    "related": [
      "fred"
    ]
  },
  "liv": {
    "opposite": "död",
    "description": "Liv handlar om att leva. Död betyder att livet har tagit slut.",
    "examples": [
      "Boken handlar om liv och död.",
      "Döden är slutet på livet."
    ],
    "related": [
      "död"
    ]
  },
  "död": {
    "opposite": "liv",
    "description": "Liv handlar om att leva. Död betyder att livet har tagit slut.",
    "examples": [
      "Boken handlar om liv och död.",
      "Döden är slutet på livet."
    ],
    "related": [
      "liv"
    ]
  },
  "tillåta": {
    "opposite": "förbjuda",
    "description": "Tillåta betyder att säga att något får göras. Förbjuda betyder att säga att det inte får göras.",
    "examples": [
      "Skolan tillåter cykling på gården men förbjuder cykling i korridoren.",
      "Bad är tillåtet vid stranden men förbjudet vid hamnen."
    ],
    "related": [
      "förbjuda"
    ]
  },
  "förbjuda": {
    "opposite": "tillåta",
    "description": "Tillåta betyder att säga att något får göras. Förbjuda betyder att säga att det inte får göras.",
    "examples": [
      "Skolan tillåter cykling på gården men förbjuder cykling i korridoren.",
      "Bad är tillåtet vid stranden men förbjudet vid hamnen."
    ],
    "related": [
      "tillåta"
    ]
  },
  "spara": {
    "opposite": "slösa",
    "description": "Spara kan betyda att lägga undan något eller använda mindre av det. Slösa betyder att använda mer än vad som behövs.",
    "examples": [
      "Hon sparar pengar varje månad i stället för att slösa bort dem.",
      "Stäng kranen för att spara vatten. Låt den inte rinna och slösa med vattnet."
    ],
    "related": [
      "slösa"
    ]
  },
  "slösa": {
    "opposite": "spara",
    "description": "Spara kan betyda att lägga undan något eller använda mindre av det. Slösa betyder att använda mer än vad som behövs.",
    "examples": [
      "Hon sparar pengar varje månad i stället för att slösa bort dem.",
      "Stäng kranen för att spara vatten. Låt den inte rinna och slösa med vattnet."
    ],
    "related": [
      "spara"
    ]
  },
  "minnas": {
    "opposite": "glömma",
    "description": "Minnas betyder att komma ihåg. Glömma betyder att inte komma ihåg.",
    "examples": [
      "Jag minns ditt namn men har glömt din adress.",
      "Hon mindes mötet, men han hade glömt det."
    ],
    "related": [
      "glömma"
    ]
  },
  "glömma": {
    "opposite": "minnas",
    "description": "Minnas betyder att komma ihåg. Glömma betyder att inte komma ihåg.",
    "examples": [
      "Jag minns ditt namn men har glömt din adress.",
      "Hon mindes mötet, men han hade glömt det."
    ],
    "related": [
      "minnas"
    ]
  },
  "lyckas": {
    "opposite": "misslyckas",
    "description": "Lyckas betyder att nå sitt mål. Misslyckas betyder att inte nå sitt mål.",
    "examples": [
      "Hon lyckades med uppgiften efter att först ha misslyckats.",
      "Vi misslyckades första gången men lyckades nästa gång."
    ],
    "related": [
      "misslyckas"
    ]
  },
  "misslyckas": {
    "opposite": "lyckas",
    "description": "Lyckas betyder att nå sitt mål. Misslyckas betyder att inte nå sitt mål.",
    "examples": [
      "Hon lyckades med uppgiften efter att först ha misslyckats.",
      "Vi misslyckades första gången men lyckades nästa gång."
    ],
    "related": [
      "lyckas"
    ]
  },
  "bygga": {
    "opposite": "riva",
    "description": "Bygga betyder att sätta ihop något, till exempel ett hus. Riva betyder här att ta ner det som har byggts.",
    "examples": [
      "De ska bygga en ny bro och riva den gamla.",
      "Först rev de muren. Sedan byggde de en ny."
    ],
    "related": [
      "riva"
    ]
  },
  "riva": {
    "opposite": "bygga",
    "description": "Bygga betyder att sätta ihop något, till exempel ett hus. Riva betyder här att ta ner det som har byggts.",
    "examples": [
      "De ska bygga en ny bro och riva den gamla.",
      "Först rev de muren. Sedan byggde de en ny."
    ],
    "related": [
      "bygga"
    ]
  },
  "aktiv": {
    "opposite": "passiv",
    "description": "Aktiv betyder här att vara med och göra något. Passiv betyder att mest vänta eller se på.",
    "examples": [
      "Hon var aktiv på mötet och gav förslag. Han var passiv och lyssnade.",
      "En aktiv spelare deltar i spelet. En passiv spelare står mest stilla."
    ],
    "related": [
      "passiv"
    ]
  },
  "passiv": {
    "opposite": "aktiv",
    "description": "Aktiv betyder här att vara med och göra något. Passiv betyder att mest vänta eller se på.",
    "examples": [
      "Hon var aktiv på mötet och gav förslag. Han var passiv och lyssnade.",
      "En aktiv spelare deltar i spelet. En passiv spelare står mest stilla."
    ],
    "related": [
      "aktiv"
    ]
  },
  "positiv": {
    "opposite": "negativ",
    "description": "Positiv och negativ beskriver här vad någon tycker om något.",
    "examples": [
      "Hon var positiv till förslaget, men han var negativ.",
      "Jag var negativ till planen först men blev positiv när jag fick veta mer."
    ],
    "related": [
      "negativ"
    ]
  },
  "negativ": {
    "opposite": "positiv",
    "description": "Positiv och negativ beskriver här vad någon tycker om något.",
    "examples": [
      "Hon var positiv till förslaget, men han var negativ.",
      "Jag var negativ till planen först men blev positiv när jag fick veta mer."
    ],
    "related": [
      "positiv"
    ]
  },
  "närvarande": {
    "opposite": "frånvarande",
    "description": "Närvarande betyder att vara på plats. Frånvarande betyder att inte vara där.",
    "examples": [
      "De flesta elever var närvarande, men två var frånvarande.",
      "Hon var frånvarande på måndagen och närvarande på tisdagen."
    ],
    "related": [
      "frånvarande"
    ]
  },
  "frånvarande": {
    "opposite": "närvarande",
    "description": "Närvarande betyder att vara på plats. Frånvarande betyder att inte vara där.",
    "examples": [
      "De flesta elever var närvarande, men två var frånvarande.",
      "Hon var frånvarande på måndagen och närvarande på tisdagen."
    ],
    "related": [
      "närvarande"
    ]
  },
  "många": {
    "opposite": "få",
    "description": "Många och få beskriver ett stort eller litet antal.",
    "examples": [
      "Det fanns många äpplen och få päron.",
      "Många kom till festen, men få stannade till slutet."
    ],
    "related": [
      "få"
    ]
  },
  "få": {
    "opposite": "många",
    "description": "Många och få beskriver ett stort eller litet antal.",
    "examples": [
      "Det fanns många äpplen och få päron.",
      "Många kom till festen, men få stannade till slutet."
    ],
    "related": [
      "många"
    ]
  },
  "mer": {
    "opposite": "mindre",
    "description": "Mer och mindre beskriver en större eller mindre mängd.",
    "examples": [
      "Jag vill ha mer kaffe, men hon vill ha mindre.",
      "Hon tränar mer på sommaren och mindre på vintern."
    ],
    "related": [
      "mindre"
    ]
  },
  "mindre": {
    "opposite": "mer",
    "description": "Mer och mindre beskriver en större eller mindre mängd.",
    "examples": [
      "Jag vill ha mer kaffe, men hon vill ha mindre.",
      "Hon tränar mer på sommaren och mindre på vintern."
    ],
    "related": [
      "mer"
    ]
  },
  "alltid": {
    "opposite": "aldrig",
    "description": "Alltid betyder varje gång. Aldrig betyder inte en enda gång.",
    "examples": [
      "Hon låser alltid dörren och lämnar den aldrig olåst.",
      "Han tar alltid bussen till jobbet och kör aldrig bil dit."
    ],
    "related": [
      "aldrig"
    ]
  },
  "aldrig": {
    "opposite": "alltid",
    "description": "Alltid betyder varje gång. Aldrig betyder inte en enda gång.",
    "examples": [
      "Hon låser alltid dörren och lämnar den aldrig olåst.",
      "Han tar alltid bussen till jobbet och kör aldrig bil dit."
    ],
    "related": [
      "alltid"
    ]
  },
  "hata": {
    "opposite": "älska",
    "description": "Hata betyder att känna stark motvilja. Älska betyder att tycka mycket om någon eller något.",
    "examples": [
      "Jag älskar den här låten, men min bror hatar den.",
      "Hon älskar att simma men hatar att frysa."
    ],
    "related": [
      "älska"
    ]
  },
  "älska": {
    "opposite": "hata",
    "description": "Hata betyder att känna stark motvilja. Älska betyder att tycka mycket om någon eller något.",
    "examples": [
      "Jag älskar den här låten, men min bror hatar den.",
      "Hon älskar att simma men hatar att frysa."
    ],
    "related": [
      "hata"
    ]
  },
  "ordning": {
    "opposite": "oordning",
    "description": "Ordning betyder att saker ligger där de ska. Oordning betyder att saker ligger huller om buller.",
    "examples": [
      "Det var oordning på skrivbordet före städningen och ordning efteråt.",
      "Hon gillar ordning i köket men har ofta oordning i garderoben."
    ],
    "related": [
      "oordning"
    ]
  },
  "oordning": {
    "opposite": "ordning",
    "description": "Ordning betyder att saker ligger där de ska. Oordning betyder att saker ligger huller om buller.",
    "examples": [
      "Det var oordning på skrivbordet före städningen och ordning efteråt.",
      "Hon gillar ordning i köket men har ofta oordning i garderoben."
    ],
    "related": [
      "ordning"
    ]
  },
  "irrelevant": {
    "opposite": "relevant",
    "description": "Relevant betyder att något hör till saken. Irrelevant betyder att det inte gör det.",
    "examples": [
      "Frågan om priset är relevant, men frågan om färgen är irrelevant här.",
      "Läraren bad oss ta med relevant information och lämna bort det som var irrelevant."
    ],
    "related": [
      "relevant"
    ]
  },
  "relevant": {
    "opposite": "irrelevant",
    "description": "Relevant betyder att något hör till saken. Irrelevant betyder att det inte gör det.",
    "examples": [
      "Frågan om priset är relevant, men frågan om färgen är irrelevant här.",
      "Läraren bad oss ta med relevant information och lämna bort det som var irrelevant."
    ],
    "related": [
      "irrelevant"
    ]
  },
  "modern": {
    "opposite": "omodern",
    "description": "Modern betyder att något passar vår tid. Omodern betyder att det upplevs som gammaldags.",
    "examples": [
      "Den nya datorn är modern, men den gamla modellen är omodern.",
      "Hon bytte ut den omoderna lampan mot en modern."
    ],
    "related": [
      "omodern"
    ]
  },
  "omodern": {
    "opposite": "modern",
    "description": "Modern betyder att något passar vår tid. Omodern betyder att det upplevs som gammaldags.",
    "examples": [
      "Den nya datorn är modern, men den gamla modellen är omodern.",
      "Hon bytte ut den omoderna lampan mot en modern."
    ],
    "related": [
      "modern"
    ]
  },
  "oändlig": {
    "opposite": "ändlig",
    "description": "Ändlig betyder att något har ett slut. Oändlig betyder att det saknar slut.",
    "examples": [
      "Resan var ändlig, även om den kändes oändlig.",
      "En vecka är ändlig, men väntan kan kännas oändlig."
    ],
    "related": [
      "ändlig"
    ]
  },
  "ändlig": {
    "opposite": "oändlig",
    "description": "Ändlig betyder att något har ett slut. Oändlig betyder att det saknar slut.",
    "examples": [
      "Resan var ändlig, även om den kändes oändlig.",
      "En vecka är ändlig, men väntan kan kännas oändlig."
    ],
    "related": [
      "oändlig"
    ]
  },
  "begriplig": {
    "opposite": "obegriplig",
    "description": "Begriplig betyder lätt att förstå. Obegriplig betyder svår att förstå.",
    "examples": [
      "Förklaringen blev begriplig när läraren ritade en bild.",
      "Texten var obegriplig för mig först men begriplig efter genomgången."
    ],
    "related": [
      "obegriplig"
    ]
  },
  "obegriplig": {
    "opposite": "begriplig",
    "description": "Begriplig betyder lätt att förstå. Obegriplig betyder svår att förstå.",
    "examples": [
      "Förklaringen blev begriplig när läraren ritade en bild.",
      "Texten var obegriplig för mig först men begriplig efter genomgången."
    ],
    "related": [
      "begriplig"
    ]
  },
  "behaglig": {
    "opposite": "obehaglig",
    "description": "Behaglig betyder att något känns skönt. Obehaglig betyder att det känns otrevligt.",
    "examples": [
      "Det var behagligt varmt inne och obehagligt kallt ute.",
      "Doften var behaglig, men ljudet var obehagligt."
    ],
    "related": [
      "obehaglig"
    ]
  },
  "obehaglig": {
    "opposite": "behaglig",
    "description": "Behaglig betyder att något känns skönt. Obehaglig betyder att det känns otrevligt.",
    "examples": [
      "Det var behagligt varmt inne och obehagligt kallt ute.",
      "Doften var behaglig, men ljudet var obehagligt."
    ],
    "related": [
      "behaglig"
    ]
  },
  "jämn": {
    "opposite": "ojämn",
    "description": "Jämn betyder här slät eller utan stora skillnader. Ojämn betyder att ytan eller nivån varierar.",
    "examples": [
      "Vägen var jämn i början och ojämn längre fram.",
      "Bordet stod stadigt på det jämna golvet men vickade på det ojämna."
    ],
    "related": [
      "ojämn"
    ]
  },
  "ojämn": {
    "opposite": "jämn",
    "description": "Jämn betyder här slät eller utan stora skillnader. Ojämn betyder att ytan eller nivån varierar.",
    "examples": [
      "Vägen var jämn i början och ojämn längre fram.",
      "Bordet stod stadigt på det jämna golvet men vickade på det ojämna."
    ],
    "related": [
      "jämn"
    ]
  },
  "oviktig": {
    "opposite": "viktig",
    "description": "Viktig betyder att något spelar stor roll. Oviktig betyder att det inte spelar stor roll.",
    "examples": [
      "Det är viktigt att komma i tid, men färgen på pennan är oviktig.",
      "Hon lade de viktiga pappren överst och de oviktiga underst."
    ],
    "related": [
      "viktig"
    ]
  },
  "viktig": {
    "opposite": "oviktig",
    "description": "Viktig betyder att något spelar stor roll. Oviktig betyder att det inte spelar stor roll.",
    "examples": [
      "Det är viktigt att komma i tid, men färgen på pennan är oviktig.",
      "Hon lade de viktiga pappren överst och de oviktiga underst."
    ],
    "related": [
      "oviktig"
    ]
  },
  "möjlig": {
    "opposite": "omöjlig",
    "description": "Möjlig betyder att något går att göra. Omöjlig betyder att det inte går.",
    "examples": [
      "Det är möjligt att gå till skolan, men omöjligt att gå genom den stängda dörren.",
      "Uppgiften såg omöjlig ut först men blev möjlig med hjälp."
    ],
    "related": [
      "omöjlig"
    ]
  },
  "omöjlig": {
    "opposite": "möjlig",
    "description": "Möjlig betyder att något går att göra. Omöjlig betyder att det inte går.",
    "examples": [
      "Det är möjligt att gå till skolan, men omöjligt att gå genom den stängda dörren.",
      "Uppgiften såg omöjlig ut först men blev möjlig med hjälp."
    ],
    "related": [
      "möjlig"
    ]
  },
  "opålitlig": {
    "opposite": "pålitlig",
    "description": "Pålitlig betyder att man kan lita på någon eller något. Opålitlig betyder att man inte kan det.",
    "examples": [
      "Den gamla klockan var opålitlig och gick ofta fel.",
      "Vi valde en pålitlig cykel i stället för en opålitlig."
    ],
    "related": [
      "pålitlig"
    ]
  },
  "pålitlig": {
    "opposite": "opålitlig",
    "description": "Pålitlig betyder att man kan lita på någon eller något. Opålitlig betyder att man inte kan det.",
    "examples": [
      "Den gamla klockan var opålitlig och gick ofta fel.",
      "Vi valde en pålitlig cykel i stället för en opålitlig."
    ],
    "related": [
      "opålitlig"
    ]
  },
  "oärlig": {
    "opposite": "ärlig",
    "description": "Ärlig betyder att säga sanningen. Oärlig betyder att inte göra det.",
    "examples": [
      "Hon var ärlig och berättade vad som hänt.",
      "Det var oärligt att dölja felet, så han valde att vara ärlig."
    ],
    "related": [
      "ärlig"
    ]
  },
  "ärlig": {
    "opposite": "oärlig",
    "description": "Ärlig betyder att säga sanningen. Oärlig betyder att inte göra det.",
    "examples": [
      "Hon var ärlig och berättade vad som hänt.",
      "Det var oärligt att dölja felet, så han valde att vara ärlig."
    ],
    "related": [
      "oärlig"
    ]
  },
  "ofullständig": {
    "opposite": "fullständig",
    "description": "Fullständig betyder att alla delar finns med. Ofullständig betyder att något saknas.",
    "examples": [
      "Listan var ofullständig tills vi lade till det sista namnet.",
      "En fullständig adress har gatunamn och nummer; en ofullständig adress kan sakna numret."
    ],
    "related": [
      "fullständig"
    ]
  },
  "fullständig": {
    "opposite": "ofullständig",
    "description": "Fullständig betyder att alla delar finns med. Ofullständig betyder att något saknas.",
    "examples": [
      "Listan var ofullständig tills vi lade till det sista namnet.",
      "En fullständig adress har gatunamn och nummer; en ofullständig adress kan sakna numret."
    ],
    "related": [
      "ofullständig"
    ]
  },
  "farlig": {
    "opposite": "ofarlig",
    "description": "Farlig betyder att något kan skada. Ofarlig betyder att det inte väntas skada.",
    "examples": [
      "Det är farligt att röra en het spis, men ofarligt att röra en kall tallrik.",
      "Ett vasst glas kan vara farligt, men en mjuk kudde är ofarlig."
    ],
    "related": [
      "ofarlig"
    ]
  },
  "ofarlig": {
    "opposite": "farlig",
    "description": "Farlig betyder att något kan skada. Ofarlig betyder att det inte väntas skada.",
    "examples": [
      "Det är farligt att röra en het spis, men ofarligt att röra en kall tallrik.",
      "Ett vasst glas kan vara farligt, men en mjuk kudde är ofarlig."
    ],
    "related": [
      "farlig"
    ]
  },
  "osannolik": {
    "opposite": "sannolik",
    "description": "Sannolik betyder att något troligen händer. Osannolik betyder att det troligen inte händer.",
    "examples": [
      "Det är sannolikt att det regnar när himlen är mörk.",
      "Det är osannolikt att vi hinner om tåget redan har gått."
    ],
    "related": [
      "sannolik"
    ]
  },
  "sannolik": {
    "opposite": "osannolik",
    "description": "Sannolik betyder att något troligen händer. Osannolik betyder att det troligen inte händer.",
    "examples": [
      "Det är sannolikt att det regnar när himlen är mörk.",
      "Det är osannolikt att vi hinner om tåget redan har gått."
    ],
    "related": [
      "osannolik"
    ]
  },
  "färdig": {
    "opposite": "ofärdig",
    "description": "Färdig betyder att något är klart. Ofärdig betyder att det ännu inte är klart.",
    "examples": [
      "Maten var ofärdig när gästerna kom men färdig en stund senare.",
      "Hon visade den färdiga teckningen och sparade den ofärdiga."
    ],
    "related": [
      "ofärdig"
    ]
  },
  "ofärdig": {
    "opposite": "färdig",
    "description": "Färdig betyder att något är klart. Ofärdig betyder att det ännu inte är klart.",
    "examples": [
      "Maten var ofärdig när gästerna kom men färdig en stund senare.",
      "Hon visade den färdiga teckningen och sparade den ofärdiga."
    ],
    "related": [
      "färdig"
    ]
  },
  "orättvis": {
    "opposite": "rättvis",
    "description": "Rättvis betyder att behandla människor på ett rimligt och lika sätt. Orättvis betyder att inte göra det.",
    "examples": [
      "Det var rättvist att alla fick samma chans.",
      "Hon tyckte att regeln var orättvis eftersom bara några fick vara med."
    ],
    "related": [
      "rättvis"
    ]
  },
  "rättvis": {
    "opposite": "orättvis",
    "description": "Rättvis betyder att behandla människor på ett rimligt och lika sätt. Orättvis betyder att inte göra det.",
    "examples": [
      "Det var rättvist att alla fick samma chans.",
      "Hon tyckte att regeln var orättvis eftersom bara några fick vara med."
    ],
    "related": [
      "orättvis"
    ]
  },
  "oskyldig": {
    "opposite": "skyldig",
    "description": "Skyldig betyder här att ha gjort det som någon anklagas för. Oskyldig betyder att inte ha gjort det.",
    "examples": [
      "Hon var oskyldig och hade inte tagit boken.",
      "Den skyldige erkände, och den oskyldige fick en ursäkt."
    ],
    "related": [
      "skyldig"
    ]
  },
  "skyldig": {
    "opposite": "oskyldig",
    "description": "Skyldig betyder här att ha gjort det som någon anklagas för. Oskyldig betyder att inte ha gjort det.",
    "examples": [
      "Hon var oskyldig och hade inte tagit boken.",
      "Den skyldige erkände, och den oskyldige fick en ursäkt."
    ],
    "related": [
      "oskyldig"
    ]
  },
  "ovänlig": {
    "opposite": "vänlig",
    "description": "Vänlig betyder att vara trevlig mot andra. Ovänlig betyder att vara otrevlig.",
    "examples": [
      "Hon hälsade vänligt på den nya eleven.",
      "Hans ovänliga svar gjorde henne ledsen, så han försökte svara vänligt nästa gång."
    ],
    "related": [
      "vänlig"
    ]
  },
  "vänlig": {
    "opposite": "ovänlig",
    "description": "Vänlig betyder att vara trevlig mot andra. Ovänlig betyder att vara otrevlig.",
    "examples": [
      "Hon hälsade vänligt på den nya eleven.",
      "Hans ovänliga svar gjorde henne ledsen, så han försökte svara vänligt nästa gång."
    ],
    "related": [
      "ovänlig"
    ]
  },
  "osynlig": {
    "opposite": "synlig",
    "description": "Synlig betyder att något går att se. Osynlig betyder att det inte går att se.",
    "examples": [
      "Månen var synlig i går men osynlig bakom molnen i dag.",
      "Bläcket blev osynligt när det torkade."
    ],
    "related": [
      "synlig"
    ]
  },
  "synlig": {
    "opposite": "osynlig",
    "description": "Synlig betyder att något går att se. Osynlig betyder att det inte går att se.",
    "examples": [
      "Månen var synlig i går men osynlig bakom molnen i dag.",
      "Bläcket blev osynligt när det torkade."
    ],
    "related": [
      "osynlig"
    ]
  },
  "tacksam": {
    "opposite": "otacksam",
    "description": "Tacksam betyder att uppskatta hjälp eller en gåva. Otacksam betyder att inte visa uppskattning.",
    "examples": [
      "Hon var tacksam för hjälpen och tackade direkt.",
      "Hans otacksamma svar gjorde vännen ledsen, så han bad om ursäkt."
    ],
    "related": [
      "otacksam"
    ]
  },
  "otacksam": {
    "opposite": "tacksam",
    "description": "Tacksam betyder att uppskatta hjälp eller en gåva. Otacksam betyder att inte visa uppskattning.",
    "examples": [
      "Hon var tacksam för hjälpen och tackade direkt.",
      "Hans otacksamma svar gjorde vännen ledsen, så han bad om ursäkt."
    ],
    "related": [
      "tacksam"
    ]
  },
  "sams": {
    "opposite": "osams",
    "description": "Sams betyder att man kommer överens. Osams betyder att man har bråkat eller inte kommer överens.",
    "examples": [
      "Barnen var osams om leksaken men blev sams igen.",
      "Vi var sams i går och är fortfarande sams i dag."
    ],
    "related": [
      "osams"
    ]
  },
  "osams": {
    "opposite": "sams",
    "description": "Sams betyder att man kommer överens. Osams betyder att man har bråkat eller inte kommer överens.",
    "examples": [
      "Barnen var osams om leksaken men blev sams igen.",
      "Vi var sams i går och är fortfarande sams i dag."
    ],
    "related": [
      "sams"
    ]
  },
  "uppmärksam": {
    "opposite": "ouppmärksam",
    "description": "Uppmärksam betyder att man märker vad som händer. Ouppmärksam betyder att man missar det.",
    "examples": [
      "Den uppmärksamma eleven hörde frågan direkt.",
      "Jag var ouppmärksam och missade när bussen kom."
    ],
    "related": [
      "ouppmärksam"
    ]
  },
  "ouppmärksam": {
    "opposite": "uppmärksam",
    "description": "Uppmärksam betyder att man märker vad som händer. Ouppmärksam betyder att man missar det.",
    "examples": [
      "Den uppmärksamma eleven hörde frågan direkt.",
      "Jag var ouppmärksam och missade när bussen kom."
    ],
    "related": [
      "uppmärksam"
    ]
  },
  "skicklig": {
    "opposite": "oskicklig",
    "description": "Skicklig betyder att någon är bra på något. Oskicklig betyder att någon saknar den förmågan.",
    "examples": [
      "Hon är skicklig på att laga cyklar.",
      "Jag var oskicklig i början men blev skickligare med övning."
    ],
    "related": [
      "oskicklig"
    ]
  },
  "oskicklig": {
    "opposite": "skicklig",
    "description": "Skicklig betyder att någon är bra på något. Oskicklig betyder att någon saknar den förmågan.",
    "examples": [
      "Hon är skicklig på att laga cyklar.",
      "Jag var oskicklig i början men blev skickligare med övning."
    ],
    "related": [
      "skicklig"
    ]
  },
  "gilla": {
    "opposite": "ogilla",
    "description": "Gilla betyder att tycka om något. Ogilla betyder att inte tycka om det.",
    "examples": [
      "Jag gillar te men ogillar kaffe.",
      "Hon ogillade filmen, men hennes vän gillade den."
    ],
    "related": [
      "ogilla"
    ]
  },
  "ogilla": {
    "opposite": "gilla",
    "description": "Gilla betyder att tycka om något. Ogilla betyder att inte tycka om det.",
    "examples": [
      "Jag gillar te men ogillar kaffe.",
      "Hon ogillade filmen, men hennes vän gillade den."
    ],
    "related": [
      "gilla"
    ]
  },
  "laglig": {
    "opposite": "olaglig",
    "description": "Laglig betyder att något är tillåtet enligt lagen. Olaglig betyder att det bryter mot lagen.",
    "examples": [
      "En laglig handling följer lagen; en olaglig gör inte det.",
      "Domaren avgjorde om handlingen var laglig eller olaglig."
    ],
    "related": [
      "olaglig"
    ]
  },
  "olaglig": {
    "opposite": "laglig",
    "description": "Laglig betyder att något är tillåtet enligt lagen. Olaglig betyder att det bryter mot lagen.",
    "examples": [
      "En laglig handling följer lagen; en olaglig gör inte det.",
      "Domaren avgjorde om handlingen var laglig eller olaglig."
    ],
    "related": [
      "laglig"
    ]
  },
  "moralisk": {
    "opposite": "omoralisk",
    "description": "Moralisk betyder här att något anses rätt. Omoralisk betyder att det anses fel.",
    "examples": [
      "Hon tyckte att det var moraliskt att hjälpa grannen.",
      "Det vore omoraliskt att lura någon som litar på dig."
    ],
    "related": [
      "omoralisk"
    ]
  },
  "omoralisk": {
    "opposite": "moralisk",
    "description": "Moralisk betyder här att något anses rätt. Omoralisk betyder att det anses fel.",
    "examples": [
      "Hon tyckte att det var moraliskt att hjälpa grannen.",
      "Det vore omoraliskt att lura någon som litar på dig."
    ],
    "related": [
      "moralisk"
    ]
  },
  "förutsägbar": {
    "opposite": "oförutsägbar",
    "description": "Förutsägbar betyder att det är lätt att gissa vad som händer. Oförutsägbar betyder att det är svårt.",
    "examples": [
      "Filmens slut var förutsägbart; vi gissade det tidigt.",
      "Vädret var oförutsägbart och ändrades flera gånger."
    ],
    "related": [
      "oförutsägbar"
    ]
  },
  "oförutsägbar": {
    "opposite": "förutsägbar",
    "description": "Förutsägbar betyder att det är lätt att gissa vad som händer. Oförutsägbar betyder att det är svårt.",
    "examples": [
      "Filmens slut var förutsägbart; vi gissade det tidigt.",
      "Vädret var oförutsägbart och ändrades flera gånger."
    ],
    "related": [
      "förutsägbar"
    ]
  },
  "tillräcklig": {
    "opposite": "otillräcklig",
    "description": "Tillräcklig betyder att något räcker. Otillräcklig betyder att det inte räcker.",
    "examples": [
      "En liter vatten var tillräckligt för maten.",
      "Tiden var otillräcklig, så vi hann inte bli klara."
    ],
    "related": [
      "otillräcklig"
    ]
  },
  "otillräcklig": {
    "opposite": "tillräcklig",
    "description": "Tillräcklig betyder att något räcker. Otillräcklig betyder att det inte räcker.",
    "examples": [
      "En liter vatten var tillräckligt för maten.",
      "Tiden var otillräcklig, så vi hann inte bli klara."
    ],
    "related": [
      "tillräcklig"
    ]
  },
  "sårbar": {
    "opposite": "osårbar",
    "description": "Sårbar betyder att någon eller något lätt kan skadas. Osårbar betyder att det inte kan skadas.",
    "examples": [
      "Den lilla plantan är sårbar i kylan.",
      "Hjälten i sagan var osårbar och kunde inte skadas."
    ],
    "related": [
      "osårbar"
    ]
  },
  "osårbar": {
    "opposite": "sårbar",
    "description": "Sårbar betyder att någon eller något lätt kan skadas. Osårbar betyder att det inte kan skadas.",
    "examples": [
      "Den lilla plantan är sårbar i kylan.",
      "Hjälten i sagan var osårbar och kunde inte skadas."
    ],
    "related": [
      "sårbar"
    ]
  },
  "användbar": {
    "opposite": "oanvändbar",
    "description": "Användbar betyder att något går att använda. Oanvändbar betyder att det inte gör det.",
    "examples": [
      "Den hela stolen är användbar, men den trasiga är oanvändbar.",
      "Kartans gamla uppgifter gjorde den oanvändbar."
    ],
    "related": [
      "oanvändbar"
    ]
  },
  "oanvändbar": {
    "opposite": "användbar",
    "description": "Användbar betyder att något går att använda. Oanvändbar betyder att det inte gör det.",
    "examples": [
      "Den hela stolen är användbar, men den trasiga är oanvändbar.",
      "Kartans gamla uppgifter gjorde den oanvändbar."
    ],
    "related": [
      "användbar"
    ]
  },
  "giltig": {
    "opposite": "ogiltig",
    "description": "Giltig betyder att något fortfarande gäller. Ogiltig betyder att det inte gäller.",
    "examples": [
      "Biljetten är giltig i dag men ogiltig i morgon.",
      "Mitt gamla kort var ogiltigt, så jag använde det nya giltiga kortet."
    ],
    "related": [
      "ogiltig"
    ]
  },
  "ogiltig": {
    "opposite": "giltig",
    "description": "Giltig betyder att något fortfarande gäller. Ogiltig betyder att det inte gäller.",
    "examples": [
      "Biljetten är giltig i dag men ogiltig i morgon.",
      "Mitt gamla kort var ogiltigt, så jag använde det nya giltiga kortet."
    ],
    "related": [
      "giltig"
    ]
  },
  "intresserad": {
    "opposite": "ointresserad",
    "description": "Intresserad betyder att vilja veta mer. Ointresserad betyder att inte vilja det.",
    "examples": [
      "Hon var intresserad av boken och läste vidare.",
      "Han var ointresserad av fotboll men intresserad av musik."
    ],
    "related": [
      "ointresserad"
    ]
  },
  "ointresserad": {
    "opposite": "intresserad",
    "description": "Intresserad betyder att vilja veta mer. Ointresserad betyder att inte vilja det.",
    "examples": [
      "Hon var intresserad av boken och läste vidare.",
      "Han var ointresserad av fotboll men intresserad av musik."
    ],
    "related": [
      "intresserad"
    ]
  },
  "symmetrisk": {
    "opposite": "osymmetrisk",
    "description": "Symmetrisk betyder att två sidor har samma form. Osymmetrisk betyder att de skiljer sig åt.",
    "examples": [
      "Fjärilens vingar ser symmetriska ut.",
      "Teckningen var osymmetrisk eftersom ena sidan var större."
    ],
    "related": [
      "osymmetrisk"
    ]
  },
  "osymmetrisk": {
    "opposite": "symmetrisk",
    "description": "Symmetrisk betyder att två sidor har samma form. Osymmetrisk betyder att de skiljer sig åt.",
    "examples": [
      "Fjärilens vingar ser symmetriska ut.",
      "Teckningen var osymmetrisk eftersom ena sidan var större."
    ],
    "related": [
      "symmetrisk"
    ]
  },
  "artig": {
    "opposite": "oartig",
    "description": "Artig betyder att visa hänsyn och gott uppförande. Oartig betyder att inte göra det.",
    "examples": [
      "Det är artigt att säga tack.",
      "Han var oartig när han avbröt henne, men bad sedan artigt om ursäkt."
    ],
    "related": [
      "oartig"
    ]
  },
  "oartig": {
    "opposite": "artig",
    "description": "Artig betyder att visa hänsyn och gott uppförande. Oartig betyder att inte göra det.",
    "examples": [
      "Det är artigt att säga tack.",
      "Han var oartig när han avbröt henne, men bad sedan artigt om ursäkt."
    ],
    "related": [
      "artig"
    ]
  },
  "saltad": {
    "opposite": "osaltad",
    "description": "Saltad betyder att salt har tillsatts. Osaltad betyder att inget salt har tillsatts.",
    "examples": [
      "Jag valde osaltat smör i stället för saltat.",
      "Nötterna i den blå påsen är saltade och de andra är osaltade."
    ],
    "related": [
      "osaltad"
    ]
  },
  "osaltad": {
    "opposite": "saltad",
    "description": "Saltad betyder att salt har tillsatts. Osaltad betyder att inget salt har tillsatts.",
    "examples": [
      "Jag valde osaltat smör i stället för saltat.",
      "Nötterna i den blå påsen är saltade och de andra är osaltade."
    ],
    "related": [
      "saltad"
    ]
  },
  "översatt": {
    "opposite": "oöversatt",
    "description": "Översatt betyder att texten finns på ett annat språk. Oöversatt betyder att den fortfarande är på originalspråket.",
    "examples": [
      "Boken var översatt till svenska, men brevet var oöversatt.",
      "Den översatta texten var lätt att läsa; den oöversatta var svårare."
    ],
    "related": [
      "oöversatt"
    ]
  },
  "oöversatt": {
    "opposite": "översatt",
    "description": "Översatt betyder att texten finns på ett annat språk. Oöversatt betyder att den fortfarande är på originalspråket.",
    "examples": [
      "Boken var översatt till svenska, men brevet var oöversatt.",
      "Den översatta texten var lätt att läsa; den oöversatta var svårare."
    ],
    "related": [
      "översatt"
    ]
  },
  "gynnsam": {
    "opposite": "ogynnsam",
    "description": "Gynnsam betyder att något hjälper ett resultat. Ogynnsam betyder att det gör resultatet svårare.",
    "examples": [
      "Vädret var gynnsamt för sådden på våren.",
      "Den långa torkan gav växterna ogynnsamma villkor."
    ],
    "related": [
      "ogynnsam"
    ]
  },
  "ogynnsam": {
    "opposite": "gynnsam",
    "description": "Gynnsam betyder att något hjälper ett resultat. Ogynnsam betyder att det gör resultatet svårare.",
    "examples": [
      "Vädret var gynnsamt för sådden på våren.",
      "Den långa torkan gav växterna ogynnsamma villkor."
    ],
    "related": [
      "gynnsam"
    ]
  },
  "konsekvent": {
    "opposite": "inkonsekvent",
    "description": "Konsekvent betyder att göra på samma sätt varje gång. Inkonsekvent betyder att man ändrar sig utan tydlig anledning.",
    "examples": [
      "Hon var konsekvent och följde samma regel varje dag.",
      "Regeln blev inkonsekvent när den bara gällde vissa elever."
    ],
    "related": [
      "inkonsekvent"
    ]
  },
  "inkonsekvent": {
    "opposite": "konsekvent",
    "description": "Konsekvent betyder att göra på samma sätt varje gång. Inkonsekvent betyder att man ändrar sig utan tydlig anledning.",
    "examples": [
      "Hon var konsekvent och följde samma regel varje dag.",
      "Regeln blev inkonsekvent när den bara gällde vissa elever."
    ],
    "related": [
      "konsekvent"
    ]
  },
  "åtkomlig": {
    "opposite": "oåtkomlig",
    "description": "Åtkomlig betyder att man kan nå något. Oåtkomlig betyder att man inte kan nå det.",
    "examples": [
      "Boken på den låga hyllan är åtkomlig för barnet.",
      "Boken högst upp är oåtkomlig utan en stege."
    ],
    "related": [
      "oåtkomlig"
    ]
  },
  "oåtkomlig": {
    "opposite": "åtkomlig",
    "description": "Åtkomlig betyder att man kan nå något. Oåtkomlig betyder att man inte kan nå det.",
    "examples": [
      "Boken på den låga hyllan är åtkomlig för barnet.",
      "Boken högst upp är oåtkomlig utan en stege."
    ],
    "related": [
      "åtkomlig"
    ]
  },
  "behörig": {
    "opposite": "obehörig",
    "description": "Behörig betyder att man har rätt till något, till exempel att gå in. Obehörig betyder att man saknar den rätten.",
    "examples": [
      "Bara behörig personal får gå in i rummet.",
      "En obehörig person försökte öppna dörren men kom inte in."
    ],
    "related": [
      "obehörig"
    ]
  },
  "obehörig": {
    "opposite": "behörig",
    "description": "Behörig betyder att man har rätt till något, till exempel att gå in. Obehörig betyder att man saknar den rätten.",
    "examples": [
      "Bara behörig personal får gå in i rummet.",
      "En obehörig person försökte öppna dörren men kom inte in."
    ],
    "related": [
      "behörig"
    ]
  },
  "avsiktlig": {
    "opposite": "oavsiktlig",
    "description": "Avsiktlig betyder att något görs med mening. Oavsiktlig betyder att det sker utan mening.",
    "examples": [
      "Hon välte glaset av misstag; det var oavsiktligt.",
      "Han knackade avsiktligt på dörren för att väcka sin vän."
    ],
    "related": [
      "oavsiktlig"
    ]
  },
  "oavsiktlig": {
    "opposite": "avsiktlig",
    "description": "Avsiktlig betyder att något görs med mening. Oavsiktlig betyder att det sker utan mening.",
    "examples": [
      "Hon välte glaset av misstag; det var oavsiktligt.",
      "Han knackade avsiktligt på dörren för att väcka sin vän."
    ],
    "related": [
      "avsiktlig"
    ]
  },
  "tillåten": {
    "opposite": "otillåten",
    "description": "Tillåten betyder att något är tillåtet. Otillåten betyder att det inte är tillåtet.",
    "examples": [
      "På vår gård är cykling tillåten på vägen men otillåten på gångbanan.",
      "Det var tillåtet att ta bilder, men otillåtet att använda blixt."
    ],
    "related": [
      "otillåten"
    ]
  },
  "otillåten": {
    "opposite": "tillåten",
    "description": "Tillåten betyder att något är tillåtet. Otillåten betyder att det inte är tillåtet.",
    "examples": [
      "På vår gård är cykling tillåten på vägen men otillåten på gångbanan.",
      "Det var tillåtet att ta bilder, men otillåtet att använda blixt."
    ],
    "related": [
      "tillåten"
    ]
  },
  "beväpnad": {
    "opposite": "obeväpnad",
    "description": "Beväpnad betyder att någon bär ett vapen. Obeväpnad betyder att personen inte gör det.",
    "examples": [
      "Vakten i filmen var beväpnad, men besökaren var obeväpnad.",
      "I sagan var riddaren beväpnad, men bybon var obeväpnad."
    ],
    "related": [
      "obeväpnad"
    ]
  },
  "obeväpnad": {
    "opposite": "beväpnad",
    "description": "Beväpnad betyder att någon bär ett vapen. Obeväpnad betyder att personen inte gör det.",
    "examples": [
      "Vakten i filmen var beväpnad, men besökaren var obeväpnad.",
      "I sagan var riddaren beväpnad, men bybon var obeväpnad."
    ],
    "related": [
      "beväpnad"
    ]
  },
  "dödlig": {
    "opposite": "odödlig",
    "description": "Dödlig betyder att kunna dö. Odödlig betyder att aldrig dö, som i en saga.",
    "examples": [
      "Människor är dödliga, men gudarna i sagan är odödliga.",
      "I berättelsen var hjälten odödlig, medan hans vän var dödlig."
    ],
    "related": [
      "odödlig"
    ]
  },
  "odödlig": {
    "opposite": "dödlig",
    "description": "Dödlig betyder att kunna dö. Odödlig betyder att aldrig dö, som i en saga.",
    "examples": [
      "Människor är dödliga, men gudarna i sagan är odödliga.",
      "I berättelsen var hjälten odödlig, medan hans vän var dödlig."
    ],
    "related": [
      "dödlig"
    ]
  },
  "sportslig": {
    "opposite": "osportslig",
    "description": "Sportslig betyder att spela rättvist och visa respekt. Osportslig betyder att göra tvärtom.",
    "examples": [
      "Hon var sportslig och gratulerade vinnaren.",
      "Det var osportsligt att fuska under matchen."
    ],
    "related": [
      "osportslig"
    ]
  },
  "osportslig": {
    "opposite": "sportslig",
    "description": "Sportslig betyder att spela rättvist och visa respekt. Osportslig betyder att göra tvärtom.",
    "examples": [
      "Hon var sportslig och gratulerade vinnaren.",
      "Det var osportsligt att fuska under matchen."
    ],
    "related": [
      "sportslig"
    ]
  },
  "somna": {
    "opposite": "vakna",
    "description": "Somna betyder att börja sova. Vakna betyder att sluta sova.",
    "examples": [
      "Jag somnade sent och vaknade tidigt.",
      "Barnet vaknade när klockan ringde och somnade igen."
    ],
    "related": [
      "vakna"
    ]
  },
  "vakna": {
    "opposite": "somna",
    "description": "Somna betyder att börja sova. Vakna betyder att sluta sova.",
    "examples": [
      "Jag somnade sent och vaknade tidigt.",
      "Barnet vaknade när klockan ringde och somnade igen."
    ],
    "related": [
      "somna"
    ]
  },
  "lögn": {
    "opposite": "sanning",
    "description": "En lögn är något man säger fast man vet att det inte stämmer. En sanning är något som stämmer.",
    "examples": [
      "Han berättade en lögn först men sade sanningen senare.",
      "Det är bättre att säga sanningen än att hitta på en lögn."
    ],
    "related": [
      "sanning"
    ]
  },
  "sanning": {
    "opposite": "lögn",
    "description": "En lögn är något man säger fast man vet att det inte stämmer. En sanning är något som stämmer.",
    "examples": [
      "Han berättade en lögn först men sade sanningen senare.",
      "Det är bättre att säga sanningen än att hitta på en lögn."
    ],
    "related": [
      "lögn"
    ]
  },
  "ja": {
    "opposite": "nej",
    "description": "Ja används för att säga att man håller med eller vill. Nej används för att säga att man inte vill eller inte håller med.",
    "examples": [
      "Hon svarade ja på frågan, men han svarade nej.",
      "Jag sade nej först och ja när jag hade tänkt efter."
    ],
    "related": [
      "nej"
    ]
  },
  "nej": {
    "opposite": "ja",
    "description": "Ja används för att säga att man håller med eller vill. Nej används för att säga att man inte vill eller inte håller med.",
    "examples": [
      "Hon svarade ja på frågan, men han svarade nej.",
      "Jag sade nej först och ja när jag hade tänkt efter."
    ],
    "related": [
      "ja"
    ]
  },
  "kort": {
    "opposite": "lång",
    "description": "Kort och lång kan beskriva hur lång något är.",
    "examples": [
      "Det korta repet räckte inte, så vi tog ett långt.",
      "Vägen till skolan är kort, men vägen till havet är lång."
    ],
    "related": [
      "lång"
    ]
  },
  "lång": {
    "opposite": "kort",
    "description": "Kort och lång kan beskriva hur lång något är.",
    "examples": [
      "Det korta repet räckte inte, så vi tog ett långt.",
      "Vägen till skolan är kort, men vägen till havet är lång."
    ],
    "related": [
      "kort"
    ]
  },
  "öppna": {
    "opposite": "stänga",
    "description": "Öppna betyder att göra så att man kan gå in eller se in. Stänga betyder att göra tvärtom.",
    "examples": [
      "Hon öppnade dörren när gästen kom och stängde den sedan.",
      "Vi öppnar fönstret när det är varmt och stänger det när det är kallt."
    ],
    "related": [
      "stänga"
    ]
  },
  "stänga": {
    "opposite": "öppna",
    "description": "Öppna betyder att göra så att man kan gå in eller se in. Stänga betyder att göra tvärtom.",
    "examples": [
      "Hon öppnade dörren när gästen kom och stängde den sedan.",
      "Vi öppnar fönstret när det är varmt och stänger det när det är kallt."
    ],
    "related": [
      "öppna"
    ]
  },
  "flyta": {
    "opposite": "sjunka",
    "description": "Flyta betyder att hålla sig uppe på vatten. Sjunka betyder att röra sig ner under ytan.",
    "examples": [
      "Träbiten flöt, men stenen sjönk.",
      "Båten började sjunka när den fick ett hål; tidigare flöt den."
    ],
    "related": [
      "sjunka"
    ]
  },
  "sjunka": {
    "opposite": "flyta",
    "description": "Flyta betyder att hålla sig uppe på vatten. Sjunka betyder att röra sig ner under ytan.",
    "examples": [
      "Träbiten flöt, men stenen sjönk.",
      "Båten började sjunka när den fick ett hål; tidigare flöt den."
    ],
    "related": [
      "flyta"
    ]
  },
  "sällsynt": {
    "opposite": "vanlig",
    "description": "Sällsynt betyder att något händer eller finns sällan. Vanlig betyder att det händer eller finns ofta.",
    "examples": [
      "Den här fågeln är sällsynt här, men sparvar är vanliga.",
      "En sällsynt fågel sågs i skogen, medan kråkor var vanliga."
    ],
    "related": [
      "vanlig"
    ]
  },
  "vanlig": {
    "opposite": "sällsynt",
    "description": "Sällsynt betyder att något händer eller finns sällan. Vanlig betyder att det händer eller finns ofta.",
    "examples": [
      "Den här fågeln är sällsynt här, men sparvar är vanliga.",
      "En sällsynt fågel sågs i skogen, medan kråkor var vanliga."
    ],
    "related": [
      "sällsynt"
    ]
  },
  "förbättra": {
    "opposite": "försämra",
    "description": "Förbättra betyder att göra något bättre. Försämra betyder att göra det sämre.",
    "examples": [
      "Vi förbättrade vägen genom att laga hålen.",
      "Regnet försämrade sikten, men solen förbättrade den igen."
    ],
    "related": [
      "försämra"
    ]
  },
  "försämra": {
    "opposite": "förbättra",
    "description": "Förbättra betyder att göra något bättre. Försämra betyder att göra det sämre.",
    "examples": [
      "Vi förbättrade vägen genom att laga hålen.",
      "Regnet försämrade sikten, men solen förbättrade den igen."
    ],
    "related": [
      "förbättra"
    ]
  },
  "tam": {
    "opposite": "vild",
    "description": "Tam betyder att ett djur är vant vid människor. Vild betyder att det lever fritt och inte är tamt.",
    "examples": [
      "Hunden är tam, men vargen är vild.",
      "Katten hemma är tam; katten i sagan var vild."
    ],
    "related": [
      "vild"
    ]
  },
  "vild": {
    "opposite": "tam",
    "description": "Tam betyder att ett djur är vant vid människor. Vild betyder att det lever fritt och inte är tamt.",
    "examples": [
      "Hunden är tam, men vargen är vild.",
      "Katten hemma är tam; katten i sagan var vild."
    ],
    "related": [
      "tam"
    ]
  },
  "fördel": {
    "opposite": "nackdel",
    "description": "En fördel är något bra med ett val. En nackdel är något dåligt med det.",
    "examples": [
      "En fördel med tåget är att man kan vila. En nackdel är att det kan vara sent.",
      "Vi skrev upp både fördelar och nackdelar innan vi valde."
    ],
    "related": [
      "nackdel"
    ]
  },
  "nackdel": {
    "opposite": "fördel",
    "description": "En fördel är något bra med ett val. En nackdel är något dåligt med det.",
    "examples": [
      "En fördel med tåget är att man kan vila. En nackdel är att det kan vara sent.",
      "Vi skrev upp både fördelar och nackdelar innan vi valde."
    ],
    "related": [
      "fördel"
    ]
  },
  "inkomst": {
    "opposite": "utgift",
    "description": "En inkomst är pengar som kommer in. En utgift är pengar som betalas ut.",
    "examples": [
      "Lönen är en inkomst och hyran är en utgift.",
      "Vi skrev upp varje inkomst och utgift för månaden."
    ],
    "related": [
      "utgift"
    ]
  },
  "utgift": {
    "opposite": "inkomst",
    "description": "En inkomst är pengar som kommer in. En utgift är pengar som betalas ut.",
    "examples": [
      "Lönen är en inkomst och hyran är en utgift.",
      "Vi skrev upp varje inkomst och utgift för månaden."
    ],
    "related": [
      "inkomst"
    ]
  },
  "optimist": {
    "opposite": "pessimist",
    "description": "En optimist tror ofta att det går bra. En pessimist tror oftare att det går dåligt.",
    "examples": [
      "Optimisten trodde att solen skulle komma, men pessimisten väntade regn.",
      "Hon var optimist inför resan, medan han var pessimist."
    ],
    "related": [
      "pessimist"
    ]
  },
  "pessimist": {
    "opposite": "optimist",
    "description": "En optimist tror ofta att det går bra. En pessimist tror oftare att det går dåligt.",
    "examples": [
      "Optimisten trodde att solen skulle komma, men pessimisten väntade regn.",
      "Hon var optimist inför resan, medan han var pessimist."
    ],
    "related": [
      "optimist"
    ]
  },
  "ofta": {
    "opposite": "sällan",
    "description": "Ofta betyder många gånger. Sällan betyder få gånger.",
    "examples": [
      "Jag går ofta till biblioteket men sällan till museet.",
      "Hon lagar ofta mat hemma och äter sällan ute."
    ],
    "related": [
      "sällan"
    ]
  },
  "sällan": {
    "opposite": "ofta",
    "description": "Ofta betyder många gånger. Sällan betyder få gånger.",
    "examples": [
      "Jag går ofta till biblioteket men sällan till museet.",
      "Hon lagar ofta mat hemma och äter sällan ute."
    ],
    "related": [
      "ofta"
    ]
  },
  "förenkla": {
    "opposite": "försvåra",
    "description": "Förenkla betyder att göra något lättare. Försvåra betyder att göra det svårare.",
    "examples": [
      "Den tydliga kartan förenklade resan.",
      "Regnet försvårade promenaden, men bättre skor förenklade den."
    ],
    "related": [
      "försvåra"
    ]
  },
  "försvåra": {
    "opposite": "förenkla",
    "description": "Förenkla betyder att göra något lättare. Försvåra betyder att göra det svårare.",
    "examples": [
      "Den tydliga kartan förenklade resan.",
      "Regnet försvårade promenaden, men bättre skor förenklade den."
    ],
    "related": [
      "förenkla"
    ]
  },
  "export": {
    "opposite": "import",
    "description": "Export betyder att sälja varor till andra länder. Import betyder att köpa varor från andra länder.",
    "examples": [
      "Sverige exporterar vissa varor och importerar andra.",
      "Företagets export ökade när fler länder köpte dess varor."
    ],
    "related": [
      "import"
    ]
  },
  "import": {
    "opposite": "export",
    "description": "Export betyder att sälja varor till andra länder. Import betyder att köpa varor från andra länder.",
    "examples": [
      "Sverige exporterar vissa varor och importerar andra.",
      "Företagets export ökade när fler länder köpte dess varor."
    ],
    "related": [
      "export"
    ]
  },
  "inomhus": {
    "opposite": "utomhus",
    "description": "Inomhus betyder inne i ett hus. Utomhus betyder ute.",
    "examples": [
      "Vi lekte utomhus när solen sken och inomhus när det regnade.",
      "Mötet var inomhus, men lunchen åt vi utomhus."
    ],
    "related": [
      "utomhus"
    ]
  },
  "utomhus": {
    "opposite": "inomhus",
    "description": "Inomhus betyder inne i ett hus. Utomhus betyder ute.",
    "examples": [
      "Vi lekte utomhus när solen sken och inomhus när det regnade.",
      "Mötet var inomhus, men lunchen åt vi utomhus."
    ],
    "related": [
      "inomhus"
    ]
  },
  "skriftlig": {
    "opposite": "muntlig",
    "description": "Skriftlig betyder med text. Muntlig betyder med tal.",
    "examples": [
      "Provet hade en skriftlig del och en muntlig del.",
      "Jag fick ett muntligt svar först och ett skriftligt svar senare."
    ],
    "related": [
      "muntlig"
    ]
  },
  "muntlig": {
    "opposite": "skriftlig",
    "description": "Skriftlig betyder med text. Muntlig betyder med tal.",
    "examples": [
      "Provet hade en skriftlig del och en muntlig del.",
      "Jag fick ett muntligt svar först och ett skriftligt svar senare."
    ],
    "related": [
      "skriftlig"
    ]
  },
  "plus": {
    "opposite": "minus",
    "description": "Plus används när man lägger till. Minus används när man tar bort.",
    "examples": [
      "Två plus tre blir fem, men fem minus tre blir två.",
      "Hon skrev ett plustecken i stället för ett minustecken."
    ],
    "related": [
      "minus"
    ]
  },
  "minus": {
    "opposite": "plus",
    "description": "Plus används när man lägger till. Minus används när man tar bort.",
    "examples": [
      "Två plus tre blir fem, men fem minus tre blir två.",
      "Hon skrev ett plustecken i stället för ett minustecken."
    ],
    "related": [
      "plus"
    ]
  },
  "före": {
    "opposite": "efter",
    "description": "Före betyder tidigare än något annat. Efter betyder senare än något annat.",
    "examples": [
      "Vi åt före filmen och tog en promenad efter den.",
      "Hon kom före mig och gick efter mig."
    ],
    "related": [
      "efter"
    ]
  },
  "efter": {
    "opposite": "före",
    "description": "Före betyder tidigare än något annat. Efter betyder senare än något annat.",
    "examples": [
      "Vi åt före filmen och tog en promenad efter den.",
      "Hon kom före mig och gick efter mig."
    ],
    "related": [
      "före"
    ]
  },
  "norr": {
    "opposite": "söder",
    "description": "Norr och söder är motsatta väderstreck.",
    "examples": [
      "Staden ligger norr om sjön, medan byn ligger söder om den.",
      "Vi reste norrut på morgonen och söderut på kvällen."
    ],
    "related": [
      "söder"
    ]
  },
  "söder": {
    "opposite": "norr",
    "description": "Norr och söder är motsatta väderstreck.",
    "examples": [
      "Staden ligger norr om sjön, medan byn ligger söder om den.",
      "Vi reste norrut på morgonen och söderut på kvällen."
    ],
    "related": [
      "norr"
    ]
  },
  "objektiv": {
    "opposite": "subjektiv",
    "description": "Objektiv betyder att försöka beskriva fakta utan egna åsikter. Subjektiv betyder att egna åsikter påverkar.",
    "examples": [
      "En mätning av temperaturen är objektiv.",
      "En åsikt om vilken film som är bäst är subjektiv."
    ],
    "related": [
      "subjektiv"
    ]
  },
  "subjektiv": {
    "opposite": "objektiv",
    "description": "Objektiv betyder att försöka beskriva fakta utan egna åsikter. Subjektiv betyder att egna åsikter påverkar.",
    "examples": [
      "En mätning av temperaturen är objektiv.",
      "En åsikt om vilken film som är bäst är subjektiv."
    ],
    "related": [
      "objektiv"
    ]
  },
  "plural": {
    "opposite": "singular",
    "description": "Singular är en form för en enda. Plural är en form för flera.",
    "examples": [
      "Ordet ”bil” står i singular och ”bilar” står i plural.",
      "Rubriken använder singular, men listan under använder plural."
    ],
    "related": [
      "singular"
    ]
  },
  "singular": {
    "opposite": "plural",
    "description": "Singular är en form för en enda. Plural är en form för flera.",
    "examples": [
      "Ordet ”bil” står i singular och ”bilar” står i plural.",
      "Rubriken använder singular, men listan under använder plural."
    ],
    "related": [
      "plural"
    ]
  },
  "automatisk": {
    "opposite": "manuell",
    "description": "Automatisk betyder att något sker av sig självt enligt ett system. Manuell betyder att en person styr eller gör det.",
    "examples": [
      "Dörren öppnas automatiskt, men reservlåset är manuellt.",
      "Maskinen har ett automatiskt läge och ett manuellt läge."
    ],
    "related": [
      "manuell"
    ]
  },
  "manuell": {
    "opposite": "automatisk",
    "description": "Automatisk betyder att något sker av sig självt enligt ett system. Manuell betyder att en person styr eller gör det.",
    "examples": [
      "Dörren öppnas automatiskt, men reservlåset är manuellt.",
      "Maskinen har ett automatiskt läge och ett manuellt läge."
    ],
    "related": [
      "automatisk"
    ]
  },
  "borta": {
    "opposite": "hemma",
    "description": "Hemma betyder på den plats där man bor. Borta betyder att man inte är där.",
    "examples": [
      "Hon är hemma i kväll men borta i morgon.",
      "När katten var borta längtade barnen tills den var hemma igen."
    ],
    "related": [
      "hemma"
    ]
  },
  "hemma": {
    "opposite": "borta",
    "description": "Hemma betyder på den plats där man bor. Borta betyder att man inte är där.",
    "examples": [
      "Hon är hemma i kväll men borta i morgon.",
      "När katten var borta längtade barnen tills den var hemma igen."
    ],
    "related": [
      "borta"
    ]
  },
  "konkav": {
    "opposite": "konvex",
    "description": "En konkav yta buktar inåt. En konvex yta buktar utåt.",
    "examples": [
      "Skålens insida är konkav och utsidan är konvex.",
      "En konkav lins och en konvex lins böjer ljus på olika sätt."
    ],
    "related": [
      "konvex"
    ]
  },
  "konvex": {
    "opposite": "konkav",
    "description": "En konkav yta buktar inåt. En konvex yta buktar utåt.",
    "examples": [
      "Skålens insida är konkav och utsidan är konvex.",
      "En konkav lins och en konvex lins böjer ljus på olika sätt."
    ],
    "related": [
      "konkav"
    ]
  },
  "bekräfta": {
    "opposite": "dementera",
    "description": "Bekräfta betyder att säga att en uppgift stämmer. Dementera betyder att säga att den inte stämmer.",
    "examples": [
      "Företaget bekräftade nyheten, medan myndigheten dementerade ryktet.",
      "Hon ville varken bekräfta eller dementera uppgiften."
    ],
    "related": [
      "dementera"
    ]
  },
  "dementera": {
    "opposite": "bekräfta",
    "description": "Bekräfta betyder att säga att en uppgift stämmer. Dementera betyder att säga att den inte stämmer.",
    "examples": [
      "Företaget bekräftade nyheten, medan myndigheten dementerade ryktet.",
      "Hon ville varken bekräfta eller dementera uppgiften."
    ],
    "related": [
      "bekräfta"
    ]
  },
  "horisontell": {
    "opposite": "vertikal",
    "description": "Horisontell betyder vågrät. Vertikal betyder lodrät.",
    "examples": [
      "Bordsskivan är horisontell och bordsbenet är vertikalt.",
      "Rita först en horisontell linje och sedan en vertikal."
    ],
    "related": [
      "vertikal"
    ]
  },
  "vertikal": {
    "opposite": "horisontell",
    "description": "Horisontell betyder vågrät. Vertikal betyder lodrät.",
    "examples": [
      "Bordsskivan är horisontell och bordsbenet är vertikalt.",
      "Rita först en horisontell linje och sedan en vertikal."
    ],
    "related": [
      "horisontell"
    ]
  },
  "vass": {
    "opposite": "trubbig",
    "description": "Vass betyder att en kant eller spets lätt kan skära eller sticka. Trubbig betyder att den inte är skarp.",
    "examples": [
      "Den nya kniven är vass, men den gamla är trubbig.",
      "En vass penna ger en tunn linje; en trubbig penna ger en bredare."
    ],
    "related": [
      "trubbig"
    ]
  },
  "trubbig": {
    "opposite": "vass",
    "description": "Vass betyder att en kant eller spets lätt kan skära eller sticka. Trubbig betyder att den inte är skarp.",
    "examples": [
      "Den nya kniven är vass, men den gamla är trubbig.",
      "En vass penna ger en tunn linje; en trubbig penna ger en bredare."
    ],
    "related": [
      "vass"
    ]
  },
  "aerob": {
    "opposite": "anaerob",
    "description": "Aerob betyder att syre används. Anaerob betyder att processen sker utan syre.",
    "examples": [
      "Lugn löpning är ofta aerob träning, medan en kort maxinsats kan vara anaerob.",
      "Bakterien kan växa aerobt med syre eller anaerobt utan syre."
    ],
    "related": [
      "anaerob"
    ]
  },
  "anaerob": {
    "opposite": "aerob",
    "description": "Aerob betyder att syre används. Anaerob betyder att processen sker utan syre.",
    "examples": [
      "Lugn löpning är ofta aerob träning, medan en kort maxinsats kan vara anaerob.",
      "Bakterien kan växa aerobt med syre eller anaerobt utan syre."
    ],
    "related": [
      "aerob"
    ]
  },
  "obligatorisk": {
    "opposite": "valfri",
    "description": "Obligatorisk betyder att något måste göras. Valfri betyder att man själv får välja.",
    "examples": [
      "Första uppgiften är obligatorisk och den andra är valfri.",
      "Närvaro är obligatorisk på måndagen men valfri på fredagen."
    ],
    "related": [
      "valfri"
    ]
  },
  "valfri": {
    "opposite": "obligatorisk",
    "description": "Obligatorisk betyder att något måste göras. Valfri betyder att man själv får välja.",
    "examples": [
      "Första uppgiften är obligatorisk och den andra är valfri.",
      "Närvaro är obligatorisk på måndagen men valfri på fredagen."
    ],
    "related": [
      "obligatorisk"
    ]
  },
  "självisk": {
    "opposite": "osjälvisk",
    "description": "Självisk betyder att främst tänka på sig själv. Osjälvisk betyder att också sätta andras behov först.",
    "examples": [
      "Det var själviskt att ta allt, men osjälviskt att dela med sig.",
      "Hon gjorde en osjälvisk insats i stället för ett själviskt val."
    ],
    "related": [
      "osjälvisk"
    ]
  },
  "osjälvisk": {
    "opposite": "självisk",
    "description": "Självisk betyder att främst tänka på sig själv. Osjälvisk betyder att också sätta andras behov först.",
    "examples": [
      "Det var själviskt att ta allt, men osjälviskt att dela med sig.",
      "Hon gjorde en osjälvisk insats i stället för ett själviskt val."
    ],
    "related": [
      "självisk"
    ]
  },
  "professionell": {
    "opposite": "oprofessionell",
    "description": "Professionell betyder här att arbeta kunnigt och korrekt. Oprofessionell betyder att inte göra det.",
    "examples": [
      "Bemötandet var professionellt och lugnt, men det första svaret var oprofessionellt.",
      "En professionell rapport är tydlig; en oprofessionell kan vara slarvig."
    ],
    "related": [
      "oprofessionell"
    ]
  },
  "oprofessionell": {
    "opposite": "professionell",
    "description": "Professionell betyder här att arbeta kunnigt och korrekt. Oprofessionell betyder att inte göra det.",
    "examples": [
      "Bemötandet var professionellt och lugnt, men det första svaret var oprofessionellt.",
      "En professionell rapport är tydlig; en oprofessionell kan vara slarvig."
    ],
    "related": [
      "professionell"
    ]
  },
  "nedåt": {
    "opposite": "uppåt",
    "description": "Nedåt är riktningen mot en lägre plats. Uppåt är riktningen mot en högre plats.",
    "examples": [
      "Hissen gick uppåt och trappan ledde nedåt.",
      "Pilen åt vänster pekar nedåt och den andra pekar uppåt."
    ],
    "related": [
      "uppåt"
    ]
  },
  "uppåt": {
    "opposite": "nedåt",
    "description": "Nedåt är riktningen mot en lägre plats. Uppåt är riktningen mot en högre plats.",
    "examples": [
      "Hissen gick uppåt och trappan ledde nedåt.",
      "Pilen åt vänster pekar nedåt och den andra pekar uppåt."
    ],
    "related": [
      "nedåt"
    ]
  },
  "tur": {
    "opposite": "otur",
    "description": "Tur betyder att något bra händer av en slump. Otur betyder att något dåligt händer av en slump.",
    "examples": [
      "Vi hade tur och hann med tåget; han hade otur och missade det.",
      "Det var otur att det regnade, men tur att vi hade paraply."
    ],
    "related": [
      "otur"
    ]
  },
  "otur": {
    "opposite": "tur",
    "description": "Tur betyder att något bra händer av en slump. Otur betyder att något dåligt händer av en slump.",
    "examples": [
      "Vi hade tur och hann med tåget; han hade otur och missade det.",
      "Det var otur att det regnade, men tur att vi hade paraply."
    ],
    "related": [
      "tur"
    ]
  },
  "global": {
    "opposite": "lokal",
    "description": "Global betyder att något gäller hela världen. Lokal betyder att det gäller ett mindre område eller en viss plats.",
    "examples": [
      "Klimatet är en global fråga, medan busstiden är en lokal fråga.",
      "Företaget säljer globalt men har också en lokal butik."
    ],
    "related": [
      "lokal"
    ]
  },
  "lokal": {
    "opposite": "global",
    "description": "Global betyder att något gäller hela världen. Lokal betyder att det gäller ett mindre område eller en viss plats.",
    "examples": [
      "Klimatet är en global fråga, medan busstiden är en lokal fråga.",
      "Företaget säljer globalt men har också en lokal butik."
    ],
    "related": [
      "global"
    ]
  },
  "reversibel": {
    "opposite": "irreversibel",
    "description": "Reversibel betyder att något kan göras om eller återställas. Irreversibel betyder att det inte kan återställas.",
    "examples": [
      "Ändringen är reversibel och kan tas tillbaka.",
      "Skadan blev irreversibel, medan den mindre förändringen var reversibel."
    ],
    "related": [
      "irreversibel"
    ]
  },
  "irreversibel": {
    "opposite": "reversibel",
    "description": "Reversibel betyder att något kan göras om eller återställas. Irreversibel betyder att det inte kan återställas.",
    "examples": [
      "Ändringen är reversibel och kan tas tillbaka.",
      "Skadan blev irreversibel, medan den mindre förändringen var reversibel."
    ],
    "related": [
      "reversibel"
    ]
  },
  "föregående": {
    "opposite": "nästa",
    "description": "Föregående betyder den som kom närmast före. Nästa betyder den som kommer närmast efter.",
    "examples": [
      "Det föregående kapitlet var kortare än nästa.",
      "Vi rättade felet från föregående vecka inför nästa vecka."
    ],
    "related": [
      "nästa"
    ]
  },
  "nästa": {
    "opposite": "föregående",
    "description": "Föregående betyder den som kom närmast före. Nästa betyder den som kommer närmast efter.",
    "examples": [
      "Det föregående kapitlet var kortare än nästa.",
      "Vi rättade felet från föregående vecka inför nästa vecka."
    ],
    "related": [
      "föregående"
    ]
  },
  "explosion": {
    "opposite": "implosion",
    "description": "En explosion pressar material utåt. En implosion innebär att något kollapsar inåt.",
    "examples": [
      "Trycket orsakade en explosion utåt, inte en implosion inåt.",
      "Vid en explosion sprids delar utåt; vid en implosion faller de inåt."
    ],
    "related": [
      "implosion"
    ]
  },
  "implosion": {
    "opposite": "explosion",
    "description": "En explosion pressar material utåt. En implosion innebär att något kollapsar inåt.",
    "examples": [
      "Trycket orsakade en explosion utåt, inte en implosion inåt.",
      "Vid en explosion sprids delar utåt; vid en implosion faller de inåt."
    ],
    "related": [
      "explosion"
    ]
  },
  "mottagare": {
    "opposite": "sändare",
    "description": "En sändare skickar en signal eller ett meddelande. En mottagare tar emot det.",
    "examples": [
      "Radions sändare skickar signalen till mottagaren.",
      "Brevet har en sändare och en mottagare."
    ],
    "related": [
      "sändare"
    ]
  },
  "sändare": {
    "opposite": "mottagare",
    "description": "En sändare skickar en signal eller ett meddelande. En mottagare tar emot det.",
    "examples": [
      "Radions sändare skickar signalen till mottagaren.",
      "Brevet har en sändare och en mottagare."
    ],
    "related": [
      "mottagare"
    ]
  },
  "öppning": {
    "opposite": "stängning",
    "description": "Öppning betyder att något öppnas eller börjar vara öppet. Stängning betyder att det stängs.",
    "examples": [
      "Butikens öppning är klockan nio och stängningen är klockan sex.",
      "Dörrens öppning gick lätt, men stängningen krävde mer kraft."
    ],
    "related": [
      "stängning"
    ]
  },
  "stängning": {
    "opposite": "öppning",
    "description": "Öppning betyder att något öppnas eller börjar vara öppet. Stängning betyder att det stängs.",
    "examples": [
      "Butikens öppning är klockan nio och stängningen är klockan sex.",
      "Dörrens öppning gick lätt, men stängningen krävde mer kraft."
    ],
    "related": [
      "öppning"
    ]
  },
  "högertrafik": {
    "opposite": "vänstertrafik",
    "description": "Högertrafik betyder att fordon kör på höger sida. Vänstertrafik betyder att de kör på vänster sida.",
    "examples": [
      "Sverige har högertrafik, medan Storbritannien har vänstertrafik.",
      "Vid gränsen bytte vägen från vänstertrafik till högertrafik."
    ],
    "related": [
      "vänstertrafik"
    ]
  },
  "vänstertrafik": {
    "opposite": "högertrafik",
    "description": "Högertrafik betyder att fordon kör på höger sida. Vänstertrafik betyder att de kör på vänster sida.",
    "examples": [
      "Sverige har högertrafik, medan Storbritannien har vänstertrafik.",
      "Vid gränsen bytte vägen från vänstertrafik till högertrafik."
    ],
    "related": [
      "högertrafik"
    ]
  },
  "köpare": {
    "opposite": "säljare",
    "description": "En köpare betalar för något. En säljare erbjuder och säljer det.",
    "examples": [
      "Köparen betalade och säljaren lämnade över varan.",
      "Avtalet skrevs under av både köpare och säljare."
    ],
    "related": [
      "säljare"
    ]
  },
  "säljare": {
    "opposite": "köpare",
    "description": "En köpare betalar för något. En säljare erbjuder och säljer det.",
    "examples": [
      "Köparen betalade och säljaren lämnade över varan.",
      "Avtalet skrevs under av både köpare och säljare."
    ],
    "related": [
      "köpare"
    ]
  },
  "ankomst": {
    "opposite": "avfärd",
    "description": "Ankomst är när någon eller något kommer fram. Avfärd är när resan börjar från en plats.",
    "examples": [
      "Tågets avfärd är klockan åtta och ankomsten klockan tio.",
      "Vi väntade på hennes ankomst efter deras tidiga avfärd."
    ],
    "related": [
      "avfärd"
    ]
  },
  "avfärd": {
    "opposite": "ankomst",
    "description": "Ankomst är när någon eller något kommer fram. Avfärd är när resan börjar från en plats.",
    "examples": [
      "Tågets avfärd är klockan åtta och ankomsten klockan tio.",
      "Vi väntade på hennes ankomst efter deras tidiga avfärd."
    ],
    "related": [
      "ankomst"
    ]
  },
  "generalisera": {
    "opposite": "specialisera",
    "description": "Generalisera betyder att göra en bred slutsats eller göra något mer allmänt. Specialisera betyder att inrikta sig på ett smalare område.",
    "examples": [
      "Det är svårt att generalisera från ett enda fall.",
      "Forskaren försökte generalisera resultaten men valde sedan att specialisera analysen på en åldersgrupp."
    ],
    "related": [
      "specialisera"
    ]
  },
  "specialisera": {
    "opposite": "generalisera",
    "description": "Generalisera betyder att göra en bred slutsats eller göra något mer allmänt. Specialisera betyder att inrikta sig på ett smalare område.",
    "examples": [
      "Det är svårt att generalisera från ett enda fall.",
      "Forskaren försökte generalisera resultaten men valde sedan att specialisera analysen på en åldersgrupp."
    ],
    "related": [
      "generalisera"
    ]
  },
  "permanent": {
    "opposite": "temporär",
    "description": "Permanent betyder varaktig. Temporär betyder att något bara gäller under en begränsad tid.",
    "examples": [
      "Bron är en permanent lösning, medan färjan var temporär.",
      "Hon fick först ett temporärt rum och senare ett permanent."
    ],
    "related": [
      "temporär"
    ]
  },
  "temporär": {
    "opposite": "permanent",
    "description": "Permanent betyder varaktig. Temporär betyder att något bara gäller under en begränsad tid.",
    "examples": [
      "Bron är en permanent lösning, medan färjan var temporär.",
      "Hon fick först ett temporärt rum och senare ett permanent."
    ],
    "related": [
      "permanent"
    ]
  },
  "emigrera": {
    "opposite": "immigrera",
    "description": "Emigrera betyder att flytta ut från ett land. Immigrera betyder att flytta in i ett land.",
    "examples": [
      "Familjen emigrerade från Sverige och immigrerade till Kanada.",
      "Samma flytt kan beskrivas som att emigrera från ett land och immigrera till ett annat."
    ],
    "related": [
      "immigrera"
    ]
  },
  "immigrera": {
    "opposite": "emigrera",
    "description": "Emigrera betyder att flytta ut från ett land. Immigrera betyder att flytta in i ett land.",
    "examples": [
      "Familjen emigrerade från Sverige och immigrerade till Kanada.",
      "Samma flytt kan beskrivas som att emigrera från ett land och immigrera till ett annat."
    ],
    "related": [
      "emigrera"
    ]
  },
  "invandring": {
    "opposite": "utvandring",
    "description": "Invandring är flytt in i ett land. Utvandring är flytt ut ur ett land.",
    "examples": [
      "Statistiken visar både invandring till landet och utvandring från det.",
      "Samma person räknas som utvandring i ursprungslandet och invandring i det nya landet."
    ],
    "related": [
      "utvandring"
    ]
  },
  "utvandring": {
    "opposite": "invandring",
    "description": "Invandring är flytt in i ett land. Utvandring är flytt ut ur ett land.",
    "examples": [
      "Statistiken visar både invandring till landet och utvandring från det.",
      "Samma person räknas som utvandring i ursprungslandet och invandring i det nya landet."
    ],
    "related": [
      "invandring"
    ]
  },
  "inandning": {
    "opposite": "utandning",
    "description": "Inandning betyder att luft dras in i lungorna. Utandning betyder att luft pressas ut.",
    "examples": [
      "En lugn inandning följdes av en lång utandning.",
      "Övningen växlar mellan fyra sekunders inandning och sex sekunders utandning."
    ],
    "related": [
      "utandning"
    ]
  },
  "utandning": {
    "opposite": "inandning",
    "description": "Inandning betyder att luft dras in i lungorna. Utandning betyder att luft pressas ut.",
    "examples": [
      "En lugn inandning följdes av en lång utandning.",
      "Övningen växlar mellan fyra sekunders inandning och sex sekunders utandning."
    ],
    "related": [
      "inandning"
    ]
  },
  "frånvaro": {
    "opposite": "närvaro",
    "description": "Närvaro betyder att någon är på plats. Frånvaro betyder att personen inte är där.",
    "examples": [
      "Läraren noterade både elevernas närvaro och deras frånvaro.",
      "Hennes närvaro märktes direkt efter en veckas frånvaro."
    ],
    "related": [
      "närvaro"
    ]
  },
  "närvaro": {
    "opposite": "frånvaro",
    "description": "Närvaro betyder att någon är på plats. Frånvaro betyder att personen inte är där.",
    "examples": [
      "Läraren noterade både elevernas närvaro och deras frånvaro.",
      "Hennes närvaro märktes direkt efter en veckas frånvaro."
    ],
    "related": [
      "frånvaro"
    ]
  },
  "inomlands": {
    "opposite": "utomlands",
    "description": "Inomlands betyder i det egna landet. Utomlands betyder i ett annat land.",
    "examples": [
      "Vi reste inomlands i somras och utomlands i vintras.",
      "Paketet kan skickas både inomlands och utomlands."
    ],
    "related": [
      "utomlands"
    ]
  },
  "utomlands": {
    "opposite": "inomlands",
    "description": "Inomlands betyder i det egna landet. Utomlands betyder i ett annat land.",
    "examples": [
      "Vi reste inomlands i somras och utomlands i vintras.",
      "Paketet kan skickas både inomlands och utomlands."
    ],
    "related": [
      "inomlands"
    ]
  },
  "inifrån": {
    "opposite": "utifrån",
    "description": "Inifrån betyder från insidan. Utifrån betyder från utsidan.",
    "examples": [
      "Dörren låstes inifrån och öppnades utifrån.",
      "Huset såg litet ut utifrån men rymligt inifrån."
    ],
    "related": [
      "utifrån"
    ]
  },
  "utifrån": {
    "opposite": "inifrån",
    "description": "Inifrån betyder från insidan. Utifrån betyder från utsidan.",
    "examples": [
      "Dörren låstes inifrån och öppnades utifrån.",
      "Huset såg litet ut utifrån men rymligt inifrån."
    ],
    "related": [
      "inifrån"
    ]
  },
  "inländsk": {
    "opposite": "utländsk",
    "description": "Inländsk betyder från det egna landet. Utländsk betyder från ett annat land.",
    "examples": [
      "Butiken säljer både inländsk och utländsk frukt.",
      "Den inländska filmen tävlade mot flera utländska filmer."
    ],
    "related": [
      "utländsk"
    ]
  },
  "utländsk": {
    "opposite": "inländsk",
    "description": "Inländsk betyder från det egna landet. Utländsk betyder från ett annat land.",
    "examples": [
      "Butiken säljer både inländsk och utländsk frukt.",
      "Den inländska filmen tävlade mot flera utländska filmer."
    ],
    "related": [
      "inländsk"
    ]
  },
  "dystopi": {
    "opposite": "utopi",
    "description": "En utopi skildrar ett idealiskt samhälle. En dystopi skildrar ett samhälle där mycket har gått fel.",
    "examples": [
      "Boken börjar som en utopi men utvecklas till en dystopi.",
      "En utopi visar drömsamhället, medan en dystopi visar en mörk framtid."
    ],
    "related": [
      "utopi"
    ]
  },
  "utopi": {
    "opposite": "dystopi",
    "description": "En utopi skildrar ett idealiskt samhälle. En dystopi skildrar ett samhälle där mycket har gått fel.",
    "examples": [
      "Boken börjar som en utopi men utvecklas till en dystopi.",
      "En utopi visar drömsamhället, medan en dystopi visar en mörk framtid."
    ],
    "related": [
      "dystopi"
    ]
  },
  "aktning": {
    "opposite": "förakt",
    "description": "Aktning betyder respekt. Förakt betyder stark brist på respekt.",
    "examples": [
      "Hon talade om läraren med aktning, inte med förakt.",
      "Hans mod väckte aktning, medan hans grymhet väckte förakt."
    ],
    "related": [
      "förakt"
    ]
  },
  "förakt": {
    "opposite": "aktning",
    "description": "Aktning betyder respekt. Förakt betyder stark brist på respekt.",
    "examples": [
      "Hon talade om läraren med aktning, inte med förakt.",
      "Hans mod väckte aktning, medan hans grymhet väckte förakt."
    ],
    "related": [
      "aktning"
    ]
  },
  "transitiv": {
    "opposite": "intransitiv",
    "description": "Ett transitivt verb kan ha ett direkt objekt. Ett intransitivt verb används utan direkt objekt.",
    "examples": [
      "I ”hon öppnar dörren” är verbet transitivt.",
      "I ”barnet sover” är verbet intransitivt, medan ”barnet läser boken” har ett transitivt verb."
    ],
    "related": [
      "intransitiv"
    ]
  },
  "intransitiv": {
    "opposite": "transitiv",
    "description": "Ett transitivt verb kan ha ett direkt objekt. Ett intransitivt verb används utan direkt objekt.",
    "examples": [
      "I ”hon öppnar dörren” är verbet transitivt.",
      "I ”barnet sover” är verbet intransitivt, medan ”barnet läser boken” har ett transitivt verb."
    ],
    "related": [
      "transitiv"
    ]
  },
  "kryptering": {
    "opposite": "avkryptering",
    "description": "Kryptering gör information svårläst utan rätt nyckel. Avkryptering gör den läsbar igen.",
    "examples": [
      "Meddelandet skyddades med kryptering och öppnades med avkryptering.",
      "Rätt nyckel behövs för både kryptering och avkryptering."
    ],
    "related": [
      "avkryptering"
    ]
  },
  "avkryptering": {
    "opposite": "kryptering",
    "description": "Kryptering gör information svårläst utan rätt nyckel. Avkryptering gör den läsbar igen.",
    "examples": [
      "Meddelandet skyddades med kryptering och öppnades med avkryptering.",
      "Rätt nyckel behövs för både kryptering och avkryptering."
    ],
    "related": [
      "kryptering"
    ]
  },
  "inflation": {
    "opposite": "deflation",
    "description": "Inflation är en allmän ökning av prisnivån. Deflation är en allmän minskning av prisnivån.",
    "examples": [
      "Landet gick från låg inflation till en kort period av deflation.",
      "Vid inflation stiger den allmänna prisnivån; vid deflation sjunker den."
    ],
    "related": [
      "deflation"
    ]
  },
  "deflation": {
    "opposite": "inflation",
    "description": "Inflation är en allmän ökning av prisnivån. Deflation är en allmän minskning av prisnivån.",
    "examples": [
      "Landet gick från låg inflation till en kort period av deflation.",
      "Vid inflation stiger den allmänna prisnivån; vid deflation sjunker den."
    ],
    "related": [
      "inflation"
    ]
  },
  "godkänd": {
    "opposite": "underkänd",
    "description": "Godkänd betyder att kraven är uppfyllda. Underkänd betyder att de inte är det.",
    "examples": [
      "Uppsatsen blev godkänd, men det första utkastet var underkänt.",
      "Ett godkänt prov uppfyller kraven; ett underkänt gör inte det."
    ],
    "related": [
      "underkänd"
    ]
  },
  "underkänd": {
    "opposite": "godkänd",
    "description": "Godkänd betyder att kraven är uppfyllda. Underkänd betyder att de inte är det.",
    "examples": [
      "Uppsatsen blev godkänd, men det första utkastet var underkänt.",
      "Ett godkänt prov uppfyller kraven; ett underkänt gör inte det."
    ],
    "related": [
      "godkänd"
    ]
  },
  "liggande": {
    "opposite": "stående",
    "description": "Liggande och stående beskriver olika lägen eller format.",
    "examples": [
      "Bilden finns i både liggande och stående format.",
      "Ställ flaskan stående och lägg boken liggande."
    ],
    "related": [
      "stående"
    ]
  },
  "stående": {
    "opposite": "liggande",
    "description": "Liggande och stående beskriver olika lägen eller format.",
    "examples": [
      "Bilden finns i både liggande och stående format.",
      "Ställ flaskan stående och lägg boken liggande."
    ],
    "related": [
      "liggande"
    ]
  },
  "nerför": {
    "opposite": "uppför",
    "description": "Nerför betyder i riktning ned längs en lutning. Uppför betyder i riktning upp längs den.",
    "examples": [
      "Det gick snabbt nerför backen men långsamt uppför.",
      "Vi cyklade uppför på vägen dit och nerför på vägen hem."
    ],
    "related": [
      "uppför"
    ]
  },
  "uppför": {
    "opposite": "nerför",
    "description": "Nerför betyder i riktning ned längs en lutning. Uppför betyder i riktning upp längs den.",
    "examples": [
      "Det gick snabbt nerför backen men långsamt uppför.",
      "Vi cyklade uppför på vägen dit och nerför på vägen hem."
    ],
    "related": [
      "nerför"
    ]
  },
  "funktionell": {
    "opposite": "dysfunktionell",
    "description": "Funktionell betyder att något fungerar på ett ändamålsenligt sätt. Dysfunktionell betyder att det fungerar dåligt eller skadligt.",
    "examples": [
      "Gruppen blev funktionell efter att ha löst sitt dysfunktionella arbetssätt.",
      "Ett funktionellt system hjälper användaren; ett dysfunktionellt skapar problem."
    ],
    "related": [
      "dysfunktionell"
    ]
  },
  "dysfunktionell": {
    "opposite": "funktionell",
    "description": "Funktionell betyder att något fungerar på ett ändamålsenligt sätt. Dysfunktionell betyder att det fungerar dåligt eller skadligt.",
    "examples": [
      "Gruppen blev funktionell efter att ha löst sitt dysfunktionella arbetssätt.",
      "Ett funktionellt system hjälper användaren; ett dysfunktionellt skapar problem."
    ],
    "related": [
      "funktionell"
    ]
  },
  "förstärka": {
    "opposite": "försvaga",
    "description": "Förstärka betyder att göra något starkare. Försvaga betyder att göra det svagare.",
    "examples": [
      "Högtalaren förstärker ljudet, medan väggen försvagar det.",
      "Träningen kan förstärka musklerna och sjukdom kan försvaga dem."
    ],
    "related": [
      "försvaga"
    ]
  },
  "försvaga": {
    "opposite": "förstärka",
    "description": "Förstärka betyder att göra något starkare. Försvaga betyder att göra det svagare.",
    "examples": [
      "Högtalaren förstärker ljudet, medan väggen försvagar det.",
      "Träningen kan förstärka musklerna och sjukdom kan försvaga dem."
    ],
    "related": [
      "förstärka"
    ]
  },
  "gles": {
    "opposite": "tät",
    "description": "Gles betyder att det är långt mellan delarna. Tät betyder att delarna sitter nära varandra.",
    "examples": [
      "Skogen var gles nära vägen och tät längre in.",
      "Ett glest tyg släpper igenom mer ljus än ett tätt."
    ],
    "related": [
      "tät"
    ]
  },
  "tät": {
    "opposite": "gles",
    "description": "Gles betyder att det är långt mellan delarna. Tät betyder att delarna sitter nära varandra.",
    "examples": [
      "Skogen var gles nära vägen och tät längre in.",
      "Ett glest tyg släpper igenom mer ljus än ett tätt."
    ],
    "related": [
      "gles"
    ]
  },
  "dominant": {
    "opposite": "recessiv",
    "description": "Dominant och recessiv beskriver hur genvarianter kan påverka en ärftlig egenskap.",
    "examples": [
      "En dominant genvariant kan märkas när bara en kopia finns.",
      "En recessiv genvariant märks ofta först när två kopior finns, till skillnad från en dominant."
    ],
    "related": [
      "recessiv"
    ]
  },
  "recessiv": {
    "opposite": "dominant",
    "description": "Dominant och recessiv beskriver hur genvarianter kan påverka en ärftlig egenskap.",
    "examples": [
      "En dominant genvariant kan märkas när bara en kopia finns.",
      "En recessiv genvariant märks ofta först när två kopior finns, till skillnad från en dominant."
    ],
    "related": [
      "dominant"
    ]
  },
  "anspänd": {
    "opposite": "avspänd",
    "description": "Anspänd betyder spänd eller nervös. Avspänd betyder lugn och avslappnad.",
    "examples": [
      "Hon var anspänd före samtalet men avspänd efteråt.",
      "Stämningen gick från anspänd till avspänd när problemet löstes."
    ],
    "related": [
      "avspänd"
    ]
  },
  "avspänd": {
    "opposite": "anspänd",
    "description": "Anspänd betyder spänd eller nervös. Avspänd betyder lugn och avslappnad.",
    "examples": [
      "Hon var anspänd före samtalet men avspänd efteråt.",
      "Stämningen gick från anspänd till avspänd när problemet löstes."
    ],
    "related": [
      "anspänd"
    ]
  },
  "invärtes": {
    "opposite": "utvärtes",
    "description": "Invärtes betyder inne i kroppen. Utvärtes betyder på kroppens utsida.",
    "examples": [
      "Läkemedlet ska tas invärtes, medan salvan används utvärtes.",
      "Vissa läkemedel tas invärtes och andra används utvärtes."
    ],
    "related": [
      "utvärtes"
    ]
  },
  "utvärtes": {
    "opposite": "invärtes",
    "description": "Invärtes betyder inne i kroppen. Utvärtes betyder på kroppens utsida.",
    "examples": [
      "Läkemedlet ska tas invärtes, medan salvan används utvärtes.",
      "Vissa läkemedel tas invärtes och andra används utvärtes."
    ],
    "related": [
      "invärtes"
    ]
  },
  "extern": {
    "opposite": "intern",
    "description": "Intern betyder inom en organisation eller ett system. Extern betyder utanför det.",
    "examples": [
      "Det interna mötet följdes av ett externt möte med kunden.",
      "Företaget använder både intern personal och externa konsulter."
    ],
    "related": [
      "intern"
    ]
  },
  "intern": {
    "opposite": "extern",
    "description": "Intern betyder inom en organisation eller ett system. Extern betyder utanför det.",
    "examples": [
      "Det interna mötet följdes av ett externt möte med kunden.",
      "Företaget använder både intern personal och externa konsulter."
    ],
    "related": [
      "extern"
    ]
  },
  "dynamisk": {
    "opposite": "statisk",
    "description": "Dynamisk betyder att något förändras eller rör sig. Statisk betyder att det är fast eller oföränderligt i sammanhanget.",
    "examples": [
      "Diagrammet är dynamiskt och uppdateras, medan bilden är statisk.",
      "En dynamisk övning innehåller rörelse; en statisk hålls stilla."
    ],
    "related": [
      "statisk"
    ]
  },
  "statisk": {
    "opposite": "dynamisk",
    "description": "Dynamisk betyder att något förändras eller rör sig. Statisk betyder att det är fast eller oföränderligt i sammanhanget.",
    "examples": [
      "Diagrammet är dynamiskt och uppdateras, medan bilden är statisk.",
      "En dynamisk övning innehåller rörelse; en statisk hålls stilla."
    ],
    "related": [
      "dynamisk"
    ]
  },
  "destruktiv": {
    "opposite": "konstruktiv",
    "description": "Konstruktiv betyder att bidra till en lösning. Destruktiv betyder att skada eller försvåra.",
    "examples": [
      "Hon gav konstruktiv kritik i stället för destruktiva kommentarer.",
      "Samtalet blev konstruktivt efter en destruktiv början."
    ],
    "related": [
      "konstruktiv"
    ]
  },
  "konstruktiv": {
    "opposite": "destruktiv",
    "description": "Konstruktiv betyder att bidra till en lösning. Destruktiv betyder att skada eller försvåra.",
    "examples": [
      "Hon gav konstruktiv kritik i stället för destruktiva kommentarer.",
      "Samtalet blev konstruktivt efter en destruktiv början."
    ],
    "related": [
      "destruktiv"
    ]
  },
  "nedanstående": {
    "opposite": "ovanstående",
    "description": "Ovanstående syftar på något tidigare eller högre upp i texten. Nedanstående syftar på något som kommer senare eller står längre ner.",
    "examples": [
      "Ovanstående exempel förklaras i den nedanstående tabellen.",
      "Följ den ovanstående regeln och svara på de nedanstående frågorna."
    ],
    "related": [
      "ovanstående"
    ]
  },
  "ovanstående": {
    "opposite": "nedanstående",
    "description": "Ovanstående syftar på något tidigare eller högre upp i texten. Nedanstående syftar på något som kommer senare eller står längre ner.",
    "examples": [
      "Ovanstående exempel förklaras i den nedanstående tabellen.",
      "Följ den ovanstående regeln och svara på de nedanstående frågorna."
    ],
    "related": [
      "nedanstående"
    ]
  },
  "kortvarig": {
    "opposite": "långvarig",
    "description": "Kortvarig betyder att något pågår en kort tid. Långvarig betyder att det pågår länge.",
    "examples": [
      "Regnet var kortvarigt, men torkan blev långvarig.",
      "En kortvarig lösning räckte inte för det långvariga problemet."
    ],
    "related": [
      "långvarig"
    ]
  },
  "långvarig": {
    "opposite": "kortvarig",
    "description": "Kortvarig betyder att något pågår en kort tid. Långvarig betyder att det pågår länge.",
    "examples": [
      "Regnet var kortvarigt, men torkan blev långvarig.",
      "En kortvarig lösning räckte inte för det långvariga problemet."
    ],
    "related": [
      "kortvarig"
    ]
  },
  "minskning": {
    "opposite": "ökning",
    "description": "En minskning betyder att något blir mindre. En ökning betyder att det blir större.",
    "examples": [
      "En minskning av priset gav en ökning av försäljningen.",
      "Rapporten visar en minskning av kostnaderna och en ökning av intäkterna."
    ],
    "related": [
      "ökning"
    ]
  },
  "ökning": {
    "opposite": "minskning",
    "description": "En minskning betyder att något blir mindre. En ökning betyder att det blir större.",
    "examples": [
      "En minskning av priset gav en ökning av försäljningen.",
      "Rapporten visar en minskning av kostnaderna och en ökning av intäkterna."
    ],
    "related": [
      "minskning"
    ]
  },
  "underskott": {
    "opposite": "överskott",
    "description": "Underskott betyder att det finns mindre än vad som behövs. Överskott betyder att det finns mer än vad som behövs.",
    "examples": [
      "Budgeten visade underskott förra året men överskott i år.",
      "Ett underskott på varor kan senare bli ett överskott."
    ],
    "related": [
      "överskott"
    ]
  },
  "överskott": {
    "opposite": "underskott",
    "description": "Underskott betyder att det finns mindre än vad som behövs. Överskott betyder att det finns mer än vad som behövs.",
    "examples": [
      "Budgeten visade underskott förra året men överskott i år.",
      "Ett underskott på varor kan senare bli ett överskott."
    ],
    "related": [
      "underskott"
    ]
  },
  "defensiv": {
    "opposite": "offensiv",
    "description": "Defensiv betyder inriktad på att försvara. Offensiv betyder inriktad på att anfalla eller ta initiativ.",
    "examples": [
      "Laget spelade defensivt i första halvlek och offensivt i den andra.",
      "En defensiv taktik skyddar målet, medan en offensiv taktik skapar målchanser."
    ],
    "related": [
      "offensiv"
    ]
  },
  "offensiv": {
    "opposite": "defensiv",
    "description": "Defensiv betyder inriktad på att försvara. Offensiv betyder inriktad på att anfalla eller ta initiativ.",
    "examples": [
      "Laget spelade defensivt i första halvlek och offensivt i den andra.",
      "En defensiv taktik skyddar målet, medan en offensiv taktik skapar målchanser."
    ],
    "related": [
      "defensiv"
    ]
  },
  "bildlig": {
    "opposite": "bokstavlig",
    "description": "Bildlig betyder att ord används överfört. Bokstavlig betyder att orden ska förstås precis som de står.",
    "examples": [
      "Uttrycket att ha is i magen är bildligt, inte bokstavligt.",
      "Hon tolkade skämtet bokstavligt fast det var bildligt menat."
    ],
    "related": [
      "bokstavlig"
    ]
  },
  "bokstavlig": {
    "opposite": "bildlig",
    "description": "Bildlig betyder att ord används överfört. Bokstavlig betyder att orden ska förstås precis som de står.",
    "examples": [
      "Uttrycket att ha is i magen är bildligt, inte bokstavligt.",
      "Hon tolkade skämtet bokstavligt fast det var bildligt menat."
    ],
    "related": [
      "bildlig"
    ]
  },
  "inledning": {
    "opposite": "avslutning",
    "description": "En inledning är början på något. En avslutning är den sista delen.",
    "examples": [
      "Talets inledning var kort, men avslutningen var längre.",
      "Boken har en spännande inledning och en tydlig avslutning."
    ],
    "related": [
      "avslutning"
    ]
  },
  "avslutning": {
    "opposite": "inledning",
    "description": "En inledning är början på något. En avslutning är den sista delen.",
    "examples": [
      "Talets inledning var kort, men avslutningen var längre.",
      "Boken har en spännande inledning och en tydlig avslutning."
    ],
    "related": [
      "inledning"
    ]
  },
  "epilog": {
    "opposite": "prolog",
    "description": "En prolog står i början av ett verk. En epilog står i slutet.",
    "examples": [
      "Romanen börjar med en prolog och slutar med en epilog.",
      "I prologen möter vi huvudpersonen, och i epilogen får vi veta hur det gick."
    ],
    "related": [
      "prolog"
    ]
  },
  "prolog": {
    "opposite": "epilog",
    "description": "En prolog står i början av ett verk. En epilog står i slutet.",
    "examples": [
      "Romanen börjar med en prolog och slutar med en epilog.",
      "I prologen möter vi huvudpersonen, och i epilogen får vi veta hur det gick."
    ],
    "related": [
      "epilog"
    ]
  },
  "ingång": {
    "opposite": "utgång",
    "description": "En ingång är en väg in. En utgång är en väg ut.",
    "examples": [
      "Vi gick in genom huvudingången och lämnade huset genom en annan utgång.",
      "Ingången finns till vänster och utgången till höger."
    ],
    "related": [
      "utgång"
    ]
  },
  "utgång": {
    "opposite": "ingång",
    "description": "En ingång är en väg in. En utgång är en väg ut.",
    "examples": [
      "Vi gick in genom huvudingången och lämnade huset genom en annan utgång.",
      "Ingången finns till vänster och utgången till höger."
    ],
    "related": [
      "ingång"
    ]
  },
  "exklusive": {
    "opposite": "inklusive",
    "description": "Exklusive betyder utan att något räknas med. Inklusive betyder att det räknas med.",
    "examples": [
      "Priset är 200 kronor exklusive moms och 250 kronor inklusive moms.",
      "Resan kostar mindre exklusive frukost än inklusive frukost."
    ],
    "related": [
      "inklusive"
    ]
  },
  "inklusive": {
    "opposite": "exklusive",
    "description": "Exklusive betyder utan att något räknas med. Inklusive betyder att det räknas med.",
    "examples": [
      "Priset är 200 kronor exklusive moms och 250 kronor inklusive moms.",
      "Resan kostar mindre exklusive frukost än inklusive frukost."
    ],
    "related": [
      "exklusive"
    ]
  },
  "underskatta": {
    "opposite": "överskatta",
    "description": "Att underskatta är att bedöma något som mindre än det är. Att överskatta är att bedöma det som större än det är.",
    "examples": [
      "Underskatta inte uppgiften, men överskatta inte heller svårigheten.",
      "Hon underskattade tiden och överskattade sin hastighet."
    ],
    "related": [
      "överskatta"
    ]
  },
  "överskatta": {
    "opposite": "underskatta",
    "description": "Att underskatta är att bedöma något som mindre än det är. Att överskatta är att bedöma det som större än det är.",
    "examples": [
      "Underskatta inte uppgiften, men överskatta inte heller svårigheten.",
      "Hon underskattade tiden och överskattade sin hastighet."
    ],
    "related": [
      "underskatta"
    ]
  },
  "exteriör": {
    "opposite": "interiör",
    "description": "Exteriör är utsidan av en byggnad eller ett föremål. Interiör är insidan.",
    "examples": [
      "Husets exteriör är vit, medan interiören är färgstark.",
      "De renoverade både byggnadens exteriör och dess interiör."
    ],
    "related": [
      "interiör"
    ]
  },
  "interiör": {
    "opposite": "exteriör",
    "description": "Exteriör är utsidan av en byggnad eller ett föremål. Interiör är insidan.",
    "examples": [
      "Husets exteriör är vit, medan interiören är färgstark.",
      "De renoverade både byggnadens exteriör och dess interiör."
    ],
    "related": [
      "exteriör"
    ]
  },
  "jakande": {
    "opposite": "nekande",
    "description": "Ett jakande svar betyder ja. Ett nekande svar betyder nej.",
    "examples": [
      "Hon gav ett jakande svar, men han svarade nekande.",
      "En nick kan vara jakande och en huvudskakning nekande."
    ],
    "related": [
      "nekande"
    ]
  },
  "nekande": {
    "opposite": "jakande",
    "description": "Ett jakande svar betyder ja. Ett nekande svar betyder nej.",
    "examples": [
      "Hon gav ett jakande svar, men han svarade nekande.",
      "En nick kan vara jakande och en huvudskakning nekande."
    ],
    "related": [
      "jakande"
    ]
  },
  "insida": {
    "opposite": "utsida",
    "description": "Insidan är den del som finns inuti något. Utsidan är den yttre delen.",
    "examples": [
      "Koppen är vit på insidan och blå på utsidan.",
      "Tvätta både väskans insida och utsida."
    ],
    "related": [
      "utsida"
    ]
  },
  "utsida": {
    "opposite": "insida",
    "description": "Insidan är den del som finns inuti något. Utsidan är den yttre delen.",
    "examples": [
      "Koppen är vit på insidan och blå på utsidan.",
      "Tvätta både väskans insida och utsida."
    ],
    "related": [
      "insida"
    ]
  },
  "synkron": {
    "opposite": "asynkron",
    "description": "Synkron betyder att saker sker samtidigt eller i takt. Asynkron betyder att de inte behöver ske samtidigt.",
    "examples": [
      "Ett synkront möte sker i realtid, medan en asynkron diskussion kan fortsätta senare.",
      "Undervisningen kan vara synkron på morgonen och asynkron på eftermiddagen."
    ],
    "related": [
      "asynkron"
    ]
  },
  "asynkron": {
    "opposite": "synkron",
    "description": "Synkron betyder att saker sker samtidigt eller i takt. Asynkron betyder att de inte behöver ske samtidigt.",
    "examples": [
      "Ett synkront möte sker i realtid, medan en asynkron diskussion kan fortsätta senare.",
      "Undervisningen kan vara synkron på morgonen och asynkron på eftermiddagen."
    ],
    "related": [
      "synkron"
    ]
  },
  "höglänt": {
    "opposite": "låglänt",
    "description": "Höglänt mark ligger högt. Låglänt mark ligger lågt.",
    "examples": [
      "Byn ligger höglänt, men åkern är låglänt.",
      "Höglänta områden är ofta torrare än låglänta områden."
    ],
    "related": [
      "låglänt"
    ]
  },
  "låglänt": {
    "opposite": "höglänt",
    "description": "Höglänt mark ligger högt. Låglänt mark ligger lågt.",
    "examples": [
      "Byn ligger höglänt, men åkern är låglänt.",
      "Höglänta områden är ofta torrare än låglänta områden."
    ],
    "related": [
      "höglänt"
    ]
  },
  "ansvarsfull": {
    "opposite": "ansvarslös",
    "description": "Ansvarsfull betyder att någon tar ansvar. Ansvarslös betyder att någon inte gör det.",
    "examples": [
      "Det var ansvarsfullt att kontrollera allt och ansvarslöst att strunta i reglerna.",
      "En ansvarsfull förare kör försiktigt, medan en ansvarslös förare tar onödiga risker."
    ],
    "related": [
      "ansvarslös"
    ]
  },
  "ansvarslös": {
    "opposite": "ansvarsfull",
    "description": "Ansvarsfull betyder att någon tar ansvar. Ansvarslös betyder att någon inte gör det.",
    "examples": [
      "Det var ansvarsfullt att kontrollera allt och ansvarslöst att strunta i reglerna.",
      "En ansvarsfull förare kör försiktigt, medan en ansvarslös förare tar onödiga risker."
    ],
    "related": [
      "ansvarsfull"
    ]
  },
  "indata": {
    "opposite": "utdata",
    "description": "Indata är information som matas in i ett system. Utdata är information som systemet lämnar.",
    "examples": [
      "Programmet läser indata och skapar utdata.",
      "Felaktiga indata kan ge felaktiga utdata."
    ],
    "related": [
      "utdata"
    ]
  },
  "utdata": {
    "opposite": "indata",
    "description": "Indata är information som matas in i ett system. Utdata är information som systemet lämnar.",
    "examples": [
      "Programmet läser indata och skapar utdata.",
      "Felaktiga indata kan ge felaktiga utdata."
    ],
    "related": [
      "indata"
    ]
  },
  "inmatning": {
    "opposite": "utmatning",
    "description": "Inmatning för information in i ett system. Utmatning för information ut ur systemet.",
    "examples": [
      "Tangentbordet används för inmatning och skärmen för utmatning.",
      "Kontrollera inmatningen innan du granskar utmatningen."
    ],
    "related": [
      "utmatning"
    ]
  },
  "utmatning": {
    "opposite": "inmatning",
    "description": "Inmatning för information in i ett system. Utmatning för information ut ur systemet.",
    "examples": [
      "Tangentbordet används för inmatning och skärmen för utmatning.",
      "Kontrollera inmatningen innan du granskar utmatningen."
    ],
    "related": [
      "inmatning"
    ]
  },
  "makroskopisk": {
    "opposite": "mikroskopisk",
    "description": "Makroskopisk beskriver något som kan ses utan mikroskop. Mikroskopisk beskriver något mycket litet.",
    "examples": [
      "Sprickan är makroskopisk, men bakterien är mikroskopisk.",
      "Vi började med en makroskopisk bild och gick sedan ner till mikroskopisk nivå."
    ],
    "related": [
      "mikroskopisk"
    ]
  },
  "mikroskopisk": {
    "opposite": "makroskopisk",
    "description": "Makroskopisk beskriver något som kan ses utan mikroskop. Mikroskopisk beskriver något mycket litet.",
    "examples": [
      "Sprickan är makroskopisk, men bakterien är mikroskopisk.",
      "Vi började med en makroskopisk bild och gick sedan ner till mikroskopisk nivå."
    ],
    "related": [
      "makroskopisk"
    ]
  },
  "nedtrappning": {
    "opposite": "upptrappning",
    "description": "Nedtrappning betyder att något minskas stegvis. Upptrappning betyder att det ökas stegvis.",
    "examples": [
      "Efter en upptrappning av konflikten följde en försiktig nedtrappning.",
      "Läkaren planerade först en upptrappning och senare en nedtrappning av dosen."
    ],
    "related": [
      "upptrappning"
    ]
  },
  "upptrappning": {
    "opposite": "nedtrappning",
    "description": "Nedtrappning betyder att något minskas stegvis. Upptrappning betyder att det ökas stegvis.",
    "examples": [
      "Efter en upptrappning av konflikten följde en försiktig nedtrappning.",
      "Läkaren planerade först en upptrappning och senare en nedtrappning av dosen."
    ],
    "related": [
      "nedtrappning"
    ]
  },
  "kortlivad": {
    "opposite": "långlivad",
    "description": "Kortlivad betyder att något varar en kort tid. Långlivad betyder att det varar länge.",
    "examples": [
      "Trenden blev kortlivad, men traditionen är långlivad.",
      "En kortlivad blomma kan växa på en långlivad buske."
    ],
    "related": [
      "långlivad"
    ]
  },
  "långlivad": {
    "opposite": "kortlivad",
    "description": "Kortlivad betyder att något varar en kort tid. Långlivad betyder att det varar länge.",
    "examples": [
      "Trenden blev kortlivad, men traditionen är långlivad.",
      "En kortlivad blomma kan växa på en långlivad buske."
    ],
    "related": [
      "kortlivad"
    ]
  },
  "inåt": {
    "opposite": "utåt",
    "description": "Inåt betyder mot insidan. Utåt betyder mot utsidan.",
    "examples": [
      "Dörren öppnas inåt, medan grinden öppnas utåt.",
      "Vik kanterna inåt och pressa sedan mitten utåt."
    ],
    "related": [
      "utåt"
    ]
  },
  "utåt": {
    "opposite": "inåt",
    "description": "Inåt betyder mot insidan. Utåt betyder mot utsidan.",
    "examples": [
      "Dörren öppnas inåt, medan grinden öppnas utåt.",
      "Vik kanterna inåt och pressa sedan mitten utåt."
    ],
    "related": [
      "inåt"
    ]
  },
  "misstro": {
    "opposite": "tilltro",
    "description": "Misstro är brist på förtroende. Tilltro är förtroende för någon eller något.",
    "examples": [
      "Efter misstron växte en försiktig tilltro fram.",
      "Hon kände misstro mot ryktet men tilltro till forskningen."
    ],
    "related": [
      "tilltro"
    ]
  },
  "tilltro": {
    "opposite": "misstro",
    "description": "Misstro är brist på förtroende. Tilltro är förtroende för någon eller något.",
    "examples": [
      "Efter misstron växte en försiktig tilltro fram.",
      "Hon kände misstro mot ryktet men tilltro till forskningen."
    ],
    "related": [
      "misstro"
    ]
  },
  "fantasifull": {
    "opposite": "fantasilös",
    "description": "Fantasifull betyder full av nya idéer. Fantasilös betyder att fantasi och nya idéer saknas.",
    "examples": [
      "Berättelsen var fantasifull, men slutet kändes fantasilöst.",
      "En fantasifull lösning ersatte det fantasilösa förslaget."
    ],
    "related": [
      "fantasilös"
    ]
  },
  "fantasilös": {
    "opposite": "fantasifull",
    "description": "Fantasifull betyder full av nya idéer. Fantasilös betyder att fantasi och nya idéer saknas.",
    "examples": [
      "Berättelsen var fantasifull, men slutet kändes fantasilöst.",
      "En fantasifull lösning ersatte det fantasilösa förslaget."
    ],
    "related": [
      "fantasifull"
    ]
  },
  "förbättring": {
    "opposite": "försämring",
    "description": "En förbättring betyder att något blir bättre. En försämring betyder att det blir sämre.",
    "examples": [
      "Den nya behandlingen gav en förbättring, inte en försämring.",
      "Efter veckor av försämring kom äntligen en tydlig förbättring."
    ],
    "related": [
      "försämring"
    ]
  },
  "försämring": {
    "opposite": "förbättring",
    "description": "En förbättring betyder att något blir bättre. En försämring betyder att det blir sämre.",
    "examples": [
      "Den nya behandlingen gav en förbättring, inte en försämring.",
      "Efter veckor av försämring kom äntligen en tydlig förbättring."
    ],
    "related": [
      "förbättring"
    ]
  },
  "avstigning": {
    "opposite": "påstigning",
    "description": "Påstigning betyder att resenärer går ombord. Avstigning betyder att de går av.",
    "examples": [
      "Vänta med påstigning tills all avstigning är klar.",
      "Påstigning sker fram och avstigning bak."
    ],
    "related": [
      "påstigning"
    ]
  },
  "påstigning": {
    "opposite": "avstigning",
    "description": "Påstigning betyder att resenärer går ombord. Avstigning betyder att de går av.",
    "examples": [
      "Vänta med påstigning tills all avstigning är klar.",
      "Påstigning sker fram och avstigning bak."
    ],
    "related": [
      "avstigning"
    ]
  },
  "centralisering": {
    "opposite": "decentralisering",
    "description": "Centralisering samlar ansvar eller beslut på ett ställe. Decentralisering fördelar dem på flera ställen.",
    "examples": [
      "Centralisering gav en gemensam ledning, medan decentralisering gav lokala kontor mer ansvar.",
      "Organisationen gick från centralisering till decentralisering."
    ],
    "related": [
      "decentralisering"
    ]
  },
  "decentralisering": {
    "opposite": "centralisering",
    "description": "Centralisering samlar ansvar eller beslut på ett ställe. Decentralisering fördelar dem på flera ställen.",
    "examples": [
      "Centralisering gav en gemensam ledning, medan decentralisering gav lokala kontor mer ansvar.",
      "Organisationen gick från centralisering till decentralisering."
    ],
    "related": [
      "centralisering"
    ]
  },
  "inbetalning": {
    "opposite": "utbetalning",
    "description": "En inbetalning är pengar som kommer in på ett konto. En utbetalning är pengar som betalas ut.",
    "examples": [
      "Din inbetalning registrerades före dagens utbetalning.",
      "Företaget väntar på kundens inbetalning innan en utbetalning kan göras."
    ],
    "related": [
      "utbetalning"
    ]
  },
  "utbetalning": {
    "opposite": "inbetalning",
    "description": "En inbetalning är pengar som kommer in på ett konto. En utbetalning är pengar som betalas ut.",
    "examples": [
      "Din inbetalning registrerades före dagens utbetalning.",
      "Företaget väntar på kundens inbetalning innan en utbetalning kan göras."
    ],
    "related": [
      "inbetalning"
    ]
  },
  "deltidsanställd": {
    "opposite": "heltidsanställd",
    "description": "En deltidsanställd arbetar en del av heltid. En heltidsanställd arbetar heltid.",
    "examples": [
      "Hon var först deltidsanställd och blev sedan heltidsanställd.",
      "En heltidsanställd arbetar fler timmar än en deltidsanställd."
    ],
    "related": [
      "heltidsanställd"
    ]
  },
  "heltidsanställd": {
    "opposite": "deltidsanställd",
    "description": "En deltidsanställd arbetar en del av heltid. En heltidsanställd arbetar heltid.",
    "examples": [
      "Hon var först deltidsanställd och blev sedan heltidsanställd.",
      "En heltidsanställd arbetar fler timmar än en deltidsanställd."
    ],
    "related": [
      "deltidsanställd"
    ]
  },
  "högintensiv": {
    "opposite": "lågintensiv",
    "description": "Högintensiv betyder att något sker med hög kraft eller aktivitet. Lågintensiv betyder att nivån är låg.",
    "examples": [
      "Passet började lågintensivt och avslutades högintensivt.",
      "Högintensiv träning kräver mer ansträngning än lågintensiv träning."
    ],
    "related": [
      "lågintensiv"
    ]
  },
  "lågintensiv": {
    "opposite": "högintensiv",
    "description": "Högintensiv betyder att något sker med hög kraft eller aktivitet. Lågintensiv betyder att nivån är låg.",
    "examples": [
      "Passet började lågintensivt och avslutades högintensivt.",
      "Högintensiv träning kräver mer ansträngning än lågintensiv träning."
    ],
    "related": [
      "högintensiv"
    ]
  },
  "dubbelsäng": {
    "opposite": "enkelsäng",
    "description": "En dubbelsäng är avsedd för två personer. En enkelsäng är avsedd för en person.",
    "examples": [
      "Rummet har en dubbelsäng, medan det mindre rummet har en enkelsäng.",
      "De bytte ut två enkelsängar mot en dubbelsäng."
    ],
    "related": [
      "enkelsäng"
    ]
  },
  "enkelsäng": {
    "opposite": "dubbelsäng",
    "description": "En dubbelsäng är avsedd för två personer. En enkelsäng är avsedd för en person.",
    "examples": [
      "Rummet har en dubbelsäng, medan det mindre rummet har en enkelsäng.",
      "De bytte ut två enkelsängar mot en dubbelsäng."
    ],
    "related": [
      "dubbelsäng"
    ]
  },
  "födelseår": {
    "opposite": "dödsår",
    "description": "Födelseår är året då någon föddes. Dödsår är året då någon dog.",
    "examples": [
      "På stenen står både hennes födelseår och dödsår.",
      "Födelseåret var 1902 och dödsåret 1987."
    ],
    "related": [
      "dödsår"
    ]
  },
  "dödsår": {
    "opposite": "födelseår",
    "description": "Födelseår är året då någon föddes. Dödsår är året då någon dog.",
    "examples": [
      "På stenen står både hennes födelseår och dödsår.",
      "Födelseåret var 1902 och dödsåret 1987."
    ],
    "related": [
      "födelseår"
    ]
  },
  "köldvåg": {
    "opposite": "värmebölja",
    "description": "En köldvåg är en period med ovanligt kallt väder. En värmebölja är en period med ovanligt varmt väder.",
    "examples": [
      "Vintern gav en köldvåg och sommaren en värmebölja.",
      "Efter förra månadens köldvåg kom plötsligt en värmebölja."
    ],
    "related": [
      "värmebölja"
    ]
  },
  "värmebölja": {
    "opposite": "köldvåg",
    "description": "En köldvåg är en period med ovanligt kallt väder. En värmebölja är en period med ovanligt varmt väder.",
    "examples": [
      "Vintern gav en köldvåg och sommaren en värmebölja.",
      "Efter förra månadens köldvåg kom plötsligt en värmebölja."
    ],
    "related": [
      "köldvåg"
    ]
  },
  "lastning": {
    "opposite": "lossning",
    "description": "Lastning betyder att varor läggs på ett fordon. Lossning betyder att de tas av.",
    "examples": [
      "Lastning sker på morgonen och lossning efter ankomsten.",
      "Föraren hjälper till med både lastning och lossning."
    ],
    "related": [
      "lossning"
    ]
  },
  "lossning": {
    "opposite": "lastning",
    "description": "Lastning betyder att varor läggs på ett fordon. Lossning betyder att de tas av.",
    "examples": [
      "Lastning sker på morgonen och lossning efter ankomsten.",
      "Föraren hjälper till med både lastning och lossning."
    ],
    "related": [
      "lastning"
    ]
  },
  "underdel": {
    "opposite": "överdel",
    "description": "Underdelen är den nedre delen av något. Överdelen är den övre delen.",
    "examples": [
      "Skåpets underdel är mörk och överdelen är ljus.",
      "Fäst först underdelen och sedan överdelen."
    ],
    "related": [
      "överdel"
    ]
  },
  "överdel": {
    "opposite": "underdel",
    "description": "Underdelen är den nedre delen av något. Överdelen är den övre delen.",
    "examples": [
      "Skåpets underdel är mörk och överdelen är ljus.",
      "Fäst först underdelen och sedan överdelen."
    ],
    "related": [
      "underdel"
    ]
  },
  "skattehöjning": {
    "opposite": "skattesänkning",
    "description": "En skattehöjning innebär att skatten ökar. En skattesänkning innebär att skatten minskar.",
    "examples": [
      "Förslaget ändrades från en skattehöjning till en skattesänkning.",
      "En skattehöjning ger högre skatt, medan en skattesänkning ger lägre skatt."
    ],
    "related": [
      "skattesänkning"
    ]
  },
  "skattesänkning": {
    "opposite": "skattehöjning",
    "description": "En skattehöjning innebär att skatten ökar. En skattesänkning innebär att skatten minskar.",
    "examples": [
      "Förslaget ändrades från en skattehöjning till en skattesänkning.",
      "En skattehöjning ger högre skatt, medan en skattesänkning ger lägre skatt."
    ],
    "related": [
      "skattehöjning"
    ]
  },
  "kortfristig": {
    "opposite": "långfristig",
    "description": "Kortfristig gäller en kort tidsperiod. Långfristig gäller en lång tidsperiod.",
    "examples": [
      "Företaget behöver både kortfristig finansiering och en långfristig plan.",
      "En kortfristig skuld betalas tidigare än en långfristig skuld."
    ],
    "related": [
      "långfristig"
    ]
  },
  "långfristig": {
    "opposite": "kortfristig",
    "description": "Kortfristig gäller en kort tidsperiod. Långfristig gäller en lång tidsperiod.",
    "examples": [
      "Företaget behöver både kortfristig finansiering och en långfristig plan.",
      "En kortfristig skuld betalas tidigare än en långfristig skuld."
    ],
    "related": [
      "kortfristig"
    ]
  },
  "kalluft": {
    "opposite": "varmluft",
    "description": "Kalluft är luft med låg temperatur. Varmluft är luft med hög temperatur.",
    "examples": [
      "Fläkten blåser kalluft nu men varmluft på vintern.",
      "Kalluft sjunker ofta, medan varmluft stiger."
    ],
    "related": [
      "varmluft"
    ]
  },
  "varmluft": {
    "opposite": "kalluft",
    "description": "Kalluft är luft med låg temperatur. Varmluft är luft med hög temperatur.",
    "examples": [
      "Fläkten blåser kalluft nu men varmluft på vintern.",
      "Kalluft sjunker ofta, medan varmluft stiger."
    ],
    "related": [
      "kalluft"
    ]
  },
  "bakficka": {
    "opposite": "framficka",
    "description": "En bakficka sitter på baksidan av ett plagg. En framficka sitter på framsidan.",
    "examples": [
      "Plånboken låg i bakfickan och nyckeln i framfickan.",
      "Jeansen har två bakfickor och två framfickor."
    ],
    "related": [
      "framficka"
    ]
  },
  "framficka": {
    "opposite": "bakficka",
    "description": "En bakficka sitter på baksidan av ett plagg. En framficka sitter på framsidan.",
    "examples": [
      "Plånboken låg i bakfickan och nyckeln i framfickan.",
      "Jeansen har två bakfickor och två framfickor."
    ],
    "related": [
      "bakficka"
    ]
  },
  "primärkälla": {
    "opposite": "sekundärkälla",
    "description": "En primärkälla ger förstahandsinformation. En sekundärkälla återger eller tolkar information från andra källor.",
    "examples": [
      "Dagboken är en primärkälla, medan läroboken är en sekundärkälla.",
      "Kontrollera uppgiften i en primärkälla och använd sekundärkällan som bakgrund."
    ],
    "related": [
      "sekundärkälla"
    ]
  },
  "sekundärkälla": {
    "opposite": "primärkälla",
    "description": "En primärkälla ger förstahandsinformation. En sekundärkälla återger eller tolkar information från andra källor.",
    "examples": [
      "Dagboken är en primärkälla, medan läroboken är en sekundärkälla.",
      "Kontrollera uppgiften i en primärkälla och använd sekundärkällan som bakgrund."
    ],
    "related": [
      "primärkälla"
    ]
  },
  "bruttolön": {
    "opposite": "nettolön",
    "description": "Bruttolön är lön före skatt. Nettolön är det som återstår efter skatt och andra avdrag.",
    "examples": [
      "Bruttolönen står överst på beskedet och nettolönen längst ner.",
      "Nettolönen är lägre än bruttolönen eftersom skatt har dragits av."
    ],
    "related": [
      "nettolön"
    ]
  },
  "nettolön": {
    "opposite": "bruttolön",
    "description": "Bruttolön är lön före skatt. Nettolön är det som återstår efter skatt och andra avdrag.",
    "examples": [
      "Bruttolönen står överst på beskedet och nettolönen längst ner.",
      "Nettolönen är lägre än bruttolönen eftersom skatt har dragits av."
    ],
    "related": [
      "bruttolön"
    ]
  },
  "inflöde": {
    "opposite": "utflöde",
    "description": "Inflöde är något som strömmar in. Utflöde är något som strömmar ut.",
    "examples": [
      "Sjöns inflöde var större än dess utflöde.",
      "Företaget jämför inflödet av pengar med utflödet."
    ],
    "related": [
      "utflöde"
    ]
  },
  "utflöde": {
    "opposite": "inflöde",
    "description": "Inflöde är något som strömmar in. Utflöde är något som strömmar ut.",
    "examples": [
      "Sjöns inflöde var större än dess utflöde.",
      "Företaget jämför inflödet av pengar med utflödet."
    ],
    "related": [
      "inflöde"
    ]
  },
  "nedtill": {
    "opposite": "upptill",
    "description": "Nedtill betyder i den nedre delen. Upptill betyder i den övre delen.",
    "examples": [
      "Skåpet är blått nedtill och vitt upptill.",
      "Skriv namnet upptill och datumet nedtill."
    ],
    "related": [
      "upptill"
    ]
  },
  "upptill": {
    "opposite": "nedtill",
    "description": "Nedtill betyder i den nedre delen. Upptill betyder i den övre delen.",
    "examples": [
      "Skåpet är blått nedtill och vitt upptill.",
      "Skriv namnet upptill och datumet nedtill."
    ],
    "related": [
      "nedtill"
    ]
  },
  "innerkant": {
    "opposite": "ytterkant",
    "description": "Innerkanten ligger närmast mitten eller insidan. Ytterkanten ligger längst ut.",
    "examples": [
      "Sy längs innerkanten och klipp vid ytterkanten.",
      "Tallriken är vit i mitten och blå vid ytterkanten, medan innerkanten har ett smalt mönster."
    ],
    "related": [
      "ytterkant"
    ]
  },
  "ytterkant": {
    "opposite": "innerkant",
    "description": "Innerkanten ligger närmast mitten eller insidan. Ytterkanten ligger längst ut.",
    "examples": [
      "Sy längs innerkanten och klipp vid ytterkanten.",
      "Tallriken är vit i mitten och blå vid ytterkanten, medan innerkanten har ett smalt mönster."
    ],
    "related": [
      "innerkant"
    ]
  },
  "krympning": {
    "opposite": "svällning",
    "description": "Krympning betyder att något blir mindre. Svällning betyder att det blir större eller tjockare.",
    "examples": [
      "Torkning kan ge krympning, medan fukt kan ge svällning.",
      "Materialets krympning på vintern och svällning på sommaren måste räknas med."
    ],
    "related": [
      "svällning"
    ]
  },
  "svällning": {
    "opposite": "krympning",
    "description": "Krympning betyder att något blir mindre. Svällning betyder att det blir större eller tjockare.",
    "examples": [
      "Torkning kan ge krympning, medan fukt kan ge svällning.",
      "Materialets krympning på vintern och svällning på sommaren måste räknas med."
    ],
    "related": [
      "krympning"
    ]
  },
  "säljbar": {
    "opposite": "osäljbar",
    "description": "Säljbar betyder att något går att sälja. Osäljbar betyder att det inte går att sälja.",
    "examples": [
      "Den hela varan är säljbar, men den skadade är osäljbar.",
      "Efter reparationen blev produkten säljbar i stället för osäljbar."
    ],
    "related": [
      "osäljbar"
    ]
  },
  "osäljbar": {
    "opposite": "säljbar",
    "description": "Säljbar betyder att något går att sälja. Osäljbar betyder att det inte går att sälja.",
    "examples": [
      "Den hela varan är säljbar, men den skadade är osäljbar.",
      "Efter reparationen blev produkten säljbar i stället för osäljbar."
    ],
    "related": [
      "säljbar"
    ]
  },
  "upplöslig": {
    "opposite": "oupplöslig",
    "description": "Upplöslig betyder att ett ämne kan lösas i en vätska. Oupplöslig betyder att det inte kan lösas där.",
    "examples": [
      "Salt är upplösligt i vatten, men sand är i stort sett oupplöslig.",
      "Ett upplösligt ämne försvinner i lösningen, medan ett oupplösligt ämne blir kvar."
    ],
    "related": [
      "oupplöslig"
    ]
  },
  "oupplöslig": {
    "opposite": "upplöslig",
    "description": "Upplöslig betyder att ett ämne kan lösas i en vätska. Oupplöslig betyder att det inte kan lösas där.",
    "examples": [
      "Salt är upplösligt i vatten, men sand är i stort sett oupplöslig.",
      "Ett upplösligt ämne försvinner i lösningen, medan ett oupplösligt ämne blir kvar."
    ],
    "related": [
      "upplöslig"
    ]
  },
  "rekordhög": {
    "opposite": "rekordlåg",
    "description": "Rekordhög betyder högre än någonsin tidigare. Rekordlåg betyder lägre än någonsin tidigare.",
    "examples": [
      "Temperaturen var rekordhög i juli och rekordlåg i januari.",
      "Efter en rekordhög försäljning följde en rekordlåg månad."
    ],
    "related": [
      "rekordlåg"
    ]
  },
  "rekordlåg": {
    "opposite": "rekordhög",
    "description": "Rekordhög betyder högre än någonsin tidigare. Rekordlåg betyder lägre än någonsin tidigare.",
    "examples": [
      "Temperaturen var rekordhög i juli och rekordlåg i januari.",
      "Efter en rekordhög försäljning följde en rekordlåg månad."
    ],
    "related": [
      "rekordhög"
    ]
  },
  "längsgående": {
    "opposite": "tvärgående",
    "description": "Längsgående betyder i samma riktning som längden. Tvärgående betyder tvärs över längdriktningen.",
    "examples": [
      "Bron har längsgående balkar och tvärgående stöd.",
      "Det längsgående spåret korsas av en tvärgående linje."
    ],
    "related": [
      "tvärgående"
    ]
  },
  "tvärgående": {
    "opposite": "längsgående",
    "description": "Längsgående betyder i samma riktning som längden. Tvärgående betyder tvärs över längdriktningen.",
    "examples": [
      "Bron har längsgående balkar och tvärgående stöd.",
      "Det längsgående spåret korsas av en tvärgående linje."
    ],
    "related": [
      "längsgående"
    ]
  },
  "offentligägd": {
    "opposite": "privatägd",
    "description": "Offentligägd betyder ägd av staten, en region eller en kommun. Privatägd betyder ägd av privata personer eller företag.",
    "examples": [
      "Det ena bolaget är offentligägt och det andra privatägt.",
      "En offentligägd verksamhet kan säljas och bli privatägd."
    ],
    "related": [
      "privatägd"
    ]
  },
  "privatägd": {
    "opposite": "offentligägd",
    "description": "Offentligägd betyder ägd av staten, en region eller en kommun. Privatägd betyder ägd av privata personer eller företag.",
    "examples": [
      "Det ena bolaget är offentligägt och det andra privatägt.",
      "En offentligägd verksamhet kan säljas och bli privatägd."
    ],
    "related": [
      "offentligägd"
    ]
  },
  "kortsiktig": {
    "opposite": "långsiktig",
    "description": "Kortsiktig gäller den närmaste tiden. Långsiktig gäller en längre tid framåt.",
    "examples": [
      "Den kortsiktiga lösningen hjälpte i dag, men vi behöver också en långsiktig plan.",
      "En kortsiktig vinst kan skada ett långsiktigt mål."
    ],
    "related": [
      "långsiktig"
    ]
  },
  "långsiktig": {
    "opposite": "kortsiktig",
    "description": "Kortsiktig gäller den närmaste tiden. Långsiktig gäller en längre tid framåt.",
    "examples": [
      "Den kortsiktiga lösningen hjälpte i dag, men vi behöver också en långsiktig plan.",
      "En kortsiktig vinst kan skada ett långsiktigt mål."
    ],
    "related": [
      "kortsiktig"
    ]
  },
  "högkonjunktur": {
    "opposite": "lågkonjunktur",
    "description": "Högkonjunktur är en period med stark ekonomi och hög aktivitet. Lågkonjunktur är en period med svagare ekonomi och lägre aktivitet.",
    "examples": [
      "Arbetslösheten sjunker ofta i högkonjunktur och stiger i lågkonjunktur.",
      "Efter flera år av högkonjunktur gick ekonomin in i en lågkonjunktur."
    ],
    "related": [
      "lågkonjunktur"
    ]
  },
  "lågkonjunktur": {
    "opposite": "högkonjunktur",
    "description": "Högkonjunktur är en period med stark ekonomi och hög aktivitet. Lågkonjunktur är en period med svagare ekonomi och lägre aktivitet.",
    "examples": [
      "Arbetslösheten sjunker ofta i högkonjunktur och stiger i lågkonjunktur.",
      "Efter flera år av högkonjunktur gick ekonomin in i en lågkonjunktur."
    ],
    "related": [
      "högkonjunktur"
    ]
  },
  "barn": {
    "opposite": "vuxen",
    "description": "Barn och vuxen beskriver människor i olika åldersgrupper.",
    "examples": [
      "Ett barn behöver ofta hjälp av en vuxen.",
      "Hon var barn då, men nu är hon vuxen."
    ],
    "related": [
      "vuxen"
    ]
  },
  "vuxen": {
    "opposite": "barn",
    "description": "Barn och vuxen beskriver människor i olika åldersgrupper.",
    "examples": [
      "Ett barn behöver ofta hjälp av en vuxen.",
      "Hon var barn då, men nu är hon vuxen."
    ],
    "related": [
      "barn"
    ]
  },
  "acceleration": {
    "opposite": "retardation",
    "description": "Acceleration betyder att hastigheten ökar. Retardation betyder att hastigheten minskar.",
    "examples": [
      "Bilen fick hög acceleration när föraren gasade och retardation när hon bromsade.",
      "Tågets acceleration följdes av en jämn retardation inför stationen."
    ],
    "related": [
      "retardation"
    ]
  },
  "retardation": {
    "opposite": "acceleration",
    "description": "Acceleration betyder att hastigheten ökar. Retardation betyder att hastigheten minskar.",
    "examples": [
      "Bilen fick hög acceleration när föraren gasade och retardation när hon bromsade.",
      "Tågets acceleration följdes av en jämn retardation inför stationen."
    ],
    "related": [
      "acceleration"
    ]
  },
  "filantrop": {
    "opposite": "misantrop",
    "description": "En filantrop vill människors bästa. En misantrop känner motvilja mot människor.",
    "examples": [
      "Filantropen skänkte pengar till samhället, medan misantropen undvek människor.",
      "Hon beskrevs som filantrop, inte som misantrop."
    ],
    "related": [
      "misantrop"
    ]
  },
  "misantrop": {
    "opposite": "filantrop",
    "description": "En filantrop vill människors bästa. En misantrop känner motvilja mot människor.",
    "examples": [
      "Filantropen skänkte pengar till samhället, medan misantropen undvek människor.",
      "Hon beskrevs som filantrop, inte som misantrop."
    ],
    "related": [
      "filantrop"
    ]
  },
  "extrovert": {
    "opposite": "introvert",
    "description": "En extrovert person söker ofta socialt umgänge. En introvert person hämtar ofta energi i lugn och ensamhet.",
    "examples": [
      "Han är extrovert och pratar gärna med nya människor, medan hon är mer introvert.",
      "En extrovert person kan trivas på festen och en introvert person i ett mindre sällskap."
    ],
    "related": [
      "introvert"
    ]
  },
  "introvert": {
    "opposite": "extrovert",
    "description": "En extrovert person söker ofta socialt umgänge. En introvert person hämtar ofta energi i lugn och ensamhet.",
    "examples": [
      "Han är extrovert och pratar gärna med nya människor, medan hon är mer introvert.",
      "En extrovert person kan trivas på festen och en introvert person i ett mindre sällskap."
    ],
    "related": [
      "extrovert"
    ]
  },
  "demokrati": {
    "opposite": "diktatur",
    "description": "I en demokrati väljer folket sina ledare. I en diktatur är makten samlad hos en person eller en liten grupp.",
    "examples": [
      "Medborgarna kan rösta fritt i en demokrati men saknar ofta den möjligheten i en diktatur.",
      "Landet gick från diktatur till demokrati."
    ],
    "related": [
      "diktatur"
    ]
  },
  "diktatur": {
    "opposite": "demokrati",
    "description": "I en demokrati väljer folket sina ledare. I en diktatur är makten samlad hos en person eller en liten grupp.",
    "examples": [
      "Medborgarna kan rösta fritt i en demokrati men saknar ofta den möjligheten i en diktatur.",
      "Landet gick från diktatur till demokrati."
    ],
    "related": [
      "demokrati"
    ]
  },
  "svart": {
    "opposite": "vit",
    "description": "Svart och vit är färger som ofta betraktas som varandras motsatser.",
    "examples": [
      "Texten är svart och papperet är vitt.",
      "Hon valde en vit skjorta i stället för en svart."
    ],
    "related": [
      "vit"
    ]
  },
  "vit": {
    "opposite": "svart",
    "description": "Svart och vit är färger som ofta betraktas som varandras motsatser.",
    "examples": [
      "Texten är svart och papperet är vitt.",
      "Hon valde en vit skjorta i stället för en svart."
    ],
    "related": [
      "svart"
    ]
  },
  "antonym": {
    "opposite": "synonym",
    "description": "En antonym har motsatt betydelse. En synonym har samma eller nästan samma betydelse.",
    "examples": [
      "Liten är en antonym till stor, medan enorm är en synonym till jättestor.",
      "Slå upp en antonym när du söker en motsats och en synonym när du söker ett liknande ord."
    ],
    "related": [
      "synonym"
    ]
  },
  "synonym": {
    "opposite": "antonym",
    "description": "En antonym har motsatt betydelse. En synonym har samma eller nästan samma betydelse.",
    "examples": [
      "Liten är en antonym till stor, medan enorm är en synonym till jättestor.",
      "Slå upp en antonym när du söker en motsats och en synonym när du söker ett liknande ord."
    ],
    "related": [
      "antonym"
    ]
  },
  "berg": {
    "opposite": "dal",
    "description": "Ett berg höjer sig över landskapet. En dal är ett lågt område mellan höjder.",
    "examples": [
      "Vägen går över ett berg och ner i en dal.",
      "Byn ligger i dalen nedanför berget."
    ],
    "related": [
      "dal"
    ]
  },
  "dal": {
    "opposite": "berg",
    "description": "Ett berg höjer sig över landskapet. En dal är ett lågt område mellan höjder.",
    "examples": [
      "Vägen går över ett berg och ner i en dal.",
      "Byn ligger i dalen nedanför berget."
    ],
    "related": [
      "berg"
    ]
  },
  "bakom": {
    "opposite": "framför",
    "description": "Bakom betyder på baksidan av något. Framför betyder på framsidan.",
    "examples": [
      "Cykeln står bakom huset och bilen står framför huset.",
      "Hon gick framför mig, medan han gick bakom."
    ],
    "related": [
      "framför"
    ]
  },
  "framför": {
    "opposite": "bakom",
    "description": "Bakom betyder på baksidan av något. Framför betyder på framsidan.",
    "examples": [
      "Cykeln står bakom huset och bilen står framför huset.",
      "Hon gick framför mig, medan han gick bakom."
    ],
    "related": [
      "bakom"
    ]
  },
  "generell": {
    "opposite": "specifik",
    "description": "Generell betyder allmän och övergripande. Specifik betyder tydligt avgränsad eller exakt.",
    "examples": [
      "Rapporten ger först en generell bild och sedan specifik information.",
      "Frågan var generell, men svaret var specifikt."
    ],
    "related": [
      "specifik"
    ]
  },
  "specifik": {
    "opposite": "generell",
    "description": "Generell betyder allmän och övergripande. Specifik betyder tydligt avgränsad eller exakt.",
    "examples": [
      "Rapporten ger först en generell bild och sedan specifik information.",
      "Frågan var generell, men svaret var specifikt."
    ],
    "related": [
      "generell"
    ]
  },
  "explicit": {
    "opposite": "implicit",
    "description": "Explicit betyder tydligt uttryckt. Implicit betyder underförstått utan att sägas direkt.",
    "examples": [
      "Regeln var explicit, medan förväntningen bara var implicit.",
      "Hon gav ett explicit svar på det som tidigare varit implicit."
    ],
    "related": [
      "implicit"
    ]
  },
  "implicit": {
    "opposite": "explicit",
    "description": "Explicit betyder tydligt uttryckt. Implicit betyder underförstått utan att sägas direkt.",
    "examples": [
      "Regeln var explicit, medan förväntningen bara var implicit.",
      "Hon gav ett explicit svar på det som tidigare varit implicit."
    ],
    "related": [
      "explicit"
    ]
  },
  "pluralis": {
    "opposite": "singularis",
    "description": "Pluralis är en form för flera. Singularis är en form för en.",
    "examples": [
      "Ordet hus kan stå i både singularis och pluralis.",
      "Katt står här i singularis, medan katter står i pluralis."
    ],
    "related": [
      "singularis"
    ]
  },
  "singularis": {
    "opposite": "pluralis",
    "description": "Pluralis är en form för flera. Singularis är en form för en.",
    "examples": [
      "Ordet hus kan stå i både singularis och pluralis.",
      "Katt står här i singularis, medan katter står i pluralis."
    ],
    "related": [
      "pluralis"
    ]
  },
  "ost": {
    "opposite": "väst",
    "description": "Ost är ett äldre eller sjömansmässigt ord för öster. Väst är motsatt väderstreck.",
    "examples": [
      "Solen går upp i ost och ner i väst.",
      "Båten seglade först mot ost och sedan mot väst."
    ],
    "related": [
      "väst"
    ]
  },
  "väst": {
    "opposite": "ost",
    "description": "Ost är ett äldre eller sjömansmässigt ord för öster. Väst är motsatt väderstreck.",
    "examples": [
      "Solen går upp i ost och ner i väst.",
      "Båten seglade först mot ost och sedan mot väst."
    ],
    "related": [
      "ost"
    ]
  },
  "dividera": {
    "opposite": "multiplicera",
    "description": "Att dividera är att dela ett tal. Att multiplicera är att gångra ett tal.",
    "examples": [
      "Dividera tolv med tre och multiplicera sedan svaret med två.",
      "Hon multiplicerade först talen men skulle egentligen dividera dem."
    ],
    "related": [
      "multiplicera"
    ]
  },
  "multiplicera": {
    "opposite": "dividera",
    "description": "Att dividera är att dela ett tal. Att multiplicera är att gångra ett tal.",
    "examples": [
      "Dividera tolv med tre och multiplicera sedan svaret med två.",
      "Hon multiplicerade först talen men skulle egentligen dividera dem."
    ],
    "related": [
      "dividera"
    ]
  },
  "ebb": {
    "opposite": "flod",
    "description": "Ebb är lågvatten när havet drar sig tillbaka. Flod är högvatten när vattnet stiger.",
    "examples": [
      "Båten stod på botten vid ebb men flöt igen vid flod.",
      "Tidvattnet växlar mellan ebb och flod."
    ],
    "related": [
      "flod"
    ]
  },
  "flod": {
    "opposite": "ebb",
    "description": "Ebb är lågvatten när havet drar sig tillbaka. Flod är högvatten när vattnet stiger.",
    "examples": [
      "Båten stod på botten vid ebb men flöt igen vid flod.",
      "Tidvattnet växlar mellan ebb och flod."
    ],
    "related": [
      "ebb"
    ]
  },
  "lik": {
    "opposite": "olik",
    "description": "Lik betyder att något påminner om något annat. Olik betyder att det skiljer sig.",
    "examples": [
      "Syskonen är lika till utseendet men olika till sättet.",
      "De två svaren verkar lika, men detaljerna är olika."
    ],
    "related": [
      "olik"
    ]
  },
  "olik": {
    "opposite": "lik",
    "description": "Lik betyder att något påminner om något annat. Olik betyder att det skiljer sig.",
    "examples": [
      "Syskonen är lika till utseendet men olika till sättet.",
      "De två svaren verkar lika, men detaljerna är olika."
    ],
    "related": [
      "lik"
    ]
  },
  "delbar": {
    "opposite": "odelbar",
    "description": "Delbar betyder att något kan delas. Odelbar betyder att det inte kan delas i det aktuella sammanhanget.",
    "examples": [
      "Talet tio är delbart med två, men elva är odelbart med två.",
      "Egendomen var delbar, medan den andra tillgången behandlades som odelbar."
    ],
    "related": [
      "odelbar"
    ]
  },
  "odelbar": {
    "opposite": "delbar",
    "description": "Delbar betyder att något kan delas. Odelbar betyder att det inte kan delas i det aktuella sammanhanget.",
    "examples": [
      "Talet tio är delbart med två, men elva är odelbart med två.",
      "Egendomen var delbar, medan den andra tillgången behandlades som odelbar."
    ],
    "related": [
      "delbar"
    ]
  },
  "majoritet": {
    "opposite": "minoritet",
    "description": "En majoritet är den större delen av en grupp. En minoritet är den mindre delen.",
    "examples": [
      "En majoritet röstade ja och en minoritet röstade nej.",
      "Förslaget stöddes av majoriteten men inte av minoriteten."
    ],
    "related": [
      "minoritet"
    ]
  },
  "minoritet": {
    "opposite": "majoritet",
    "description": "En majoritet är den större delen av en grupp. En minoritet är den mindre delen.",
    "examples": [
      "En majoritet röstade ja och en minoritet röstade nej.",
      "Förslaget stöddes av majoriteten men inte av minoriteten."
    ],
    "related": [
      "majoritet"
    ]
  },
  "irrationell": {
    "opposite": "rationell",
    "description": "Rationell betyder grundad på förnuft. Irrationell betyder att resonemanget inte följer förnuftet.",
    "examples": [
      "Beslutet var rationellt, men rädslan bakom det var irrationell.",
      "Hon försökte ersätta den irrationella tanken med en rationell bedömning."
    ],
    "related": [
      "rationell"
    ]
  },
  "rationell": {
    "opposite": "irrationell",
    "description": "Rationell betyder grundad på förnuft. Irrationell betyder att resonemanget inte följer förnuftet.",
    "examples": [
      "Beslutet var rationellt, men rädslan bakom det var irrationell.",
      "Hon försökte ersätta den irrationella tanken med en rationell bedömning."
    ],
    "related": [
      "irrationell"
    ]
  },
  "human": {
    "opposite": "inhuman",
    "description": "Human betyder medmänsklig och hänsynsfull. Inhuman betyder omänsklig eller grym.",
    "examples": [
      "De krävde en human behandling och protesterade mot den inhumana metoden.",
      "En human lösning ersatte de inhumana villkoren."
    ],
    "related": [
      "inhuman"
    ]
  },
  "inhuman": {
    "opposite": "human",
    "description": "Human betyder medmänsklig och hänsynsfull. Inhuman betyder omänsklig eller grym.",
    "examples": [
      "De krävde en human behandling och protesterade mot den inhumana metoden.",
      "En human lösning ersatte de inhumana villkoren."
    ],
    "related": [
      "human"
    ]
  },
  "femininum": {
    "opposite": "maskulinum",
    "description": "Femininum och maskulinum är grammatiska genus som betecknar kvinnligt respektive manligt.",
    "examples": [
      "I språket tillhör det ena ordet femininum och det andra maskulinum.",
      "Läraren förklarade skillnaden mellan femininum och maskulinum."
    ],
    "related": [
      "maskulinum"
    ]
  },
  "maskulinum": {
    "opposite": "femininum",
    "description": "Femininum och maskulinum är grammatiska genus som betecknar kvinnligt respektive manligt.",
    "examples": [
      "I språket tillhör det ena ordet femininum och det andra maskulinum.",
      "Läraren förklarade skillnaden mellan femininum och maskulinum."
    ],
    "related": [
      "femininum"
    ]
  },
  "gemen": {
    "opposite": "versal",
    "description": "En gemen är en liten bokstav. En versal är en stor bokstav.",
    "examples": [
      "Ordet börjar med en versal och fortsätter med gemener.",
      "Skriv namnet med versal, inte med gemen, i början."
    ],
    "related": [
      "versal"
    ]
  },
  "versal": {
    "opposite": "gemen",
    "description": "En gemen är en liten bokstav. En versal är en stor bokstav.",
    "examples": [
      "Ordet börjar med en versal och fortsätter med gemener.",
      "Skriv namnet med versal, inte med gemen, i början."
    ],
    "related": [
      "gemen"
    ]
  },
  "högtryck": {
    "opposite": "lågtryck",
    "description": "Högtryck är ett område med högre lufttryck. Lågtryck är ett område med lägre lufttryck.",
    "examples": [
      "Högtryck gav klart väder, medan lågtryck förde med sig regn.",
      "Ett lågtryck närmar sig efter flera dagar med högtryck."
    ],
    "related": [
      "lågtryck"
    ]
  },
  "lågtryck": {
    "opposite": "högtryck",
    "description": "Högtryck är ett område med högre lufttryck. Lågtryck är ett område med lägre lufttryck.",
    "examples": [
      "Högtryck gav klart väder, medan lågtryck förde med sig regn.",
      "Ett lågtryck närmar sig efter flera dagar med högtryck."
    ],
    "related": [
      "högtryck"
    ]
  },
  "altruism": {
    "opposite": "egoism",
    "description": "Altruism sätter andras bästa främst. Egoism sätter det egna intresset främst.",
    "examples": [
      "Hennes altruism fick henne att hjälpa andra utan belöning, medan hans egoism styrde valet.",
      "Handlingen kan ses som altruism snarare än egoism."
    ],
    "related": [
      "egoism"
    ]
  },
  "egoism": {
    "opposite": "altruism",
    "description": "Altruism sätter andras bästa främst. Egoism sätter det egna intresset främst.",
    "examples": [
      "Hennes altruism fick henne att hjälpa andra utan belöning, medan hans egoism styrde valet.",
      "Handlingen kan ses som altruism snarare än egoism."
    ],
    "related": [
      "altruism"
    ]
  },
  "nadir": {
    "opposite": "zenit",
    "description": "Nadir är punkten rakt under betraktaren. Zenit är punkten rakt ovanför.",
    "examples": [
      "Zenit ligger över våra huvuden och nadir rakt under oss.",
      "Stjärnan närmade sig zenit medan den motsatta punkten var nadir."
    ],
    "related": [
      "zenit"
    ]
  },
  "zenit": {
    "opposite": "nadir",
    "description": "Nadir är punkten rakt under betraktaren. Zenit är punkten rakt ovanför.",
    "examples": [
      "Zenit ligger över våra huvuden och nadir rakt under oss.",
      "Stjärnan närmade sig zenit medan den motsatta punkten var nadir."
    ],
    "related": [
      "nadir"
    ]
  },
  "profan": {
    "opposite": "sakral",
    "description": "Profan betyder världslig eller icke-religiös. Sakral betyder helig eller religiös.",
    "examples": [
      "Museet visar både profan konst och sakrala föremål.",
      "Musiken började profant men fick senare en sakral prägel."
    ],
    "related": [
      "sakral"
    ]
  },
  "sakral": {
    "opposite": "profan",
    "description": "Profan betyder världslig eller icke-religiös. Sakral betyder helig eller religiös.",
    "examples": [
      "Museet visar både profan konst och sakrala föremål.",
      "Musiken började profant men fick senare en sakral prägel."
    ],
    "related": [
      "profan"
    ]
  },
  "lika": {
    "opposite": "olika",
    "description": "Lika betyder att saker stämmer överens. Olika betyder att de skiljer sig åt.",
    "examples": [
      "Glasen är lika stora men har olika färger.",
      "Vi tänker olika trots att våra mål är lika."
    ],
    "related": [
      "olika"
    ]
  },
  "olika": {
    "opposite": "lika",
    "description": "Lika betyder att saker stämmer överens. Olika betyder att de skiljer sig åt.",
    "examples": [
      "Glasen är lika stora men har olika färger.",
      "Vi tänker olika trots att våra mål är lika."
    ],
    "related": [
      "lika"
    ]
  },
  "likformig": {
    "opposite": "olikformig",
    "description": "Likformig betyder att något har samma form eller karaktär. Olikformig betyder att det varierar.",
    "examples": [
      "Mönstret är likformigt på ena sidan och olikformigt på den andra.",
      "En likformig yta är jämnare än en olikformig yta."
    ],
    "related": [
      "olikformig"
    ]
  },
  "olikformig": {
    "opposite": "likformig",
    "description": "Likformig betyder att något har samma form eller karaktär. Olikformig betyder att det varierar.",
    "examples": [
      "Mönstret är likformigt på ena sidan och olikformigt på den andra.",
      "En likformig yta är jämnare än en olikformig yta."
    ],
    "related": [
      "likformig"
    ]
  },
  "antimateria": {
    "opposite": "materia",
    "description": "Materia består av vanliga partiklar. Antimateria består av motsvarande antipartiklar.",
    "examples": [
      "När materia möter antimateria kan båda omvandlas till energi.",
      "Forskaren jämförde egenskaper hos materia och antimateria."
    ],
    "related": [
      "materia"
    ]
  },
  "materia": {
    "opposite": "antimateria",
    "description": "Materia består av vanliga partiklar. Antimateria består av motsvarande antipartiklar.",
    "examples": [
      "När materia möter antimateria kan båda omvandlas till energi.",
      "Forskaren jämförde egenskaper hos materia och antimateria."
    ],
    "related": [
      "antimateria"
    ]
  },
  "icke-metall": {
    "opposite": "metall",
    "description": "En metall har typiska metalliska egenskaper. En icke-metall saknar dessa egenskaper.",
    "examples": [
      "Järn är en metall, medan svavel är en icke-metall.",
      "Tabellen skiljer mellan metall och icke-metall."
    ],
    "related": [
      "metall"
    ]
  },
  "metall": {
    "opposite": "icke-metall",
    "description": "En metall har typiska metalliska egenskaper. En icke-metall saknar dessa egenskaper.",
    "examples": [
      "Järn är en metall, medan svavel är en icke-metall.",
      "Tabellen skiljer mellan metall och icke-metall."
    ],
    "related": [
      "icke-metall"
    ]
  },
  "hane": {
    "opposite": "hona",
    "description": "Hane och hona betecknar biologiskt kön hos många djur.",
    "examples": [
      "Fågeln till vänster är en hane och den till höger en hona.",
      "Både hanen och honan vaktar boet."
    ],
    "related": [
      "hona"
    ]
  },
  "hona": {
    "opposite": "hane",
    "description": "Hane och hona betecknar biologiskt kön hos många djur.",
    "examples": [
      "Fågeln till vänster är en hane och den till höger en hona.",
      "Både hanen och honan vaktar boet."
    ],
    "related": [
      "hane"
    ]
  },
  "basisk": {
    "opposite": "sur",
    "description": "En basisk lösning har högt pH. En sur lösning har lågt pH.",
    "examples": [
      "Tvållösningen är basisk, medan citronsaften är sur.",
      "Vattnet gick från surt till basiskt efter behandlingen."
    ],
    "related": [
      "sur"
    ]
  },
  "sur": {
    "opposite": "basisk",
    "description": "En basisk lösning har högt pH. En sur lösning har lågt pH.",
    "examples": [
      "Tvållösningen är basisk, medan citronsaften är sur.",
      "Vattnet gick från surt till basiskt efter behandlingen."
    ],
    "related": [
      "basisk"
    ]
  },
  "genväg": {
    "opposite": "omväg",
    "description": "En genväg är en kortare väg. En omväg är en längre väg runt något.",
    "examples": [
      "Vi tog en genväg genom parken i stället för en omväg runt kvarteret.",
      "Genvägen sparade tid, men omvägen var lättare att gå."
    ],
    "related": [
      "omväg"
    ]
  },
  "omväg": {
    "opposite": "genväg",
    "description": "En genväg är en kortare väg. En omväg är en längre väg runt något.",
    "examples": [
      "Vi tog en genväg genom parken i stället för en omväg runt kvarteret.",
      "Genvägen sparade tid, men omvägen var lättare att gå."
    ],
    "related": [
      "genväg"
    ]
  },
  "baksida": {
    "opposite": "framsida",
    "description": "Baksidan är den bakre sidan av något. Framsidan är den främre sidan.",
    "examples": [
      "Adressen står på baksidan och bilden på framsidan.",
      "Kontrollera både framsidan och baksidan av kortet."
    ],
    "related": [
      "framsida"
    ]
  },
  "framsida": {
    "opposite": "baksida",
    "description": "Baksidan är den bakre sidan av något. Framsidan är den främre sidan.",
    "examples": [
      "Adressen står på baksidan och bilden på framsidan.",
      "Kontrollera både framsidan och baksidan av kortet."
    ],
    "related": [
      "baksida"
    ]
  },
  "krokig": {
    "opposite": "rak",
    "description": "Krokig betyder böjd eller full av svängar. Rak betyder utan böjar.",
    "examples": [
      "Den gamla vägen är krokig, men den nya är rak.",
      "Rita först en rak linje och sedan en krokig."
    ],
    "related": [
      "rak"
    ]
  },
  "rak": {
    "opposite": "krokig",
    "description": "Krokig betyder böjd eller full av svängar. Rak betyder utan böjar.",
    "examples": [
      "Den gamla vägen är krokig, men den nya är rak.",
      "Rita först en rak linje och sedan en krokig."
    ],
    "related": [
      "krokig"
    ]
  },
  "konstgjord": {
    "opposite": "naturlig",
    "description": "Konstgjord betyder skapad av människor. Naturlig betyder uppkommen i naturen.",
    "examples": [
      "Sjön är konstgjord, medan bäcken är naturlig.",
      "De valde naturligt ljus i stället för konstgjort ljus."
    ],
    "related": [
      "naturlig"
    ]
  },
  "naturlig": {
    "opposite": "konstgjord",
    "description": "Konstgjord betyder skapad av människor. Naturlig betyder uppkommen i naturen.",
    "examples": [
      "Sjön är konstgjord, medan bäcken är naturlig.",
      "De valde naturligt ljus i stället för konstgjort ljus."
    ],
    "related": [
      "konstgjord"
    ]
  },
  "belägga": {
    "opposite": "vederlägga",
    "description": "Att belägga ett påstående är att visa stöd för det. Att vederlägga det är att visa att det är fel.",
    "examples": [
      "Studien kunde belägga den första teorin och vederlägga den andra.",
      "Forskaren försökte belägga sitt påstående, men kritikern kunde vederlägga det."
    ],
    "related": [
      "vederlägga"
    ]
  },
  "vederlägga": {
    "opposite": "belägga",
    "description": "Att belägga ett påstående är att visa stöd för det. Att vederlägga det är att visa att det är fel.",
    "examples": [
      "Studien kunde belägga den första teorin och vederlägga den andra.",
      "Forskaren försökte belägga sitt påstående, men kritikern kunde vederlägga det."
    ],
    "related": [
      "belägga"
    ]
  },
  "molnfri": {
    "opposite": "molnig",
    "description": "Molnfri betyder utan moln. Molnig betyder att det finns många moln på himlen.",
    "examples": [
      "Morgonen var molnfri, men eftermiddagen blev molnig.",
      "En molnig himmel klarnade och blev nästan molnfri."
    ],
    "related": [
      "molnig"
    ]
  },
  "molnig": {
    "opposite": "molnfri",
    "description": "Molnfri betyder utan moln. Molnig betyder att det finns många moln på himlen.",
    "examples": [
      "Morgonen var molnfri, men eftermiddagen blev molnig.",
      "En molnig himmel klarnade och blev nästan molnfri."
    ],
    "related": [
      "molnfri"
    ]
  },
  "felaktig": {
    "opposite": "korrekt",
    "description": "Felaktig betyder att något innehåller fel. Korrekt betyder att det stämmer.",
    "examples": [
      "Det första svaret var felaktigt, men det andra var korrekt.",
      "Rätta den felaktiga uppgiften så att informationen blir korrekt."
    ],
    "related": [
      "korrekt"
    ]
  },
  "korrekt": {
    "opposite": "felaktig",
    "description": "Felaktig betyder att något innehåller fel. Korrekt betyder att det stämmer.",
    "examples": [
      "Det första svaret var felaktigt, men det andra var korrekt.",
      "Rätta den felaktiga uppgiften så att informationen blir korrekt."
    ],
    "related": [
      "felaktig"
    ]
  },
  "förminska": {
    "opposite": "förstora",
    "description": "Att förminska är att göra något mindre. Att förstora är att göra det större.",
    "examples": [
      "Du kan förminska bilden eller förstora den på skärmen.",
      "Hon förminskade rubriken men förstorade fotografiet."
    ],
    "related": [
      "förstora"
    ]
  },
  "förstora": {
    "opposite": "förminska",
    "description": "Att förminska är att göra något mindre. Att förstora är att göra det större.",
    "examples": [
      "Du kan förminska bilden eller förstora den på skärmen.",
      "Hon förminskade rubriken men förstorade fotografiet."
    ],
    "related": [
      "förminska"
    ]
  },
  "nederlag": {
    "opposite": "seger",
    "description": "Nederlag betyder att förlora. Seger betyder att vinna.",
    "examples": [
      "Efter gårdagens nederlag kom dagens seger.",
      "Laget firade sin seger och lärde sig av sitt tidigare nederlag."
    ],
    "related": [
      "seger"
    ]
  },
  "seger": {
    "opposite": "nederlag",
    "description": "Nederlag betyder att förlora. Seger betyder att vinna.",
    "examples": [
      "Efter gårdagens nederlag kom dagens seger.",
      "Laget firade sin seger och lärde sig av sitt tidigare nederlag."
    ],
    "related": [
      "nederlag"
    ]
  },
  "anjon": {
    "opposite": "katjon",
    "description": "En anjon är en negativt laddad jon. En katjon är en positivt laddad jon.",
    "examples": [
      "Kloridjonen är en anjon och natriumjonen en katjon.",
      "En anjon dras mot den positiva elektroden och en katjon mot den negativa."
    ],
    "related": [
      "katjon"
    ]
  },
  "katjon": {
    "opposite": "anjon",
    "description": "En anjon är en negativt laddad jon. En katjon är en positivt laddad jon.",
    "examples": [
      "Kloridjonen är en anjon och natriumjonen en katjon.",
      "En anjon dras mot den positiva elektroden och en katjon mot den negativa."
    ],
    "related": [
      "anjon"
    ]
  },
  "apolitisk": {
    "opposite": "politisk",
    "description": "Apolitisk betyder utan politisk inriktning. Politisk betyder att något rör politik.",
    "examples": [
      "Föreningen säger sig vara apolitisk, medan kampanjen är tydligt politisk.",
      "Samtalet började apolitiskt men blev snart politiskt."
    ],
    "related": [
      "politisk"
    ]
  },
  "politisk": {
    "opposite": "apolitisk",
    "description": "Apolitisk betyder utan politisk inriktning. Politisk betyder att något rör politik.",
    "examples": [
      "Föreningen säger sig vara apolitisk, medan kampanjen är tydligt politisk.",
      "Samtalet började apolitiskt men blev snart politiskt."
    ],
    "related": [
      "apolitisk"
    ]
  },
  "uppladdning": {
    "opposite": "urladdning",
    "description": "Uppladdning fyller ett batteri med energi. Urladdning minskar den lagrade energin.",
    "examples": [
      "Batteriet behöver uppladdning efter en lång urladdning.",
      "Snabb uppladdning följdes av långsam urladdning."
    ],
    "related": [
      "urladdning"
    ]
  },
  "urladdning": {
    "opposite": "uppladdning",
    "description": "Uppladdning fyller ett batteri med energi. Urladdning minskar den lagrade energin.",
    "examples": [
      "Batteriet behöver uppladdning efter en lång urladdning.",
      "Snabb uppladdning följdes av långsam urladdning."
    ],
    "related": [
      "uppladdning"
    ]
  },
  "fysisk": {
    "opposite": "psykisk",
    "description": "Fysisk rör kroppen. Psykisk rör tankar, känslor och mående.",
    "examples": [
      "Träningen kräver fysisk styrka, medan pressen kan vara psykisk.",
      "Hon fick både fysisk och psykisk hjälp."
    ],
    "related": [
      "psykisk"
    ]
  },
  "psykisk": {
    "opposite": "fysisk",
    "description": "Fysisk rör kroppen. Psykisk rör tankar, känslor och mående.",
    "examples": [
      "Träningen kräver fysisk styrka, medan pressen kan vara psykisk.",
      "Hon fick både fysisk och psykisk hjälp."
    ],
    "related": [
      "fysisk"
    ]
  },
  "bakgrund": {
    "opposite": "förgrund",
    "description": "Bakgrunden ligger längre bak i en bild. Förgrunden ligger närmast betraktaren.",
    "examples": [
      "Berget syns i bakgrunden och trädet i förgrunden.",
      "Fotografen gjorde förgrunden skarp och bakgrunden suddig."
    ],
    "related": [
      "förgrund"
    ]
  },
  "förgrund": {
    "opposite": "bakgrund",
    "description": "Bakgrunden ligger längre bak i en bild. Förgrunden ligger närmast betraktaren.",
    "examples": [
      "Berget syns i bakgrunden och trädet i förgrunden.",
      "Fotografen gjorde förgrunden skarp och bakgrunden suddig."
    ],
    "related": [
      "bakgrund"
    ]
  },
  "betydelsefull": {
    "opposite": "betydelselös",
    "description": "Betydelsefull betyder viktig. Betydelselös betyder utan betydelse eller värde i sammanhanget.",
    "examples": [
      "Beslutet var betydelsefullt, men den lilla detaljen var betydelselös.",
      "Det som först verkade betydelselöst blev senare betydelsefullt."
    ],
    "related": [
      "betydelselös"
    ]
  },
  "betydelselös": {
    "opposite": "betydelsefull",
    "description": "Betydelsefull betyder viktig. Betydelselös betyder utan betydelse eller värde i sammanhanget.",
    "examples": [
      "Beslutet var betydelsefullt, men den lilla detaljen var betydelselös.",
      "Det som först verkade betydelselöst blev senare betydelsefullt."
    ],
    "related": [
      "betydelsefull"
    ]
  },
  "inkomplett": {
    "opposite": "komplett",
    "description": "Inkomplett betyder att delar saknas. Komplett betyder att allt som behövs finns med.",
    "examples": [
      "Den första listan var inkomplett, men den nya är komplett.",
      "Samlingen blir komplett när den inkompletta delen fylls i."
    ],
    "related": [
      "komplett"
    ]
  },
  "komplett": {
    "opposite": "inkomplett",
    "description": "Inkomplett betyder att delar saknas. Komplett betyder att allt som behövs finns med.",
    "examples": [
      "Den första listan var inkomplett, men den nya är komplett.",
      "Samlingen blir komplett när den inkompletta delen fylls i."
    ],
    "related": [
      "inkomplett"
    ]
  },
  "grumlig": {
    "opposite": "klar",
    "description": "Grumlig betyder att en vätska eller sikt är oklar. Klar betyder att man kan se tydligt igenom.",
    "examples": [
      "Vattnet var grumligt i går men är klart i dag.",
      "Den grumliga vätskan filtrerades tills den blev klar."
    ],
    "related": [
      "klar"
    ]
  },
  "klar": {
    "opposite": "grumlig",
    "description": "Grumlig betyder att en vätska eller sikt är oklar. Klar betyder att man kan se tydligt igenom.",
    "examples": [
      "Vattnet var grumligt i går men är klart i dag.",
      "Den grumliga vätskan filtrerades tills den blev klar."
    ],
    "related": [
      "grumlig"
    ]
  },
  "avta": {
    "opposite": "tillta",
    "description": "Avta betyder att minska i styrka. Tillta betyder att öka i styrka.",
    "examples": [
      "Vinden började avta på kvällen men väntas tillta i morgon.",
      "Smärtan tilltog först och började sedan avta."
    ],
    "related": [
      "tillta"
    ]
  },
  "tillta": {
    "opposite": "avta",
    "description": "Avta betyder att minska i styrka. Tillta betyder att öka i styrka.",
    "examples": [
      "Vinden började avta på kvällen men väntas tillta i morgon.",
      "Smärtan tilltog först och började sedan avta."
    ],
    "related": [
      "avta"
    ]
  },
  "optimism": {
    "opposite": "pessimism",
    "description": "Optimism är en tro på att det kommer att gå bra. Pessimism är en förväntan att det kommer att gå dåligt.",
    "examples": [
      "Hennes optimism gav gruppen hopp, medan hans pessimism gjorde dem tveksamma.",
      "Trots all pessimism behöll hon sin optimism."
    ],
    "related": [
      "pessimism"
    ]
  },
  "pessimism": {
    "opposite": "optimism",
    "description": "Optimism är en tro på att det kommer att gå bra. Pessimism är en förväntan att det kommer att gå dåligt.",
    "examples": [
      "Hennes optimism gav gruppen hopp, medan hans pessimism gjorde dem tveksamma.",
      "Trots all pessimism behöll hon sin optimism."
    ],
    "related": [
      "optimism"
    ]
  },
  "optimistisk": {
    "opposite": "pessimistisk",
    "description": "Optimistisk betyder hoppfull inför framtiden. Pessimistisk betyder att man väntar sig ett sämre resultat.",
    "examples": [
      "Hon är optimistisk om planen, men han är pessimistisk.",
      "Prognosen gick från pessimistisk till mer optimistisk."
    ],
    "related": [
      "pessimistisk"
    ]
  },
  "pessimistisk": {
    "opposite": "optimistisk",
    "description": "Optimistisk betyder hoppfull inför framtiden. Pessimistisk betyder att man väntar sig ett sämre resultat.",
    "examples": [
      "Hon är optimistisk om planen, men han är pessimistisk.",
      "Prognosen gick från pessimistisk till mer optimistisk."
    ],
    "related": [
      "optimistisk"
    ]
  },
  "explodera": {
    "opposite": "implodera",
    "description": "Explodera betyder att brista utåt. Implodera betyder att falla samman inåt.",
    "examples": [
      "En behållare kan explodera av högt inre tryck eller implodera av högt yttre tryck.",
      "Stjärnan började implodera innan materialet kunde explodera utåt."
    ],
    "related": [
      "implodera"
    ]
  },
  "implodera": {
    "opposite": "explodera",
    "description": "Explodera betyder att brista utåt. Implodera betyder att falla samman inåt.",
    "examples": [
      "En behållare kan explodera av högt inre tryck eller implodera av högt yttre tryck.",
      "Stjärnan började implodera innan materialet kunde explodera utåt."
    ],
    "related": [
      "explodera"
    ]
  },
  "altruistisk": {
    "opposite": "egoistisk",
    "description": "Altruistisk betyder inriktad på andras bästa. Egoistisk betyder främst inriktad på det egna bästa.",
    "examples": [
      "Det altruistiska beslutet hjälpte många, medan det egoistiska beslutet bara gynnade en person.",
      "Hon handlade altruistiskt i stället för egoistiskt."
    ],
    "related": [
      "egoistisk"
    ]
  },
  "egoistisk": {
    "opposite": "altruistisk",
    "description": "Altruistisk betyder inriktad på andras bästa. Egoistisk betyder främst inriktad på det egna bästa.",
    "examples": [
      "Det altruistiska beslutet hjälpte många, medan det egoistiska beslutet bara gynnade en person.",
      "Hon handlade altruistiskt i stället för egoistiskt."
    ],
    "related": [
      "altruistisk"
    ]
  },
  "enfärgad": {
    "opposite": "flerfärgad",
    "description": "Enfärgad betyder att något har en färg. Flerfärgad betyder att det har flera färger.",
    "examples": [
      "Den ena tröjan är enfärgad och den andra flerfärgad.",
      "Hon bytte den flerfärgade mattan mot en enfärgad."
    ],
    "related": [
      "flerfärgad"
    ]
  },
  "flerfärgad": {
    "opposite": "enfärgad",
    "description": "Enfärgad betyder att något har en färg. Flerfärgad betyder att det har flera färger.",
    "examples": [
      "Den ena tröjan är enfärgad och den andra flerfärgad.",
      "Hon bytte den flerfärgade mattan mot en enfärgad."
    ],
    "related": [
      "enfärgad"
    ]
  },
  "fullkomlig": {
    "opposite": "ofullkomlig",
    "description": "Fullkomlig betyder fullständig eller utan brister. Ofullkomlig betyder att brister finns.",
    "examples": [
      "Ingen lösning är fullkomlig, men den första var särskilt ofullkomlig.",
      "Resultatet gick från ofullkomligt till nästan fullkomligt."
    ],
    "related": [
      "ofullkomlig"
    ]
  },
  "ofullkomlig": {
    "opposite": "fullkomlig",
    "description": "Fullkomlig betyder fullständig eller utan brister. Ofullkomlig betyder att brister finns.",
    "examples": [
      "Ingen lösning är fullkomlig, men den första var särskilt ofullkomlig.",
      "Resultatet gick från ofullkomligt till nästan fullkomligt."
    ],
    "related": [
      "fullkomlig"
    ]
  },
  "trångsynt": {
    "opposite": "vidsynt",
    "description": "Trångsynt betyder ovillig att acceptera andra perspektiv. Vidsynt betyder öppen för olika idéer.",
    "examples": [
      "Ett trångsynt synsätt ersattes av ett mer vidsynt.",
      "Hon är vidsynt och försöker undvika trångsynta bedömningar."
    ],
    "related": [
      "vidsynt"
    ]
  },
  "vidsynt": {
    "opposite": "trångsynt",
    "description": "Trångsynt betyder ovillig att acceptera andra perspektiv. Vidsynt betyder öppen för olika idéer.",
    "examples": [
      "Ett trångsynt synsätt ersattes av ett mer vidsynt.",
      "Hon är vidsynt och försöker undvika trångsynta bedömningar."
    ],
    "related": [
      "trångsynt"
    ]
  },
  "monogam": {
    "opposite": "polygam",
    "description": "Monogam betyder att ha en partner åt gången. Polygam betyder att ha flera partners samtidigt.",
    "examples": [
      "Arten är oftast monogam, men en närbesläktad art är polygam.",
      "Ett monogamt system skiljer sig från ett polygamt."
    ],
    "related": [
      "polygam"
    ]
  },
  "polygam": {
    "opposite": "monogam",
    "description": "Monogam betyder att ha en partner åt gången. Polygam betyder att ha flera partners samtidigt.",
    "examples": [
      "Arten är oftast monogam, men en närbesläktad art är polygam.",
      "Ett monogamt system skiljer sig från ett polygamt."
    ],
    "related": [
      "monogam"
    ]
  },
  "exponentiera": {
    "opposite": "logaritmera",
    "description": "Att exponentiera och att logaritmera är omvända matematiska operationer.",
    "examples": [
      "Exponentiera värdet för att återgå efter att du har logaritmerat det.",
      "Programmet kan både logaritmera och exponentiera tal."
    ],
    "related": [
      "logaritmera"
    ]
  },
  "logaritmera": {
    "opposite": "exponentiera",
    "description": "Att exponentiera och att logaritmera är omvända matematiska operationer.",
    "examples": [
      "Exponentiera värdet för att återgå efter att du har logaritmerat det.",
      "Programmet kan både logaritmera och exponentiera tal."
    ],
    "related": [
      "exponentiera"
    ]
  },
  "medlut": {
    "opposite": "motlut",
    "description": "Medlut är en sträcka som lutar nedåt i färdriktningen. Motlut är en sträcka som lutar uppåt.",
    "examples": [
      "Cykeln rullade snabbt i medlutet men långsamt i motlutet.",
      "Efter ett långt motlut kom ett välkommet medlut."
    ],
    "related": [
      "motlut"
    ]
  },
  "motlut": {
    "opposite": "medlut",
    "description": "Medlut är en sträcka som lutar nedåt i färdriktningen. Motlut är en sträcka som lutar uppåt.",
    "examples": [
      "Cykeln rullade snabbt i medlutet men långsamt i motlutet.",
      "Efter ett långt motlut kom ett välkommet medlut."
    ],
    "related": [
      "medlut"
    ]
  },
  "förindustriell": {
    "opposite": "postindustriell",
    "description": "Förindustriell beskriver tiden före industrialiseringen. Postindustriell beskriver tiden efter industrisamhällets dominerande fas.",
    "examples": [
      "Byn hade en förindustriell ekonomi, medan staden blev postindustriell.",
      "Studien jämför förindustriella samhällen med postindustriella samhällen."
    ],
    "related": [
      "postindustriell"
    ]
  },
  "postindustriell": {
    "opposite": "förindustriell",
    "description": "Förindustriell beskriver tiden före industrialiseringen. Postindustriell beskriver tiden efter industrisamhällets dominerande fas.",
    "examples": [
      "Byn hade en förindustriell ekonomi, medan staden blev postindustriell.",
      "Studien jämför förindustriella samhällen med postindustriella samhällen."
    ],
    "related": [
      "förindustriell"
    ]
  },
  "benign": {
    "opposite": "malign",
    "description": "Benign betyder godartad. Malign betyder elakartad.",
    "examples": [
      "Provet visade att tumören var benign och inte malign.",
      "En benign förändring behandlas annorlunda än en malign."
    ],
    "related": [
      "malign"
    ]
  },
  "malign": {
    "opposite": "benign",
    "description": "Benign betyder godartad. Malign betyder elakartad.",
    "examples": [
      "Provet visade att tumören var benign och inte malign.",
      "En benign förändring behandlas annorlunda än en malign."
    ],
    "related": [
      "benign"
    ]
  },
  "samarbetsovillig": {
    "opposite": "samarbetsvillig",
    "description": "Samarbetsovillig betyder att någon inte vill samarbeta. Samarbetsvillig betyder att någon gärna samarbetar.",
    "examples": [
      "Han var först samarbetsovillig men blev senare samarbetsvillig.",
      "En samarbetsvillig grupp löser uppgiften lättare än en samarbetsovillig."
    ],
    "related": [
      "samarbetsvillig"
    ]
  },
  "samarbetsvillig": {
    "opposite": "samarbetsovillig",
    "description": "Samarbetsovillig betyder att någon inte vill samarbeta. Samarbetsvillig betyder att någon gärna samarbetar.",
    "examples": [
      "Han var först samarbetsovillig men blev senare samarbetsvillig.",
      "En samarbetsvillig grupp löser uppgiften lättare än en samarbetsovillig."
    ],
    "related": [
      "samarbetsovillig"
    ]
  },
  "oöversiktlig": {
    "opposite": "översiktlig",
    "description": "Oöversiktlig betyder svår att få en helhetsbild av. Översiktlig betyder att helheten är lätt att se.",
    "examples": [
      "Den gamla tabellen var oöversiktlig, men den nya är översiktlig.",
      "Gör kartan mer översiktlig och mindre oöversiktlig."
    ],
    "related": [
      "översiktlig"
    ]
  },
  "översiktlig": {
    "opposite": "oöversiktlig",
    "description": "Oöversiktlig betyder svår att få en helhetsbild av. Översiktlig betyder att helheten är lätt att se.",
    "examples": [
      "Den gamla tabellen var oöversiktlig, men den nya är översiktlig.",
      "Gör kartan mer översiktlig och mindre oöversiktlig."
    ],
    "related": [
      "oöversiktlig"
    ]
  },
  "betydlig": {
    "opposite": "obetydlig",
    "description": "Betydlig betyder stor eller märkbar. Obetydlig betyder liten eller knappt märkbar.",
    "examples": [
      "Kostnaden var betydlig, medan skillnaden i tid var obetydlig.",
      "En obetydlig förändring ledde senare till en betydlig förbättring."
    ],
    "related": [
      "obetydlig"
    ]
  },
  "obetydlig": {
    "opposite": "betydlig",
    "description": "Betydlig betyder stor eller märkbar. Obetydlig betyder liten eller knappt märkbar.",
    "examples": [
      "Kostnaden var betydlig, medan skillnaden i tid var obetydlig.",
      "En obetydlig förändring ledde senare till en betydlig förbättring."
    ],
    "related": [
      "betydlig"
    ]
  },
  "efterled": {
    "opposite": "förled",
    "description": "Ett förled står först i en sammansättning. Ett efterled står sist.",
    "examples": [
      "I ordet sommarhus är sommar förled och hus efterled.",
      "Byt förled men behåll samma efterled."
    ],
    "related": [
      "förled"
    ]
  },
  "förled": {
    "opposite": "efterled",
    "description": "Ett förled står först i en sammansättning. Ett efterled står sist.",
    "examples": [
      "I ordet sommarhus är sommar förled och hus efterled.",
      "Byt förled men behåll samma efterled."
    ],
    "related": [
      "efterled"
    ]
  },
  "abiotisk": {
    "opposite": "biotisk",
    "description": "Abiotisk rör icke-levande faktorer. Biotisk rör levande organismer.",
    "examples": [
      "Temperatur är en abiotisk faktor, medan konkurrens mellan arter är en biotisk faktor.",
      "Miljön påverkas av både abiotiska och biotiska förhållanden."
    ],
    "related": [
      "biotisk"
    ]
  },
  "biotisk": {
    "opposite": "abiotisk",
    "description": "Abiotisk rör icke-levande faktorer. Biotisk rör levande organismer.",
    "examples": [
      "Temperatur är en abiotisk faktor, medan konkurrens mellan arter är en biotisk faktor.",
      "Miljön påverkas av både abiotiska och biotiska förhållanden."
    ],
    "related": [
      "abiotisk"
    ]
  },
  "konsumtion": {
    "opposite": "produktion",
    "description": "Produktion skapar varor eller tjänster. Konsumtion använder dem.",
    "examples": [
      "Produktionen ökade för att möta en högre konsumtion.",
      "Företaget jämför produktion med konsumtion varje månad."
    ],
    "related": [
      "produktion"
    ]
  },
  "produktion": {
    "opposite": "konsumtion",
    "description": "Produktion skapar varor eller tjänster. Konsumtion använder dem.",
    "examples": [
      "Produktionen ökade för att möta en högre konsumtion.",
      "Företaget jämför produktion med konsumtion varje månad."
    ],
    "related": [
      "konsumtion"
    ]
  },
  "dysfemism": {
    "opposite": "eufemism",
    "description": "En eufemism mildrar ett uttryck. En dysfemism gör uttrycket hårdare eller mer nedsättande.",
    "examples": [
      "Hon använde en eufemism för att låta vänlig, medan han valde en dysfemism.",
      "Samma sak kan beskrivas med en eufemism eller en dysfemism."
    ],
    "related": [
      "eufemism"
    ]
  },
  "eufemism": {
    "opposite": "dysfemism",
    "description": "En eufemism mildrar ett uttryck. En dysfemism gör uttrycket hårdare eller mer nedsättande.",
    "examples": [
      "Hon använde en eufemism för att låta vänlig, medan han valde en dysfemism.",
      "Samma sak kan beskrivas med en eufemism eller en dysfemism."
    ],
    "related": [
      "dysfemism"
    ]
  },
  "aphelium": {
    "opposite": "perihelium",
    "description": "Aphelium är den punkt där ett objekt är längst från solen. Perihelium är punkten närmast solen.",
    "examples": [
      "Planeten rör sig längst bort vid aphelium och närmast vid perihelium.",
      "Avståndet är större i aphelium än i perihelium."
    ],
    "related": [
      "perihelium"
    ]
  },
  "perihelium": {
    "opposite": "aphelium",
    "description": "Aphelium är den punkt där ett objekt är längst från solen. Perihelium är punkten närmast solen.",
    "examples": [
      "Planeten rör sig längst bort vid aphelium och närmast vid perihelium.",
      "Avståndet är större i aphelium än i perihelium."
    ],
    "related": [
      "aphelium"
    ]
  },
  "apogeum": {
    "opposite": "perigeum",
    "description": "Apogeum är den punkt i en bana som ligger längst från jorden. Perigeum är punkten närmast jorden.",
    "examples": [
      "Månen är längre bort i apogeum och närmare i perigeum.",
      "Satellitens bana går mellan perigeum och apogeum."
    ],
    "related": [
      "perigeum"
    ]
  },
  "perigeum": {
    "opposite": "apogeum",
    "description": "Apogeum är den punkt i en bana som ligger längst från jorden. Perigeum är punkten närmast jorden.",
    "examples": [
      "Månen är längre bort i apogeum och närmare i perigeum.",
      "Satellitens bana går mellan perigeum och apogeum."
    ],
    "related": [
      "apogeum"
    ]
  },
  "feminin": {
    "opposite": "maskulin",
    "description": "Feminin betyder kvinnligt präglad. Maskulin betyder manligt präglad.",
    "examples": [
      "Formen beskrevs som feminin, medan den andra kallades maskulin.",
      "Språket använder både feminina och maskulina former."
    ],
    "related": [
      "maskulin"
    ]
  },
  "maskulin": {
    "opposite": "feminin",
    "description": "Feminin betyder kvinnligt präglad. Maskulin betyder manligt präglad.",
    "examples": [
      "Formen beskrevs som feminin, medan den andra kallades maskulin.",
      "Språket använder både feminina och maskulina former."
    ],
    "related": [
      "feminin"
    ]
  },
  "kvinnlig": {
    "opposite": "manlig",
    "description": "Kvinnlig betyder som hör till eller gäller kvinnor. Manlig betyder som hör till eller gäller män.",
    "examples": [
      "Tävlingen har en kvinnlig och en manlig klass.",
      "Den kvinnliga huvudrollen möter den manliga huvudrollen."
    ],
    "related": [
      "manlig"
    ]
  },
  "manlig": {
    "opposite": "kvinnlig",
    "description": "Kvinnlig betyder som hör till eller gäller kvinnor. Manlig betyder som hör till eller gäller män.",
    "examples": [
      "Tävlingen har en kvinnlig och en manlig klass.",
      "Den kvinnliga huvudrollen möter den manliga huvudrollen."
    ],
    "related": [
      "kvinnlig"
    ]
  },
  "ordfattig": {
    "opposite": "ordrik",
    "description": "Ordfattig betyder att få ord används. Ordrik betyder att många ord används.",
    "examples": [
      "Texten var ordfattig, men talet var mycket ordrikt.",
      "En ordrik förklaring ersatte det ordfattiga svaret."
    ],
    "related": [
      "ordrik"
    ]
  },
  "ordrik": {
    "opposite": "ordfattig",
    "description": "Ordfattig betyder att få ord används. Ordrik betyder att många ord används.",
    "examples": [
      "Texten var ordfattig, men talet var mycket ordrikt.",
      "En ordrik förklaring ersatte det ordfattiga svaret."
    ],
    "related": [
      "ordfattig"
    ]
  },
  "inom": {
    "opposite": "utom",
    "description": "Inom betyder på insidan av en gräns. Utom betyder utanför gränsen.",
    "examples": [
      "Alla inom området var säkra, men de utom området fick vänta.",
      "Regeln gäller inom landet men inte utom landet."
    ],
    "related": [
      "utom"
    ]
  },
  "utom": {
    "opposite": "inom",
    "description": "Inom betyder på insidan av en gräns. Utom betyder utanför gränsen.",
    "examples": [
      "Alla inom området var säkra, men de utom området fick vänta.",
      "Regeln gäller inom landet men inte utom landet."
    ],
    "related": [
      "inom"
    ]
  },
  "ihop": {
    "opposite": "isär",
    "description": "Ihop betyder tillsammans eller sammanfogat. Isär betyder åtskilt.",
    "examples": [
      "Sätt ihop delarna och ta sedan isär dem igen.",
      "Böckerna stod ihop först men flyttades isär."
    ],
    "related": [
      "isär"
    ]
  },
  "isär": {
    "opposite": "ihop",
    "description": "Ihop betyder tillsammans eller sammanfogat. Isär betyder åtskilt.",
    "examples": [
      "Sätt ihop delarna och ta sedan isär dem igen.",
      "Böckerna stod ihop först men flyttades isär."
    ],
    "related": [
      "ihop"
    ]
  },
  "baklänges": {
    "opposite": "framåt",
    "description": "Baklänges betyder i riktning bakåt. Framåt betyder i riktning mot framsidan eller framtiden.",
    "examples": [
      "Han gick baklänges några steg och fortsatte sedan framåt.",
      "Filmen spelades först baklänges och sedan framåt."
    ],
    "related": [
      "framåt"
    ]
  },
  "framåt": {
    "opposite": "baklänges",
    "description": "Baklänges betyder i riktning bakåt. Framåt betyder i riktning mot framsidan eller framtiden.",
    "examples": [
      "Han gick baklänges några steg och fortsatte sedan framåt.",
      "Filmen spelades först baklänges och sedan framåt."
    ],
    "related": [
      "baklänges"
    ]
  },
  "skriftspråk": {
    "opposite": "talspråk",
    "description": "Skriftspråk används i skrift. Talspråk används när vi talar.",
    "examples": [
      "Uttrycket är vanligt i talspråk men ovanligt i skriftspråk.",
      "Skriftspråket är mer formellt än talspråket i exemplet."
    ],
    "related": [
      "talspråk"
    ]
  },
  "talspråk": {
    "opposite": "skriftspråk",
    "description": "Skriftspråk används i skrift. Talspråk används när vi talar.",
    "examples": [
      "Uttrycket är vanligt i talspråk men ovanligt i skriftspråk.",
      "Skriftspråket är mer formellt än talspråket i exemplet."
    ],
    "related": [
      "skriftspråk"
    ]
  },
  "excentrisk": {
    "opposite": "koncentrisk",
    "description": "Excentrisk betyder att mittpunkterna inte sammanfaller. Koncentrisk betyder att former har samma mittpunkt.",
    "examples": [
      "De koncentriska cirklarna har samma centrum, men den excentriska cirkeln ligger förskjuten.",
      "Lagret kan monteras koncentriskt eller excentriskt."
    ],
    "related": [
      "koncentrisk"
    ]
  },
  "koncentrisk": {
    "opposite": "excentrisk",
    "description": "Excentrisk betyder att mittpunkterna inte sammanfaller. Koncentrisk betyder att former har samma mittpunkt.",
    "examples": [
      "De koncentriska cirklarna har samma centrum, men den excentriska cirkeln ligger förskjuten.",
      "Lagret kan monteras koncentriskt eller excentriskt."
    ],
    "related": [
      "excentrisk"
    ]
  },
  "höstdagjämning": {
    "opposite": "vårdagjämning",
    "description": "Vårdagjämningen inträffar på våren. Höstdagjämningen inträffar på hösten.",
    "examples": [
      "Dagarna blir längre efter vårdagjämningen och kortare efter höstdagjämningen.",
      "Tiden mellan vårdagjämning och höstdagjämning omfattar sommarhalvåret."
    ],
    "related": [
      "vårdagjämning"
    ]
  },
  "vårdagjämning": {
    "opposite": "höstdagjämning",
    "description": "Vårdagjämningen inträffar på våren. Höstdagjämningen inträffar på hösten.",
    "examples": [
      "Dagarna blir längre efter vårdagjämningen och kortare efter höstdagjämningen.",
      "Tiden mellan vårdagjämning och höstdagjämning omfattar sommarhalvåret."
    ],
    "related": [
      "höstdagjämning"
    ]
  },
  "impopularitet": {
    "opposite": "popularitet",
    "description": "Popularitet betyder att något är omtyckt. Impopularitet betyder att det inte är omtyckt.",
    "examples": [
      "Förslaget växte i popularitet efter en period av impopularitet.",
      "Hög popularitet kan snabbt bytas mot impopularitet."
    ],
    "related": [
      "popularitet"
    ]
  },
  "popularitet": {
    "opposite": "impopularitet",
    "description": "Popularitet betyder att något är omtyckt. Impopularitet betyder att det inte är omtyckt.",
    "examples": [
      "Förslaget växte i popularitet efter en period av impopularitet.",
      "Hög popularitet kan snabbt bytas mot impopularitet."
    ],
    "related": [
      "impopularitet"
    ]
  },
  "illegal": {
    "opposite": "legal",
    "description": "Legal betyder tillåten enligt lag. Illegal betyder förbjuden enligt lag.",
    "examples": [
      "Verksamheten var illegal men blev senare legal.",
      "En legal handling följer lagen, medan en illegal handling bryter mot den."
    ],
    "related": [
      "legal"
    ]
  },
  "legal": {
    "opposite": "illegal",
    "description": "Legal betyder tillåten enligt lag. Illegal betyder förbjuden enligt lag.",
    "examples": [
      "Verksamheten var illegal men blev senare legal.",
      "En legal handling följer lagen, medan en illegal handling bryter mot den."
    ],
    "related": [
      "illegal"
    ]
  },
  "heterodox": {
    "opposite": "ortodox",
    "description": "Ortodox betyder att följa en etablerad lära. Heterodox betyder att avvika från den.",
    "examples": [
      "Den ortodoxa tolkningen utmanades av en heterodox idé.",
      "Han lämnade den heterodoxa gruppen för en mer ortodox riktning."
    ],
    "related": [
      "ortodox"
    ]
  },
  "ortodox": {
    "opposite": "heterodox",
    "description": "Ortodox betyder att följa en etablerad lära. Heterodox betyder att avvika från den.",
    "examples": [
      "Den ortodoxa tolkningen utmanades av en heterodox idé.",
      "Han lämnade den heterodoxa gruppen för en mer ortodox riktning."
    ],
    "related": [
      "heterodox"
    ]
  },
  "entydig": {
    "opposite": "tvetydig",
    "description": "Entydig betyder att bara en tolkning är rimlig. Tvetydig betyder att flera tolkningar är möjliga.",
    "examples": [
      "Instruktionen var entydig, men svaret blev tvetydigt.",
      "Skriv om den tvetydiga meningen så att den blir entydig."
    ],
    "related": [
      "tvetydig"
    ]
  },
  "tvetydig": {
    "opposite": "entydig",
    "description": "Entydig betyder att bara en tolkning är rimlig. Tvetydig betyder att flera tolkningar är möjliga.",
    "examples": [
      "Instruktionen var entydig, men svaret blev tvetydigt.",
      "Skriv om den tvetydiga meningen så att den blir entydig."
    ],
    "related": [
      "entydig"
    ]
  },
  "encellig": {
    "opposite": "flercellig",
    "description": "En encellig organism består av en cell. En flercellig organism består av många celler.",
    "examples": [
      "En bakterie är encellig, medan en människa är flercellig.",
      "Mikroskopet visade både encelliga och flercelliga organismer."
    ],
    "related": [
      "flercellig"
    ]
  },
  "flercellig": {
    "opposite": "encellig",
    "description": "En encellig organism består av en cell. En flercellig organism består av många celler.",
    "examples": [
      "En bakterie är encellig, medan en människa är flercellig.",
      "Mikroskopet visade både encelliga och flercelliga organismer."
    ],
    "related": [
      "encellig"
    ]
  },
  "hövlig": {
    "opposite": "ohövlig",
    "description": "Hövlig betyder artig. Ohövlig betyder oartig.",
    "examples": [
      "Hon gav ett hövligt svar trots den ohövliga frågan.",
      "Var hövlig och undvik en ohövlig ton."
    ],
    "related": [
      "ohövlig"
    ]
  },
  "ohövlig": {
    "opposite": "hövlig",
    "description": "Hövlig betyder artig. Ohövlig betyder oartig.",
    "examples": [
      "Hon gav ett hövligt svar trots den ohövliga frågan.",
      "Var hövlig och undvik en ohövlig ton."
    ],
    "related": [
      "hövlig"
    ]
  },
  "osjälvständighet": {
    "opposite": "självständighet",
    "description": "Självständighet betyder att kunna bestämma och agera på egen hand. Osjälvständighet betyder beroende av andra.",
    "examples": [
      "Övningen tränar självständighet och minskar osjälvständighet.",
      "Landet gick från osjälvständighet till självständighet."
    ],
    "related": [
      "självständighet"
    ]
  },
  "självständighet": {
    "opposite": "osjälvständighet",
    "description": "Självständighet betyder att kunna bestämma och agera på egen hand. Osjälvständighet betyder beroende av andra.",
    "examples": [
      "Övningen tränar självständighet och minskar osjälvständighet.",
      "Landet gick från osjälvständighet till självständighet."
    ],
    "related": [
      "osjälvständighet"
    ]
  },
  "kryddstark": {
    "opposite": "kryddsvag",
    "description": "Kryddstark mat har kraftig kryddning. Kryddsvag mat har mild kryddning.",
    "examples": [
      "Grytan är kryddstark, men soppan är kryddsvag.",
      "Hon valde den kryddsvaga såsen i stället för den kryddstarka."
    ],
    "related": [
      "kryddsvag"
    ]
  },
  "kryddsvag": {
    "opposite": "kryddstark",
    "description": "Kryddstark mat har kraftig kryddning. Kryddsvag mat har mild kryddning.",
    "examples": [
      "Grytan är kryddstark, men soppan är kryddsvag.",
      "Hon valde den kryddsvaga såsen i stället för den kryddstarka."
    ],
    "related": [
      "kryddstark"
    ]
  },
  "pietetsfull": {
    "opposite": "pietetslös",
    "description": "Pietetsfull betyder respektfull mot något värdefullt eller gammalt. Pietetslös betyder utan sådan respekt.",
    "examples": [
      "Huset renoverades pietetsfullt i stället för pietetslöst.",
      "En pietetsfull restaurering bevarar detaljer som en pietetslös ändring kan förstöra."
    ],
    "related": [
      "pietetslös"
    ]
  },
  "pietetslös": {
    "opposite": "pietetsfull",
    "description": "Pietetsfull betyder respektfull mot något värdefullt eller gammalt. Pietetslös betyder utan sådan respekt.",
    "examples": [
      "Huset renoverades pietetsfullt i stället för pietetslöst.",
      "En pietetsfull restaurering bevarar detaljer som en pietetslös ändring kan förstöra."
    ],
    "related": [
      "pietetsfull"
    ]
  },
  "oxidation": {
    "opposite": "reduktion",
    "description": "Oxidation innebär att elektroner avges. Reduktion innebär att elektroner tas upp.",
    "examples": [
      "Oxidation och reduktion sker samtidigt i en redoxreaktion.",
      "Ämnet genomgick oxidation, medan det andra genomgick reduktion."
    ],
    "related": [
      "reduktion"
    ]
  },
  "reduktion": {
    "opposite": "oxidation",
    "description": "Oxidation innebär att elektroner avges. Reduktion innebär att elektroner tas upp.",
    "examples": [
      "Oxidation och reduktion sker samtidigt i en redoxreaktion.",
      "Ämnet genomgick oxidation, medan det andra genomgick reduktion."
    ],
    "related": [
      "oxidation"
    ]
  },
  "endotermisk": {
    "opposite": "exotermisk",
    "description": "En endotermisk process tar upp värme. En exotermisk process avger värme.",
    "examples": [
      "Smältning är endotermisk, medan förbränning är exotermisk.",
      "Den endotermiska reaktionen kylde omgivningen och den exoterma värmde den."
    ],
    "related": [
      "exotermisk"
    ]
  },
  "exotermisk": {
    "opposite": "endotermisk",
    "description": "En endotermisk process tar upp värme. En exotermisk process avger värme.",
    "examples": [
      "Smältning är endotermisk, medan förbränning är exotermisk.",
      "Den endotermiska reaktionen kylde omgivningen och den exoterma värmde den."
    ],
    "related": [
      "endotermisk"
    ]
  },
  "devalvera": {
    "opposite": "revalvera",
    "description": "Att devalvera är att sänka en valutas officiella värde. Att revalvera är att höja det.",
    "examples": [
      "Regeringen valde att devalvera valutan men diskuterade senare att revalvera den.",
      "Att devalvera och att revalvera ger motsatta förändringar i växelkursen."
    ],
    "related": [
      "revalvera"
    ]
  },
  "revalvera": {
    "opposite": "devalvera",
    "description": "Att devalvera är att sänka en valutas officiella värde. Att revalvera är att höja det.",
    "examples": [
      "Regeringen valde att devalvera valutan men diskuterade senare att revalvera den.",
      "Att devalvera och att revalvera ger motsatta förändringar i växelkursen."
    ],
    "related": [
      "devalvera"
    ]
  },
  "antipati": {
    "opposite": "sympati",
    "description": "Sympati är en känsla av gillande eller medkänsla. Antipati är en känsla av motvilja.",
    "examples": [
      "Hon kände sympati för den ena personen och antipati mot den andra.",
      "Den första antipatin växte senare till sympati."
    ],
    "related": [
      "sympati"
    ]
  },
  "sympati": {
    "opposite": "antipati",
    "description": "Sympati är en känsla av gillande eller medkänsla. Antipati är en känsla av motvilja.",
    "examples": [
      "Hon kände sympati för den ena personen och antipati mot den andra.",
      "Den första antipatin växte senare till sympati."
    ],
    "related": [
      "antipati"
    ]
  },
  "asymmetri": {
    "opposite": "symmetri",
    "description": "Symmetri betyder att delar speglar eller balanserar varandra. Asymmetri betyder att denna balans saknas.",
    "examples": [
      "Fjärilen visar tydlig symmetri, medan målningen bygger på asymmetri.",
      "Arkitekten blandade symmetri med avsiktlig asymmetri."
    ],
    "related": [
      "symmetri"
    ]
  },
  "symmetri": {
    "opposite": "asymmetri",
    "description": "Symmetri betyder att delar speglar eller balanserar varandra. Asymmetri betyder att denna balans saknas.",
    "examples": [
      "Fjärilen visar tydlig symmetri, medan målningen bygger på asymmetri.",
      "Arkitekten blandade symmetri med avsiktlig asymmetri."
    ],
    "related": [
      "asymmetri"
    ]
  },
  "crescendo": {
    "opposite": "diminuendo",
    "description": "Crescendo betyder att musiken blir starkare. Diminuendo betyder att den blir svagare.",
    "examples": [
      "Stycket byggs upp med ett crescendo och avslutas med ett diminuendo.",
      "Efter ett långt crescendo följde ett snabbt diminuendo."
    ],
    "related": [
      "diminuendo"
    ]
  },
  "diminuendo": {
    "opposite": "crescendo",
    "description": "Crescendo betyder att musiken blir starkare. Diminuendo betyder att den blir svagare.",
    "examples": [
      "Stycket byggs upp med ett crescendo och avslutas med ett diminuendo.",
      "Efter ett långt crescendo följde ett snabbt diminuendo."
    ],
    "related": [
      "crescendo"
    ]
  },
  "endogen": {
    "opposite": "exogen",
    "description": "Endogen betyder att något har sitt ursprung inifrån. Exogen betyder att det kommer utifrån.",
    "examples": [
      "Den endogena processen drivs inifrån systemet och den exogena av yttre faktorer.",
      "Modellen skiljer mellan endogena och exogena orsaker."
    ],
    "related": [
      "exogen"
    ]
  },
  "exogen": {
    "opposite": "endogen",
    "description": "Endogen betyder att något har sitt ursprung inifrån. Exogen betyder att det kommer utifrån.",
    "examples": [
      "Den endogena processen drivs inifrån systemet och den exogena av yttre faktorer.",
      "Modellen skiljer mellan endogena och exogena orsaker."
    ],
    "related": [
      "endogen"
    ]
  },
  "heterozygot": {
    "opposite": "homozygot",
    "description": "Heterozygot betyder att två genvarianter är olika. Homozygot betyder att de är lika.",
    "examples": [
      "Individen är heterozygot för den ena genen och homozygot för den andra.",
      "Ett heterozygot anlag har två olika alleler, medan ett homozygot har två lika."
    ],
    "related": [
      "homozygot"
    ]
  },
  "homozygot": {
    "opposite": "heterozygot",
    "description": "Heterozygot betyder att två genvarianter är olika. Homozygot betyder att de är lika.",
    "examples": [
      "Individen är heterozygot för den ena genen och homozygot för den andra.",
      "Ett heterozygot anlag har två olika alleler, medan ett homozygot har två lika."
    ],
    "related": [
      "heterozygot"
    ]
  },
  "irreguljär": {
    "opposite": "reguljär",
    "description": "Reguljär betyder regelbunden eller enligt reglerna. Irreguljär betyder oregelbunden eller avvikande.",
    "examples": [
      "Trafiken var reguljär på dagen men irreguljär på natten.",
      "En irreguljär form ersatte den reguljära formen."
    ],
    "related": [
      "reguljär"
    ]
  },
  "reguljär": {
    "opposite": "irreguljär",
    "description": "Reguljär betyder regelbunden eller enligt reglerna. Irreguljär betyder oregelbunden eller avvikande.",
    "examples": [
      "Trafiken var reguljär på dagen men irreguljär på natten.",
      "En irreguljär form ersatte den reguljära formen."
    ],
    "related": [
      "irreguljär"
    ]
  },
  "glesna": {
    "opposite": "tätna",
    "description": "Glesna betyder att bli mindre tät. Tätna betyder att bli tätare.",
    "examples": [
      "Molnen började glesna på morgonen men tätna igen på kvällen.",
      "Skogen glesnar nära vägen och tätnar längre in."
    ],
    "related": [
      "tätna"
    ]
  },
  "tätna": {
    "opposite": "glesna",
    "description": "Glesna betyder att bli mindre tät. Tätna betyder att bli tätare.",
    "examples": [
      "Molnen började glesna på morgonen men tätna igen på kvällen.",
      "Skogen glesnar nära vägen och tätnar längre in."
    ],
    "related": [
      "glesna"
    ]
  },
  "småskalig": {
    "opposite": "storskalig",
    "description": "Småskalig betyder genomförd i liten omfattning. Storskalig betyder genomförd i stor omfattning.",
    "examples": [
      "Projektet började småskaligt och blev senare storskaligt.",
      "Småskalig odling kräver andra metoder än storskalig odling."
    ],
    "related": [
      "storskalig"
    ]
  },
  "storskalig": {
    "opposite": "småskalig",
    "description": "Småskalig betyder genomförd i liten omfattning. Storskalig betyder genomförd i stor omfattning.",
    "examples": [
      "Projektet började småskaligt och blev senare storskaligt.",
      "Småskalig odling kräver andra metoder än storskalig odling."
    ],
    "related": [
      "småskalig"
    ]
  },
  "sambo": {
    "opposite": "särbo",
    "description": "En sambo bor tillsammans med sin partner. En särbo har en partner men bor på annan adress.",
    "examples": [
      "De var särbor i två år innan de blev sambor.",
      "Som sambo delar hon bostad, men som särbo gjorde hon inte det."
    ],
    "related": [
      "särbo"
    ]
  },
  "särbo": {
    "opposite": "sambo",
    "description": "En sambo bor tillsammans med sin partner. En särbo har en partner men bor på annan adress.",
    "examples": [
      "De var särbor i två år innan de blev sambor.",
      "Som sambo delar hon bostad, men som särbo gjorde hon inte det."
    ],
    "related": [
      "sambo"
    ]
  },
  "likström": {
    "opposite": "växelström",
    "description": "Likström går i samma riktning. Växelström byter riktning regelbundet.",
    "examples": [
      "Batteriet ger likström, medan vägguttaget ger växelström.",
      "Omvandlaren gör växelström av likström."
    ],
    "related": [
      "växelström"
    ]
  },
  "växelström": {
    "opposite": "likström",
    "description": "Likström går i samma riktning. Växelström byter riktning regelbundet.",
    "examples": [
      "Batteriet ger likström, medan vägguttaget ger växelström.",
      "Omvandlaren gör växelström av likström."
    ],
    "related": [
      "likström"
    ]
  },
  "barnförbjuden": {
    "opposite": "barntillåten",
    "description": "Barnförbjuden betyder att barn inte får delta. Barntillåten betyder att barn får delta.",
    "examples": [
      "Den sena filmen är barnförbjuden, men matinén är barntillåten.",
      "Välj den barntillåtna föreställningen i stället för den barnförbjudna."
    ],
    "related": [
      "barntillåten"
    ]
  },
  "barntillåten": {
    "opposite": "barnförbjuden",
    "description": "Barnförbjuden betyder att barn inte får delta. Barntillåten betyder att barn får delta.",
    "examples": [
      "Den sena filmen är barnförbjuden, men matinén är barntillåten.",
      "Välj den barntillåtna föreställningen i stället för den barnförbjudna."
    ],
    "related": [
      "barnförbjuden"
    ]
  },
  "oräknebar": {
    "opposite": "räknebar",
    "description": "Räknebar betyder att något kan räknas. Oräknebar betyder att det inte kan räknas som enskilda enheter.",
    "examples": [
      "Stolar är räknebara, medan sand ofta behandlas som oräknebar.",
      "Substantivet är räknebart i den ena betydelsen och oräknebart i den andra."
    ],
    "related": [
      "räknebar"
    ]
  },
  "räknebar": {
    "opposite": "oräknebar",
    "description": "Räknebar betyder att något kan räknas. Oräknebar betyder att det inte kan räknas som enskilda enheter.",
    "examples": [
      "Stolar är räknebara, medan sand ofta behandlas som oräknebar.",
      "Substantivet är räknebart i den ena betydelsen och oräknebart i den andra."
    ],
    "related": [
      "oräknebar"
    ]
  },
  "alkoholfri": {
    "opposite": "alkoholhaltig",
    "description": "Alkoholfri betyder utan alkohol. Alkoholhaltig betyder att alkohol finns i drycken.",
    "examples": [
      "Hon valde en alkoholfri dryck i stället för en alkoholhaltig.",
      "Menyn skiljer mellan alkoholfria och alkoholhaltiga alternativ."
    ],
    "related": [
      "alkoholhaltig"
    ]
  },
  "alkoholhaltig": {
    "opposite": "alkoholfri",
    "description": "Alkoholfri betyder utan alkohol. Alkoholhaltig betyder att alkohol finns i drycken.",
    "examples": [
      "Hon valde en alkoholfri dryck i stället för en alkoholhaltig.",
      "Menyn skiljer mellan alkoholfria och alkoholhaltiga alternativ."
    ],
    "related": [
      "alkoholfri"
    ]
  },
  "drygt": {
    "opposite": "knappt",
    "description": "Drygt betyder lite mer än en angiven mängd. Knappt betyder lite mindre.",
    "examples": [
      "Resan tog drygt en timme dit och knappt en timme hem.",
      "Det kom drygt hundra personer, inte knappt hundra."
    ],
    "related": [
      "knappt"
    ]
  },
  "knappt": {
    "opposite": "drygt",
    "description": "Drygt betyder lite mer än en angiven mängd. Knappt betyder lite mindre.",
    "examples": [
      "Resan tog drygt en timme dit och knappt en timme hem.",
      "Det kom drygt hundra personer, inte knappt hundra."
    ],
    "related": [
      "drygt"
    ]
  },
  "ankomsttid": {
    "opposite": "avgångstid",
    "description": "Avgångstid är tiden då en resa börjar. Ankomsttid är tiden då den slutar.",
    "examples": [
      "Tågets avgångstid är 08.00 och ankomsttiden 10.15.",
      "Kontrollera både avgångstid och ankomsttid."
    ],
    "related": [
      "avgångstid"
    ]
  },
  "avgångstid": {
    "opposite": "ankomsttid",
    "description": "Avgångstid är tiden då en resa börjar. Ankomsttid är tiden då den slutar.",
    "examples": [
      "Tågets avgångstid är 08.00 och ankomsttiden 10.15.",
      "Kontrollera både avgångstid och ankomsttid."
    ],
    "related": [
      "ankomsttid"
    ]
  },
  "korthårig": {
    "opposite": "långhårig",
    "description": "Korthårig betyder med kort hår eller päls. Långhårig betyder med långt hår eller päls.",
    "examples": [
      "Den ena katten är korthårig och den andra långhårig.",
      "En långhårig hund kräver ofta mer pälsvård än en korthårig."
    ],
    "related": [
      "långhårig"
    ]
  },
  "långhårig": {
    "opposite": "korthårig",
    "description": "Korthårig betyder med kort hår eller päls. Långhårig betyder med långt hår eller päls.",
    "examples": [
      "Den ena katten är korthårig och den andra långhårig.",
      "En långhårig hund kräver ofta mer pälsvård än en korthårig."
    ],
    "related": [
      "korthårig"
    ]
  },
  "intermolekylär": {
    "opposite": "intramolekylär",
    "description": "Intermolekylär betyder mellan molekyler. Intramolekylär betyder inom en molekyl.",
    "examples": [
      "Bindningen inom molekylen är intramolekylär, medan kraften mellan molekylerna är intermolekylär.",
      "Kursen skiljer mellan intermolekylära och intramolekylära krafter."
    ],
    "related": [
      "intramolekylär"
    ]
  },
  "intramolekylär": {
    "opposite": "intermolekylär",
    "description": "Intermolekylär betyder mellan molekyler. Intramolekylär betyder inom en molekyl.",
    "examples": [
      "Bindningen inom molekylen är intramolekylär, medan kraften mellan molekylerna är intermolekylär.",
      "Kursen skiljer mellan intermolekylära och intramolekylära krafter."
    ],
    "related": [
      "intermolekylär"
    ]
  },
  "enkelbiljett": {
    "opposite": "tur-och-retur-biljett",
    "description": "En enkelbiljett gäller en väg. En tur-och-retur-biljett gäller både dit- och hemresa.",
    "examples": [
      "Hon köpte en enkelbiljett dit och en tur-och-retur-biljett nästa gång.",
      "En tur-och-retur-biljett omfattar mer än en enkelbiljett."
    ],
    "related": [
      "tur-och-retur-biljett"
    ]
  },
  "tur-och-retur-biljett": {
    "opposite": "enkelbiljett",
    "description": "En enkelbiljett gäller en väg. En tur-och-retur-biljett gäller både dit- och hemresa.",
    "examples": [
      "Hon köpte en enkelbiljett dit och en tur-och-retur-biljett nästa gång.",
      "En tur-och-retur-biljett omfattar mer än en enkelbiljett."
    ],
    "related": [
      "enkelbiljett"
    ]
  },
  "godkänna": {
    "opposite": "underkänna",
    "description": "Godkänna betyder att bedöma något som tillräckligt bra. Underkänna betyder att inte godta det.",
    "examples": [
      "Läraren kunde godkänna arbetet eller underkänna det.",
      "Kontrollen godkände den första produkten men underkände den andra."
    ],
    "related": [
      "underkänna"
    ]
  },
  "underkänna": {
    "opposite": "godkänna",
    "description": "Godkänna betyder att bedöma något som tillräckligt bra. Underkänna betyder att inte godta det.",
    "examples": [
      "Läraren kunde godkänna arbetet eller underkänna det.",
      "Kontrollen godkände den första produkten men underkände den andra."
    ],
    "related": [
      "godkänna"
    ]
  },
  "underkäke": {
    "opposite": "överkäke",
    "description": "Underkäken är den nedre käken. Överkäken är den övre.",
    "examples": [
      "Tänderna sitter i både underkäken och överkäken.",
      "Underkäken rör sig mot överkäken när vi tuggar."
    ],
    "related": [
      "överkäke"
    ]
  },
  "överkäke": {
    "opposite": "underkäke",
    "description": "Underkäken är den nedre käken. Överkäken är den övre.",
    "examples": [
      "Tänderna sitter i både underkäken och överkäken.",
      "Underkäken rör sig mot överkäken när vi tuggar."
    ],
    "related": [
      "underkäke"
    ]
  },
  "ensidig": {
    "opposite": "mångsidig",
    "description": "Ensidig betyder begränsad till en sida eller ett perspektiv. Mångsidig betyder varierad och användbar på flera sätt.",
    "examples": [
      "Rapporten var ensidig, men diskussionen blev mångsidig.",
      "En mångsidig spelare kan göra mer än en ensidig specialistroll."
    ],
    "related": [
      "mångsidig"
    ]
  },
  "mångsidig": {
    "opposite": "ensidig",
    "description": "Ensidig betyder begränsad till en sida eller ett perspektiv. Mångsidig betyder varierad och användbar på flera sätt.",
    "examples": [
      "Rapporten var ensidig, men diskussionen blev mångsidig.",
      "En mångsidig spelare kan göra mer än en ensidig specialistroll."
    ],
    "related": [
      "ensidig"
    ]
  },
  "insjukna": {
    "opposite": "tillfriskna",
    "description": "Insjukna betyder att bli sjuk. Tillfriskna betyder att bli frisk igen.",
    "examples": [
      "Hon insjuknade på måndagen och började tillfriskna på fredagen.",
      "Flera hann insjukna innan den första patienten tillfrisknade."
    ],
    "related": [
      "tillfriskna"
    ]
  },
  "tillfriskna": {
    "opposite": "insjukna",
    "description": "Insjukna betyder att bli sjuk. Tillfriskna betyder att bli frisk igen.",
    "examples": [
      "Hon insjuknade på måndagen och började tillfriskna på fredagen.",
      "Flera hann insjukna innan den första patienten tillfrisknade."
    ],
    "related": [
      "insjukna"
    ]
  },
  "lodrät": {
    "opposite": "vågrät",
    "description": "Lodrät betyder rakt upp och ner. Vågrät betyder parallell med horisonten.",
    "examples": [
      "Stolpen är lodrät och markeringen är vågrät.",
      "Rita en lodrät linje som korsar den vågräta."
    ],
    "related": [
      "vågrät"
    ]
  },
  "vågrät": {
    "opposite": "lodrät",
    "description": "Lodrät betyder rakt upp och ner. Vågrät betyder parallell med horisonten.",
    "examples": [
      "Stolpen är lodrät och markeringen är vågrät.",
      "Rita en lodrät linje som korsar den vågräta."
    ],
    "related": [
      "lodrät"
    ]
  },
  "ovillkorad": {
    "opposite": "villkorad",
    "description": "Ovillkorad betyder utan krav. Villkorad betyder att vissa krav måste uppfyllas.",
    "examples": [
      "Stödet var villkorat först men blev senare ovillkorat.",
      "Ett ovillkorat löfte skiljer sig från ett villkorat."
    ],
    "related": [
      "villkorad"
    ]
  },
  "villkorad": {
    "opposite": "ovillkorad",
    "description": "Ovillkorad betyder utan krav. Villkorad betyder att vissa krav måste uppfyllas.",
    "examples": [
      "Stödet var villkorat först men blev senare ovillkorat.",
      "Ett ovillkorat löfte skiljer sig från ett villkorat."
    ],
    "related": [
      "ovillkorad"
    ]
  },
  "mental": {
    "opposite": "somatisk",
    "description": "Mental rör tankar och psyke. Somatisk rör kroppen.",
    "examples": [
      "Besvären kan vara mentala eller somatiska.",
      "Behandlingen tar hänsyn till både mental och somatisk hälsa."
    ],
    "related": [
      "somatisk"
    ]
  },
  "somatisk": {
    "opposite": "mental",
    "description": "Mental rör tankar och psyke. Somatisk rör kroppen.",
    "examples": [
      "Besvären kan vara mentala eller somatiska.",
      "Behandlingen tar hänsyn till både mental och somatisk hälsa."
    ],
    "related": [
      "mental"
    ]
  },
  "oxidationsmedel": {
    "opposite": "reduktionsmedel",
    "description": "Ett oxidationsmedel tar upp elektroner. Ett reduktionsmedel avger elektroner.",
    "examples": [
      "I reaktionen möter oxidationsmedlet ett reduktionsmedel.",
      "Ämnet fungerar som reduktionsmedel här och som oxidationsmedel i en annan reaktion."
    ],
    "related": [
      "reduktionsmedel"
    ]
  },
  "reduktionsmedel": {
    "opposite": "oxidationsmedel",
    "description": "Ett oxidationsmedel tar upp elektroner. Ett reduktionsmedel avger elektroner.",
    "examples": [
      "I reaktionen möter oxidationsmedlet ett reduktionsmedel.",
      "Ämnet fungerar som reduktionsmedel här och som oxidationsmedel i en annan reaktion."
    ],
    "related": [
      "oxidationsmedel"
    ]
  },
  "augmentativ": {
    "opposite": "diminutiv",
    "description": "Augmentativ uttrycker större storlek eller styrka. Diminutiv uttrycker mindre storlek eller ömhet.",
    "examples": [
      "Språket har både en augmentativ och en diminutiv form.",
      "Diminutiven gör ordet mindre, medan augmentativen förstärker det."
    ],
    "related": [
      "diminutiv"
    ]
  },
  "diminutiv": {
    "opposite": "augmentativ",
    "description": "Augmentativ uttrycker större storlek eller styrka. Diminutiv uttrycker mindre storlek eller ömhet.",
    "examples": [
      "Språket har både en augmentativ och en diminutiv form.",
      "Diminutiven gör ordet mindre, medan augmentativen förstärker det."
    ],
    "related": [
      "augmentativ"
    ]
  },
  "benägen": {
    "opposite": "obenägen",
    "description": "Benägen betyder villig eller sannolik att göra något. Obenägen betyder ovillig.",
    "examples": [
      "Hon var benägen att hjälpa men obenägen att lova för mycket.",
      "En benägen köpare agerar snabbare än en obenägen."
    ],
    "related": [
      "obenägen"
    ]
  },
  "obenägen": {
    "opposite": "benägen",
    "description": "Benägen betyder villig eller sannolik att göra något. Obenägen betyder ovillig.",
    "examples": [
      "Hon var benägen att hjälpa men obenägen att lova för mycket.",
      "En benägen köpare agerar snabbare än en obenägen."
    ],
    "related": [
      "benägen"
    ]
  },
  "individualism": {
    "opposite": "kollektivism",
    "description": "Individualism betonar individens frihet. Kollektivism betonar gruppens gemensamma ansvar.",
    "examples": [
      "Debatten ställde individualism mot kollektivism.",
      "Samhället kombinerar drag av individualism och kollektivism."
    ],
    "related": [
      "kollektivism"
    ]
  },
  "kollektivism": {
    "opposite": "individualism",
    "description": "Individualism betonar individens frihet. Kollektivism betonar gruppens gemensamma ansvar.",
    "examples": [
      "Debatten ställde individualism mot kollektivism.",
      "Samhället kombinerar drag av individualism och kollektivism."
    ],
    "related": [
      "individualism"
    ]
  },
  "oskälig": {
    "opposite": "skälig",
    "description": "Skälig betyder rimlig. Oskälig betyder orimlig eller alltför hög.",
    "examples": [
      "Avgiften var oskälig och sänktes till en skälig nivå.",
      "Kravet måste vara skäligt, inte oskäligt."
    ],
    "related": [
      "skälig"
    ]
  },
  "skälig": {
    "opposite": "oskälig",
    "description": "Skälig betyder rimlig. Oskälig betyder orimlig eller alltför hög.",
    "examples": [
      "Avgiften var oskälig och sänktes till en skälig nivå.",
      "Kravet måste vara skäligt, inte oskäligt."
    ],
    "related": [
      "oskälig"
    ]
  },
  "diffus": {
    "opposite": "distinkt",
    "description": "Diffus betyder otydlig eller utspridd. Distinkt betyder tydligt avgränsad.",
    "examples": [
      "Lukten var diffus, men ljudet var distinkt.",
      "Gör den diffusa kanten mer distinkt."
    ],
    "related": [
      "distinkt"
    ]
  },
  "distinkt": {
    "opposite": "diffus",
    "description": "Diffus betyder otydlig eller utspridd. Distinkt betyder tydligt avgränsad.",
    "examples": [
      "Lukten var diffus, men ljudet var distinkt.",
      "Gör den diffusa kanten mer distinkt."
    ],
    "related": [
      "diffus"
    ]
  },
  "inkongruens": {
    "opposite": "kongruens",
    "description": "Kongruens betyder överensstämmelse. Inkongruens betyder brist på överensstämmelse.",
    "examples": [
      "Mätningen visade kongruens mellan modellerna och inkongruens i en detalj.",
      "Inkongruensen försvann när full kongruens uppnåddes."
    ],
    "related": [
      "kongruens"
    ]
  },
  "kongruens": {
    "opposite": "inkongruens",
    "description": "Kongruens betyder överensstämmelse. Inkongruens betyder brist på överensstämmelse.",
    "examples": [
      "Mätningen visade kongruens mellan modellerna och inkongruens i en detalj.",
      "Inkongruensen försvann när full kongruens uppnåddes."
    ],
    "related": [
      "inkongruens"
    ]
  },
  "lantlig": {
    "opposite": "urban",
    "description": "Lantlig betyder som hör till landsbygden. Urban betyder som hör till staden.",
    "examples": [
      "De flyttade från en urban miljö till en lantlig.",
      "Den urbana livsstilen skiljer sig från den lantliga."
    ],
    "related": [
      "urban"
    ]
  },
  "urban": {
    "opposite": "lantlig",
    "description": "Lantlig betyder som hör till landsbygden. Urban betyder som hör till staden.",
    "examples": [
      "De flyttade från en urban miljö till en lantlig.",
      "Den urbana livsstilen skiljer sig från den lantliga."
    ],
    "related": [
      "lantlig"
    ]
  },
  "antedatera": {
    "opposite": "postdatera",
    "description": "Antedatera betyder att sätta ett tidigare datum. Postdatera betyder att sätta ett senare datum.",
    "examples": [
      "Du får varken antedatera eller postdatera dokumentet felaktigt.",
      "Hon antedaterade det första brevet och postdaterade det andra."
    ],
    "related": [
      "postdatera"
    ]
  },
  "postdatera": {
    "opposite": "antedatera",
    "description": "Antedatera betyder att sätta ett tidigare datum. Postdatera betyder att sätta ett senare datum.",
    "examples": [
      "Du får varken antedatera eller postdatera dokumentet felaktigt.",
      "Hon antedaterade det första brevet och postdaterade det andra."
    ],
    "related": [
      "antedatera"
    ]
  },
  "andlig": {
    "opposite": "jordisk",
    "description": "Andlig rör själen eller religionen. Jordisk rör det materiella livet.",
    "examples": [
      "Texten handlar om både andliga och jordiska frågor.",
      "Han sökte andlig ro snarare än jordisk rikedom."
    ],
    "related": [
      "jordisk"
    ]
  },
  "jordisk": {
    "opposite": "andlig",
    "description": "Andlig rör själen eller religionen. Jordisk rör det materiella livet.",
    "examples": [
      "Texten handlar om både andliga och jordiska frågor.",
      "Han sökte andlig ro snarare än jordisk rikedom."
    ],
    "related": [
      "andlig"
    ]
  },
  "oredlighet": {
    "opposite": "redlighet",
    "description": "Redlighet betyder ärlighet och hederlighet. Oredlighet betyder oärlighet.",
    "examples": [
      "Företaget krävde redlighet och straffade oredlighet.",
      "Utredningen fann redlighet i ett fall och oredlighet i ett annat."
    ],
    "related": [
      "redlighet"
    ]
  },
  "redlighet": {
    "opposite": "oredlighet",
    "description": "Redlighet betyder ärlighet och hederlighet. Oredlighet betyder oärlighet.",
    "examples": [
      "Företaget krävde redlighet och straffade oredlighet.",
      "Utredningen fann redlighet i ett fall och oredlighet i ett annat."
    ],
    "related": [
      "oredlighet"
    ]
  },
  "immateriell": {
    "opposite": "materiell",
    "description": "Materiell betyder fysisk eller knuten till saker. Immateriell betyder utan fysisk form.",
    "examples": [
      "Maskinen är materiell, medan upphovsrätten är immateriell.",
      "Företaget äger både materiella och immateriella tillgångar."
    ],
    "related": [
      "materiell"
    ]
  },
  "materiell": {
    "opposite": "immateriell",
    "description": "Materiell betyder fysisk eller knuten till saker. Immateriell betyder utan fysisk form.",
    "examples": [
      "Maskinen är materiell, medan upphovsrätten är immateriell.",
      "Företaget äger både materiella och immateriella tillgångar."
    ],
    "related": [
      "immateriell"
    ]
  },
  "instrumentalmusik": {
    "opposite": "vokalmusik",
    "description": "Instrumentalmusik framförs utan sång. Vokalmusik bygger på röster.",
    "examples": [
      "Konserten blandade instrumentalmusik med vokalmusik.",
      "Stycket började som instrumentalmusik och fick senare drag av vokalmusik."
    ],
    "related": [
      "vokalmusik"
    ]
  },
  "vokalmusik": {
    "opposite": "instrumentalmusik",
    "description": "Instrumentalmusik framförs utan sång. Vokalmusik bygger på röster.",
    "examples": [
      "Konserten blandade instrumentalmusik med vokalmusik.",
      "Stycket började som instrumentalmusik och fick senare drag av vokalmusik."
    ],
    "related": [
      "instrumentalmusik"
    ]
  },
  "borgenär": {
    "opposite": "gäldenär",
    "description": "En borgenär har rätt att få betalt. En gäldenär är skyldig att betala.",
    "examples": [
      "Gäldenären betalade skulden till borgenären.",
      "Avtalet beskriver både borgenärens och gäldenärens ansvar."
    ],
    "related": [
      "gäldenär"
    ]
  },
  "gäldenär": {
    "opposite": "borgenär",
    "description": "En borgenär har rätt att få betalt. En gäldenär är skyldig att betala.",
    "examples": [
      "Gäldenären betalade skulden till borgenären.",
      "Avtalet beskriver både borgenärens och gäldenärens ansvar."
    ],
    "related": [
      "borgenär"
    ]
  },
  "inrikes": {
    "opposite": "utrikes",
    "description": "Inrikes betyder inom landet. Utrikes betyder i eller till andra länder.",
    "examples": [
      "Företaget arbetar både inrikes och utrikes.",
      "Inrikes trafik skiljer sig från utrikes trafik."
    ],
    "related": [
      "utrikes"
    ]
  },
  "utrikes": {
    "opposite": "inrikes",
    "description": "Inrikes betyder inom landet. Utrikes betyder i eller till andra länder.",
    "examples": [
      "Företaget arbetar både inrikes och utrikes.",
      "Inrikes trafik skiljer sig från utrikes trafik."
    ],
    "related": [
      "inrikes"
    ]
  },
  "kroklinjig": {
    "opposite": "rätlinjig",
    "description": "Kroklinjig betyder att följa en böjd linje. Rätlinjig betyder att följa en rak linje.",
    "examples": [
      "Rörelsen var först rätlinjig och sedan kroklinjig.",
      "En kroklinjig bana är böjd, medan en rätlinjig är rak."
    ],
    "related": [
      "rätlinjig"
    ]
  },
  "rätlinjig": {
    "opposite": "kroklinjig",
    "description": "Kroklinjig betyder att följa en böjd linje. Rätlinjig betyder att följa en rak linje.",
    "examples": [
      "Rörelsen var först rätlinjig och sedan kroklinjig.",
      "En kroklinjig bana är böjd, medan en rätlinjig är rak."
    ],
    "related": [
      "kroklinjig"
    ]
  },
  "trådbunden": {
    "opposite": "trådlös",
    "description": "Trådbunden betyder ansluten med kabel. Trådlös betyder ansluten utan kabel.",
    "examples": [
      "Den trådbundna musen har kabel, men den trådlösa saknar den.",
      "Nätverket kan vara trådbundet eller trådlöst."
    ],
    "related": [
      "trådlös"
    ]
  },
  "trådlös": {
    "opposite": "trådbunden",
    "description": "Trådbunden betyder ansluten med kabel. Trådlös betyder ansluten utan kabel.",
    "examples": [
      "Den trådbundna musen har kabel, men den trådlösa saknar den.",
      "Nätverket kan vara trådbundet eller trådlöst."
    ],
    "related": [
      "trådbunden"
    ]
  },
  "generalist": {
    "opposite": "specialist",
    "description": "En generalist kan mycket inom flera områden. En specialist kan mycket inom ett avgränsat område.",
    "examples": [
      "Generalisten såg helheten och specialisten löste detaljproblemet.",
      "Teamet behöver både en generalist och en specialist."
    ],
    "related": [
      "specialist"
    ]
  },
  "specialist": {
    "opposite": "generalist",
    "description": "En generalist kan mycket inom flera områden. En specialist kan mycket inom ett avgränsat område.",
    "examples": [
      "Generalisten såg helheten och specialisten löste detaljproblemet.",
      "Teamet behöver både en generalist och en specialist."
    ],
    "related": [
      "generalist"
    ]
  },
  "allehanda": {
    "opposite": "enahanda",
    "description": "Allehanda betyder av många olika slag. Enahanda betyder likformig och utan variation.",
    "examples": [
      "Marknaden erbjöd allehanda varor, men menyn var enahanda.",
      "Hon ville ha allehanda uppgifter i stället för ett enahanda arbete."
    ],
    "related": [
      "enahanda"
    ]
  },
  "enahanda": {
    "opposite": "allehanda",
    "description": "Allehanda betyder av många olika slag. Enahanda betyder likformig och utan variation.",
    "examples": [
      "Marknaden erbjöd allehanda varor, men menyn var enahanda.",
      "Hon ville ha allehanda uppgifter i stället för ett enahanda arbete."
    ],
    "related": [
      "allehanda"
    ]
  },
  "förbehållsam": {
    "opposite": "oförbehållsam",
    "description": "Förbehållsam betyder återhållsam. Oförbehållsam betyder öppen och utan reservationer.",
    "examples": [
      "Han var förbehållsam i början men senare oförbehållsam.",
      "Stödet var oförbehållsamt, medan svaret var förbehållsamt."
    ],
    "related": [
      "oförbehållsam"
    ]
  },
  "oförbehållsam": {
    "opposite": "förbehållsam",
    "description": "Förbehållsam betyder återhållsam. Oförbehållsam betyder öppen och utan reservationer.",
    "examples": [
      "Han var förbehållsam i början men senare oförbehållsam.",
      "Stödet var oförbehållsamt, medan svaret var förbehållsamt."
    ],
    "related": [
      "förbehållsam"
    ]
  },
  "lättillgänglig": {
    "opposite": "svårtillgänglig",
    "description": "Lättillgänglig betyder enkel att nå eller förstå. Svårtillgänglig betyder svår att nå eller förstå.",
    "examples": [
      "Guiden är lättillgänglig, men originaltexten är svårtillgänglig.",
      "Platsen blev lättillgänglig efter att ha varit svårtillgänglig."
    ],
    "related": [
      "svårtillgänglig"
    ]
  },
  "svårtillgänglig": {
    "opposite": "lättillgänglig",
    "description": "Lättillgänglig betyder enkel att nå eller förstå. Svårtillgänglig betyder svår att nå eller förstå.",
    "examples": [
      "Guiden är lättillgänglig, men originaltexten är svårtillgänglig.",
      "Platsen blev lättillgänglig efter att ha varit svårtillgänglig."
    ],
    "related": [
      "lättillgänglig"
    ]
  },
  "komparabel": {
    "opposite": "okomparabel",
    "description": "Komparabel betyder möjlig att jämföra. Okomparabel betyder att en meningsfull jämförelse inte kan göras.",
    "examples": [
      "Resultaten är komparabla, men den äldre mätningen är okomparabel.",
      "Gör materialet komparabelt i stället för okomparabelt."
    ],
    "related": [
      "okomparabel"
    ]
  },
  "okomparabel": {
    "opposite": "komparabel",
    "description": "Komparabel betyder möjlig att jämföra. Okomparabel betyder att en meningsfull jämförelse inte kan göras.",
    "examples": [
      "Resultaten är komparabla, men den äldre mätningen är okomparabel.",
      "Gör materialet komparabelt i stället för okomparabelt."
    ],
    "related": [
      "komparabel"
    ]
  },
  "underläge": {
    "opposite": "övertag",
    "description": "Underläge betyder en sämre position. Övertag betyder en bättre position än motståndaren.",
    "examples": [
      "Laget vände ett underläge till ett övertag.",
      "Hon hade ett övertag först men hamnade senare i underläge."
    ],
    "related": [
      "övertag"
    ]
  },
  "övertag": {
    "opposite": "underläge",
    "description": "Underläge betyder en sämre position. Övertag betyder en bättre position än motståndaren.",
    "examples": [
      "Laget vände ett underläge till ett övertag.",
      "Hon hade ett övertag först men hamnade senare i underläge."
    ],
    "related": [
      "underläge"
    ]
  },
  "innantill": {
    "opposite": "utantill",
    "description": "Innantill betyder att läsa direkt ur en text. Utantill betyder ur minnet.",
    "examples": [
      "Han läste dikten innantill först och kunde den senare utantill.",
      "Lär dig orden utantill i stället för att läsa innantill."
    ],
    "related": [
      "utantill"
    ]
  },
  "utantill": {
    "opposite": "innantill",
    "description": "Innantill betyder att läsa direkt ur en text. Utantill betyder ur minnet.",
    "examples": [
      "Han läste dikten innantill först och kunde den senare utantill.",
      "Lär dig orden utantill i stället för att läsa innantill."
    ],
    "related": [
      "innantill"
    ]
  },
  "prim": {
    "opposite": "sammansatt",
    "description": "Ett primtal har exakt två positiva delare. Ett sammansatt tal har fler än två.",
    "examples": [
      "Sju är ett primt tal, medan åtta är sammansatt.",
      "Avgör om talet är primt eller sammansatt."
    ],
    "related": [
      "sammansatt"
    ]
  },
  "sammansatt": {
    "opposite": "prim",
    "description": "Ett primtal har exakt två positiva delare. Ett sammansatt tal har fler än två.",
    "examples": [
      "Sju är ett primt tal, medan åtta är sammansatt.",
      "Avgör om talet är primt eller sammansatt."
    ],
    "related": [
      "prim"
    ]
  },
  "spetsvinklig": {
    "opposite": "trubbvinklig",
    "description": "Spetsvinklig betyder med en vinkel mindre än 90 grader. Trubbvinklig betyder med en vinkel större än 90 grader.",
    "examples": [
      "Den ena triangeln är spetsvinklig och den andra trubbvinklig.",
      "En spetsvinklig vinkel är mindre än en trubbvinklig."
    ],
    "related": [
      "trubbvinklig"
    ]
  },
  "trubbvinklig": {
    "opposite": "spetsvinklig",
    "description": "Spetsvinklig betyder med en vinkel mindre än 90 grader. Trubbvinklig betyder med en vinkel större än 90 grader.",
    "examples": [
      "Den ena triangeln är spetsvinklig och den andra trubbvinklig.",
      "En spetsvinklig vinkel är mindre än en trubbvinklig."
    ],
    "related": [
      "spetsvinklig"
    ]
  },
  "högakta": {
    "opposite": "ringakta",
    "description": "Högakta betyder att respektera mycket. Ringakta betyder att se ner på.",
    "examples": [
      "Hon högaktade sin lärare och ville inte ringakta någon.",
      "Man kan högakta en insats men ringakta ett oärligt beteende."
    ],
    "related": [
      "ringakta"
    ]
  },
  "ringakta": {
    "opposite": "högakta",
    "description": "Högakta betyder att respektera mycket. Ringakta betyder att se ner på.",
    "examples": [
      "Hon högaktade sin lärare och ville inte ringakta någon.",
      "Man kan högakta en insats men ringakta ett oärligt beteende."
    ],
    "related": [
      "högakta"
    ]
  },
  "endräkt": {
    "opposite": "tvedräkt",
    "description": "Endräkt betyder enighet. Tvedräkt betyder oenighet och konflikt.",
    "examples": [
      "Gruppen gick från tvedräkt till endräkt.",
      "Endräkt gav framgång, medan tvedräkt skapade problem."
    ],
    "related": [
      "tvedräkt"
    ]
  },
  "tvedräkt": {
    "opposite": "endräkt",
    "description": "Endräkt betyder enighet. Tvedräkt betyder oenighet och konflikt.",
    "examples": [
      "Gruppen gick från tvedräkt till endräkt.",
      "Endräkt gav framgång, medan tvedräkt skapade problem."
    ],
    "related": [
      "endräkt"
    ]
  },
  "frånvara": {
    "opposite": "närvara",
    "description": "Frånvara betyder att inte vara på plats. Närvara betyder att vara där.",
    "examples": [
      "Hon kunde inte närvara och måste därför frånvara.",
      "Alla förväntas närvara, inte frånvara, vid mötet."
    ],
    "related": [
      "närvara"
    ]
  },
  "närvara": {
    "opposite": "frånvara",
    "description": "Frånvara betyder att inte vara på plats. Närvara betyder att vara där.",
    "examples": [
      "Hon kunde inte närvara och måste därför frånvara.",
      "Alla förväntas närvara, inte frånvara, vid mötet."
    ],
    "related": [
      "frånvara"
    ]
  },
  "evertebrat": {
    "opposite": "vertebrat",
    "description": "Ett evertebrat saknar ryggrad. Ett vertebrat har ryggrad.",
    "examples": [
      "En mask är ett evertebrat, medan en fisk är ett vertebrat.",
      "Museet visar både vertebrat och evertebrat."
    ],
    "related": [
      "vertebrat"
    ]
  },
  "vertebrat": {
    "opposite": "evertebrat",
    "description": "Ett evertebrat saknar ryggrad. Ett vertebrat har ryggrad.",
    "examples": [
      "En mask är ett evertebrat, medan en fisk är ett vertebrat.",
      "Museet visar både vertebrat och evertebrat."
    ],
    "related": [
      "evertebrat"
    ]
  },
  "högfrekvent": {
    "opposite": "lågfrekvent",
    "description": "Högfrekvent betyder med hög frekvens. Lågfrekvent betyder med låg frekvens.",
    "examples": [
      "Signalen har en högfrekvent och en lågfrekvent del.",
      "Det högfrekventa ljudet ligger över det lågfrekventa."
    ],
    "related": [
      "lågfrekvent"
    ]
  },
  "lågfrekvent": {
    "opposite": "högfrekvent",
    "description": "Högfrekvent betyder med hög frekvens. Lågfrekvent betyder med låg frekvens.",
    "examples": [
      "Signalen har en högfrekvent och en lågfrekvent del.",
      "Det högfrekventa ljudet ligger över det lågfrekventa."
    ],
    "related": [
      "högfrekvent"
    ]
  },
  "impermeabel": {
    "opposite": "permeabel",
    "description": "Permeabel betyder genomsläpplig. Impermeabel betyder att vätska eller gas inte kan passera.",
    "examples": [
      "Sandlagret är permeabelt, men lerlagret är nästan impermeabelt.",
      "Membranet gick från impermeabelt till mer permeabelt."
    ],
    "related": [
      "permeabel"
    ]
  },
  "permeabel": {
    "opposite": "impermeabel",
    "description": "Permeabel betyder genomsläpplig. Impermeabel betyder att vätska eller gas inte kan passera.",
    "examples": [
      "Sandlagret är permeabelt, men lerlagret är nästan impermeabelt.",
      "Membranet gick från impermeabelt till mer permeabelt."
    ],
    "related": [
      "impermeabel"
    ]
  },
  "högerut": {
    "opposite": "vänsterut",
    "description": "Högerut betyder i riktning åt höger. Vänsterut betyder i riktning åt vänster.",
    "examples": [
      "Sväng högerut vid bron och sedan vänsterut vid skolan.",
      "Den ena pilen pekar högerut och den andra vänsterut."
    ],
    "related": [
      "vänsterut"
    ]
  },
  "vänsterut": {
    "opposite": "högerut",
    "description": "Högerut betyder i riktning åt höger. Vänsterut betyder i riktning åt vänster.",
    "examples": [
      "Sväng högerut vid bron och sedan vänsterut vid skolan.",
      "Den ena pilen pekar högerut och den andra vänsterut."
    ],
    "related": [
      "högerut"
    ]
  },
  "begagnad": {
    "opposite": "ny",
    "description": "Begagnad betyder tidigare använd. Ny betyder oanvänd eller nyligen tillverkad.",
    "examples": [
      "Hon köpte en begagnad bil i stället för en ny.",
      "Den nya datorn kostar mer än den begagnade."
    ],
    "related": [
      "ny"
    ]
  },
  "ny": {
    "opposite": "begagnad",
    "description": "Begagnad betyder tidigare använd. Ny betyder oanvänd eller nyligen tillverkad.",
    "examples": [
      "Hon köpte en begagnad bil i stället för en ny.",
      "Den nya datorn kostar mer än den begagnade."
    ],
    "related": [
      "begagnad"
    ]
  },
  "allmän": {
    "opposite": "privat",
    "description": "Allmän betyder öppen eller gemensam för många. Privat betyder personlig eller inte offentlig.",
    "examples": [
      "Parken är allmän, men trädgården är privat.",
      "Den allmänna informationen skiljs från den privata."
    ],
    "related": [
      "privat"
    ]
  },
  "privat": {
    "opposite": "allmän",
    "description": "Allmän betyder öppen eller gemensam för många. Privat betyder personlig eller inte offentlig.",
    "examples": [
      "Parken är allmän, men trädgården är privat.",
      "Den allmänna informationen skiljs från den privata."
    ],
    "related": [
      "allmän"
    ]
  },
  "prima": {
    "opposite": "sekunda",
    "description": "Prima betecknar högsta kvalitet. Sekunda betecknar lägre eller andrasorterad kvalitet.",
    "examples": [
      "Butiken säljer både prima och sekunda varor.",
      "Det prima virket kostar mer än det sekunda."
    ],
    "related": [
      "sekunda"
    ]
  },
  "sekunda": {
    "opposite": "prima",
    "description": "Prima betecknar högsta kvalitet. Sekunda betecknar lägre eller andrasorterad kvalitet.",
    "examples": [
      "Butiken säljer både prima och sekunda varor.",
      "Det prima virket kostar mer än det sekunda."
    ],
    "related": [
      "prima"
    ]
  },
  "salt": {
    "opposite": "söt",
    "description": "Salt och söt beskriver motsatta grundsmaker.",
    "examples": [
      "Soppan är salt, medan kakan är söt.",
      "Hon valde ett sött mellanmål efter den salta maten."
    ],
    "related": [
      "söt"
    ]
  },
  "söt": {
    "opposite": "salt",
    "description": "Salt och söt beskriver motsatta grundsmaker.",
    "examples": [
      "Soppan är salt, medan kakan är söt.",
      "Hon valde ett sött mellanmål efter den salta maten."
    ],
    "related": [
      "salt"
    ]
  },
  "antipartikel": {
    "opposite": "partikel",
    "description": "En antipartikel har motsatta kvanttal mot sin motsvarande partikel.",
    "examples": [
      "Elektronen är en partikel och positronen dess antipartikel.",
      "När en partikel möter sin antipartikel kan de förintas."
    ],
    "related": [
      "partikel"
    ]
  },
  "partikel": {
    "opposite": "antipartikel",
    "description": "En antipartikel har motsatta kvanttal mot sin motsvarande partikel.",
    "examples": [
      "Elektronen är en partikel och positronen dess antipartikel.",
      "När en partikel möter sin antipartikel kan de förintas."
    ],
    "related": [
      "antipartikel"
    ]
  },
  "derivera": {
    "opposite": "integrera",
    "description": "Att derivera och integrera är omvända matematiska operationer.",
    "examples": [
      "Derivera funktionen och integrera sedan resultatet.",
      "Studenten lärde sig både derivera och integrera."
    ],
    "related": [
      "integrera"
    ]
  },
  "integrera": {
    "opposite": "derivera",
    "description": "Att derivera och integrera är omvända matematiska operationer.",
    "examples": [
      "Derivera funktionen och integrera sedan resultatet.",
      "Studenten lärde sig både derivera och integrera."
    ],
    "related": [
      "derivera"
    ]
  },
  "hyperonym": {
    "opposite": "hyponym",
    "description": "En hyperonym är ett överordnat ord. En hyponym är ett mer specifikt underordnat ord.",
    "examples": [
      "Fordon är hyperonym till bil, och bil är hyponym till fordon.",
      "Träd är en hyperonym och ek en hyponym."
    ],
    "related": [
      "hyponym"
    ]
  },
  "hyponym": {
    "opposite": "hyperonym",
    "description": "En hyperonym är ett överordnat ord. En hyponym är ett mer specifikt underordnat ord.",
    "examples": [
      "Fordon är hyperonym till bil, och bil är hyponym till fordon.",
      "Träd är en hyperonym och ek en hyponym."
    ],
    "related": [
      "hyperonym"
    ]
  },
  "holonym": {
    "opposite": "meronym",
    "description": "En holonym betecknar en helhet. En meronym betecknar en del av helheten.",
    "examples": [
      "Bil är holonym till hjul, och hjul är meronym till bil.",
      "Kropp är en holonym och hand en meronym."
    ],
    "related": [
      "meronym"
    ]
  },
  "meronym": {
    "opposite": "holonym",
    "description": "En holonym betecknar en helhet. En meronym betecknar en del av helheten.",
    "examples": [
      "Bil är holonym till hjul, och hjul är meronym till bil.",
      "Kropp är en holonym och hand en meronym."
    ],
    "related": [
      "holonym"
    ]
  },
  "antonymi": {
    "opposite": "synonymi",
    "description": "Antonymi är en relation mellan motsatser. Synonymi är en relation mellan ord med liknande betydelse.",
    "examples": [
      "Varm och kall visar antonymi, medan glad och lycklig visar synonymi.",
      "Uppgiften skiljer mellan antonymi och synonymi."
    ],
    "related": [
      "synonymi"
    ]
  },
  "synonymi": {
    "opposite": "antonymi",
    "description": "Antonymi är en relation mellan motsatser. Synonymi är en relation mellan ord med liknande betydelse.",
    "examples": [
      "Varm och kall visar antonymi, medan glad och lycklig visar synonymi.",
      "Uppgiften skiljer mellan antonymi och synonymi."
    ],
    "related": [
      "antonymi"
    ]
  },
  "fjärma": {
    "opposite": "närma",
    "description": "Fjärma betyder att öka avståndet. Närma betyder att minska avståndet.",
    "examples": [
      "Båten började fjärma sig från land och senare närma sig hamnen.",
      "Hon ville närma grupperna till varandra, inte fjärma dem."
    ],
    "related": [
      "närma"
    ]
  },
  "närma": {
    "opposite": "fjärma",
    "description": "Fjärma betyder att öka avståndet. Närma betyder att minska avståndet.",
    "examples": [
      "Båten började fjärma sig från land och senare närma sig hamnen.",
      "Hon ville närma grupperna till varandra, inte fjärma dem."
    ],
    "related": [
      "fjärma"
    ]
  },
  "avslå": {
    "opposite": "bevilja",
    "description": "Avslå betyder att säga nej till en ansökan. Bevilja betyder att godkänna den.",
    "examples": [
      "Myndigheten kan bevilja ansökan eller avslå den.",
      "Den första begäran avslogs, men den andra beviljades."
    ],
    "related": [
      "bevilja"
    ]
  },
  "bevilja": {
    "opposite": "avslå",
    "description": "Avslå betyder att säga nej till en ansökan. Bevilja betyder att godkänna den.",
    "examples": [
      "Myndigheten kan bevilja ansökan eller avslå den.",
      "Den första begäran avslogs, men den andra beviljades."
    ],
    "related": [
      "avslå"
    ]
  },
  "anställa": {
    "opposite": "avskeda",
    "description": "Anställa betyder att ge någon arbete. Avskeda betyder att avsluta personens anställning.",
    "examples": [
      "Företaget ska anställa två personer men avskeda en.",
      "Hon anställdes i våras och riskerar inte att avskedas."
    ],
    "related": [
      "avskeda"
    ]
  },
  "avskeda": {
    "opposite": "anställa",
    "description": "Anställa betyder att ge någon arbete. Avskeda betyder att avsluta personens anställning.",
    "examples": [
      "Företaget ska anställa två personer men avskeda en.",
      "Hon anställdes i våras och riskerar inte att avskedas."
    ],
    "related": [
      "anställa"
    ]
  },
  "avråda": {
    "opposite": "tillråda",
    "description": "Avråda betyder att rekommendera någon att låta bli. Tillråda betyder att rekommendera handlingen.",
    "examples": [
      "Läkaren avrådde från hård träning men tillrådde vila.",
      "Experten kan avråda från ett val och tillråda ett annat."
    ],
    "related": [
      "tillråda"
    ]
  },
  "tillråda": {
    "opposite": "avråda",
    "description": "Avråda betyder att rekommendera någon att låta bli. Tillråda betyder att rekommendera handlingen.",
    "examples": [
      "Läkaren avrådde från hård träning men tillrådde vila.",
      "Experten kan avråda från ett val och tillråda ett annat."
    ],
    "related": [
      "avråda"
    ]
  },
  "ankomma": {
    "opposite": "avgå",
    "description": "Ankomma betyder att komma fram. Avgå betyder att lämna en plats.",
    "examples": [
      "Tåget avgår klockan åtta och ankommer klockan tio.",
      "Bussen hann avgå innan det andra tåget ankom."
    ],
    "related": [
      "avgå"
    ]
  },
  "avgå": {
    "opposite": "ankomma",
    "description": "Ankomma betyder att komma fram. Avgå betyder att lämna en plats.",
    "examples": [
      "Tåget avgår klockan åtta och ankommer klockan tio.",
      "Bussen hann avgå innan det andra tåget ankom."
    ],
    "related": [
      "ankomma"
    ]
  },
  "avfart": {
    "opposite": "påfart",
    "description": "En avfart leder bort från en större väg. En påfart leder in på den.",
    "examples": [
      "Ta nästa avfart och använd sedan påfarten tillbaka.",
      "Påfarten ligger strax efter avfarten."
    ],
    "related": [
      "påfart"
    ]
  },
  "påfart": {
    "opposite": "avfart",
    "description": "En avfart leder bort från en större väg. En påfart leder in på den.",
    "examples": [
      "Ta nästa avfart och använd sedan påfarten tillbaka.",
      "Påfarten ligger strax efter avfarten."
    ],
    "related": [
      "avfart"
    ]
  },
  "maximum": {
    "opposite": "minimum",
    "description": "Maximum är det högsta värdet. Minimum är det lägsta.",
    "examples": [
      "Temperaturens maximum var tjugo grader och dess minimum fem.",
      "Kurvan har både ett maximum och ett minimum."
    ],
    "related": [
      "minimum"
    ]
  },
  "minimum": {
    "opposite": "maximum",
    "description": "Maximum är det högsta värdet. Minimum är det lägsta.",
    "examples": [
      "Temperaturens maximum var tjugo grader och dess minimum fem.",
      "Kurvan har både ett maximum och ett minimum."
    ],
    "related": [
      "maximum"
    ]
  },
  "adagio": {
    "opposite": "allegro",
    "description": "Adagio anger långsamt tempo. Allegro anger snabbt och livligt tempo.",
    "examples": [
      "Stycket börjar i adagio och övergår till allegro.",
      "Dirigenten spelade allegro snabbare än adagio."
    ],
    "related": [
      "allegro"
    ]
  },
  "allegro": {
    "opposite": "adagio",
    "description": "Adagio anger långsamt tempo. Allegro anger snabbt och livligt tempo.",
    "examples": [
      "Stycket börjar i adagio och övergår till allegro.",
      "Dirigenten spelade allegro snabbare än adagio."
    ],
    "related": [
      "adagio"
    ]
  },
  "medurs": {
    "opposite": "moturs",
    "description": "Medurs följer klockans riktning. Moturs går i motsatt riktning.",
    "examples": [
      "Vrid ratten medurs för att stänga och moturs för att öppna.",
      "Den ena pilen går medurs och den andra moturs."
    ],
    "related": [
      "moturs"
    ]
  },
  "moturs": {
    "opposite": "medurs",
    "description": "Medurs följer klockans riktning. Moturs går i motsatt riktning.",
    "examples": [
      "Vrid ratten medurs för att stänga och moturs för att öppna.",
      "Den ena pilen går medurs och den andra moturs."
    ],
    "related": [
      "medurs"
    ]
  },
  "adekvat": {
    "opposite": "inadekvat",
    "description": "Adekvat betyder lämplig och tillräcklig. Inadekvat betyder olämplig eller otillräcklig.",
    "examples": [
      "Svaret var adekvat, men förklaringen var inadekvat.",
      "En inadekvat åtgärd ersattes av en adekvat."
    ],
    "related": [
      "inadekvat"
    ]
  },
  "inadekvat": {
    "opposite": "adekvat",
    "description": "Adekvat betyder lämplig och tillräcklig. Inadekvat betyder olämplig eller otillräcklig.",
    "examples": [
      "Svaret var adekvat, men förklaringen var inadekvat.",
      "En inadekvat åtgärd ersattes av en adekvat."
    ],
    "related": [
      "adekvat"
    ]
  },
  "maximivärde": {
    "opposite": "minimivärde",
    "description": "Maximivärdet är det största tillåtna eller uppmätta värdet. Minimivärdet är det minsta.",
    "examples": [
      "Mätningen låg mellan minimivärdet och maximivärdet.",
      "Ange både maximivärde och minimivärde."
    ],
    "related": [
      "minimivärde"
    ]
  },
  "minimivärde": {
    "opposite": "maximivärde",
    "description": "Maximivärdet är det största tillåtna eller uppmätta värdet. Minimivärdet är det minsta.",
    "examples": [
      "Mätningen låg mellan minimivärdet och maximivärdet.",
      "Ange både maximivärde och minimivärde."
    ],
    "related": [
      "maximivärde"
    ]
  },
  "osäkerhet": {
    "opposite": "säkerhet",
    "description": "Säkerhet innebär trygghet eller visshet. Osäkerhet innebär risk eller tvekan.",
    "examples": [
      "Tydliga regler ökade säkerheten och minskade osäkerheten.",
      "Osäkerheten ersattes av större säkerhet."
    ],
    "related": [
      "säkerhet"
    ]
  },
  "säkerhet": {
    "opposite": "osäkerhet",
    "description": "Säkerhet innebär trygghet eller visshet. Osäkerhet innebär risk eller tvekan.",
    "examples": [
      "Tydliga regler ökade säkerheten och minskade osäkerheten.",
      "Osäkerheten ersattes av större säkerhet."
    ],
    "related": [
      "osäkerhet"
    ]
  },
  "nödvändig": {
    "opposite": "onödig",
    "description": "Nödvändig betyder att något behövs. Onödig betyder att det inte behövs.",
    "examples": [
      "Vatten är nödvändigt, men extra dekoration är onödig.",
      "Ta med det nödvändiga och lämna det onödiga."
    ],
    "related": [
      "onödig"
    ]
  },
  "onödig": {
    "opposite": "nödvändig",
    "description": "Nödvändig betyder att något behövs. Onödig betyder att det inte behövs.",
    "examples": [
      "Vatten är nödvändigt, men extra dekoration är onödig.",
      "Ta med det nödvändiga och lämna det onödiga."
    ],
    "related": [
      "nödvändig"
    ]
  },
  "styrka": {
    "opposite": "svaghet",
    "description": "En styrka är en stark eller fördelaktig egenskap. En svaghet är en brist eller sårbarhet.",
    "examples": [
      "Snabbheten är lagets styrka och uthålligheten dess svaghet.",
      "Analysen visar både styrkor och svagheter."
    ],
    "related": [
      "svaghet"
    ]
  },
  "svaghet": {
    "opposite": "styrka",
    "description": "En styrka är en stark eller fördelaktig egenskap. En svaghet är en brist eller sårbarhet.",
    "examples": [
      "Snabbheten är lagets styrka och uthålligheten dess svaghet.",
      "Analysen visar både styrkor och svagheter."
    ],
    "related": [
      "styrka"
    ]
  },
  "tillbakadragen": {
    "opposite": "utåtriktad",
    "description": "Tillbakadragen betyder reserverad och tyst. Utåtriktad betyder social och öppen.",
    "examples": [
      "Hon är tillbakadragen i stora grupper men utåtriktad bland vänner.",
      "Den utåtriktade eleven pratade mer än den tillbakadragna."
    ],
    "related": [
      "utåtriktad"
    ]
  },
  "utåtriktad": {
    "opposite": "tillbakadragen",
    "description": "Tillbakadragen betyder reserverad och tyst. Utåtriktad betyder social och öppen.",
    "examples": [
      "Hon är tillbakadragen i stora grupper men utåtriktad bland vänner.",
      "Den utåtriktade eleven pratade mer än den tillbakadragna."
    ],
    "related": [
      "tillbakadragen"
    ]
  },
  "underlägsen": {
    "opposite": "överlägsen",
    "description": "Underlägsen betyder sämre eller svagare i en jämförelse. Överlägsen betyder bättre eller starkare.",
    "examples": [
      "Den gamla modellen var underlägsen den nya, som var tekniskt överlägsen.",
      "Laget kände sig underlägset men blev senare överlägset."
    ],
    "related": [
      "överlägsen"
    ]
  },
  "överlägsen": {
    "opposite": "underlägsen",
    "description": "Underlägsen betyder sämre eller svagare i en jämförelse. Överlägsen betyder bättre eller starkare.",
    "examples": [
      "Den gamla modellen var underlägsen den nya, som var tekniskt överlägsen.",
      "Laget kände sig underlägset men blev senare överlägset."
    ],
    "related": [
      "underlägsen"
    ]
  },
  "nominell": {
    "opposite": "reell",
    "description": "Nominell beskriver ett angivet värde. Reell beskriver det verkliga värdet efter relevanta justeringar.",
    "examples": [
      "Den nominella lönen steg, men den reella lönen sjönk.",
      "Räntan kan anges som nominell eller reell."
    ],
    "related": [
      "reell"
    ]
  },
  "reell": {
    "opposite": "nominell",
    "description": "Nominell beskriver ett angivet värde. Reell beskriver det verkliga värdet efter relevanta justeringar.",
    "examples": [
      "Den nominella lönen steg, men den reella lönen sjönk.",
      "Räntan kan anges som nominell eller reell."
    ],
    "related": [
      "nominell"
    ]
  },
  "oväntad": {
    "opposite": "väntad",
    "description": "Väntad betyder förutsedd. Oväntad betyder att något inte förutsågs.",
    "examples": [
      "Den väntade leveransen följdes av en oväntad försening.",
      "Resultatet var oväntat trots en väntad utveckling."
    ],
    "related": [
      "väntad"
    ]
  },
  "väntad": {
    "opposite": "oväntad",
    "description": "Väntad betyder förutsedd. Oväntad betyder att något inte förutsågs.",
    "examples": [
      "Den väntade leveransen följdes av en oväntad försening.",
      "Resultatet var oväntat trots en väntad utveckling."
    ],
    "related": [
      "oväntad"
    ]
  },
  "förutsedd": {
    "opposite": "oförutsedd",
    "description": "Förutsedd betyder att något har kunnat förutsägas. Oförutsedd betyder att det kom utan förvarning.",
    "examples": [
      "Planen täcker både förutsedda och oförutsedda kostnader.",
      "Den förutsedda risken hanterades, men den oförutsedda skapade problem."
    ],
    "related": [
      "oförutsedd"
    ]
  },
  "oförutsedd": {
    "opposite": "förutsedd",
    "description": "Förutsedd betyder att något har kunnat förutsägas. Oförutsedd betyder att det kom utan förvarning.",
    "examples": [
      "Planen täcker både förutsedda och oförutsedda kostnader.",
      "Den förutsedda risken hanterades, men den oförutsedda skapade problem."
    ],
    "related": [
      "förutsedd"
    ]
  },
  "orolig": {
    "opposite": "rofylld",
    "description": "Orolig betyder bekymrad eller rastlös. Rofylld betyder lugn och fridfull.",
    "examples": [
      "Gatan var orolig på kvällen men rofylld på morgonen.",
      "Hon gick från orolig till rofylld efter beskedet."
    ],
    "related": [
      "rofylld"
    ]
  },
  "rofylld": {
    "opposite": "orolig",
    "description": "Orolig betyder bekymrad eller rastlös. Rofylld betyder lugn och fridfull.",
    "examples": [
      "Gatan var orolig på kvällen men rofylld på morgonen.",
      "Hon gick från orolig till rofylld efter beskedet."
    ],
    "related": [
      "orolig"
    ]
  },
  "avhängig": {
    "opposite": "oavhängig",
    "description": "Avhängig betyder beroende av något. Oavhängig betyder självständig och oberoende.",
    "examples": [
      "Beslutet är avhängigt vädret, men den andra planen är oavhängig.",
      "En oavhängig granskning ska inte vara avhängig ledningen."
    ],
    "related": [
      "oavhängig"
    ]
  },
  "oavhängig": {
    "opposite": "avhängig",
    "description": "Avhängig betyder beroende av något. Oavhängig betyder självständig och oberoende.",
    "examples": [
      "Beslutet är avhängigt vädret, men den andra planen är oavhängig.",
      "En oavhängig granskning ska inte vara avhängig ledningen."
    ],
    "related": [
      "avhängig"
    ]
  },
  "attrahera": {
    "opposite": "repellera",
    "description": "Attrahera betyder att dra till sig. Repellera betyder att stöta bort.",
    "examples": [
      "Olika laddningar attraherar varandra, medan lika laddningar repellerar.",
      "Magneten kan attrahera en pol och repellera den andra."
    ],
    "related": [
      "repellera"
    ]
  },
  "repellera": {
    "opposite": "attrahera",
    "description": "Attrahera betyder att dra till sig. Repellera betyder att stöta bort.",
    "examples": [
      "Olika laddningar attraherar varandra, medan lika laddningar repellerar.",
      "Magneten kan attrahera en pol och repellera den andra."
    ],
    "related": [
      "attrahera"
    ]
  },
  "oskicklighet": {
    "opposite": "skicklighet",
    "description": "Skicklighet är god förmåga. Oskicklighet är bristande förmåga.",
    "examples": [
      "Arbetet visade skicklighet, inte oskicklighet.",
      "Övning kan ersätta oskicklighet med skicklighet."
    ],
    "related": [
      "skicklighet"
    ]
  },
  "skicklighet": {
    "opposite": "oskicklighet",
    "description": "Skicklighet är god förmåga. Oskicklighet är bristande förmåga.",
    "examples": [
      "Arbetet visade skicklighet, inte oskicklighet.",
      "Övning kan ersätta oskicklighet med skicklighet."
    ],
    "related": [
      "oskicklighet"
    ]
  },
  "gäst": {
    "opposite": "värd",
    "description": "En gäst blir mottagen. En värd tar emot gästen.",
    "examples": [
      "Värden hälsade varje gäst välkommen.",
      "Hon var gäst i går och värd i dag."
    ],
    "related": [
      "värd"
    ]
  },
  "värd": {
    "opposite": "gäst",
    "description": "En gäst blir mottagen. En värd tar emot gästen.",
    "examples": [
      "Värden hälsade varje gäst välkommen.",
      "Hon var gäst i går och värd i dag."
    ],
    "related": [
      "gäst"
    ]
  },
  "nämnare": {
    "opposite": "täljare",
    "description": "Täljaren står över bråkstrecket. Nämnaren står under.",
    "examples": [
      "I bråket tre fjärdedelar är tre täljare och fyra nämnare.",
      "Dividera täljaren med nämnaren."
    ],
    "related": [
      "täljare"
    ]
  },
  "täljare": {
    "opposite": "nämnare",
    "description": "Täljaren står över bråkstrecket. Nämnaren står under.",
    "examples": [
      "I bråket tre fjärdedelar är tre täljare och fyra nämnare.",
      "Dividera täljaren med nämnaren."
    ],
    "related": [
      "nämnare"
    ]
  },
  "divergent": {
    "opposite": "konvergent",
    "description": "Divergent betyder att något går isär. Konvergent betyder att det närmar sig samma punkt eller värde.",
    "examples": [
      "Den ena talföljden är konvergent och den andra divergent.",
      "Strålarna blir divergenta efter att först ha varit konvergenta."
    ],
    "related": [
      "konvergent"
    ]
  },
  "konvergent": {
    "opposite": "divergent",
    "description": "Divergent betyder att något går isär. Konvergent betyder att det närmar sig samma punkt eller värde.",
    "examples": [
      "Den ena talföljden är konvergent och den andra divergent.",
      "Strålarna blir divergenta efter att först ha varit konvergenta."
    ],
    "related": [
      "divergent"
    ]
  },
  "allting": {
    "opposite": "ingenting",
    "description": "Allting betyder allt som finns eller avses. Ingenting betyder inte något alls.",
    "examples": [
      "Hon berättade allting och dolde ingenting.",
      "Allting var klart, men ingenting var enkelt."
    ],
    "related": [
      "ingenting"
    ]
  },
  "ingenting": {
    "opposite": "allting",
    "description": "Allting betyder allt som finns eller avses. Ingenting betyder inte något alls.",
    "examples": [
      "Hon berättade allting och dolde ingenting.",
      "Allting var klart, men ingenting var enkelt."
    ],
    "related": [
      "allting"
    ]
  },
  "inkompetens": {
    "opposite": "kompetens",
    "description": "Kompetens är tillräcklig kunskap och förmåga. Inkompetens är brist på detta.",
    "examples": [
      "Uppgiften kräver kompetens och får inte präglas av inkompetens.",
      "Utbildningen ökade kompetensen och minskade inkompetensen."
    ],
    "related": [
      "kompetens"
    ]
  },
  "kompetens": {
    "opposite": "inkompetens",
    "description": "Kompetens är tillräcklig kunskap och förmåga. Inkompetens är brist på detta.",
    "examples": [
      "Uppgiften kräver kompetens och får inte präglas av inkompetens.",
      "Utbildningen ökade kompetensen och minskade inkompetensen."
    ],
    "related": [
      "inkompetens"
    ]
  },
  "anspråksfull": {
    "opposite": "anspråkslös",
    "description": "Anspråksfull betyder krävande eller påkostad. Anspråkslös betyder enkel och blygsam.",
    "examples": [
      "Restaurangen är anspråksfull, medan kaféet är anspråkslöst.",
      "Hon valde en anspråkslös stil framför en anspråksfull."
    ],
    "related": [
      "anspråkslös"
    ]
  },
  "anspråkslös": {
    "opposite": "anspråksfull",
    "description": "Anspråksfull betyder krävande eller påkostad. Anspråkslös betyder enkel och blygsam.",
    "examples": [
      "Restaurangen är anspråksfull, medan kaféet är anspråkslöst.",
      "Hon valde en anspråkslös stil framför en anspråksfull."
    ],
    "related": [
      "anspråksfull"
    ]
  },
  "luttrad": {
    "opposite": "naiv",
    "description": "Luttrad betyder erfaren och svår att överraska. Naiv betyder godtrogen eller oerfaren.",
    "examples": [
      "Den luttrade reportern var mindre naiv än praktikanten.",
      "Han var naiv som ung men blev luttrad med tiden."
    ],
    "related": [
      "naiv"
    ]
  },
  "naiv": {
    "opposite": "luttrad",
    "description": "Luttrad betyder erfaren och svår att överraska. Naiv betyder godtrogen eller oerfaren.",
    "examples": [
      "Den luttrade reportern var mindre naiv än praktikanten.",
      "Han var naiv som ung men blev luttrad med tiden."
    ],
    "related": [
      "luttrad"
    ]
  },
  "avväpna": {
    "opposite": "beväpna",
    "description": "Avväpna betyder att ta bort vapen. Beväpna betyder att utrusta med vapen.",
    "examples": [
      "Vakterna avväpnade gruppen som tidigare hade beväpnats.",
      "Att beväpna och avväpna är motsatta handlingar."
    ],
    "related": [
      "beväpna"
    ]
  },
  "beväpna": {
    "opposite": "avväpna",
    "description": "Avväpna betyder att ta bort vapen. Beväpna betyder att utrusta med vapen.",
    "examples": [
      "Vakterna avväpnade gruppen som tidigare hade beväpnats.",
      "Att beväpna och avväpna är motsatta handlingar."
    ],
    "related": [
      "avväpna"
    ]
  },
  "underskrida": {
    "opposite": "överskrida",
    "description": "Underskrida betyder att ligga under en gräns. Överskrida betyder att gå över den.",
    "examples": [
      "Kostnaden får varken underskrida minimikravet eller överskrida budgeten.",
      "Temperaturen underskred noll och överskred senare tio grader."
    ],
    "related": [
      "överskrida"
    ]
  },
  "överskrida": {
    "opposite": "underskrida",
    "description": "Underskrida betyder att ligga under en gräns. Överskrida betyder att gå över den.",
    "examples": [
      "Kostnaden får varken underskrida minimikravet eller överskrida budgeten.",
      "Temperaturen underskred noll och överskred senare tio grader."
    ],
    "related": [
      "underskrida"
    ]
  },
  "undervärdera": {
    "opposite": "övervärdera",
    "description": "Undervärdera betyder att bedöma värdet för lågt. Övervärdera betyder att bedöma det för högt.",
    "examples": [
      "Marknaden kan undervärdera ett företag och övervärdera ett annat.",
      "Försök att varken undervärdera riskerna eller övervärdera dem."
    ],
    "related": [
      "övervärdera"
    ]
  },
  "övervärdera": {
    "opposite": "undervärdera",
    "description": "Undervärdera betyder att bedöma värdet för lågt. Övervärdera betyder att bedöma det för högt.",
    "examples": [
      "Marknaden kan undervärdera ett företag och övervärdera ett annat.",
      "Försök att varken undervärdera riskerna eller övervärdera dem."
    ],
    "related": [
      "undervärdera"
    ]
  },
  "avigsida": {
    "opposite": "rätsida",
    "description": "Avigsidan är baksidan av ett tyg eller arbete. Rätsidan är den sida som ska synas.",
    "examples": [
      "Sy från avigsidan och vänd sedan rätsidan utåt.",
      "Tygets rätsida är blankare än avigsidan."
    ],
    "related": [
      "rätsida"
    ]
  },
  "rätsida": {
    "opposite": "avigsida",
    "description": "Avigsidan är baksidan av ett tyg eller arbete. Rätsidan är den sida som ska synas.",
    "examples": [
      "Sy från avigsidan och vänd sedan rätsidan utåt.",
      "Tygets rätsida är blankare än avigsidan."
    ],
    "related": [
      "avigsida"
    ]
  },
  "kvinnonamn": {
    "opposite": "mansnamn",
    "description": "Kvinnonamn används traditionellt om kvinnor. Mansnamn används traditionellt om män.",
    "examples": [
      "Listan innehåller både kvinnonamn och mansnamn.",
      "Det första är ett kvinnonamn och det andra ett mansnamn."
    ],
    "related": [
      "mansnamn"
    ]
  },
  "mansnamn": {
    "opposite": "kvinnonamn",
    "description": "Kvinnonamn används traditionellt om kvinnor. Mansnamn används traditionellt om män.",
    "examples": [
      "Listan innehåller både kvinnonamn och mansnamn.",
      "Det första är ett kvinnonamn och det andra ett mansnamn."
    ],
    "related": [
      "kvinnonamn"
    ]
  },
  "oumbärlig": {
    "opposite": "umbärlig",
    "description": "Oumbärlig betyder nödvändig och svår att ersätta. Umbärlig betyder möjlig att vara utan.",
    "examples": [
      "Vatten är oumbärligt, medan dekorationen är umbärlig.",
      "Det oumbärliga verktyget behölls och det umbärliga togs bort."
    ],
    "related": [
      "umbärlig"
    ]
  },
  "umbärlig": {
    "opposite": "oumbärlig",
    "description": "Oumbärlig betyder nödvändig och svår att ersätta. Umbärlig betyder möjlig att vara utan.",
    "examples": [
      "Vatten är oumbärligt, medan dekorationen är umbärlig.",
      "Det oumbärliga verktyget behölls och det umbärliga togs bort."
    ],
    "related": [
      "oumbärlig"
    ]
  },
  "måttlig": {
    "opposite": "omåttlig",
    "description": "Måttlig betyder begränsad och rimlig. Omåttlig betyder överdriven eller utan måtta.",
    "examples": [
      "En måttlig ökning är lättare att hantera än en omåttlig.",
      "Hon åt måttligt, inte omåttligt."
    ],
    "related": [
      "omåttlig"
    ]
  },
  "omåttlig": {
    "opposite": "måttlig",
    "description": "Måttlig betyder begränsad och rimlig. Omåttlig betyder överdriven eller utan måtta.",
    "examples": [
      "En måttlig ökning är lättare att hantera än en omåttlig.",
      "Hon åt måttligt, inte omåttligt."
    ],
    "related": [
      "måttlig"
    ]
  },
  "billigt": {
    "opposite": "dyrt",
    "description": "Billigt betyder till lågt pris. Dyrt betyder till högt pris.",
    "examples": [
      "Det är billigt att åka buss men dyrt att ta taxi.",
      "Hon köpte billigt och sålde dyrt."
    ],
    "related": [
      "dyrt"
    ]
  },
  "dyrt": {
    "opposite": "billigt",
    "description": "Billigt betyder till lågt pris. Dyrt betyder till högt pris.",
    "examples": [
      "Det är billigt att åka buss men dyrt att ta taxi.",
      "Hon köpte billigt och sålde dyrt."
    ],
    "related": [
      "billigt"
    ]
  },
  "fallgirig": {
    "opposite": "lovgirig",
    "description": "Fallgirig beskriver en segelbåt som gärna svänger från vinden. Lovgirig beskriver en båt som gärna svänger mot vinden.",
    "examples": [
      "Båten var fallgirig före justeringen och lovgirig efter den.",
      "En fallgirig båt beter sig motsatt en lovgirig."
    ],
    "related": [
      "lovgirig"
    ]
  },
  "lovgirig": {
    "opposite": "fallgirig",
    "description": "Fallgirig beskriver en segelbåt som gärna svänger från vinden. Lovgirig beskriver en båt som gärna svänger mot vinden.",
    "examples": [
      "Båten var fallgirig före justeringen och lovgirig efter den.",
      "En fallgirig båt beter sig motsatt en lovgirig."
    ],
    "related": [
      "fallgirig"
    ]
  },
  "lovart": {
    "opposite": "lä",
    "description": "Lovart är sidan mot vinden. Lä är sidan bort från vinden.",
    "examples": [
      "Vinden träffar båten från lovart och läsidan skyddas.",
      "Vi stod i lä medan seglet vändes mot lovart."
    ],
    "related": [
      "lä"
    ]
  },
  "lä": {
    "opposite": "lovart",
    "description": "Lovart är sidan mot vinden. Lä är sidan bort från vinden.",
    "examples": [
      "Vinden träffar båten från lovart och läsidan skyddas.",
      "Vi stod i lä medan seglet vändes mot lovart."
    ],
    "related": [
      "lovart"
    ]
  },
  "monopol": {
    "opposite": "polypol",
    "description": "Monopol har en enda säljare. Polypol har många säljare och köpare.",
    "examples": [
      "Marknaden gick från monopol till polypol.",
      "Ett monopol saknar den konkurrens som finns i en polypol."
    ],
    "related": [
      "polypol"
    ]
  },
  "polypol": {
    "opposite": "monopol",
    "description": "Monopol har en enda säljare. Polypol har många säljare och köpare.",
    "examples": [
      "Marknaden gick från monopol till polypol.",
      "Ett monopol saknar den konkurrens som finns i en polypol."
    ],
    "related": [
      "monopol"
    ]
  },
  "efternamn": {
    "opposite": "förnamn",
    "description": "Förnamnet identifierar personen individuellt. Efternamnet visar vanligen familje- eller släkttillhörighet.",
    "examples": [
      "Skriv förnamn först och efternamn sist.",
      "Hennes förnamn är Sara och hennes efternamn är Lind."
    ],
    "related": [
      "förnamn"
    ]
  },
  "förnamn": {
    "opposite": "efternamn",
    "description": "Förnamnet identifierar personen individuellt. Efternamnet visar vanligen familje- eller släkttillhörighet.",
    "examples": [
      "Skriv förnamn först och efternamn sist.",
      "Hennes förnamn är Sara och hennes efternamn är Lind."
    ],
    "related": [
      "efternamn"
    ]
  },
  "bas": {
    "opposite": "syra",
    "description": "En bas tar upp vätejoner eller avger hydroxidjoner. En syra avger vätejoner.",
    "examples": [
      "Tvål är basisk, medan citronsaft innehåller syra.",
      "När bas och syra reagerar kan de neutralisera varandra."
    ],
    "related": [
      "syra"
    ]
  },
  "syra": {
    "opposite": "bas",
    "description": "En bas tar upp vätejoner eller avger hydroxidjoner. En syra avger vätejoner.",
    "examples": [
      "Tvål är basisk, medan citronsaft innehåller syra.",
      "När bas och syra reagerar kan de neutralisera varandra."
    ],
    "related": [
      "bas"
    ]
  },
  "klave": {
    "opposite": "krona",
    "description": "Krona och klave är myntets två motsatta sidor.",
    "examples": [
      "Myntet landade med krona upp i stället för klave.",
      "Vi singlade slant och valde mellan krona och klave."
    ],
    "related": [
      "krona"
    ]
  },
  "krona": {
    "opposite": "klave",
    "description": "Krona och klave är myntets två motsatta sidor.",
    "examples": [
      "Myntet landade med krona upp i stället för klave.",
      "Vi singlade slant och valde mellan krona och klave."
    ],
    "related": [
      "klave"
    ]
  },
  "eftermiddag": {
    "opposite": "förmiddag",
    "description": "Förmiddagen är tiden före middag. Eftermiddagen är tiden efter middag.",
    "examples": [
      "Mötet börjar på förmiddagen och slutar på eftermiddagen.",
      "Hon arbetar förmiddag i dag och eftermiddag i morgon."
    ],
    "related": [
      "förmiddag"
    ]
  },
  "förmiddag": {
    "opposite": "eftermiddag",
    "description": "Förmiddagen är tiden före middag. Eftermiddagen är tiden efter middag.",
    "examples": [
      "Mötet börjar på förmiddagen och slutar på eftermiddagen.",
      "Hon arbetar förmiddag i dag och eftermiddag i morgon."
    ],
    "related": [
      "eftermiddag"
    ]
  },
  "källa": {
    "opposite": "sänka",
    "description": "En källa tillför något till ett system. En sänka tar upp eller avlägsnar det.",
    "examples": [
      "Skogen kan vara en sänka för koldioxid, medan en skorsten är en källa.",
      "Modellen innehåller både en källa och en sänka."
    ],
    "related": [
      "sänka"
    ]
  },
  "sänka": {
    "opposite": "källa",
    "description": "En källa tillför något till ett system. En sänka tar upp eller avlägsnar det.",
    "examples": [
      "Skogen kan vara en sänka för koldioxid, medan en skorsten är en källa.",
      "Modellen innehåller både en källa och en sänka."
    ],
    "related": [
      "källa"
    ]
  },
  "jätteliten": {
    "opposite": "jättestor",
    "description": "Jätteliten betyder mycket liten. Jättestor betyder mycket stor.",
    "examples": [
      "Den ena lådan är jätteliten och den andra jättestor.",
      "En jättestor hund stod bredvid en jätteliten valp."
    ],
    "related": [
      "jättestor"
    ]
  },
  "jättestor": {
    "opposite": "jätteliten",
    "description": "Jätteliten betyder mycket liten. Jättestor betyder mycket stor.",
    "examples": [
      "Den ena lådan är jätteliten och den andra jättestor.",
      "En jättestor hund stod bredvid en jätteliten valp."
    ],
    "related": [
      "jätteliten"
    ]
  },
  "väster": {
    "opposite": "öst",
    "description": "Väster och öst är motsatta väderstreck.",
    "examples": [
      "Solen går upp i öst och ner i väster.",
      "De reste från öst till väster."
    ],
    "related": [
      "öst"
    ]
  },
  "öst": {
    "opposite": "väster",
    "description": "Väster och öst är motsatta väderstreck.",
    "examples": [
      "Solen går upp i öst och ner i väster.",
      "De reste från öst till väster."
    ],
    "related": [
      "väster"
    ]
  },
  "produkt": {
    "opposite": "reaktant",
    "description": "En reaktant förbrukas i en kemisk reaktion. En produkt bildas av reaktionen.",
    "examples": [
      "Reaktanten omvandlades till en ny produkt.",
      "Skriv reaktanterna före pilen och produkterna efter."
    ],
    "related": [
      "reaktant"
    ]
  },
  "reaktant": {
    "opposite": "produkt",
    "description": "En reaktant förbrukas i en kemisk reaktion. En produkt bildas av reaktionen.",
    "examples": [
      "Reaktanten omvandlades till en ny produkt.",
      "Skriv reaktanterna före pilen och produkterna efter."
    ],
    "related": [
      "produkt"
    ]
  },
  "hyperonymi": {
    "opposite": "hyponymi",
    "description": "Hyperonymi är relationen till ett överordnat begrepp. Hyponymi är relationen till ett underordnat begrepp.",
    "examples": [
      "Relationen från bil till fordon är hyponymi, medan den omvända är hyperonymi.",
      "Övningen skiljer mellan hyperonymi och hyponymi."
    ],
    "related": [
      "hyponymi"
    ]
  },
  "hyponymi": {
    "opposite": "hyperonymi",
    "description": "Hyperonymi är relationen till ett överordnat begrepp. Hyponymi är relationen till ett underordnat begrepp.",
    "examples": [
      "Relationen från bil till fordon är hyponymi, medan den omvända är hyperonymi.",
      "Övningen skiljer mellan hyperonymi och hyponymi."
    ],
    "related": [
      "hyperonymi"
    ]
  },
  "holonymi": {
    "opposite": "meronymi",
    "description": "Holonymi går från del till helhet. Meronymi går från helhet till del.",
    "examples": [
      "Relationen från hjul till bil är meronymi, och den omvända är holonymi.",
      "Ordlistan visar både holonymi och meronymi."
    ],
    "related": [
      "meronymi"
    ]
  },
  "meronymi": {
    "opposite": "holonymi",
    "description": "Holonymi går från del till helhet. Meronymi går från helhet till del.",
    "examples": [
      "Relationen från hjul till bil är meronymi, och den omvända är holonymi.",
      "Ordlistan visar både holonymi och meronymi."
    ],
    "related": [
      "holonymi"
    ]
  },
  "abducera": {
    "opposite": "adducera",
    "description": "Abducera betyder att föra en kroppsdel bort från mittlinjen. Adducera betyder att föra den mot mittlinjen.",
    "examples": [
      "Lyft armen åt sidan för att abducera den och sänk den för att adducera.",
      "Muskeln kan både abducera och adducera benet."
    ],
    "related": [
      "adducera"
    ]
  },
  "adducera": {
    "opposite": "abducera",
    "description": "Abducera betyder att föra en kroppsdel bort från mittlinjen. Adducera betyder att föra den mot mittlinjen.",
    "examples": [
      "Lyft armen åt sidan för att abducera den och sänk den för att adducera.",
      "Muskeln kan både abducera och adducera benet."
    ],
    "related": [
      "abducera"
    ]
  },
  "fira": {
    "opposite": "hala",
    "description": "Fira betyder att sänka med rep. Hala betyder att dra in eller upp med rep.",
    "examples": [
      "Besättningen halade upp seglet och firade senare ner det.",
      "Fira lasten försiktigt och hala upp den igen."
    ],
    "related": [
      "hala"
    ]
  },
  "hala": {
    "opposite": "fira",
    "description": "Fira betyder att sänka med rep. Hala betyder att dra in eller upp med rep.",
    "examples": [
      "Besättningen halade upp seglet och firade senare ner det.",
      "Fira lasten försiktigt och hala upp den igen."
    ],
    "related": [
      "fira"
    ]
  },
  "inter-": {
    "opposite": "intra-",
    "description": "Prefixet inter- betyder mellan. Prefixet intra- betyder inom.",
    "examples": [
      "Internationell gäller mellan nationer, medan intranationell gäller inom en nation.",
      "Inter- och intra- visar två olika relationer."
    ],
    "related": [
      "intra-"
    ]
  },
  "intra-": {
    "opposite": "inter-",
    "description": "Prefixet inter- betyder mellan. Prefixet intra- betyder inom.",
    "examples": [
      "Internationell gäller mellan nationer, medan intranationell gäller inom en nation.",
      "Inter- och intra- visar två olika relationer."
    ],
    "related": [
      "inter-"
    ]
  },
  "nordpolen": {
    "opposite": "sydpolen",
    "description": "Nordpolen är jordens nordligaste punkt. Sydpolen är den sydligaste.",
    "examples": [
      "En linje genom jorden kan gå från Nordpolen till Sydpolen.",
      "Nordpolen ligger i Arktis och Sydpolen i Antarktis."
    ],
    "related": [
      "sydpolen"
    ]
  },
  "sydpolen": {
    "opposite": "nordpolen",
    "description": "Nordpolen är jordens nordligaste punkt. Sydpolen är den sydligaste.",
    "examples": [
      "En linje genom jorden kan gå från Nordpolen till Sydpolen.",
      "Nordpolen ligger i Arktis och Sydpolen i Antarktis."
    ],
    "related": [
      "nordpolen"
    ]
  },
  "appellativ": {
    "opposite": "egennamn",
    "description": "Ett appellativ är ett allmänt namn. Ett egennamn betecknar en bestämd person, plats eller sak.",
    "examples": [
      "Stad är appellativ, medan Stockholm är egennamn.",
      "Skriv egennamnet med stor bokstav men inte alltid appellativet."
    ],
    "related": [
      "egennamn"
    ]
  },
  "egennamn": {
    "opposite": "appellativ",
    "description": "Ett appellativ är ett allmänt namn. Ett egennamn betecknar en bestämd person, plats eller sak.",
    "examples": [
      "Stad är appellativ, medan Stockholm är egennamn.",
      "Skriv egennamnet med stor bokstav men inte alltid appellativet."
    ],
    "related": [
      "appellativ"
    ]
  },
  "inget": {
    "opposite": "något",
    "description": "Inget betyder inte något alls. Något betyder en sak eller en viss mängd.",
    "examples": [
      "Det fanns inget i lådan i går men något i den i dag.",
      "Hon hörde något, medan jag hörde inget."
    ],
    "related": [
      "något"
    ]
  },
  "något": {
    "opposite": "inget",
    "description": "Inget betyder inte något alls. Något betyder en sak eller en viss mängd.",
    "examples": [
      "Det fanns inget i lådan i går men något i den i dag.",
      "Hon hörde något, medan jag hörde inget."
    ],
    "related": [
      "inget"
    ]
  },
  "infimum": {
    "opposite": "supremum",
    "description": "Infimum är den största undre gränsen. Supremum är den minsta övre gränsen.",
    "examples": [
      "Mängden har både ett infimum och ett supremum.",
      "Supremum begränsar uppåt och infimum nedåt."
    ],
    "related": [
      "supremum"
    ]
  },
  "supremum": {
    "opposite": "infimum",
    "description": "Infimum är den största undre gränsen. Supremum är den minsta övre gränsen.",
    "examples": [
      "Mängden har både ett infimum och ett supremum.",
      "Supremum begränsar uppåt och infimum nedåt."
    ],
    "related": [
      "infimum"
    ]
  },
  "böjningsform": {
    "opposite": "grundform",
    "description": "Grundformen är ordets uppslagsform. En böjningsform visar exempelvis tid, antal eller bestämdhet.",
    "examples": [
      "Springa är grundform och sprang en böjningsform.",
      "Sök ordet i grundform, inte bara i en böjningsform."
    ],
    "related": [
      "grundform"
    ]
  },
  "grundform": {
    "opposite": "böjningsform",
    "description": "Grundformen är ordets uppslagsform. En böjningsform visar exempelvis tid, antal eller bestämdhet.",
    "examples": [
      "Springa är grundform och sprang en böjningsform.",
      "Sök ordet i grundform, inte bara i en böjningsform."
    ],
    "related": [
      "böjningsform"
    ]
  },
  "humant": {
    "opposite": "inhumant",
    "description": "Humant betyder på ett medmänskligt sätt. Inhumant betyder på ett omänskligt eller grymt sätt.",
    "examples": [
      "Djuren behandlades humant, inte inhumant.",
      "Ett inhumant straff ersattes av ett humant."
    ],
    "related": [
      "inhumant"
    ]
  },
  "inhumant": {
    "opposite": "humant",
    "description": "Humant betyder på ett medmänskligt sätt. Inhumant betyder på ett omänskligt eller grymt sätt.",
    "examples": [
      "Djuren behandlades humant, inte inhumant.",
      "Ett inhumant straff ersattes av ett humant."
    ],
    "related": [
      "humant"
    ]
  },
  "ental": {
    "opposite": "flertal",
    "description": "Ental avser en. Flertal avser fler än en.",
    "examples": [
      "Katt står i ental och katter i flertal.",
      "Ändra meningen från ental till flertal."
    ],
    "related": [
      "flertal"
    ]
  },
  "flertal": {
    "opposite": "ental",
    "description": "Ental avser en. Flertal avser fler än en.",
    "examples": [
      "Katt står i ental och katter i flertal.",
      "Ändra meningen från ental till flertal."
    ],
    "related": [
      "ental"
    ]
  },
  "lågtrafik": {
    "opposite": "rusningstrafik",
    "description": "Lågtrafik är en period med lite trafik. Rusningstrafik är en period med mycket trafik.",
    "examples": [
      "Resan går snabbare i lågtrafik än i rusningstrafik.",
      "Priset är lägre under lågtrafik och högre under rusningstrafik."
    ],
    "related": [
      "rusningstrafik"
    ]
  },
  "rusningstrafik": {
    "opposite": "lågtrafik",
    "description": "Lågtrafik är en period med lite trafik. Rusningstrafik är en period med mycket trafik.",
    "examples": [
      "Resan går snabbare i lågtrafik än i rusningstrafik.",
      "Priset är lägre under lågtrafik och högre under rusningstrafik."
    ],
    "related": [
      "lågtrafik"
    ]
  },
  "hyresgäst": {
    "opposite": "hyresvärd",
    "description": "Hyresgästen hyr en bostad eller lokal. Hyresvärden hyr ut den.",
    "examples": [
      "Hyresgästen betalade hyran till hyresvärden.",
      "Både hyresvärd och hyresgäst skrev under avtalet."
    ],
    "related": [
      "hyresvärd"
    ]
  },
  "hyresvärd": {
    "opposite": "hyresgäst",
    "description": "Hyresgästen hyr en bostad eller lokal. Hyresvärden hyr ut den.",
    "examples": [
      "Hyresgästen betalade hyran till hyresvärden.",
      "Både hyresvärd och hyresgäst skrev under avtalet."
    ],
    "related": [
      "hyresgäst"
    ]
  },
  "efterrätt": {
    "opposite": "förrätt",
    "description": "Förrätten serveras före huvudrätten. Efterrätten serveras efter den.",
    "examples": [
      "Vi åt soppa till förrätt och glass till efterrätt.",
      "Förrätten inledde måltiden och efterrätten avslutade den."
    ],
    "related": [
      "förrätt"
    ]
  },
  "förrätt": {
    "opposite": "efterrätt",
    "description": "Förrätten serveras före huvudrätten. Efterrätten serveras efter den.",
    "examples": [
      "Vi åt soppa till förrätt och glass till efterrätt.",
      "Förrätten inledde måltiden och efterrätten avslutade den."
    ],
    "related": [
      "efterrätt"
    ]
  },
  "x-kromosom": {
    "opposite": "y-kromosom",
    "description": "X-kromosomen och Y-kromosomen är två olika könskromosomer hos människor.",
    "examples": [
      "Cellen innehöll en X-kromosom och en Y-kromosom.",
      "X-kromosomen är större än Y-kromosomen."
    ],
    "related": [
      "y-kromosom"
    ]
  },
  "y-kromosom": {
    "opposite": "x-kromosom",
    "description": "X-kromosomen och Y-kromosomen är två olika könskromosomer hos människor.",
    "examples": [
      "Cellen innehöll en X-kromosom och en Y-kromosom.",
      "X-kromosomen är större än Y-kromosomen."
    ],
    "related": [
      "x-kromosom"
    ]
  },
  "nordan": {
    "opposite": "sunnan",
    "description": "Nordan är vind från norr. Sunnan är vind från söder.",
    "examples": [
      "En kall nordan ersattes av en mild sunnan.",
      "Flaggan vände när vinden gick från nordan till sunnan."
    ],
    "related": [
      "sunnan"
    ]
  },
  "sunnan": {
    "opposite": "nordan",
    "description": "Nordan är vind från norr. Sunnan är vind från söder.",
    "examples": [
      "En kall nordan ersattes av en mild sunnan.",
      "Flaggan vände när vinden gick från nordan till sunnan."
    ],
    "related": [
      "nordan"
    ]
  },
  "västan": {
    "opposite": "östan",
    "description": "Västan är vind från väster. Östan är vind från öster.",
    "examples": [
      "Västan blåste på morgonen och östan på kvällen.",
      "Sjömannen skiljer mellan västan och östan."
    ],
    "related": [
      "östan"
    ]
  },
  "östan": {
    "opposite": "västan",
    "description": "Västan är vind från väster. Östan är vind från öster.",
    "examples": [
      "Västan blåste på morgonen och östan på kvällen.",
      "Sjömannen skiljer mellan västan och östan."
    ],
    "related": [
      "västan"
    ]
  },
  "inlänning": {
    "opposite": "utlänning",
    "description": "En inlänning hör till det egna landet. En utlänning kommer från ett annat land.",
    "examples": [
      "Regeln gäller både inlänningar och utlänningar.",
      "Han var utlänning där men inlänning i sitt hemland."
    ],
    "related": [
      "utlänning"
    ]
  },
  "utlänning": {
    "opposite": "inlänning",
    "description": "En inlänning hör till det egna landet. En utlänning kommer från ett annat land.",
    "examples": [
      "Regeln gäller både inlänningar och utlänningar.",
      "Han var utlänning där men inlänning i sitt hemland."
    ],
    "related": [
      "inlänning"
    ]
  },
  "endoterm": {
    "opposite": "exoterm",
    "description": "Endoterm betyder att värme tas upp. Exoterm betyder att värme avges.",
    "examples": [
      "Reaktionen är endoterm när den tar upp värme och exoterm när den avger värme.",
      "En endoterm process kylde omgivningen, medan en exoterm värmde den."
    ],
    "related": [
      "exoterm"
    ]
  },
  "exoterm": {
    "opposite": "endoterm",
    "description": "Endoterm betyder att värme tas upp. Exoterm betyder att värme avges.",
    "examples": [
      "Reaktionen är endoterm när den tar upp värme och exoterm när den avger värme.",
      "En endoterm process kylde omgivningen, medan en exoterm värmde den."
    ],
    "related": [
      "endoterm"
    ]
  },
  "postludium": {
    "opposite": "preludium",
    "description": "Ett preludium kommer före huvudverket. Ett postludium kommer efter.",
    "examples": [
      "Konserten började med ett preludium och slutade med ett postludium.",
      "Organisten spelade både preludium och postludium."
    ],
    "related": [
      "preludium"
    ]
  },
  "preludium": {
    "opposite": "postludium",
    "description": "Ett preludium kommer före huvudverket. Ett postludium kommer efter.",
    "examples": [
      "Konserten började med ett preludium och slutade med ett postludium.",
      "Organisten spelade både preludium och postludium."
    ],
    "related": [
      "postludium"
    ]
  },
  "arvinge": {
    "opposite": "arvlåtare",
    "description": "Arvlåtaren är personen som lämnar ett arv. Arvingen är personen som tar emot det.",
    "examples": [
      "Arvingen fick egendom efter arvlåtaren.",
      "Testamentet klargör relationen mellan arvlåtare och arvinge."
    ],
    "related": [
      "arvlåtare"
    ]
  },
  "arvlåtare": {
    "opposite": "arvinge",
    "description": "Arvlåtaren är personen som lämnar ett arv. Arvingen är personen som tar emot det.",
    "examples": [
      "Arvingen fick egendom efter arvlåtaren.",
      "Testamentet klargör relationen mellan arvlåtare och arvinge."
    ],
    "related": [
      "arvinge"
    ]
  },
  "debitor": {
    "opposite": "kreditor",
    "description": "En debitor är skyldig pengar. En kreditor har rätt att få betalt.",
    "examples": [
      "Debitor betalade skulden till kreditor.",
      "Avtalet anger både debitors och kreditors ansvar."
    ],
    "related": [
      "kreditor"
    ]
  },
  "kreditor": {
    "opposite": "debitor",
    "description": "En debitor är skyldig pengar. En kreditor har rätt att få betalt.",
    "examples": [
      "Debitor betalade skulden till kreditor.",
      "Avtalet anger både debitors och kreditors ansvar."
    ],
    "related": [
      "debitor"
    ]
  },
  "kvinnokön": {
    "opposite": "mankön",
    "description": "Kvinnokön och mankön betecknar kvinnligt respektive manligt kön.",
    "examples": [
      "Formuläret skiljde mellan kvinnokön och mankön.",
      "Arten har individer av både kvinnokön och mankön."
    ],
    "related": [
      "mankön"
    ]
  },
  "mankön": {
    "opposite": "kvinnokön",
    "description": "Kvinnokön och mankön betecknar kvinnligt respektive manligt kön.",
    "examples": [
      "Formuläret skiljde mellan kvinnokön och mankön.",
      "Arten har individer av både kvinnokön och mankön."
    ],
    "related": [
      "kvinnokön"
    ]
  },
  "högerled": {
    "opposite": "vänsterled",
    "description": "Vänsterledet står till vänster om ett likhetstecken. Högerledet står till höger.",
    "examples": [
      "Förenkla vänsterledet och högerledet var för sig.",
      "Efter beräkningen är högerled och vänsterled lika."
    ],
    "related": [
      "vänsterled"
    ]
  },
  "vänsterled": {
    "opposite": "högerled",
    "description": "Vänsterledet står till vänster om ett likhetstecken. Högerledet står till höger.",
    "examples": [
      "Förenkla vänsterledet och högerledet var för sig.",
      "Efter beräkningen är högerled och vänsterled lika."
    ],
    "related": [
      "högerled"
    ]
  },
  "monogen": {
    "opposite": "polygen",
    "description": "Monogen betyder styrd av en gen. Polygen betyder styrd av flera gener.",
    "examples": [
      "Egenskapen är monogen, medan längd ofta är polygen.",
      "En polygen sjukdom är mer komplex än en monogen."
    ],
    "related": [
      "polygen"
    ]
  },
  "polygen": {
    "opposite": "monogen",
    "description": "Monogen betyder styrd av en gen. Polygen betyder styrd av flera gener.",
    "examples": [
      "Egenskapen är monogen, medan längd ofta är polygen.",
      "En polygen sjukdom är mer komplex än en monogen."
    ],
    "related": [
      "monogen"
    ]
  },
  "högmosse": {
    "opposite": "lågmosse",
    "description": "En högmosse får främst vatten från nederbörd. En lågmosse påverkas även av grund- eller ytvatten.",
    "examples": [
      "Högmossen ligger upphöjd, medan lågmossen får vatten från omgivningen.",
      "Området innehåller både högmosse och lågmosse."
    ],
    "related": [
      "lågmosse"
    ]
  },
  "lågmosse": {
    "opposite": "högmosse",
    "description": "En högmosse får främst vatten från nederbörd. En lågmosse påverkas även av grund- eller ytvatten.",
    "examples": [
      "Högmossen ligger upphöjd, medan lågmossen får vatten från omgivningen.",
      "Området innehåller både högmosse och lågmosse."
    ],
    "related": [
      "högmosse"
    ]
  },
  "ingenstädes": {
    "opposite": "någonstädes",
    "description": "Ingenstädes betyder inte på någon plats. Någonstädes betyder på någon plats.",
    "examples": [
      "Nyckeln fanns ingenstädes här men måste ligga någonstädes.",
      "Han sökte någonstädes där ingenstädes verkade självklart."
    ],
    "related": [
      "någonstädes"
    ]
  },
  "någonstädes": {
    "opposite": "ingenstädes",
    "description": "Ingenstädes betyder inte på någon plats. Någonstädes betyder på någon plats.",
    "examples": [
      "Nyckeln fanns ingenstädes här men måste ligga någonstädes.",
      "Han sökte någonstädes där ingenstädes verkade självklart."
    ],
    "related": [
      "ingenstädes"
    ]
  },
  "giltigförklara": {
    "opposite": "ogiltigförklara",
    "description": "Giltigförklara betyder att förklara något giltigt. Ogiltigförklara betyder att upphäva dess giltighet.",
    "examples": [
      "Domstolen kan giltigförklara avtalet eller ogiltigförklara det.",
      "Beslutet ogiltigförklarades efter att först ha giltigförklarats."
    ],
    "related": [
      "ogiltigförklara"
    ]
  },
  "ogiltigförklara": {
    "opposite": "giltigförklara",
    "description": "Giltigförklara betyder att förklara något giltigt. Ogiltigförklara betyder att upphäva dess giltighet.",
    "examples": [
      "Domstolen kan giltigförklara avtalet eller ogiltigförklara det.",
      "Beslutet ogiltigförklarades efter att först ha giltigförklarats."
    ],
    "related": [
      "giltigförklara"
    ]
  },
  "fördragsam": {
    "opposite": "ofördragsam",
    "description": "Fördragsam betyder tolerant och tålmodig. Ofördragsam betyder intolerant.",
    "examples": [
      "Hon var fördragsam i diskussionen, medan han var ofördragsam.",
      "Ett fördragsamt klimat ersatte det ofördragsamma."
    ],
    "related": [
      "ofördragsam"
    ]
  },
  "ofördragsam": {
    "opposite": "fördragsam",
    "description": "Fördragsam betyder tolerant och tålmodig. Ofördragsam betyder intolerant.",
    "examples": [
      "Hon var fördragsam i diskussionen, medan han var ofördragsam.",
      "Ett fördragsamt klimat ersatte det ofördragsamma."
    ],
    "related": [
      "fördragsam"
    ]
  },
  "eftersats": {
    "opposite": "försats",
    "description": "Försatsen kommer först i en konstruktion eller mening. Eftersatsen kommer efter.",
    "examples": [
      "Villkoret står i försatsen och följden i eftersatsen.",
      "Läs både försats och eftersats."
    ],
    "related": [
      "försats"
    ]
  },
  "försats": {
    "opposite": "eftersats",
    "description": "Försatsen kommer först i en konstruktion eller mening. Eftersatsen kommer efter.",
    "examples": [
      "Villkoret står i försatsen och följden i eftersatsen.",
      "Läs både försats och eftersats."
    ],
    "related": [
      "eftersats"
    ]
  },
  "apokryfisk": {
    "opposite": "kanonisk",
    "description": "Kanonisk betyder erkänd som del av en officiell kanon. Apokryfisk betyder att texten står utanför den.",
    "examples": [
      "Den kanoniska texten jämfördes med en apokryfisk.",
      "Berättelsen är apokryfisk och inte kanonisk."
    ],
    "related": [
      "kanonisk"
    ]
  },
  "kanonisk": {
    "opposite": "apokryfisk",
    "description": "Kanonisk betyder erkänd som del av en officiell kanon. Apokryfisk betyder att texten står utanför den.",
    "examples": [
      "Den kanoniska texten jämfördes med en apokryfisk.",
      "Berättelsen är apokryfisk och inte kanonisk."
    ],
    "related": [
      "apokryfisk"
    ]
  },
  "defragmentera": {
    "opposite": "fragmentera",
    "description": "Fragmentera betyder att dela upp i spridda delar. Defragmentera betyder att ordna delarna mer sammanhängande.",
    "examples": [
      "Filer kan fragmenteras och senare defragmenteras.",
      "Programmet defragmenterar det som tidigare fragmenterats."
    ],
    "related": [
      "fragmentera"
    ]
  },
  "fragmentera": {
    "opposite": "defragmentera",
    "description": "Fragmentera betyder att dela upp i spridda delar. Defragmentera betyder att ordna delarna mer sammanhängande.",
    "examples": [
      "Filer kan fragmenteras och senare defragmenteras.",
      "Programmet defragmenterar det som tidigare fragmenterats."
    ],
    "related": [
      "defragmentera"
    ]
  },
  "bakdel": {
    "opposite": "framdel",
    "description": "Bakdelen är den bakre delen. Framdelen är den främre.",
    "examples": [
      "Skadan satt på bilens framdel, inte på bakdelen.",
      "Montera framdelen före bakdelen."
    ],
    "related": [
      "framdel"
    ]
  },
  "framdel": {
    "opposite": "bakdel",
    "description": "Bakdelen är den bakre delen. Framdelen är den främre.",
    "examples": [
      "Skadan satt på bilens framdel, inte på bakdelen.",
      "Montera framdelen före bakdelen."
    ],
    "related": [
      "bakdel"
    ]
  },
  "anständig": {
    "opposite": "anstötlig",
    "description": "Anständig betyder passande och respektabel. Anstötlig betyder stötande eller olämplig.",
    "examples": [
      "Språket var anständigt, men bilden ansågs anstötlig.",
      "Byt det anstötliga uttrycket mot ett anständigt."
    ],
    "related": [
      "anstötlig"
    ]
  },
  "anstötlig": {
    "opposite": "anständig",
    "description": "Anständig betyder passande och respektabel. Anstötlig betyder stötande eller olämplig.",
    "examples": [
      "Språket var anständigt, men bilden ansågs anstötlig.",
      "Byt det anstötliga uttrycket mot ett anständigt."
    ],
    "related": [
      "anständig"
    ]
  },
  "läglig": {
    "opposite": "oläglig",
    "description": "Läglig betyder passande i tid. Oläglig betyder att tidpunkten är dålig.",
    "examples": [
      "Besöket kom vid en läglig tid, men samtalet var olägligt.",
      "En oläglig paus ersattes av en läglig."
    ],
    "related": [
      "oläglig"
    ]
  },
  "oläglig": {
    "opposite": "läglig",
    "description": "Läglig betyder passande i tid. Oläglig betyder att tidpunkten är dålig.",
    "examples": [
      "Besöket kom vid en läglig tid, men samtalet var olägligt.",
      "En oläglig paus ersattes av en läglig."
    ],
    "related": [
      "läglig"
    ]
  },
  "makrokosmos": {
    "opposite": "mikrokosmos",
    "description": "Makrokosmos är världen eller helheten i stor skala. Mikrokosmos är en liten värld som speglar helheten.",
    "examples": [
      "Universum beskrivs som makrokosmos och människan som mikrokosmos.",
      "Romanens by är ett mikrokosmos av ett större makrokosmos."
    ],
    "related": [
      "mikrokosmos"
    ]
  },
  "mikrokosmos": {
    "opposite": "makrokosmos",
    "description": "Makrokosmos är världen eller helheten i stor skala. Mikrokosmos är en liten värld som speglar helheten.",
    "examples": [
      "Universum beskrivs som makrokosmos och människan som mikrokosmos.",
      "Romanens by är ett mikrokosmos av ett större makrokosmos."
    ],
    "related": [
      "makrokosmos"
    ]
  },
  "exon": {
    "opposite": "intron",
    "description": "Ett exon finns kvar i moget RNA. Ett intron klipps normalt bort.",
    "examples": [
      "Genen innehåller både exon och intron.",
      "Intronerna togs bort och exonerna fogades samman."
    ],
    "related": [
      "intron"
    ]
  },
  "intron": {
    "opposite": "exon",
    "description": "Ett exon finns kvar i moget RNA. Ett intron klipps normalt bort.",
    "examples": [
      "Genen innehåller både exon och intron.",
      "Intronerna togs bort och exonerna fogades samman."
    ],
    "related": [
      "exon"
    ]
  },
  "avslutningsvis": {
    "opposite": "inledningsvis",
    "description": "Inledningsvis betyder i början. Avslutningsvis betyder i slutet.",
    "examples": [
      "Inledningsvis beskrev hon problemet och avslutningsvis lösningen.",
      "Han var tveksam inledningsvis men positiv avslutningsvis."
    ],
    "related": [
      "inledningsvis"
    ]
  },
  "inledningsvis": {
    "opposite": "avslutningsvis",
    "description": "Inledningsvis betyder i början. Avslutningsvis betyder i slutet.",
    "examples": [
      "Inledningsvis beskrev hon problemet och avslutningsvis lösningen.",
      "Han var tveksam inledningsvis men positiv avslutningsvis."
    ],
    "related": [
      "avslutningsvis"
    ]
  },
  "fruktsamhet": {
    "opposite": "ofruktsamhet",
    "description": "Fruktsamhet är förmåga att få avkomma eller ge skörd. Ofruktsamhet är avsaknad av denna förmåga.",
    "examples": [
      "Behandlingen förbättrade fruktsamheten och minskade ofruktsamheten.",
      "Jorden gick från ofruktsamhet till större fruktsamhet."
    ],
    "related": [
      "ofruktsamhet"
    ]
  },
  "ofruktsamhet": {
    "opposite": "fruktsamhet",
    "description": "Fruktsamhet är förmåga att få avkomma eller ge skörd. Ofruktsamhet är avsaknad av denna förmåga.",
    "examples": [
      "Behandlingen förbättrade fruktsamheten och minskade ofruktsamheten.",
      "Jorden gick från ofruktsamhet till större fruktsamhet."
    ],
    "related": [
      "fruktsamhet"
    ]
  },
  "muntligt": {
    "opposite": "skriftligt",
    "description": "Muntligt betyder med tal. Skriftligt betyder i text.",
    "examples": [
      "Beskedet gavs muntligt och bekräftades skriftligt.",
      "Du kan svara muntligt eller skriftligt."
    ],
    "related": [
      "skriftligt"
    ]
  },
  "skriftligt": {
    "opposite": "muntligt",
    "description": "Muntligt betyder med tal. Skriftligt betyder i text.",
    "examples": [
      "Beskedet gavs muntligt och bekräftades skriftligt.",
      "Du kan svara muntligt eller skriftligt."
    ],
    "related": [
      "muntligt"
    ]
  },
  "inandas": {
    "opposite": "utandas",
    "description": "Inandas betyder att dra in luft. Utandas betyder att släppa ut luft.",
    "examples": [
      "Vi inandas syre och utandas koldioxid.",
      "Inandas långsamt och utandas lugnt."
    ],
    "related": [
      "utandas"
    ]
  },
  "utandas": {
    "opposite": "inandas",
    "description": "Inandas betyder att dra in luft. Utandas betyder att släppa ut luft.",
    "examples": [
      "Vi inandas syre och utandas koldioxid.",
      "Inandas långsamt och utandas lugnt."
    ],
    "related": [
      "inandas"
    ]
  },
  "inkongruent": {
    "opposite": "kongruent",
    "description": "Kongruent betyder överensstämmande. Inkongruent betyder att överensstämmelse saknas.",
    "examples": [
      "Delarna är kongruenta, men den sista är inkongruent.",
      "Gör det inkongruenta mönstret kongruent."
    ],
    "related": [
      "kongruent"
    ]
  },
  "kongruent": {
    "opposite": "inkongruent",
    "description": "Kongruent betyder överensstämmande. Inkongruent betyder att överensstämmelse saknas.",
    "examples": [
      "Delarna är kongruenta, men den sista är inkongruent.",
      "Gör det inkongruenta mönstret kongruent."
    ],
    "related": [
      "inkongruent"
    ]
  },
  "halal": {
    "opposite": "haram",
    "description": "Halal betyder tillåtet enligt islam. Haram betyder förbjudet.",
    "examples": [
      "Maten är halal och inte haram.",
      "Reglerna skiljer mellan halal och haram."
    ],
    "related": [
      "haram"
    ]
  },
  "haram": {
    "opposite": "halal",
    "description": "Halal betyder tillåtet enligt islam. Haram betyder förbjudet.",
    "examples": [
      "Maten är halal och inte haram.",
      "Reglerna skiljer mellan halal och haram."
    ],
    "related": [
      "halal"
    ]
  },
  "geocentrisk": {
    "opposite": "heliocentrisk",
    "description": "En geocentrisk modell har jorden i centrum. En heliocentrisk modell har solen i centrum.",
    "examples": [
      "Den geocentriska modellen ersattes av en heliocentrisk.",
      "Kursen jämför geocentrisk och heliocentrisk världsbild."
    ],
    "related": [
      "heliocentrisk"
    ]
  },
  "heliocentrisk": {
    "opposite": "geocentrisk",
    "description": "En geocentrisk modell har jorden i centrum. En heliocentrisk modell har solen i centrum.",
    "examples": [
      "Den geocentriska modellen ersattes av en heliocentrisk.",
      "Kursen jämför geocentrisk och heliocentrisk världsbild."
    ],
    "related": [
      "geocentrisk"
    ]
  },
  "input": {
    "opposite": "output",
    "description": "Input är information som matas in. Output är information som kommer ut.",
    "examples": [
      "Programmet omvandlar input till output.",
      "Kontrollera input innan du granskar output."
    ],
    "related": [
      "output"
    ]
  },
  "output": {
    "opposite": "input",
    "description": "Input är information som matas in. Output är information som kommer ut.",
    "examples": [
      "Programmet omvandlar input till output.",
      "Kontrollera input innan du granskar output."
    ],
    "related": [
      "input"
    ]
  },
  "illojalitet": {
    "opposite": "lojalitet",
    "description": "Lojalitet betyder trofasthet. Illojalitet betyder brist på trofasthet.",
    "examples": [
      "Hon visade lojalitet, inte illojalitet.",
      "Illojaliteten skadade det tidigare förtroendet och lojaliteten."
    ],
    "related": [
      "lojalitet"
    ]
  },
  "lojalitet": {
    "opposite": "illojalitet",
    "description": "Lojalitet betyder trofasthet. Illojalitet betyder brist på trofasthet.",
    "examples": [
      "Hon visade lojalitet, inte illojalitet.",
      "Illojaliteten skadade det tidigare förtroendet och lojaliteten."
    ],
    "related": [
      "illojalitet"
    ]
  },
  "gammalmodig": {
    "opposite": "nymodig",
    "description": "Gammalmodig betyder omodern. Nymodig betyder modern eller ny i stilen.",
    "examples": [
      "Köket var gammalmodigt men blev nymodigt efter renoveringen.",
      "Hon valde en nymodig lösning framför en gammalmodig."
    ],
    "related": [
      "nymodig"
    ]
  },
  "nymodig": {
    "opposite": "gammalmodig",
    "description": "Gammalmodig betyder omodern. Nymodig betyder modern eller ny i stilen.",
    "examples": [
      "Köket var gammalmodigt men blev nymodigt efter renoveringen.",
      "Hon valde en nymodig lösning framför en gammalmodig."
    ],
    "related": [
      "gammalmodig"
    ]
  },
  "lövfällande": {
    "opposite": "städsegrön",
    "description": "Lövfällande växter tappar sina blad säsongsvis. Städsegröna behåller gröna blad året runt.",
    "examples": [
      "Björken är lövfällande och granen städsegrön.",
      "Trädgården har både lövfällande och städsegröna växter."
    ],
    "related": [
      "städsegrön"
    ]
  },
  "städsegrön": {
    "opposite": "lövfällande",
    "description": "Lövfällande växter tappar sina blad säsongsvis. Städsegröna behåller gröna blad året runt.",
    "examples": [
      "Björken är lövfällande och granen städsegrön.",
      "Trädgården har både lövfällande och städsegröna växter."
    ],
    "related": [
      "lövfällande"
    ]
  },
  "ljushårig": {
    "opposite": "mörkhårig",
    "description": "Ljushårig betyder med ljust hår. Mörkhårig betyder med mörkt hår.",
    "examples": [
      "Det ljushåriga barnet stod bredvid det mörkhåriga.",
      "Hon var ljushårig som liten men är nu mörkhårig."
    ],
    "related": [
      "mörkhårig"
    ]
  },
  "mörkhårig": {
    "opposite": "ljushårig",
    "description": "Ljushårig betyder med ljust hår. Mörkhårig betyder med mörkt hår.",
    "examples": [
      "Det ljushåriga barnet stod bredvid det mörkhåriga.",
      "Hon var ljushårig som liten men är nu mörkhårig."
    ],
    "related": [
      "ljushårig"
    ]
  },
  "matleda": {
    "opposite": "matlust",
    "description": "Matlust är vilja att äta. Matleda är motvilja mot mat.",
    "examples": [
      "Sjukdomen gav matleda, men senare återkom matlusten.",
      "God matlust ersatte den tidigare matledan."
    ],
    "related": [
      "matlust"
    ]
  },
  "matlust": {
    "opposite": "matleda",
    "description": "Matlust är vilja att äta. Matleda är motvilja mot mat.",
    "examples": [
      "Sjukdomen gav matleda, men senare återkom matlusten.",
      "God matlust ersatte den tidigare matledan."
    ],
    "related": [
      "matleda"
    ]
  },
  "oöversättlig": {
    "opposite": "översättlig",
    "description": "Översättlig betyder möjlig att översätta. Oöversättlig betyder att en fullgod översättning inte är möjlig.",
    "examples": [
      "Uttrycket är översättligt, men ordleken nästan oöversättlig.",
      "En oöversättlig fras kräver mer förklaring än en översättlig."
    ],
    "related": [
      "översättlig"
    ]
  },
  "översättlig": {
    "opposite": "oöversättlig",
    "description": "Översättlig betyder möjlig att översätta. Oöversättlig betyder att en fullgod översättning inte är möjlig.",
    "examples": [
      "Uttrycket är översättligt, men ordleken nästan oöversättlig.",
      "En oöversättlig fras kräver mer förklaring än en översättlig."
    ],
    "related": [
      "oöversättlig"
    ]
  },
  "underviktig": {
    "opposite": "överviktig",
    "description": "Underviktig betyder under ett hälsosamt viktintervall. Överviktig betyder över intervallet.",
    "examples": [
      "Bedömningen visade att en var underviktig och en överviktig.",
      "Varken underviktiga eller överviktiga personer bör bedömas utan helhetssyn."
    ],
    "related": [
      "överviktig"
    ]
  },
  "överviktig": {
    "opposite": "underviktig",
    "description": "Underviktig betyder under ett hälsosamt viktintervall. Överviktig betyder över intervallet.",
    "examples": [
      "Bedömningen visade att en var underviktig och en överviktig.",
      "Varken underviktiga eller överviktiga personer bör bedömas utan helhetssyn."
    ],
    "related": [
      "underviktig"
    ]
  },
  "innansida": {
    "opposite": "yttersida",
    "description": "Innansidan vetter inåt. Yttersidan vetter utåt.",
    "examples": [
      "Färgen skiljer sig mellan innansidan och yttersidan.",
      "Tvätta yttersidan och torka innansidan."
    ],
    "related": [
      "yttersida"
    ]
  },
  "yttersida": {
    "opposite": "innansida",
    "description": "Innansidan vetter inåt. Yttersidan vetter utåt.",
    "examples": [
      "Färgen skiljer sig mellan innansidan och yttersidan.",
      "Tvätta yttersidan och torka innansidan."
    ],
    "related": [
      "innansida"
    ]
  },
  "senarelägga": {
    "opposite": "tidigarelägga",
    "description": "Senarelägga betyder flytta till en senare tid. Tidigarelägga betyder flytta till en tidigare tid.",
    "examples": [
      "Vi måste senarelägga mötet men tidigarelägga leveransen.",
      "De tidigarelagde starten och senarelagde slutet."
    ],
    "related": [
      "tidigarelägga"
    ]
  },
  "tidigarelägga": {
    "opposite": "senarelägga",
    "description": "Senarelägga betyder flytta till en senare tid. Tidigarelägga betyder flytta till en tidigare tid.",
    "examples": [
      "Vi måste senarelägga mötet men tidigarelägga leveransen.",
      "De tidigarelagde starten och senarelagde slutet."
    ],
    "related": [
      "senarelägga"
    ]
  },
  "anterograd": {
    "opposite": "retrograd",
    "description": "Anterograd betyder framåtriktad. Retrograd betyder bakåtriktad.",
    "examples": [
      "Rörelsen var anterograd först och retrograd sedan.",
      "Planeten tycktes gå från anterograd till retrograd rörelse."
    ],
    "related": [
      "retrograd"
    ]
  },
  "retrograd": {
    "opposite": "anterograd",
    "description": "Anterograd betyder framåtriktad. Retrograd betyder bakåtriktad.",
    "examples": [
      "Rörelsen var anterograd först och retrograd sedan.",
      "Planeten tycktes gå från anterograd till retrograd rörelse."
    ],
    "related": [
      "anterograd"
    ]
  },
  "bakpart": {
    "opposite": "frampart",
    "description": "Bakparten är den bakre delen. Framparten är den främre.",
    "examples": [
      "Hästens frampart var högre än bakparten.",
      "Skadan satt i bakparten, inte i framparten."
    ],
    "related": [
      "frampart"
    ]
  },
  "frampart": {
    "opposite": "bakpart",
    "description": "Bakparten är den bakre delen. Framparten är den främre.",
    "examples": [
      "Hästens frampart var högre än bakparten.",
      "Skadan satt i bakparten, inte i framparten."
    ],
    "related": [
      "bakpart"
    ]
  },
  "avkriminalisera": {
    "opposite": "kriminalisera",
    "description": "Kriminalisera betyder göra straffbart. Avkriminalisera betyder ta bort straffansvaret.",
    "examples": [
      "Lagen kan kriminalisera handlingen eller avkriminalisera den.",
      "Det som tidigare kriminaliserats blev senare avkriminaliserat."
    ],
    "related": [
      "kriminalisera"
    ]
  },
  "kriminalisera": {
    "opposite": "avkriminalisera",
    "description": "Kriminalisera betyder göra straffbart. Avkriminalisera betyder ta bort straffansvaret.",
    "examples": [
      "Lagen kan kriminalisera handlingen eller avkriminalisera den.",
      "Det som tidigare kriminaliserats blev senare avkriminaliserat."
    ],
    "related": [
      "avkriminalisera"
    ]
  },
  "illikviditet": {
    "opposite": "likviditet",
    "description": "Likviditet är förmåga att betala på kort sikt. Illikviditet är brist på tillgängliga betalningsmedel.",
    "examples": [
      "Företaget gick från illikviditet till god likviditet.",
      "Hög likviditet minskar risken för illikviditet."
    ],
    "related": [
      "likviditet"
    ]
  },
  "likviditet": {
    "opposite": "illikviditet",
    "description": "Likviditet är förmåga att betala på kort sikt. Illikviditet är brist på tillgängliga betalningsmedel.",
    "examples": [
      "Företaget gick från illikviditet till god likviditet.",
      "Hög likviditet minskar risken för illikviditet."
    ],
    "related": [
      "illikviditet"
    ]
  },
  "orättmätig": {
    "opposite": "rättmätig",
    "description": "Rättmätig betyder berättigad. Orättmätig betyder utan laglig eller moralisk rätt.",
    "examples": [
      "Den rättmätiga ägaren återfick det orättmätigt tagna föremålet.",
      "Kravet var rättmätigt, inte orättmätigt."
    ],
    "related": [
      "rättmätig"
    ]
  },
  "rättmätig": {
    "opposite": "orättmätig",
    "description": "Rättmätig betyder berättigad. Orättmätig betyder utan laglig eller moralisk rätt.",
    "examples": [
      "Den rättmätiga ägaren återfick det orättmätigt tagna föremålet.",
      "Kravet var rättmätigt, inte orättmätigt."
    ],
    "related": [
      "orättmätig"
    ]
  },
  "högklackad": {
    "opposite": "lågklackad",
    "description": "Högklackad betyder med hög klack. Lågklackad betyder med låg klack.",
    "examples": [
      "Hon bytte högklackade skor mot lågklackade.",
      "De lågklackade skorna var bekvämare än de högklackade."
    ],
    "related": [
      "lågklackad"
    ]
  },
  "lågklackad": {
    "opposite": "högklackad",
    "description": "Högklackad betyder med hög klack. Lågklackad betyder med låg klack.",
    "examples": [
      "Hon bytte högklackade skor mot lågklackade.",
      "De lågklackade skorna var bekvämare än de högklackade."
    ],
    "related": [
      "högklackad"
    ]
  },
  "högland": {
    "opposite": "lågland",
    "description": "Högland ligger högt över havet. Lågland ligger lågt.",
    "examples": [
      "Floden rinner från höglandet till låglandet.",
      "Klimatet skiljer sig mellan högland och lågland."
    ],
    "related": [
      "lågland"
    ]
  },
  "lågland": {
    "opposite": "högland",
    "description": "Högland ligger högt över havet. Lågland ligger lågt.",
    "examples": [
      "Floden rinner från höglandet till låglandet.",
      "Klimatet skiljer sig mellan högland och lågland."
    ],
    "related": [
      "högland"
    ]
  },
  "saltvattensfisk": {
    "opposite": "sötvattensfisk",
    "description": "Saltvattensfisk lever i hav. Sötvattensfisk lever i sjöar och vattendrag.",
    "examples": [
      "Torsk är saltvattensfisk och gädda sötvattensfisk.",
      "Akvariet skiljer mellan saltvattensfisk och sötvattensfisk."
    ],
    "related": [
      "sötvattensfisk"
    ]
  },
  "sötvattensfisk": {
    "opposite": "saltvattensfisk",
    "description": "Saltvattensfisk lever i hav. Sötvattensfisk lever i sjöar och vattendrag.",
    "examples": [
      "Torsk är saltvattensfisk och gädda sötvattensfisk.",
      "Akvariet skiljer mellan saltvattensfisk och sötvattensfisk."
    ],
    "related": [
      "saltvattensfisk"
    ]
  },
  "blåförskjutning": {
    "opposite": "rödförskjutning",
    "description": "Blåförskjutning visar rörelse mot betraktaren. Rödförskjutning visar rörelse bort.",
    "examples": [
      "Spektrumet visade blåförskjutning i stället för rödförskjutning.",
      "Astronomer mäter både rödförskjutning och blåförskjutning."
    ],
    "related": [
      "rödförskjutning"
    ]
  },
  "rödförskjutning": {
    "opposite": "blåförskjutning",
    "description": "Blåförskjutning visar rörelse mot betraktaren. Rödförskjutning visar rörelse bort.",
    "examples": [
      "Spektrumet visade blåförskjutning i stället för rödförskjutning.",
      "Astronomer mäter både rödförskjutning och blåförskjutning."
    ],
    "related": [
      "blåförskjutning"
    ]
  },
  "sommardäck": {
    "opposite": "vinterdäck",
    "description": "Sommardäck är anpassade för varmt väglag. Vinterdäck är anpassade för kyla och vinterväg.",
    "examples": [
      "Byt vinterdäck mot sommardäck på våren.",
      "Sommardäck och vinterdäck används under olika årstider."
    ],
    "related": [
      "vinterdäck"
    ]
  },
  "vinterdäck": {
    "opposite": "sommardäck",
    "description": "Sommardäck är anpassade för varmt väglag. Vinterdäck är anpassade för kyla och vinterväg.",
    "examples": [
      "Byt vinterdäck mot sommardäck på våren.",
      "Sommardäck och vinterdäck används under olika årstider."
    ],
    "related": [
      "sommardäck"
    ]
  },
  "lättsåld": {
    "opposite": "svårsåld",
    "description": "Lättsåld betyder enkel att sälja. Svårsåld betyder svår att hitta köpare till.",
    "examples": [
      "Den lilla bilen var lättsåld, men den skadade varan svårsåld.",
      "Efter reparationen blev den svårsålda produkten lättsåld."
    ],
    "related": [
      "svårsåld"
    ]
  },
  "svårsåld": {
    "opposite": "lättsåld",
    "description": "Lättsåld betyder enkel att sälja. Svårsåld betyder svår att hitta köpare till.",
    "examples": [
      "Den lilla bilen var lättsåld, men den skadade varan svårsåld.",
      "Efter reparationen blev den svårsålda produkten lättsåld."
    ],
    "related": [
      "lättsåld"
    ]
  },
  "stilfull": {
    "opposite": "stillös",
    "description": "Stilfull betyder smakfullt utformad. Stillös betyder utan tydlig eller god stil.",
    "examples": [
      "Rummet blev stilfullt efter att ha känts stillöst.",
      "En stilfull detalj ersatte den stillösa."
    ],
    "related": [
      "stillös"
    ]
  },
  "stillös": {
    "opposite": "stilfull",
    "description": "Stilfull betyder smakfullt utformad. Stillös betyder utan tydlig eller god stil.",
    "examples": [
      "Rummet blev stilfullt efter att ha känts stillöst.",
      "En stilfull detalj ersatte den stillösa."
    ],
    "related": [
      "stilfull"
    ]
  },
  "opansrad": {
    "opposite": "pansrad",
    "description": "Pansrad betyder skyddad med pansar. Opansrad betyder utan pansar.",
    "examples": [
      "Det pansrade fordonet tålde mer än det opansrade.",
      "Kolonnen hade både pansrade och opansrade fordon."
    ],
    "related": [
      "pansrad"
    ]
  },
  "pansrad": {
    "opposite": "opansrad",
    "description": "Pansrad betyder skyddad med pansar. Opansrad betyder utan pansar.",
    "examples": [
      "Det pansrade fordonet tålde mer än det opansrade.",
      "Kolonnen hade både pansrade och opansrade fordon."
    ],
    "related": [
      "opansrad"
    ]
  },
  "hejdad": {
    "opposite": "ohejdad",
    "description": "Hejdad betyder stoppad eller begränsad. Ohejdad betyder utan begränsning.",
    "examples": [
      "Den ohejdade utvecklingen blev till slut hejdad.",
      "Elden spreds ohejdat innan den hejdades."
    ],
    "related": [
      "ohejdad"
    ]
  },
  "ohejdad": {
    "opposite": "hejdad",
    "description": "Hejdad betyder stoppad eller begränsad. Ohejdad betyder utan begränsning.",
    "examples": [
      "Den ohejdade utvecklingen blev till slut hejdad.",
      "Elden spreds ohejdat innan den hejdades."
    ],
    "related": [
      "hejdad"
    ]
  },
  "högersida": {
    "opposite": "vänstersida",
    "description": "Högersidan ligger åt höger. Vänstersidan ligger åt vänster.",
    "examples": [
      "Texten står på högersidan och bilden på vänstersidan.",
      "Jämför vänstersida med högersida."
    ],
    "related": [
      "vänstersida"
    ]
  },
  "vänstersida": {
    "opposite": "högersida",
    "description": "Högersidan ligger åt höger. Vänstersidan ligger åt vänster.",
    "examples": [
      "Texten står på högersidan och bilden på vänstersidan.",
      "Jämför vänstersida med högersida."
    ],
    "related": [
      "högersida"
    ]
  },
  "undersida": {
    "opposite": "översida",
    "description": "Undersidan vetter nedåt. Översidan vetter uppåt.",
    "examples": [
      "Bordets översida är slät och undersidan grov.",
      "Märk både undersida och översida."
    ],
    "related": [
      "översida"
    ]
  },
  "översida": {
    "opposite": "undersida",
    "description": "Undersidan vetter nedåt. Översidan vetter uppåt.",
    "examples": [
      "Bordets översida är slät och undersidan grov.",
      "Märk både undersida och översida."
    ],
    "related": [
      "undersida"
    ]
  },
  "skuggsida": {
    "opposite": "solsida",
    "description": "Skuggsidan får mindre sol. Solsidan får mer sol.",
    "examples": [
      "Snön låg kvar på skuggsidan men smälte på solsidan.",
      "Växterna trivs bättre på solsidan än på skuggsidan."
    ],
    "related": [
      "solsida"
    ]
  },
  "solsida": {
    "opposite": "skuggsida",
    "description": "Skuggsidan får mindre sol. Solsidan får mer sol.",
    "examples": [
      "Snön låg kvar på skuggsidan men smälte på solsidan.",
      "Växterna trivs bättre på solsidan än på skuggsidan."
    ],
    "related": [
      "skuggsida"
    ]
  },
  "sommarsolstånd": {
    "opposite": "vintersolstånd",
    "description": "Sommarsolståndet ger årets längsta dag. Vintersolståndet ger årets kortaste.",
    "examples": [
      "Dagarna blir kortare efter sommarsolståndet och längre efter vintersolståndet.",
      "Kalendern markerar både sommarsolstånd och vintersolstånd."
    ],
    "related": [
      "vintersolstånd"
    ]
  },
  "vintersolstånd": {
    "opposite": "sommarsolstånd",
    "description": "Sommarsolståndet ger årets längsta dag. Vintersolståndet ger årets kortaste.",
    "examples": [
      "Dagarna blir kortare efter sommarsolståndet och längre efter vintersolståndet.",
      "Kalendern markerar både sommarsolstånd och vintersolstånd."
    ],
    "related": [
      "sommarsolstånd"
    ]
  },
  "underskattning": {
    "opposite": "överskattning",
    "description": "Underskattning bedömer något för lågt. Överskattning bedömer det för högt.",
    "examples": [
      "En underskattning av tiden följdes av en överskattning av farten.",
      "Undvik både underskattning och överskattning."
    ],
    "related": [
      "överskattning"
    ]
  },
  "överskattning": {
    "opposite": "underskattning",
    "description": "Underskattning bedömer något för lågt. Överskattning bedömer det för högt.",
    "examples": [
      "En underskattning av tiden följdes av en överskattning av farten.",
      "Undvik både underskattning och överskattning."
    ],
    "related": [
      "underskattning"
    ]
  },
  "minusgrad": {
    "opposite": "plusgrad",
    "description": "En minusgrad ligger under noll. En plusgrad ligger över noll.",
    "examples": [
      "Natten gav minusgrader och dagen plusgrader.",
      "Temperaturen steg från en minusgrad till en plusgrad."
    ],
    "related": [
      "plusgrad"
    ]
  },
  "plusgrad": {
    "opposite": "minusgrad",
    "description": "En minusgrad ligger under noll. En plusgrad ligger över noll.",
    "examples": [
      "Natten gav minusgrader och dagen plusgrader.",
      "Temperaturen steg från en minusgrad till en plusgrad."
    ],
    "related": [
      "minusgrad"
    ]
  },
  "bortalag": {
    "opposite": "hemmalag",
    "description": "Hemmalaget spelar på sin hemmaplan. Bortalaget är gästande lag.",
    "examples": [
      "Hemmalaget mötte bortalaget inför stor publik.",
      "Bortalaget vann över hemmalaget."
    ],
    "related": [
      "hemmalag"
    ]
  },
  "hemmalag": {
    "opposite": "bortalag",
    "description": "Hemmalaget spelar på sin hemmaplan. Bortalaget är gästande lag.",
    "examples": [
      "Hemmalaget mötte bortalaget inför stor publik.",
      "Bortalaget vann över hemmalaget."
    ],
    "related": [
      "bortalag"
    ]
  },
  "regntid": {
    "opposite": "torrtid",
    "description": "Regntid är en period med mycket regn. Torrtid är en period med lite regn.",
    "examples": [
      "Floden stiger under regntiden och sjunker under torrtiden.",
      "Djuren vandrar mellan regntid och torrtid."
    ],
    "related": [
      "torrtid"
    ]
  },
  "torrtid": {
    "opposite": "regntid",
    "description": "Regntid är en period med mycket regn. Torrtid är en period med lite regn.",
    "examples": [
      "Floden stiger under regntiden och sjunker under torrtiden.",
      "Djuren vandrar mellan regntid och torrtid."
    ],
    "related": [
      "regntid"
    ]
  },
  "pronation": {
    "opposite": "supination",
    "description": "Pronation vrider underarmen så handflatan vänds nedåt. Supination vrider den uppåt.",
    "examples": [
      "Rörelsen växlade mellan pronation och supination.",
      "Supination vänder handflatan uppåt och pronation nedåt."
    ],
    "related": [
      "supination"
    ]
  },
  "supination": {
    "opposite": "pronation",
    "description": "Pronation vrider underarmen så handflatan vänds nedåt. Supination vrider den uppåt.",
    "examples": [
      "Rörelsen växlade mellan pronation och supination.",
      "Supination vänder handflatan uppåt och pronation nedåt."
    ],
    "related": [
      "pronation"
    ]
  },
  "ja-sägare": {
    "opposite": "nej-sägare",
    "description": "En ja-sägare håller ofta med. En nej-sägare säger ofta emot.",
    "examples": [
      "Gruppen behöver varken bara ja-sägare eller bara nej-sägare.",
      "Ja-sägaren stödde förslaget och nej-sägaren avvisade det."
    ],
    "related": [
      "nej-sägare"
    ]
  },
  "nej-sägare": {
    "opposite": "ja-sägare",
    "description": "En ja-sägare håller ofta med. En nej-sägare säger ofta emot.",
    "examples": [
      "Gruppen behöver varken bara ja-sägare eller bara nej-sägare.",
      "Ja-sägaren stödde förslaget och nej-sägaren avvisade det."
    ],
    "related": [
      "ja-sägare"
    ]
  },
  "förgasa": {
    "opposite": "kondensera",
    "description": "Förgasa betyder omvandla till gas. Kondensera betyder omvandla gas till vätska.",
    "examples": [
      "Värmen förgasar vätskan och kylan kondenserar gasen.",
      "Ämnet förgasades och kondenserades senare."
    ],
    "related": [
      "kondensera"
    ]
  },
  "kondensera": {
    "opposite": "förgasa",
    "description": "Förgasa betyder omvandla till gas. Kondensera betyder omvandla gas till vätska.",
    "examples": [
      "Värmen förgasar vätskan och kylan kondenserar gasen.",
      "Ämnet förgasades och kondenserades senare."
    ],
    "related": [
      "förgasa"
    ]
  },
  "distal": {
    "opposite": "proximal",
    "description": "Proximal betyder nära kroppens centrum eller fästpunkt. Distal betyder längre bort.",
    "examples": [
      "Handen är distal om armbågen och axeln proximal.",
      "Läkaren skiljer mellan distal och proximal skada."
    ],
    "related": [
      "proximal"
    ]
  },
  "proximal": {
    "opposite": "distal",
    "description": "Proximal betyder nära kroppens centrum eller fästpunkt. Distal betyder längre bort.",
    "examples": [
      "Handen är distal om armbågen och axeln proximal.",
      "Läkaren skiljer mellan distal och proximal skada."
    ],
    "related": [
      "distal"
    ]
  },
  "köttätande": {
    "opposite": "växtätande",
    "description": "Köttätande djur äter främst andra djur. Växtätande djur äter främst växter.",
    "examples": [
      "Lejonet är köttätande och kon växtätande.",
      "Tänderna skiljer sig mellan köttätande och växtätande arter."
    ],
    "related": [
      "växtätande"
    ]
  },
  "växtätande": {
    "opposite": "köttätande",
    "description": "Köttätande djur äter främst andra djur. Växtätande djur äter främst växter.",
    "examples": [
      "Lejonet är köttätande och kon växtätande.",
      "Tänderna skiljer sig mellan köttätande och växtätande arter."
    ],
    "related": [
      "köttätande"
    ]
  },
  "viktminskning": {
    "opposite": "viktökning",
    "description": "Viktminskning betyder lägre kroppsvikt. Viktökning betyder högre kroppsvikt.",
    "examples": [
      "Rapporten visade viktminskning först och viktökning senare.",
      "Både viktökning och viktminskning kan ha flera orsaker."
    ],
    "related": [
      "viktökning"
    ]
  },
  "viktökning": {
    "opposite": "viktminskning",
    "description": "Viktminskning betyder lägre kroppsvikt. Viktökning betyder högre kroppsvikt.",
    "examples": [
      "Rapporten visade viktminskning först och viktökning senare.",
      "Både viktökning och viktminskning kan ha flera orsaker."
    ],
    "related": [
      "viktminskning"
    ]
  },
  "skönmåla": {
    "opposite": "svartmåla",
    "description": "Skönmåla betyder beskriva för positivt. Svartmåla betyder beskriva för negativt.",
    "examples": [
      "Försök att varken skönmåla resultatet eller svartmåla det.",
      "Den ena texten skönmålade läget och den andra svartmålade det."
    ],
    "related": [
      "svartmåla"
    ]
  },
  "svartmåla": {
    "opposite": "skönmåla",
    "description": "Skönmåla betyder beskriva för positivt. Svartmåla betyder beskriva för negativt.",
    "examples": [
      "Försök att varken skönmåla resultatet eller svartmåla det.",
      "Den ena texten skönmålade läget och den andra svartmålade det."
    ],
    "related": [
      "skönmåla"
    ]
  },
  "oöverlagd": {
    "opposite": "överlagd",
    "description": "Överlagd betyder genomtänkt i förväg. Oöverlagd betyder impulsiv eller ogenomtänkt.",
    "examples": [
      "Handlingen var oöverlagd, men nästa steg var överlagt.",
      "Ett överlagt beslut ersatte den oöverlagda reaktionen."
    ],
    "related": [
      "överlagd"
    ]
  },
  "överlagd": {
    "opposite": "oöverlagd",
    "description": "Överlagd betyder genomtänkt i förväg. Oöverlagd betyder impulsiv eller ogenomtänkt.",
    "examples": [
      "Handlingen var oöverlagd, men nästa steg var överlagt.",
      "Ett överlagt beslut ersatte den oöverlagda reaktionen."
    ],
    "related": [
      "oöverlagd"
    ]
  },
  "införsel": {
    "opposite": "utförsel",
    "description": "Införsel betyder att föra in varor i ett land. Utförsel betyder att föra ut dem.",
    "examples": [
      "Tullen kontrollerar både införsel och utförsel.",
      "Införseln ökade samtidigt som utförseln minskade."
    ],
    "related": [
      "utförsel"
    ]
  },
  "utförsel": {
    "opposite": "införsel",
    "description": "Införsel betyder att föra in varor i ett land. Utförsel betyder att föra ut dem.",
    "examples": [
      "Tullen kontrollerar både införsel och utförsel.",
      "Införseln ökade samtidigt som utförseln minskade."
    ],
    "related": [
      "införsel"
    ]
  },
  "oresonlig": {
    "opposite": "resonlig",
    "description": "Resonlig betyder rimlig och möjlig att diskutera med. Oresonlig betyder orimlig eller obeveklig.",
    "examples": [
      "Hon var resonlig, medan kravet var oresonligt.",
      "Ett oresonligt svar ersattes av ett resonligt."
    ],
    "related": [
      "resonlig"
    ]
  },
  "resonlig": {
    "opposite": "oresonlig",
    "description": "Resonlig betyder rimlig och möjlig att diskutera med. Oresonlig betyder orimlig eller obeveklig.",
    "examples": [
      "Hon var resonlig, medan kravet var oresonligt.",
      "Ett oresonligt svar ersattes av ett resonligt."
    ],
    "related": [
      "oresonlig"
    ]
  },
  "exportör": {
    "opposite": "importör",
    "description": "En exportör säljer varor till andra länder. En importör köper in dem därifrån.",
    "examples": [
      "Exportören skickade varan till importören.",
      "Företaget är både importör och exportör."
    ],
    "related": [
      "importör"
    ]
  },
  "importör": {
    "opposite": "exportör",
    "description": "En exportör säljer varor till andra länder. En importör köper in dem därifrån.",
    "examples": [
      "Exportören skickade varan till importören.",
      "Företaget är både importör och exportör."
    ],
    "related": [
      "exportör"
    ]
  },
  "medgörlig": {
    "opposite": "omedgörlig",
    "description": "Medgörlig betyder samarbetsvillig. Omedgörlig betyder svår att samarbeta med.",
    "examples": [
      "Patienten var medgörlig, inte omedgörlig.",
      "Den omedgörliga gruppen blev mer medgörlig."
    ],
    "related": [
      "omedgörlig"
    ]
  },
  "omedgörlig": {
    "opposite": "medgörlig",
    "description": "Medgörlig betyder samarbetsvillig. Omedgörlig betyder svår att samarbeta med.",
    "examples": [
      "Patienten var medgörlig, inte omedgörlig.",
      "Den omedgörliga gruppen blev mer medgörlig."
    ],
    "related": [
      "medgörlig"
    ]
  },
  "likriktare": {
    "opposite": "växelriktare",
    "description": "En likriktare gör växelström till likström. En växelriktare gör likström till växelström.",
    "examples": [
      "Likriktaren laddar batteriet och växelriktaren driver apparaten.",
      "Systemet använder både likriktare och växelriktare."
    ],
    "related": [
      "växelriktare"
    ]
  },
  "växelriktare": {
    "opposite": "likriktare",
    "description": "En likriktare gör växelström till likström. En växelriktare gör likström till växelström.",
    "examples": [
      "Likriktaren laddar batteriet och växelriktaren driver apparaten.",
      "Systemet använder både likriktare och växelriktare."
    ],
    "related": [
      "likriktare"
    ]
  },
  "dokumentärfilm": {
    "opposite": "spelfilm",
    "description": "En dokumentärfilm skildrar verkliga förhållanden. En spelfilm berättar främst en iscensatt historia.",
    "examples": [
      "Festivalen visade en dokumentärfilm och en spelfilm.",
      "Dokumentärfilmen bygger på verklighet, medan spelfilmen är dramatiserad."
    ],
    "related": [
      "spelfilm"
    ]
  },
  "spelfilm": {
    "opposite": "dokumentärfilm",
    "description": "En dokumentärfilm skildrar verkliga förhållanden. En spelfilm berättar främst en iscensatt historia.",
    "examples": [
      "Festivalen visade en dokumentärfilm och en spelfilm.",
      "Dokumentärfilmen bygger på verklighet, medan spelfilmen är dramatiserad."
    ],
    "related": [
      "dokumentärfilm"
    ]
  },
  "finissage": {
    "opposite": "vernissage",
    "description": "Vernissage är invigningen av en utställning. Finissage är avslutningen.",
    "examples": [
      "Utställningen öppnade med vernissage och slutade med finissage.",
      "Vi besökte både vernissagen och finissagen."
    ],
    "related": [
      "vernissage"
    ]
  },
  "vernissage": {
    "opposite": "finissage",
    "description": "Vernissage är invigningen av en utställning. Finissage är avslutningen.",
    "examples": [
      "Utställningen öppnade med vernissage och slutade med finissage.",
      "Vi besökte både vernissagen och finissagen."
    ],
    "related": [
      "finissage"
    ]
  },
  "kortsiktighet": {
    "opposite": "långsiktighet",
    "description": "Kortsiktighet fokuserar på det som händer snart. Långsiktighet tar hänsyn till en längre tid.",
    "examples": [
      "Beslutet präglades av kortsiktighet i stället för långsiktighet.",
      "Långsiktighet kan ge bättre resultat än kortsiktighet."
    ],
    "related": [
      "långsiktighet"
    ]
  },
  "långsiktighet": {
    "opposite": "kortsiktighet",
    "description": "Kortsiktighet fokuserar på det som händer snart. Långsiktighet tar hänsyn till en längre tid.",
    "examples": [
      "Beslutet präglades av kortsiktighet i stället för långsiktighet.",
      "Långsiktighet kan ge bättre resultat än kortsiktighet."
    ],
    "related": [
      "kortsiktighet"
    ]
  },
  "exhalera": {
    "opposite": "inhalera",
    "description": "Att exhalera är att andas ut. Att inhalera är att andas in.",
    "examples": [
      "Hon inhalerade lugnt och exhalerade långsamt.",
      "Läkaren bad honom inhalera och sedan exhalera."
    ],
    "related": [
      "inhalera"
    ]
  },
  "inhalera": {
    "opposite": "exhalera",
    "description": "Att exhalera är att andas ut. Att inhalera är att andas in.",
    "examples": [
      "Hon inhalerade lugnt och exhalerade långsamt.",
      "Läkaren bad honom inhalera och sedan exhalera."
    ],
    "related": [
      "exhalera"
    ]
  },
  "bibetydelse": {
    "opposite": "grundbetydelse",
    "description": "Grundbetydelsen är ett ords huvudsakliga betydelse. En bibetydelse är en extra eller indirekt betydelse.",
    "examples": [
      "Ordet har en tydlig grundbetydelse och en bildlig bibetydelse.",
      "Ordboken skiljer mellan grundbetydelsen och ordets bibetydelse."
    ],
    "related": [
      "grundbetydelse"
    ]
  },
  "grundbetydelse": {
    "opposite": "bibetydelse",
    "description": "Grundbetydelsen är ett ords huvudsakliga betydelse. En bibetydelse är en extra eller indirekt betydelse.",
    "examples": [
      "Ordet har en tydlig grundbetydelse och en bildlig bibetydelse.",
      "Ordboken skiljer mellan grundbetydelsen och ordets bibetydelse."
    ],
    "related": [
      "bibetydelse"
    ]
  },
  "lättlöslig": {
    "opposite": "svårlöslig",
    "description": "Något lättlösligt löses upp enkelt. Något svårlösligt löses upp med svårighet.",
    "examples": [
      "Sockret är lättlösligt, men ämnet i provröret är svårlösligt.",
      "Ett lättlösligt pulver försvinner snabbare i vatten än ett svårlösligt."
    ],
    "related": [
      "svårlöslig"
    ]
  },
  "svårlöslig": {
    "opposite": "lättlöslig",
    "description": "Något lättlösligt löses upp enkelt. Något svårlösligt löses upp med svårighet.",
    "examples": [
      "Sockret är lättlösligt, men ämnet i provröret är svårlösligt.",
      "Ett lättlösligt pulver försvinner snabbare i vatten än ett svårlösligt."
    ],
    "related": [
      "lättlöslig"
    ]
  },
  "anisotropi": {
    "opposite": "isotropi",
    "description": "Isotropi innebär samma egenskaper i alla riktningar. Anisotropi innebär att egenskaperna beror på riktningen.",
    "examples": [
      "Glaset visar isotropi, medan materialet bredvid visar anisotropi.",
      "Forskaren jämförde isotropi med anisotropi i kristallen."
    ],
    "related": [
      "isotropi"
    ]
  },
  "isotropi": {
    "opposite": "anisotropi",
    "description": "Isotropi innebär samma egenskaper i alla riktningar. Anisotropi innebär att egenskaperna beror på riktningen.",
    "examples": [
      "Glaset visar isotropi, medan materialet bredvid visar anisotropi.",
      "Forskaren jämförde isotropi med anisotropi i kristallen."
    ],
    "related": [
      "anisotropi"
    ]
  },
  "färgstark": {
    "opposite": "färgsvag",
    "description": "Färgstark betyder att färgerna är tydliga och intensiva. Färgsvag betyder att färgerna är svaga eller dämpade.",
    "examples": [
      "Affischen är färgstark, men kopian är färgsvag.",
      "En färgstark bild syns tydligare än en färgsvag."
    ],
    "related": [
      "färgsvag"
    ]
  },
  "färgsvag": {
    "opposite": "färgstark",
    "description": "Färgstark betyder att färgerna är tydliga och intensiva. Färgsvag betyder att färgerna är svaga eller dämpade.",
    "examples": [
      "Affischen är färgstark, men kopian är färgsvag.",
      "En färgstark bild syns tydligare än en färgsvag."
    ],
    "related": [
      "färgstark"
    ]
  },
  "likfärgad": {
    "opposite": "olikfärgad",
    "description": "Likfärgade saker har samma eller mycket lik färg. Olikfärgade saker har olika färger.",
    "examples": [
      "De likfärgade tröjorna låg bredvid de olikfärgade.",
      "Fåglarna var likfärgade på ryggen men olikfärgade på bröstet."
    ],
    "related": [
      "olikfärgad"
    ]
  },
  "olikfärgad": {
    "opposite": "likfärgad",
    "description": "Likfärgade saker har samma eller mycket lik färg. Olikfärgade saker har olika färger.",
    "examples": [
      "De likfärgade tröjorna låg bredvid de olikfärgade.",
      "Fåglarna var likfärgade på ryggen men olikfärgade på bröstet."
    ],
    "related": [
      "likfärgad"
    ]
  },
  "underlägsenhet": {
    "opposite": "överlägsenhet",
    "description": "Underlägsenhet innebär att vara sämre eller svagare i en jämförelse. Överlägsenhet innebär att vara bättre eller starkare.",
    "examples": [
      "Laget gick från underlägsenhet till överlägsenhet efter pausen.",
      "Resultatet visade maskinens överlägsenhet och den äldre modellens underlägsenhet."
    ],
    "related": [
      "överlägsenhet"
    ]
  },
  "överlägsenhet": {
    "opposite": "underlägsenhet",
    "description": "Underlägsenhet innebär att vara sämre eller svagare i en jämförelse. Överlägsenhet innebär att vara bättre eller starkare.",
    "examples": [
      "Laget gick från underlägsenhet till överlägsenhet efter pausen.",
      "Resultatet visade maskinens överlägsenhet och den äldre modellens underlägsenhet."
    ],
    "related": [
      "underlägsenhet"
    ]
  },
  "förenlighet": {
    "opposite": "oförenlighet",
    "description": "Förenlighet betyder att saker kan fungera tillsammans. Oförenlighet betyder att de inte kan förenas eller kombineras.",
    "examples": [
      "Testet visade förenlighet mellan systemen, inte oförenlighet.",
      "Deras krav präglades av oförenlighet snarare än förenlighet."
    ],
    "related": [
      "oförenlighet"
    ]
  },
  "oförenlighet": {
    "opposite": "förenlighet",
    "description": "Förenlighet betyder att saker kan fungera tillsammans. Oförenlighet betyder att de inte kan förenas eller kombineras.",
    "examples": [
      "Testet visade förenlighet mellan systemen, inte oförenlighet.",
      "Deras krav präglades av oförenlighet snarare än förenlighet."
    ],
    "related": [
      "förenlighet"
    ]
  },
  "flexibilitet": {
    "opposite": "rigiditet",
    "description": "Flexibilitet innebär att lätt kunna anpassas. Rigiditet innebär stelhet och liten möjlighet till förändring.",
    "examples": [
      "Planen gav flexibilitet i stället för rigiditet.",
      "Materialets flexibilitet kontrasterar mot metallens rigiditet."
    ],
    "related": [
      "rigiditet"
    ]
  },
  "rigiditet": {
    "opposite": "flexibilitet",
    "description": "Flexibilitet innebär att lätt kunna anpassas. Rigiditet innebär stelhet och liten möjlighet till förändring.",
    "examples": [
      "Planen gav flexibilitet i stället för rigiditet.",
      "Materialets flexibilitet kontrasterar mot metallens rigiditet."
    ],
    "related": [
      "flexibilitet"
    ]
  },
  "fullständighet": {
    "opposite": "ofullständighet",
    "description": "Fullständighet innebär att inget viktigt saknas. Ofullständighet innebär att något saknas.",
    "examples": [
      "Rapportens fullständighet uppskattades, men bilagans ofullständighet kritiserades.",
      "Kontrollen visar om uppgifterna har fullständighet eller ofullständighet."
    ],
    "related": [
      "ofullständighet"
    ]
  },
  "ofullständighet": {
    "opposite": "fullständighet",
    "description": "Fullständighet innebär att inget viktigt saknas. Ofullständighet innebär att något saknas.",
    "examples": [
      "Rapportens fullständighet uppskattades, men bilagans ofullständighet kritiserades.",
      "Kontrollen visar om uppgifterna har fullständighet eller ofullständighet."
    ],
    "related": [
      "fullständighet"
    ]
  },
  "ljushet": {
    "opposite": "mörkhet",
    "description": "Ljushet beskriver hur ljust något är. Mörkhet beskriver hur mörkt något är.",
    "examples": [
      "Bildens ljushet ökade och dess mörkhet minskade.",
      "Rummet växlade mellan ljushet på dagen och mörkhet på natten."
    ],
    "related": [
      "mörkhet"
    ]
  },
  "mörkhet": {
    "opposite": "ljushet",
    "description": "Ljushet beskriver hur ljust något är. Mörkhet beskriver hur mörkt något är.",
    "examples": [
      "Bildens ljushet ökade och dess mörkhet minskade.",
      "Rummet växlade mellan ljushet på dagen och mörkhet på natten."
    ],
    "related": [
      "ljushet"
    ]
  },
  "dödlighet": {
    "opposite": "odödlighet",
    "description": "Dödlighet innebär att kunna dö. Odödlighet innebär att aldrig dö.",
    "examples": [
      "Människans dödlighet står i kontrast till sagogudens odödlighet.",
      "Berättelsen handlar om dödlighet och drömmen om odödlighet."
    ],
    "related": [
      "odödlighet"
    ]
  },
  "odödlighet": {
    "opposite": "dödlighet",
    "description": "Dödlighet innebär att kunna dö. Odödlighet innebär att aldrig dö.",
    "examples": [
      "Människans dödlighet står i kontrast till sagogudens odödlighet.",
      "Berättelsen handlar om dödlighet och drömmen om odödlighet."
    ],
    "related": [
      "dödlighet"
    ]
  },
  "ditåt": {
    "opposite": "hitåt",
    "description": "Ditåt betyder i riktning bort mot en annan plats. Hitåt betyder i riktning mot platsen där talaren är.",
    "examples": [
      "Gå inte ditåt, kom hitåt.",
      "Hon pekade först ditåt och sedan hitåt."
    ],
    "related": [
      "hitåt"
    ]
  },
  "hitåt": {
    "opposite": "ditåt",
    "description": "Ditåt betyder i riktning bort mot en annan plats. Hitåt betyder i riktning mot platsen där talaren är.",
    "examples": [
      "Gå inte ditåt, kom hitåt.",
      "Hon pekade först ditåt och sedan hitåt."
    ],
    "related": [
      "ditåt"
    ]
  },
  "medspelare": {
    "opposite": "motspelare",
    "description": "En medspelare spelar i samma lag. En motspelare spelar på den andra sidan.",
    "examples": [
      "Hon passade sin medspelare och rundade en motspelare.",
      "Varje medspelare hjälpte laget medan motspelarna försvarade sig."
    ],
    "related": [
      "motspelare"
    ]
  },
  "motspelare": {
    "opposite": "medspelare",
    "description": "En medspelare spelar i samma lag. En motspelare spelar på den andra sidan.",
    "examples": [
      "Hon passade sin medspelare och rundade en motspelare.",
      "Varje medspelare hjälpte laget medan motspelarna försvarade sig."
    ],
    "related": [
      "medspelare"
    ]
  },
  "osjälviskhet": {
    "opposite": "själviskhet",
    "description": "Osjälviskhet innebär att tänka på andra. Själviskhet innebär att främst tänka på sig själv.",
    "examples": [
      "Hennes osjälviskhet uppskattades, medan hans själviskhet väckte irritation.",
      "Att dela med sig visar osjälviskhet snarare än själviskhet."
    ],
    "related": [
      "själviskhet"
    ]
  },
  "själviskhet": {
    "opposite": "osjälviskhet",
    "description": "Osjälviskhet innebär att tänka på andra. Själviskhet innebär att främst tänka på sig själv.",
    "examples": [
      "Hennes osjälviskhet uppskattades, medan hans själviskhet väckte irritation.",
      "Att dela med sig visar osjälviskhet snarare än själviskhet."
    ],
    "related": [
      "osjälviskhet"
    ]
  },
  "bemärkt": {
    "opposite": "obemärkt",
    "description": "Bemärkt betyder uppmärksammad eller framstående. Obemärkt betyder utan att bli uppmärksammad.",
    "examples": [
      "Den bemärkta gästen kunde inte lämna festen obemärkt.",
      "Hon blev bemärkt för sin forskning, medan arbetet tidigare hade varit obemärkt."
    ],
    "related": [
      "obemärkt"
    ]
  },
  "obemärkt": {
    "opposite": "bemärkt",
    "description": "Bemärkt betyder uppmärksammad eller framstående. Obemärkt betyder utan att bli uppmärksammad.",
    "examples": [
      "Den bemärkta gästen kunde inte lämna festen obemärkt.",
      "Hon blev bemärkt för sin forskning, medan arbetet tidigare hade varit obemärkt."
    ],
    "related": [
      "bemärkt"
    ]
  },
  "oöversättbar": {
    "opposite": "översättbar",
    "description": "Något översättbart kan återges på ett annat språk. Något oöversättbart kan inte återges fullt ut.",
    "examples": [
      "Den enkla meningen är översättbar, men ordleken är nästan oöversättbar.",
      "Vissa uttryck är lätt översättbara och andra oöversättbara."
    ],
    "related": [
      "översättbar"
    ]
  },
  "översättbar": {
    "opposite": "oöversättbar",
    "description": "Något översättbart kan återges på ett annat språk. Något oöversättbart kan inte återges fullt ut.",
    "examples": [
      "Den enkla meningen är översättbar, men ordleken är nästan oöversättbar.",
      "Vissa uttryck är lätt översättbara och andra oöversättbara."
    ],
    "related": [
      "oöversättbar"
    ]
  },
  "vanvördig": {
    "opposite": "vördnadsfull",
    "description": "Vanvördig betyder respektlös. Vördnadsfull betyder fylld av respekt.",
    "examples": [
      "Kommentaren var vanvördig, men talet var vördnadsfullt.",
      "Han bytte från en vanvördig ton till en vördnadsfull."
    ],
    "related": [
      "vördnadsfull"
    ]
  },
  "vördnadsfull": {
    "opposite": "vanvördig",
    "description": "Vanvördig betyder respektlös. Vördnadsfull betyder fylld av respekt.",
    "examples": [
      "Kommentaren var vanvördig, men talet var vördnadsfullt.",
      "Han bytte från en vanvördig ton till en vördnadsfull."
    ],
    "related": [
      "vanvördig"
    ]
  },
  "högerparentes": {
    "opposite": "vänsterparentes",
    "description": "En vänsterparentes öppnar en parentes. En högerparentes avslutar den.",
    "examples": [
      "Skriv en vänsterparentes före ordet och en högerparentes efter.",
      "Varje vänsterparentes måste ha en högerparentes."
    ],
    "related": [
      "vänsterparentes"
    ]
  },
  "vänsterparentes": {
    "opposite": "högerparentes",
    "description": "En vänsterparentes öppnar en parentes. En högerparentes avslutar den.",
    "examples": [
      "Skriv en vänsterparentes före ordet och en högerparentes efter.",
      "Varje vänsterparentes måste ha en högerparentes."
    ],
    "related": [
      "högerparentes"
    ]
  },
  "inkompressibel": {
    "opposite": "kompressibel",
    "description": "Ett kompressibelt ämne kan pressas ihop. Ett inkompressibelt ämne kan i praktiken inte pressas ihop.",
    "examples": [
      "Gas är kompressibel, medan vätskan behandlas som inkompressibel.",
      "Modellen skiljer mellan kompressibelt och inkompressibelt flöde."
    ],
    "related": [
      "kompressibel"
    ]
  },
  "kompressibel": {
    "opposite": "inkompressibel",
    "description": "Ett kompressibelt ämne kan pressas ihop. Ett inkompressibelt ämne kan i praktiken inte pressas ihop.",
    "examples": [
      "Gas är kompressibel, medan vätskan behandlas som inkompressibel.",
      "Modellen skiljer mellan kompressibelt och inkompressibelt flöde."
    ],
    "related": [
      "inkompressibel"
    ]
  },
  "muntligen": {
    "opposite": "skriftligen",
    "description": "Muntligen betyder med tal. Skriftligen betyder i skriven form.",
    "examples": [
      "Beskedet gavs först muntligen och sedan skriftligen.",
      "Du kan svara muntligen eller skriftligen."
    ],
    "related": [
      "skriftligen"
    ]
  },
  "skriftligen": {
    "opposite": "muntligen",
    "description": "Muntligen betyder med tal. Skriftligen betyder i skriven form.",
    "examples": [
      "Beskedet gavs först muntligen och sedan skriftligen.",
      "Du kan svara muntligen eller skriftligen."
    ],
    "related": [
      "muntligen"
    ]
  },
  "känsloskäl": {
    "opposite": "sakskäl",
    "description": "Känsloskäl bygger på känslor. Sakskäl bygger på fakta och relevanta omständigheter.",
    "examples": [
      "Hon skilde mellan känsloskäl och sakskäl.",
      "Beslutet bör vila på sakskäl, inte bara känsloskäl."
    ],
    "related": [
      "sakskäl"
    ]
  },
  "sakskäl": {
    "opposite": "känsloskäl",
    "description": "Känsloskäl bygger på känslor. Sakskäl bygger på fakta och relevanta omständigheter.",
    "examples": [
      "Hon skilde mellan känsloskäl och sakskäl.",
      "Beslutet bör vila på sakskäl, inte bara känsloskäl."
    ],
    "related": [
      "känsloskäl"
    ]
  },
  "känsloargument": {
    "opposite": "sakargument",
    "description": "Ett känsloargument vädjar till känslor. Ett sakargument bygger på fakta och logik.",
    "examples": [
      "Debatten innehöll både känsloargument och sakargument.",
      "Ett sakargument övertygade mer än känsloargumentet."
    ],
    "related": [
      "sakargument"
    ]
  },
  "sakargument": {
    "opposite": "känsloargument",
    "description": "Ett känsloargument vädjar till känslor. Ett sakargument bygger på fakta och logik.",
    "examples": [
      "Debatten innehöll både känsloargument och sakargument.",
      "Ett sakargument övertygade mer än känsloargumentet."
    ],
    "related": [
      "känsloargument"
    ]
  },
  "bakfot": {
    "opposite": "framfot",
    "description": "En framfot är den främre delen eller foten. En bakfot är den bakre.",
    "examples": [
      "Djuret skadade en framfot men stödde sig på sin bakfot.",
      "Spåren från framfoten låg framför spåren från bakfoten."
    ],
    "related": [
      "framfot"
    ]
  },
  "framfot": {
    "opposite": "bakfot",
    "description": "En framfot är den främre delen eller foten. En bakfot är den bakre.",
    "examples": [
      "Djuret skadade en framfot men stödde sig på sin bakfot.",
      "Spåren från framfoten låg framför spåren från bakfoten."
    ],
    "related": [
      "bakfot"
    ]
  },
  "imperfektiv": {
    "opposite": "perfektiv",
    "description": "Imperfektiv aspekt beskriver en pågående eller ofullbordad handling. Perfektiv aspekt beskriver handlingen som avslutad eller hel.",
    "examples": [
      "Språket skiljer mellan imperfektiv och perfektiv aspekt.",
      "Den imperfektiva formen betonar förloppet, den perfektiva resultatet."
    ],
    "related": [
      "perfektiv"
    ]
  },
  "perfektiv": {
    "opposite": "imperfektiv",
    "description": "Imperfektiv aspekt beskriver en pågående eller ofullbordad handling. Perfektiv aspekt beskriver handlingen som avslutad eller hel.",
    "examples": [
      "Språket skiljer mellan imperfektiv och perfektiv aspekt.",
      "Den imperfektiva formen betonar förloppet, den perfektiva resultatet."
    ],
    "related": [
      "imperfektiv"
    ]
  },
  "hjälpsamhet": {
    "opposite": "ohjälpsamhet",
    "description": "Hjälpsamhet innebär en vilja att hjälpa. Ohjälpsamhet innebär att inte vara till hjälp.",
    "examples": [
      "Personalens hjälpsamhet gjorde skillnad, men den tidigare ohjälpsamheten hade skapat problem.",
      "Hon möttes av hjälpsamhet i stället för ohjälpsamhet."
    ],
    "related": [
      "ohjälpsamhet"
    ]
  },
  "ohjälpsamhet": {
    "opposite": "hjälpsamhet",
    "description": "Hjälpsamhet innebär en vilja att hjälpa. Ohjälpsamhet innebär att inte vara till hjälp.",
    "examples": [
      "Personalens hjälpsamhet gjorde skillnad, men den tidigare ohjälpsamheten hade skapat problem.",
      "Hon möttes av hjälpsamhet i stället för ohjälpsamhet."
    ],
    "related": [
      "hjälpsamhet"
    ]
  },
  "arbetsförmåga": {
    "opposite": "arbetsoförmåga",
    "description": "Arbetsförmåga är förmågan att arbeta. Arbetsoförmåga innebär att man inte kan arbeta.",
    "examples": [
      "Läkaren bedömde både arbetsförmåga och arbetsoförmåga.",
      "Efter vilan återfick han sin arbetsförmåga efter en period av arbetsoförmåga."
    ],
    "related": [
      "arbetsoförmåga"
    ]
  },
  "arbetsoförmåga": {
    "opposite": "arbetsförmåga",
    "description": "Arbetsförmåga är förmågan att arbeta. Arbetsoförmåga innebär att man inte kan arbeta.",
    "examples": [
      "Läkaren bedömde både arbetsförmåga och arbetsoförmåga.",
      "Efter vilan återfick han sin arbetsförmåga efter en period av arbetsoförmåga."
    ],
    "related": [
      "arbetsförmåga"
    ]
  },
  "gammaltestamentlig": {
    "opposite": "nytestamentlig",
    "description": "Gammaltestamentlig hör till Gamla testamentet. Nytestamentlig hör till Nya testamentet.",
    "examples": [
      "Kursen tar upp både gammaltestamentliga och nytestamentliga texter.",
      "Motivet har en gammaltestamentlig bakgrund och en nytestamentlig tolkning."
    ],
    "related": [
      "nytestamentlig"
    ]
  },
  "nytestamentlig": {
    "opposite": "gammaltestamentlig",
    "description": "Gammaltestamentlig hör till Gamla testamentet. Nytestamentlig hör till Nya testamentet.",
    "examples": [
      "Kursen tar upp både gammaltestamentliga och nytestamentliga texter.",
      "Motivet har en gammaltestamentlig bakgrund och en nytestamentlig tolkning."
    ],
    "related": [
      "gammaltestamentlig"
    ]
  },
  "inpendling": {
    "opposite": "utpendling",
    "description": "Inpendling är resor in till en ort för arbete eller studier. Utpendling är resor från orten.",
    "examples": [
      "Kommunen har stor inpendling på morgonen och utpendling på kvällen.",
      "Statistiken jämför inpendling med utpendling."
    ],
    "related": [
      "utpendling"
    ]
  },
  "utpendling": {
    "opposite": "inpendling",
    "description": "Inpendling är resor in till en ort för arbete eller studier. Utpendling är resor från orten.",
    "examples": [
      "Kommunen har stor inpendling på morgonen och utpendling på kvällen.",
      "Statistiken jämför inpendling med utpendling."
    ],
    "related": [
      "inpendling"
    ]
  },
  "kontaktbar": {
    "opposite": "okontaktbar",
    "description": "Kontaktbar betyder att en person går att få kontakt med. Okontaktbar betyder att personen inte reagerar på kontaktförsök.",
    "examples": [
      "Patienten var först okontaktbar men blev senare kontaktbar.",
      "Räddningspersonalen kontrollerade om personen var kontaktbar eller okontaktbar."
    ],
    "related": [
      "okontaktbar"
    ]
  },
  "okontaktbar": {
    "opposite": "kontaktbar",
    "description": "Kontaktbar betyder att en person går att få kontakt med. Okontaktbar betyder att personen inte reagerar på kontaktförsök.",
    "examples": [
      "Patienten var först okontaktbar men blev senare kontaktbar.",
      "Räddningspersonalen kontrollerade om personen var kontaktbar eller okontaktbar."
    ],
    "related": [
      "kontaktbar"
    ]
  },
  "ingångspsalm": {
    "opposite": "utgångspsalm",
    "description": "En ingångspsalm sjungs i början av en gudstjänst. En utgångspsalm sjungs i slutet.",
    "examples": [
      "Gudstjänsten började med en ingångspsalm och slutade med en utgångspsalm.",
      "Kören övade både ingångspsalmen och utgångspsalmen."
    ],
    "related": [
      "utgångspsalm"
    ]
  },
  "utgångspsalm": {
    "opposite": "ingångspsalm",
    "description": "En ingångspsalm sjungs i början av en gudstjänst. En utgångspsalm sjungs i slutet.",
    "examples": [
      "Gudstjänsten började med en ingångspsalm och slutade med en utgångspsalm.",
      "Kören övade både ingångspsalmen och utgångspsalmen."
    ],
    "related": [
      "ingångspsalm"
    ]
  },
  "arvmonarki": {
    "opposite": "valmonarki",
    "description": "I en arvmonarki ärvs tronen. I en valmonarki utses monarken genom val.",
    "examples": [
      "Landet gick från valmonarki till arvmonarki.",
      "Historikern jämförde arvmonarki med valmonarki."
    ],
    "related": [
      "valmonarki"
    ]
  },
  "valmonarki": {
    "opposite": "arvmonarki",
    "description": "I en arvmonarki ärvs tronen. I en valmonarki utses monarken genom val.",
    "examples": [
      "Landet gick från valmonarki till arvmonarki.",
      "Historikern jämförde arvmonarki med valmonarki."
    ],
    "related": [
      "arvmonarki"
    ]
  },
  "högerparti": {
    "opposite": "vänsterparti",
    "description": "Ett högerparti hör till den politiska högern. Ett vänsterparti hör till den politiska vänstern.",
    "examples": [
      "Debatten hölls mellan ett högerparti och ett vänsterparti.",
      "Väljaren jämförde högerpartiets förslag med vänsterpartiets."
    ],
    "related": [
      "vänsterparti"
    ]
  },
  "vänsterparti": {
    "opposite": "högerparti",
    "description": "Ett högerparti hör till den politiska högern. Ett vänsterparti hör till den politiska vänstern.",
    "examples": [
      "Debatten hölls mellan ett högerparti och ett vänsterparti.",
      "Väljaren jämförde högerpartiets förslag med vänsterpartiets."
    ],
    "related": [
      "högerparti"
    ]
  },
  "lönesänkning": {
    "opposite": "löneökning",
    "description": "En lönesänkning minskar lönen. En löneökning höjer lönen.",
    "examples": [
      "De anställda ville ha en löneökning, inte en lönesänkning.",
      "Avtalet gav löneökning efter en period med lönesänkning."
    ],
    "related": [
      "löneökning"
    ]
  },
  "löneökning": {
    "opposite": "lönesänkning",
    "description": "En lönesänkning minskar lönen. En löneökning höjer lönen.",
    "examples": [
      "De anställda ville ha en löneökning, inte en lönesänkning.",
      "Avtalet gav löneökning efter en period med lönesänkning."
    ],
    "related": [
      "lönesänkning"
    ]
  },
  "blyfri": {
    "opposite": "blyhaltig",
    "description": "Blyfri betyder utan bly. Blyhaltig betyder att något innehåller bly.",
    "examples": [
      "Färgen ska vara blyfri och inte blyhaltig.",
      "Provet visade om materialet var blyfritt eller blyhaltigt."
    ],
    "related": [
      "blyhaltig"
    ]
  },
  "blyhaltig": {
    "opposite": "blyfri",
    "description": "Blyfri betyder utan bly. Blyhaltig betyder att något innehåller bly.",
    "examples": [
      "Färgen ska vara blyfri och inte blyhaltig.",
      "Provet visade om materialet var blyfritt eller blyhaltigt."
    ],
    "related": [
      "blyfri"
    ]
  },
  "folkminskning": {
    "opposite": "folkökning",
    "description": "Folkminskning innebär att befolkningen blir mindre. Folkökning innebär att den blir större.",
    "examples": [
      "Utflyttning gav folkminskning, medan inflyttning senare gav folkökning.",
      "Rapporten jämför kommuner med folkökning och folkminskning."
    ],
    "related": [
      "folkökning"
    ]
  },
  "folkökning": {
    "opposite": "folkminskning",
    "description": "Folkminskning innebär att befolkningen blir mindre. Folkökning innebär att den blir större.",
    "examples": [
      "Utflyttning gav folkminskning, medan inflyttning senare gav folkökning.",
      "Rapporten jämför kommuner med folkökning och folkminskning."
    ],
    "related": [
      "folkminskning"
    ]
  },
  "bredspårig": {
    "opposite": "smalspårig",
    "description": "Bredspårig beskriver en järnväg med bred spårvidd. Smalspårig beskriver en med smal spårvidd.",
    "examples": [
      "Den bredspåriga banan möter en smalspårig järnväg.",
      "Museet visar både bredspåriga och smalspåriga lok."
    ],
    "related": [
      "smalspårig"
    ]
  },
  "smalspårig": {
    "opposite": "bredspårig",
    "description": "Bredspårig beskriver en järnväg med bred spårvidd. Smalspårig beskriver en med smal spårvidd.",
    "examples": [
      "Den bredspåriga banan möter en smalspårig järnväg.",
      "Museet visar både bredspåriga och smalspåriga lok."
    ],
    "related": [
      "bredspårig"
    ]
  },
  "akterskepp": {
    "opposite": "förskepp",
    "description": "Förskeppet är den främre delen av ett fartyg. Akterskeppet är den bakre delen.",
    "examples": [
      "Besättningen arbetade både i förskeppet och i akterskeppet.",
      "Skadan satt i förskeppet, inte i akterskeppet."
    ],
    "related": [
      "förskepp"
    ]
  },
  "förskepp": {
    "opposite": "akterskepp",
    "description": "Förskeppet är den främre delen av ett fartyg. Akterskeppet är den bakre delen.",
    "examples": [
      "Besättningen arbetade både i förskeppet och i akterskeppet.",
      "Skadan satt i förskeppet, inte i akterskeppet."
    ],
    "related": [
      "akterskepp"
    ]
  },
  "småsyskon": {
    "opposite": "storasyskon",
    "description": "Ett småsyskon är yngre än personen man jämför med. Ett storasyskon är äldre.",
    "examples": [
      "Hon är storasyskon till sin bror och småsyskon till sin syster.",
      "Ett storasyskon hjälpte sitt småsyskon med läxan."
    ],
    "related": [
      "storasyskon"
    ]
  },
  "storasyskon": {
    "opposite": "småsyskon",
    "description": "Ett småsyskon är yngre än personen man jämför med. Ett storasyskon är äldre.",
    "examples": [
      "Hon är storasyskon till sin bror och småsyskon till sin syster.",
      "Ett storasyskon hjälpte sitt småsyskon med läxan."
    ],
    "related": [
      "småsyskon"
    ]
  },
  "uddamålsförlust": {
    "opposite": "uddamålsvinst",
    "description": "En uddamålsförlust är en förlust med ett mål. En uddamålsvinst är en seger med ett mål.",
    "examples": [
      "Första matchen slutade med uddamålsförlust och den andra med uddamålsvinst.",
      "Laget vände en uddamålsförlust till en uddamålsvinst i returen."
    ],
    "related": [
      "uddamålsvinst"
    ]
  },
  "uddamålsvinst": {
    "opposite": "uddamålsförlust",
    "description": "En uddamålsförlust är en förlust med ett mål. En uddamålsvinst är en seger med ett mål.",
    "examples": [
      "Första matchen slutade med uddamålsförlust och den andra med uddamålsvinst.",
      "Laget vände en uddamålsförlust till en uddamålsvinst i returen."
    ],
    "related": [
      "uddamålsförlust"
    ]
  },
  "dubbelradig": {
    "opposite": "enkelradig",
    "description": "Dubbelradig betyder ordnad i två rader. Enkelradig betyder ordnad i en rad.",
    "examples": [
      "Kavajen finns som dubbelradig och enkelradig.",
      "Den dubbelradiga planteringen tar mer plats än den enkelradiga."
    ],
    "related": [
      "enkelradig"
    ]
  },
  "enkelradig": {
    "opposite": "dubbelradig",
    "description": "Dubbelradig betyder ordnad i två rader. Enkelradig betyder ordnad i en rad.",
    "examples": [
      "Kavajen finns som dubbelradig och enkelradig.",
      "Den dubbelradiga planteringen tar mer plats än den enkelradiga."
    ],
    "related": [
      "dubbelradig"
    ]
  },
  "fertilitet": {
    "opposite": "infertilitet",
    "description": "Fertilitet är förmågan att få avkomma. Infertilitet innebär nedsatt eller saknad sådan förmåga.",
    "examples": [
      "Undersökningen gällde både fertilitet och infertilitet.",
      "Behandlingen kan förbättra fertilitet vid vissa former av infertilitet."
    ],
    "related": [
      "infertilitet"
    ]
  },
  "infertilitet": {
    "opposite": "fertilitet",
    "description": "Fertilitet är förmågan att få avkomma. Infertilitet innebär nedsatt eller saknad sådan förmåga.",
    "examples": [
      "Undersökningen gällde både fertilitet och infertilitet.",
      "Behandlingen kan förbättra fertilitet vid vissa former av infertilitet."
    ],
    "related": [
      "fertilitet"
    ]
  },
  "undertryck": {
    "opposite": "övertryck",
    "description": "Undertryck är lägre tryck än omgivningen. Övertryck är högre tryck än omgivningen.",
    "examples": [
      "Fläkten skapade undertryck i rummet och övertryck i kanalen.",
      "Mätaren visar om det råder undertryck eller övertryck."
    ],
    "related": [
      "övertryck"
    ]
  },
  "övertryck": {
    "opposite": "undertryck",
    "description": "Undertryck är lägre tryck än omgivningen. Övertryck är högre tryck än omgivningen.",
    "examples": [
      "Fläkten skapade undertryck i rummet och övertryck i kanalen.",
      "Mätaren visar om det råder undertryck eller övertryck."
    ],
    "related": [
      "undertryck"
    ]
  },
  "ditfärd": {
    "opposite": "hitfärd",
    "description": "Ditfärden är resan till en plats. Hitfärden är resan därifrån mot platsen där man befinner sig.",
    "examples": [
      "Ditfärden tog längre tid än hitfärden.",
      "Vi planerade både ditfärd och hitfärd."
    ],
    "related": [
      "hitfärd"
    ]
  },
  "hitfärd": {
    "opposite": "ditfärd",
    "description": "Ditfärden är resan till en plats. Hitfärden är resan därifrån mot platsen där man befinner sig.",
    "examples": [
      "Ditfärden tog längre tid än hitfärden.",
      "Vi planerade både ditfärd och hitfärd."
    ],
    "related": [
      "ditfärd"
    ]
  },
  "distansundervisning": {
    "opposite": "närundervisning",
    "description": "Distansundervisning sker på avstånd. Närundervisning sker med lärare och elever på samma plats.",
    "examples": [
      "Skolan erbjuder både distansundervisning och närundervisning.",
      "Hon bytte från distansundervisning till närundervisning."
    ],
    "related": [
      "närundervisning"
    ]
  },
  "närundervisning": {
    "opposite": "distansundervisning",
    "description": "Distansundervisning sker på avstånd. Närundervisning sker med lärare och elever på samma plats.",
    "examples": [
      "Skolan erbjuder både distansundervisning och närundervisning.",
      "Hon bytte från distansundervisning till närundervisning."
    ],
    "related": [
      "distansundervisning"
    ]
  },
  "nederhylla": {
    "opposite": "överhylla",
    "description": "En nederhylla sitter längre ner. En överhylla sitter längre upp.",
    "examples": [
      "Skorna står på nederhyllan och väskorna på överhyllan.",
      "Flytta boken från överhyllan till nederhyllan."
    ],
    "related": [
      "överhylla"
    ]
  },
  "överhylla": {
    "opposite": "nederhylla",
    "description": "En nederhylla sitter längre ner. En överhylla sitter längre upp.",
    "examples": [
      "Skorna står på nederhyllan och väskorna på överhyllan.",
      "Flytta boken från överhyllan till nederhyllan."
    ],
    "related": [
      "nederhylla"
    ]
  },
  "högervriden": {
    "opposite": "vänstervriden",
    "description": "Högervriden betyder vriden åt höger. Vänstervriden betyder vriden åt vänster.",
    "examples": [
      "Den ena spiralen är högervriden och den andra vänstervriden.",
      "Kontrollera om gängan är höger- eller vänstervriden."
    ],
    "related": [
      "vänstervriden"
    ]
  },
  "vänstervriden": {
    "opposite": "högervriden",
    "description": "Högervriden betyder vriden åt höger. Vänstervriden betyder vriden åt vänster.",
    "examples": [
      "Den ena spiralen är högervriden och den andra vänstervriden.",
      "Kontrollera om gängan är höger- eller vänstervriden."
    ],
    "related": [
      "högervriden"
    ]
  },
  "kreditgivare": {
    "opposite": "kredittagare",
    "description": "En kreditgivare lånar ut pengar eller ger kredit. En kredittagare tar emot krediten.",
    "examples": [
      "Banken är kreditgivare och företaget kredittagare.",
      "Avtalet gäller mellan kreditgivaren och kredittagaren."
    ],
    "related": [
      "kredittagare"
    ]
  },
  "kredittagare": {
    "opposite": "kreditgivare",
    "description": "En kreditgivare lånar ut pengar eller ger kredit. En kredittagare tar emot krediten.",
    "examples": [
      "Banken är kreditgivare och företaget kredittagare.",
      "Avtalet gäller mellan kreditgivaren och kredittagaren."
    ],
    "related": [
      "kreditgivare"
    ]
  },
  "dödsattest": {
    "opposite": "födelseattest",
    "description": "En födelseattest intygar en födelse. En dödsattest intygar ett dödsfall.",
    "examples": [
      "Arkivet innehåller både födelseattest och dödsattest.",
      "Födelseattesten utfärdades i början av livet och dödsattesten i slutet."
    ],
    "related": [
      "födelseattest"
    ]
  },
  "födelseattest": {
    "opposite": "dödsattest",
    "description": "En födelseattest intygar en födelse. En dödsattest intygar ett dödsfall.",
    "examples": [
      "Arkivet innehåller både födelseattest och dödsattest.",
      "Födelseattesten utfärdades i början av livet och dödsattesten i slutet."
    ],
    "related": [
      "dödsattest"
    ]
  },
  "högoddsare": {
    "opposite": "lågoddsare",
    "description": "En högoddsare bedöms ha liten chans att vinna och ger högt odds. En lågoddsare bedöms ha stor chans och ger lågt odds.",
    "examples": [
      "Favoriten var lågoddsare, medan utmanaren var högoddsare.",
      "En högoddsare kan ge större vinst än en lågoddsare."
    ],
    "related": [
      "lågoddsare"
    ]
  },
  "lågoddsare": {
    "opposite": "högoddsare",
    "description": "En högoddsare bedöms ha liten chans att vinna och ger högt odds. En lågoddsare bedöms ha stor chans och ger lågt odds.",
    "examples": [
      "Favoriten var lågoddsare, medan utmanaren var högoddsare.",
      "En högoddsare kan ge större vinst än en lågoddsare."
    ],
    "related": [
      "högoddsare"
    ]
  },
  "anfallskrig": {
    "opposite": "försvarskrig",
    "description": "Ett anfallskrig inleds för att angripa. Ett försvarskrig förs för att försvara sig mot ett angrepp.",
    "examples": [
      "Historikern skilde mellan anfallskrig och försvarskrig.",
      "Landet beskrev striden som ett försvarskrig, inte ett anfallskrig."
    ],
    "related": [
      "försvarskrig"
    ]
  },
  "försvarskrig": {
    "opposite": "anfallskrig",
    "description": "Ett anfallskrig inleds för att angripa. Ett försvarskrig förs för att försvara sig mot ett angrepp.",
    "examples": [
      "Historikern skilde mellan anfallskrig och försvarskrig.",
      "Landet beskrev striden som ett försvarskrig, inte ett anfallskrig."
    ],
    "related": [
      "anfallskrig"
    ]
  },
  "inbuktning": {
    "opposite": "utbuktning",
    "description": "En inbuktning går inåt. En utbuktning buktar utåt.",
    "examples": [
      "Plåten hade en inbuktning på ena sidan och en utbuktning på den andra.",
      "Mätningen visar både inbuktning och utbuktning."
    ],
    "related": [
      "utbuktning"
    ]
  },
  "utbuktning": {
    "opposite": "inbuktning",
    "description": "En inbuktning går inåt. En utbuktning buktar utåt.",
    "examples": [
      "Plåten hade en inbuktning på ena sidan och en utbuktning på den andra.",
      "Mätningen visar både inbuktning och utbuktning."
    ],
    "related": [
      "inbuktning"
    ]
  },
  "underhus": {
    "opposite": "överhus",
    "description": "I ett tvåkammarparlament är underhuset den lägre kammaren och överhuset den högre.",
    "examples": [
      "Förslaget antogs av underhuset men stoppades i överhuset.",
      "Både underhus och överhus röstade om lagen."
    ],
    "related": [
      "överhus"
    ]
  },
  "överhus": {
    "opposite": "underhus",
    "description": "I ett tvåkammarparlament är underhuset den lägre kammaren och överhuset den högre.",
    "examples": [
      "Förslaget antogs av underhuset men stoppades i överhuset.",
      "Både underhus och överhus röstade om lagen."
    ],
    "related": [
      "underhus"
    ]
  },
  "inomhusväxt": {
    "opposite": "utomhusväxt",
    "description": "En inomhusväxt odlas främst inne. En utomhusväxt odlas främst ute.",
    "examples": [
      "Orkidén är en inomhusväxt och lavendeln en utomhusväxt.",
      "Kontrollera om plantan är inomhusväxt eller utomhusväxt."
    ],
    "related": [
      "utomhusväxt"
    ]
  },
  "utomhusväxt": {
    "opposite": "inomhusväxt",
    "description": "En inomhusväxt odlas främst inne. En utomhusväxt odlas främst ute.",
    "examples": [
      "Orkidén är en inomhusväxt och lavendeln en utomhusväxt.",
      "Kontrollera om plantan är inomhusväxt eller utomhusväxt."
    ],
    "related": [
      "inomhusväxt"
    ]
  },
  "högtrycksområde": {
    "opposite": "lågtrycksområde",
    "description": "Ett högtrycksområde har högre lufttryck än omgivningen. Ett lågtrycksområde har lägre lufttryck.",
    "examples": [
      "Högtrycksområdet gav klart väder, medan lågtrycksområdet gav regn.",
      "Kartan visar ett högtrycksområde bredvid ett lågtrycksområde."
    ],
    "related": [
      "lågtrycksområde"
    ]
  },
  "lågtrycksområde": {
    "opposite": "högtrycksområde",
    "description": "Ett högtrycksområde har högre lufttryck än omgivningen. Ett lågtrycksområde har lägre lufttryck.",
    "examples": [
      "Högtrycksområdet gav klart väder, medan lågtrycksområdet gav regn.",
      "Kartan visar ett högtrycksområde bredvid ett lågtrycksområde."
    ],
    "related": [
      "högtrycksområde"
    ]
  },
  "smalände": {
    "opposite": "tjockände",
    "description": "Smaländen är den smalaste änden. Tjockänden är den tjockaste.",
    "examples": [
      "Håll i tjockänden och peka med smaländen.",
      "Ägget har en smalände och en tjockände."
    ],
    "related": [
      "tjockände"
    ]
  },
  "tjockände": {
    "opposite": "smalände",
    "description": "Smaländen är den smalaste änden. Tjockänden är den tjockaste.",
    "examples": [
      "Håll i tjockänden och peka med smaländen.",
      "Ägget har en smalände och en tjockände."
    ],
    "related": [
      "smalände"
    ]
  },
  "lättflytande": {
    "opposite": "trögflytande",
    "description": "En lättflytande vätska rinner lätt. En trögflytande vätska rinner långsamt.",
    "examples": [
      "Vattnet är lättflytande, men sirapen är trögflytande.",
      "Den trögflytande oljan blev mer lättflytande när den värmdes."
    ],
    "related": [
      "trögflytande"
    ]
  },
  "trögflytande": {
    "opposite": "lättflytande",
    "description": "En lättflytande vätska rinner lätt. En trögflytande vätska rinner långsamt.",
    "examples": [
      "Vattnet är lättflytande, men sirapen är trögflytande.",
      "Den trögflytande oljan blev mer lättflytande när den värmdes."
    ],
    "related": [
      "lättflytande"
    ]
  },
  "rotända": {
    "opposite": "toppända",
    "description": "Rotändan är delen närmast roten. Toppändan är delen närmast toppen.",
    "examples": [
      "Sätt rotändan i jorden och låt toppändan peka uppåt.",
      "Grenen är grövre vid rotändan än vid toppändan."
    ],
    "related": [
      "toppända"
    ]
  },
  "toppända": {
    "opposite": "rotända",
    "description": "Rotändan är delen närmast roten. Toppändan är delen närmast toppen.",
    "examples": [
      "Sätt rotändan i jorden och låt toppändan peka uppåt.",
      "Grenen är grövre vid rotändan än vid toppändan."
    ],
    "related": [
      "rotända"
    ]
  },
  "parallellkoppling": {
    "opposite": "seriekoppling",
    "description": "Vid parallellkoppling ligger komponenter i parallella grenar. Vid seriekoppling ligger de efter varandra i samma krets.",
    "examples": [
      "Lamporna kopplades först i serie och sedan med parallellkoppling.",
      "Läraren jämförde seriekoppling med parallellkoppling."
    ],
    "related": [
      "seriekoppling"
    ]
  },
  "seriekoppling": {
    "opposite": "parallellkoppling",
    "description": "Vid parallellkoppling ligger komponenter i parallella grenar. Vid seriekoppling ligger de efter varandra i samma krets.",
    "examples": [
      "Lamporna kopplades först i serie och sedan med parallellkoppling.",
      "Läraren jämförde seriekoppling med parallellkoppling."
    ],
    "related": [
      "parallellkoppling"
    ]
  },
  "förvinter": {
    "opposite": "senvinter",
    "description": "Förvintern är vinterns tidiga del. Senvintern är den sena delen.",
    "examples": [
      "Den första snön kom på förvintern och tövädret på senvintern.",
      "Förvintern var mild, men senvintern blev kall."
    ],
    "related": [
      "senvinter"
    ]
  },
  "senvinter": {
    "opposite": "förvinter",
    "description": "Förvintern är vinterns tidiga del. Senvintern är den sena delen.",
    "examples": [
      "Den första snön kom på förvintern och tövädret på senvintern.",
      "Förvintern var mild, men senvintern blev kall."
    ],
    "related": [
      "förvinter"
    ]
  },
  "ljusögd": {
    "opposite": "mörkögd",
    "description": "Ljusögd betyder att ha ljusa ögon. Mörkögd betyder att ha mörka ögon.",
    "examples": [
      "Den ljusögda katten satt bredvid den mörkögda.",
      "I familjen finns både ljusögda och mörkögda personer."
    ],
    "related": [
      "mörkögd"
    ]
  },
  "mörkögd": {
    "opposite": "ljusögd",
    "description": "Ljusögd betyder att ha ljusa ögon. Mörkögd betyder att ha mörka ögon.",
    "examples": [
      "Den ljusögda katten satt bredvid den mörkögda.",
      "I familjen finns både ljusögda och mörkögda personer."
    ],
    "related": [
      "ljusögd"
    ]
  },
  "förhöst": {
    "opposite": "senhöst",
    "description": "Förhösten är höstens tidiga del. Senhösten är den sena delen.",
    "examples": [
      "Förhösten var varm, men senhösten blev kylig.",
      "Äpplena mognar på förhösten och löven faller på senhösten."
    ],
    "related": [
      "senhöst"
    ]
  },
  "senhöst": {
    "opposite": "förhöst",
    "description": "Förhösten är höstens tidiga del. Senhösten är den sena delen.",
    "examples": [
      "Förhösten var varm, men senhösten blev kylig.",
      "Äpplena mognar på förhösten och löven faller på senhösten."
    ],
    "related": [
      "förhöst"
    ]
  },
  "beständighet": {
    "opposite": "obeständighet",
    "description": "Beständighet innebär att något håller eller består. Obeständighet innebär att det lätt förändras eller försvinner.",
    "examples": [
      "Stenen har stor beständighet, medan färgen visar obeständighet.",
      "Testet mäter materialets beständighet och obeständighet."
    ],
    "related": [
      "obeständighet"
    ]
  },
  "obeständighet": {
    "opposite": "beständighet",
    "description": "Beständighet innebär att något håller eller består. Obeständighet innebär att det lätt förändras eller försvinner.",
    "examples": [
      "Stenen har stor beständighet, medan färgen visar obeständighet.",
      "Testet mäter materialets beständighet och obeständighet."
    ],
    "related": [
      "beständighet"
    ]
  },
  "västvart": {
    "opposite": "östvart",
    "description": "Västvart betyder i riktning mot väster. Östvart betyder i riktning mot öster.",
    "examples": [
      "Det ena tåget går västvart och det andra östvart.",
      "Fåglarna flög först östvart och senare västvart."
    ],
    "related": [
      "östvart"
    ]
  },
  "östvart": {
    "opposite": "västvart",
    "description": "Västvart betyder i riktning mot väster. Östvart betyder i riktning mot öster.",
    "examples": [
      "Det ena tåget går västvart och det andra östvart.",
      "Fåglarna flög först östvart och senare västvart."
    ],
    "related": [
      "västvart"
    ]
  },
  "nordvart": {
    "opposite": "sydvart",
    "description": "Nordvart betyder i riktning mot norr. Sydvart betyder i riktning mot söder.",
    "examples": [
      "Vägen går nordvart här och sydvart på andra sidan.",
      "De reste nordvart på våren och sydvart på hösten."
    ],
    "related": [
      "sydvart"
    ]
  },
  "sydvart": {
    "opposite": "nordvart",
    "description": "Nordvart betyder i riktning mot norr. Sydvart betyder i riktning mot söder.",
    "examples": [
      "Vägen går nordvart här och sydvart på andra sidan.",
      "De reste nordvart på våren och sydvart på hösten."
    ],
    "related": [
      "nordvart"
    ]
  },
  "monotypisk": {
    "opposite": "polytypisk",
    "description": "Monotypisk betyder att en grupp bara har en typ eller art. Polytypisk betyder att den har flera.",
    "examples": [
      "Det ena släktet är monotypiskt och det andra polytypiskt.",
      "Forskaren avgjorde om gruppen var monotypisk eller polytypisk."
    ],
    "related": [
      "polytypisk"
    ]
  },
  "polytypisk": {
    "opposite": "monotypisk",
    "description": "Monotypisk betyder att en grupp bara har en typ eller art. Polytypisk betyder att den har flera.",
    "examples": [
      "Det ena släktet är monotypiskt och det andra polytypiskt.",
      "Forskaren avgjorde om gruppen var monotypisk eller polytypisk."
    ],
    "related": [
      "monotypisk"
    ]
  },
  "oparfymerad": {
    "opposite": "parfymerad",
    "description": "Oparfymerad betyder utan tillsatt parfym. Parfymerad betyder att parfym har tillsatts.",
    "examples": [
      "Hon valde oparfymerad tvål i stället för parfymerad.",
      "Krämen finns både oparfymerad och parfymerad."
    ],
    "related": [
      "parfymerad"
    ]
  },
  "parfymerad": {
    "opposite": "oparfymerad",
    "description": "Oparfymerad betyder utan tillsatt parfym. Parfymerad betyder att parfym har tillsatts.",
    "examples": [
      "Hon valde oparfymerad tvål i stället för parfymerad.",
      "Krämen finns både oparfymerad och parfymerad."
    ],
    "related": [
      "oparfymerad"
    ]
  },
  "medsols": {
    "opposite": "motsols",
    "description": "Medsols är samma riktning som visarna på en klocka. Motsols är den motsatta riktningen.",
    "examples": [
      "Vrid ratten medsols för att öka och motsols för att minska.",
      "Löparna sprang ett varv medsols och ett motsols."
    ],
    "related": [
      "motsols"
    ]
  },
  "motsols": {
    "opposite": "medsols",
    "description": "Medsols är samma riktning som visarna på en klocka. Motsols är den motsatta riktningen.",
    "examples": [
      "Vrid ratten medsols för att öka och motsols för att minska.",
      "Löparna sprang ett varv medsols och ett motsols."
    ],
    "related": [
      "medsols"
    ]
  },
  "räntehöjning": {
    "opposite": "räntesänkning",
    "description": "En räntehöjning gör räntan högre. En räntesänkning gör den lägre.",
    "examples": [
      "Efter en räntehöjning kom senare en räntesänkning.",
      "Banken valde räntesänkning i stället för räntehöjning."
    ],
    "related": [
      "räntesänkning"
    ]
  },
  "räntesänkning": {
    "opposite": "räntehöjning",
    "description": "En räntehöjning gör räntan högre. En räntesänkning gör den lägre.",
    "examples": [
      "Efter en räntehöjning kom senare en räntesänkning.",
      "Banken valde räntesänkning i stället för räntehöjning."
    ],
    "related": [
      "räntehöjning"
    ]
  },
  "straffbar": {
    "opposite": "straffri",
    "description": "Straffbar betyder att en handling kan leda till straff. Straffri betyder att den inte straffas.",
    "examples": [
      "Handlingen är straffbar, medan det andra beteendet är straffritt.",
      "Domstolen prövar om personen är straffbar eller straffri."
    ],
    "related": [
      "straffri"
    ]
  },
  "straffri": {
    "opposite": "straffbar",
    "description": "Straffbar betyder att en handling kan leda till straff. Straffri betyder att den inte straffas.",
    "examples": [
      "Handlingen är straffbar, medan det andra beteendet är straffritt.",
      "Domstolen prövar om personen är straffbar eller straffri."
    ],
    "related": [
      "straffbar"
    ]
  },
  "inomhuscykling": {
    "opposite": "utomhuscykling",
    "description": "Inomhuscykling sker inne, ofta på träningscykel eller bana. Utomhuscykling sker ute.",
    "examples": [
      "På vintern väljer hon inomhuscykling och på sommaren utomhuscykling.",
      "Klubben erbjuder både inomhuscykling och utomhuscykling."
    ],
    "related": [
      "utomhuscykling"
    ]
  },
  "utomhuscykling": {
    "opposite": "inomhuscykling",
    "description": "Inomhuscykling sker inne, ofta på träningscykel eller bana. Utomhuscykling sker ute.",
    "examples": [
      "På vintern väljer hon inomhuscykling och på sommaren utomhuscykling.",
      "Klubben erbjuder både inomhuscykling och utomhuscykling."
    ],
    "related": [
      "inomhuscykling"
    ]
  },
  "gammalstavning": {
    "opposite": "nystavning",
    "description": "Gammalstavning är en äldre stavningsform. Nystavning är en nyare reformerad stavning.",
    "examples": [
      "Texten använder gammalstavning, men utgåvan bredvid har nystavning.",
      "Ordboken visar både gammalstavning och nystavning."
    ],
    "related": [
      "nystavning"
    ]
  },
  "nystavning": {
    "opposite": "gammalstavning",
    "description": "Gammalstavning är en äldre stavningsform. Nystavning är en nyare reformerad stavning.",
    "examples": [
      "Texten använder gammalstavning, men utgåvan bredvid har nystavning.",
      "Ordboken visar både gammalstavning och nystavning."
    ],
    "related": [
      "gammalstavning"
    ]
  },
  "inflyttningskommun": {
    "opposite": "utflyttningskommun",
    "description": "En inflyttningskommun får fler invånare genom flyttning. En utflyttningskommun förlorar invånare genom flyttning.",
    "examples": [
      "Orten blev inflyttningskommun efter att ha varit utflyttningskommun.",
      "Rapporten jämför inflyttningskommuner med utflyttningskommuner."
    ],
    "related": [
      "utflyttningskommun"
    ]
  },
  "utflyttningskommun": {
    "opposite": "inflyttningskommun",
    "description": "En inflyttningskommun får fler invånare genom flyttning. En utflyttningskommun förlorar invånare genom flyttning.",
    "examples": [
      "Orten blev inflyttningskommun efter att ha varit utflyttningskommun.",
      "Rapporten jämför inflyttningskommuner med utflyttningskommuner."
    ],
    "related": [
      "inflyttningskommun"
    ]
  },
  "innesko": {
    "opposite": "utesko",
    "description": "En innesko används inomhus. En utesko används utomhus.",
    "examples": [
      "Byt från uteskor till inneskor i hallen.",
      "Hon har en innesko till gymmet och en utesko till promenaden."
    ],
    "related": [
      "utesko"
    ]
  },
  "utesko": {
    "opposite": "innesko",
    "description": "En innesko används inomhus. En utesko används utomhus.",
    "examples": [
      "Byt från uteskor till inneskor i hallen.",
      "Hon har en innesko till gymmet och en utesko till promenaden."
    ],
    "related": [
      "innesko"
    ]
  },
  "koffeinfri": {
    "opposite": "koffeinhaltig",
    "description": "Koffeinfri betyder utan koffein. Koffeinhaltig betyder att något innehåller koffein.",
    "examples": [
      "Teet finns som koffeinfritt och koffeinhaltigt.",
      "På kvällen valde han koffeinfritt i stället för koffeinhaltigt kaffe."
    ],
    "related": [
      "koffeinhaltig"
    ]
  },
  "koffeinhaltig": {
    "opposite": "koffeinfri",
    "description": "Koffeinfri betyder utan koffein. Koffeinhaltig betyder att något innehåller koffein.",
    "examples": [
      "Teet finns som koffeinfritt och koffeinhaltigt.",
      "På kvällen valde han koffeinfritt i stället för koffeinhaltigt kaffe."
    ],
    "related": [
      "koffeinfri"
    ]
  },
  "inomhustemperatur": {
    "opposite": "utomhustemperatur",
    "description": "Inomhustemperaturen mäts inne. Utomhustemperaturen mäts ute.",
    "examples": [
      "Inomhustemperaturen var tjugo grader och utomhustemperaturen fem.",
      "Termometern visar både inomhustemperatur och utomhustemperatur."
    ],
    "related": [
      "utomhustemperatur"
    ]
  },
  "utomhustemperatur": {
    "opposite": "inomhustemperatur",
    "description": "Inomhustemperaturen mäts inne. Utomhustemperaturen mäts ute.",
    "examples": [
      "Inomhustemperaturen var tjugo grader och utomhustemperaturen fem.",
      "Termometern visar både inomhustemperatur och utomhustemperatur."
    ],
    "related": [
      "inomhustemperatur"
    ]
  },
  "demobilisering": {
    "opposite": "mobilisering",
    "description": "Mobilisering innebär att resurser eller trupper görs redo. Demobilisering innebär att de avvecklas efteråt.",
    "examples": [
      "Mobilisering skedde före konflikten och demobilisering efter den.",
      "Planen omfattar både mobilisering och demobilisering."
    ],
    "related": [
      "mobilisering"
    ]
  },
  "mobilisering": {
    "opposite": "demobilisering",
    "description": "Mobilisering innebär att resurser eller trupper görs redo. Demobilisering innebär att de avvecklas efteråt.",
    "examples": [
      "Mobilisering skedde före konflikten och demobilisering efter den.",
      "Planen omfattar både mobilisering och demobilisering."
    ],
    "related": [
      "demobilisering"
    ]
  },
  "höstsådd": {
    "opposite": "vårsådd",
    "description": "Höstsådd görs på hösten. Vårsådd görs på våren.",
    "examples": [
      "En del av fältet fick höstsådd och resten vårsådd.",
      "Höstsådd gror före vintern, medan vårsådd börjar på våren."
    ],
    "related": [
      "vårsådd"
    ]
  },
  "vårsådd": {
    "opposite": "höstsådd",
    "description": "Höstsådd görs på hösten. Vårsådd görs på våren.",
    "examples": [
      "En del av fältet fick höstsådd och resten vårsådd.",
      "Höstsådd gror före vintern, medan vårsådd börjar på våren."
    ],
    "related": [
      "höstsådd"
    ]
  },
  "avkriminalisering": {
    "opposite": "kriminalisering",
    "description": "Kriminalisering gör en handling straffbar. Avkriminalisering tar bort straffansvaret.",
    "examples": [
      "Lagen innebar kriminalisering, men reformen senare gav avkriminalisering.",
      "Debatten gällde kriminalisering eller avkriminalisering."
    ],
    "related": [
      "kriminalisering"
    ]
  },
  "kriminalisering": {
    "opposite": "avkriminalisering",
    "description": "Kriminalisering gör en handling straffbar. Avkriminalisering tar bort straffansvaret.",
    "examples": [
      "Lagen innebar kriminalisering, men reformen senare gav avkriminalisering.",
      "Debatten gällde kriminalisering eller avkriminalisering."
    ],
    "related": [
      "avkriminalisering"
    ]
  },
  "oredighet": {
    "opposite": "redighet",
    "description": "Redighet innebär klarhet och ordning. Oredighet innebär oklarhet eller förvirring.",
    "examples": [
      "Textens redighet gjorde den lättläst, medan utkastet präglades av oredighet.",
      "Hon gick från oredighet i tanken till redighet."
    ],
    "related": [
      "redighet"
    ]
  },
  "redighet": {
    "opposite": "oredighet",
    "description": "Redighet innebär klarhet och ordning. Oredighet innebär oklarhet eller förvirring.",
    "examples": [
      "Textens redighet gjorde den lättläst, medan utkastet präglades av oredighet.",
      "Hon gick från oredighet i tanken till redighet."
    ],
    "related": [
      "oredighet"
    ]
  },
  "illegalitet": {
    "opposite": "legalitet",
    "description": "Legalitet innebär att något är lagligt. Illegalitet innebär att det strider mot lagen.",
    "examples": [
      "Domstolen prövade handlingens legalitet eller illegalitet.",
      "Tillståndet gav verksamheten legalitet efter en tid av illegalitet."
    ],
    "related": [
      "legalitet"
    ]
  },
  "legalitet": {
    "opposite": "illegalitet",
    "description": "Legalitet innebär att något är lagligt. Illegalitet innebär att det strider mot lagen.",
    "examples": [
      "Domstolen prövade handlingens legalitet eller illegalitet.",
      "Tillståndet gav verksamheten legalitet efter en tid av illegalitet."
    ],
    "related": [
      "illegalitet"
    ]
  },
  "konkavitet": {
    "opposite": "konvexitet",
    "description": "Konkavitet innebär att en yta buktar inåt. Konvexitet innebär att den buktar utåt.",
    "examples": [
      "Linsen har konvexitet på ena sidan och konkavitet på den andra.",
      "Mätningen skiljer mellan konkavitet och konvexitet."
    ],
    "related": [
      "konvexitet"
    ]
  },
  "konvexitet": {
    "opposite": "konkavitet",
    "description": "Konkavitet innebär att en yta buktar inåt. Konvexitet innebär att den buktar utåt.",
    "examples": [
      "Linsen har konvexitet på ena sidan och konkavitet på den andra.",
      "Mätningen skiljer mellan konkavitet och konvexitet."
    ],
    "related": [
      "konkavitet"
    ]
  },
  "otjänlighet": {
    "opposite": "tjänlighet",
    "description": "Tjänlighet innebär att något är lämpligt att använda. Otjänlighet innebär att det inte är lämpligt.",
    "examples": [
      "Provet visade vattnets tjänlighet och avfärdade misstanken om otjänlighet.",
      "Inspektionen bedömer matens tjänlighet eller otjänlighet."
    ],
    "related": [
      "tjänlighet"
    ]
  },
  "tjänlighet": {
    "opposite": "otjänlighet",
    "description": "Tjänlighet innebär att något är lämpligt att använda. Otjänlighet innebär att det inte är lämpligt.",
    "examples": [
      "Provet visade vattnets tjänlighet och avfärdade misstanken om otjänlighet.",
      "Inspektionen bedömer matens tjänlighet eller otjänlighet."
    ],
    "related": [
      "otjänlighet"
    ]
  },
  "irregularitet": {
    "opposite": "regularitet",
    "description": "Regularitet innebär regelbundenhet. Irregularitet innebär avvikelse eller oregelbundenhet.",
    "examples": [
      "Mönstret visar regularitet, men kanten har en tydlig irregularitet.",
      "Forskaren jämförde regularitet med irregularitet."
    ],
    "related": [
      "regularitet"
    ]
  },
  "regularitet": {
    "opposite": "irregularitet",
    "description": "Regularitet innebär regelbundenhet. Irregularitet innebär avvikelse eller oregelbundenhet.",
    "examples": [
      "Mönstret visar regularitet, men kanten har en tydlig irregularitet.",
      "Forskaren jämförde regularitet med irregularitet."
    ],
    "related": [
      "irregularitet"
    ]
  },
  "oumbärlighet": {
    "opposite": "umbärlighet",
    "description": "Oumbärlighet innebär att något inte kan undvaras. Umbärlighet innebär att det kan undvaras.",
    "examples": [
      "Vattnets oumbärlighet är tydlig, medan prydnadens umbärlighet är större.",
      "Bedömningen gällde delens oumbärlighet eller umbärlighet."
    ],
    "related": [
      "umbärlighet"
    ]
  },
  "umbärlighet": {
    "opposite": "oumbärlighet",
    "description": "Oumbärlighet innebär att något inte kan undvaras. Umbärlighet innebär att det kan undvaras.",
    "examples": [
      "Vattnets oumbärlighet är tydlig, medan prydnadens umbärlighet är större.",
      "Bedömningen gällde delens oumbärlighet eller umbärlighet."
    ],
    "related": [
      "oumbärlighet"
    ]
  },
  "otillräknelighet": {
    "opposite": "tillräknelighet",
    "description": "Tillräknelighet innebär förmåga att förstå och ansvara för sina handlingar. Otillräknelighet innebär att denna förmåga saknas.",
    "examples": [
      "Domstolen prövade personens tillräknelighet eller otillräknelighet.",
      "Utredningen fann tillräknelighet och inte otillräknelighet."
    ],
    "related": [
      "tillräknelighet"
    ]
  },
  "tillräknelighet": {
    "opposite": "otillräknelighet",
    "description": "Tillräknelighet innebär förmåga att förstå och ansvara för sina handlingar. Otillräknelighet innebär att denna förmåga saknas.",
    "examples": [
      "Domstolen prövade personens tillräknelighet eller otillräknelighet.",
      "Utredningen fann tillräknelighet och inte otillräknelighet."
    ],
    "related": [
      "otillräknelighet"
    ]
  },
  "pietetsfullhet": {
    "opposite": "pietetslöshet",
    "description": "Pietetsfullhet innebär varsam respekt för något värdefullt. Pietetslöshet innebär brist på sådan respekt.",
    "examples": [
      "Renoveringen gjordes med pietetsfullhet i stället för pietetslöshet.",
      "Pietetsfullhet bevarade huset, medan pietetslöshet hade skadat det."
    ],
    "related": [
      "pietetslöshet"
    ]
  },
  "pietetslöshet": {
    "opposite": "pietetsfullhet",
    "description": "Pietetsfullhet innebär varsam respekt för något värdefullt. Pietetslöshet innebär brist på sådan respekt.",
    "examples": [
      "Renoveringen gjordes med pietetsfullhet i stället för pietetslöshet.",
      "Pietetsfullhet bevarade huset, medan pietetslöshet hade skadat det."
    ],
    "related": [
      "pietetsfullhet"
    ]
  },
  "besticklighet": {
    "opposite": "obesticklighet",
    "description": "Besticklighet innebär att kunna påverkas med mutor. Obesticklighet innebär att inte kunna köpas.",
    "examples": [
      "Tjänstens obesticklighet var viktig, och all besticklighet skulle motverkas.",
      "Granskningen prövade besticklighet och obesticklighet."
    ],
    "related": [
      "obesticklighet"
    ]
  },
  "obesticklighet": {
    "opposite": "besticklighet",
    "description": "Besticklighet innebär att kunna påverkas med mutor. Obesticklighet innebär att inte kunna köpas.",
    "examples": [
      "Tjänstens obesticklighet var viktig, och all besticklighet skulle motverkas.",
      "Granskningen prövade besticklighet och obesticklighet."
    ],
    "related": [
      "besticklighet"
    ]
  },
  "mutbarhet": {
    "opposite": "omutbarhet",
    "description": "Mutbarhet innebär att kunna mutas. Omutbarhet innebär att inte låta sig mutas.",
    "examples": [
      "Omutbarhet krävs i rollen, medan mutbarhet är ett allvarligt problem.",
      "Utredningen fann omutbarhet och inga tecken på mutbarhet."
    ],
    "related": [
      "omutbarhet"
    ]
  },
  "omutbarhet": {
    "opposite": "mutbarhet",
    "description": "Mutbarhet innebär att kunna mutas. Omutbarhet innebär att inte låta sig mutas.",
    "examples": [
      "Omutbarhet krävs i rollen, medan mutbarhet är ett allvarligt problem.",
      "Utredningen fann omutbarhet och inga tecken på mutbarhet."
    ],
    "related": [
      "mutbarhet"
    ]
  },
  "otämjbar": {
    "opposite": "tämjbar",
    "description": "Tämjbar betyder möjlig att tämja. Otämjbar betyder att inte kunna tämjas.",
    "examples": [
      "Djuret verkade först otämjbart men visade sig vara tämjbart.",
      "Arten är svår men tämjbar, inte helt otämjbar."
    ],
    "related": [
      "tämjbar"
    ]
  },
  "tämjbar": {
    "opposite": "otämjbar",
    "description": "Tämjbar betyder möjlig att tämja. Otämjbar betyder att inte kunna tämjas.",
    "examples": [
      "Djuret verkade först otämjbart men visade sig vara tämjbart.",
      "Arten är svår men tämjbar, inte helt otämjbar."
    ],
    "related": [
      "otämjbar"
    ]
  },
  "köpstark": {
    "opposite": "köpsvag",
    "description": "Köpstark betyder att ha stor köpkraft. Köpsvag betyder att ha liten köpkraft.",
    "examples": [
      "En köpstark grupp har större utrymme än en köpsvag.",
      "Marknaden riktar sig till både köpstarka och köpsvaga kunder."
    ],
    "related": [
      "köpsvag"
    ]
  },
  "köpsvag": {
    "opposite": "köpstark",
    "description": "Köpstark betyder att ha stor köpkraft. Köpsvag betyder att ha liten köpkraft.",
    "examples": [
      "En köpstark grupp har större utrymme än en köpsvag.",
      "Marknaden riktar sig till både köpstarka och köpsvaga kunder."
    ],
    "related": [
      "köpstark"
    ]
  },
  "bokningsbar": {
    "opposite": "obokningsbar",
    "description": "Bokningsbar betyder att något går att boka. Obokningsbar betyder att det inte går att boka.",
    "examples": [
      "Tiden är bokningsbar på morgonen men obokningsbar på kvällen.",
      "Rummet blev obokningsbart efter att tidigare ha varit bokningsbart."
    ],
    "related": [
      "obokningsbar"
    ]
  },
  "obokningsbar": {
    "opposite": "bokningsbar",
    "description": "Bokningsbar betyder att något går att boka. Obokningsbar betyder att det inte går att boka.",
    "examples": [
      "Tiden är bokningsbar på morgonen men obokningsbar på kvällen.",
      "Rummet blev obokningsbart efter att tidigare ha varit bokningsbart."
    ],
    "related": [
      "bokningsbar"
    ]
  },
  "inomhuslek": {
    "opposite": "utomhuslek",
    "description": "Inomhuslek sker inne. Utomhuslek sker ute.",
    "examples": [
      "Regnet ledde till inomhuslek i stället för utomhuslek.",
      "Förskolan planerar både inomhuslek och utomhuslek."
    ],
    "related": [
      "utomhuslek"
    ]
  },
  "utomhuslek": {
    "opposite": "inomhuslek",
    "description": "Inomhuslek sker inne. Utomhuslek sker ute.",
    "examples": [
      "Regnet ledde till inomhuslek i stället för utomhuslek.",
      "Förskolan planerar både inomhuslek och utomhuslek."
    ],
    "related": [
      "inomhuslek"
    ]
  },
  "oregelmässighet": {
    "opposite": "regelmässighet",
    "description": "Regelmässighet innebär att följa ett regelbundet mönster. Oregelmässighet innebär avvikelser från mönstret.",
    "examples": [
      "Pulsen visade regelmässighet och inga tecken på oregelmässighet.",
      "Kontrollen mäter regelmässighet och oregelmässighet."
    ],
    "related": [
      "regelmässighet"
    ]
  },
  "regelmässighet": {
    "opposite": "oregelmässighet",
    "description": "Regelmässighet innebär att följa ett regelbundet mönster. Oregelmässighet innebär avvikelser från mönstret.",
    "examples": [
      "Pulsen visade regelmässighet och inga tecken på oregelmässighet.",
      "Kontrollen mäter regelmässighet och oregelmässighet."
    ],
    "related": [
      "oregelmässighet"
    ]
  },
  "flärdfull": {
    "opposite": "flärdlös",
    "description": "Flärdfull betyder präglad av prakt och utsmyckning. Flärdlös betyder enkel och utan flärd.",
    "examples": [
      "Den flärdfulla salen låg bredvid ett flärdlöst rum.",
      "Hon valde en flärdlös stil i stället för en flärdfull."
    ],
    "related": [
      "flärdlös"
    ]
  },
  "flärdlös": {
    "opposite": "flärdfull",
    "description": "Flärdfull betyder präglad av prakt och utsmyckning. Flärdlös betyder enkel och utan flärd.",
    "examples": [
      "Den flärdfulla salen låg bredvid ett flärdlöst rum.",
      "Hon valde en flärdlös stil i stället för en flärdfull."
    ],
    "related": [
      "flärdfull"
    ]
  },
  "otänkbarhet": {
    "opposite": "tänkbarhet",
    "description": "Tänkbarhet innebär att något går att föreställa sig. Otänkbarhet innebär att det inte går eller verkar omöjligt.",
    "examples": [
      "Förslaget gick från otänkbarhet till tänkbarhet.",
      "De diskuterade både planens tänkbarhet och dess tidigare otänkbarhet."
    ],
    "related": [
      "tänkbarhet"
    ]
  },
  "tänkbarhet": {
    "opposite": "otänkbarhet",
    "description": "Tänkbarhet innebär att något går att föreställa sig. Otänkbarhet innebär att det inte går eller verkar omöjligt.",
    "examples": [
      "Förslaget gick från otänkbarhet till tänkbarhet.",
      "De diskuterade både planens tänkbarhet och dess tidigare otänkbarhet."
    ],
    "related": [
      "otänkbarhet"
    ]
  },
  "osänkbarhet": {
    "opposite": "sänkbarhet",
    "description": "Sänkbarhet innebär att något kan sänkas. Osänkbarhet innebär att det inte kan sänkas.",
    "examples": [
      "Fartygets påstådda osänkbarhet ställdes mot dess verkliga sänkbarhet.",
      "Testet bedömer sänkbarhet och osänkbarhet."
    ],
    "related": [
      "sänkbarhet"
    ]
  },
  "sänkbarhet": {
    "opposite": "osänkbarhet",
    "description": "Sänkbarhet innebär att något kan sänkas. Osänkbarhet innebär att det inte kan sänkas.",
    "examples": [
      "Fartygets påstådda osänkbarhet ställdes mot dess verkliga sänkbarhet.",
      "Testet bedömer sänkbarhet och osänkbarhet."
    ],
    "related": [
      "osänkbarhet"
    ]
  },
  "overkställbar": {
    "opposite": "verkställbar",
    "description": "Verkställbar betyder möjlig att genomföra eller verkställa. Overkställbar betyder att den inte kan verkställas.",
    "examples": [
      "Domen är verkställbar, men det tidigare beslutet var overkställbart.",
      "Myndigheten avgör om åtgärden är verkställbar eller overkställbar."
    ],
    "related": [
      "verkställbar"
    ]
  },
  "verkställbar": {
    "opposite": "overkställbar",
    "description": "Verkställbar betyder möjlig att genomföra eller verkställa. Overkställbar betyder att den inte kan verkställas.",
    "examples": [
      "Domen är verkställbar, men det tidigare beslutet var overkställbart.",
      "Myndigheten avgör om åtgärden är verkställbar eller overkställbar."
    ],
    "related": [
      "overkställbar"
    ]
  },
  "otillåtlighet": {
    "opposite": "tillåtlighet",
    "description": "Tillåtlighet innebär att något är tillåtet. Otillåtlighet innebär att det inte är tillåtet.",
    "examples": [
      "Nämnden prövade åtgärdens tillåtlighet eller otillåtlighet.",
      "Regeln klargör både tillåtlighet och otillåtlighet."
    ],
    "related": [
      "tillåtlighet"
    ]
  },
  "tillåtlighet": {
    "opposite": "otillåtlighet",
    "description": "Tillåtlighet innebär att något är tillåtet. Otillåtlighet innebär att det inte är tillåtet.",
    "examples": [
      "Nämnden prövade åtgärdens tillåtlighet eller otillåtlighet.",
      "Regeln klargör både tillåtlighet och otillåtlighet."
    ],
    "related": [
      "otillåtlighet"
    ]
  }
};
