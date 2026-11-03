import fs from 'node:fs';
import path from 'node:path';

// This list is intentionally curated. Do not infer antonyms from word prefixes.
const curatedPairs = [
  {
    "a": "stor",
    "b": "liten",
    "description": "Stor och liten beskriver hur stort något är.",
    "examples": [
      "Huset är stort, men stugan är liten.",
      "Vi valde ett stort bord i stället för ett litet."
    ]
  },
  {
    "a": "snabb",
    "b": "långsam",
    "description": "Snabb och långsam beskriver hur fort något går.",
    "examples": [
      "Haren är snabb, men snigeln är långsam.",
      "Den snabba cyklisten körde förbi den långsamma cyklisten."
    ]
  },
  {
    "a": "varm",
    "b": "kall",
    "description": "Varm och kall beskriver olika temperaturer.",
    "examples": [
      "Teet är varmt, men saften är kall.",
      "På sommaren är luften ofta varm. På vintern är den ofta kall."
    ]
  },
  {
    "a": "glad",
    "b": "ledsen",
    "description": "Glad och ledsen beskriver olika känslor.",
    "examples": [
      "Hon blev glad när hon vann och ledsen när hon förlorade.",
      "Han var ledsen på morgonen men glad efter besöket."
    ]
  },
  {
    "a": "ljus",
    "b": "mörk",
    "description": "Ljus och mörk kan beskriva ett rum eller en färg.",
    "examples": [
      "Rummet är ljust på dagen och mörkt på natten.",
      "Hon valde en ljus tröja och mörka byxor."
    ]
  },
  {
    "a": "hög",
    "b": "låg",
    "description": "Hög och låg kan beskriva en höjd eller en nivå.",
    "examples": [
      "Det höga huset står bredvid ett lågt hus.",
      "Hyllan är för hög för mig. Jag behöver en lägre hylla."
    ]
  },
  {
    "a": "ung",
    "b": "gammal",
    "description": "Ung och gammal beskriver olika åldrar. När gammal handlar om en sak kan motsatsen i stället vara ny.",
    "examples": [
      "Den unga hunden leker med den gamla hunden.",
      "Trädet vid huset är gammalt, men trädet vid grinden är ungt."
    ]
  },
  {
    "a": "full",
    "b": "tom",
    "description": "Full betyder här att det inte finns plats för mer. Tom betyder att inget finns i.",
    "examples": [
      "Glaset är fullt, men koppen är tom.",
      "Lådan var tom innan vi fyllde den. Nu är den full."
    ]
  },
  {
    "a": "öppen",
    "b": "stängd",
    "description": "Öppen och stängd kan beskriva en dörr eller en butik.",
    "examples": [
      "Butiken är öppen på dagen och stängd på natten.",
      "Dörren är öppen, men fönstret är stängt."
    ]
  },
  {
    "a": "lätt",
    "b": "svår",
    "description": "Här handlar lätt och svår om hur enkel en uppgift är. När lätt handlar om vikt är motsatsen tung.",
    "examples": [
      "Den första uppgiften var lätt, men nästa var svår.",
      "Provet var svårt för mig men lätt för min kompis."
    ]
  },
  {
    "a": "enkel",
    "b": "komplicerad",
    "description": "Enkel betyder att något är lätt att förstå eller göra. Komplicerad betyder att något har många delar eller är svårt att förstå.",
    "examples": [
      "Regeln är enkel, men undantaget är komplicerat.",
      "Den enkla planen var lätt att följa. Den komplicerade planen var svår att följa."
    ]
  },
  {
    "a": "ren",
    "b": "smutsig",
    "description": "Ren betyder att något är utan smuts. Smutsig betyder att det finns smuts på något.",
    "examples": [
      "Skjortan är ren, men byxorna är smutsiga.",
      "Bilen var smutsig före tvätten och ren efteråt."
    ]
  },
  {
    "a": "stark",
    "b": "svag",
    "description": "Stark och svag kan beskriva kraft, vind eller smak.",
    "examples": [
      "Den starka vinden blev svagare under kvällen.",
      "Kaffet är starkt i dag. I går var det svagt."
    ]
  },
  {
    "a": "hård",
    "b": "mjuk",
    "description": "Hård och mjuk beskriver hur något känns när man trycker på det.",
    "examples": [
      "Kudden är mjuk, men bänken är hård.",
      "Brödet är mjukt när det är färskt och hårt när det har torkat."
    ]
  },
  {
    "a": "tidig",
    "b": "sen",
    "description": "Tidig och sen beskriver när något händer jämfört med en bestämd tid.",
    "examples": [
      "Det första tåget var tidigt, men nästa tåg var sent.",
      "Vi åt en tidig lunch och en sen middag."
    ]
  },
  {
    "a": "billig",
    "b": "dyr",
    "description": "Billig betyder att något kostar lite. Dyr betyder att något kostar mycket.",
    "examples": [
      "Den billiga pennan kostar tio kronor. Den dyra kostar hundra.",
      "Vi valde ett billigt hotell i stället för ett dyrt."
    ]
  },
  {
    "a": "bred",
    "b": "smal",
    "description": "Bred och smal beskriver hur mycket plats något tar från sida till sida.",
    "examples": [
      "Den breda vägen leder till en smal gränd.",
      "Vi valde en bred hylla i stället för en smal."
    ]
  },
  {
    "a": "torr",
    "b": "våt",
    "description": "Torr betyder att något inte är vått. Våt betyder att det finns vatten eller annan vätska på eller i något.",
    "examples": [
      "Handduken är torr, men jackan är våt.",
      "Skorna var våta efter regnet. Nu är de torra."
    ]
  },
  {
    "a": "tyst",
    "b": "högljudd",
    "description": "Tyst och högljudd beskriver hur mycket ljud någon eller något gör.",
    "examples": [
      "Klassen var högljudd på rasten men tyst under provet.",
      "Han var högljudd under matchen och tyst på vägen hem."
    ]
  },
  {
    "a": "snäll",
    "b": "elak",
    "description": "Snäll och elak beskriver hur någon behandlar andra.",
    "examples": [
      "Det är snällt att hjälpa och elakt att retas.",
      "Hon är snäll mot sin vän och säger inga elaka saker."
    ]
  },
  {
    "a": "frisk",
    "b": "sjuk",
    "description": "Frisk och sjuk beskriver hur någon mår. Frisk betyder här att inte vara sjuk.",
    "examples": [
      "Hon var sjuk i går men är frisk i dag.",
      "Barnet stannade hemma när det var sjukt och gick till skolan när det var friskt."
    ]
  },
  {
    "a": "rätt",
    "b": "fel",
    "description": "Rätt betyder här att något stämmer. Fel betyder att det inte stämmer.",
    "examples": [
      "Ditt svar är rätt, men mitt svar är fel.",
      "Jag skrev fel nummer först och rätt nummer sedan."
    ]
  },
  {
    "a": "äkta",
    "b": "falsk",
    "description": "Äkta betyder här att något är vad det sägs vara. Falsk betyder att det är gjort för att verka äkta.",
    "examples": [
      "Den här sedeln är äkta, men den där är falsk.",
      "Experten såg skillnad på en äkta tavla och en falsk tavla."
    ]
  },
  {
    "a": "rolig",
    "b": "tråkig",
    "description": "Rolig och tråkig beskriver hur någon upplever en sak eller en händelse.",
    "examples": [
      "Filmen var rolig, men boken var tråkig.",
      "Vi hade en rolig kväll efter en tråkig dag."
    ]
  },
  {
    "a": "pigg",
    "b": "trött",
    "description": "Pigg betyder att man har energi. Trött betyder att man behöver vila eller sova.",
    "examples": [
      "Jag är pigg på morgonen och trött på kvällen.",
      "Efter en god natts sömn var hon pigg. Före läggdags var hon trött."
    ]
  },
  {
    "a": "bra",
    "b": "dålig",
    "description": "Bra och dålig beskriver om vi tycker att något fungerar väl eller mindre väl.",
    "examples": [
      "Vädret var bra i går men dåligt i dag.",
      "Skorna är bra för en promenad men dåliga för löpning."
    ]
  },
  {
    "a": "köpa",
    "b": "sälja",
    "description": "Köpa och sälja beskriver samma affär från två håll. Köparen betalar och säljaren får pengarna.",
    "examples": [
      "Jag köper en cykel av dig, och du säljer den till mig.",
      "Butiken säljer bröd som kunderna köper."
    ]
  },
  {
    "a": "öka",
    "b": "minska",
    "description": "Öka betyder att något blir större eller mer. Minska betyder att något blir mindre.",
    "examples": [
      "Antalet besökare ökade på sommaren och minskade på hösten.",
      "Vi ökade värmen när vi frös och minskade den när det blev för varmt."
    ]
  },
  {
    "a": "tända",
    "b": "släcka",
    "description": "Tända betyder att få något att lysa eller brinna. Släcka betyder att få det att sluta lysa eller brinna.",
    "examples": [
      "Hon tände lampan när hon kom och släckte den när hon gick.",
      "Vi tänder ljusen till middagen och släcker dem efteråt."
    ]
  },
  {
    "a": "vinna",
    "b": "förlora",
    "description": "Vinna och förlora beskriver olika resultat i en match eller tävling.",
    "examples": [
      "Vårt lag vann, och det andra laget förlorade.",
      "Vi vann den första matchen men förlorade den andra."
    ]
  },
  {
    "a": "börja",
    "b": "sluta",
    "description": "Börja betyder att något startar. Sluta betyder att något tar slut.",
    "examples": [
      "Mötet började klockan nio och slutade klockan tio.",
      "Hon började läsa efter lunch och slutade före middagen."
    ]
  },
  {
    "a": "skratta",
    "b": "gråta",
    "description": "Skratta och gråta används ofta som motsatser när man talar om känslor. Men man kan också gråta av glädje eller skratta när man är nervös.",
    "examples": [
      "Barnet skrattade åt skämtet men grät när ballongen gick sönder.",
      "Hon grät när hon slog sig och skrattade när pappa skojade."
    ]
  },
  {
    "a": "vän",
    "b": "fiende",
    "description": "En vän är någon man tycker om och litar på. En fiende är någon som vill en illa eller som man är i konflikt med.",
    "examples": [
      "I sagan blev den gamla fienden en vän.",
      "Hjälten fick hjälp av sina vänner och kämpade mot sina fiender."
    ]
  },
  {
    "a": "rik",
    "b": "fattig",
    "description": "Rik betyder här att ha mycket pengar. Fattig betyder att ha lite pengar.",
    "examples": [
      "Hon var fattig som barn men blev rik som vuxen.",
      "Den rika mannen gav pengar till en fattig familj."
    ]
  },
  {
    "a": "vacker",
    "b": "ful",
    "description": "Vacker och ful beskriver vad någon tycker om hur något ser ut.",
    "examples": [
      "Hon tyckte att tavlan var vacker, men han tyckte att den var ful.",
      "Huset var fult före målningen och vackert efteråt."
    ]
  },
  {
    "a": "modig",
    "b": "rädd",
    "description": "Modig och rädd används ibland som motsatser. Men man kan vara rädd och ändå vara modig, eftersom mod handlar om att våga trots rädslan.",
    "examples": [
      "Hon var rädd för att tala inför klassen men var modig och försökte ändå.",
      "Han kände sig rädd före hoppet och modig efteråt."
    ]
  },
  {
    "a": "trygg",
    "b": "otrygg",
    "description": "Trygg betyder att känna sig säker. Otrygg betyder att känna sig osäker eller rädd.",
    "examples": [
      "Barnet kände sig tryggt hemma men otryggt på den mörka vägen.",
      "Hon kände sig otrygg ensam men trygg när hennes vän kom."
    ]
  },
  {
    "a": "smart",
    "b": "dum",
    "description": "Smart betyder här klok. Dum betyder här oklok. Orden beskriver en idé eller ett beslut.",
    "examples": [
      "Det var smart att spara biljetten och dumt att kasta den.",
      "Vi valde en smart lösning i stället för en dum."
    ]
  },
  {
    "a": "mätt",
    "b": "hungrig",
    "description": "Mätt betyder att ha ätit tillräckligt. Hungrig betyder att vilja eller behöva äta.",
    "examples": [
      "Hon var hungrig före lunchen och mätt efteråt.",
      "Barnen kom hungriga till bordet och gick därifrån mätta."
    ]
  },
  {
    "a": "lugn",
    "b": "stressad",
    "description": "Lugn och stressad beskriver hur man kan känna sig.",
    "examples": [
      "Hon var stressad före provet och lugn efteråt.",
      "Jag känner mig stressad när jag har bråttom och lugn när jag har gott om tid."
    ]
  },
  {
    "a": "nära",
    "b": "långt",
    "description": "Nära betyder på kort avstånd. Långt betyder på stort avstånd.",
    "examples": [
      "Skolan ligger nära, men sjukhuset ligger långt bort.",
      "Vi bor nära stationen och långt från flygplatsen."
    ]
  },
  {
    "a": "tjock",
    "b": "tunn",
    "description": "Tjock och tunn beskriver ett mått, till exempel hur mycket papper det finns i en bok.",
    "examples": [
      "Boken är tjock, men häftet är tunt.",
      "Hon tog på sig en tjock jacka över den tunna tröjan."
    ]
  },
  {
    "a": "höger",
    "b": "vänster",
    "description": "Höger och vänster är motsatta sidor eller riktningar.",
    "examples": [
      "Sväng höger vid bron och vänster vid torget.",
      "Han håller boken i höger hand och pennan i vänster hand."
    ]
  },
  {
    "a": "upp",
    "b": "ner",
    "description": "Upp och ner är motsatta riktningar.",
    "examples": [
      "Hissen åkte upp först och sedan ner igen.",
      "Bollen kastades upp och föll sedan ner."
    ]
  },
  {
    "a": "in",
    "b": "ut",
    "description": "In och ut är motsatta riktningar, till exempel genom en dörr.",
    "examples": [
      "Katten gick in i huset och sedan ut i trädgården.",
      "Vi gick in när det började regna och ut när regnet slutade."
    ]
  },
  {
    "a": "dag",
    "b": "natt",
    "description": "Dag är den ljusa delen av dygnet. Natt är den mörka delen.",
    "examples": [
      "Hon arbetar på dagen och sover på natten.",
      "Butiken är öppen på dagen och stängd på natten."
    ]
  },
  {
    "a": "fred",
    "b": "krig",
    "description": "Fred betyder här att det inte är krig. Krig är en väpnad konflikt mellan länder eller grupper.",
    "examples": [
      "Efter många år av krig blev det fred.",
      "Familjen flydde från kriget och hoppades på fred."
    ]
  },
  {
    "a": "liv",
    "b": "död",
    "description": "Liv handlar om att leva. Död betyder att livet har tagit slut.",
    "examples": [
      "Boken handlar om liv och död.",
      "Döden är slutet på livet."
    ]
  },
  {
    "a": "tillåta",
    "b": "förbjuda",
    "description": "Tillåta betyder att säga att något får göras. Förbjuda betyder att säga att det inte får göras.",
    "examples": [
      "Skolan tillåter cykling på gården men förbjuder cykling i korridoren.",
      "Bad är tillåtet vid stranden men förbjudet vid hamnen."
    ]
  },
  {
    "a": "spara",
    "b": "slösa",
    "description": "Spara kan betyda att lägga undan något eller använda mindre av det. Slösa betyder att använda mer än vad som behövs.",
    "examples": [
      "Hon sparar pengar varje månad i stället för att slösa bort dem.",
      "Stäng kranen för att spara vatten. Låt den inte rinna och slösa med vattnet."
    ]
  },
  {
    "a": "minnas",
    "b": "glömma",
    "description": "Minnas betyder att komma ihåg. Glömma betyder att inte komma ihåg.",
    "examples": [
      "Jag minns ditt namn men har glömt din adress.",
      "Hon mindes mötet, men han hade glömt det."
    ]
  },
  {
    "a": "lyckas",
    "b": "misslyckas",
    "description": "Lyckas betyder att nå sitt mål. Misslyckas betyder att inte nå sitt mål.",
    "examples": [
      "Hon lyckades med uppgiften efter att först ha misslyckats.",
      "Vi misslyckades första gången men lyckades nästa gång."
    ]
  },
  {
    "a": "bygga",
    "b": "riva",
    "description": "Bygga betyder att sätta ihop något, till exempel ett hus. Riva betyder här att ta ner det som har byggts.",
    "examples": [
      "De ska bygga en ny bro och riva den gamla.",
      "Först rev de muren. Sedan byggde de en ny."
    ]
  },
  {
    "a": "aktiv",
    "b": "passiv",
    "description": "Aktiv betyder här att vara med och göra något. Passiv betyder att mest vänta eller se på.",
    "examples": [
      "Hon var aktiv på mötet och gav förslag. Han var passiv och lyssnade.",
      "En aktiv spelare deltar i spelet. En passiv spelare står mest stilla."
    ]
  },
  {
    "a": "positiv",
    "b": "negativ",
    "description": "Positiv och negativ beskriver här vad någon tycker om något.",
    "examples": [
      "Hon var positiv till förslaget, men han var negativ.",
      "Jag var negativ till planen först men blev positiv när jag fick veta mer."
    ]
  },
  {
    "a": "närvarande",
    "b": "frånvarande",
    "description": "Närvarande betyder att vara på plats. Frånvarande betyder att inte vara där.",
    "examples": [
      "De flesta elever var närvarande, men två var frånvarande.",
      "Hon var frånvarande på måndagen och närvarande på tisdagen."
    ]
  },
  {
    "a": "många",
    "b": "få",
    "description": "Många och få beskriver ett stort eller litet antal.",
    "examples": [
      "Det fanns många äpplen och få päron.",
      "Många kom till festen, men få stannade till slutet."
    ]
  },
  {
    "a": "mer",
    "b": "mindre",
    "description": "Mer och mindre beskriver en större eller mindre mängd.",
    "examples": [
      "Jag vill ha mer kaffe, men hon vill ha mindre.",
      "Hon tränar mer på sommaren och mindre på vintern."
    ]
  },
  {
    "a": "alltid",
    "b": "aldrig",
    "description": "Alltid betyder varje gång. Aldrig betyder inte en enda gång.",
    "examples": [
      "Hon låser alltid dörren och lämnar den aldrig olåst.",
      "Han tar alltid bussen till jobbet och kör aldrig bil dit."
    ]
  },
  {
    "a": "hata",
    "b": "älska",
    "description": "Hata betyder att känna stark motvilja. Älska betyder att tycka mycket om någon eller något.",
    "examples": [
      "Jag älskar den här låten, men min bror hatar den.",
      "Hon älskar att simma men hatar att frysa."
    ]
  },
  {
    "a": "ordning",
    "b": "oordning",
    "description": "Ordning betyder att saker ligger där de ska. Oordning betyder att saker ligger huller om buller.",
    "examples": [
      "Det var oordning på skrivbordet före städningen och ordning efteråt.",
      "Hon gillar ordning i köket men har ofta oordning i garderoben."
    ]
  },
  {
    "a": "irrelevant",
    "b": "relevant",
    "description": "Relevant betyder att något hör till saken. Irrelevant betyder att det inte gör det.",
    "examples": [
      "Frågan om priset är relevant, men frågan om färgen är irrelevant här.",
      "Läraren bad oss ta med relevant information och lämna bort det som var irrelevant."
    ]
  },
  {
    "a": "modern",
    "b": "omodern",
    "description": "Modern betyder att något passar vår tid. Omodern betyder att det upplevs som gammaldags.",
    "examples": [
      "Den nya datorn är modern, men den gamla modellen är omodern.",
      "Hon bytte ut den omoderna lampan mot en modern."
    ]
  },
  {
    "a": "oändlig",
    "b": "ändlig",
    "description": "Ändlig betyder att något har ett slut. Oändlig betyder att det saknar slut.",
    "examples": [
      "Resan var ändlig, även om den kändes oändlig.",
      "En vecka är ändlig, men väntan kan kännas oändlig."
    ]
  },
  {
    "a": "begriplig",
    "b": "obegriplig",
    "description": "Begriplig betyder lätt att förstå. Obegriplig betyder svår att förstå.",
    "examples": [
      "Förklaringen blev begriplig när läraren ritade en bild.",
      "Texten var obegriplig för mig först men begriplig efter genomgången."
    ]
  },
  {
    "a": "behaglig",
    "b": "obehaglig",
    "description": "Behaglig betyder att något känns skönt. Obehaglig betyder att det känns otrevligt.",
    "examples": [
      "Det var behagligt varmt inne och obehagligt kallt ute.",
      "Doften var behaglig, men ljudet var obehagligt."
    ]
  },
  {
    "a": "jämn",
    "b": "ojämn",
    "description": "Jämn betyder här slät eller utan stora skillnader. Ojämn betyder att ytan eller nivån varierar.",
    "examples": [
      "Vägen var jämn i början och ojämn längre fram.",
      "Bordet stod stadigt på det jämna golvet men vickade på det ojämna."
    ]
  },
  {
    "a": "oviktig",
    "b": "viktig",
    "description": "Viktig betyder att något spelar stor roll. Oviktig betyder att det inte spelar stor roll.",
    "examples": [
      "Det är viktigt att komma i tid, men färgen på pennan är oviktig.",
      "Hon lade de viktiga pappren överst och de oviktiga underst."
    ]
  },
  {
    "a": "möjlig",
    "b": "omöjlig",
    "description": "Möjlig betyder att något går att göra. Omöjlig betyder att det inte går.",
    "examples": [
      "Det är möjligt att gå till skolan, men omöjligt att gå genom den stängda dörren.",
      "Uppgiften såg omöjlig ut först men blev möjlig med hjälp."
    ]
  },
  {
    "a": "opålitlig",
    "b": "pålitlig",
    "description": "Pålitlig betyder att man kan lita på någon eller något. Opålitlig betyder att man inte kan det.",
    "examples": [
      "Den gamla klockan var opålitlig och gick ofta fel.",
      "Vi valde en pålitlig cykel i stället för en opålitlig."
    ]
  },
  {
    "a": "oärlig",
    "b": "ärlig",
    "description": "Ärlig betyder att säga sanningen. Oärlig betyder att inte göra det.",
    "examples": [
      "Hon var ärlig och berättade vad som hänt.",
      "Det var oärligt att dölja felet, så han valde att vara ärlig."
    ]
  },
  {
    "a": "ofullständig",
    "b": "fullständig",
    "description": "Fullständig betyder att alla delar finns med. Ofullständig betyder att något saknas.",
    "examples": [
      "Listan var ofullständig tills vi lade till det sista namnet.",
      "En fullständig adress har gatunamn och nummer; en ofullständig adress kan sakna numret."
    ]
  },
  {
    "a": "farlig",
    "b": "ofarlig",
    "description": "Farlig betyder att något kan skada. Ofarlig betyder att det inte väntas skada.",
    "examples": [
      "Det är farligt att röra en het spis, men ofarligt att röra en kall tallrik.",
      "Ett vasst glas kan vara farligt, men en mjuk kudde är ofarlig."
    ]
  },
  {
    "a": "osannolik",
    "b": "sannolik",
    "description": "Sannolik betyder att något troligen händer. Osannolik betyder att det troligen inte händer.",
    "examples": [
      "Det är sannolikt att det regnar när himlen är mörk.",
      "Det är osannolikt att vi hinner om tåget redan har gått."
    ]
  },
  {
    "a": "färdig",
    "b": "ofärdig",
    "description": "Färdig betyder att något är klart. Ofärdig betyder att det ännu inte är klart.",
    "examples": [
      "Maten var ofärdig när gästerna kom men färdig en stund senare.",
      "Hon visade den färdiga teckningen och sparade den ofärdiga."
    ]
  },
  {
    "a": "orättvis",
    "b": "rättvis",
    "description": "Rättvis betyder att behandla människor på ett rimligt och lika sätt. Orättvis betyder att inte göra det.",
    "examples": [
      "Det var rättvist att alla fick samma chans.",
      "Hon tyckte att regeln var orättvis eftersom bara några fick vara med."
    ]
  },
  {
    "a": "oskyldig",
    "b": "skyldig",
    "description": "Skyldig betyder här att ha gjort det som någon anklagas för. Oskyldig betyder att inte ha gjort det.",
    "examples": [
      "Hon var oskyldig och hade inte tagit boken.",
      "Den skyldige erkände, och den oskyldige fick en ursäkt."
    ]
  },
  {
    "a": "ovänlig",
    "b": "vänlig",
    "description": "Vänlig betyder att vara trevlig mot andra. Ovänlig betyder att vara otrevlig.",
    "examples": [
      "Hon hälsade vänligt på den nya eleven.",
      "Hans ovänliga svar gjorde henne ledsen, så han försökte svara vänligt nästa gång."
    ]
  },
  {
    "a": "osynlig",
    "b": "synlig",
    "description": "Synlig betyder att något går att se. Osynlig betyder att det inte går att se.",
    "examples": [
      "Månen var synlig i går men osynlig bakom molnen i dag.",
      "Bläcket blev osynligt när det torkade."
    ]
  },
  {
    "a": "tacksam",
    "b": "otacksam",
    "description": "Tacksam betyder att uppskatta hjälp eller en gåva. Otacksam betyder att inte visa uppskattning.",
    "examples": [
      "Hon var tacksam för hjälpen och tackade direkt.",
      "Hans otacksamma svar gjorde vännen ledsen, så han bad om ursäkt."
    ]
  },
  {
    "a": "sams",
    "b": "osams",
    "description": "Sams betyder att man kommer överens. Osams betyder att man har bråkat eller inte kommer överens.",
    "examples": [
      "Barnen var osams om leksaken men blev sams igen.",
      "Vi var sams i går och är fortfarande sams i dag."
    ]
  },
  {
    "a": "uppmärksam",
    "b": "ouppmärksam",
    "description": "Uppmärksam betyder att man märker vad som händer. Ouppmärksam betyder att man missar det.",
    "examples": [
      "Den uppmärksamma eleven hörde frågan direkt.",
      "Jag var ouppmärksam och missade när bussen kom."
    ]
  },
  {
    "a": "skicklig",
    "b": "oskicklig",
    "description": "Skicklig betyder att någon är bra på något. Oskicklig betyder att någon saknar den förmågan.",
    "examples": [
      "Hon är skicklig på att laga cyklar.",
      "Jag var oskicklig i början men blev skickligare med övning."
    ]
  },
  {
    "a": "gilla",
    "b": "ogilla",
    "description": "Gilla betyder att tycka om något. Ogilla betyder att inte tycka om det.",
    "examples": [
      "Jag gillar te men ogillar kaffe.",
      "Hon ogillade filmen, men hennes vän gillade den."
    ]
  },
  {
    "a": "laglig",
    "b": "olaglig",
    "description": "Laglig betyder att något är tillåtet enligt lagen. Olaglig betyder att det bryter mot lagen.",
    "examples": [
      "En laglig handling följer lagen; en olaglig gör inte det.",
      "Domaren avgjorde om handlingen var laglig eller olaglig."
    ]
  },
  {
    "a": "moralisk",
    "b": "omoralisk",
    "description": "Moralisk betyder här att något anses rätt. Omoralisk betyder att det anses fel.",
    "examples": [
      "Hon tyckte att det var moraliskt att hjälpa grannen.",
      "Det vore omoraliskt att lura någon som litar på dig."
    ]
  },
  {
    "a": "förutsägbar",
    "b": "oförutsägbar",
    "description": "Förutsägbar betyder att det är lätt att gissa vad som händer. Oförutsägbar betyder att det är svårt.",
    "examples": [
      "Filmens slut var förutsägbart; vi gissade det tidigt.",
      "Vädret var oförutsägbart och ändrades flera gånger."
    ]
  },
  {
    "a": "tillräcklig",
    "b": "otillräcklig",
    "description": "Tillräcklig betyder att något räcker. Otillräcklig betyder att det inte räcker.",
    "examples": [
      "En liter vatten var tillräckligt för maten.",
      "Tiden var otillräcklig, så vi hann inte bli klara."
    ]
  },
  {
    "a": "sårbar",
    "b": "osårbar",
    "description": "Sårbar betyder att någon eller något lätt kan skadas. Osårbar betyder att det inte kan skadas.",
    "examples": [
      "Den lilla plantan är sårbar i kylan.",
      "Hjälten i sagan var osårbar och kunde inte skadas."
    ]
  },
  {
    "a": "användbar",
    "b": "oanvändbar",
    "description": "Användbar betyder att något går att använda. Oanvändbar betyder att det inte gör det.",
    "examples": [
      "Den hela stolen är användbar, men den trasiga är oanvändbar.",
      "Kartans gamla uppgifter gjorde den oanvändbar."
    ]
  },
  {
    "a": "giltig",
    "b": "ogiltig",
    "description": "Giltig betyder att något fortfarande gäller. Ogiltig betyder att det inte gäller.",
    "examples": [
      "Biljetten är giltig i dag men ogiltig i morgon.",
      "Mitt gamla kort var ogiltigt, så jag använde det nya giltiga kortet."
    ]
  },
  {
    "a": "intresserad",
    "b": "ointresserad",
    "description": "Intresserad betyder att vilja veta mer. Ointresserad betyder att inte vilja det.",
    "examples": [
      "Hon var intresserad av boken och läste vidare.",
      "Han var ointresserad av fotboll men intresserad av musik."
    ]
  },
  {
    "a": "symmetrisk",
    "b": "osymmetrisk",
    "description": "Symmetrisk betyder att två sidor har samma form. Osymmetrisk betyder att de skiljer sig åt.",
    "examples": [
      "Fjärilens vingar ser symmetriska ut.",
      "Teckningen var osymmetrisk eftersom ena sidan var större."
    ]
  },
  {
    "a": "artig",
    "b": "oartig",
    "description": "Artig betyder att visa hänsyn och gott uppförande. Oartig betyder att inte göra det.",
    "examples": [
      "Det är artigt att säga tack.",
      "Han var oartig när han avbröt henne, men bad sedan artigt om ursäkt."
    ]
  },
  {
    "a": "saltad",
    "b": "osaltad",
    "description": "Saltad betyder att salt har tillsatts. Osaltad betyder att inget salt har tillsatts.",
    "examples": [
      "Jag valde osaltat smör i stället för saltat.",
      "Nötterna i den blå påsen är saltade och de andra är osaltade."
    ]
  },
  {
    "a": "översatt",
    "b": "oöversatt",
    "description": "Översatt betyder att texten finns på ett annat språk. Oöversatt betyder att den fortfarande är på originalspråket.",
    "examples": [
      "Boken var översatt till svenska, men brevet var oöversatt.",
      "Den översatta texten var lätt att läsa; den oöversatta var svårare."
    ]
  },
  {
    "a": "gynnsam",
    "b": "ogynnsam",
    "description": "Gynnsam betyder att något hjälper ett resultat. Ogynnsam betyder att det gör resultatet svårare.",
    "examples": [
      "Vädret var gynnsamt för sådden på våren.",
      "Den långa torkan gav växterna ogynnsamma villkor."
    ]
  },
  {
    "a": "konsekvent",
    "b": "inkonsekvent",
    "description": "Konsekvent betyder att göra på samma sätt varje gång. Inkonsekvent betyder att man ändrar sig utan tydlig anledning.",
    "examples": [
      "Hon var konsekvent och följde samma regel varje dag.",
      "Regeln blev inkonsekvent när den bara gällde vissa elever."
    ]
  },
  {
    "a": "åtkomlig",
    "b": "oåtkomlig",
    "description": "Åtkomlig betyder att man kan nå något. Oåtkomlig betyder att man inte kan nå det.",
    "examples": [
      "Boken på den låga hyllan är åtkomlig för barnet.",
      "Boken högst upp är oåtkomlig utan en stege."
    ]
  },
  {
    "a": "behörig",
    "b": "obehörig",
    "description": "Behörig betyder att man har rätt till något, till exempel att gå in. Obehörig betyder att man saknar den rätten.",
    "examples": [
      "Bara behörig personal får gå in i rummet.",
      "En obehörig person försökte öppna dörren men kom inte in."
    ]
  },
  {
    "a": "avsiktlig",
    "b": "oavsiktlig",
    "description": "Avsiktlig betyder att något görs med mening. Oavsiktlig betyder att det sker utan mening.",
    "examples": [
      "Hon välte glaset av misstag; det var oavsiktligt.",
      "Han knackade avsiktligt på dörren för att väcka sin vän."
    ]
  },
  {
    "a": "tillåten",
    "b": "otillåten",
    "description": "Tillåten betyder att något är tillåtet. Otillåten betyder att det inte är tillåtet.",
    "examples": [
      "På vår gård är cykling tillåten på vägen men otillåten på gångbanan.",
      "Det var tillåtet att ta bilder, men otillåtet att använda blixt."
    ]
  },
  {
    "a": "beväpnad",
    "b": "obeväpnad",
    "description": "Beväpnad betyder att någon bär ett vapen. Obeväpnad betyder att personen inte gör det.",
    "examples": [
      "Vakten i filmen var beväpnad, men besökaren var obeväpnad.",
      "I sagan var riddaren beväpnad, men bybon var obeväpnad."
    ]
  },
  {
    "a": "dödlig",
    "b": "odödlig",
    "description": "Dödlig betyder att kunna dö. Odödlig betyder att aldrig dö, som i en saga.",
    "examples": [
      "Människor är dödliga, men gudarna i sagan är odödliga.",
      "I berättelsen var hjälten odödlig, medan hans vän var dödlig."
    ]
  },
  {
    "a": "sportslig",
    "b": "osportslig",
    "description": "Sportslig betyder att spela rättvist och visa respekt. Osportslig betyder att göra tvärtom.",
    "examples": [
      "Hon var sportslig och gratulerade vinnaren.",
      "Det var osportsligt att fuska under matchen."
    ]
  },
  {
    "a": "somna",
    "b": "vakna",
    "description": "Somna betyder att börja sova. Vakna betyder att sluta sova.",
    "examples": [
      "Jag somnade sent och vaknade tidigt.",
      "Barnet vaknade när klockan ringde och somnade igen."
    ]
  },
  {
    "a": "lögn",
    "b": "sanning",
    "description": "En lögn är något man säger fast man vet att det inte stämmer. En sanning är något som stämmer.",
    "examples": [
      "Han berättade en lögn först men sade sanningen senare.",
      "Det är bättre att säga sanningen än att hitta på en lögn."
    ]
  },
  {
    "a": "ja",
    "b": "nej",
    "description": "Ja används för att säga att man håller med eller vill. Nej används för att säga att man inte vill eller inte håller med.",
    "examples": [
      "Hon svarade ja på frågan, men han svarade nej.",
      "Jag sade nej först och ja när jag hade tänkt efter."
    ]
  },
  {
    "a": "kort",
    "b": "lång",
    "description": "Kort och lång kan beskriva hur lång något är.",
    "examples": [
      "Det korta repet räckte inte, så vi tog ett långt.",
      "Vägen till skolan är kort, men vägen till havet är lång."
    ]
  },
  {
    "a": "öppna",
    "b": "stänga",
    "description": "Öppna betyder att göra så att man kan gå in eller se in. Stänga betyder att göra tvärtom.",
    "examples": [
      "Hon öppnade dörren när gästen kom och stängde den sedan.",
      "Vi öppnar fönstret när det är varmt och stänger det när det är kallt."
    ]
  },
  {
    "a": "flyta",
    "b": "sjunka",
    "description": "Flyta betyder att hålla sig uppe på vatten. Sjunka betyder att röra sig ner under ytan.",
    "examples": [
      "Träbiten flöt, men stenen sjönk.",
      "Båten började sjunka när den fick ett hål; tidigare flöt den."
    ]
  },
  {
    "a": "sällsynt",
    "b": "vanlig",
    "description": "Sällsynt betyder att något händer eller finns sällan. Vanlig betyder att det händer eller finns ofta.",
    "examples": [
      "Den här fågeln är sällsynt här, men sparvar är vanliga.",
      "En sällsynt fågel sågs i skogen, medan kråkor var vanliga."
    ]
  },
  {
    "a": "förbättra",
    "b": "försämra",
    "description": "Förbättra betyder att göra något bättre. Försämra betyder att göra det sämre.",
    "examples": [
      "Vi förbättrade vägen genom att laga hålen.",
      "Regnet försämrade sikten, men solen förbättrade den igen."
    ]
  },
  {
    "a": "tam",
    "b": "vild",
    "description": "Tam betyder att ett djur är vant vid människor. Vild betyder att det lever fritt och inte är tamt.",
    "examples": [
      "Hunden är tam, men vargen är vild.",
      "Katten hemma är tam; katten i sagan var vild."
    ]
  },
  {
    "a": "fördel",
    "b": "nackdel",
    "description": "En fördel är något bra med ett val. En nackdel är något dåligt med det.",
    "examples": [
      "En fördel med tåget är att man kan vila. En nackdel är att det kan vara sent.",
      "Vi skrev upp både fördelar och nackdelar innan vi valde."
    ]
  },
  {
    "a": "inkomst",
    "b": "utgift",
    "description": "En inkomst är pengar som kommer in. En utgift är pengar som betalas ut.",
    "examples": [
      "Lönen är en inkomst och hyran är en utgift.",
      "Vi skrev upp varje inkomst och utgift för månaden."
    ]
  },
  {
    "a": "optimist",
    "b": "pessimist",
    "description": "En optimist tror ofta att det går bra. En pessimist tror oftare att det går dåligt.",
    "examples": [
      "Optimisten trodde att solen skulle komma, men pessimisten väntade regn.",
      "Hon var optimist inför resan, medan han var pessimist."
    ]
  },
  {
    "a": "ofta",
    "b": "sällan",
    "description": "Ofta betyder många gånger. Sällan betyder få gånger.",
    "examples": [
      "Jag går ofta till biblioteket men sällan till museet.",
      "Hon lagar ofta mat hemma och äter sällan ute."
    ]
  },
  {
    "a": "förenkla",
    "b": "försvåra",
    "description": "Förenkla betyder att göra något lättare. Försvåra betyder att göra det svårare.",
    "examples": [
      "Den tydliga kartan förenklade resan.",
      "Regnet försvårade promenaden, men bättre skor förenklade den."
    ]
  },
  {
    "a": "export",
    "b": "import",
    "description": "Export betyder att sälja varor till andra länder. Import betyder att köpa varor från andra länder.",
    "examples": [
      "Sverige exporterar vissa varor och importerar andra.",
      "Företagets export ökade när fler länder köpte dess varor."
    ]
  },
  {
    "a": "inomhus",
    "b": "utomhus",
    "description": "Inomhus betyder inne i ett hus. Utomhus betyder ute.",
    "examples": [
      "Vi lekte utomhus när solen sken och inomhus när det regnade.",
      "Mötet var inomhus, men lunchen åt vi utomhus."
    ]
  },
  {
    "a": "skriftlig",
    "b": "muntlig",
    "description": "Skriftlig betyder med text. Muntlig betyder med tal.",
    "examples": [
      "Provet hade en skriftlig del och en muntlig del.",
      "Jag fick ett muntligt svar först och ett skriftligt svar senare."
    ]
  },
  {
    "a": "plus",
    "b": "minus",
    "description": "Plus används när man lägger till. Minus används när man tar bort.",
    "examples": [
      "Två plus tre blir fem, men fem minus tre blir två.",
      "Hon skrev ett plustecken i stället för ett minustecken."
    ]
  },
  {
    "a": "före",
    "b": "efter",
    "description": "Före betyder tidigare än något annat. Efter betyder senare än något annat.",
    "examples": [
      "Vi åt före filmen och tog en promenad efter den.",
      "Hon kom före mig och gick efter mig."
    ]
  },
  {
    "a": "norr",
    "b": "söder",
    "description": "Norr och söder är motsatta väderstreck.",
    "examples": [
      "Staden ligger norr om sjön, medan byn ligger söder om den.",
      "Vi reste norrut på morgonen och söderut på kvällen."
    ]
  },
  {
    "a": "objektiv",
    "b": "subjektiv",
    "description": "Objektiv betyder att försöka beskriva fakta utan egna åsikter. Subjektiv betyder att egna åsikter påverkar.",
    "examples": [
      "En mätning av temperaturen är objektiv.",
      "En åsikt om vilken film som är bäst är subjektiv."
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
