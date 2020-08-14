# VR ReadMe
This readme details the installs, build, run, and deploy instructions for the VR component of this project.

## Build and Run the VR Environment Locally

### Prerequisites
1. Install [Node & npm](https://nodejs.org/en/download/)
2. Install the [Decentraland CLI](https://docs.decentraland.org/development-guide/installation-guide/)

### Build and Run Guide

1. Navigate to the VR project src folder, containing the main `game.ts` file, with `cd VR/src`
2. Build the project with `npm run build` This will run the `build-ecs` build command
3. Run the project locally with `npm run start` or with `dcl start` to explicitly use the Decentraland CLI
4. The VR scene should automatically render in your default browser. If it does not, the IP address the environment is running on
should display in your terminal window; copy and paste this into your browser.

NOTE: If you would like to use your own cryptowallet and real MANA, you will need to replace the string commented `my cryptowallet` in the `game.ts` file, and use an established MANA factory instead of `abi` (credit to https://github.com/decentraland-scenes/MANA-Transaction for a starter scene and fake MANA)


## Resources
  - [Decentraland SDK](https://docs.decentraland.org/development-guide/SDK-101/)
  - [Decentraland CLI](https://docs.decentraland.org/development-guide/installation-guide/)
  - [Decentraland Publishing LAND](https://docs.decentraland.org/development-guide/publishing/)
  - [Decentraland Marketplace](https://market.decentraland.org/)
  - [MetaMask](https://metamask.io/)
  - [Decentraland Ethereum Tutorial/fake MANA](https://github.com/decentraland-scenes/MANA-Transaction)