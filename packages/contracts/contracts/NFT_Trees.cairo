%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.math import assert_not_zero, assert_not_equal, assert_in_range
from starkware.cairo.common.hash import hash2
from starkware.cairo.common.alloc import alloc
from starkware.cairo.common.math import split_felt

from starkware.cairo.common.uint256 import Uint256
from starkware.starknet.common.syscalls import get_contract_address, get_caller_address

from openzeppelin.token.erc721.interfaces.IERC721 import IERC721
from openzeppelin.token.erc20.interfaces.IERC20 import IERC20

from openzpelin.token.
const NFT_address = 5555
const ERC20_address = 1133385430798739534341873127442097577299219292921207300966981424657716984897


@external
func mint{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(user : felt):
  
    let (sender_address) = get_caller_address()

    const recipient = 2332320391133282747590367309251773724428562913448225673538862609922718549509
    const amount = 10000000

    IERC20.transferFrom(ERC20_address, sender_address, recipient, amount);
    IERC721.mint(NFT_address,sender_address, token_id)

    return ()
end
