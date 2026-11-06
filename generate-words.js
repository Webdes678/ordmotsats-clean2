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

