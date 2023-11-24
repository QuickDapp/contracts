# @quickdapp/contracts

Companion smart contracts template repository for [QuickDapp](https://github.com/QuickDapp/QuickDapp).

* Fully upgradeable contracts using [EIP-2535 Diamond Standard](https://eips.ethereum.org/EIPS/eip-2535)
* Full upgrade lifecycle management using [Gemforge](https://gemforge.xyz)
* Build and deploy commands already setup
* Pre-configured config file
* Post-deploy hook for Etherscan verification

This repo is a copy of the [official Gemforge scaffold](https://github.com/gemstation/contracts-foundry).

## Requirements

* [Node.js 20+](https://nodejs.org)
* [PNPM](https://pnpm.io/) _(NOTE: `yarn` and `npm` can also be used)_
* [Foundry](https://github.com/foundry-rs/foundry/blob/master/README.md)

## Installation

Install and setup:

```
$ pnpm i
$ pnpm setup
```

Create `.env` and set the following within:

```
LOCAL_RPC_URL=http://localhost:8545
SEPOLIA_RPC_URL=<your infura/alchemy endpoint for spolia>
ETHERSCAN_API_KEY=<your etherscan api key>
MNEMONIC=<your deployment wallet mnemonic>
```

## Usage

Run a local dev node in a separate terminal:

```
pnpm devnet
```

To build the code:

```
$ pnpm build
```

To run the tests:

```
$ pnpm build
```

To deploy to the local target:

```
$ pnpm dep local
```

To deploy to the testnet target (sepolia):

```
$ pnpm dep testnet
```

For verbose output simply add `-v`:

```
$ pnpm build -v
$ pnpm dep -v
```

## License

MIT - see [LICENSE.md](LICENSE.md)
