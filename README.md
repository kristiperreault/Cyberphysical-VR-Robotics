# Cyberphysical Systems with Virtual Reality and Robotics
This project aims to explore cyberphysical systems through Virtual Reality (VR), Application Programming Interfaces (APIs), Blockchain, and robotics. Utilizing a VR platform such as Unity, a VR environment will be created, depicting a maze in an abstract reality. GoogleVR and Decentraland APIs will aid in the creation of this world, and to introduce the concept of Blockchain, Ethereum will be used to incentivize the rover to complete the maze within a given time threshold. To incorporate the physical world, a remote vehicle or rover will attempt to traverse the VR maze in real space. These components provide for a cyberphysical system with a continuous feedback loop, intended to span a wide variety of tools and technologies for the VR environment, rover, and communication stack. This project intends to serve as the practicum requirement for the ECE Master’s program, and will keep a record of the software component of this project.

## Timeline

May 23, 2020
- GitHub repository created
- Documentation generated
- Started research for embedded Ethereum platform and robot platform

May 27, 2020
- Reached out to some industry colleagues for suggestions
- Did a bit more reading throught the links and tools below
- Started making decisions on platforms, sent initial thoughts to professor via email

May 30, 2020
- Ordered GoPiGo3 base kit ($99)
- Ordered RaspPi 4 4GB with cords and 32GB microSD card ($99)
- Researched Geth, Light vs Full nodes, and Geth on Docker containers (see resources)

Week of June 1, 2020
- Ordered and received GoPiGo3 kit and Raspberry Pi 4 kit
- Researched full vs light nodes
- Stood up Docker container for ethereum light node
- Ran script for light node - note of question: how long should this take?

June 5, 2020
- Reran ethereum light node on docker container to allow for 8-12ish hours of runtime
- Received robot and raspberry pi
- Started researching robot API & Web3JS

June 6, 2020
- Reran ethereum light node on docker container again, since the last run was incorrect

June 7, 2020
- Built the robot & read up on the robot api provided by DexterOS

June 10, 2020
- Light node was still running from June 5th, so I quit out of this
- Reran light node without the testnet command - this didn’t work and just repeated "Looking for peers"
- Read up on light node commands: https://github.com/ethereum/go-ethereum/wiki/Command-Line-Options
- Read up on Web3JS and installed via npm: https://web3js.readthedocs.io/en/v1.2.7/getting-started.html
- Reran light node with rinkeby instead of testnet - this immediately didn’t work and quit out
- Reran light node with testnet and exitwhensynced command to see if this produces different results; allowing this to run overnight

Week of June 15, 2020
- Reran light node again - still ran throughout the week
- Downloaded Raspian OS onto the RaspberryPi4 microSD card
- Set up wireless capabilities on Pi
- Downloaded and installed the DexterOS API
- Tested the robot with the demo software - forward, backward, left, right, and stop
    - Found a lose wire I had to fix
- Researched and checked out various ether testnets - Ropsten, Rinkeby
- Researched Decentraland LAND transactions & publishing; need either the token or to connect with my wallet

## Questions
- Do I definitely want to use an Ethereum wallet on a RaspPi or something similar? Or should I be looking at hardware ethereum wallets such as Ledger Nano S?
- How much do I want to spend?
- Do I want to set a deadline for ordering the systems?
- Is there a different command I should be running in the Docker container to set up a light node? Is the ethereum/client-go:stable the right one, or is there a light or unstable client I should try?
- Should I try to use Parity? Or made a different Geth alternative?
- How do I get/transfer Decentraland LAND? How do I work with LAND - building, publishing, etc?
- What does being a Decentraland LAND owner look like?

## Resources
Embedded Platforms for Ethereum:
- https://ethereum.stackexchange.com/questions/73496/embedded-ethereum-wallet - this one looks most promising
- https://medium.com/anyledger/building-embedded-wallet-for-ethereum-c9777c1f4697
- https://pgaleone.eu/raspberry/ethereum/archlinux/2017/09/06/ethereum-node-raspberri-pi-3/
- https://www.myetherwallet.com/
- https://www.electromaker.io/tutorial/blog/using-a-raspberry-pi-for-a-crypto-currency-wallet
- https://kauri.io/running-an-ethereum-full-node-on-a-raspberrypi-4-m/9695fcca217f46feb355245275835fc0/a

Robot Platforms:
- https://www.dexterindustries.com/gopigo3/
- https://www.amazon.com/Pimoroni-STS-Build-Raspberry-Roving/dp/B01HZFRROE
- https://aws.amazon.com/blogs/compute/building-a-raspberry-pi-telepresence-robot-using-serverless-part-1/ - this is using AWS Serverless technology, which might be pretty cool to explore
- https://www.adafruit.com/product/2939 - currently out of stock
- https://www.sparkfun.com/categories/181 - good place to browse

Geth, Light Nodes, Docker:
- https://etherworld.co/2018/03/13/understanding-ethereum-light-node/ for using the light node feature of Geth
- https://github.com/ethereum/wiki/wiki/Light-client-protocol light node protocol
- https://www.freecodecamp.org/news/how-to-run-geth-from-a-docker-container-b6d30620ca74/ running Geth in a Docker container
- https://github.com/ethereum/go-ethereum/wiki/Running-in-Docker Geth Docker image
- https://hub.docker.com/r/ethereum/client-go/ Ethereum Go Client
- https://github.com/ethereum/go-ethereum/wiki/Command-Line-Options Geth command line options

Web3JS:
- https://web3js.readthedocs.io/en/v1.2.7/getting-started.html

Ether Testnets:
- https://faucet.metamask.io/
- https://www.rinkeby.io/#stats
- https://ropsten.etherscan.io/
- https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d


