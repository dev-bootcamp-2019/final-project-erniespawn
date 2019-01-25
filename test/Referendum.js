var Referendum = artifacts.require('./Referendum.sol')


contract('Referendum', function(accounts) {

    const owner = accounts[0]
    const alice = accounts[1]
    const bob = accounts[2]
    const jack = accounts[3]
    const julia = accounts[4]
    const lisa = accounts[5]

    // Test 1: Test the name of the referendum is set correctly 
    it("should display the name of the referendum", async() => {
        // Instance of the deployed contract
        const referendum = await Referendum.deployed()

        const name = "UK Referendum for Brexit"
        const resultname = await referendum.name();

        assert.equal(resultname, name, 'Event name not the same')

});
    // Test 2: Test the first vote for Stay in EU 
    it("should display the first choose of the referendum to stay in EU", async() => {
        // Instance of the deployed contract
        const referendum = await Referendum.deployed()

        voteStay = "Stay in EU"
        const resultname = await referendum.candidates(0);
        const {name, voteCount} = resultname
        
        assert.equal(name, voteStay, 'Vote name is not correct')
    });

    // Test 3: Test the second vote for Leaving EU
    it("should display the second choose of the referendum to leave the EU", async() => {
        // Instance of the deployed contract
        const referendum = await Referendum.deployed()

        voteLeave = "Leave EU"

        const resultname = await referendum.candidates(1);

        const {name, voteCount} = resultname
        assert.equal(name, voteLeave, 'Vote name is not correct')
    });

    // Test 4: User alice vote for Staying in the EU
    it("should vote for staying in EU", async() => {
        // Instance of the deployed contract
        const referendum = await Referendum.deployed()
        // Alice account vote
        const result = await referendum.vote(1, 0, {from: alice });
        // Call voters function to check if alice has voted
        const result2 = await referendum.voters(alice);
         // return struct result
        const {voted, voteIndex, candidatesID} = result2
 
        assert.equal(voted, true, 'Vote name is not correct')
    });
    // Test 5: 'User bob voted for Leave the EU' 
    it("should vote for leaving the EU", async() => {

        // Instance of the deployed contract
        const referendum = await Referendum.deployed()

        // bob user vote
        const result = await referendum.vote(1, 1, {from: bob });
        // Call voters function to check if bob has voted
        const result2 = await referendum.voters(bob);
        // return struct result
        const {voted, voteIndex, candidatesID} = result2
        
        
        assert.equal(voted, true, 'Vote name is not correct')
    });

    // Test 6: 'Contract paused and user should not able to vote anymore 
    it("Should not be able to vote due to pause set to true", async() => {

        // Instance of the deployed contract
        const referendum = await Referendum.deployed()
        // Paused the contract
        await referendum.stopContract()

        // Vote with jack account and catch the revert error.
        
        try {
            await referendum.vote(1, 0, {from: jack });
            assert.fail();
          } catch (err) {
            assert.ok(/revert/.test(err.message));
          }

        // call voters function to check if jack has voted
        const result2 = await referendum.voters(jack);
        // return struct result
        const {voted, voteIndex, candidatesID} = result2
        // verify if result is false as not voted
        assert.equal(voted, false, "jack account has voted")
    });

   // Test 7: 'Contract resumed and user able to vote 
   it("Should be able to vote due to resume of contract", async() => {

    // Instance of the deployed contract
    const referendum = await Referendum.deployed()
    // resumed the contract
    await referendum.resumeContract()

    // Vote with jack account as contract is resumed

    await referendum.vote(1, 0, {from: jack });

    // call voters function to check if jack has voted
    const result2 = await referendum.voters(jack);
    // return struct result
    const {voted, voteIndex, candidatesID} = result2

    // verify if result is true as voted
    assert.equal(voted, true, "jack account has not voted")
});

})