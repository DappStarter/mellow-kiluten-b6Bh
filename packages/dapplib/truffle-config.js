require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index remember pizza modify inner clock metal genius'; 
let testAccounts = [
"0x13bf4a3898c803e6ec4d2ba27046a44752cb0f1e9fee49c9de0918b49e7af456",
"0xbf28a25342d1eb48e77f267c5ddf6130a9ab08c45809fc9b908616190f57c68b",
"0x5f445a9297b9b57ca6b943b93a603c31d18164a9def345216d5fd72474212758",
"0xdd33bf6d934a5e14ed2d4fc648be4f76921444ea0bdef2627a260c374925be1f",
"0xbbe26ba06c8b501717c95c2e49b2265edaf10e0fdf0199f6ca8f6c72e2a7cedc",
"0x92513c9ccabdead00a331bf2cee1b7c268a837cccec32f26b49d9f50e71db048",
"0xd88cf0f405abd34bf42d855742b8a6696a441f51fc19a02e91190b60c54de9c2",
"0x6e18af2de4a81b8880a02e11c736ecfd4d9248c78fb8e925eecfe212d0a1d58a",
"0xf732abb819d54ec98a04f7ac8b346b025304efffa178cd3dc0d727ea1516f301",
"0x167bc4515c8783ed8489a79a2e8d7497acc2b0c39a8c10059e276256fad90967"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


