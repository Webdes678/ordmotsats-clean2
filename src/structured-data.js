const baseUrl = 'https://www.motsatsord.se';

export function homeStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': baseUrl + '/#dictionary',
    name: 'Svenska motsatsord',
    description: 'Slå upp vanliga svenska motsatsord med tydliga exempelmeningar.',
    inLanguage: 'sv',
    url: baseUrl + '/',
  };
}

export function wordStructuredData(word, entry) {
  const url = baseUrl + '/ord/' + encodeURIComponent(word);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url + '#page',
        url,
        name: 'Motsatsord till ' + word + ' – motsatsord.se',
        inLanguage: 'sv',
        mainEntity: { '@id': url + '#term' },
        breadcrumb: { '@id': url + '#breadcrumb' },
      },
      {
        '@type': 'DefinedTerm',
        '@id': url + '#term',
        name: word,
        description: entry.description + ' Motsatsord: ' + entry.opposite + '.',
        url,
        inDefinedTermSet: { '@id': baseUrl + '/#dictionary' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': url + '#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startsidan', item: baseUrl + '/' },
          { '@type': 'ListItem', position: 2, name: word, item: url },
        ],
      },
    ],
  };
}

export function serializeStructuredData(data) {
  return JSON.stringify(data)
    .replaceAll('<', '\\u003c')
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029');
}

