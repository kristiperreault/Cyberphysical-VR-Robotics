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

## Questions
- Do I definitely want to use an Ethereum wallet on a RaspPi or something similar? Or should I be looking at hardware ethereum wallets such as Ledger Nano S?
- How much do I want to spend?
- Do I want to set a deadline for ordering the systems?

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


