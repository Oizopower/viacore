var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('fef5abaa'),
  addressVersion: 0x49,
  privKeyVersion: 201,
  P2SHVersion: 8,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('96cecbc956d8af5a80ed2979d87ab3c5a993a4f3bd57a3f07e573bc65b090000'),
    merkle_root: hex('9f379d8ebdae0e96b17cabd4dab4dc8d60dbe3e94f07d88af970cf7af5b1c4f6'),
    height: 0,
    nonce: 552634,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1397400948,
    bits: 0x1e01ffff,
  },
  dnsSeeds: [
    'dnsseed.whitecoinpool.com',
  ],
  defaultClientPort: 15914,
  lastPoWBlock: 17000
};

exports.testnet = {
  name: 'testnet',
  magic: hex('a9c5ef92'),
  addressVersion: 127,
  privKeyVersion: 255,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('7DB26CC9742EB385B7283AE6F67C7AE1D4E2B3F18D1CCCDECBFD08AA12A70A77'),
    merkle_root: hex('00522753002939C78659B4FDC6ED56C6B6AACDC7586FACF2F6ADA2012ED31703'),
    height: 0,
    nonce: 262929,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405168772,
    bits: 0x1e1fffff,
  },
  dnsSeeds: [
    'seed-testnet.viacoin.net',
    'testnet.viacoin.net'
  ],
  defaultClientPort: 25223
};
