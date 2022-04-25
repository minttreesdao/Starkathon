%lang starknet

from starkware.cairo.common.uint256 import Uint256

@contract_interface
namespace INFT:
    func name() -> (name : felt):
    end

    func symbol() -> (symbol : felt):
    end

    func decimals() -> (decimals : felt):
    end

    func totalSupply() -> (totalSupply : Uint256):
    end

    func balanceOf(owner : felt) -> (balance : Uint256):
    end

    func allowance(owner : felt, spender : felt) -> (remaining : Uint256):
    end

    func transfer(recipient : felt, amount : Uint256) -> (success : felt):
    end

    func transferFrom(sender : felt, recipient : felt, amount : Uint256) -> (success : felt):
    end

    func approve(spender : felt, amount : Uint256) -> (success : felt):
    end
   
    func ownerOf(token_id : Uint256) -> (owner : felt):
    end

    func getApproved(token_id : Uint256) -> (approved : felt):
    end
    
    func isApprovedForAll(owner : felt, operator : felt) -> (is_approved : felt):
    end
end

