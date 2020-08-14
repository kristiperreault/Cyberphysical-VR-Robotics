# VR ReadMe
This readme details the installs, build, run, and deploy instructions for the VR component of this project. Additionally, it contains a rough timeline followed, resources utilized, and questions had throughout the project. 

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

## Deploy the Lambda Function

### Prerequisites

1. Set up an [AWS free tier Account](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc)
2. Install [.NET Core 2.2](https://dotnet.microsoft.com/download/dotnet-core/2.2)
3. Install [.NET CLI](https://dotnet.microsoft.com/download)
4. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
5. Install the [AWS toolkit](https://aws.amazon.com/visualstudio/) for Visual Studio or other preferred platform.
6. Follow [these instructions](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/credentials.html) to set up your account with the AWS toolkit to deploy to your account.
7. Install the [M2Mqtt package](https://www.nuget.org/packages/M2Mqtt/) with the .NET CLI

NOTE: The certificate files were omitted from upload due to security reasons. If you would like to run yourself, you will need to obtain the certificate, public key, and private key from your own AWS Thing, and the Amazon Root Cert.

### Deploy Lambda

1. Navigate to the Lambda function using `cd VR/LambdaFunction/src/LambdaFunction`
2. Install AWS Lambda tools with `dotnet tool install -g Amazon.Lambda.Tools`
3. Edit the `aws-lambda-tools-defaults.json` file with your profile and region information
4. Deploy the lambda function with `dotnet lambda deploy-function LambdaFunction`
5. Navigate to your AWS account console (in the appropriate region), and view the Lambda function in the Lambda service
6. To call the function in the AWS CLI, use `aws lambda invoke --region INSERT_REGION --function-name LambdaFunction`

Credit to https://adamtheautomator.com/aws-lambda-example#creating-a-aws-c-lambda-function for starter C#/.NET Lambda.

## Timeline
3/25
  - Google Cardboard ordered ($20, Expected delivery April 1-3)
  - Unity downloaded & obtained student license
  - Continued research for tools, APIs, VR, etc

4/5
  - Google Cardboard delivered
  - Amazon MQTT research
      - https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html
      - https://aws.amazon.com/lambda/
  
4/7
  - Downloaded Decentraland CLI with `npm install -g decentraland`
  - Imported sample project with MANA and Blockchain from GitHub: https://github.com/decentraland-scenes/MANA-Transaction
  - Tested locally with success

4/20
  - Spent some time research Lambda and figuring out language to use
  - Followed tutorial: https://adamtheautomator.com/aws-lambda-example/
  - Downloaded .NET CLI, created a simple Lambda function in C#
  - Built off of Decentraland sample project to attempt our own VR environment

4/24
  - Used Decentraland Builder to try out trigger boxes and create scene
  - Used items downloaded from builder to put together our own scene
  - Set up crypto wallet using MetaMask
  - Discovered issues with deploying LAND

4/25
  - Finished VR environment with boxes to send fake MANA (Decentraland currency) on click and location tracking
  - Created and deployed simple Lambda function

4/26
  - Researched and started editing Lambda function to publish task with MQTT
  - Updated VR_README.md to include all resources, installs, build, and run instructions
  - Wrote all VR sections of the final report

## Resources
  - [Decentraland SDK](https://docs.decentraland.org/development-guide/SDK-101/)
  - [Decentraland CLI](https://docs.decentraland.org/development-guide/installation-guide/)
  - [Decentraland Publishing LAND](https://docs.decentraland.org/development-guide/publishing/)
  - [Decentraland Marketplace](https://market.decentraland.org/)
  - [MetaMask](https://metamask.io/)
  - [AWS CLI](https://aws.amazon.com/cli/)
  - [AWS .NET SDK](https://docs.aws.amazon.com/sdkfornet/v3/apidocs/index.html)
  - [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
  - [AWS MQTT](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html)
  - [Decentraland Ethereum Tutorial/fake MANA](https://github.com/decentraland-scenes/MANA-Transaction)
  - [C#/.NET Lambda Tutorial](https://adamtheautomator.com/aws-lambda-example/#creating-a-aws-c-lambda-function)
  
## Questions
  - What do we want our VR environment to look like? - DONE
  - What additional tools might we need to develop a VR environment for iOS? - DONE
  - What language do we want to use for the Lambda function? - DONE
  - How do we obtain LAND and deploy a scene? - DONE
  - How do we deploy the Lambda? - DONE