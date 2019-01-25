# Referendum Brexit DApp
This is a Referendum platform for the Brexit where users can vote for "Leaving EU" or "Staying in the EU". It runs on a smart contract built with Solidity as the backend.

## Project Flow
  - Users can vote either for leaving the EU or staying in the EU.
  - User can only vote once. 
  - Owner can kill the contract in case referendum is finished.
  - There is a safety switch to hold the contract.

## How to set it up
Requirements:
  - Truffle
  - Node Package Manager (npm)
  - Ganache CLI
  - MetaMask
  
Steps:
  1. Clone the repo
  2. Go into the root directory and run `npm install`
  3. Run Ganache CLI
  4. Run `truffle compile` and `truffle migrate`
  5. Run `npm run start`
  6. Start your browser http://localhost:3000 and authenticate metamask to your local ganache port 9545
  7. Import the seed phrase from Ganache CLI to MetaMask
  8. Start voting for Brexit Referendum

## Test Cases
There are a total of  test cases have been written Referendum.sol.

Test1 = Verify the name of this referendum
Test2 = Verify the vote is Stay in EU
Test3 = Verify the vote is Leave EU
Test4 = User vote for Stay in EU
Test5 = User vote for Leave EU
Test6 = Pause the contract and try to vote but must failed
Test7 = Resume the contract and try to vote successfully

Run `truffle test` in the root directory to run the test cases.
