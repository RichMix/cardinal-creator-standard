/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category RemoveInUseBy
 * @category generated
 */
export const RemoveInUseByStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'RemoveInUseByInstructionArgs')
/**
 * Accounts required by the _RemoveInUseBy_ instruction
 *
 * @property [] mintManager
 * @property [] user
 * @category Instructions
 * @category RemoveInUseBy
 * @category generated
 */
export type RemoveInUseByInstructionAccounts = {
  mintManager: web3.PublicKey
  user: web3.PublicKey
}

export const removeInUseByInstructionDiscriminator = 5

/**
 * Creates a _RemoveInUseBy_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category RemoveInUseBy
 * @category generated
 */
export function createRemoveInUseByInstruction(
  accounts: RemoveInUseByInstructionAccounts,
  programId = new web3.PublicKey('creatS3mfzrTGjwuLD1Pa2HXJ1gmq6WXb4ssnwUbJez')
) {
  const [data] = RemoveInUseByStruct.serialize({
    instructionDiscriminator: removeInUseByInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.mintManager,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.user,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
