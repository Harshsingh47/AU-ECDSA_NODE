const secp = require("ethereum-cryptography/secp256k1")
const { toHex } = require("ethereum-cryptography/utils")

function generateKeys() {

    // public and private key object
    keys = {}

    for (let i = 0; i < 3; i++) {
        const privateKey = toHex(secp.utils.randomPrivateKey());
        const publicKey = toHex(secp.getPublicKey(privateKey))
        const address = publicKey.slice(-20)
        keys["key"+i] = [privateKey, publicKey, address]
    }
    return keys
}
console.log(generateKeys())
/* 
key0: [
    'f16dbaad969923363e604390309d715e75d31c8d0fc6e63946174fc400063455',
    '04ee0841f7ee6348a3dea1be89c1c635b0635415f1e1df7e584dfc1dd84083ddaab2d42e11548d3b23e7b61d3c29d25e3665cf25eb27b63c289efab69f83910fbe',
    '3c289efab69f83910fbe'
  ],
  key1: [
    '0d569e5a24eb70e111789deec088e49a8a1014a9c4669b90f29b3fbba23b9a6a',
    '04c5390367e1bbd2ba703824d04553cfcfdf493073ce9e3955db143f0b738736c36b07e2edc821ea5cb51d2ffc49d71b3b6d222610f11413636f5c11d27c2abd3d',
    '13636f5c11d27c2abd3d'
  ],
  key2: [
    '60dc2076740c1e67af8b56340fa4c251d10a5e3f38a4d9667012bd2e7a18ad21',
    '040ead697d32a8f922ad1364e79a5a98327b2a787b3008f3af804fc18e14ee071dd6d22be9a4e1187aabe21b7b2f765f0ed7da40f1bc4905b3fbc6a75e7a40ad04',
    '05b3fbc6a75e7a40ad04'
  ]
  */