var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('0f68c6cb'),
  addressVersion: 0x47,
  privKeyVersion: 199,
  P2SHVersion: 33,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('A10B409A53A11D97790D97705AE3ABEA151533C08E1230980476991F00549B4E'),
    merkle_root: hex('00522753002939C78659B4FDC6ED56C6B6AACDC7586FACF2F6ADA2012ED31703'),
    height: 0,
    nonce: 4016033,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405164774,
    bits: 0x1e01ffff,
  },
  dnsSeeds: [
    'seed.viacoin.net',
    'mainnet.viacoin.net',
  ],
  defaultClientPort: 5223
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
