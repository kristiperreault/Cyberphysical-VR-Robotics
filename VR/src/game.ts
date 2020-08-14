import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import * as EthConnect from '../node_modules/eth-connect/esm'
import { abi } from './abi/fakeMANA'

// function to send mana
function sendMana() {
  executeTask(async () => {
    try {
      const provider = await getProvider()
      const requestManager = new EthConnect.RequestManager(provider)
      const factory = new EthConnect.ContractFactory(requestManager, abi)
      const contract = (await factory.at(
        'contract-address'
      )) as any
      const address = await getUserAccount()
      log(address)
      const res = await contract.setBalance(
        '', // my cryptowallet
        0.0001,
        {
          from: address
        }
      )
      log(res)
    } catch (error) {
      log(error.toString())
    }
  })
}

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const bermudaGrass = new Entity('bermudaGrass')
engine.addEntity(bermudaGrass)
bermudaGrass.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.visible = true
bermudaGrass.addComponentOrReplace(gltfShape)

// button
let button = new Entity()
button.addComponent(new BoxShape())
button.addComponent(
  new Transform({
    position: new Vector3(6, 0, 6)
  })
)
button.addComponent(
  new OnPointerDown(
    e => {
      sendMana()
    },
    { button: ActionButton.POINTER, hoverText: 'Click here!' }
  )
)
engine.addEntity(button)