/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { UpdateRulesetIx, updateRulesetIxBeet } from '../types/UpdateRulesetIx'

/**
 * @category Instructions
 * @category UpdateRuleset
 * @category generated
 */
export type UpdateRulesetInstructionArgs = {
  updateRulesetIx: UpdateRulesetIx
}
/**
 * @category Instructions
 * @category UpdateRuleset
 * @category generated
 */
export const UpdateRulesetStruct = new beet.FixableBeetArgsStruct<
  UpdateRulesetInstructionArgs & {
    instructionDiscriminator: number
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['updateRulesetIx', updateRulesetIxBeet],
  ],
  'UpdateRulesetInstructionArgs'
)
/**
 * Accounts required by the _UpdateRuleset_ instruction
 *
 * @property [_writable_] ruleset
 * @property [**signer**] authority
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category UpdateRuleset
 * @category generated
 */
export type UpdateRulesetInstructionAccounts = {
  ruleset: web3.PublicKey
  authority: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const updateRulesetInstructionDiscriminator = 1

/**
 * Creates a _UpdateRuleset_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateRuleset
 * @category generated
 */
export function createUpdateRulesetInstruction(
  accounts: UpdateRulesetInstructionAccounts,
  args: UpdateRulesetInstructionArgs,
  programId = new web3.PublicKey('creatS3mfzrTGjwuLD1Pa2HXJ1gmq6WXb4ssnwUbJez')
) {
  const [data] = UpdateRulesetStruct.serialize({
    instructionDiscriminator: updateRulesetInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.ruleset,
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
      isWritable: true,
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
