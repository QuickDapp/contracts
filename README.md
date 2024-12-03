# @quickdapp/contracts

Companion smart contracts template repository for [QuickDapp](https://github.com/QuickDapp/QuickDapp).

* Fully upgradeable contracts using [EIP-2535 Diamond Standard](https://eips.ethereum.org/EIPS/eip-2535)
* Full upgrade lifecycle management using [Gemforge](https://gemforge.xyz)
* Build and deploy commands already setup
* Pre-configured config file
* Post-deploy hook for Etherscan verification

This repo is a copy of the [official Gemforge scaffold](https://github.com/gemstation/contracts-foundry).

## Deployments

* Base Sepolia: `0x3412554e250Faaa6a94E121f9EC760E2C350aA3F` ([Basescan](https://sepolia.basescan.org/address/0x3412554e250Faaa6a94E121f9EC760E2C350aA3F))

## Requirements

* [Node.js 20+](https://nodejs.org)
* [PNPM](https://pnpm.io/) _(NOTE: `yarn` and `npm` can also be used)_
* [Foundry](https://github.com/foundry-rs/foundry/blob/master/README.md)

## Installation

Install and bootstrap:

```shell
pnpm i
pnpm bootstrap
```

Create `.env` and set the following within:

## Usage

Run a local dev node in a separate terminal:

```shell
pnpm devnet
```

To build the code:

```shell
pnpm build
```

To run the tests:

```shell
pnpm build
```

To deploy to local testnet:

```shell
pnpm dep local
```

To deploy to Base Sepolia:

```shell
export PRIVATE_KEY=<your deployment wallet private key as hex>
pnpm dep baseSepolia
```

To verify the source code on Base Sepolia:

```shell
export BASESCAN_API_KEY=<your basescan api key>
pnpm verify baseSepolia
```

For verbose output simply add `-v`, e.g:

```shell
pnpm dep -v
```

## License

MIT - see [LICENSE.md](LICENSE.md)
