const fs = require('fs');
const path = require('path');

const metadata = path.join(__dirname, 'metadata');
if (!fs.existsSync(metadata)) {
    fs.mkdirSync(metadata);
}

console.log(__dirname);

for (let i = 1; i <= 5; i++) {
    const json = {
        name: `Mali NFT #${i}`,
        description: `Image of the Bauchi Riot in Nigeria #${i}`,
        image: `https://gateway.pinata.cloud/ipfs/QmbhzuWuyYicC9Qj7xS2Q49QY2tkhiBXydYV3u1NtTgHet/pinata${i}.jpg`
    };

    fs.writeFileSync(path.join(metadata, String(i)), JSON.stringify(json));
}
console.log("metadata successfully generated")