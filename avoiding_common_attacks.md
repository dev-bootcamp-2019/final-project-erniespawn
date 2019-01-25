# Avoiding Common Attacks

## Reentrancy attack
Reentrancy attack is prevented by modifying the status of the entry before actually processing the transfer.



## Integer Overflow and Underflow
I have used the SafeMath.sol library from [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/math/SafeMath.sol). The library implements safety checks on mathematical functions that reverts on error.

## Denial of Service
Denial of service attack is prevented by using a withdrawal pattern.







=======


## Avoiding Common Attacks



### Owner Profile 🕵️
The constructor initializes the owner's profile using their address so in case something goes wrong one can kill the contract and remove it from the blockchain with all the funds remaining safe.


### Bugs 🐛
In case any bugs are detected in the contract, we can freeze the contract and fix them without incorporating heavy damage while the bug is being fixed.


### Contract lifecycle
Owner of the contract can terminate the contract using kill-function, that removes the code from blockchain and return funds. 
