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
  },
  {
    "a": "barn",
    "b": "vuxen",
    "description": "Barn och vuxen beskriver människor i olika åldersgrupper.",
    "examples": [
      "Ett barn behöver ofta hjälp av en vuxen.",
      "Hon var barn då, men nu är hon vuxen."
    ]
  },
  {
    "a": "acceleration",
    "b": "retardation",
    "description": "Acceleration betyder att hastigheten ökar. Retardation betyder att hastigheten minskar.",
    "examples": [
      "Bilen fick hög acceleration när föraren gasade och retardation när hon bromsade.",
      "Tågets acceleration följdes av en jämn retardation inför stationen."
    ]
  },
  {
    "a": "filantrop",
    "b": "misantrop",
    "description": "En filantrop vill människors bästa. En misantrop känner motvilja mot människor.",
    "examples": [
      "Filantropen skänkte pengar till samhället, medan misantropen undvek människor.",
      "Hon beskrevs som filantrop, inte som misantrop."
    ]
  },
  {
    "a": "extrovert",
    "b": "introvert",
    "description": "En extrovert person söker ofta socialt umgänge. En introvert person hämtar ofta energi i lugn och ensamhet.",
    "examples": [
      "Han är extrovert och pratar gärna med nya människor, medan hon är mer introvert.",
      "En extrovert person kan trivas på festen och en introvert person i ett mindre sällskap."
    ]
  },
  {
    "a": "demokrati",
    "b": "diktatur",
    "description": "I en demokrati väljer folket sina ledare. I en diktatur är makten samlad hos en person eller en liten grupp.",
    "examples": [
      "Medborgarna kan rösta fritt i en demokrati men saknar ofta den möjligheten i en diktatur.",
      "Landet gick från diktatur till demokrati."
    ]
  },
  {
    "a": "svart",
    "b": "vit",
    "description": "Svart och vit är färger som ofta betraktas som varandras motsatser.",
    "examples": [
      "Texten är svart och papperet är vitt.",
      "Hon valde en vit skjorta i stället för en svart."
    ]
  },
  {
    "a": "antonym",
    "b": "synonym",
    "description": "En antonym har motsatt betydelse. En synonym har samma eller nästan samma betydelse.",
    "examples": [
      "Liten är en antonym till stor, medan enorm är en synonym till jättestor.",
      "Slå upp en antonym när du söker en motsats och en synonym när du söker ett liknande ord."
    ]
  },
  {
    "a": "berg",
    "b": "dal",
    "description": "Ett berg höjer sig över landskapet. En dal är ett lågt område mellan höjder.",
    "examples": [
      "Vägen går över ett berg och ner i en dal.",
      "Byn ligger i dalen nedanför berget."
    ]
  },
  {
    "a": "bakom",
    "b": "framför",
    "description": "Bakom betyder på baksidan av något. Framför betyder på framsidan.",
    "examples": [
      "Cykeln står bakom huset och bilen står framför huset.",
      "Hon gick framför mig, medan han gick bakom."
    ]
  },
  {
    "a": "generell",
    "b": "specifik",
    "description": "Generell betyder allmän och övergripande. Specifik betyder tydligt avgränsad eller exakt.",
    "examples": [
      "Rapporten ger först en generell bild och sedan specifik information.",
      "Frågan var generell, men svaret var specifikt."
    ]
  },
  {
    "a": "explicit",
    "b": "implicit",
    "description": "Explicit betyder tydligt uttryckt. Implicit betyder underförstått utan att sägas direkt.",
    "examples": [
      "Regeln var explicit, medan förväntningen bara var implicit.",
      "Hon gav ett explicit svar på det som tidigare varit implicit."
    ]
  },
  {
    "a": "pluralis",
    "b": "singularis",
    "description": "Pluralis är en form för flera. Singularis är en form för en.",
    "examples": [
      "Ordet hus kan stå i både singularis och pluralis.",
      "Katt står här i singularis, medan katter står i pluralis."
    ]
  },
  {
    "a": "ost",
    "b": "väst",
    "description": "Ost är ett äldre eller sjömansmässigt ord för öster. Väst är motsatt väderstreck.",
    "examples": [
      "Solen går upp i ost och ner i väst.",
      "Båten seglade först mot ost och sedan mot väst."
    ]
  },
  {
    "a": "dividera",
    "b": "multiplicera",
    "description": "Att dividera är att dela ett tal. Att multiplicera är att gångra ett tal.",
    "examples": [
      "Dividera tolv med tre och multiplicera sedan svaret med två.",
      "Hon multiplicerade först talen men skulle egentligen dividera dem."
    ]
  },
  {
    "a": "ebb",
    "b": "flod",
    "description": "Ebb är lågvatten när havet drar sig tillbaka. Flod är högvatten när vattnet stiger.",
    "examples": [
      "Båten stod på botten vid ebb men flöt igen vid flod.",
      "Tidvattnet växlar mellan ebb och flod."
    ]
  },
  {
    "a": "lik",
    "b": "olik",
    "description": "Lik betyder att något påminner om något annat. Olik betyder att det skiljer sig.",
    "examples": [
      "Syskonen är lika till utseendet men olika till sättet.",
      "De två svaren verkar lika, men detaljerna är olika."
    ]
  },
  {
    "a": "delbar",
    "b": "odelbar",
    "description": "Delbar betyder att något kan delas. Odelbar betyder att det inte kan delas i det aktuella sammanhanget.",
    "examples": [
      "Talet tio är delbart med två, men elva är odelbart med två.",
      "Egendomen var delbar, medan den andra tillgången behandlades som odelbar."
    ]
  },
  {
    "a": "majoritet",
    "b": "minoritet",
    "description": "En majoritet är den större delen av en grupp. En minoritet är den mindre delen.",
    "examples": [
      "En majoritet röstade ja och en minoritet röstade nej.",
      "Förslaget stöddes av majoriteten men inte av minoriteten."
    ]
  },
  {
    "a": "irrationell",
    "b": "rationell",
    "description": "Rationell betyder grundad på förnuft. Irrationell betyder att resonemanget inte följer förnuftet.",
    "examples": [
      "Beslutet var rationellt, men rädslan bakom det var irrationell.",
      "Hon försökte ersätta den irrationella tanken med en rationell bedömning."
    ]
  },
  {
    "a": "human",
    "b": "inhuman",
    "description": "Human betyder medmänsklig och hänsynsfull. Inhuman betyder omänsklig eller grym.",
    "examples": [
      "De krävde en human behandling och protesterade mot den inhumana metoden.",
      "En human lösning ersatte de inhumana villkoren."
    ]
  },
  {
    "a": "femininum",
    "b": "maskulinum",
    "description": "Femininum och maskulinum är grammatiska genus som betecknar kvinnligt respektive manligt.",
    "examples": [
      "I språket tillhör det ena ordet femininum och det andra maskulinum.",
      "Läraren förklarade skillnaden mellan femininum och maskulinum."
    ]
  },
  {
    "a": "gemen",
    "b": "versal",
    "description": "En gemen är en liten bokstav. En versal är en stor bokstav.",
    "examples": [
      "Ordet börjar med en versal och fortsätter med gemener.",
      "Skriv namnet med versal, inte med gemen, i början."
    ]
  },
  {
    "a": "högtryck",
    "b": "lågtryck",
    "description": "Högtryck är ett område med högre lufttryck. Lågtryck är ett område med lägre lufttryck.",
    "examples": [
      "Högtryck gav klart väder, medan lågtryck förde med sig regn.",
      "Ett lågtryck närmar sig efter flera dagar med högtryck."
    ]
  },
  {
    "a": "altruism",
    "b": "egoism",
    "description": "Altruism sätter andras bästa främst. Egoism sätter det egna intresset främst.",
    "examples": [
      "Hennes altruism fick henne att hjälpa andra utan belöning, medan hans egoism styrde valet.",
      "Handlingen kan ses som altruism snarare än egoism."
    ]
  },
  {
    "a": "nadir",
    "b": "zenit",
    "description": "Nadir är punkten rakt under betraktaren. Zenit är punkten rakt ovanför.",
    "examples": [
      "Zenit ligger över våra huvuden och nadir rakt under oss.",
      "Stjärnan närmade sig zenit medan den motsatta punkten var nadir."
    ]
  },
  {
    "a": "profan",
    "b": "sakral",
    "description": "Profan betyder världslig eller icke-religiös. Sakral betyder helig eller religiös.",
    "examples": [
      "Museet visar både profan konst och sakrala föremål.",
      "Musiken började profant men fick senare en sakral prägel."
    ]
  },
  {
    "a": "lika",
    "b": "olika",
    "description": "Lika betyder att saker stämmer överens. Olika betyder att de skiljer sig åt.",
    "examples": [
      "Glasen är lika stora men har olika färger.",
      "Vi tänker olika trots att våra mål är lika."
    ]
  },
  {
    "a": "likformig",
    "b": "olikformig",
    "description": "Likformig betyder att något har samma form eller karaktär. Olikformig betyder att det varierar.",
    "examples": [
      "Mönstret är likformigt på ena sidan och olikformigt på den andra.",
      "En likformig yta är jämnare än en olikformig yta."
    ]
  },
  {
    "a": "antimateria",
    "b": "materia",
    "description": "Materia består av vanliga partiklar. Antimateria består av motsvarande antipartiklar.",
    "examples": [
      "När materia möter antimateria kan båda omvandlas till energi.",
      "Forskaren jämförde egenskaper hos materia och antimateria."
    ]
  },
  {
    "a": "icke-metall",
    "b": "metall",
    "description": "En metall har typiska metalliska egenskaper. En icke-metall saknar dessa egenskaper.",
    "examples": [
      "Järn är en metall, medan svavel är en icke-metall.",
      "Tabellen skiljer mellan metall och icke-metall."
    ]
  },
  {
    "a": "hane",
    "b": "hona",
    "description": "Hane och hona betecknar biologiskt kön hos många djur.",
    "examples": [
      "Fågeln till vänster är en hane och den till höger en hona.",
      "Både hanen och honan vaktar boet."
    ]
  },
  {
    "a": "basisk",
    "b": "sur",
    "description": "En basisk lösning har högt pH. En sur lösning har lågt pH.",
    "examples": [
      "Tvållösningen är basisk, medan citronsaften är sur.",
      "Vattnet gick från surt till basiskt efter behandlingen."
    ]
  },
  {
    "a": "genväg",
    "b": "omväg",
    "description": "En genväg är en kortare väg. En omväg är en längre väg runt något.",
    "examples": [
      "Vi tog en genväg genom parken i stället för en omväg runt kvarteret.",
      "Genvägen sparade tid, men omvägen var lättare att gå."
    ]
  },
  {
    "a": "baksida",
    "b": "framsida",
    "description": "Baksidan är den bakre sidan av något. Framsidan är den främre sidan.",
    "examples": [
      "Adressen står på baksidan och bilden på framsidan.",
      "Kontrollera både framsidan och baksidan av kortet."
    ]
  },
  {
    "a": "krokig",
    "b": "rak",
    "description": "Krokig betyder böjd eller full av svängar. Rak betyder utan böjar.",
    "examples": [
      "Den gamla vägen är krokig, men den nya är rak.",
      "Rita först en rak linje och sedan en krokig."
    ]
  },
  {
    "a": "konstgjord",
    "b": "naturlig",
    "description": "Konstgjord betyder skapad av människor. Naturlig betyder uppkommen i naturen.",
    "examples": [
      "Sjön är konstgjord, medan bäcken är naturlig.",
      "De valde naturligt ljus i stället för konstgjort ljus."
    ]
  },
  {
    "a": "belägga",
    "b": "vederlägga",
    "description": "Att belägga ett påstående är att visa stöd för det. Att vederlägga det är att visa att det är fel.",
    "examples": [
      "Studien kunde belägga den första teorin och vederlägga den andra.",
      "Forskaren försökte belägga sitt påstående, men kritikern kunde vederlägga det."
    ]
  },
  {
    "a": "molnfri",
    "b": "molnig",
    "description": "Molnfri betyder utan moln. Molnig betyder att det finns många moln på himlen.",
    "examples": [
      "Morgonen var molnfri, men eftermiddagen blev molnig.",
      "En molnig himmel klarnade och blev nästan molnfri."
    ]
  },
  {
    "a": "felaktig",
    "b": "korrekt",
    "description": "Felaktig betyder att något innehåller fel. Korrekt betyder att det stämmer.",
    "examples": [
      "Det första svaret var felaktigt, men det andra var korrekt.",
      "Rätta den felaktiga uppgiften så att informationen blir korrekt."
    ]
  },
  {
    "a": "förminska",
    "b": "förstora",
    "description": "Att förminska är att göra något mindre. Att förstora är att göra det större.",
    "examples": [
      "Du kan förminska bilden eller förstora den på skärmen.",
      "Hon förminskade rubriken men förstorade fotografiet."
    ]
  },
  {
    "a": "nederlag",
    "b": "seger",
    "description": "Nederlag betyder att förlora. Seger betyder att vinna.",
    "examples": [
      "Efter gårdagens nederlag kom dagens seger.",
      "Laget firade sin seger och lärde sig av sitt tidigare nederlag."
    ]
  },
  {
    "a": "anjon",
    "b": "katjon",
    "description": "En anjon är en negativt laddad jon. En katjon är en positivt laddad jon.",
    "examples": [
      "Kloridjonen är en anjon och natriumjonen en katjon.",
      "En anjon dras mot den positiva elektroden och en katjon mot den negativa."
    ]
  },
  {
    "a": "apolitisk",
    "b": "politisk",
    "description": "Apolitisk betyder utan politisk inriktning. Politisk betyder att något rör politik.",
    "examples": [
      "Föreningen säger sig vara apolitisk, medan kampanjen är tydligt politisk.",
      "Samtalet började apolitiskt men blev snart politiskt."
    ]
  },
  {
    "a": "uppladdning",
    "b": "urladdning",
    "description": "Uppladdning fyller ett batteri med energi. Urladdning minskar den lagrade energin.",
    "examples": [
      "Batteriet behöver uppladdning efter en lång urladdning.",
      "Snabb uppladdning följdes av långsam urladdning."
    ]
  },
  {
    "a": "fysisk",
    "b": "psykisk",
    "description": "Fysisk rör kroppen. Psykisk rör tankar, känslor och mående.",
    "examples": [
      "Träningen kräver fysisk styrka, medan pressen kan vara psykisk.",
      "Hon fick både fysisk och psykisk hjälp."
    ]
  },
  {
    "a": "bakgrund",
    "b": "förgrund",
    "description": "Bakgrunden ligger längre bak i en bild. Förgrunden ligger närmast betraktaren.",
    "examples": [
      "Berget syns i bakgrunden och trädet i förgrunden.",
      "Fotografen gjorde förgrunden skarp och bakgrunden suddig."
    ]
  },
  {
    "a": "betydelsefull",
    "b": "betydelselös",
    "description": "Betydelsefull betyder viktig. Betydelselös betyder utan betydelse eller värde i sammanhanget.",
    "examples": [
      "Beslutet var betydelsefullt, men den lilla detaljen var betydelselös.",
      "Det som först verkade betydelselöst blev senare betydelsefullt."
    ]
  },
  {
    "a": "inkomplett",
    "b": "komplett",
    "description": "Inkomplett betyder att delar saknas. Komplett betyder att allt som behövs finns med.",
    "examples": [
      "Den första listan var inkomplett, men den nya är komplett.",
      "Samlingen blir komplett när den inkompletta delen fylls i."
    ]
  },
  {
    "a": "grumlig",
    "b": "klar",
    "description": "Grumlig betyder att en vätska eller sikt är oklar. Klar betyder att man kan se tydligt igenom.",
    "examples": [
      "Vattnet var grumligt i går men är klart i dag.",
      "Den grumliga vätskan filtrerades tills den blev klar."
    ]
  },
  {
    "a": "avta",
    "b": "tillta",
    "description": "Avta betyder att minska i styrka. Tillta betyder att öka i styrka.",
    "examples": [
      "Vinden började avta på kvällen men väntas tillta i morgon.",
      "Smärtan tilltog först och började sedan avta."
    ]
  },
  {
    "a": "optimism",
    "b": "pessimism",
    "description": "Optimism är en tro på att det kommer att gå bra. Pessimism är en förväntan att det kommer att gå dåligt.",
    "examples": [
      "Hennes optimism gav gruppen hopp, medan hans pessimism gjorde dem tveksamma.",
      "Trots all pessimism behöll hon sin optimism."
    ]
  },
  {
    "a": "optimistisk",
    "b": "pessimistisk",
    "description": "Optimistisk betyder hoppfull inför framtiden. Pessimistisk betyder att man väntar sig ett sämre resultat.",
    "examples": [
      "Hon är optimistisk om planen, men han är pessimistisk.",
      "Prognosen gick från pessimistisk till mer optimistisk."
    ]
  },
  {
    "a": "explodera",
    "b": "implodera",
    "description": "Explodera betyder att brista utåt. Implodera betyder att falla samman inåt.",
    "examples": [
      "En behållare kan explodera av högt inre tryck eller implodera av högt yttre tryck.",
      "Stjärnan började implodera innan materialet kunde explodera utåt."
    ]
  },
  {
    "a": "altruistisk",
    "b": "egoistisk",
    "description": "Altruistisk betyder inriktad på andras bästa. Egoistisk betyder främst inriktad på det egna bästa.",
    "examples": [
      "Det altruistiska beslutet hjälpte många, medan det egoistiska beslutet bara gynnade en person.",
      "Hon handlade altruistiskt i stället för egoistiskt."
    ]
  },
  {
    "a": "enfärgad",
    "b": "flerfärgad",
    "description": "Enfärgad betyder att något har en färg. Flerfärgad betyder att det har flera färger.",
    "examples": [
      "Den ena tröjan är enfärgad och den andra flerfärgad.",
      "Hon bytte den flerfärgade mattan mot en enfärgad."
    ]
  },
  {
    "a": "fullkomlig",
    "b": "ofullkomlig",
    "description": "Fullkomlig betyder fullständig eller utan brister. Ofullkomlig betyder att brister finns.",
    "examples": [
      "Ingen lösning är fullkomlig, men den första var särskilt ofullkomlig.",
      "Resultatet gick från ofullkomligt till nästan fullkomligt."
    ]
  },
  {
    "a": "trångsynt",
    "b": "vidsynt",
    "description": "Trångsynt betyder ovillig att acceptera andra perspektiv. Vidsynt betyder öppen för olika idéer.",
    "examples": [
      "Ett trångsynt synsätt ersattes av ett mer vidsynt.",
      "Hon är vidsynt och försöker undvika trångsynta bedömningar."
    ]
  },
  {
    "a": "monogam",
    "b": "polygam",
    "description": "Monogam betyder att ha en partner åt gången. Polygam betyder att ha flera partners samtidigt.",
    "examples": [
      "Arten är oftast monogam, men en närbesläktad art är polygam.",
      "Ett monogamt system skiljer sig från ett polygamt."
    ]
  },
  {
    "a": "exponentiera",
    "b": "logaritmera",
    "description": "Att exponentiera och att logaritmera är omvända matematiska operationer.",
    "examples": [
      "Exponentiera värdet för att återgå efter att du har logaritmerat det.",
      "Programmet kan både logaritmera och exponentiera tal."
    ]
  },
  {
    "a": "medlut",
    "b": "motlut",
    "description": "Medlut är en sträcka som lutar nedåt i färdriktningen. Motlut är en sträcka som lutar uppåt.",
    "examples": [
      "Cykeln rullade snabbt i medlutet men långsamt i motlutet.",
      "Efter ett långt motlut kom ett välkommet medlut."
    ]
  },
  {
    "a": "förindustriell",
    "b": "postindustriell",
    "description": "Förindustriell beskriver tiden före industrialiseringen. Postindustriell beskriver tiden efter industrisamhällets dominerande fas.",
    "examples": [
      "Byn hade en förindustriell ekonomi, medan staden blev postindustriell.",
      "Studien jämför förindustriella samhällen med postindustriella samhällen."
    ]
  },
  {
    "a": "benign",
    "b": "malign",
    "description": "Benign betyder godartad. Malign betyder elakartad.",
    "examples": [
      "Provet visade att tumören var benign och inte malign.",
      "En benign förändring behandlas annorlunda än en malign."
    ]
  },
  {
    "a": "samarbetsovillig",
    "b": "samarbetsvillig",
    "description": "Samarbetsovillig betyder att någon inte vill samarbeta. Samarbetsvillig betyder att någon gärna samarbetar.",
    "examples": [
      "Han var först samarbetsovillig men blev senare samarbetsvillig.",
      "En samarbetsvillig grupp löser uppgiften lättare än en samarbetsovillig."
    ]
  },
  {
    "a": "oöversiktlig",
    "b": "översiktlig",
    "description": "Oöversiktlig betyder svår att få en helhetsbild av. Översiktlig betyder att helheten är lätt att se.",
    "examples": [
      "Den gamla tabellen var oöversiktlig, men den nya är översiktlig.",
      "Gör kartan mer översiktlig och mindre oöversiktlig."
    ]
  },
  {
    "a": "betydlig",
    "b": "obetydlig",
    "description": "Betydlig betyder stor eller märkbar. Obetydlig betyder liten eller knappt märkbar.",
    "examples": [
      "Kostnaden var betydlig, medan skillnaden i tid var obetydlig.",
      "En obetydlig förändring ledde senare till en betydlig förbättring."
    ]
  },
  {
    "a": "efterled",
    "b": "förled",
    "description": "Ett förled står först i en sammansättning. Ett efterled står sist.",
    "examples": [
      "I ordet sommarhus är sommar förled och hus efterled.",
      "Byt förled men behåll samma efterled."
    ]
  },
  {
    "a": "abiotisk",
    "b": "biotisk",
    "description": "Abiotisk rör icke-levande faktorer. Biotisk rör levande organismer.",
    "examples": [
      "Temperatur är en abiotisk faktor, medan konkurrens mellan arter är en biotisk faktor.",
      "Miljön påverkas av både abiotiska och biotiska förhållanden."
    ]
  },
  {
    "a": "konsumtion",
    "b": "produktion",
    "description": "Produktion skapar varor eller tjänster. Konsumtion använder dem.",
    "examples": [
      "Produktionen ökade för att möta en högre konsumtion.",
      "Företaget jämför produktion med konsumtion varje månad."
    ]
  },
  {
    "a": "dysfemism",
    "b": "eufemism",
    "description": "En eufemism mildrar ett uttryck. En dysfemism gör uttrycket hårdare eller mer nedsättande.",
    "examples": [
      "Hon använde en eufemism för att låta vänlig, medan han valde en dysfemism.",
      "Samma sak kan beskrivas med en eufemism eller en dysfemism."
    ]
  },
  {
    "a": "aphelium",
    "b": "perihelium",
    "description": "Aphelium är den punkt där ett objekt är längst från solen. Perihelium är punkten närmast solen.",
    "examples": [
      "Planeten rör sig längst bort vid aphelium och närmast vid perihelium.",
      "Avståndet är större i aphelium än i perihelium."
    ]
  },
  {
    "a": "apogeum",
    "b": "perigeum",
    "description": "Apogeum är den punkt i en bana som ligger längst från jorden. Perigeum är punkten närmast jorden.",
    "examples": [
      "Månen är längre bort i apogeum och närmare i perigeum.",
      "Satellitens bana går mellan perigeum och apogeum."
    ]
  },
  {
    "a": "feminin",
    "b": "maskulin",
    "description": "Feminin betyder kvinnligt präglad. Maskulin betyder manligt präglad.",
    "examples": [
      "Formen beskrevs som feminin, medan den andra kallades maskulin.",
      "Språket använder både feminina och maskulina former."
    ]
  },
  {
    "a": "kvinnlig",
    "b": "manlig",
    "description": "Kvinnlig betyder som hör till eller gäller kvinnor. Manlig betyder som hör till eller gäller män.",
    "examples": [
      "Tävlingen har en kvinnlig och en manlig klass.",
      "Den kvinnliga huvudrollen möter den manliga huvudrollen."
    ]
  },
  {
    "a": "ordfattig",
    "b": "ordrik",
    "description": "Ordfattig betyder att få ord används. Ordrik betyder att många ord används.",
    "examples": [
      "Texten var ordfattig, men talet var mycket ordrikt.",
      "En ordrik förklaring ersatte det ordfattiga svaret."
    ]
  },
  {
    "a": "inom",
    "b": "utom",
    "description": "Inom betyder på insidan av en gräns. Utom betyder utanför gränsen.",
    "examples": [
      "Alla inom området var säkra, men de utom området fick vänta.",
      "Regeln gäller inom landet men inte utom landet."
    ]
  },
  {
    "a": "ihop",
    "b": "isär",
    "description": "Ihop betyder tillsammans eller sammanfogat. Isär betyder åtskilt.",
    "examples": [
      "Sätt ihop delarna och ta sedan isär dem igen.",
      "Böckerna stod ihop först men flyttades isär."
    ]
  },
  {
    "a": "baklänges",
    "b": "framåt",
    "description": "Baklänges betyder i riktning bakåt. Framåt betyder i riktning mot framsidan eller framtiden.",
    "examples": [
      "Han gick baklänges några steg och fortsatte sedan framåt.",
      "Filmen spelades först baklänges och sedan framåt."
    ]
  },
  {
    "a": "skriftspråk",
    "b": "talspråk",
    "description": "Skriftspråk används i skrift. Talspråk används när vi talar.",
    "examples": [
      "Uttrycket är vanligt i talspråk men ovanligt i skriftspråk.",
      "Skriftspråket är mer formellt än talspråket i exemplet."
    ]
  },
  {
    "a": "excentrisk",
    "b": "koncentrisk",
    "description": "Excentrisk betyder att mittpunkterna inte sammanfaller. Koncentrisk betyder att former har samma mittpunkt.",
    "examples": [
      "De koncentriska cirklarna har samma centrum, men den excentriska cirkeln ligger förskjuten.",
      "Lagret kan monteras koncentriskt eller excentriskt."
    ]
  },
  {
    "a": "höstdagjämning",
    "b": "vårdagjämning",
    "description": "Vårdagjämningen inträffar på våren. Höstdagjämningen inträffar på hösten.",
    "examples": [
      "Dagarna blir längre efter vårdagjämningen och kortare efter höstdagjämningen.",
      "Tiden mellan vårdagjämning och höstdagjämning omfattar sommarhalvåret."
    ]
  },
  {
    "a": "impopularitet",
    "b": "popularitet",
    "description": "Popularitet betyder att något är omtyckt. Impopularitet betyder att det inte är omtyckt.",
    "examples": [
      "Förslaget växte i popularitet efter en period av impopularitet.",
      "Hög popularitet kan snabbt bytas mot impopularitet."
    ]
  },
  {
    "a": "illegal",
    "b": "legal",
    "description": "Legal betyder tillåten enligt lag. Illegal betyder förbjuden enligt lag.",
    "examples": [
      "Verksamheten var illegal men blev senare legal.",
      "En legal handling följer lagen, medan en illegal handling bryter mot den."
    ]
  },
  {
    "a": "heterodox",
    "b": "ortodox",
    "description": "Ortodox betyder att följa en etablerad lära. Heterodox betyder att avvika från den.",
    "examples": [
      "Den ortodoxa tolkningen utmanades av en heterodox idé.",
      "Han lämnade den heterodoxa gruppen för en mer ortodox riktning."
    ]
  },
  {
    "a": "entydig",
    "b": "tvetydig",
    "description": "Entydig betyder att bara en tolkning är rimlig. Tvetydig betyder att flera tolkningar är möjliga.",
    "examples": [
      "Instruktionen var entydig, men svaret blev tvetydigt.",
      "Skriv om den tvetydiga meningen så att den blir entydig."
    ]
  },
  {
    "a": "encellig",
    "b": "flercellig",
    "description": "En encellig organism består av en cell. En flercellig organism består av många celler.",
    "examples": [
      "En bakterie är encellig, medan en människa är flercellig.",
      "Mikroskopet visade både encelliga och flercelliga organismer."
    ]
  },
  {
    "a": "hövlig",
    "b": "ohövlig",
    "description": "Hövlig betyder artig. Ohövlig betyder oartig.",
    "examples": [
      "Hon gav ett hövligt svar trots den ohövliga frågan.",
      "Var hövlig och undvik en ohövlig ton."
    ]
  },
  {
    "a": "osjälvständighet",
    "b": "självständighet",
    "description": "Självständighet betyder att kunna bestämma och agera på egen hand. Osjälvständighet betyder beroende av andra.",
    "examples": [
      "Övningen tränar självständighet och minskar osjälvständighet.",
      "Landet gick från osjälvständighet till självständighet."
    ]
  },
  {
    "a": "kryddstark",
    "b": "kryddsvag",
    "description": "Kryddstark mat har kraftig kryddning. Kryddsvag mat har mild kryddning.",
    "examples": [
      "Grytan är kryddstark, men soppan är kryddsvag.",
      "Hon valde den kryddsvaga såsen i stället för den kryddstarka."
    ]
  },
  {
    "a": "pietetsfull",
    "b": "pietetslös",
    "description": "Pietetsfull betyder respektfull mot något värdefullt eller gammalt. Pietetslös betyder utan sådan respekt.",
    "examples": [
      "Huset renoverades pietetsfullt i stället för pietetslöst.",
      "En pietetsfull restaurering bevarar detaljer som en pietetslös ändring kan förstöra."
    ]
  },
  {
    "a": "oxidation",
    "b": "reduktion",
    "description": "Oxidation innebär att elektroner avges. Reduktion innebär att elektroner tas upp.",
    "examples": [
      "Oxidation och reduktion sker samtidigt i en redoxreaktion.",
      "Ämnet genomgick oxidation, medan det andra genomgick reduktion."
    ]
  },
  {
    "a": "endotermisk",
    "b": "exotermisk",
    "description": "En endotermisk process tar upp värme. En exotermisk process avger värme.",
    "examples": [
      "Smältning är endotermisk, medan förbränning är exotermisk.",
      "Den endotermiska reaktionen kylde omgivningen och den exoterma värmde den."
    ]
  },
  {
    "a": "devalvera",
    "b": "revalvera",
    "description": "Att devalvera är att sänka en valutas officiella värde. Att revalvera är att höja det.",
    "examples": [
      "Regeringen valde att devalvera valutan men diskuterade senare att revalvera den.",
      "Att devalvera och att revalvera ger motsatta förändringar i växelkursen."
    ]
  },
  {
    "a": "antipati",
    "b": "sympati",
    "description": "Sympati är en känsla av gillande eller medkänsla. Antipati är en känsla av motvilja.",
    "examples": [
      "Hon kände sympati för den ena personen och antipati mot den andra.",
      "Den första antipatin växte senare till sympati."
    ]
  },
  {
    "a": "asymmetri",
    "b": "symmetri",
    "description": "Symmetri betyder att delar speglar eller balanserar varandra. Asymmetri betyder att denna balans saknas.",
    "examples": [
      "Fjärilen visar tydlig symmetri, medan målningen bygger på asymmetri.",
      "Arkitekten blandade symmetri med avsiktlig asymmetri."
    ]
  },
  {
    "a": "crescendo",
    "b": "diminuendo",
    "description": "Crescendo betyder att musiken blir starkare. Diminuendo betyder att den blir svagare.",
    "examples": [
      "Stycket byggs upp med ett crescendo och avslutas med ett diminuendo.",
      "Efter ett långt crescendo följde ett snabbt diminuendo."
    ]
  },
  {
    "a": "endogen",
    "b": "exogen",
    "description": "Endogen betyder att något har sitt ursprung inifrån. Exogen betyder att det kommer utifrån.",
    "examples": [
      "Den endogena processen drivs inifrån systemet och den exogena av yttre faktorer.",
      "Modellen skiljer mellan endogena och exogena orsaker."
    ]
  },
  {
    "a": "heterozygot",
    "b": "homozygot",
    "description": "Heterozygot betyder att två genvarianter är olika. Homozygot betyder att de är lika.",
    "examples": [
      "Individen är heterozygot för den ena genen och homozygot för den andra.",
      "Ett heterozygot anlag har två olika alleler, medan ett homozygot har två lika."
    ]
  },
  {
    "a": "irreguljär",
    "b": "reguljär",
    "description": "Reguljär betyder regelbunden eller enligt reglerna. Irreguljär betyder oregelbunden eller avvikande.",
    "examples": [
      "Trafiken var reguljär på dagen men irreguljär på natten.",
      "En irreguljär form ersatte den reguljära formen."
    ]
  },
  {
    "a": "glesna",
    "b": "tätna",
    "description": "Glesna betyder att bli mindre tät. Tätna betyder att bli tätare.",
    "examples": [
      "Molnen började glesna på morgonen men tätna igen på kvällen.",
      "Skogen glesnar nära vägen och tätnar längre in."
    ]
  },
  {
    "a": "småskalig",
    "b": "storskalig",
    "description": "Småskalig betyder genomförd i liten omfattning. Storskalig betyder genomförd i stor omfattning.",
    "examples": [
      "Projektet började småskaligt och blev senare storskaligt.",
      "Småskalig odling kräver andra metoder än storskalig odling."
    ]
  },
  {
    "a": "sambo",
    "b": "särbo",
    "description": "En sambo bor tillsammans med sin partner. En särbo har en partner men bor på annan adress.",
    "examples": [
      "De var särbor i två år innan de blev sambor.",
      "Som sambo delar hon bostad, men som särbo gjorde hon inte det."
    ]
  },
  {
    "a": "likström",
    "b": "växelström",
    "description": "Likström går i samma riktning. Växelström byter riktning regelbundet.",
    "examples": [
      "Batteriet ger likström, medan vägguttaget ger växelström.",
      "Omvandlaren gör växelström av likström."
    ]
  },
  {
    "a": "barnförbjuden",
    "b": "barntillåten",
    "description": "Barnförbjuden betyder att barn inte får delta. Barntillåten betyder att barn får delta.",
    "examples": [
      "Den sena filmen är barnförbjuden, men matinén är barntillåten.",
      "Välj den barntillåtna föreställningen i stället för den barnförbjudna."
    ]
  },
  {
    "a": "oräknebar",
    "b": "räknebar",
    "description": "Räknebar betyder att något kan räknas. Oräknebar betyder att det inte kan räknas som enskilda enheter.",
    "examples": [
      "Stolar är räknebara, medan sand ofta behandlas som oräknebar.",
      "Substantivet är räknebart i den ena betydelsen och oräknebart i den andra."
    ]
  },
  {
    "a": "alkoholfri",
    "b": "alkoholhaltig",
    "description": "Alkoholfri betyder utan alkohol. Alkoholhaltig betyder att alkohol finns i drycken.",
    "examples": [
      "Hon valde en alkoholfri dryck i stället för en alkoholhaltig.",
      "Menyn skiljer mellan alkoholfria och alkoholhaltiga alternativ."
    ]
  },
  {
    "a": "drygt",
    "b": "knappt",
    "description": "Drygt betyder lite mer än en angiven mängd. Knappt betyder lite mindre.",
    "examples": [
      "Resan tog drygt en timme dit och knappt en timme hem.",
      "Det kom drygt hundra personer, inte knappt hundra."
    ]
  },
  {
    "a": "ankomsttid",
    "b": "avgångstid",
    "description": "Avgångstid är tiden då en resa börjar. Ankomsttid är tiden då den slutar.",
    "examples": [
      "Tågets avgångstid är 08.00 och ankomsttiden 10.15.",
      "Kontrollera både avgångstid och ankomsttid."
    ]
  },
  {
    "a": "korthårig",
    "b": "långhårig",
    "description": "Korthårig betyder med kort hår eller päls. Långhårig betyder med långt hår eller päls.",
    "examples": [
      "Den ena katten är korthårig och den andra långhårig.",
      "En långhårig hund kräver ofta mer pälsvård än en korthårig."
    ]
  },
  {
    "a": "intermolekylär",
    "b": "intramolekylär",
    "description": "Intermolekylär betyder mellan molekyler. Intramolekylär betyder inom en molekyl.",
    "examples": [
      "Bindningen inom molekylen är intramolekylär, medan kraften mellan molekylerna är intermolekylär.",
      "Kursen skiljer mellan intermolekylära och intramolekylära krafter."
    ]
  },
  {
    "a": "enkelbiljett",
    "b": "tur-och-retur-biljett",
    "description": "En enkelbiljett gäller en väg. En tur-och-retur-biljett gäller både dit- och hemresa.",
    "examples": [
      "Hon köpte en enkelbiljett dit och en tur-och-retur-biljett nästa gång.",
      "En tur-och-retur-biljett omfattar mer än en enkelbiljett."
    ]
  },
  {
    "a": "godkänna",
    "b": "underkänna",
    "description": "Godkänna betyder att bedöma något som tillräckligt bra. Underkänna betyder att inte godta det.",
    "examples": [
      "Läraren kunde godkänna arbetet eller underkänna det.",
      "Kontrollen godkände den första produkten men underkände den andra."
    ]
  },
  {
    "a": "underkäke",
    "b": "överkäke",
    "description": "Underkäken är den nedre käken. Överkäken är den övre.",
    "examples": [
      "Tänderna sitter i både underkäken och överkäken.",
      "Underkäken rör sig mot överkäken när vi tuggar."
    ]
  },
  {
    "a": "ensidig",
    "b": "mångsidig",
    "description": "Ensidig betyder begränsad till en sida eller ett perspektiv. Mångsidig betyder varierad och användbar på flera sätt.",
    "examples": [
      "Rapporten var ensidig, men diskussionen blev mångsidig.",
      "En mångsidig spelare kan göra mer än en ensidig specialistroll."
    ]
  },
  {
    "a": "insjukna",
    "b": "tillfriskna",
    "description": "Insjukna betyder att bli sjuk. Tillfriskna betyder att bli frisk igen.",
    "examples": [
      "Hon insjuknade på måndagen och började tillfriskna på fredagen.",
      "Flera hann insjukna innan den första patienten tillfrisknade."
    ]
  },
  {
    "a": "lodrät",
    "b": "vågrät",
    "description": "Lodrät betyder rakt upp och ner. Vågrät betyder parallell med horisonten.",
    "examples": [
      "Stolpen är lodrät och markeringen är vågrät.",
      "Rita en lodrät linje som korsar den vågräta."
    ]
  },
  {
    "a": "ovillkorad",
    "b": "villkorad",
    "description": "Ovillkorad betyder utan krav. Villkorad betyder att vissa krav måste uppfyllas.",
    "examples": [
      "Stödet var villkorat först men blev senare ovillkorat.",
      "Ett ovillkorat löfte skiljer sig från ett villkorat."
    ]
  },
  {
    "a": "mental",
    "b": "somatisk",
    "description": "Mental rör tankar och psyke. Somatisk rör kroppen.",
    "examples": [
      "Besvären kan vara mentala eller somatiska.",
      "Behandlingen tar hänsyn till både mental och somatisk hälsa."
    ]
  },
  {
    "a": "oxidationsmedel",
    "b": "reduktionsmedel",
    "description": "Ett oxidationsmedel tar upp elektroner. Ett reduktionsmedel avger elektroner.",
    "examples": [
      "I reaktionen möter oxidationsmedlet ett reduktionsmedel.",
      "Ämnet fungerar som reduktionsmedel här och som oxidationsmedel i en annan reaktion."
    ]
  },
  {
    "a": "augmentativ",
    "b": "diminutiv",
    "description": "Augmentativ uttrycker större storlek eller styrka. Diminutiv uttrycker mindre storlek eller ömhet.",
    "examples": [
      "Språket har både en augmentativ och en diminutiv form.",
      "Diminutiven gör ordet mindre, medan augmentativen förstärker det."
    ]
  },
  {
    "a": "benägen",
    "b": "obenägen",
    "description": "Benägen betyder villig eller sannolik att göra något. Obenägen betyder ovillig.",
    "examples": [
      "Hon var benägen att hjälpa men obenägen att lova för mycket.",
      "En benägen köpare agerar snabbare än en obenägen."
    ]
  },
  {
    "a": "individualism",
    "b": "kollektivism",
    "description": "Individualism betonar individens frihet. Kollektivism betonar gruppens gemensamma ansvar.",
    "examples": [
      "Debatten ställde individualism mot kollektivism.",
      "Samhället kombinerar drag av individualism och kollektivism."
    ]
  },
  {
    "a": "oskälig",
    "b": "skälig",
    "description": "Skälig betyder rimlig. Oskälig betyder orimlig eller alltför hög.",
    "examples": [
      "Avgiften var oskälig och sänktes till en skälig nivå.",
      "Kravet måste vara skäligt, inte oskäligt."
    ]
  },
  {
    "a": "diffus",
    "b": "distinkt",
    "description": "Diffus betyder otydlig eller utspridd. Distinkt betyder tydligt avgränsad.",
    "examples": [
      "Lukten var diffus, men ljudet var distinkt.",
      "Gör den diffusa kanten mer distinkt."
    ]
  },
  {
    "a": "inkongruens",
    "b": "kongruens",
    "description": "Kongruens betyder överensstämmelse. Inkongruens betyder brist på överensstämmelse.",
    "examples": [
      "Mätningen visade kongruens mellan modellerna och inkongruens i en detalj.",
      "Inkongruensen försvann när full kongruens uppnåddes."
    ]
  },
  {
    "a": "lantlig",
    "b": "urban",
    "description": "Lantlig betyder som hör till landsbygden. Urban betyder som hör till staden.",
    "examples": [
      "De flyttade från en urban miljö till en lantlig.",
      "Den urbana livsstilen skiljer sig från den lantliga."
    ]
  },
  {
    "a": "antedatera",
    "b": "postdatera",
    "description": "Antedatera betyder att sätta ett tidigare datum. Postdatera betyder att sätta ett senare datum.",
    "examples": [
      "Du får varken antedatera eller postdatera dokumentet felaktigt.",
      "Hon antedaterade det första brevet och postdaterade det andra."
    ]
  },
  {
    "a": "andlig",
    "b": "jordisk",
    "description": "Andlig rör själen eller religionen. Jordisk rör det materiella livet.",
    "examples": [
      "Texten handlar om både andliga och jordiska frågor.",
      "Han sökte andlig ro snarare än jordisk rikedom."
    ]
  },
  {
    "a": "oredlighet",
    "b": "redlighet",
    "description": "Redlighet betyder ärlighet och hederlighet. Oredlighet betyder oärlighet.",
    "examples": [
      "Företaget krävde redlighet och straffade oredlighet.",
      "Utredningen fann redlighet i ett fall och oredlighet i ett annat."
    ]
  },
  {
    "a": "immateriell",
    "b": "materiell",
    "description": "Materiell betyder fysisk eller knuten till saker. Immateriell betyder utan fysisk form.",
    "examples": [
      "Maskinen är materiell, medan upphovsrätten är immateriell.",
      "Företaget äger både materiella och immateriella tillgångar."
    ]
  },
  {
    "a": "instrumentalmusik",
    "b": "vokalmusik",
    "description": "Instrumentalmusik framförs utan sång. Vokalmusik bygger på röster.",
    "examples": [
      "Konserten blandade instrumentalmusik med vokalmusik.",
      "Stycket började som instrumentalmusik och fick senare drag av vokalmusik."
    ]
  },
  {
    "a": "borgenär",
    "b": "gäldenär",
    "description": "En borgenär har rätt att få betalt. En gäldenär är skyldig att betala.",
    "examples": [
      "Gäldenären betalade skulden till borgenären.",
      "Avtalet beskriver både borgenärens och gäldenärens ansvar."
    ]
  },
  {
    "a": "inrikes",
    "b": "utrikes",
    "description": "Inrikes betyder inom landet. Utrikes betyder i eller till andra länder.",
    "examples": [
      "Företaget arbetar både inrikes och utrikes.",
      "Inrikes trafik skiljer sig från utrikes trafik."
    ]
  },
  {
    "a": "kroklinjig",
    "b": "rätlinjig",
    "description": "Kroklinjig betyder att följa en böjd linje. Rätlinjig betyder att följa en rak linje.",
    "examples": [
      "Rörelsen var först rätlinjig och sedan kroklinjig.",
      "En kroklinjig bana är böjd, medan en rätlinjig är rak."
    ]
  },
  {
    "a": "trådbunden",
    "b": "trådlös",
    "description": "Trådbunden betyder ansluten med kabel. Trådlös betyder ansluten utan kabel.",
    "examples": [
      "Den trådbundna musen har kabel, men den trådlösa saknar den.",
      "Nätverket kan vara trådbundet eller trådlöst."
    ]
  },
  {
    "a": "generalist",
    "b": "specialist",
    "description": "En generalist kan mycket inom flera områden. En specialist kan mycket inom ett avgränsat område.",
    "examples": [
      "Generalisten såg helheten och specialisten löste detaljproblemet.",
      "Teamet behöver både en generalist och en specialist."
    ]
  },
  {
    "a": "allehanda",
    "b": "enahanda",
    "description": "Allehanda betyder av många olika slag. Enahanda betyder likformig och utan variation.",
    "examples": [
      "Marknaden erbjöd allehanda varor, men menyn var enahanda.",
      "Hon ville ha allehanda uppgifter i stället för ett enahanda arbete."
    ]
  },
  {
    "a": "förbehållsam",
    "b": "oförbehållsam",
    "description": "Förbehållsam betyder återhållsam. Oförbehållsam betyder öppen och utan reservationer.",
    "examples": [
      "Han var förbehållsam i början men senare oförbehållsam.",
      "Stödet var oförbehållsamt, medan svaret var förbehållsamt."
    ]
  },
  {
    "a": "lättillgänglig",
    "b": "svårtillgänglig",
    "description": "Lättillgänglig betyder enkel att nå eller förstå. Svårtillgänglig betyder svår att nå eller förstå.",
    "examples": [
      "Guiden är lättillgänglig, men originaltexten är svårtillgänglig.",
      "Platsen blev lättillgänglig efter att ha varit svårtillgänglig."
    ]
  },
  {
    "a": "komparabel",
    "b": "okomparabel",
    "description": "Komparabel betyder möjlig att jämföra. Okomparabel betyder att en meningsfull jämförelse inte kan göras.",
    "examples": [
      "Resultaten är komparabla, men den äldre mätningen är okomparabel.",
      "Gör materialet komparabelt i stället för okomparabelt."
    ]
  },
  {
    "a": "underläge",
    "b": "övertag",
    "description": "Underläge betyder en sämre position. Övertag betyder en bättre position än motståndaren.",
    "examples": [
      "Laget vände ett underläge till ett övertag.",
      "Hon hade ett övertag först men hamnade senare i underläge."
    ]
  },
  {
    "a": "innantill",
    "b": "utantill",
    "description": "Innantill betyder att läsa direkt ur en text. Utantill betyder ur minnet.",
    "examples": [
      "Han läste dikten innantill först och kunde den senare utantill.",
      "Lär dig orden utantill i stället för att läsa innantill."
    ]
  },
  {
    "a": "prim",
    "b": "sammansatt",
    "description": "Ett primtal har exakt två positiva delare. Ett sammansatt tal har fler än två.",
    "examples": [
      "Sju är ett primt tal, medan åtta är sammansatt.",
      "Avgör om talet är primt eller sammansatt."
    ]
  },
  {
    "a": "spetsvinklig",
    "b": "trubbvinklig",
    "description": "Spetsvinklig betyder med en vinkel mindre än 90 grader. Trubbvinklig betyder med en vinkel större än 90 grader.",
    "examples": [
      "Den ena triangeln är spetsvinklig och den andra trubbvinklig.",
      "En spetsvinklig vinkel är mindre än en trubbvinklig."
    ]
  },
  {
    "a": "högakta",
    "b": "ringakta",
    "description": "Högakta betyder att respektera mycket. Ringakta betyder att se ner på.",
    "examples": [
      "Hon högaktade sin lärare och ville inte ringakta någon.",
      "Man kan högakta en insats men ringakta ett oärligt beteende."
    ]
  },
  {
    "a": "endräkt",
    "b": "tvedräkt",
    "description": "Endräkt betyder enighet. Tvedräkt betyder oenighet och konflikt.",
    "examples": [
      "Gruppen gick från tvedräkt till endräkt.",
      "Endräkt gav framgång, medan tvedräkt skapade problem."
    ]
  },
  {
    "a": "frånvara",
    "b": "närvara",
    "description": "Frånvara betyder att inte vara på plats. Närvara betyder att vara där.",
    "examples": [
      "Hon kunde inte närvara och måste därför frånvara.",
      "Alla förväntas närvara, inte frånvara, vid mötet."
    ]
  },
  {
    "a": "evertebrat",
    "b": "vertebrat",
    "description": "Ett evertebrat saknar ryggrad. Ett vertebrat har ryggrad.",
    "examples": [
      "En mask är ett evertebrat, medan en fisk är ett vertebrat.",
      "Museet visar både vertebrat och evertebrat."
    ]
  },
  {
    "a": "högfrekvent",
    "b": "lågfrekvent",
    "description": "Högfrekvent betyder med hög frekvens. Lågfrekvent betyder med låg frekvens.",
    "examples": [
      "Signalen har en högfrekvent och en lågfrekvent del.",
      "Det högfrekventa ljudet ligger över det lågfrekventa."
    ]
  },
  {
    "a": "impermeabel",
    "b": "permeabel",
    "description": "Permeabel betyder genomsläpplig. Impermeabel betyder att vätska eller gas inte kan passera.",
    "examples": [
      "Sandlagret är permeabelt, men lerlagret är nästan impermeabelt.",
      "Membranet gick från impermeabelt till mer permeabelt."
    ]
  },
  {
    "a": "högerut",
    "b": "vänsterut",
    "description": "Högerut betyder i riktning åt höger. Vänsterut betyder i riktning åt vänster.",
    "examples": [
      "Sväng högerut vid bron och sedan vänsterut vid skolan.",
      "Den ena pilen pekar högerut och den andra vänsterut."
    ]
  },
  {
    "a": "begagnad",
    "b": "ny",
    "description": "Begagnad betyder tidigare använd. Ny betyder oanvänd eller nyligen tillverkad.",
    "examples": [
      "Hon köpte en begagnad bil i stället för en ny.",
      "Den nya datorn kostar mer än den begagnade."
    ]
  },
  {
    "a": "allmän",
    "b": "privat",
    "description": "Allmän betyder öppen eller gemensam för många. Privat betyder personlig eller inte offentlig.",
    "examples": [
      "Parken är allmän, men trädgården är privat.",
      "Den allmänna informationen skiljs från den privata."
    ]
  },
  {
    "a": "prima",
    "b": "sekunda",
    "description": "Prima betecknar högsta kvalitet. Sekunda betecknar lägre eller andrasorterad kvalitet.",
    "examples": [
      "Butiken säljer både prima och sekunda varor.",
      "Det prima virket kostar mer än det sekunda."
    ]
  },
  {
    "a": "salt",
    "b": "söt",
    "description": "Salt och söt beskriver motsatta grundsmaker.",
    "examples": [
      "Soppan är salt, medan kakan är söt.",
      "Hon valde ett sött mellanmål efter den salta maten."
    ]
  },
  {
    "a": "antipartikel",
    "b": "partikel",
    "description": "En antipartikel har motsatta kvanttal mot sin motsvarande partikel.",
    "examples": [
      "Elektronen är en partikel och positronen dess antipartikel.",
      "När en partikel möter sin antipartikel kan de förintas."
    ]
  },
  {
    "a": "derivera",
    "b": "integrera",
    "description": "Att derivera och integrera är omvända matematiska operationer.",
    "examples": [
      "Derivera funktionen och integrera sedan resultatet.",
      "Studenten lärde sig både derivera och integrera."
    ]
  },
  {
    "a": "hyperonym",
    "b": "hyponym",
    "description": "En hyperonym är ett överordnat ord. En hyponym är ett mer specifikt underordnat ord.",
    "examples": [
      "Fordon är hyperonym till bil, och bil är hyponym till fordon.",
      "Träd är en hyperonym och ek en hyponym."
    ]
  },
  {
    "a": "holonym",
    "b": "meronym",
    "description": "En holonym betecknar en helhet. En meronym betecknar en del av helheten.",
    "examples": [
      "Bil är holonym till hjul, och hjul är meronym till bil.",
      "Kropp är en holonym och hand en meronym."
    ]
  },
  {
    "a": "antonymi",
    "b": "synonymi",
    "description": "Antonymi är en relation mellan motsatser. Synonymi är en relation mellan ord med liknande betydelse.",
    "examples": [
      "Varm och kall visar antonymi, medan glad och lycklig visar synonymi.",
      "Uppgiften skiljer mellan antonymi och synonymi."
    ]
  },
  {
    "a": "fjärma",
    "b": "närma",
    "description": "Fjärma betyder att öka avståndet. Närma betyder att minska avståndet.",
    "examples": [
      "Båten började fjärma sig från land och senare närma sig hamnen.",
      "Hon ville närma grupperna till varandra, inte fjärma dem."
    ]
  },
  {
    "a": "avslå",
    "b": "bevilja",
    "description": "Avslå betyder att säga nej till en ansökan. Bevilja betyder att godkänna den.",
    "examples": [
      "Myndigheten kan bevilja ansökan eller avslå den.",
      "Den första begäran avslogs, men den andra beviljades."
    ]
  },
  {
    "a": "anställa",
    "b": "avskeda",
    "description": "Anställa betyder att ge någon arbete. Avskeda betyder att avsluta personens anställning.",
    "examples": [
      "Företaget ska anställa två personer men avskeda en.",
      "Hon anställdes i våras och riskerar inte att avskedas."
    ]
  },
  {
    "a": "avråda",
    "b": "tillråda",
    "description": "Avråda betyder att rekommendera någon att låta bli. Tillråda betyder att rekommendera handlingen.",
    "examples": [
      "Läkaren avrådde från hård träning men tillrådde vila.",
      "Experten kan avråda från ett val och tillråda ett annat."
    ]
  },
  {
    "a": "ankomma",
    "b": "avgå",
    "description": "Ankomma betyder att komma fram. Avgå betyder att lämna en plats.",
    "examples": [
      "Tåget avgår klockan åtta och ankommer klockan tio.",
      "Bussen hann avgå innan det andra tåget ankom."
    ]
  },
  {
    "a": "avfart",
    "b": "påfart",
    "description": "En avfart leder bort från en större väg. En påfart leder in på den.",
    "examples": [
      "Ta nästa avfart och använd sedan påfarten tillbaka.",
      "Påfarten ligger strax efter avfarten."
    ]
  },
  {
    "a": "maximum",
    "b": "minimum",
    "description": "Maximum är det högsta värdet. Minimum är det lägsta.",
    "examples": [
      "Temperaturens maximum var tjugo grader och dess minimum fem.",
      "Kurvan har både ett maximum och ett minimum."
    ]
  },
  {
    "a": "adagio",
    "b": "allegro",
    "description": "Adagio anger långsamt tempo. Allegro anger snabbt och livligt tempo.",
    "examples": [
      "Stycket börjar i adagio och övergår till allegro.",
      "Dirigenten spelade allegro snabbare än adagio."
    ]
  },
  {
    "a": "medurs",
    "b": "moturs",
    "description": "Medurs följer klockans riktning. Moturs går i motsatt riktning.",
    "examples": [
      "Vrid ratten medurs för att stänga och moturs för att öppna.",
      "Den ena pilen går medurs och den andra moturs."
    ]
  },
  {
    "a": "adekvat",
    "b": "inadekvat",
    "description": "Adekvat betyder lämplig och tillräcklig. Inadekvat betyder olämplig eller otillräcklig.",
    "examples": [
      "Svaret var adekvat, men förklaringen var inadekvat.",
      "En inadekvat åtgärd ersattes av en adekvat."
    ]
  },
  {
    "a": "maximivärde",
    "b": "minimivärde",
    "description": "Maximivärdet är det största tillåtna eller uppmätta värdet. Minimivärdet är det minsta.",
    "examples": [
      "Mätningen låg mellan minimivärdet och maximivärdet.",
      "Ange både maximivärde och minimivärde."
    ]
  },
  {
    "a": "osäkerhet",
    "b": "säkerhet",
    "description": "Säkerhet innebär trygghet eller visshet. Osäkerhet innebär risk eller tvekan.",
    "examples": [
      "Tydliga regler ökade säkerheten och minskade osäkerheten.",
      "Osäkerheten ersattes av större säkerhet."
    ]
  },
  {
    "a": "nödvändig",
    "b": "onödig",
    "description": "Nödvändig betyder att något behövs. Onödig betyder att det inte behövs.",
    "examples": [
      "Vatten är nödvändigt, men extra dekoration är onödig.",
      "Ta med det nödvändiga och lämna det onödiga."
    ]
  },
  {
    "a": "styrka",
    "b": "svaghet",
    "description": "En styrka är en stark eller fördelaktig egenskap. En svaghet är en brist eller sårbarhet.",
    "examples": [
      "Snabbheten är lagets styrka och uthålligheten dess svaghet.",
      "Analysen visar både styrkor och svagheter."
    ]
  },
  {
    "a": "tillbakadragen",
    "b": "utåtriktad",
    "description": "Tillbakadragen betyder reserverad och tyst. Utåtriktad betyder social och öppen.",
    "examples": [
      "Hon är tillbakadragen i stora grupper men utåtriktad bland vänner.",
      "Den utåtriktade eleven pratade mer än den tillbakadragna."
    ]
  },
  {
    "a": "underlägsen",
    "b": "överlägsen",
    "description": "Underlägsen betyder sämre eller svagare i en jämförelse. Överlägsen betyder bättre eller starkare.",
    "examples": [
      "Den gamla modellen var underlägsen den nya, som var tekniskt överlägsen.",
      "Laget kände sig underlägset men blev senare överlägset."
    ]
  },
  {
    "a": "nominell",
    "b": "reell",
    "description": "Nominell beskriver ett angivet värde. Reell beskriver det verkliga värdet efter relevanta justeringar.",
    "examples": [
      "Den nominella lönen steg, men den reella lönen sjönk.",
      "Räntan kan anges som nominell eller reell."
    ]
  },
  {
    "a": "oväntad",
    "b": "väntad",
    "description": "Väntad betyder förutsedd. Oväntad betyder att något inte förutsågs.",
    "examples": [
      "Den väntade leveransen följdes av en oväntad försening.",
      "Resultatet var oväntat trots en väntad utveckling."
    ]
  },
  {
    "a": "förutsedd",
    "b": "oförutsedd",
    "description": "Förutsedd betyder att något har kunnat förutsägas. Oförutsedd betyder att det kom utan förvarning.",
    "examples": [
      "Planen täcker både förutsedda och oförutsedda kostnader.",
      "Den förutsedda risken hanterades, men den oförutsedda skapade problem."
    ]
  },
  {
    "a": "orolig",
    "b": "rofylld",
    "description": "Orolig betyder bekymrad eller rastlös. Rofylld betyder lugn och fridfull.",
    "examples": [
      "Gatan var orolig på kvällen men rofylld på morgonen.",
      "Hon gick från orolig till rofylld efter beskedet."
    ]
  },
  {
    "a": "avhängig",
    "b": "oavhängig",
    "description": "Avhängig betyder beroende av något. Oavhängig betyder självständig och oberoende.",
    "examples": [
      "Beslutet är avhängigt vädret, men den andra planen är oavhängig.",
      "En oavhängig granskning ska inte vara avhängig ledningen."
    ]
  },
  {
    "a": "attrahera",
    "b": "repellera",
    "description": "Attrahera betyder att dra till sig. Repellera betyder att stöta bort.",
    "examples": [
      "Olika laddningar attraherar varandra, medan lika laddningar repellerar.",
      "Magneten kan attrahera en pol och repellera den andra."
    ]
  },
  {
    "a": "oskicklighet",
    "b": "skicklighet",
    "description": "Skicklighet är god förmåga. Oskicklighet är bristande förmåga.",
    "examples": [
      "Arbetet visade skicklighet, inte oskicklighet.",
      "Övning kan ersätta oskicklighet med skicklighet."
    ]
  },
  {
    "a": "gäst",
    "b": "värd",
    "description": "En gäst blir mottagen. En värd tar emot gästen.",
    "examples": [
      "Värden hälsade varje gäst välkommen.",
      "Hon var gäst i går och värd i dag."
    ]
  },
  {
    "a": "nämnare",
    "b": "täljare",
    "description": "Täljaren står över bråkstrecket. Nämnaren står under.",
    "examples": [
      "I bråket tre fjärdedelar är tre täljare och fyra nämnare.",
      "Dividera täljaren med nämnaren."
    ]
  },
  {
    "a": "divergent",
    "b": "konvergent",
    "description": "Divergent betyder att något går isär. Konvergent betyder att det närmar sig samma punkt eller värde.",
    "examples": [
      "Den ena talföljden är konvergent och den andra divergent.",
      "Strålarna blir divergenta efter att först ha varit konvergenta."
    ]
  },
  {
    "a": "allting",
    "b": "ingenting",
    "description": "Allting betyder allt som finns eller avses. Ingenting betyder inte något alls.",
    "examples": [
      "Hon berättade allting och dolde ingenting.",
      "Allting var klart, men ingenting var enkelt."
    ]
  },
  {
    "a": "inkompetens",
    "b": "kompetens",
    "description": "Kompetens är tillräcklig kunskap och förmåga. Inkompetens är brist på detta.",
    "examples": [
      "Uppgiften kräver kompetens och får inte präglas av inkompetens.",
      "Utbildningen ökade kompetensen och minskade inkompetensen."
    ]
  },
  {
    "a": "anspråksfull",
    "b": "anspråkslös",
    "description": "Anspråksfull betyder krävande eller påkostad. Anspråkslös betyder enkel och blygsam.",
    "examples": [
      "Restaurangen är anspråksfull, medan kaféet är anspråkslöst.",
      "Hon valde en anspråkslös stil framför en anspråksfull."
    ]
  },
  {
    "a": "luttrad",
    "b": "naiv",
    "description": "Luttrad betyder erfaren och svår att överraska. Naiv betyder godtrogen eller oerfaren.",
    "examples": [
      "Den luttrade reportern var mindre naiv än praktikanten.",
      "Han var naiv som ung men blev luttrad med tiden."
    ]
  },
  {
    "a": "avväpna",
    "b": "beväpna",
    "description": "Avväpna betyder att ta bort vapen. Beväpna betyder att utrusta med vapen.",
    "examples": [
      "Vakterna avväpnade gruppen som tidigare hade beväpnats.",
      "Att beväpna och avväpna är motsatta handlingar."
    ]
  },
  {
    "a": "underskrida",
    "b": "överskrida",
    "description": "Underskrida betyder att ligga under en gräns. Överskrida betyder att gå över den.",
    "examples": [
      "Kostnaden får varken underskrida minimikravet eller överskrida budgeten.",
      "Temperaturen underskred noll och överskred senare tio grader."
    ]
  },
  {
    "a": "undervärdera",
    "b": "övervärdera",
    "description": "Undervärdera betyder att bedöma värdet för lågt. Övervärdera betyder att bedöma det för högt.",
    "examples": [
      "Marknaden kan undervärdera ett företag och övervärdera ett annat.",
      "Försök att varken undervärdera riskerna eller övervärdera dem."
    ]
  },
  {
    "a": "avigsida",
    "b": "rätsida",
    "description": "Avigsidan är baksidan av ett tyg eller arbete. Rätsidan är den sida som ska synas.",
    "examples": [
      "Sy från avigsidan och vänd sedan rätsidan utåt.",
      "Tygets rätsida är blankare än avigsidan."
    ]
  },
  {
    "a": "kvinnonamn",
    "b": "mansnamn",
    "description": "Kvinnonamn används traditionellt om kvinnor. Mansnamn används traditionellt om män.",
    "examples": [
      "Listan innehåller både kvinnonamn och mansnamn.",
      "Det första är ett kvinnonamn och det andra ett mansnamn."
    ]
  },
  {
    "a": "oumbärlig",
    "b": "umbärlig",
    "description": "Oumbärlig betyder nödvändig och svår att ersätta. Umbärlig betyder möjlig att vara utan.",
    "examples": [
      "Vatten är oumbärligt, medan dekorationen är umbärlig.",
      "Det oumbärliga verktyget behölls och det umbärliga togs bort."
    ]
  },
  {
    "a": "måttlig",
    "b": "omåttlig",
    "description": "Måttlig betyder begränsad och rimlig. Omåttlig betyder överdriven eller utan måtta.",
    "examples": [
      "En måttlig ökning är lättare att hantera än en omåttlig.",
      "Hon åt måttligt, inte omåttligt."
    ]
  },
  {
    "a": "billigt",
    "b": "dyrt",
    "description": "Billigt betyder till lågt pris. Dyrt betyder till högt pris.",
    "examples": [
      "Det är billigt att åka buss men dyrt att ta taxi.",
      "Hon köpte billigt och sålde dyrt."
    ]
  },
  {
    "a": "fallgirig",
    "b": "lovgirig",
    "description": "Fallgirig beskriver en segelbåt som gärna svänger från vinden. Lovgirig beskriver en båt som gärna svänger mot vinden.",
    "examples": [
      "Båten var fallgirig före justeringen och lovgirig efter den.",
      "En fallgirig båt beter sig motsatt en lovgirig."
    ]
  },
  {
    "a": "lovart",
    "b": "lä",
    "description": "Lovart är sidan mot vinden. Lä är sidan bort från vinden.",
    "examples": [
      "Vinden träffar båten från lovart och läsidan skyddas.",
      "Vi stod i lä medan seglet vändes mot lovart."
    ]
  },
  {
    "a": "monopol",
    "b": "polypol",
    "description": "Monopol har en enda säljare. Polypol har många säljare och köpare.",
    "examples": [
      "Marknaden gick från monopol till polypol.",
      "Ett monopol saknar den konkurrens som finns i en polypol."
    ]
  },
  {
    "a": "efternamn",
    "b": "förnamn",
    "description": "Förnamnet identifierar personen individuellt. Efternamnet visar vanligen familje- eller släkttillhörighet.",
    "examples": [
      "Skriv förnamn först och efternamn sist.",
      "Hennes förnamn är Sara och hennes efternamn är Lind."
    ]
  },
  {
    "a": "bas",
    "b": "syra",
    "description": "En bas tar upp vätejoner eller avger hydroxidjoner. En syra avger vätejoner.",
    "examples": [
      "Tvål är basisk, medan citronsaft innehåller syra.",
      "När bas och syra reagerar kan de neutralisera varandra."
    ]
  },
  {
    "a": "klave",
    "b": "krona",
    "description": "Krona och klave är myntets två motsatta sidor.",
    "examples": [
      "Myntet landade med krona upp i stället för klave.",
      "Vi singlade slant och valde mellan krona och klave."
    ]
  },
  {
    "a": "eftermiddag",
    "b": "förmiddag",
    "description": "Förmiddagen är tiden före middag. Eftermiddagen är tiden efter middag.",
    "examples": [
      "Mötet börjar på förmiddagen och slutar på eftermiddagen.",
      "Hon arbetar förmiddag i dag och eftermiddag i morgon."
    ]
  },
  {
    "a": "källa",
    "b": "sänka",
    "description": "En källa tillför något till ett system. En sänka tar upp eller avlägsnar det.",
    "examples": [
      "Skogen kan vara en sänka för koldioxid, medan en skorsten är en källa.",
      "Modellen innehåller både en källa och en sänka."
    ]
  },
  {
    "a": "jätteliten",
    "b": "jättestor",
    "description": "Jätteliten betyder mycket liten. Jättestor betyder mycket stor.",
    "examples": [
      "Den ena lådan är jätteliten och den andra jättestor.",
      "En jättestor hund stod bredvid en jätteliten valp."
    ]
  },
  {
    "a": "väster",
    "b": "öst",
    "description": "Väster och öst är motsatta väderstreck.",
    "examples": [
      "Solen går upp i öst och ner i väster.",
      "De reste från öst till väster."
    ]
  },
  {
    "a": "produkt",
    "b": "reaktant",
    "description": "En reaktant förbrukas i en kemisk reaktion. En produkt bildas av reaktionen.",
    "examples": [
      "Reaktanten omvandlades till en ny produkt.",
      "Skriv reaktanterna före pilen och produkterna efter."
    ]
  },
  {
    "a": "hyperonymi",
    "b": "hyponymi",
    "description": "Hyperonymi är relationen till ett överordnat begrepp. Hyponymi är relationen till ett underordnat begrepp.",
    "examples": [
      "Relationen från bil till fordon är hyponymi, medan den omvända är hyperonymi.",
      "Övningen skiljer mellan hyperonymi och hyponymi."
    ]
  },
  {
    "a": "holonymi",
    "b": "meronymi",
    "description": "Holonymi går från del till helhet. Meronymi går från helhet till del.",
    "examples": [
      "Relationen från hjul till bil är meronymi, och den omvända är holonymi.",
      "Ordlistan visar både holonymi och meronymi."
    ]
  },
  {
    "a": "abducera",
    "b": "adducera",
    "description": "Abducera betyder att föra en kroppsdel bort från mittlinjen. Adducera betyder att föra den mot mittlinjen.",
    "examples": [
      "Lyft armen åt sidan för att abducera den och sänk den för att adducera.",
      "Muskeln kan både abducera och adducera benet."
    ]
  },
  {
    "a": "fira",
    "b": "hala",
    "description": "Fira betyder att sänka med rep. Hala betyder att dra in eller upp med rep.",
    "examples": [
      "Besättningen halade upp seglet och firade senare ner det.",
      "Fira lasten försiktigt och hala upp den igen."
    ]
  },
  {
    "a": "inter-",
    "b": "intra-",
    "description": "Prefixet inter- betyder mellan. Prefixet intra- betyder inom.",
    "examples": [
      "Internationell gäller mellan nationer, medan intranationell gäller inom en nation.",
      "Inter- och intra- visar två olika relationer."
    ]
  },
  {
    "a": "nordpolen",
    "b": "sydpolen",
    "description": "Nordpolen är jordens nordligaste punkt. Sydpolen är den sydligaste.",
    "examples": [
      "En linje genom jorden kan gå från Nordpolen till Sydpolen.",
      "Nordpolen ligger i Arktis och Sydpolen i Antarktis."
    ]
  },
  {
    "a": "appellativ",
    "b": "egennamn",
    "description": "Ett appellativ är ett allmänt namn. Ett egennamn betecknar en bestämd person, plats eller sak.",
    "examples": [
      "Stad är appellativ, medan Stockholm är egennamn.",
      "Skriv egennamnet med stor bokstav men inte alltid appellativet."
    ]
  },
  {
    "a": "inget",
    "b": "något",
    "description": "Inget betyder inte något alls. Något betyder en sak eller en viss mängd.",
    "examples": [
      "Det fanns inget i lådan i går men något i den i dag.",
      "Hon hörde något, medan jag hörde inget."
    ]
  },
  {
    "a": "infimum",
    "b": "supremum",
    "description": "Infimum är den största undre gränsen. Supremum är den minsta övre gränsen.",
    "examples": [
      "Mängden har både ett infimum och ett supremum.",
      "Supremum begränsar uppåt och infimum nedåt."
    ]
  },
  {
    "a": "böjningsform",
    "b": "grundform",
    "description": "Grundformen är ordets uppslagsform. En böjningsform visar exempelvis tid, antal eller bestämdhet.",
    "examples": [
      "Springa är grundform och sprang en böjningsform.",
      "Sök ordet i grundform, inte bara i en böjningsform."
    ]
  },
  {
    "a": "humant",
    "b": "inhumant",
    "description": "Humant betyder på ett medmänskligt sätt. Inhumant betyder på ett omänskligt eller grymt sätt.",
    "examples": [
      "Djuren behandlades humant, inte inhumant.",
      "Ett inhumant straff ersattes av ett humant."
    ]
  },
  {
    "a": "ental",
    "b": "flertal",
    "description": "Ental avser en. Flertal avser fler än en.",
    "examples": [
      "Katt står i ental och katter i flertal.",
      "Ändra meningen från ental till flertal."
    ]
  },
  {
    "a": "lågtrafik",
    "b": "rusningstrafik",
    "description": "Lågtrafik är en period med lite trafik. Rusningstrafik är en period med mycket trafik.",
    "examples": [
      "Resan går snabbare i lågtrafik än i rusningstrafik.",
      "Priset är lägre under lågtrafik och högre under rusningstrafik."
    ]
  },
  {
    "a": "hyresgäst",
    "b": "hyresvärd",
    "description": "Hyresgästen hyr en bostad eller lokal. Hyresvärden hyr ut den.",
    "examples": [
      "Hyresgästen betalade hyran till hyresvärden.",
      "Både hyresvärd och hyresgäst skrev under avtalet."
    ]
  },
  {
    "a": "efterrätt",
    "b": "förrätt",
    "description": "Förrätten serveras före huvudrätten. Efterrätten serveras efter den.",
    "examples": [
      "Vi åt soppa till förrätt och glass till efterrätt.",
      "Förrätten inledde måltiden och efterrätten avslutade den."
    ]
  },
  {
    "a": "x-kromosom",
    "b": "y-kromosom",
    "description": "X-kromosomen och Y-kromosomen är två olika könskromosomer hos människor.",
    "examples": [
      "Cellen innehöll en X-kromosom och en Y-kromosom.",
      "X-kromosomen är större än Y-kromosomen."
    ]
  },
  {
    "a": "nordan",
    "b": "sunnan",
    "description": "Nordan är vind från norr. Sunnan är vind från söder.",
    "examples": [
      "En kall nordan ersattes av en mild sunnan.",
      "Flaggan vände när vinden gick från nordan till sunnan."
    ]
  },
  {
    "a": "västan",
    "b": "östan",
    "description": "Västan är vind från väster. Östan är vind från öster.",
    "examples": [
      "Västan blåste på morgonen och östan på kvällen.",
      "Sjömannen skiljer mellan västan och östan."
    ]
  },
  {
    "a": "inlänning",
    "b": "utlänning",
    "description": "En inlänning hör till det egna landet. En utlänning kommer från ett annat land.",
    "examples": [
      "Regeln gäller både inlänningar och utlänningar.",
      "Han var utlänning där men inlänning i sitt hemland."
    ]
  },
  {
    "a": "endoterm",
    "b": "exoterm",
    "description": "Endoterm betyder att värme tas upp. Exoterm betyder att värme avges.",
    "examples": [
      "Reaktionen är endoterm när den tar upp värme och exoterm när den avger värme.",
      "En endoterm process kylde omgivningen, medan en exoterm värmde den."
    ]
  },
  {
    "a": "postludium",
    "b": "preludium",
    "description": "Ett preludium kommer före huvudverket. Ett postludium kommer efter.",
    "examples": [
      "Konserten började med ett preludium och slutade med ett postludium.",
      "Organisten spelade både preludium och postludium."
    ]
  },
  {
    "a": "arvinge",
    "b": "arvlåtare",
    "description": "Arvlåtaren är personen som lämnar ett arv. Arvingen är personen som tar emot det.",
    "examples": [
      "Arvingen fick egendom efter arvlåtaren.",
      "Testamentet klargör relationen mellan arvlåtare och arvinge."
    ]
  },
  {
    "a": "debitor",
    "b": "kreditor",
    "description": "En debitor är skyldig pengar. En kreditor har rätt att få betalt.",
    "examples": [
      "Debitor betalade skulden till kreditor.",
      "Avtalet anger både debitors och kreditors ansvar."
    ]
  },
  {
    "a": "kvinnokön",
    "b": "mankön",
    "description": "Kvinnokön och mankön betecknar kvinnligt respektive manligt kön.",
    "examples": [
      "Formuläret skiljde mellan kvinnokön och mankön.",
      "Arten har individer av både kvinnokön och mankön."
    ]
  },
  {
    "a": "högerled",
    "b": "vänsterled",
    "description": "Vänsterledet står till vänster om ett likhetstecken. Högerledet står till höger.",
    "examples": [
      "Förenkla vänsterledet och högerledet var för sig.",
      "Efter beräkningen är högerled och vänsterled lika."
    ]
  },
  {
    "a": "monogen",
    "b": "polygen",
    "description": "Monogen betyder styrd av en gen. Polygen betyder styrd av flera gener.",
    "examples": [
      "Egenskapen är monogen, medan längd ofta är polygen.",
      "En polygen sjukdom är mer komplex än en monogen."
    ]
  },
  {
    "a": "högmosse",
    "b": "lågmosse",
    "description": "En högmosse får främst vatten från nederbörd. En lågmosse påverkas även av grund- eller ytvatten.",
    "examples": [
      "Högmossen ligger upphöjd, medan lågmossen får vatten från omgivningen.",
      "Området innehåller både högmosse och lågmosse."
    ]
  },
  {
    "a": "ingenstädes",
    "b": "någonstädes",
    "description": "Ingenstädes betyder inte på någon plats. Någonstädes betyder på någon plats.",
    "examples": [
      "Nyckeln fanns ingenstädes här men måste ligga någonstädes.",
      "Han sökte någonstädes där ingenstädes verkade självklart."
    ]
  },
  {
    "a": "giltigförklara",
    "b": "ogiltigförklara",
    "description": "Giltigförklara betyder att förklara något giltigt. Ogiltigförklara betyder att upphäva dess giltighet.",
    "examples": [
      "Domstolen kan giltigförklara avtalet eller ogiltigförklara det.",
      "Beslutet ogiltigförklarades efter att först ha giltigförklarats."
    ]
  },
  {
    "a": "fördragsam",
    "b": "ofördragsam",
    "description": "Fördragsam betyder tolerant och tålmodig. Ofördragsam betyder intolerant.",
    "examples": [
      "Hon var fördragsam i diskussionen, medan han var ofördragsam.",
      "Ett fördragsamt klimat ersatte det ofördragsamma."
    ]
  },
  {
    "a": "eftersats",
    "b": "försats",
    "description": "Försatsen kommer först i en konstruktion eller mening. Eftersatsen kommer efter.",
    "examples": [
      "Villkoret står i försatsen och följden i eftersatsen.",
      "Läs både försats och eftersats."
    ]
  },
  {
    "a": "apokryfisk",
    "b": "kanonisk",
    "description": "Kanonisk betyder erkänd som del av en officiell kanon. Apokryfisk betyder att texten står utanför den.",
    "examples": [
      "Den kanoniska texten jämfördes med en apokryfisk.",
      "Berättelsen är apokryfisk och inte kanonisk."
    ]
  },
  {
    "a": "defragmentera",
    "b": "fragmentera",
    "description": "Fragmentera betyder att dela upp i spridda delar. Defragmentera betyder att ordna delarna mer sammanhängande.",
    "examples": [
      "Filer kan fragmenteras och senare defragmenteras.",
      "Programmet defragmenterar det som tidigare fragmenterats."
    ]
  },
  {
    "a": "bakdel",
    "b": "framdel",
    "description": "Bakdelen är den bakre delen. Framdelen är den främre.",
    "examples": [
      "Skadan satt på bilens framdel, inte på bakdelen.",
      "Montera framdelen före bakdelen."
    ]
  },
  {
    "a": "anständig",
    "b": "anstötlig",
    "description": "Anständig betyder passande och respektabel. Anstötlig betyder stötande eller olämplig.",
    "examples": [
      "Språket var anständigt, men bilden ansågs anstötlig.",
      "Byt det anstötliga uttrycket mot ett anständigt."
    ]
  },
  {
    "a": "läglig",
    "b": "oläglig",
    "description": "Läglig betyder passande i tid. Oläglig betyder att tidpunkten är dålig.",
    "examples": [
      "Besöket kom vid en läglig tid, men samtalet var olägligt.",
      "En oläglig paus ersattes av en läglig."
    ]
  },
  {
    "a": "makrokosmos",
    "b": "mikrokosmos",
    "description": "Makrokosmos är världen eller helheten i stor skala. Mikrokosmos är en liten värld som speglar helheten.",
    "examples": [
      "Universum beskrivs som makrokosmos och människan som mikrokosmos.",
      "Romanens by är ett mikrokosmos av ett större makrokosmos."
    ]
  },
  {
    "a": "exon",
    "b": "intron",
    "description": "Ett exon finns kvar i moget RNA. Ett intron klipps normalt bort.",
    "examples": [
      "Genen innehåller både exon och intron.",
      "Intronerna togs bort och exonerna fogades samman."
    ]
  },
  {
    "a": "avslutningsvis",
    "b": "inledningsvis",
    "description": "Inledningsvis betyder i början. Avslutningsvis betyder i slutet.",
    "examples": [
      "Inledningsvis beskrev hon problemet och avslutningsvis lösningen.",
      "Han var tveksam inledningsvis men positiv avslutningsvis."
    ]
  },
  {
    "a": "fruktsamhet",
    "b": "ofruktsamhet",
    "description": "Fruktsamhet är förmåga att få avkomma eller ge skörd. Ofruktsamhet är avsaknad av denna förmåga.",
    "examples": [
      "Behandlingen förbättrade fruktsamheten och minskade ofruktsamheten.",
      "Jorden gick från ofruktsamhet till större fruktsamhet."
    ]
  },
  {
    "a": "muntligt",
    "b": "skriftligt",
    "description": "Muntligt betyder med tal. Skriftligt betyder i text.",
    "examples": [
      "Beskedet gavs muntligt och bekräftades skriftligt.",
      "Du kan svara muntligt eller skriftligt."
    ]
  },
  {
    "a": "inandas",
    "b": "utandas",
    "description": "Inandas betyder att dra in luft. Utandas betyder att släppa ut luft.",
    "examples": [
      "Vi inandas syre och utandas koldioxid.",
      "Inandas långsamt och utandas lugnt."
    ]
  },
  {
    "a": "inkongruent",
    "b": "kongruent",
    "description": "Kongruent betyder överensstämmande. Inkongruent betyder att överensstämmelse saknas.",
    "examples": [
      "Delarna är kongruenta, men den sista är inkongruent.",
      "Gör det inkongruenta mönstret kongruent."
    ]
  },
  {
    "a": "halal",
    "b": "haram",
    "description": "Halal betyder tillåtet enligt islam. Haram betyder förbjudet.",
    "examples": [
      "Maten är halal och inte haram.",
      "Reglerna skiljer mellan halal och haram."
    ]
  },
  {
    "a": "geocentrisk",
    "b": "heliocentrisk",
    "description": "En geocentrisk modell har jorden i centrum. En heliocentrisk modell har solen i centrum.",
    "examples": [
      "Den geocentriska modellen ersattes av en heliocentrisk.",
      "Kursen jämför geocentrisk och heliocentrisk världsbild."
    ]
  },
  {
    "a": "input",
    "b": "output",
    "description": "Input är information som matas in. Output är information som kommer ut.",
    "examples": [
      "Programmet omvandlar input till output.",
      "Kontrollera input innan du granskar output."
    ]
  },
  {
    "a": "illojalitet",
    "b": "lojalitet",
    "description": "Lojalitet betyder trofasthet. Illojalitet betyder brist på trofasthet.",
    "examples": [
      "Hon visade lojalitet, inte illojalitet.",
      "Illojaliteten skadade det tidigare förtroendet och lojaliteten."
    ]
  },
  {
    "a": "gammalmodig",
    "b": "nymodig",
    "description": "Gammalmodig betyder omodern. Nymodig betyder modern eller ny i stilen.",
    "examples": [
      "Köket var gammalmodigt men blev nymodigt efter renoveringen.",
      "Hon valde en nymodig lösning framför en gammalmodig."
    ]
  },
  {
    "a": "lövfällande",
    "b": "städsegrön",
    "description": "Lövfällande växter tappar sina blad säsongsvis. Städsegröna behåller gröna blad året runt.",
    "examples": [
      "Björken är lövfällande och granen städsegrön.",
      "Trädgården har både lövfällande och städsegröna växter."
    ]
  },
  {
    "a": "ljushårig",
    "b": "mörkhårig",
    "description": "Ljushårig betyder med ljust hår. Mörkhårig betyder med mörkt hår.",
    "examples": [
      "Det ljushåriga barnet stod bredvid det mörkhåriga.",
      "Hon var ljushårig som liten men är nu mörkhårig."
    ]
  },
  {
    "a": "matleda",
    "b": "matlust",
    "description": "Matlust är vilja att äta. Matleda är motvilja mot mat.",
    "examples": [
      "Sjukdomen gav matleda, men senare återkom matlusten.",
      "God matlust ersatte den tidigare matledan."
    ]
  },
  {
    "a": "oöversättlig",
    "b": "översättlig",
    "description": "Översättlig betyder möjlig att översätta. Oöversättlig betyder att en fullgod översättning inte är möjlig.",
    "examples": [
      "Uttrycket är översättligt, men ordleken nästan oöversättlig.",
      "En oöversättlig fras kräver mer förklaring än en översättlig."
    ]
  },
  {
    "a": "underviktig",
    "b": "överviktig",
    "description": "Underviktig betyder under ett hälsosamt viktintervall. Överviktig betyder över intervallet.",
    "examples": [
      "Bedömningen visade att en var underviktig och en överviktig.",
      "Varken underviktiga eller överviktiga personer bör bedömas utan helhetssyn."
    ]
  },
  {
    "a": "innansida",
    "b": "yttersida",
    "description": "Innansidan vetter inåt. Yttersidan vetter utåt.",
    "examples": [
      "Färgen skiljer sig mellan innansidan och yttersidan.",
      "Tvätta yttersidan och torka innansidan."
    ]
  },
  {
    "a": "senarelägga",
    "b": "tidigarelägga",
    "description": "Senarelägga betyder flytta till en senare tid. Tidigarelägga betyder flytta till en tidigare tid.",
    "examples": [
      "Vi måste senarelägga mötet men tidigarelägga leveransen.",
      "De tidigarelagde starten och senarelagde slutet."
    ]
  },
  {
    "a": "anterograd",
    "b": "retrograd",
    "description": "Anterograd betyder framåtriktad. Retrograd betyder bakåtriktad.",
    "examples": [
      "Rörelsen var anterograd först och retrograd sedan.",
      "Planeten tycktes gå från anterograd till retrograd rörelse."
    ]
  },
  {
    "a": "bakpart",
    "b": "frampart",
    "description": "Bakparten är den bakre delen. Framparten är den främre.",
    "examples": [
      "Hästens frampart var högre än bakparten.",
      "Skadan satt i bakparten, inte i framparten."
    ]
  },
  {
    "a": "avkriminalisera",
    "b": "kriminalisera",
    "description": "Kriminalisera betyder göra straffbart. Avkriminalisera betyder ta bort straffansvaret.",
    "examples": [
      "Lagen kan kriminalisera handlingen eller avkriminalisera den.",
      "Det som tidigare kriminaliserats blev senare avkriminaliserat."
    ]
  },
  {
    "a": "illikviditet",
    "b": "likviditet",
    "description": "Likviditet är förmåga att betala på kort sikt. Illikviditet är brist på tillgängliga betalningsmedel.",
    "examples": [
      "Företaget gick från illikviditet till god likviditet.",
      "Hög likviditet minskar risken för illikviditet."
    ]
  },
  {
    "a": "orättmätig",
    "b": "rättmätig",
    "description": "Rättmätig betyder berättigad. Orättmätig betyder utan laglig eller moralisk rätt.",
    "examples": [
      "Den rättmätiga ägaren återfick det orättmätigt tagna föremålet.",
      "Kravet var rättmätigt, inte orättmätigt."
    ]
  },
  {
    "a": "högklackad",
    "b": "lågklackad",
    "description": "Högklackad betyder med hög klack. Lågklackad betyder med låg klack.",
    "examples": [
      "Hon bytte högklackade skor mot lågklackade.",
      "De lågklackade skorna var bekvämare än de högklackade."
    ]
  },
  {
    "a": "högland",
    "b": "lågland",
    "description": "Högland ligger högt över havet. Lågland ligger lågt.",
    "examples": [
      "Floden rinner från höglandet till låglandet.",
      "Klimatet skiljer sig mellan högland och lågland."
    ]
  },
  {
    "a": "saltvattensfisk",
    "b": "sötvattensfisk",
    "description": "Saltvattensfisk lever i hav. Sötvattensfisk lever i sjöar och vattendrag.",
    "examples": [
      "Torsk är saltvattensfisk och gädda sötvattensfisk.",
      "Akvariet skiljer mellan saltvattensfisk och sötvattensfisk."
    ]
  },
  {
    "a": "blåförskjutning",
    "b": "rödförskjutning",
    "description": "Blåförskjutning visar rörelse mot betraktaren. Rödförskjutning visar rörelse bort.",
    "examples": [
      "Spektrumet visade blåförskjutning i stället för rödförskjutning.",
      "Astronomer mäter både rödförskjutning och blåförskjutning."
    ]
  },
  {
    "a": "sommardäck",
    "b": "vinterdäck",
    "description": "Sommardäck är anpassade för varmt väglag. Vinterdäck är anpassade för kyla och vinterväg.",
    "examples": [
      "Byt vinterdäck mot sommardäck på våren.",
      "Sommardäck och vinterdäck används under olika årstider."
    ]
  },
  {
    "a": "lättsåld",
    "b": "svårsåld",
    "description": "Lättsåld betyder enkel att sälja. Svårsåld betyder svår att hitta köpare till.",
    "examples": [
      "Den lilla bilen var lättsåld, men den skadade varan svårsåld.",
      "Efter reparationen blev den svårsålda produkten lättsåld."
    ]
  },
  {
    "a": "stilfull",
    "b": "stillös",
    "description": "Stilfull betyder smakfullt utformad. Stillös betyder utan tydlig eller god stil.",
    "examples": [
      "Rummet blev stilfullt efter att ha känts stillöst.",
      "En stilfull detalj ersatte den stillösa."
    ]
  },
  {
    "a": "opansrad",
    "b": "pansrad",
    "description": "Pansrad betyder skyddad med pansar. Opansrad betyder utan pansar.",
    "examples": [
      "Det pansrade fordonet tålde mer än det opansrade.",
      "Kolonnen hade både pansrade och opansrade fordon."
    ]
  },
  {
    "a": "hejdad",
    "b": "ohejdad",
    "description": "Hejdad betyder stoppad eller begränsad. Ohejdad betyder utan begränsning.",
    "examples": [
      "Den ohejdade utvecklingen blev till slut hejdad.",
      "Elden spreds ohejdat innan den hejdades."
    ]
  },
  {
    "a": "högersida",
    "b": "vänstersida",
    "description": "Högersidan ligger åt höger. Vänstersidan ligger åt vänster.",
    "examples": [
      "Texten står på högersidan och bilden på vänstersidan.",
      "Jämför vänstersida med högersida."
    ]
  },
  {
    "a": "undersida",
    "b": "översida",
    "description": "Undersidan vetter nedåt. Översidan vetter uppåt.",
    "examples": [
      "Bordets översida är slät och undersidan grov.",
      "Märk både undersida och översida."
    ]
  },
  {
    "a": "skuggsida",
    "b": "solsida",
    "description": "Skuggsidan får mindre sol. Solsidan får mer sol.",
    "examples": [
      "Snön låg kvar på skuggsidan men smälte på solsidan.",
      "Växterna trivs bättre på solsidan än på skuggsidan."
    ]
  },
  {
    "a": "sommarsolstånd",
    "b": "vintersolstånd",
    "description": "Sommarsolståndet ger årets längsta dag. Vintersolståndet ger årets kortaste.",
    "examples": [
      "Dagarna blir kortare efter sommarsolståndet och längre efter vintersolståndet.",
      "Kalendern markerar både sommarsolstånd och vintersolstånd."
    ]
  },
  {
    "a": "underskattning",
    "b": "överskattning",
    "description": "Underskattning bedömer något för lågt. Överskattning bedömer det för högt.",
    "examples": [
      "En underskattning av tiden följdes av en överskattning av farten.",
      "Undvik både underskattning och överskattning."
    ]
  },
  {
    "a": "minusgrad",
    "b": "plusgrad",
    "description": "En minusgrad ligger under noll. En plusgrad ligger över noll.",
    "examples": [
      "Natten gav minusgrader och dagen plusgrader.",
      "Temperaturen steg från en minusgrad till en plusgrad."
    ]
  },
  {
    "a": "bortalag",
    "b": "hemmalag",
    "description": "Hemmalaget spelar på sin hemmaplan. Bortalaget är gästande lag.",
    "examples": [
      "Hemmalaget mötte bortalaget inför stor publik.",
      "Bortalaget vann över hemmalaget."
    ]
  },
  {
    "a": "regntid",
    "b": "torrtid",
    "description": "Regntid är en period med mycket regn. Torrtid är en period med lite regn.",
    "examples": [
      "Floden stiger under regntiden och sjunker under torrtiden.",
      "Djuren vandrar mellan regntid och torrtid."
    ]
  },
  {
    "a": "pronation",
    "b": "supination",
    "description": "Pronation vrider underarmen så handflatan vänds nedåt. Supination vrider den uppåt.",
    "examples": [
      "Rörelsen växlade mellan pronation och supination.",
      "Supination vänder handflatan uppåt och pronation nedåt."
    ]
  },
  {
    "a": "ja-sägare",
    "b": "nej-sägare",
    "description": "En ja-sägare håller ofta med. En nej-sägare säger ofta emot.",
    "examples": [
      "Gruppen behöver varken bara ja-sägare eller bara nej-sägare.",
      "Ja-sägaren stödde förslaget och nej-sägaren avvisade det."
    ]
  },
  {
    "a": "förgasa",
    "b": "kondensera",
    "description": "Förgasa betyder omvandla till gas. Kondensera betyder omvandla gas till vätska.",
    "examples": [
      "Värmen förgasar vätskan och kylan kondenserar gasen.",
      "Ämnet förgasades och kondenserades senare."
    ]
  },
  {
    "a": "distal",
    "b": "proximal",
    "description": "Proximal betyder nära kroppens centrum eller fästpunkt. Distal betyder längre bort.",
    "examples": [
      "Handen är distal om armbågen och axeln proximal.",
      "Läkaren skiljer mellan distal och proximal skada."
    ]
  },
  {
    "a": "köttätande",
    "b": "växtätande",
    "description": "Köttätande djur äter främst andra djur. Växtätande djur äter främst växter.",
    "examples": [
      "Lejonet är köttätande och kon växtätande.",
      "Tänderna skiljer sig mellan köttätande och växtätande arter."
    ]
  },
  {
    "a": "viktminskning",
    "b": "viktökning",
    "description": "Viktminskning betyder lägre kroppsvikt. Viktökning betyder högre kroppsvikt.",
    "examples": [
      "Rapporten visade viktminskning först och viktökning senare.",
      "Både viktökning och viktminskning kan ha flera orsaker."
    ]
  },
  {
    "a": "skönmåla",
    "b": "svartmåla",
    "description": "Skönmåla betyder beskriva för positivt. Svartmåla betyder beskriva för negativt.",
    "examples": [
      "Försök att varken skönmåla resultatet eller svartmåla det.",
      "Den ena texten skönmålade läget och den andra svartmålade det."
    ]
  },
  {
    "a": "oöverlagd",
    "b": "överlagd",
    "description": "Överlagd betyder genomtänkt i förväg. Oöverlagd betyder impulsiv eller ogenomtänkt.",
    "examples": [
      "Handlingen var oöverlagd, men nästa steg var överlagt.",
      "Ett överlagt beslut ersatte den oöverlagda reaktionen."
    ]
  },
  {
    "a": "införsel",
    "b": "utförsel",
    "description": "Införsel betyder att föra in varor i ett land. Utförsel betyder att föra ut dem.",
    "examples": [
      "Tullen kontrollerar både införsel och utförsel.",
      "Införseln ökade samtidigt som utförseln minskade."
    ]
  },
  {
    "a": "oresonlig",
    "b": "resonlig",
    "description": "Resonlig betyder rimlig och möjlig att diskutera med. Oresonlig betyder orimlig eller obeveklig.",
    "examples": [
      "Hon var resonlig, medan kravet var oresonligt.",
      "Ett oresonligt svar ersattes av ett resonligt."
    ]
  },
  {
    "a": "exportör",
    "b": "importör",
    "description": "En exportör säljer varor till andra länder. En importör köper in dem därifrån.",
    "examples": [
      "Exportören skickade varan till importören.",
      "Företaget är både importör och exportör."
    ]
  },
  {
    "a": "medgörlig",
    "b": "omedgörlig",
    "description": "Medgörlig betyder samarbetsvillig. Omedgörlig betyder svår att samarbeta med.",
    "examples": [
      "Patienten var medgörlig, inte omedgörlig.",
      "Den omedgörliga gruppen blev mer medgörlig."
    ]
  },
  {
    "a": "likriktare",
    "b": "växelriktare",
    "description": "En likriktare gör växelström till likström. En växelriktare gör likström till växelström.",
    "examples": [
      "Likriktaren laddar batteriet och växelriktaren driver apparaten.",
      "Systemet använder både likriktare och växelriktare."
    ]
  },
  {
    "a": "dokumentärfilm",
    "b": "spelfilm",
    "description": "En dokumentärfilm skildrar verkliga förhållanden. En spelfilm berättar främst en iscensatt historia.",
    "examples": [
      "Festivalen visade en dokumentärfilm och en spelfilm.",
      "Dokumentärfilmen bygger på verklighet, medan spelfilmen är dramatiserad."
    ]
  },
  {
    "a": "finissage",
    "b": "vernissage",
    "description": "Vernissage är invigningen av en utställning. Finissage är avslutningen.",
    "examples": [
      "Utställningen öppnade med vernissage och slutade med finissage.",
      "Vi besökte både vernissagen och finissagen."
    ]
  },
  {
    "a": "kortsiktighet",
    "b": "långsiktighet",
    "description": "Kortsiktighet fokuserar på det som händer snart. Långsiktighet tar hänsyn till en längre tid.",
    "examples": [
      "Beslutet präglades av kortsiktighet i stället för långsiktighet.",
      "Långsiktighet kan ge bättre resultat än kortsiktighet."
    ]
  },
  {
    "a": "exhalera",
    "b": "inhalera",
    "description": "Att exhalera är att andas ut. Att inhalera är att andas in.",
    "examples": [
      "Hon inhalerade lugnt och exhalerade långsamt.",
      "Läkaren bad honom inhalera och sedan exhalera."
    ]
  },
  {
    "a": "bibetydelse",
    "b": "grundbetydelse",
    "description": "Grundbetydelsen är ett ords huvudsakliga betydelse. En bibetydelse är en extra eller indirekt betydelse.",
    "examples": [
      "Ordet har en tydlig grundbetydelse och en bildlig bibetydelse.",
      "Ordboken skiljer mellan grundbetydelsen och ordets bibetydelse."
    ]
  },
  {
    "a": "lättlöslig",
    "b": "svårlöslig",
    "description": "Något lättlösligt löses upp enkelt. Något svårlösligt löses upp med svårighet.",
    "examples": [
      "Sockret är lättlösligt, men ämnet i provröret är svårlösligt.",
      "Ett lättlösligt pulver försvinner snabbare i vatten än ett svårlösligt."
    ]
  },
  {
    "a": "anisotropi",
    "b": "isotropi",
    "description": "Isotropi innebär samma egenskaper i alla riktningar. Anisotropi innebär att egenskaperna beror på riktningen.",
    "examples": [
      "Glaset visar isotropi, medan materialet bredvid visar anisotropi.",
      "Forskaren jämförde isotropi med anisotropi i kristallen."
    ]
  },
  {
    "a": "färgstark",
    "b": "färgsvag",
    "description": "Färgstark betyder att färgerna är tydliga och intensiva. Färgsvag betyder att färgerna är svaga eller dämpade.",
    "examples": [
      "Affischen är färgstark, men kopian är färgsvag.",
      "En färgstark bild syns tydligare än en färgsvag."
    ]
  },
  {
    "a": "likfärgad",
    "b": "olikfärgad",
    "description": "Likfärgade saker har samma eller mycket lik färg. Olikfärgade saker har olika färger.",
    "examples": [
      "De likfärgade tröjorna låg bredvid de olikfärgade.",
      "Fåglarna var likfärgade på ryggen men olikfärgade på bröstet."
    ]
  },
  {
    "a": "underlägsenhet",
    "b": "överlägsenhet",
    "description": "Underlägsenhet innebär att vara sämre eller svagare i en jämförelse. Överlägsenhet innebär att vara bättre eller starkare.",
    "examples": [
      "Laget gick från underlägsenhet till överlägsenhet efter pausen.",
      "Resultatet visade maskinens överlägsenhet och den äldre modellens underlägsenhet."
    ]
  },
  {
    "a": "förenlighet",
    "b": "oförenlighet",
    "description": "Förenlighet betyder att saker kan fungera tillsammans. Oförenlighet betyder att de inte kan förenas eller kombineras.",
    "examples": [
      "Testet visade förenlighet mellan systemen, inte oförenlighet.",
      "Deras krav präglades av oförenlighet snarare än förenlighet."
    ]
  },
  {
    "a": "flexibilitet",
    "b": "rigiditet",
    "description": "Flexibilitet innebär att lätt kunna anpassas. Rigiditet innebär stelhet och liten möjlighet till förändring.",
    "examples": [
      "Planen gav flexibilitet i stället för rigiditet.",
      "Materialets flexibilitet kontrasterar mot metallens rigiditet."
    ]
  },
  {
    "a": "fullständighet",
    "b": "ofullständighet",
    "description": "Fullständighet innebär att inget viktigt saknas. Ofullständighet innebär att något saknas.",
    "examples": [
      "Rapportens fullständighet uppskattades, men bilagans ofullständighet kritiserades.",
      "Kontrollen visar om uppgifterna har fullständighet eller ofullständighet."
    ]
  },
  {
    "a": "ljushet",
    "b": "mörkhet",
    "description": "Ljushet beskriver hur ljust något är. Mörkhet beskriver hur mörkt något är.",
    "examples": [
      "Bildens ljushet ökade och dess mörkhet minskade.",
      "Rummet växlade mellan ljushet på dagen och mörkhet på natten."
    ]
  },
  {
    "a": "dödlighet",
    "b": "odödlighet",
    "description": "Dödlighet innebär att kunna dö. Odödlighet innebär att aldrig dö.",
    "examples": [
      "Människans dödlighet står i kontrast till sagogudens odödlighet.",
      "Berättelsen handlar om dödlighet och drömmen om odödlighet."
    ]
  },
  {
    "a": "ditåt",
    "b": "hitåt",
    "description": "Ditåt betyder i riktning bort mot en annan plats. Hitåt betyder i riktning mot platsen där talaren är.",
    "examples": [
      "Gå inte ditåt, kom hitåt.",
      "Hon pekade först ditåt och sedan hitåt."
    ]
  },
  {
    "a": "medspelare",
    "b": "motspelare",
    "description": "En medspelare spelar i samma lag. En motspelare spelar på den andra sidan.",
    "examples": [
      "Hon passade sin medspelare och rundade en motspelare.",
      "Varje medspelare hjälpte laget medan motspelarna försvarade sig."
    ]
  },
  {
    "a": "osjälviskhet",
    "b": "själviskhet",
    "description": "Osjälviskhet innebär att tänka på andra. Själviskhet innebär att främst tänka på sig själv.",
    "examples": [
      "Hennes osjälviskhet uppskattades, medan hans själviskhet väckte irritation.",
      "Att dela med sig visar osjälviskhet snarare än själviskhet."
    ]
  },
  {
    "a": "bemärkt",
    "b": "obemärkt",
    "description": "Bemärkt betyder uppmärksammad eller framstående. Obemärkt betyder utan att bli uppmärksammad.",
    "examples": [
      "Den bemärkta gästen kunde inte lämna festen obemärkt.",
      "Hon blev bemärkt för sin forskning, medan arbetet tidigare hade varit obemärkt."
    ]
  },
  {
    "a": "oöversättbar",
    "b": "översättbar",
    "description": "Något översättbart kan återges på ett annat språk. Något oöversättbart kan inte återges fullt ut.",
    "examples": [
      "Den enkla meningen är översättbar, men ordleken är nästan oöversättbar.",
      "Vissa uttryck är lätt översättbara och andra oöversättbara."
    ]
  },
  {
    "a": "vanvördig",
    "b": "vördnadsfull",
    "description": "Vanvördig betyder respektlös. Vördnadsfull betyder fylld av respekt.",
    "examples": [
      "Kommentaren var vanvördig, men talet var vördnadsfullt.",
      "Han bytte från en vanvördig ton till en vördnadsfull."
    ]
  },
  {
    "a": "högerparentes",
    "b": "vänsterparentes",
    "description": "En vänsterparentes öppnar en parentes. En högerparentes avslutar den.",
    "examples": [
      "Skriv en vänsterparentes före ordet och en högerparentes efter.",
      "Varje vänsterparentes måste ha en högerparentes."
    ]
  },
  {
    "a": "inkompressibel",
    "b": "kompressibel",
    "description": "Ett kompressibelt ämne kan pressas ihop. Ett inkompressibelt ämne kan i praktiken inte pressas ihop.",
    "examples": [
      "Gas är kompressibel, medan vätskan behandlas som inkompressibel.",
      "Modellen skiljer mellan kompressibelt och inkompressibelt flöde."
    ]
  },
  {
    "a": "muntligen",
    "b": "skriftligen",
    "description": "Muntligen betyder med tal. Skriftligen betyder i skriven form.",
    "examples": [
      "Beskedet gavs först muntligen och sedan skriftligen.",
      "Du kan svara muntligen eller skriftligen."
    ]
  },
  {
    "a": "känsloskäl",
    "b": "sakskäl",
    "description": "Känsloskäl bygger på känslor. Sakskäl bygger på fakta och relevanta omständigheter.",
    "examples": [
      "Hon skilde mellan känsloskäl och sakskäl.",
      "Beslutet bör vila på sakskäl, inte bara känsloskäl."
    ]
  },
  {
    "a": "känsloargument",
    "b": "sakargument",
    "description": "Ett känsloargument vädjar till känslor. Ett sakargument bygger på fakta och logik.",
    "examples": [
      "Debatten innehöll både känsloargument och sakargument.",
      "Ett sakargument övertygade mer än känsloargumentet."
    ]
  },
  {
    "a": "bakfot",
    "b": "framfot",
    "description": "En framfot är den främre delen eller foten. En bakfot är den bakre.",
    "examples": [
      "Djuret skadade en framfot men stödde sig på sin bakfot.",
      "Spåren från framfoten låg framför spåren från bakfoten."
    ]
  },
  {
    "a": "imperfektiv",
    "b": "perfektiv",
    "description": "Imperfektiv aspekt beskriver en pågående eller ofullbordad handling. Perfektiv aspekt beskriver handlingen som avslutad eller hel.",
    "examples": [
      "Språket skiljer mellan imperfektiv och perfektiv aspekt.",
      "Den imperfektiva formen betonar förloppet, den perfektiva resultatet."
    ]
  },
  {
    "a": "hjälpsamhet",
    "b": "ohjälpsamhet",
    "description": "Hjälpsamhet innebär en vilja att hjälpa. Ohjälpsamhet innebär att inte vara till hjälp.",
    "examples": [
      "Personalens hjälpsamhet gjorde skillnad, men den tidigare ohjälpsamheten hade skapat problem.",
      "Hon möttes av hjälpsamhet i stället för ohjälpsamhet."
    ]
  },
  {
    "a": "arbetsförmåga",
    "b": "arbetsoförmåga",
    "description": "Arbetsförmåga är förmågan att arbeta. Arbetsoförmåga innebär att man inte kan arbeta.",
    "examples": [
      "Läkaren bedömde både arbetsförmåga och arbetsoförmåga.",
      "Efter vilan återfick han sin arbetsförmåga efter en period av arbetsoförmåga."
    ]
  },
  {
    "a": "gammaltestamentlig",
    "b": "nytestamentlig",
    "description": "Gammaltestamentlig hör till Gamla testamentet. Nytestamentlig hör till Nya testamentet.",
    "examples": [
      "Kursen tar upp både gammaltestamentliga och nytestamentliga texter.",
      "Motivet har en gammaltestamentlig bakgrund och en nytestamentlig tolkning."
    ]
  },
  {
    "a": "inpendling",
    "b": "utpendling",
    "description": "Inpendling är resor in till en ort för arbete eller studier. Utpendling är resor från orten.",
    "examples": [
      "Kommunen har stor inpendling på morgonen och utpendling på kvällen.",
      "Statistiken jämför inpendling med utpendling."
    ]
  },
  {
    "a": "kontaktbar",
    "b": "okontaktbar",
    "description": "Kontaktbar betyder att en person går att få kontakt med. Okontaktbar betyder att personen inte reagerar på kontaktförsök.",
    "examples": [
      "Patienten var först okontaktbar men blev senare kontaktbar.",
      "Räddningspersonalen kontrollerade om personen var kontaktbar eller okontaktbar."
    ]
  },
  {
    "a": "ingångspsalm",
    "b": "utgångspsalm",
    "description": "En ingångspsalm sjungs i början av en gudstjänst. En utgångspsalm sjungs i slutet.",
    "examples": [
      "Gudstjänsten började med en ingångspsalm och slutade med en utgångspsalm.",
      "Kören övade både ingångspsalmen och utgångspsalmen."
    ]
  },
  {
    "a": "arvmonarki",
    "b": "valmonarki",
    "description": "I en arvmonarki ärvs tronen. I en valmonarki utses monarken genom val.",
    "examples": [
      "Landet gick från valmonarki till arvmonarki.",
      "Historikern jämförde arvmonarki med valmonarki."
    ]
  },
  {
    "a": "högerparti",
    "b": "vänsterparti",
    "description": "Ett högerparti hör till den politiska högern. Ett vänsterparti hör till den politiska vänstern.",
    "examples": [
      "Debatten hölls mellan ett högerparti och ett vänsterparti.",
      "Väljaren jämförde högerpartiets förslag med vänsterpartiets."
    ]
  },
  {
    "a": "lönesänkning",
    "b": "löneökning",
    "description": "En lönesänkning minskar lönen. En löneökning höjer lönen.",
    "examples": [
      "De anställda ville ha en löneökning, inte en lönesänkning.",
      "Avtalet gav löneökning efter en period med lönesänkning."
    ]
  },
  {
    "a": "blyfri",
    "b": "blyhaltig",
    "description": "Blyfri betyder utan bly. Blyhaltig betyder att något innehåller bly.",
    "examples": [
      "Färgen ska vara blyfri och inte blyhaltig.",
      "Provet visade om materialet var blyfritt eller blyhaltigt."
    ]
  },
  {
    "a": "folkminskning",
    "b": "folkökning",
    "description": "Folkminskning innebär att befolkningen blir mindre. Folkökning innebär att den blir större.",
    "examples": [
      "Utflyttning gav folkminskning, medan inflyttning senare gav folkökning.",
      "Rapporten jämför kommuner med folkökning och folkminskning."
    ]
  },
  {
    "a": "bredspårig",
    "b": "smalspårig",
    "description": "Bredspårig beskriver en järnväg med bred spårvidd. Smalspårig beskriver en med smal spårvidd.",
    "examples": [
      "Den bredspåriga banan möter en smalspårig järnväg.",
      "Museet visar både bredspåriga och smalspåriga lok."
    ]
  },
  {
    "a": "akterskepp",
    "b": "förskepp",
    "description": "Förskeppet är den främre delen av ett fartyg. Akterskeppet är den bakre delen.",
    "examples": [
      "Besättningen arbetade både i förskeppet och i akterskeppet.",
      "Skadan satt i förskeppet, inte i akterskeppet."
    ]
  },
  {
    "a": "småsyskon",
    "b": "storasyskon",
    "description": "Ett småsyskon är yngre än personen man jämför med. Ett storasyskon är äldre.",
    "examples": [
      "Hon är storasyskon till sin bror och småsyskon till sin syster.",
      "Ett storasyskon hjälpte sitt småsyskon med läxan."
    ]
  },
  {
    "a": "uddamålsförlust",
    "b": "uddamålsvinst",
    "description": "En uddamålsförlust är en förlust med ett mål. En uddamålsvinst är en seger med ett mål.",
    "examples": [
      "Första matchen slutade med uddamålsförlust och den andra med uddamålsvinst.",
      "Laget vände en uddamålsförlust till en uddamålsvinst i returen."
    ]
  },
  {
    "a": "dubbelradig",
    "b": "enkelradig",
    "description": "Dubbelradig betyder ordnad i två rader. Enkelradig betyder ordnad i en rad.",
    "examples": [
      "Kavajen finns som dubbelradig och enkelradig.",
      "Den dubbelradiga planteringen tar mer plats än den enkelradiga."
    ]
  },
  {
    "a": "fertilitet",
    "b": "infertilitet",
    "description": "Fertilitet är förmågan att få avkomma. Infertilitet innebär nedsatt eller saknad sådan förmåga.",
    "examples": [
      "Undersökningen gällde både fertilitet och infertilitet.",
      "Behandlingen kan förbättra fertilitet vid vissa former av infertilitet."
    ]
  },
  {
    "a": "undertryck",
    "b": "övertryck",
    "description": "Undertryck är lägre tryck än omgivningen. Övertryck är högre tryck än omgivningen.",
    "examples": [
      "Fläkten skapade undertryck i rummet och övertryck i kanalen.",
      "Mätaren visar om det råder undertryck eller övertryck."
    ]
  },
  {
    "a": "ditfärd",
    "b": "hitfärd",
    "description": "Ditfärden är resan till en plats. Hitfärden är resan därifrån mot platsen där man befinner sig.",
    "examples": [
      "Ditfärden tog längre tid än hitfärden.",
      "Vi planerade både ditfärd och hitfärd."
    ]
  },
  {
    "a": "distansundervisning",
    "b": "närundervisning",
    "description": "Distansundervisning sker på avstånd. Närundervisning sker med lärare och elever på samma plats.",
    "examples": [
      "Skolan erbjuder både distansundervisning och närundervisning.",
      "Hon bytte från distansundervisning till närundervisning."
    ]
  },
  {
    "a": "nederhylla",
    "b": "överhylla",
    "description": "En nederhylla sitter längre ner. En överhylla sitter längre upp.",
    "examples": [
      "Skorna står på nederhyllan och väskorna på överhyllan.",
      "Flytta boken från överhyllan till nederhyllan."
    ]
  },
  {
    "a": "högervriden",
    "b": "vänstervriden",
    "description": "Högervriden betyder vriden åt höger. Vänstervriden betyder vriden åt vänster.",
    "examples": [
      "Den ena spiralen är högervriden och den andra vänstervriden.",
      "Kontrollera om gängan är höger- eller vänstervriden."
    ]
  },
  {
    "a": "kreditgivare",
    "b": "kredittagare",
    "description": "En kreditgivare lånar ut pengar eller ger kredit. En kredittagare tar emot krediten.",
    "examples": [
      "Banken är kreditgivare och företaget kredittagare.",
      "Avtalet gäller mellan kreditgivaren och kredittagaren."
    ]
  },
  {
    "a": "dödsattest",
    "b": "födelseattest",
    "description": "En födelseattest intygar en födelse. En dödsattest intygar ett dödsfall.",
    "examples": [
      "Arkivet innehåller både födelseattest och dödsattest.",
      "Födelseattesten utfärdades i början av livet och dödsattesten i slutet."
    ]
  },
  {
    "a": "högoddsare",
    "b": "lågoddsare",
    "description": "En högoddsare bedöms ha liten chans att vinna och ger högt odds. En lågoddsare bedöms ha stor chans och ger lågt odds.",
    "examples": [
      "Favoriten var lågoddsare, medan utmanaren var högoddsare.",
      "En högoddsare kan ge större vinst än en lågoddsare."
    ]
  },
  {
    "a": "anfallskrig",
    "b": "försvarskrig",
    "description": "Ett anfallskrig inleds för att angripa. Ett försvarskrig förs för att försvara sig mot ett angrepp.",
    "examples": [
      "Historikern skilde mellan anfallskrig och försvarskrig.",
      "Landet beskrev striden som ett försvarskrig, inte ett anfallskrig."
    ]
  },
  {
    "a": "inbuktning",
    "b": "utbuktning",
    "description": "En inbuktning går inåt. En utbuktning buktar utåt.",
    "examples": [
      "Plåten hade en inbuktning på ena sidan och en utbuktning på den andra.",
      "Mätningen visar både inbuktning och utbuktning."
    ]
  },
  {
    "a": "underhus",
    "b": "överhus",
    "description": "I ett tvåkammarparlament är underhuset den lägre kammaren och överhuset den högre.",
    "examples": [
      "Förslaget antogs av underhuset men stoppades i överhuset.",
      "Både underhus och överhus röstade om lagen."
    ]
  },
  {
    "a": "inomhusväxt",
    "b": "utomhusväxt",
    "description": "En inomhusväxt odlas främst inne. En utomhusväxt odlas främst ute.",
    "examples": [
      "Orkidén är en inomhusväxt och lavendeln en utomhusväxt.",
      "Kontrollera om plantan är inomhusväxt eller utomhusväxt."
    ]
  },
  {
    "a": "högtrycksområde",
    "b": "lågtrycksområde",
    "description": "Ett högtrycksområde har högre lufttryck än omgivningen. Ett lågtrycksområde har lägre lufttryck.",
    "examples": [
      "Högtrycksområdet gav klart väder, medan lågtrycksområdet gav regn.",
      "Kartan visar ett högtrycksområde bredvid ett lågtrycksområde."
    ]
  },
  {
    "a": "smalände",
    "b": "tjockände",
    "description": "Smaländen är den smalaste änden. Tjockänden är den tjockaste.",
    "examples": [
      "Håll i tjockänden och peka med smaländen.",
      "Ägget har en smalände och en tjockände."
    ]
  },
  {
    "a": "lättflytande",
    "b": "trögflytande",
    "description": "En lättflytande vätska rinner lätt. En trögflytande vätska rinner långsamt.",
    "examples": [
      "Vattnet är lättflytande, men sirapen är trögflytande.",
      "Den trögflytande oljan blev mer lättflytande när den värmdes."
    ]
  },
  {
    "a": "rotända",
    "b": "toppända",
    "description": "Rotändan är delen närmast roten. Toppändan är delen närmast toppen.",
    "examples": [
      "Sätt rotändan i jorden och låt toppändan peka uppåt.",
      "Grenen är grövre vid rotändan än vid toppändan."
    ]
  },
  {
    "a": "parallellkoppling",
    "b": "seriekoppling",
    "description": "Vid parallellkoppling ligger komponenter i parallella grenar. Vid seriekoppling ligger de efter varandra i samma krets.",
    "examples": [
      "Lamporna kopplades först i serie och sedan med parallellkoppling.",
      "Läraren jämförde seriekoppling med parallellkoppling."
    ]
  },
  {
    "a": "förvinter",
    "b": "senvinter",
    "description": "Förvintern är vinterns tidiga del. Senvintern är den sena delen.",
    "examples": [
      "Den första snön kom på förvintern och tövädret på senvintern.",
      "Förvintern var mild, men senvintern blev kall."
    ]
  },
  {
    "a": "ljusögd",
    "b": "mörkögd",
    "description": "Ljusögd betyder att ha ljusa ögon. Mörkögd betyder att ha mörka ögon.",
    "examples": [
      "Den ljusögda katten satt bredvid den mörkögda.",
      "I familjen finns både ljusögda och mörkögda personer."
    ]
  },
  {
    "a": "förhöst",
    "b": "senhöst",
    "description": "Förhösten är höstens tidiga del. Senhösten är den sena delen.",
    "examples": [
      "Förhösten var varm, men senhösten blev kylig.",
      "Äpplena mognar på förhösten och löven faller på senhösten."
    ]
  },
  {
    "a": "beständighet",
    "b": "obeständighet",
    "description": "Beständighet innebär att något håller eller består. Obeständighet innebär att det lätt förändras eller försvinner.",
    "examples": [
      "Stenen har stor beständighet, medan färgen visar obeständighet.",
      "Testet mäter materialets beständighet och obeständighet."
    ]
  },
  {
    "a": "västvart",
    "b": "östvart",
    "description": "Västvart betyder i riktning mot väster. Östvart betyder i riktning mot öster.",
    "examples": [
      "Det ena tåget går västvart och det andra östvart.",
      "Fåglarna flög först östvart och senare västvart."
    ]
  },
  {
    "a": "nordvart",
    "b": "sydvart",
    "description": "Nordvart betyder i riktning mot norr. Sydvart betyder i riktning mot söder.",
    "examples": [
      "Vägen går nordvart här och sydvart på andra sidan.",
      "De reste nordvart på våren och sydvart på hösten."
    ]
  },
  {
    "a": "monotypisk",
    "b": "polytypisk",
    "description": "Monotypisk betyder att en grupp bara har en typ eller art. Polytypisk betyder att den har flera.",
    "examples": [
      "Det ena släktet är monotypiskt och det andra polytypiskt.",
      "Forskaren avgjorde om gruppen var monotypisk eller polytypisk."
    ]
  },
  {
    "a": "oparfymerad",
    "b": "parfymerad",
    "description": "Oparfymerad betyder utan tillsatt parfym. Parfymerad betyder att parfym har tillsatts.",
    "examples": [
      "Hon valde oparfymerad tvål i stället för parfymerad.",
      "Krämen finns både oparfymerad och parfymerad."
    ]
  },
  {
    "a": "medsols",
    "b": "motsols",
    "description": "Medsols är samma riktning som visarna på en klocka. Motsols är den motsatta riktningen.",
    "examples": [
      "Vrid ratten medsols för att öka och motsols för att minska.",
      "Löparna sprang ett varv medsols och ett motsols."
    ]
  },
  {
    "a": "räntehöjning",
    "b": "räntesänkning",
    "description": "En räntehöjning gör räntan högre. En räntesänkning gör den lägre.",
    "examples": [
      "Efter en räntehöjning kom senare en räntesänkning.",
      "Banken valde räntesänkning i stället för räntehöjning."
    ]
  },
  {
    "a": "straffbar",
    "b": "straffri",
    "description": "Straffbar betyder att en handling kan leda till straff. Straffri betyder att den inte straffas.",
    "examples": [
      "Handlingen är straffbar, medan det andra beteendet är straffritt.",
      "Domstolen prövar om personen är straffbar eller straffri."
    ]
  },
  {
    "a": "inomhuscykling",
    "b": "utomhuscykling",
    "description": "Inomhuscykling sker inne, ofta på träningscykel eller bana. Utomhuscykling sker ute.",
    "examples": [
      "På vintern väljer hon inomhuscykling och på sommaren utomhuscykling.",
      "Klubben erbjuder både inomhuscykling och utomhuscykling."
    ]
  },
  {
    "a": "gammalstavning",
    "b": "nystavning",
    "description": "Gammalstavning är en äldre stavningsform. Nystavning är en nyare reformerad stavning.",
    "examples": [
      "Texten använder gammalstavning, men utgåvan bredvid har nystavning.",
      "Ordboken visar både gammalstavning och nystavning."
    ]
  },
  {
    "a": "inflyttningskommun",
    "b": "utflyttningskommun",
    "description": "En inflyttningskommun får fler invånare genom flyttning. En utflyttningskommun förlorar invånare genom flyttning.",
    "examples": [
      "Orten blev inflyttningskommun efter att ha varit utflyttningskommun.",
      "Rapporten jämför inflyttningskommuner med utflyttningskommuner."
    ]
  },
  {
    "a": "innesko",
    "b": "utesko",
    "description": "En innesko används inomhus. En utesko används utomhus.",
    "examples": [
      "Byt från uteskor till inneskor i hallen.",
      "Hon har en innesko till gymmet och en utesko till promenaden."
    ]
  },
  {
    "a": "koffeinfri",
    "b": "koffeinhaltig",
    "description": "Koffeinfri betyder utan koffein. Koffeinhaltig betyder att något innehåller koffein.",
    "examples": [
      "Teet finns som koffeinfritt och koffeinhaltigt.",
      "På kvällen valde han koffeinfritt i stället för koffeinhaltigt kaffe."
    ]
  },
  {
    "a": "inomhustemperatur",
    "b": "utomhustemperatur",
    "description": "Inomhustemperaturen mäts inne. Utomhustemperaturen mäts ute.",
    "examples": [
      "Inomhustemperaturen var tjugo grader och utomhustemperaturen fem.",
      "Termometern visar både inomhustemperatur och utomhustemperatur."
    ]
  },
  {
    "a": "demobilisering",
    "b": "mobilisering",
    "description": "Mobilisering innebär att resurser eller trupper görs redo. Demobilisering innebär att de avvecklas efteråt.",
    "examples": [
      "Mobilisering skedde före konflikten och demobilisering efter den.",
      "Planen omfattar både mobilisering och demobilisering."
    ]
  },
  {
    "a": "höstsådd",
    "b": "vårsådd",
    "description": "Höstsådd görs på hösten. Vårsådd görs på våren.",
    "examples": [
      "En del av fältet fick höstsådd och resten vårsådd.",
      "Höstsådd gror före vintern, medan vårsådd börjar på våren."
    ]
  },
  {
    "a": "avkriminalisering",
    "b": "kriminalisering",
    "description": "Kriminalisering gör en handling straffbar. Avkriminalisering tar bort straffansvaret.",
    "examples": [
      "Lagen innebar kriminalisering, men reformen senare gav avkriminalisering.",
      "Debatten gällde kriminalisering eller avkriminalisering."
    ]
  },
  {
    "a": "oredighet",
    "b": "redighet",
    "description": "Redighet innebär klarhet och ordning. Oredighet innebär oklarhet eller förvirring.",
    "examples": [
      "Textens redighet gjorde den lättläst, medan utkastet präglades av oredighet.",
      "Hon gick från oredighet i tanken till redighet."
    ]
  },
  {
    "a": "illegalitet",
    "b": "legalitet",
    "description": "Legalitet innebär att något är lagligt. Illegalitet innebär att det strider mot lagen.",
    "examples": [
      "Domstolen prövade handlingens legalitet eller illegalitet.",
      "Tillståndet gav verksamheten legalitet efter en tid av illegalitet."
    ]
  },
  {
    "a": "konkavitet",
    "b": "konvexitet",
    "description": "Konkavitet innebär att en yta buktar inåt. Konvexitet innebär att den buktar utåt.",
    "examples": [
      "Linsen har konvexitet på ena sidan och konkavitet på den andra.",
      "Mätningen skiljer mellan konkavitet och konvexitet."
    ]
  },
  {
    "a": "otjänlighet",
    "b": "tjänlighet",
    "description": "Tjänlighet innebär att något är lämpligt att använda. Otjänlighet innebär att det inte är lämpligt.",
    "examples": [
      "Provet visade vattnets tjänlighet och avfärdade misstanken om otjänlighet.",
      "Inspektionen bedömer matens tjänlighet eller otjänlighet."
    ]
  },
  {
    "a": "irregularitet",
    "b": "regularitet",
    "description": "Regularitet innebär regelbundenhet. Irregularitet innebär avvikelse eller oregelbundenhet.",
    "examples": [
      "Mönstret visar regularitet, men kanten har en tydlig irregularitet.",
      "Forskaren jämförde regularitet med irregularitet."
    ]
  },
  {
    "a": "oumbärlighet",
    "b": "umbärlighet",
    "description": "Oumbärlighet innebär att något inte kan undvaras. Umbärlighet innebär att det kan undvaras.",
    "examples": [
      "Vattnets oumbärlighet är tydlig, medan prydnadens umbärlighet är större.",
      "Bedömningen gällde delens oumbärlighet eller umbärlighet."
    ]
  },
  {
    "a": "otillräknelighet",
    "b": "tillräknelighet",
    "description": "Tillräknelighet innebär förmåga att förstå och ansvara för sina handlingar. Otillräknelighet innebär att denna förmåga saknas.",
    "examples": [
      "Domstolen prövade personens tillräknelighet eller otillräknelighet.",
      "Utredningen fann tillräknelighet och inte otillräknelighet."
    ]
  },
  {
    "a": "pietetsfullhet",
    "b": "pietetslöshet",
    "description": "Pietetsfullhet innebär varsam respekt för något värdefullt. Pietetslöshet innebär brist på sådan respekt.",
    "examples": [
      "Renoveringen gjordes med pietetsfullhet i stället för pietetslöshet.",
      "Pietetsfullhet bevarade huset, medan pietetslöshet hade skadat det."
    ]
  },
  {
    "a": "besticklighet",
    "b": "obesticklighet",
    "description": "Besticklighet innebär att kunna påverkas med mutor. Obesticklighet innebär att inte kunna köpas.",
    "examples": [
      "Tjänstens obesticklighet var viktig, och all besticklighet skulle motverkas.",
      "Granskningen prövade besticklighet och obesticklighet."
    ]
  },
  {
    "a": "mutbarhet",
    "b": "omutbarhet",
    "description": "Mutbarhet innebär att kunna mutas. Omutbarhet innebär att inte låta sig mutas.",
    "examples": [
      "Omutbarhet krävs i rollen, medan mutbarhet är ett allvarligt problem.",
      "Utredningen fann omutbarhet och inga tecken på mutbarhet."
    ]
  },
  {
    "a": "otämjbar",
    "b": "tämjbar",
    "description": "Tämjbar betyder möjlig att tämja. Otämjbar betyder att inte kunna tämjas.",
    "examples": [
      "Djuret verkade först otämjbart men visade sig vara tämjbart.",
      "Arten är svår men tämjbar, inte helt otämjbar."
    ]
  },
  {
    "a": "köpstark",
    "b": "köpsvag",
    "description": "Köpstark betyder att ha stor köpkraft. Köpsvag betyder att ha liten köpkraft.",
    "examples": [
      "En köpstark grupp har större utrymme än en köpsvag.",
      "Marknaden riktar sig till både köpstarka och köpsvaga kunder."
    ]
  },
  {
    "a": "bokningsbar",
    "b": "obokningsbar",
    "description": "Bokningsbar betyder att något går att boka. Obokningsbar betyder att det inte går att boka.",
    "examples": [
      "Tiden är bokningsbar på morgonen men obokningsbar på kvällen.",
      "Rummet blev obokningsbart efter att tidigare ha varit bokningsbart."
    ]
  },
  {
    "a": "inomhuslek",
    "b": "utomhuslek",
    "description": "Inomhuslek sker inne. Utomhuslek sker ute.",
    "examples": [
      "Regnet ledde till inomhuslek i stället för utomhuslek.",
      "Förskolan planerar både inomhuslek och utomhuslek."
    ]
  },
  {
    "a": "oregelmässighet",
    "b": "regelmässighet",
    "description": "Regelmässighet innebär att följa ett regelbundet mönster. Oregelmässighet innebär avvikelser från mönstret.",
    "examples": [
      "Pulsen visade regelmässighet och inga tecken på oregelmässighet.",
      "Kontrollen mäter regelmässighet och oregelmässighet."
    ]
  },
  {
    "a": "flärdfull",
    "b": "flärdlös",
    "description": "Flärdfull betyder präglad av prakt och utsmyckning. Flärdlös betyder enkel och utan flärd.",
    "examples": [
      "Den flärdfulla salen låg bredvid ett flärdlöst rum.",
      "Hon valde en flärdlös stil i stället för en flärdfull."
    ]
  },
  {
    "a": "otänkbarhet",
    "b": "tänkbarhet",
    "description": "Tänkbarhet innebär att något går att föreställa sig. Otänkbarhet innebär att det inte går eller verkar omöjligt.",
    "examples": [
      "Förslaget gick från otänkbarhet till tänkbarhet.",
      "De diskuterade både planens tänkbarhet och dess tidigare otänkbarhet."
    ]
  },
  {
    "a": "osänkbarhet",
    "b": "sänkbarhet",
    "description": "Sänkbarhet innebär att något kan sänkas. Osänkbarhet innebär att det inte kan sänkas.",
    "examples": [
      "Fartygets påstådda osänkbarhet ställdes mot dess verkliga sänkbarhet.",
      "Testet bedömer sänkbarhet och osänkbarhet."
    ]
  },
  {
    "a": "overkställbar",
    "b": "verkställbar",
    "description": "Verkställbar betyder möjlig att genomföra eller verkställa. Overkställbar betyder att den inte kan verkställas.",
    "examples": [
      "Domen är verkställbar, men det tidigare beslutet var overkställbart.",
      "Myndigheten avgör om åtgärden är verkställbar eller overkställbar."
    ]
  },
  {
    "a": "otillåtlighet",
    "b": "tillåtlighet",
    "description": "Tillåtlighet innebär att något är tillåtet. Otillåtlighet innebär att det inte är tillåtet.",
    "examples": [
      "Nämnden prövade åtgärdens tillåtlighet eller otillåtlighet.",
      "Regeln klargör både tillåtlighet och otillåtlighet."
    ]
  },
  {
    "a": "köldgrad",
    "b": "värmegrad",
    "description": "En köldgrad är en grad under noll. En värmegrad är en grad över noll.",
    "examples": [
      "På morgonen var det fem köldgrader och på dagen två värmegrader.",
      "Termometern gick från köldgrader till värmegrader."
    ]
  },
  {
    "a": "otämjbarhet",
    "b": "tämjbarhet",
    "description": "Tämjbarhet innebär att något kan tämjas. Otämjbarhet innebär att det inte kan tämjas.",
    "examples": [
      "Djurets tämjbarhet överraskade efter talet om dess otämjbarhet.",
      "Studien jämför artens tämjbarhet och otämjbarhet."
    ]
  },
  {
    "a": "overkställbarhet",
    "b": "verkställbarhet",
    "description": "Verkställbarhet innebär att ett beslut kan genomföras. Overkställbarhet innebär att det inte kan genomföras.",
    "examples": [
      "Domstolen bedömde beslutets verkställbarhet eller overkställbarhet.",
      "Felet ledde till overkställbarhet, men rättelsen gav verkställbarhet."
    ]
  },
  {
    "a": "kroppslighet",
    "b": "okroppslighet",
    "description": "Kroppslighet innebär att ha fysisk form. Okroppslighet innebär att sakna fysisk kropp.",
    "examples": [
      "Skulpturen uttrycker kroppslighet, medan anden symboliserar okroppslighet.",
      "Filosofen diskuterade kroppslighet och okroppslighet."
    ]
  },
  {
    "a": "bestämbar",
    "b": "obestämbar",
    "description": "Bestämbar betyder möjlig att fastställa. Obestämbar betyder att den inte kan fastställas.",
    "examples": [
      "Värdet är bestämbart, men den andra storheten är obestämbar.",
      "Testet visar om mängden är bestämbar eller obestämbar."
    ]
  },
  {
    "a": "dragfri",
    "b": "dragig",
    "description": "Dragfri betyder utan besvärande luftdrag. Dragig betyder att det drar kall luft.",
    "examples": [
      "Det nya rummet är dragfritt, men det gamla är dragigt.",
      "Tätningslisten gjorde fönstret dragfritt i stället för dragigt."
    ]
  },
  {
    "a": "klangfull",
    "b": "klanglös",
    "description": "Klangfull betyder rik på tydlig klang. Klanglös betyder utan tydlig klang.",
    "examples": [
      "Klockan gav en klangfull ton, medan slaget mot träet var klanglöst.",
      "Rösten lät klangfull i salen men klanglös i det dämpade rummet."
    ]
  },
  {
    "a": "osmältbar",
    "b": "smältbar",
    "description": "Smältbar betyder möjlig att smälta. Osmältbar betyder att den inte kan smälta under de aktuella villkoren.",
    "examples": [
      "Vaxet är smältbart, men materialet bredvid är osmältbart.",
      "Provet visar om ämnet är smältbart eller osmältbart."
    ]
  },
  {
    "a": "finkalibrig",
    "b": "grovkalibrig",
    "description": "Finkalibrig betyder att ha liten kaliber. Grovkalibrig betyder att ha stor kaliber.",
    "examples": [
      "Den finkalibriga utrustningen låg bredvid den grovkalibriga.",
      "Texten skiljer mellan finkalibriga och grovkalibriga vapen."
    ]
  },
  {
    "a": "oöverskådlighet",
    "b": "överskådlighet",
    "description": "Överskådlighet innebär att något är lätt att få överblick över. Oöverskådlighet innebär att det är svårt.",
    "examples": [
      "Tabellens överskådlighet hjälpte, medan rådatans oöverskådlighet försvårade arbetet.",
      "En tydlig struktur ger överskådlighet i stället för oöverskådlighet."
    ]
  },
  {
    "a": "avpolitisering",
    "b": "politisering",
    "description": "Politisering gör en fråga mer politisk. Avpolitisering minskar dess politiska prägel.",
    "examples": [
      "Frågan gick från avpolitisering till politisering.",
      "Debatten gäller politisering eller avpolitisering av myndigheten."
    ]
  },
  {
    "a": "oåtkomlighet",
    "b": "åtkomlighet",
    "description": "Åtkomlighet innebär att något går att nå. Oåtkomlighet innebär att det inte går att nå.",
    "examples": [
      "Rampens åtkomlighet kontrasterade mot trappans oåtkomlighet.",
      "Felet skapade oåtkomlighet, men reparationen återställde åtkomlighet."
    ]
  },
  {
    "a": "enstavighet",
    "b": "flerstavighet",
    "description": "Enstavighet innebär att ett ord har en stavelse. Flerstavighet innebär att det har flera.",
    "examples": [
      "Ordet visar enstavighet, medan det längre ordet visar flerstavighet.",
      "Övningen jämför enstavighet med flerstavighet."
    ]
  },
  {
    "a": "förklarlighet",
    "b": "oförklarlighet",
    "description": "Förklarlighet innebär att något går att förklara. Oförklarlighet innebär att en tydlig förklaring saknas.",
    "examples": [
      "Modellen gav händelsen förklarlighet i stället för oförklarlighet.",
      "Forskaren diskuterade resultatets förklarlighet och oförklarlighet."
    ]
  },
  {
    "a": "antastbar",
    "b": "oantastbar",
    "description": "Antastbar betyder möjlig att angripa eller ifrågasätta. Oantastbar betyder skyddad från sådana angrepp.",
    "examples": [
      "Argumentet var antastbart, men slutsatsen framställdes som oantastbar.",
      "Granskningen visar om beslutet är antastbart eller oantastbart."
    ]
  },
  {
    "a": "fullgången",
    "b": "ofullgången",
    "description": "Fullgången betyder utvecklad under hela den normala tiden. Ofullgången betyder född eller avslutad för tidigt.",
    "examples": [
      "Det ena barnet var fullgånget och det andra ofullgånget.",
      "Vården skiljer mellan fullgångna och ofullgångna nyfödda."
    ]
  },
  {
    "a": "korthylsa",
    "b": "långhylsa",
    "description": "En korthylsa är en kort patronhylsa. En långhylsa är en längre hylsa.",
    "examples": [
      "Samlingen innehåller både korthylsa och långhylsa.",
      "Mätningen avgör om det är en korthylsa eller långhylsa."
    ]
  },
  {
    "a": "temperaturhöjning",
    "b": "temperatursänkning",
    "description": "En temperaturhöjning gör temperaturen högre. En temperatursänkning gör den lägre.",
    "examples": [
      "Dagen gav en temperaturhöjning och natten en temperatursänkning.",
      "Systemet kan skapa både temperaturhöjning och temperatursänkning."
    ]
  },
  {
    "a": "reallönehöjning",
    "b": "reallönesänkning",
    "description": "En reallönehöjning ökar lönens köpkraft. En reallönesänkning minskar den.",
    "examples": [
      "Låg inflation gav reallönehöjning i stället för reallönesänkning.",
      "Rapporten jämför reallönehöjning med reallönesänkning."
    ]
  },
  {
    "a": "sittplatsläktare",
    "b": "ståplatsläktare",
    "description": "En sittplatsläktare har sittplatser. En ståplatsläktare är avsedd för stående publik.",
    "examples": [
      "Familjen valde sittplatsläktaren, medan klacken stod på ståplatsläktaren.",
      "Arenan har både sittplatsläktare och ståplatsläktare."
    ]
  },
  {
    "a": "utsläppsminskning",
    "b": "utsläppsökning",
    "description": "En utsläppsminskning gör utsläppen mindre. En utsläppsökning gör dem större.",
    "examples": [
      "Åtgärden gav utsläppsminskning i stället för utsläppsökning.",
      "Diagrammet visar först utsläppsökning och sedan utsläppsminskning."
    ]
  },
  {
    "a": "kortskallig",
    "b": "långskallig",
    "description": "Kortskallig beskriver en relativt kort och bred skalle. Långskallig beskriver en relativt lång och smal skalle.",
    "examples": [
      "Äldre facktexter skiljer mellan kortskallig och långskallig form.",
      "Måttet användes för att beskriva formen som kortskallig eller långskallig."
    ]
  },
  {
    "a": "kulturlandskap",
    "b": "naturlandskap",
    "description": "Ett kulturlandskap är tydligt påverkat av människor. Ett naturlandskap är i liten grad påverkat.",
    "examples": [
      "Åkermarken är kulturlandskap, medan vildmarken är naturlandskap.",
      "Vandringen går från kulturlandskap till naturlandskap."
    ]
  },
  {
    "a": "kostnadsminskning",
    "b": "kostnadsökning",
    "description": "En kostnadsminskning gör kostnaden lägre. En kostnadsökning gör den högre.",
    "examples": [
      "Effektiviseringen gav kostnadsminskning i stället för kostnadsökning.",
      "Budgeten visar både kostnadsökning och kostnadsminskning."
    ]
  },
  {
    "a": "maximistraff",
    "b": "minimistraff",
    "description": "Minimistraff är det lägsta föreskrivna straffet. Maximistraff är det högsta.",
    "examples": [
      "Lagen anger både minimistraff och maximistraff.",
      "Domaren höll sig över minimistraffet och under maximistraffet."
    ]
  },
  {
    "a": "gruppspelsmatch",
    "b": "slutspelsmatch",
    "description": "En gruppspelsmatch spelas i gruppspelet. En slutspelsmatch spelas efter gruppspelet för avancemang eller titel.",
    "examples": [
      "Laget vann sin gruppspelsmatch och gick vidare till en slutspelsmatch.",
      "Trycket var större i slutspelsmatchen än i gruppspelsmatchen."
    ]
  },
  {
    "a": "träningsmatch",
    "b": "tävlingsmatch",
    "description": "En träningsmatch spelas som förberedelse. En tävlingsmatch ingår i en officiell tävling.",
    "examples": [
      "Klubben spelade en träningsmatch före årets första tävlingsmatch.",
      "Resultatet betyder mindre i en träningsmatch än i en tävlingsmatch."
    ]
  },
  {
    "a": "lokalförening",
    "b": "riksförening",
    "description": "En lokalförening verkar inom ett mindre område. En riksförening verkar i hela landet.",
    "examples": [
      "Lokalföreningen är ansluten till en riksförening.",
      "Frågan behandlades först av lokalföreningen och sedan av riksföreningen."
    ]
  },
  {
    "a": "inomhusmästerskap",
    "b": "utomhusmästerskap",
    "description": "Ett inomhusmästerskap hålls inne. Ett utomhusmästerskap hålls ute.",
    "examples": [
      "Hon vann inomhusmästerskapet och deltog senare i utomhusmästerskapet.",
      "Grenen finns i både inomhusmästerskap och utomhusmästerskap."
    ]
  },
  {
    "a": "höglöneland",
    "b": "låglöneland",
    "description": "Ett höglöneland har relativt höga löner. Ett låglöneland har relativt låga löner.",
    "examples": [
      "Företaget säljer i både höglöneländer och låglöneländer.",
      "Kostnaden skiljer sig mellan ett höglöneland och ett låglöneland."
    ]
  },
  {
    "a": "eldgivningsorder",
    "b": "eldupphörorder",
    "description": "En eldgivningsorder beordrar att eld ska öppnas. En eldupphörorder beordrar att elden ska upphöra.",
    "examples": [
      "Eldgivningsordern ersattes snabbt av en eldupphörorder.",
      "Soldaterna måste skilja på eldgivningsorder och eldupphörorder."
    ]
  },
  {
    "a": "inrikesreporter",
    "b": "utrikesreporter",
    "description": "En inrikesreporter bevakar händelser inom landet. En utrikesreporter bevakar andra länder.",
    "examples": [
      "Inrikesreportern skrev om valet och utrikesreportern om krisen utomlands.",
      "Redaktionen sökte både inrikesreporter och utrikesreporter."
    ]
  },
  {
    "a": "avtrappa",
    "b": "upptrappa",
    "description": "Att avtrappa är att minska styrka eller konflikt. Att upptrappa är att öka den.",
    "examples": [
      "Parterna valde att avtrappa konflikten i stället för att upptrappa den.",
      "Ett hårt svar kan upptrappa läget, medan samtal kan avtrappa det."
    ]
  },
  {
    "a": "inomhusarena",
    "b": "utomhusarena",
    "description": "En inomhusarena ligger under tak. En utomhusarena ligger ute.",
    "examples": [
      "Vintertävlingen hölls i en inomhusarena och sommartävlingen på en utomhusarena.",
      "Staden har både inomhusarena och utomhusarena."
    ]
  },
  {
    "a": "utgiftsminskning",
    "b": "utgiftsökning",
    "description": "En utgiftsminskning gör utgifterna mindre. En utgiftsökning gör dem större.",
    "examples": [
      "Sparandet gav utgiftsminskning i stället för utgiftsökning.",
      "Planen visar en utgiftsökning i år och en utgiftsminskning nästa år."
    ]
  },
  {
    "a": "kursslut",
    "b": "kursstart",
    "description": "Kursstart är när en kurs börjar. Kursslut är när den slutar.",
    "examples": [
      "Information ges vid kursstart och intyg vid kursslut.",
      "Tiden mellan kursstart och kursslut är tio veckor."
    ]
  },
  {
    "a": "grundlagsenlig",
    "b": "grundlagsvidrig",
    "description": "Grundlagsenlig betyder förenlig med grundlagen. Grundlagsvidrig betyder att strida mot den.",
    "examples": [
      "Domstolen prövar om lagen är grundlagsenlig eller grundlagsvidrig.",
      "Förslaget ändrades från grundlagsvidrigt till grundlagsenligt."
    ]
  },
  {
    "a": "egennyttig",
    "b": "oegennyttig",
    "description": "Egennyttig betyder styrd av egen vinning. Oegennyttig betyder utan tanke på egen vinning.",
    "examples": [
      "Handlingen verkade oegennyttig, inte egennyttig.",
      "En egennyttig lösning gynnar en själv, en oegennyttig hjälper andra."
    ]
  },
  {
    "a": "ouppsägbar",
    "b": "uppsägbar",
    "description": "Uppsägbar betyder att ett avtal kan sägas upp. Ouppsägbar betyder att det inte kan sägas upp under den aktuella tiden.",
    "examples": [
      "Det ena avtalet är uppsägbart och det andra ouppsägbart.",
      "Kontrollera om bindningstiden gör tjänsten ouppsägbar eller uppsägbar."
    ]
  },
  {
    "a": "oöverblickbar",
    "b": "överblickbar",
    "description": "Överblickbar betyder lätt att få en helhetsbild av. Oöverblickbar betyder svår att överblicka.",
    "examples": [
      "Den korta listan är överblickbar, men hela materialet är oöverblickbart.",
      "En sammanfattning gjorde problemet överblickbart i stället för oöverblickbart."
    ]
  },
  {
    "a": "ljusklädd",
    "b": "mörkklädd",
    "description": "Ljusklädd betyder klädd i ljusa färger. Mörkklädd betyder klädd i mörka färger.",
    "examples": [
      "Den ljusklädda personen stod bredvid den mörkklädda.",
      "På bilden syns både ljusklädda och mörkklädda gäster."
    ]
  },
  {
    "a": "månnedgång",
    "b": "månuppgång",
    "description": "Månuppgång är när månen stiger över horisonten. Månnedgång är när den sjunker under den.",
    "examples": [
      "Vi såg månuppgång på kvällen och månnedgång på morgonen.",
      "Tiden för månuppgång och månnedgång står i kalendern."
    ]
  },
  {
    "a": "ourskiljbar",
    "b": "urskiljbar",
    "description": "Urskiljbar betyder möjlig att uppfatta eller skilja ut. Ourskiljbar betyder att den inte går att urskilja.",
    "examples": [
      "Detaljen är urskiljbar nära håll men ourskiljbar på avstånd.",
      "Ljudet gick från ourskiljbart till tydligt urskiljbart."
    ]
  },
  {
    "a": "inomhusaktivitet",
    "b": "utomhusaktivitet",
    "description": "En inomhusaktivitet sker inne. En utomhusaktivitet sker ute.",
    "examples": [
      "Simhallen ger en inomhusaktivitet och vandringen en utomhusaktivitet.",
      "Programmet innehåller både inomhusaktiviteter och utomhusaktiviteter."
    ]
  },
  {
    "a": "underdomstol",
    "b": "överdomstol",
    "description": "En underdomstol dömer på en lägre nivå. En överdomstol prövar mål på en högre nivå.",
    "examples": [
      "Målet började i underdomstolen och överklagades till överdomstolen.",
      "Överdomstolen ändrade underdomstolens beslut."
    ]
  },
  {
    "a": "denaturalisering",
    "b": "naturalisering",
    "description": "Naturalisering ger en person medborgarskap efter ansökan. Denaturalisering innebär att medborgarskapet tas ifrån personen.",
    "examples": [
      "Lagen reglerar både naturalisering och denaturalisering.",
      "Efter naturalisering blev han medborgare, medan denaturalisering skulle upphäva det."
    ]
  },
  {
    "a": "korkning",
    "b": "uppkorkning",
    "description": "Korkning är att sätta i en kork. Uppkorkning är att ta ur korken.",
    "examples": [
      "Flaskan fick korkning på fabriken och uppkorkning vid bordet.",
      "Verktyget används för både korkning och uppkorkning."
    ]
  },
  {
    "a": "kortdistansare",
    "b": "långdistansare",
    "description": "En kortdistansare tävlar på korta sträckor. En långdistansare tävlar på långa.",
    "examples": [
      "Kortdistansaren tränade snabbhet och långdistansaren uthållighet.",
      "Klubben har både kortdistansare och långdistansare."
    ]
  },
  {
    "a": "havslax",
    "b": "insjölax",
    "description": "Havslax lever eller vandrar i havet. Insjölax lever i stora insjöar.",
    "examples": [
      "Studien jämför havslax med insjölax.",
      "Havslaxen fångades vid kusten och insjölaxen i sjön."
    ]
  },
  {
    "a": "gömfröig",
    "b": "nakenfröig",
    "description": "Gömfröiga växter har frön inneslutna i fruktämnet. Nakenfröiga växter har frön som inte är inneslutna där.",
    "examples": [
      "Äppelträdet är gömfröigt och tallen nakenfröig.",
      "Botaniken skiljer mellan gömfröiga och nakenfröiga växter."
    ]
  },
  {
    "a": "mogen",
    "b": "omogen",
    "description": "Mogen betyder färdigutvecklad eller redo. Omogen betyder ännu inte färdigutvecklad.",
    "examples": [
      "Den mogna frukten är söt, men den omogna är sur.",
      "Hon gav ett moget svar i stället för ett omoget."
    ]
  },
  {
    "a": "möblerad",
    "b": "omöblerad",
    "description": "Möblerad betyder att ett rum har möbler. Omöblerad betyder att det saknar möbler.",
    "examples": [
      "Lägenheten finns både möblerad och omöblerad.",
      "Det möblerade rummet var klart, medan det omöblerade stod tomt."
    ]
  },
  {
    "a": "frivillig",
    "b": "ofrivillig",
    "description": "Frivillig betyder gjord av egen vilja. Ofrivillig betyder gjord utan att man själv har valt det.",
    "examples": [
      "Deltagandet är frivilligt, inte ofrivilligt.",
      "Hon gjorde en frivillig rörelse och sedan en ofrivillig."
    ]
  },
  {
    "a": "rörlig",
    "b": "orörlig",
    "description": "Rörlig betyder att kunna röra sig. Orörlig betyder att stå stilla eller inte kunna röra sig.",
    "examples": [
      "Kameran är rörlig, men stativet är orörligt.",
      "Han stod orörlig medan de andra var rörliga."
    ]
  },
  {
    "a": "gift",
    "b": "ogift",
    "description": "Gift betyder att vara i ett äktenskap. Ogift betyder att inte vara gift.",
    "examples": [
      "Hon är gift, men hennes bror är ogift.",
      "Blanketten frågar om personen är gift eller ogift."
    ]
  },
  {
    "a": "belyst",
    "b": "obelyst",
    "description": "Belyst betyder att ljus faller på något. Obelyst betyder att det saknar belysning.",
    "examples": [
      "Gatan är belyst, men stigen är obelyst.",
      "Den belysta sidan syns tydligare än den obelysta."
    ]
  },
  {
    "a": "bebodd",
    "b": "obebodd",
    "description": "Bebodd betyder att människor bor på platsen. Obebodd betyder att ingen bor där.",
    "examples": [
      "Den stora ön är bebodd, men den lilla är obebodd.",
      "Huset gick från bebott till obebott."
    ]
  },
  {
    "a": "betald",
    "b": "obetald",
    "description": "Betald betyder att betalningen är gjord. Obetald betyder att betalning saknas.",
    "examples": [
      "Den första fakturan är betald och den andra obetald.",
      "Kontrollera om avgiften är betald eller obetald."
    ]
  },
  {
    "a": "läslig",
    "b": "oläslig",
    "description": "Läslig betyder lätt att läsa. Oläslig betyder svår eller omöjlig att läsa.",
    "examples": [
      "Rubriken är läslig, men anteckningen är oläslig.",
      "Större text gjorde skylten läslig i stället för oläslig."
    ]
  },
  {
    "a": "låsbar",
    "b": "olåsbar",
    "description": "Låsbar betyder att något går att låsa. Olåsbar betyder att det inte går att låsa.",
    "examples": [
      "Skåpet är låsbart, men hyllan är olåsbar.",
      "Dörren blev olåsbar när låset gick sönder."
    ]
  },
  {
    "a": "hörbar",
    "b": "ohörbar",
    "description": "Hörbar betyder möjlig att höra. Ohörbar betyder att den inte kan höras.",
    "examples": [
      "Rösten var hörbar längst fram men ohörbar längst bak.",
      "Högtalaren gjorde signalen hörbar i stället för ohörbar."
    ]
  },
  {
    "a": "ätlig",
    "b": "oätlig",
    "description": "Ätlig betyder möjlig och lämplig att äta. Oätlig betyder att den inte bör eller kan ätas.",
    "examples": [
      "Bäret är ätligt, men svampen är oätlig.",
      "Kocken tog bort de oätliga delarna och sparade de ätliga."
    ]
  },
  {
    "a": "drickbar",
    "b": "odrickbar",
    "description": "Drickbar betyder lämplig att dricka. Odrickbar betyder att den inte bör drickas.",
    "examples": [
      "Kranvattnet är drickbart, men havsvattnet är odrickbart.",
      "Reningen gjorde vattnet drickbart i stället för odrickbart."
    ]
  },
  {
    "a": "känd",
    "b": "okänd",
    "description": "Känd betyder att någon eller något är bekant. Okänd betyder att det inte är känt.",
    "examples": [
      "Orsaken är ännu okänd, men lösningen är känd.",
      "En känd författare skrev under ett tidigare okänt namn."
    ]
  },
  {
    "a": "säker",
    "b": "osäker",
    "description": "Säker betyder trygg eller viss. Osäker betyder otrygg eller tveksam.",
    "examples": [
      "Hon var säker på svaret, medan jag var osäker.",
      "Bron är säker nu men var osäker före reparationen."
    ]
  },
  {
    "a": "beroende",
    "b": "oberoende",
    "description": "Beroende betyder att behöva eller påverkas av något annat. Oberoende betyder att kunna stå fritt.",
    "examples": [
      "Systemet är beroende av el, men reservdelen är oberoende av nätet.",
      "En oberoende granskare kontrollerade den beroende verksamheten."
    ]
  },
  {
    "a": "föränderlig",
    "b": "oföränderlig",
    "description": "Föränderlig betyder att kunna ändras. Oföränderlig betyder att inte ändras.",
    "examples": [
      "Vädret är föränderligt, men regeln beskrivs som oföränderlig.",
      "Det föränderliga mönstret stod mot den oföränderliga bakgrunden."
    ]
  },
  {
    "a": "regelbunden",
    "b": "oregelbunden",
    "description": "Regelbunden betyder att följa ett jämnt mönster. Oregelbunden betyder att mönstret varierar.",
    "examples": [
      "Pulsen är regelbunden nu men var oregelbunden tidigare.",
      "Bussen går regelbundet, medan extraturen är oregelbunden."
    ]
  },
  {
    "a": "personlig",
    "b": "opersonlig",
    "description": "Personlig betyder präglad av en viss person. Opersonlig betyder utan personlig prägel.",
    "examples": [
      "Brevet kändes personligt, men standardsvaret var opersonligt.",
      "En personlig hälsning ersatte den opersonliga texten."
    ]
  },
  {
    "a": "formell",
    "b": "informell",
    "description": "Formell betyder officiell och regelstyrd. Informell betyder ledig och mindre officiell.",
    "examples": [
      "Mötet började formellt men samtalet efteråt var informellt.",
      "Hon bar formella kläder på festen och informella hemma."
    ]
  },
  {
    "a": "direkt",
    "b": "indirekt",
    "description": "Direkt betyder utan mellanled. Indirekt betyder via ett mellanled eller på omväg.",
    "examples": [
      "Hon gav ett direkt svar, medan han svarade indirekt.",
      "Vi har direkt kontakt med kunden och indirekt kontakt med leverantören."
    ]
  },
  {
    "a": "medveten",
    "b": "omedveten",
    "description": "Medveten betyder att vara klar över något. Omedveten betyder att inte känna till eller märka det.",
    "examples": [
      "Hon var medveten om risken, men han var omedveten.",
      "Valet var medvetet, inte en omedveten reaktion."
    ]
  },
  {
    "a": "villkorlig",
    "b": "ovillkorlig",
    "description": "Villkorlig betyder att något gäller under vissa villkor. Ovillkorlig betyder att det gäller utan villkor.",
    "examples": [
      "Stödet var villkorligt, men hennes hjälp var ovillkorlig.",
      "Ett villkorligt löfte är inte lika starkt som ett ovillkorligt."
    ]
  },
  {
    "a": "begränsad",
    "b": "obegränsad",
    "description": "Begränsad betyder att ha en bestämd gräns. Obegränsad betyder utan sådan gräns.",
    "examples": [
      "Kontot har begränsad lagring, medan det andra har obegränsad.",
      "Tiden är begränsad, inte obegränsad."
    ]
  },
  {
    "a": "bestämd",
    "b": "obestämd",
    "description": "Bestämd betyder tydligt fastställd. Obestämd betyder inte fastställd eller oklar.",
    "examples": [
      "Mötet har en bestämd tid, men slutet är obestämt.",
      "Hon gav ett bestämt svar i stället för ett obestämt."
    ]
  },
  {
    "a": "duglig",
    "b": "oduglig",
    "description": "Duglig betyder kapabel att klara en uppgift. Oduglig betyder att inte klara den.",
    "examples": [
      "Den dugliga reparatören bytte ut det odugliga verktyget.",
      "Hon visade sig duglig, inte oduglig."
    ]
  },
  {
    "a": "erfaren",
    "b": "oerfaren",
    "description": "Erfaren betyder att ha mycket erfarenhet. Oerfaren betyder att ha liten erfarenhet.",
    "examples": [
      "Den erfarna läraren hjälpte den oerfarna kollegan.",
      "Han var oerfaren i början men blev snart erfaren."
    ]
  },
  {
    "a": "försiktig",
    "b": "oförsiktig",
    "description": "Försiktig betyder att undvika onödiga risker. Oförsiktig betyder att inte vara tillräckligt varsam.",
    "examples": [
      "Den försiktiga föraren bromsade, medan den oförsiktiga körde vidare.",
      "Var försiktig med glaset och inte oförsiktig."
    ]
  },
  {
    "a": "lydig",
    "b": "olydig",
    "description": "Lydig betyder att följa regler eller uppmaningar. Olydig betyder att inte göra det.",
    "examples": [
      "Den lydiga hunden stannade, men den olydiga sprang vidare.",
      "Barnet var lydigt i dag och olydigt i går."
    ]
  },
  {
    "a": "nyttig",
    "b": "onyttig",
    "description": "Nyttig betyder bra eller användbar. Onyttig betyder inte nyttig och ibland skadlig.",
    "examples": [
      "Frukt är nyttig, medan för mycket godis är onyttigt.",
      "Rådet var nyttigt, men ryktet var onyttigt."
    ]
  },
  {
    "a": "noggrann",
    "b": "slarvig",
    "description": "Noggrann betyder omsorgsfull och exakt. Slarvig betyder vårdslös och mindre exakt.",
    "examples": [
      "Den noggranna eleven hittade den slarviga uträkningen.",
      "Arbetet blev noggrant efter att först ha varit slarvigt."
    ]
  },
  {
    "a": "teoretisk",
    "b": "praktisk",
    "description": "Teoretisk handlar främst om idéer och modeller. Praktisk handlar om tillämpning och handling.",
    "examples": [
      "Kursen har en teoretisk del och en praktisk del.",
      "Den teoretiska kunskapen testades i en praktisk övning."
    ]
  },
  {
    "a": "individuell",
    "b": "kollektiv",
    "description": "Individuell gäller en person. Kollektiv gäller en grupp gemensamt.",
    "examples": [
      "Uppgiften är individuell, men redovisningen är kollektiv.",
      "Ett individuellt ansvar skiljer sig från ett kollektivt."
    ]
  },
  {
    "a": "nationell",
    "b": "internationell",
    "description": "Nationell gäller ett land. Internationell gäller flera länder.",
    "examples": [
      "Tävlingen började nationellt och blev senare internationell.",
      "En nationell regel jämfördes med ett internationellt avtal."
    ]
  },
  {
    "a": "stabil",
    "b": "instabil",
    "description": "Stabil betyder stadig och svår att rubba. Instabil betyder ostadig eller lätt att förändra.",
    "examples": [
      "Bordet är stabilt, men stolen är instabil.",
      "Läget gick från instabilt till stabilt."
    ]
  },
  {
    "a": "spridd",
    "b": "samlad",
    "description": "Spridd betyder utspridd på flera platser. Samlad betyder förd ihop på ett ställe.",
    "examples": [
      "Papperen låg spridda men blev snart samlade i en hög.",
      "Gruppen var först spridd och sedan samlad."
    ]
  },
  {
    "a": "vaken",
    "b": "sovande",
    "description": "Vaken betyder att inte sova. Sovande betyder att befinna sig i sömn.",
    "examples": [
      "Barnet var vaken, men hunden var sovande.",
      "Hon var sovande nyss men är vaken nu."
    ]
  },
  {
    "a": "nykter",
    "b": "berusad",
    "description": "Nykter betyder inte påverkad av alkohol. Berusad betyder påverkad av alkohol.",
    "examples": [
      "Föraren var nykter, medan passageraren var berusad.",
      "Han gick från berusad på kvällen till nykter nästa morgon."
    ]
  },
  {
    "a": "tålmodig",
    "b": "otålig",
    "description": "Tålmodig betyder att kunna vänta lugnt. Otålig betyder att ha svårt att vänta.",
    "examples": [
      "Den tålmodiga kunden väntade, men den otåliga gick.",
      "Försök vara tålmodig i stället för otålig."
    ]
  },
  {
    "a": "effektiv",
    "b": "ineffektiv",
    "description": "Effektiv betyder att ge bra resultat utan onödigt arbete. Ineffektiv betyder att ge dåligt resultat i förhållande till insatsen.",
    "examples": [
      "Den nya metoden är effektiv, men den gamla var ineffektiv.",
      "Arbetet gick från ineffektivt till effektivt."
    ]
  },
  {
    "a": "kompetent",
    "b": "inkompetent",
    "description": "Kompetent betyder att ha rätt kunskap och förmåga. Inkompetent betyder att sakna tillräcklig förmåga.",
    "examples": [
      "Den kompetenta teknikern rättade den inkompetenta reparationen.",
      "Hon visade sig kompetent, inte inkompetent."
    ]
  },
  {
    "a": "digital",
    "b": "analog",
    "description": "Digital använder diskreta värden eller digital teknik. Analog använder kontinuerliga signaler eller mekanisk visning.",
    "examples": [
      "Klockan finns i en digital och en analog version.",
      "Den digitala signalen ersatte den analoga."
    ]
  },
  {
    "a": "ordnad",
    "b": "oordnad",
    "description": "Ordnad betyder organiserad och i god ordning. Oordnad betyder utan tydlig ordning.",
    "examples": [
      "Den ordnade hyllan stod bredvid den oordnade.",
      "Rummet gick från oordnat till ordnat."
    ]
  },
  {
    "a": "populär",
    "b": "impopulär",
    "description": "Populär betyder omtyckt av många. Impopulär betyder illa omtyckt av många.",
    "examples": [
      "Låten blev populär, medan uppföljaren var impopulär.",
      "Beslutet var impopulärt men förslaget bredvid populärt."
    ]
  },
  {
    "a": "logisk",
    "b": "ologisk",
    "description": "Logisk betyder att följa ett tydligt och rimligt resonemang. Ologisk betyder att sakna sådan följd.",
    "examples": [
      "Förklaringen är logisk, men slutsatsen är ologisk.",
      "Hon ändrade det ologiska upplägget till ett logiskt."
    ]
  },
  {
    "a": "realistisk",
    "b": "orealistisk",
    "description": "Realistisk betyder möjlig och verklighetsnära. Orealistisk betyder inte rimlig i verkligheten.",
    "examples": [
      "Planen är realistisk, men tidsgränsen är orealistisk.",
      "Budgeten gick från orealistisk till realistisk."
    ]
  },
  {
    "a": "ansvarig",
    "b": "oansvarig",
    "description": "Ansvarig betyder att ta eller ha ansvar. Oansvarig betyder att inte visa tillräckligt ansvar.",
    "examples": [
      "Den ansvariga föraren stannade, medan den oansvariga körde vidare.",
      "Beteendet var oansvarigt, men beslutet efteråt var ansvarigt."
    ]
  },
  {
    "a": "trogen",
    "b": "otrogen",
    "description": "Trogen betyder lojal i en relation eller mot något. Otrogen betyder att bryta denna trohet.",
    "examples": [
      "Hon var trogen sitt löfte, medan han visade sig otrogen.",
      "Berättelsen handlar om en trogen partner och en otrogen."
    ]
  },
  {
    "a": "proportionell",
    "b": "oproportionell",
    "description": "Proportionell betyder i rimligt eller matematiskt förhållande. Oproportionell betyder utan ett sådant förhållande.",
    "examples": [
      "Kostnaden är proportionell mot tiden, men avgiften är oproportionell.",
      "Reaktionen var oproportionell i stället för proportionell."
    ]
  },
  {
    "a": "linjär",
    "b": "olinjär",
    "description": "Linjär betyder att följa en rät linje eller ett jämnt samband. Olinjär betyder att sambandet inte är linjärt.",
    "examples": [
      "Den första grafen är linjär och den andra olinjär.",
      "Modellen gick från linjär till olinjär när fler faktorer lades till."
    ]
  },
  {
    "a": "ordentlig",
    "b": "oordentlig",
    "description": "Ordentlig betyder noggrann och välordnad. Oordentlig betyder slarvig eller utan ordning.",
    "examples": [
      "Det ordentliga skrivbordet stod bredvid det oordentliga.",
      "Hon var ordentlig med papperen men oordentlig med verktygen."
    ]
  },
  {
    "a": "högtidlig",
    "b": "vardaglig",
    "description": "Högtidlig betyder formell och festlig. Vardaglig betyder vanlig och enkel.",
    "examples": [
      "Ceremonin var högtidlig, men lunchen efteråt var vardaglig.",
      "Han bytte från högtidliga ord till ett vardagligt språk."
    ]
  },
  {
    "a": "civil",
    "b": "militär",
    "description": "Civil gäller samhället utanför försvaret. Militär gäller försvarsmakt och soldater.",
    "examples": [
      "Flygplatsen har både civil och militär trafik.",
      "Den civila byggnaden ligger bredvid det militära området."
    ]
  },
  {
    "a": "enspråkig",
    "b": "flerspråkig",
    "description": "Enspråkig betyder att använda ett språk. Flerspråkig betyder att använda flera språk.",
    "examples": [
      "Boken finns i en enspråkig och en flerspråkig utgåva.",
      "Skylten var först enspråkig men blev flerspråkig."
    ]
  },
  {
    "a": "kvalificerad",
    "b": "okvalificerad",
    "description": "Kvalificerad betyder att kräva eller ha särskild kompetens. Okvalificerad betyder utan sådana krav eller meriter.",
    "examples": [
      "Det kvalificerade arbetet utfördes av en utbildad person, det okvalificerade av en nybörjare.",
      "Hon var kvalificerad för tjänsten, medan den andra sökanden var okvalificerad."
    ]
  },
  {
    "a": "lagbunden",
    "b": "laglös",
    "description": "Lagbunden betyder styrd av lagar eller regelbundenheter. Laglös betyder utan fungerande lag och ordning.",
    "examples": [
      "Ett lagbundet samhälle står i motsats till ett laglöst.",
      "Processen är lagbunden, inte laglös."
    ]
  },
  {
    "a": "hoppfull",
    "b": "hopplös",
    "description": "Hoppfull betyder fylld av hopp. Hopplös betyder utan hopp eller mycket svår.",
    "examples": [
      "Hon var hoppfull trots att läget först verkade hopplöst.",
      "Beskedet gjorde gruppen hoppfull i stället för hopplös."
    ]
  },
  {
    "a": "respektfull",
    "b": "respektlös",
    "description": "Respektfull betyder att visa respekt. Respektlös betyder att inte visa respekt.",
    "examples": [
      "Svaret var respektfullt, men kommentaren bredvid var respektlös.",
      "Var respektfull i samtalet och inte respektlös."
    ]
  },
  {
    "a": "smakfull",
    "b": "smaklös",
    "description": "Smakfull betyder stilfull och väl avvägd. Smaklös betyder utan god smak.",
    "examples": [
      "Rummet var smakfullt, men dekorationen uppfattades som smaklös.",
      "Hon valde en smakfull färg i stället för en smaklös kombination."
    ]
  },
  {
    "a": "innehållsrik",
    "b": "innehållsfattig",
    "description": "Innehållsrik betyder fylld av mycket relevant innehåll. Innehållsfattig betyder att ha lite innehåll.",
    "examples": [
      "Den innehållsrika boken gav mer än den innehållsfattiga broschyren.",
      "Rapporten blev innehållsrik efter att först ha varit innehållsfattig."
    ]
  },
  {
    "a": "händelserik",
    "b": "händelsefattig",
    "description": "Händelserik betyder fylld av många händelser. Händelsefattig betyder att lite händer.",
    "examples": [
      "Veckan var händelserik, men helgen blev händelsefattig.",
      "Filmen gick från händelsefattig till händelserik."
    ]
  },
  {
    "a": "framgångsrik",
    "b": "misslyckad",
    "description": "Framgångsrik betyder att nå goda resultat. Misslyckad betyder att inte nå det avsedda resultatet.",
    "examples": [
      "Den första lanseringen var framgångsrik, men den andra blev misslyckad.",
      "Ett misslyckat försök följdes av en framgångsrik lösning."
    ]
  },
  {
    "a": "fredlig",
    "b": "våldsam",
    "description": "Fredlig betyder utan våld. Våldsam betyder präglad av våld eller stark kraft.",
    "examples": [
      "Protesten var fredlig på dagen men blev våldsam på kvällen.",
      "De sökte en fredlig lösning på den våldsamma konflikten."
    ]
  },
  {
    "a": "bevarad",
    "b": "förstörd",
    "description": "Bevarad betyder att något finns kvar i gott skick. Förstörd betyder att det har skadats så svårt att det inte fungerar eller finns kvar.",
    "examples": [
      "Den ena byggnaden är bevarad och den andra förstörd.",
      "Fotot blev bevarat, men kopian var förstörd."
    ]
  },
  {
    "a": "intakt",
    "b": "skadad",
    "description": "Intakt betyder hel och oskadad. Skadad betyder att ha fått en skada.",
    "examples": [
      "Förpackningen var intakt, men varan inuti var skadad.",
      "Den intakta delen sparades och den skadade byttes ut."
    ]
  },
  {
    "a": "organiserad",
    "b": "oorganiserad",
    "description": "Organiserad betyder planerad och ordnad. Oorganiserad betyder utan tydlig plan eller ordning.",
    "examples": [
      "Den organiserade gruppen arbetade snabbare än den oorganiserade.",
      "Arbetet gick från oorganiserat till organiserat."
    ]
  },
  {
    "a": "centraliserad",
    "b": "decentraliserad",
    "description": "Centraliserad betyder samlad till en central ledning. Decentraliserad betyder fördelad mellan flera enheter.",
    "examples": [
      "Besluten var tidigare centraliserade men är nu decentraliserade.",
      "En centraliserad organisation jämfördes med en decentraliserad."
    ]
  },
  {
    "a": "reglerad",
    "b": "oreglerad",
    "description": "Reglerad betyder styrd av bestämda regler. Oreglerad betyder utan sådan reglering.",
    "examples": [
      "Den reglerade marknaden ligger bredvid en mer oreglerad.",
      "Verksamheten gick från oreglerad till reglerad."
    ]
  },
  {
    "a": "kontrollerad",
    "b": "okontrollerad",
    "description": "Kontrollerad betyder övervakad eller behärskad. Okontrollerad betyder utan kontroll.",
    "examples": [
      "Branden var kontrollerad efter att först ha varit okontrollerad.",
      "En kontrollerad rörelse är säkrare än en okontrollerad."
    ]
  },
  {
    "a": "återkallelig",
    "b": "oåterkallelig",
    "description": "Återkallelig betyder möjlig att ta tillbaka. Oåterkallelig betyder att den inte kan återkallas.",
    "examples": [
      "Fullmakten är återkallelig, men beslutet beskrevs som oåterkalleligt.",
      "Kontrollera om medgivandet är återkalleligt eller oåterkalleligt."
    ]
  },
  {
    "a": "kompatibel",
    "b": "inkompatibel",
    "description": "Kompatibel betyder att kunna fungera tillsammans. Inkompatibel betyder att inte kunna göra det.",
    "examples": [
      "Programmet är kompatibelt med den nya datorn men inkompatibelt med den gamla.",
      "Testet visar om delarna är kompatibla eller inkompatibla."
    ]
  },
  {
    "a": "önskvärd",
    "b": "oönskad",
    "description": "Önskvärd betyder att något är önskat eller bra att uppnå. Oönskad betyder att det inte är önskat.",
    "examples": [
      "En jämn temperatur är önskvärd, medan fukt är oönskad.",
      "Åtgärden gav en önskvärd effekt och tog bort den oönskade."
    ]
  },
  {
    "a": "acceptabel",
    "b": "oacceptabel",
    "description": "Acceptabel betyder möjlig att godta. Oacceptabel betyder att den inte kan godtas.",
    "examples": [
      "Det första resultatet är acceptabelt, men det andra är oacceptabelt.",
      "Felet gick från oacceptabelt till en acceptabel nivå."
    ]
  },
  {
    "a": "lämplig",
    "b": "olämplig",
    "description": "Lämplig betyder passande för ändamålet. Olämplig betyder att inte passa.",
    "examples": [
      "Skorna är lämpliga för vandring men olämpliga för fest.",
      "Hon valde en lämplig tid i stället för en olämplig."
    ]
  },
  {
    "a": "rimlig",
    "b": "orimlig",
    "description": "Rimlig betyder förnuftig och skälig. Orimlig betyder oskälig eller svår att tro.",
    "examples": [
      "Priset är rimligt, men leveranstiden är orimlig.",
      "Kravet ändrades från orimligt till rimligt."
    ]
  },
  {
    "a": "trovärdig",
    "b": "otrovärdig",
    "description": "Trovärdig betyder värd att tro på. Otrovärdig betyder att inte verka sann eller pålitlig.",
    "examples": [
      "Källan är trovärdig, men ryktet är otrovärdigt.",
      "Förklaringen blev trovärdig efter att först ha varit otrovärdig."
    ]
  },
  {
    "a": "regelrätt",
    "b": "regelvidrig",
    "description": "Regelrätt betyder i enlighet med reglerna. Regelvidrig betyder i strid med reglerna.",
    "examples": [
      "Målet var regelrätt, men nästa spel bedömdes som regelvidrigt.",
      "Domaren avgör om handlingen är regelrätt eller regelvidrig."
    ]
  },
  {
    "a": "sammanhängande",
    "b": "osammanhängande",
    "description": "Sammanhängande betyder att delarna följer en tydlig helhet. Osammanhängande betyder att sambandet saknas.",
    "examples": [
      "Berättelsen var sammanhängande, men slutet blev osammanhängande.",
      "Hon gjorde den osammanhängande texten sammanhängande."
    ]
  },
  {
    "a": "jämlik",
    "b": "ojämlik",
    "description": "Jämlik betyder att människor har lika rättigheter och möjligheter. Ojämlik betyder att skillnaderna är orättvisa.",
    "examples": [
      "Målet är ett jämlikt samhälle, inte ett ojämlikt.",
      "Villkoren var ojämlika men blev mer jämlika."
    ]
  },
  {
    "a": "demokratisk",
    "b": "odemokratisk",
    "description": "Demokratisk betyder byggd på folkstyre och öppet deltagande. Odemokratisk betyder att sådana principer saknas.",
    "examples": [
      "Valet var demokratiskt, medan förbudet var odemokratiskt.",
      "En demokratisk process ersatte den odemokratiska."
    ]
  },
  {
    "a": "fredad",
    "b": "ofredad",
    "description": "Fredad betyder skyddad från jakt, angrepp eller störning. Ofredad betyder utan sådant skydd.",
    "examples": [
      "Arten är fredad här men ofredad i området bredvid.",
      "Den fredade platsen ska inte behandlas som ofredad mark."
    ]
  },
  {
    "a": "skyddad",
    "b": "oskyddad",
    "description": "Skyddad betyder försedd med skydd. Oskyddad betyder att skydd saknas.",
    "examples": [
      "Cyklisten med hjälm var skyddad, den andre mer oskyddad.",
      "Den skyddade sidan klarade regnet bättre än den oskyddade."
    ]
  },
  {
    "a": "inloggad",
    "b": "utloggad",
    "description": "Inloggad betyder ansluten till ett konto. Utloggad betyder att sessionen är avslutad.",
    "examples": [
      "Hon var inloggad på datorn men utloggad på mobilen.",
      "Kontrollera om användaren är inloggad eller utloggad."
    ]
  },
  {
    "a": "ansluten",
    "b": "frånkopplad",
    "description": "Ansluten betyder kopplad till ett system eller nät. Frånkopplad betyder att kopplingen har brutits.",
    "examples": [
      "Skrivaren är ansluten, men skannern är frånkopplad.",
      "Enheten gick från frånkopplad till ansluten."
    ]
  },
  {
    "a": "öppenhjärtig",
    "b": "sluten",
    "description": "Öppenhjärtig betyder ärlig och villig att dela känslor. Sluten betyder ovillig att visa vad man tänker eller känner.",
    "examples": [
      "Hon var öppenhjärtig, medan han förblev sluten.",
      "Samtalet gjorde den slutna personen mer öppenhjärtig."
    ]
  },
  {
    "a": "givmild",
    "b": "snål",
    "description": "Givmild betyder villig att ge och dela. Snål betyder ovillig att ge eller använda pengar.",
    "examples": [
      "Den givmilda grannen delade med sig, men den snåla höll allt själv.",
      "Han gick från snål till mer givmild."
    ]
  },
  {
    "a": "arbetsam",
    "b": "lat",
    "description": "Arbetsam betyder flitig och villig att arbeta. Lat betyder ovillig att anstränga sig.",
    "examples": [
      "Den arbetsamma eleven började tidigt, medan den lata väntade.",
      "Hon är arbetsam på jobbet men lat på semestern."
    ]
  },
  {
    "a": "ödmjuk",
    "b": "högmodig",
    "description": "Ödmjuk betyder anspråkslös och respektfull. Högmodig betyder överdrivet stolt.",
    "examples": [
      "Vinnaren var ödmjuk, men motståndaren lät högmodig.",
      "Han blev mer ödmjuk och mindre högmodig."
    ]
  },
  {
    "a": "generös",
    "b": "sparsam",
    "description": "Generös betyder villig att ge rikligt. Sparsam betyder försiktig med pengar eller resurser.",
    "examples": [
      "Hon är generös med presenter men sparsam med el.",
      "En generös portion stod bredvid en sparsam."
    ]
  },
  {
    "a": "tillgänglig",
    "b": "otillgänglig",
    "description": "Tillgänglig betyder möjlig att nå eller använda. Otillgänglig betyder svår eller omöjlig att nå.",
    "examples": [
      "Sidan är tillgänglig i dag men var otillgänglig i går.",
      "Rampen gör entrén tillgänglig i stället för otillgänglig."
    ]
  },
  {
    "a": "försvarlig",
    "b": "oförsvarlig",
    "description": "Försvarlig betyder möjlig att motivera eller godta. Oförsvarlig betyder att inte kunna försvaras.",
    "examples": [
      "Beslutet var försvarligt, men förseningen var oförsvarlig.",
      "Handlingen gick från tveksam till helt oförsvarlig, inte försvarlig."
    ]
  },
  {
    "a": "hållbar",
    "b": "ohållbar",
    "description": "Hållbar betyder att kunna bestå eller fungera länge. Ohållbar betyder att inte kunna fortsätta.",
    "examples": [
      "Lösningen är hållbar, medan den gamla planen var ohållbar.",
      "Ekonomin gick från ohållbar till hållbar."
    ]
  },
  {
    "a": "jämförbar",
    "b": "ojämförbar",
    "description": "Jämförbar betyder möjlig att jämföra på ett meningsfullt sätt. Ojämförbar betyder att en rimlig jämförelse inte går att göra.",
    "examples": [
      "Resultaten är jämförbara, men det tredje måttet är ojämförbart.",
      "Metoden gör tidigare ojämförbara data jämförbara."
    ]
  },
  {
    "a": "mätbar",
    "b": "omätbar",
    "description": "Mätbar betyder möjlig att mäta. Omätbar betyder att den inte kan mätas.",
    "examples": [
      "Temperaturen är mätbar, men känslan kan verka omätbar.",
      "Testet gör effekten mätbar i stället för omätbar."
    ]
  },
  {
    "a": "spänd",
    "b": "avslappnad",
    "description": "Spänd betyder stel, orolig eller under anspänning. Avslappnad betyder lugn och utan spänning.",
    "examples": [
      "Hon var spänd före provet men avslappnad efteråt.",
      "Muskeln gick från spänd till avslappnad."
    ]
  },
  {
    "a": "fokuserad",
    "b": "ofokuserad",
    "description": "Fokuserad betyder koncentrerad på uppgiften. Ofokuserad betyder att koncentrationen saknas.",
    "examples": [
      "Han var fokuserad på morgonen men ofokuserad efter lunch.",
      "En paus gjorde gruppen fokuserad i stället för ofokuserad."
    ]
  },
  {
    "a": "förberedd",
    "b": "oförberedd",
    "description": "Förberedd betyder redo efter att ha planerat. Oförberedd betyder att inte vara redo.",
    "examples": [
      "Hon kom förberedd, medan jag var oförberedd.",
      "Övningen gjorde laget förberett i stället för oförberett."
    ]
  },
  {
    "a": "färgad",
    "b": "ofärgad",
    "description": "Färgad betyder att ha eller ha fått färg. Ofärgad betyder utan färg.",
    "examples": [
      "Vätskan är färgad, men provet bredvid är ofärgat.",
      "Glaset finns som färgat och ofärgat."
    ]
  },
  {
    "a": "sötad",
    "b": "osötad",
    "description": "Sötad betyder att ett sötningsmedel har tillsatts. Osötad betyder utan tillsatt sötning.",
    "examples": [
      "Yoghurten finns både sötad och osötad.",
      "Hon valde osötat te i stället för sötat."
    ]
  },
  {
    "a": "inkluderad",
    "b": "exkluderad",
    "description": "Inkluderad betyder att vara medräknad eller medtagen. Exkluderad betyder att vara utesluten.",
    "examples": [
      "Avgiften är inkluderad, men frakten är exkluderad.",
      "Alla deltagare blev inkluderade i stället för exkluderade."
    ]
  }
];

const words = {};
for (const pair of curatedPairs) {
  words[pair.a] = { opposite: pair.b, description: pair.description, examples: pair.examples, related: [pair.b] };
  words[pair.b] = { opposite: pair.a, description: pair.description, examples: pair.examples, related: [pair.a] };
}

const outputPath = path.join(process.cwd(), 'src', 'data', 'words.ts');
const wordEntryType = "export type WordEntry = Readonly<Record<'opposite' | 'description', string> & Record<'examples' | 'related', readonly string[]>>;\n\n";
fs.writeFileSync(outputPath, wordEntryType + 'export const words: Record<string, WordEntry> = ' + JSON.stringify(words, null, 2) + ';\n', 'utf-8');
console.log('Generated ' + Object.keys(words).length + ' curated word pages.');
