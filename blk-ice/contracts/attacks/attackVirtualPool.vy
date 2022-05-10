# @version ^0.2.0

#storedData: int128
#self.storedData = 123 
interface attackERC20Rewards:
    def calculate() -> uint256: view
    def test1(): nonpayable

@external
def test(miner_address: address):
    FooBar(miner_address).calculate()

    struct attackVirtualPool:
        attackVirtualPool: type
        
        
