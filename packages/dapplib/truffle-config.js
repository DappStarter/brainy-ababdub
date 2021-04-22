require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name radar maze clump good prison metal gesture'; 
let testAccounts = [
"0x7a9261017c38f751397a1377869b3278192a68c3877b7e03960dfc1a339f4fdd",
"0xa6b6e662ef14013465931203dc9b554e714679d9f7dfc9ece1852de1334978b5",
"0x205d125736930ed3d5914642acbe28c615d945fcd42e906dd8c6eeefc51c9e8d",
"0x4ac9b55b6aa36ea9470e1f4f5475dfdc922d69742c7a1ebcfb74e9c7302bdc10",
"0x2d13b2a43b50f671cb6d51331fb79a58521e545b6179b6af08e7bda6372266f4",
"0x6dc5020a353768f858f870ae1ad64faead55222e32c2e19f490b367a17c76aa1",
"0x2ff6a6f21e8b63c2c87ba7a57e814027ecae80c0097ad7099ad414d3d0908903",
"0xdc0442eab2b20ddb68e3322061bef58ff2a421b1ec92893dbdcd1e5faded7ac4",
"0xdcec0dde9d08ae60d406c199fb6c505c1aed7ff181b9e05d98a64ba0c4d6677e",
"0x8031e6d06796cc033f527867c489338d0bce9d2c4a7159f69afb5daf0d20161b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
