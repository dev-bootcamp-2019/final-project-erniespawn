### Factory Approach

Every new question (dora) is a new smart contract which is created by the factory. This has two major advantages:
 - Less risk, because one contract only stores the reward for one question asked
 - Lower gas cost when interacting with a question, because it contains less data

### Restricting Access

- Users can only vote once
- Only the owner can initial the contract 
- Owner of the contract can freeze the contract in case something goes wrong.
- Only the owner can kill the contract as soon this referenedum is finished.
-  All modifiers include the _; at the end


### Circuit Breaker

- Implemented, in case something goes wrong and a bug is detected, the smart contract can be paused, until a solution is found. Functions not affected by the circuit break

