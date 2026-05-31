import fs from 'fs';
import path from 'path';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 1. FABRIK FÖR SMARTA EXEMPELMENINGAR
function generateSmartExample(word) {
  const w = word.toLowerCase();
  if (w.endsWith('a') || w.endsWith('as') || w.endsWith('ar')) {
    return getRandomElement([
      `Det är viktigt att inte ${w} i den här situationen.`,
      `Han försökte ${w} så gott det gick.`,
      `De bestämde sig för att ${w} tillsammans.`,
      `Att ${w} kan ibland vara svårare än man tror.`
    ]);
  }
  if (w.endsWith('ig') || w.endsWith('lig') || w.endsWith('isk') || w.endsWith('sam') || w.endsWith('ert') || w.endsWith('en')) {
    return getRandomElement([
      `Beslutet kändes väldigt ${w} för alla inblandade.`,
      `Situationen blev snabbt ganska ${w}.`,
      `Det är viktigt att vara ${w} när man gör detta.`,
      `Resultatet blev tyvärr ganska ${w} i slutändan.`
    ]);
  }
  return getRandomElement([
    `Detta är ett tydligt exempel på ${w}.`,
    `Vi måste titta närmare på vad ${w} faktiskt innebär.`,
    `Konceptet ${w} är centralt i den här diskussionen.`,
    `Det finns en tydlig koppling till ${w}.`
  ]);
}

// 2. FABRIK FÖR SMARTA RELATERADE ORD (SYNONYMER)
function generateRelatedWords(word, root, prefix) {
  const w = word.toLowerCase();
  const baseRelated = [root]; // Grundmotsatsen ska alltid vara med

  // Skräddarsy extra synonymer baserat på vilket prefix ordet har
  if (prefix === 'o') {
    baseRelated.push("ej-" + root, "motsatsen", "felaktig");
    if (w.endsWith('ig') || w.endsWith('lig')) {
      baseRelated.push("avvikande", "konstig");
    }
  } 
  else if (prefix === 'miss') {
    baseRelated.push("fela", "förlora", "krascha", "felsteg");
  } 
  else if (prefix === 'van') {
    baseRelated.push("försumma", "sabotera", "bristfällig", "skada");
  }

  // Returnera unika ord och max 4 stycken så det ser städat ut i UI:t
  return [...new Set(baseRelated)].slice(0, 4);
}

function buildDatabase() {
  const wordlistPath = path.join(process.cwd(), 'src', 'data', 'swe_wordlist.txt');
  const outputPath = path.join(process.cwd(), 'src', 'data', 'words.ts');
  
  if (!fs.existsSync(wordlistPath)) {
    console.error("❌ Hittade inte src/data/swe_wordlist.txt!");
    return;
  }

  console.log("📖 1. Läser in din lokala ordlista på 250k+ ord...");
  const rawText = fs.readFileSync(wordlistPath, 'utf-8');
  const swedishWords = new Set(
    rawText.split('\n').map(w => w.trim().toLowerCase()).filter(w => w.length >= 2)
  );

  const finalDatabase = {};

  // Kärnordpar
  const corePairs = [
    ["stor", "liten"], ["snabb", "långsam"], ["varm", "kall"], ["glad", "ledsen"],
    ["ljus", "mörk"], ["hög", "låg"], ["rik", "fattig"], ["ung", "gammal"],
    ["full", "tom"], ["öppen", "stängd"], ["lätt", "svår"], ["enkel", "komplicerad"],
    ["ren", "smutsig"], ["stark", "svag"], ["hård", "mjuk"], ["tidig", "sen"],
    ["ny", "gammal"], ["billig", "dyr"], ["nära", "långt"], ["bred", "smal"],
    ["tjock", "tunn"], ["torr", "våt"], ["tyst", "högljudd"], ["lugn", "stressad"],
    ["modig", "rädd"], ["snäll", "elak"], ["frisk", "sjuk"], ["vacker", "ful"],
    ["rätt", "fel"], ["äkta", "falsk"], ["trygg", "otrygg"], ["rolig", "tråkig"],
    ["smart", "dum"], ["mätt", "hungrig"], ["pigg", "trött"], ["bra", "dålig"],
    ["köpa", "sälja"], ["öka", "minska"], ["tända", "släcka"], ["vinna", "förlora"],
    ["börja", "sluta"], ["skratta", "gråta"], ["vän", "fiende"], ["plus", "minus"]
  ];

  console.log("🤖 2. Matchar kärnordpar...");
  for (const [w1, w2] of corePairs) {
    if (swedishWords.has(w1) && swedishWords.has(w2)) {
      finalDatabase[w1] = { opposite: w2, examples: [generateSmartExample(w1)], related: [w2, "motsats", "begrepp"] };
      finalDatabase[w2] = { opposite: w1, examples: [generateSmartExample(w2)], related: [w1, "motsats", "begrepp"] };
    }
  }

  console.log("🧠 3. Genererar avancerade relaterade ord för alla 7314 ord...");
  for (const word of swedishWords) {
    // O-prefix
    if (word.startsWith('o') && word.length > 3) {
      const root = word.substring(1);
      if (swedishWords.has(root)) {
        if (!finalDatabase[word]) {
          finalDatabase[word] = { opposite: root, examples: [generateSmartExample(word)], related: generateRelatedWords(word, root, 'o') };
        }
        if (!finalDatabase[root]) {
          finalDatabase[root] = { opposite: word, examples: [generateSmartExample(root)], related: generateRelatedWords(root, word, 'root') };
        }
      }
    }
    
    // Miss-prefix
    if (word.startsWith('miss') && word.length > 5) {
      const root = word.substring(4);
      if (swedishWords.has(root)) {
        if (!finalDatabase[word]) {
          finalDatabase[word] = { opposite: root, examples: [generateSmartExample(word)], related: generateRelatedWords(word, root, 'miss') };
        }
        if (!finalDatabase[root]) {
          finalDatabase[root] = { opposite: word, examples: [generateSmartExample(root)], related: generateRelatedWords(root, word, 'root') };
        }
      }
    }

    // Van-prefix
    if (word.startsWith('van') && word.length > 5) {
      const root = word.substring(3);
      if (swedishWords.has(root)) {
        if (!finalDatabase[word]) {
          finalDatabase[word] = { opposite: root, examples: [generateSmartExample(word)], related: generateRelatedWords(word, root, 'van') };
        }
        if (!finalDatabase[root]) {
          finalDatabase[root] = { opposite: word, examples: [generateSmartExample(root)], related: generateRelatedWords(root, word, 'root') };
        }
      }
    }
  }

  const fileContent = `export const words = ${JSON.stringify(finalDatabase, null, 2)} as any;`;
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  
  console.log(`\n🎉 SUCCÉ! Både exempelmeningar och relaterade ord är nu helt dynamiska!`);
}

buildDatabase();