%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.math import assert_not_zero, assert_not_equal, assert_in_range
from starkware.cairo.common.hash import hash2

from starkware.starknet.common.syscalls import get_caller_address


@storage_var
func governor() -> (res : felt):
end

@storage_var
func nft_address() -> (address : felt):
end

@constructor
func constructor{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(
        governor_address : felt):
    assert_not_zero(governor_address)
    governor.write(value=governor_address)
    return ()
end

@view
func get_NFT_address{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (
        res : felt):
    let (res) = NFT_address.read()
    return (res)
end

@external
func set_NFT_address{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(
        set_NFT_address : felt):
    # The call is restricted to the governor.
    let (caller_address) = get_caller_address()
    let (governor_) = get_governor()
    assert caller_address = governor_

    # Check l2_token isn't already set.
    let (l2_token_) = get_l2_token()
    assert l2_token_ = 0

    assert_not_zero(l2_token_address)
    l2_token.write(value=l2_token_address)
    return ()
end


 INFT.mint(a
        contract_address=NFT_address, user=caller_address, hashadaat)
