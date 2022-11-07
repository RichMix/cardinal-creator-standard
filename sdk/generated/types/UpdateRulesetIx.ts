/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
export type UpdateRulesetIx = {
  name: string
  authority: web3.PublicKey
  collector: web3.PublicKey
  disallowedAddresses: web3.PublicKey[]
  allowedPrograms: web3.PublicKey[]
  checkSellerFeeBasisPoints: boolean
}

/**
 * @category userTypes
 * @category generated
 */
export const updateRulesetIxBeet =
  new beet.FixableBeetArgsStruct<UpdateRulesetIx>(
    [
      ['name', beet.utf8String],
      ['authority', beetSolana.publicKey],
      ['collector', beetSolana.publicKey],
      ['disallowedAddresses', beet.array(beetSolana.publicKey)],
      ['allowedPrograms', beet.array(beetSolana.publicKey)],
      ['checkSellerFeeBasisPoints', beet.bool],
    ],
    'UpdateRulesetIx'
  )
