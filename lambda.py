from __future__ import print_function

import json
import boto3
from botocore.vendored import requests
  
print('Loading function')
  
def lambda_handler(event, context):
    
    response = requests.post('https://mainnet.infura.io/v3/your-infura-id', json={"jsonrpc":"2.0","method":"eth_getBalance","params": ["your-wallet-address", "latest"],"id":1})

    print("Status code: ", response.status_code)
    print("Response:")
    print(response.json())
    
    time.sleep(100)
    
    response = requests.post('https://mainnet.infura.io/v3/your-infura-id', json={"jsonrpc":"2.0","method":"eth_getBalance","params": ["your-wallet-address", "latest"],"id":1})

    print("Status code: ", response.status_code)
    print("Response:")
    print(response.json())
  
    client = boto3.client('iot-data', region_name='us-east-1')

    # Change topic, qos and payload
    response = client.publish(
        topic='test/topic',
        qos=1,
        payload=json.dumps({"message:":"FR1"})
    )
