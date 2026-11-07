export const alphabet = Array.from('abcdefghijklmnopqrstuvwxyzåäö');

export function letterSlug(letter) {
  return ({ 'å': 'aa', 'ä': 'ae', 'ö': 'oe' })[letter] ?? letter;
}

export function letterUrl(letter) {
  return '/ordlista/' + letterSlug(letter);
}

export function directoryTitle(letter) {
  return letter ? 'Motsatsord på ' + letter.toLocaleUpperCase('sv') + ' – motsatsord.se' : 'Ordlista A–Ö – svenska motsatsord';
}

export function directoryDescription(letter) {
  return letter
    ? 'Bläddra bland svenska ord på ' + letter.toLocaleUpperCase('sv') + ' och hitta deras motsatsord, förklaringar och exempel.'
    : 'Bläddra bland svenska motsatsord från A till Ö. Välj en bokstav och hitta ordpar med förklaringar och exempel.';
}

export function groupDirectory(words) {
  return alphabet.map((letter) => ({
    letter,
    slug: letterSlug(letter),
    entries: Object.keys(words)
      .filter((word) => word.startsWith(letter))
      .sort((a, b) => a.localeCompare(b, 'sv'))
      .map((word) => ({ word, opposite: words[word].opposite })),
  }));
}

