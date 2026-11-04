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
  },
  {
    "a": "plural",
    "b": "singular",
    "description": "Singular är en form för en enda. Plural är en form för flera.",
    "examples": [
      "Ordet ”bil” står i singular och ”bilar” står i plural.",
      "Rubriken använder singular, men listan under använder plural."
    ]
  },
  {
    "a": "automatisk",
    "b": "manuell",
    "description": "Automatisk betyder att något sker av sig självt enligt ett system. Manuell betyder att en person styr eller gör det.",
    "examples": [
      "Dörren öppnas automatiskt, men reservlåset är manuellt.",
      "Maskinen har ett automatiskt läge och ett manuellt läge."
    ]
  },
  {
    "a": "borta",
    "b": "hemma",
    "description": "Hemma betyder på den plats där man bor. Borta betyder att man inte är där.",
    "examples": [
      "Hon är hemma i kväll men borta i morgon.",
      "När katten var borta längtade barnen tills den var hemma igen."
    ]
  },
  {
    "a": "konkav",
    "b": "konvex",
    "description": "En konkav yta buktar inåt. En konvex yta buktar utåt.",
    "examples": [
      "Skålens insida är konkav och utsidan är konvex.",
      "En konkav lins och en konvex lins böjer ljus på olika sätt."
    ]
  },
  {
    "a": "bekräfta",
    "b": "dementera",
    "description": "Bekräfta betyder att säga att en uppgift stämmer. Dementera betyder att säga att den inte stämmer.",
    "examples": [
      "Företaget bekräftade nyheten, medan myndigheten dementerade ryktet.",
      "Hon ville varken bekräfta eller dementera uppgiften."
    ]
  },
  {
    "a": "horisontell",
    "b": "vertikal",
    "description": "Horisontell betyder vågrät. Vertikal betyder lodrät.",
    "examples": [
      "Bordsskivan är horisontell och bordsbenet är vertikalt.",
      "Rita först en horisontell linje och sedan en vertikal."
    ]
  },
  {
    "a": "vass",
    "b": "trubbig",
    "description": "Vass betyder att en kant eller spets lätt kan skära eller sticka. Trubbig betyder att den inte är skarp.",
    "examples": [
      "Den nya kniven är vass, men den gamla är trubbig.",
      "En vass penna ger en tunn linje; en trubbig penna ger en bredare."
    ]
  },
  {
    "a": "aerob",
    "b": "anaerob",
    "description": "Aerob betyder att syre används. Anaerob betyder att processen sker utan syre.",
    "examples": [
      "Lugn löpning är ofta aerob träning, medan en kort maxinsats kan vara anaerob.",
      "Bakterien kan växa aerobt med syre eller anaerobt utan syre."
    ]
  },
  {
    "a": "obligatorisk",
    "b": "valfri",
    "description": "Obligatorisk betyder att något måste göras. Valfri betyder att man själv får välja.",
    "examples": [
      "Första uppgiften är obligatorisk och den andra är valfri.",
      "Närvaro är obligatorisk på måndagen men valfri på fredagen."
    ]
  },
  {
    "a": "självisk",
    "b": "osjälvisk",
    "description": "Självisk betyder att främst tänka på sig själv. Osjälvisk betyder att också sätta andras behov först.",
    "examples": [
      "Det var själviskt att ta allt, men osjälviskt att dela med sig.",
      "Hon gjorde en osjälvisk insats i stället för ett själviskt val."
    ]
  },
  {
    "a": "professionell",
    "b": "oprofessionell",
    "description": "Professionell betyder här att arbeta kunnigt och korrekt. Oprofessionell betyder att inte göra det.",
    "examples": [
      "Bemötandet var professionellt och lugnt, men det första svaret var oprofessionellt.",
      "En professionell rapport är tydlig; en oprofessionell kan vara slarvig."
    ]
  },
  {
    "a": "nedåt",
    "b": "uppåt",
    "description": "Nedåt är riktningen mot en lägre plats. Uppåt är riktningen mot en högre plats.",
    "examples": [
      "Hissen gick uppåt och trappan ledde nedåt.",
      "Pilen åt vänster pekar nedåt och den andra pekar uppåt."
    ]
  },
  {
    "a": "tur",
    "b": "otur",
    "description": "Tur betyder att något bra händer av en slump. Otur betyder att något dåligt händer av en slump.",
    "examples": [
      "Vi hade tur och hann med tåget; han hade otur och missade det.",
      "Det var otur att det regnade, men tur att vi hade paraply."
    ]
  },
  {
    "a": "global",
    "b": "lokal",
    "description": "Global betyder att något gäller hela världen. Lokal betyder att det gäller ett mindre område eller en viss plats.",
    "examples": [
      "Klimatet är en global fråga, medan busstiden är en lokal fråga.",
      "Företaget säljer globalt men har också en lokal butik."
    ]
  },
  {
    "a": "reversibel",
    "b": "irreversibel",
    "description": "Reversibel betyder att något kan göras om eller återställas. Irreversibel betyder att det inte kan återställas.",
    "examples": [
      "Ändringen är reversibel och kan tas tillbaka.",
      "Skadan blev irreversibel, medan den mindre förändringen var reversibel."
    ]
  },
  {
    "a": "föregående",
    "b": "nästa",
    "description": "Föregående betyder den som kom närmast före. Nästa betyder den som kommer närmast efter.",
    "examples": [
      "Det föregående kapitlet var kortare än nästa.",
      "Vi rättade felet från föregående vecka inför nästa vecka."
    ]
  },
  {
    "a": "explosion",
    "b": "implosion",
    "description": "En explosion pressar material utåt. En implosion innebär att något kollapsar inåt.",
    "examples": [
      "Trycket orsakade en explosion utåt, inte en implosion inåt.",
      "Vid en explosion sprids delar utåt; vid en implosion faller de inåt."
    ]
  },
  {
    "a": "mottagare",
    "b": "sändare",
    "description": "En sändare skickar en signal eller ett meddelande. En mottagare tar emot det.",
    "examples": [
      "Radions sändare skickar signalen till mottagaren.",
      "Brevet har en sändare och en mottagare."
    ]
  },
  {
    "a": "öppning",
    "b": "stängning",
    "description": "Öppning betyder att något öppnas eller börjar vara öppet. Stängning betyder att det stängs.",
    "examples": [
      "Butikens öppning är klockan nio och stängningen är klockan sex.",
      "Dörrens öppning gick lätt, men stängningen krävde mer kraft."
    ]
  },
  {
    "a": "högertrafik",
    "b": "vänstertrafik",
    "description": "Högertrafik betyder att fordon kör på höger sida. Vänstertrafik betyder att de kör på vänster sida.",
    "examples": [
      "Sverige har högertrafik, medan Storbritannien har vänstertrafik.",
      "Vid gränsen bytte vägen från vänstertrafik till högertrafik."
    ]
  },
  {
    "a": "köpare",
    "b": "säljare",
    "description": "En köpare betalar för något. En säljare erbjuder och säljer det.",
    "examples": [
      "Köparen betalade och säljaren lämnade över varan.",
      "Avtalet skrevs under av både köpare och säljare."
    ]
  },
  {
    "a": "ankomst",
    "b": "avfärd",
    "description": "Ankomst är när någon eller något kommer fram. Avfärd är när resan börjar från en plats.",
    "examples": [
      "Tågets avfärd är klockan åtta och ankomsten klockan tio.",
      "Vi väntade på hennes ankomst efter deras tidiga avfärd."
    ]
  },
  {
    "a": "generalisera",
    "b": "specialisera",
    "description": "Generalisera betyder att göra en bred slutsats eller göra något mer allmänt. Specialisera betyder att inrikta sig på ett smalare område.",
    "examples": [
      "Det är svårt att generalisera från ett enda fall.",
      "Forskaren försökte generalisera resultaten men valde sedan att specialisera analysen på en åldersgrupp."
    ]
  },
  {
    "a": "permanent",
    "b": "temporär",
    "description": "Permanent betyder varaktig. Temporär betyder att något bara gäller under en begränsad tid.",
    "examples": [
      "Bron är en permanent lösning, medan färjan var temporär.",
      "Hon fick först ett temporärt rum och senare ett permanent."
    ]
  },
  {
    "a": "emigrera",
    "b": "immigrera",
    "description": "Emigrera betyder att flytta ut från ett land. Immigrera betyder att flytta in i ett land.",
    "examples": [
      "Familjen emigrerade från Sverige och immigrerade till Kanada.",
      "Samma flytt kan beskrivas som att emigrera från ett land och immigrera till ett annat."
    ]
  },
  {
    "a": "invandring",
    "b": "utvandring",
    "description": "Invandring är flytt in i ett land. Utvandring är flytt ut ur ett land.",
    "examples": [
      "Statistiken visar både invandring till landet och utvandring från det.",
      "Samma person räknas som utvandring i ursprungslandet och invandring i det nya landet."
    ]
  },
  {
    "a": "inandning",
    "b": "utandning",
    "description": "Inandning betyder att luft dras in i lungorna. Utandning betyder att luft pressas ut.",
    "examples": [
      "En lugn inandning följdes av en lång utandning.",
      "Övningen växlar mellan fyra sekunders inandning och sex sekunders utandning."
    ]
  },
  {
    "a": "frånvaro",
    "b": "närvaro",
    "description": "Närvaro betyder att någon är på plats. Frånvaro betyder att personen inte är där.",
    "examples": [
      "Läraren noterade både elevernas närvaro och deras frånvaro.",
      "Hennes närvaro märktes direkt efter en veckas frånvaro."
    ]
  },
  {
    "a": "inomlands",
    "b": "utomlands",
    "description": "Inomlands betyder i det egna landet. Utomlands betyder i ett annat land.",
    "examples": [
      "Vi reste inomlands i somras och utomlands i vintras.",
      "Paketet kan skickas både inomlands och utomlands."
    ]
  },
  {
    "a": "inifrån",
    "b": "utifrån",
    "description": "Inifrån betyder från insidan. Utifrån betyder från utsidan.",
    "examples": [
      "Dörren låstes inifrån och öppnades utifrån.",
      "Huset såg litet ut utifrån men rymligt inifrån."
    ]
  },
  {
    "a": "inländsk",
    "b": "utländsk",
    "description": "Inländsk betyder från det egna landet. Utländsk betyder från ett annat land.",
    "examples": [
      "Butiken säljer både inländsk och utländsk frukt.",
      "Den inländska filmen tävlade mot flera utländska filmer."
    ]
  },
  {
    "a": "dystopi",
    "b": "utopi",
    "description": "En utopi skildrar ett idealiskt samhälle. En dystopi skildrar ett samhälle där mycket har gått fel.",
    "examples": [
      "Boken börjar som en utopi men utvecklas till en dystopi.",
      "En utopi visar drömsamhället, medan en dystopi visar en mörk framtid."
    ]
  },
  {
    "a": "aktning",
    "b": "förakt",
    "description": "Aktning betyder respekt. Förakt betyder stark brist på respekt.",
    "examples": [
      "Hon talade om läraren med aktning, inte med förakt.",
      "Hans mod väckte aktning, medan hans grymhet väckte förakt."
    ]
  },
  {
    "a": "transitiv",
    "b": "intransitiv",
    "description": "Ett transitivt verb kan ha ett direkt objekt. Ett intransitivt verb används utan direkt objekt.",
    "examples": [
      "I ”hon öppnar dörren” är verbet transitivt.",
      "I ”barnet sover” är verbet intransitivt, medan ”barnet läser boken” har ett transitivt verb."
    ]
  },
  {
    "a": "kryptering",
    "b": "avkryptering",
    "description": "Kryptering gör information svårläst utan rätt nyckel. Avkryptering gör den läsbar igen.",
    "examples": [
      "Meddelandet skyddades med kryptering och öppnades med avkryptering.",
      "Rätt nyckel behövs för både kryptering och avkryptering."
    ]
  },
  {
    "a": "inflation",
    "b": "deflation",
    "description": "Inflation är en allmän ökning av prisnivån. Deflation är en allmän minskning av prisnivån.",
    "examples": [
      "Landet gick från låg inflation till en kort period av deflation.",
      "Vid inflation stiger den allmänna prisnivån; vid deflation sjunker den."
    ]
  },
  {
    "a": "godkänd",
    "b": "underkänd",
    "description": "Godkänd betyder att kraven är uppfyllda. Underkänd betyder att de inte är det.",
    "examples": [
      "Uppsatsen blev godkänd, men det första utkastet var underkänt.",
      "Ett godkänt prov uppfyller kraven; ett underkänt gör inte det."
    ]
  },
  {
    "a": "liggande",
    "b": "stående",
    "description": "Liggande och stående beskriver olika lägen eller format.",
    "examples": [
      "Bilden finns i både liggande och stående format.",
      "Ställ flaskan stående och lägg boken liggande."
    ]
  },
  {
    "a": "nerför",
    "b": "uppför",
    "description": "Nerför betyder i riktning ned längs en lutning. Uppför betyder i riktning upp längs den.",
    "examples": [
      "Det gick snabbt nerför backen men långsamt uppför.",
      "Vi cyklade uppför på vägen dit och nerför på vägen hem."
    ]
  },
  {
    "a": "funktionell",
    "b": "dysfunktionell",
    "description": "Funktionell betyder att något fungerar på ett ändamålsenligt sätt. Dysfunktionell betyder att det fungerar dåligt eller skadligt.",
    "examples": [
      "Gruppen blev funktionell efter att ha löst sitt dysfunktionella arbetssätt.",
      "Ett funktionellt system hjälper användaren; ett dysfunktionellt skapar problem."
    ]
  },
  {
    "a": "förstärka",
    "b": "försvaga",
    "description": "Förstärka betyder att göra något starkare. Försvaga betyder att göra det svagare.",
    "examples": [
      "Högtalaren förstärker ljudet, medan väggen försvagar det.",
      "Träningen kan förstärka musklerna och sjukdom kan försvaga dem."
    ]
  },
  {
    "a": "gles",
    "b": "tät",
    "description": "Gles betyder att det är långt mellan delarna. Tät betyder att delarna sitter nära varandra.",
    "examples": [
      "Skogen var gles nära vägen och tät längre in.",
      "Ett glest tyg släpper igenom mer ljus än ett tätt."
    ]
  },
  {
    "a": "dominant",
    "b": "recessiv",
    "description": "Dominant och recessiv beskriver hur genvarianter kan påverka en ärftlig egenskap.",
    "examples": [
      "En dominant genvariant kan märkas när bara en kopia finns.",
      "En recessiv genvariant märks ofta först när två kopior finns, till skillnad från en dominant."
    ]
  },
  {
    "a": "anspänd",
    "b": "avspänd",
    "description": "Anspänd betyder spänd eller nervös. Avspänd betyder lugn och avslappnad.",
    "examples": [
      "Hon var anspänd före samtalet men avspänd efteråt.",
      "Stämningen gick från anspänd till avspänd när problemet löstes."
    ]
  },
  {
    "a": "invärtes",
    "b": "utvärtes",
    "description": "Invärtes betyder inne i kroppen. Utvärtes betyder på kroppens utsida.",
    "examples": [
      "Läkemedlet ska tas invärtes, medan salvan används utvärtes.",
      "Vissa läkemedel tas invärtes och andra används utvärtes."
    ]
  },
  {
    "a": "extern",
    "b": "intern",
    "description": "Intern betyder inom en organisation eller ett system. Extern betyder utanför det.",
    "examples": [
      "Det interna mötet följdes av ett externt möte med kunden.",
      "Företaget använder både intern personal och externa konsulter."
    ]
  },
  {
    "a": "dynamisk",
    "b": "statisk",
    "description": "Dynamisk betyder att något förändras eller rör sig. Statisk betyder att det är fast eller oföränderligt i sammanhanget.",
    "examples": [
      "Diagrammet är dynamiskt och uppdateras, medan bilden är statisk.",
      "En dynamisk övning innehåller rörelse; en statisk hålls stilla."
    ]
  },
  {
    "a": "destruktiv",
    "b": "konstruktiv",
    "description": "Konstruktiv betyder att bidra till en lösning. Destruktiv betyder att skada eller försvåra.",
    "examples": [
      "Hon gav konstruktiv kritik i stället för destruktiva kommentarer.",
      "Samtalet blev konstruktivt efter en destruktiv början."
    ]
  },
  {
    "a": "nedanstående",
    "b": "ovanstående",
    "description": "Ovanstående syftar på något tidigare eller högre upp i texten. Nedanstående syftar på något som kommer senare eller står längre ner.",
    "examples": [
      "Ovanstående exempel förklaras i den nedanstående tabellen.",
      "Följ den ovanstående regeln och svara på de nedanstående frågorna."
    ]
  },
  {
    "a": "kortvarig",
    "b": "långvarig",
    "description": "Kortvarig betyder att något pågår en kort tid. Långvarig betyder att det pågår länge.",
    "examples": [
      "Regnet var kortvarigt, men torkan blev långvarig.",
      "En kortvarig lösning räckte inte för det långvariga problemet."
    ]
  },
  {
    "a": "minskning",
    "b": "ökning",
    "description": "En minskning betyder att något blir mindre. En ökning betyder att det blir större.",
    "examples": [
      "En minskning av priset gav en ökning av försäljningen.",
      "Rapporten visar en minskning av kostnaderna och en ökning av intäkterna."
    ]
  },
  {
    "a": "underskott",
    "b": "överskott",
    "description": "Underskott betyder att det finns mindre än vad som behövs. Överskott betyder att det finns mer än vad som behövs.",
    "examples": [
      "Budgeten visade underskott förra året men överskott i år.",
      "Ett underskott på varor kan senare bli ett överskott."
    ]
  },
  {
    "a": "defensiv",
    "b": "offensiv",
    "description": "Defensiv betyder inriktad på att försvara. Offensiv betyder inriktad på att anfalla eller ta initiativ.",
    "examples": [
      "Laget spelade defensivt i första halvlek och offensivt i den andra.",
      "En defensiv taktik skyddar målet, medan en offensiv taktik skapar målchanser."
    ]
  },
  {
    "a": "bildlig",
    "b": "bokstavlig",
    "description": "Bildlig betyder att ord används överfört. Bokstavlig betyder att orden ska förstås precis som de står.",
    "examples": [
      "Uttrycket att ha is i magen är bildligt, inte bokstavligt.",
      "Hon tolkade skämtet bokstavligt fast det var bildligt menat."
    ]
  },
  {
    "a": "inledning",
    "b": "avslutning",
    "description": "En inledning är början på något. En avslutning är den sista delen.",
    "examples": [
      "Talets inledning var kort, men avslutningen var längre.",
      "Boken har en spännande inledning och en tydlig avslutning."
    ]
  },
  {
    "a": "epilog",
    "b": "prolog",
    "description": "En prolog står i början av ett verk. En epilog står i slutet.",
    "examples": [
      "Romanen börjar med en prolog och slutar med en epilog.",
      "I prologen möter vi huvudpersonen, och i epilogen får vi veta hur det gick."
    ]
  },
  {
    "a": "ingång",
    "b": "utgång",
    "description": "En ingång är en väg in. En utgång är en väg ut.",
    "examples": [
      "Vi gick in genom huvudingången och lämnade huset genom en annan utgång.",
      "Ingången finns till vänster och utgången till höger."
    ]
  },
  {
    "a": "exklusive",
    "b": "inklusive",
    "description": "Exklusive betyder utan att något räknas med. Inklusive betyder att det räknas med.",
    "examples": [
      "Priset är 200 kronor exklusive moms och 250 kronor inklusive moms.",
      "Resan kostar mindre exklusive frukost än inklusive frukost."
    ]
  },
  {
    "a": "underskatta",
    "b": "överskatta",
    "description": "Att underskatta är att bedöma något som mindre än det är. Att överskatta är att bedöma det som större än det är.",
    "examples": [
      "Underskatta inte uppgiften, men överskatta inte heller svårigheten.",
      "Hon underskattade tiden och överskattade sin hastighet."
    ]
  },
  {
    "a": "exteriör",
    "b": "interiör",
    "description": "Exteriör är utsidan av en byggnad eller ett föremål. Interiör är insidan.",
    "examples": [
      "Husets exteriör är vit, medan interiören är färgstark.",
      "De renoverade både byggnadens exteriör och dess interiör."
    ]
  },
  {
    "a": "jakande",
    "b": "nekande",
    "description": "Ett jakande svar betyder ja. Ett nekande svar betyder nej.",
    "examples": [
      "Hon gav ett jakande svar, men han svarade nekande.",
      "En nick kan vara jakande och en huvudskakning nekande."
    ]
  },
  {
    "a": "insida",
    "b": "utsida",
    "description": "Insidan är den del som finns inuti något. Utsidan är den yttre delen.",
    "examples": [
      "Koppen är vit på insidan och blå på utsidan.",
      "Tvätta både väskans insida och utsida."
    ]
  },
  {
    "a": "synkron",
    "b": "asynkron",
    "description": "Synkron betyder att saker sker samtidigt eller i takt. Asynkron betyder att de inte behöver ske samtidigt.",
    "examples": [
      "Ett synkront möte sker i realtid, medan en asynkron diskussion kan fortsätta senare.",
      "Undervisningen kan vara synkron på morgonen och asynkron på eftermiddagen."
    ]
  },
  {
    "a": "höglänt",
    "b": "låglänt",
    "description": "Höglänt mark ligger högt. Låglänt mark ligger lågt.",
    "examples": [
      "Byn ligger höglänt, men åkern är låglänt.",
      "Höglänta områden är ofta torrare än låglänta områden."
    ]
  },
  {
    "a": "ansvarsfull",
    "b": "ansvarslös",
    "description": "Ansvarsfull betyder att någon tar ansvar. Ansvarslös betyder att någon inte gör det.",
    "examples": [
      "Det var ansvarsfullt att kontrollera allt och ansvarslöst att strunta i reglerna.",
      "En ansvarsfull förare kör försiktigt, medan en ansvarslös förare tar onödiga risker."
    ]
  },
  {
    "a": "indata",
    "b": "utdata",
    "description": "Indata är information som matas in i ett system. Utdata är information som systemet lämnar.",
    "examples": [
      "Programmet läser indata och skapar utdata.",
      "Felaktiga indata kan ge felaktiga utdata."
    ]
  },
  {
    "a": "inmatning",
    "b": "utmatning",
    "description": "Inmatning för information in i ett system. Utmatning för information ut ur systemet.",
    "examples": [
      "Tangentbordet används för inmatning och skärmen för utmatning.",
      "Kontrollera inmatningen innan du granskar utmatningen."
    ]
  },
  {
    "a": "makroskopisk",
    "b": "mikroskopisk",
    "description": "Makroskopisk beskriver något som kan ses utan mikroskop. Mikroskopisk beskriver något mycket litet.",
    "examples": [
      "Sprickan är makroskopisk, men bakterien är mikroskopisk.",
      "Vi började med en makroskopisk bild och gick sedan ner till mikroskopisk nivå."
    ]
  },
  {
    "a": "nedtrappning",
    "b": "upptrappning",
    "description": "Nedtrappning betyder att något minskas stegvis. Upptrappning betyder att det ökas stegvis.",
    "examples": [
      "Efter en upptrappning av konflikten följde en försiktig nedtrappning.",
      "Läkaren planerade först en upptrappning och senare en nedtrappning av dosen."
    ]
  },
  {
    "a": "kortlivad",
    "b": "långlivad",
    "description": "Kortlivad betyder att något varar en kort tid. Långlivad betyder att det varar länge.",
    "examples": [
      "Trenden blev kortlivad, men traditionen är långlivad.",
      "En kortlivad blomma kan växa på en långlivad buske."
    ]
  },
  {
    "a": "inåt",
    "b": "utåt",
    "description": "Inåt betyder mot insidan. Utåt betyder mot utsidan.",
    "examples": [
      "Dörren öppnas inåt, medan grinden öppnas utåt.",
      "Vik kanterna inåt och pressa sedan mitten utåt."
    ]
  },
  {
    "a": "misstro",
    "b": "tilltro",
    "description": "Misstro är brist på förtroende. Tilltro är förtroende för någon eller något.",
    "examples": [
      "Efter misstron växte en försiktig tilltro fram.",
      "Hon kände misstro mot ryktet men tilltro till forskningen."
    ]
  },
  {
    "a": "fantasifull",
    "b": "fantasilös",
    "description": "Fantasifull betyder full av nya idéer. Fantasilös betyder att fantasi och nya idéer saknas.",
    "examples": [
      "Berättelsen var fantasifull, men slutet kändes fantasilöst.",
      "En fantasifull lösning ersatte det fantasilösa förslaget."
    ]
  },
  {
    "a": "förbättring",
    "b": "försämring",
    "description": "En förbättring betyder att något blir bättre. En försämring betyder att det blir sämre.",
    "examples": [
      "Den nya behandlingen gav en förbättring, inte en försämring.",
      "Efter veckor av försämring kom äntligen en tydlig förbättring."
    ]
  },
  {
    "a": "avstigning",
    "b": "påstigning",
    "description": "Påstigning betyder att resenärer går ombord. Avstigning betyder att de går av.",
    "examples": [
      "Vänta med påstigning tills all avstigning är klar.",
      "Påstigning sker fram och avstigning bak."
    ]
  },
  {
    "a": "centralisering",
    "b": "decentralisering",
    "description": "Centralisering samlar ansvar eller beslut på ett ställe. Decentralisering fördelar dem på flera ställen.",
    "examples": [
      "Centralisering gav en gemensam ledning, medan decentralisering gav lokala kontor mer ansvar.",
      "Organisationen gick från centralisering till decentralisering."
    ]
  },
  {
    "a": "inbetalning",
    "b": "utbetalning",
    "description": "En inbetalning är pengar som kommer in på ett konto. En utbetalning är pengar som betalas ut.",
    "examples": [
      "Din inbetalning registrerades före dagens utbetalning.",
      "Företaget väntar på kundens inbetalning innan en utbetalning kan göras."
    ]
  },
  {
    "a": "deltidsanställd",
    "b": "heltidsanställd",
    "description": "En deltidsanställd arbetar en del av heltid. En heltidsanställd arbetar heltid.",
    "examples": [
      "Hon var först deltidsanställd och blev sedan heltidsanställd.",
      "En heltidsanställd arbetar fler timmar än en deltidsanställd."
    ]
  },
  {
    "a": "högintensiv",
    "b": "lågintensiv",
    "description": "Högintensiv betyder att något sker med hög kraft eller aktivitet. Lågintensiv betyder att nivån är låg.",
    "examples": [
      "Passet började lågintensivt och avslutades högintensivt.",
      "Högintensiv träning kräver mer ansträngning än lågintensiv träning."
    ]
  },
  {
    "a": "dubbelsäng",
    "b": "enkelsäng",
    "description": "En dubbelsäng är avsedd för två personer. En enkelsäng är avsedd för en person.",
    "examples": [
      "Rummet har en dubbelsäng, medan det mindre rummet har en enkelsäng.",
      "De bytte ut två enkelsängar mot en dubbelsäng."
    ]
  },
  {
    "a": "födelseår",
    "b": "dödsår",
    "description": "Födelseår är året då någon föddes. Dödsår är året då någon dog.",
    "examples": [
      "På stenen står både hennes födelseår och dödsår.",
      "Födelseåret var 1902 och dödsåret 1987."
    ]
  },
  {
    "a": "köldvåg",
    "b": "värmebölja",
    "description": "En köldvåg är en period med ovanligt kallt väder. En värmebölja är en period med ovanligt varmt väder.",
    "examples": [
      "Vintern gav en köldvåg och sommaren en värmebölja.",
      "Efter förra månadens köldvåg kom plötsligt en värmebölja."
    ]
  },
  {
    "a": "lastning",
    "b": "lossning",
    "description": "Lastning betyder att varor läggs på ett fordon. Lossning betyder att de tas av.",
    "examples": [
      "Lastning sker på morgonen och lossning efter ankomsten.",
      "Föraren hjälper till med både lastning och lossning."
    ]
  },
  {
    "a": "underdel",
    "b": "överdel",
    "description": "Underdelen är den nedre delen av något. Överdelen är den övre delen.",
    "examples": [
      "Skåpets underdel är mörk och överdelen är ljus.",
      "Fäst först underdelen och sedan överdelen."
    ]
  },
  {
    "a": "skattehöjning",
    "b": "skattesänkning",
    "description": "En skattehöjning innebär att skatten ökar. En skattesänkning innebär att skatten minskar.",
    "examples": [
      "Förslaget ändrades från en skattehöjning till en skattesänkning.",
      "En skattehöjning ger högre skatt, medan en skattesänkning ger lägre skatt."
    ]
  },
  {
    "a": "kortfristig",
    "b": "långfristig",
    "description": "Kortfristig gäller en kort tidsperiod. Långfristig gäller en lång tidsperiod.",
    "examples": [
      "Företaget behöver både kortfristig finansiering och en långfristig plan.",
      "En kortfristig skuld betalas tidigare än en långfristig skuld."
    ]
  },
  {
    "a": "kalluft",
    "b": "varmluft",
    "description": "Kalluft är luft med låg temperatur. Varmluft är luft med hög temperatur.",
    "examples": [
      "Fläkten blåser kalluft nu men varmluft på vintern.",
      "Kalluft sjunker ofta, medan varmluft stiger."
    ]
  },
  {
    "a": "bakficka",
    "b": "framficka",
    "description": "En bakficka sitter på baksidan av ett plagg. En framficka sitter på framsidan.",
    "examples": [
      "Plånboken låg i bakfickan och nyckeln i framfickan.",
      "Jeansen har två bakfickor och två framfickor."
    ]
  },
  {
    "a": "primärkälla",
    "b": "sekundärkälla",
    "description": "En primärkälla ger förstahandsinformation. En sekundärkälla återger eller tolkar information från andra källor.",
    "examples": [
      "Dagboken är en primärkälla, medan läroboken är en sekundärkälla.",
      "Kontrollera uppgiften i en primärkälla och använd sekundärkällan som bakgrund."
    ]
  },
  {
    "a": "bruttolön",
    "b": "nettolön",
    "description": "Bruttolön är lön före skatt. Nettolön är det som återstår efter skatt och andra avdrag.",
    "examples": [
      "Bruttolönen står överst på beskedet och nettolönen längst ner.",
      "Nettolönen är lägre än bruttolönen eftersom skatt har dragits av."
    ]
  },
  {
    "a": "inflöde",
    "b": "utflöde",
    "description": "Inflöde är något som strömmar in. Utflöde är något som strömmar ut.",
    "examples": [
      "Sjöns inflöde var större än dess utflöde.",
      "Företaget jämför inflödet av pengar med utflödet."
    ]
  },
  {
    "a": "nedtill",
    "b": "upptill",
    "description": "Nedtill betyder i den nedre delen. Upptill betyder i den övre delen.",
    "examples": [
      "Skåpet är blått nedtill och vitt upptill.",
      "Skriv namnet upptill och datumet nedtill."
    ]
  },
  {
    "a": "innerkant",
    "b": "ytterkant",
    "description": "Innerkanten ligger närmast mitten eller insidan. Ytterkanten ligger längst ut.",
    "examples": [
      "Sy längs innerkanten och klipp vid ytterkanten.",
      "Tallriken är vit i mitten och blå vid ytterkanten, medan innerkanten har ett smalt mönster."
    ]
  },
  {
    "a": "krympning",
    "b": "svällning",
    "description": "Krympning betyder att något blir mindre. Svällning betyder att det blir större eller tjockare.",
    "examples": [
      "Torkning kan ge krympning, medan fukt kan ge svällning.",
      "Materialets krympning på vintern och svällning på sommaren måste räknas med."
    ]
  },
  {
    "a": "säljbar",
    "b": "osäljbar",
    "description": "Säljbar betyder att något går att sälja. Osäljbar betyder att det inte går att sälja.",
    "examples": [
      "Den hela varan är säljbar, men den skadade är osäljbar.",
      "Efter reparationen blev produkten säljbar i stället för osäljbar."
    ]
  },
  {
    "a": "upplöslig",
    "b": "oupplöslig",
    "description": "Upplöslig betyder att ett ämne kan lösas i en vätska. Oupplöslig betyder att det inte kan lösas där.",
    "examples": [
      "Salt är upplösligt i vatten, men sand är i stort sett oupplöslig.",
      "Ett upplösligt ämne försvinner i lösningen, medan ett oupplösligt ämne blir kvar."
    ]
  },
  {
    "a": "rekordhög",
    "b": "rekordlåg",
    "description": "Rekordhög betyder högre än någonsin tidigare. Rekordlåg betyder lägre än någonsin tidigare.",
    "examples": [
      "Temperaturen var rekordhög i juli och rekordlåg i januari.",
      "Efter en rekordhög försäljning följde en rekordlåg månad."
    ]
  },
  {
    "a": "längsgående",
    "b": "tvärgående",
    "description": "Längsgående betyder i samma riktning som längden. Tvärgående betyder tvärs över längdriktningen.",
    "examples": [
      "Bron har längsgående balkar och tvärgående stöd.",
      "Det längsgående spåret korsas av en tvärgående linje."
    ]
  },
  {
    "a": "offentligägd",
    "b": "privatägd",
    "description": "Offentligägd betyder ägd av staten, en region eller en kommun. Privatägd betyder ägd av privata personer eller företag.",
    "examples": [
      "Det ena bolaget är offentligägt och det andra privatägt.",
      "En offentligägd verksamhet kan säljas och bli privatägd."
    ]
  },
  {
    "a": "kortsiktig",
    "b": "långsiktig",
    "description": "Kortsiktig gäller den närmaste tiden. Långsiktig gäller en längre tid framåt.",
    "examples": [
      "Den kortsiktiga lösningen hjälpte i dag, men vi behöver också en långsiktig plan.",
      "En kortsiktig vinst kan skada ett långsiktigt mål."
    ]
  },
  {
    "a": "högkonjunktur",
    "b": "lågkonjunktur",
    "description": "Högkonjunktur är en period med stark ekonomi och hög aktivitet. Lågkonjunktur är en period med svagare ekonomi och lägre aktivitet.",
    "examples": [
      "Arbetslösheten sjunker ofta i högkonjunktur och stiger i lågkonjunktur.",
      "Efter flera år av högkonjunktur gick ekonomin in i en lågkonjunktur."
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
