import dns from 'dns/promises';

const lookup = await dns.lookup("https://www.programmerzamannow.com/")

console.info(lookup.address)
console.info(lookup.family)