# Cyberphysical Systems with Virtual Reality and Robotics
This project aims to explore cyberphysical systems through Virtual Reality (VR), Application Programming Interfaces (APIs), Blockchain, and robotics. Utilizing a VR platform such as Unity, a VR environment will be created, depicting a maze in an abstract reality. GoogleVR and Decentraland APIs will aid in the creation of this world, and to introduce the concept of Blockchain, Ethereum will be used to incentivize the rover to complete the maze within a given time threshold. To incorporate the physical world, a remote vehicle or rover will attempt to traverse the VR maze in real space. These components provide for a cyberphysical system with a continuous feedback loop, intended to span a wide variety of tools and technologies for the VR environment, rover, and communication stack. This project intends to serve as the practicum requirement for the ECE Master’s program, and will keep a record of the software component of this project.

## Instructions

Please see the VR_README.md for instructions on how to render the Decentraland scene locally.

The lambda function was taken from the AWS Console; this can be run using the `Test` functionality in the Console if you bring it into your AWS Management Console and apply the correct permissions. Be sure to include your wallet information in the script.

The two ethereum Javascript files were two slightly different approaches to the ethereum transaction. You can input your address and infura account information and run them from your terminal with `node ether_transaction_x.js`. Node.JS and Web3 JS must be installed.

The python robot SDK is for use on the Raspberry Pi. This would need to be connected to a GoPiGo3 and run on the Raspberry Pi with a `python` command in the terminal. This must be running for the lambda function to publish to. 

## Timeline

Week of May 23, 2020
- GitHub repository created
- Documentation generated
- Started research for embedded Ethereum platform and robot platform
- Reached out to some industry colleagues for suggestions
- Did a bit more reading throught the links and tools below
- Started making decisions on platforms, sent initial thoughts to professor via email
- Ordered GoPiGo3 base kit ($99)
- Ordered RaspPi 4 4GB with cords and 32GB microSD card ($99)
- Researched Geth, Light vs Full nodes, and Geth on Docker containers (see resources)

Week of June 1, 2020
- Ordered and received GoPiGo3 kit and Raspberry Pi 4 kit
- Researched full vs light nodes
- Stood up Docker container for ethereum light node
- Ran script for light node - note of question: how long should this take?

Week of June 14, 2020
- Reran ethereum light node on docker container to allow for 8-12ish hours of runtime
- Received robot and raspberry pi
- Started researching robot API & Web3JS
- Reran ethereum light node on docker container again, since the last run was incorrect
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

Week of June 22, 2020
- More trial and error with the light node
- Researched cryptocurrency and blockchain - starting looking into and playing with online wallets and accounts, ether, testnets, and how to interact with the Pi
- Started looking into AWS IoT piece; different SDKs and how to get started with working with the Pi

Week of June 29 & July 6 2020 - Including short break for July 4th
- Got up and running wireless with the robot using VNC Viewer
- Started researching and writing out the lambda function. Worked with python and javascript, started with hello world blueprints on the AWS Console
- Continued working with the AWS IoT Device SDK in C using the pub/sub example

Week of July 13, 2020
- Lambda function officially created with proper permissions
- IoT Thing registered with the certificate and policy
- Downloaded and installed the core and AWS Python SDK
- Followed the Hello World MQTT example
    - Published lambda functions with versions & aliases
    - Created a group with a subscription
    - Attached device and lambda
    - Working on testing this out with the lambda, still not working

Week of July 20, 2020
- Researched AWS Greengrass IoT to see if this was a viable option for communication with the robot
- Ended up jumping back to the AWS IoT SDKs instead, due to some time constraints and better performance
    - Attempted an approach with the C SDK, converting to a DLL did not work since the DexterOS isn't a true API to work with
    - Switched to using the Python SDK, since there were difficulties using the C one with the robot Python SDK
    - This involved installing Python, downloading the new pub/sub example, and getting this running with the proper credentials
    - Added the code for controlling the motors in the pub/sub script
- Finally fixed issues with lambda function and robot controls
- Was able to get this working end to end; running the lambda function in the console published a message to the robot via the AWS IoT Python SDK, which in turn moved the robot forward

Week of July 27, 2020
- Worked on the VR component of the project
    - Generated the Decentraland scene and made some adjustments with the box and the button
    - Ran into some issues with local versioning and NPM that were troubleshooted and resolved
    - Started changing button logic for sending transactions with ether

Week of August 3, 2020
- Worked on script for sending a transaction with Web3 JS, Ethereum, and Infura
    - This has involved quite a bit of reading and research, following blogs, tutorials, and documentation
    - Attempted a few different methods, tried to figure out the best way to send the transaction - smart contracts, raw transaction, via metamask/main network?
    - Investigated how this would look on the lambda side, doing some trial and error here

Week of August 10, 2020
- Continued working on sending the transaction with Web3 JS, Ethereum, and Infura
    - Established a second account in  MetaMask
    - Found a better tutorial in the MetaMask documentation for establishing a provider and formatting a transaction
    - Researched and learned about gas, gas price, and gas limit with etherscan
    - Troubleshooting connection issues with Web3 JS and Ethereum
- Started putting together slides for the presentation
- Wrote the final paper, put together a system diagram

## Questions Explored and Answered
- Do I definitely want to use an Ethereum wallet on a RaspPi or something similar? Or should I be looking at hardware ethereum wallets such as Ledger Nano S?
- How much do I want to spend?
- Do I want to set a deadline for ordering the systems?
- Is there a different command I should be running in the Docker container to set up a light node? Is the ethereum/client-go:stable the right one, or is there a light or unstable client I should try?
- Should I try to use Parity? Or made a different Geth alternative?
- How do I get/transfer Decentraland LAND? How do I work with LAND - building, publishing, etc?
- What does being a Decentraland LAND owner look like?
- What is AWS Greengrass IoT? Is that something I want to use here?
- What are topics in AWS and how do I name and use them between services?
- What is the alternative to using light nodes?
- How do I interact with the DexterOS library? Will this work well with the AWS IoT Device SDK for C?
- What is the difference between an API and an SDK?
- How do I manage roles, policies, and permissions between the lambda function and the AWS IoT?
- How will the robot communicate with the lambda function?
- What is Infura and how do I work with it?
- What is gas? What are gas prices and gas limits?
- How do I convert between MANA and ether?
- How will the transaction trigger the lambda function?
- What part of the Infura library will I need to use? GetBalance, getBlock, getTransaction, etc?
- How do I interact with my wallet? What is the link between Infura, MetaMask, and the lambda function?
- What elements of the Web3 JS library should I be familiar with?
- What should the code look like in the Decentraland scene for sending and receiving MANA/ether?
- What languages should I be using? Will python, C, javascript, etc all work together ok? 
- What are smart contracts? Should we use this?
- Are we transferring money on the main ethereum network or the testnet? What is the difference?

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

For more resources used, check out the References section in the final paper. 


