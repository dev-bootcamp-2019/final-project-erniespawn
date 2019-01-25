pragma solidity ^0.5.0;

//importing function from file
import "./EmergencyStop.sol";

// Importing the function into Referendum
contract Referendum is EmergencyStop {
    //Create a struct named Candidate
    struct Candidate {
        string name;
        uint voteCount;
    }
    //Create a struct name Voter
    struct Voter {
        bool voted;
        uint voteIndex;
        uint candidatesID;
    }
    
    address public owner;
    string public name;
    mapping(address => Voter) public voters;
    Candidate[] public candidates;
    
    event ReferendumResult(string name, uint voteCount);
    event ElectionResult2(string name);
    
    //constructor 
    constructor (string memory _name,string memory candidate1, string memory candidate2) public {
        owner = msg.sender;
        name = _name;
            
        candidates.push(Candidate(candidate1, 0));
        candidates.push(Candidate(candidate2, 0));
        emit ElectionResult2(name);
    }
    //vote function with emergency switch
    function vote(uint voteIndex, uint candidatesID) public stoppedInEmergency {
        require(!voters[msg.sender].voted);
        
        voters[msg.sender].voted = true;
        voters[msg.sender].voteIndex = voteIndex;
        voters[msg.sender].candidatesID = candidatesID;
    }
}
