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
 * @category UpdateMintManager
 * @category generated
 */
export const UpdateMintManagerStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'UpdateMintManagerInstructionArgs')
/**
 * Accounts required by the _UpdateMintManager_ instruction
 *
 * @property [_writable_] mintManager
 * @property [] ruleset
 * @property [_writable_] collector
 * @property [**signer**] authority
 * @property [**signer**] payer
 * @category Instructions
 * @category UpdateMintManager
 * @category generated
 */
export type UpdateMintManagerInstructionAccounts = {
  mintManager: web3.PublicKey
  ruleset: web3.PublicKey
  collector: web3.PublicKey
  authority: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const updateMintManagerInstructionDiscriminator = 1

/**
 * Creates a _UpdateMintManager_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category UpdateMintManager
 * @category generated
 */
export function createUpdateMintManagerInstruction(
  accounts: UpdateMintManagerInstructionAccounts,
  programId = new web3.PublicKey('creatS3mfzrTGjwuLD1Pa2HXJ1gmq6WXb4ssnwUbJez')
) {
  const [data] = UpdateMintManagerStruct.serialize({
    instructionDiscriminator: updateMintManagerInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.mintManager,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.ruleset,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collector,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
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
