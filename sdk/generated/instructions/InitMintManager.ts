/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category InitMintManager
 * @category generated
 */
export const InitMintManagerStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'InitMintManagerInstructionArgs')
/**
 * Accounts required by the _InitMintManager_ instruction
 *
 * @property [_writable_] mintManager
 * @property [_writable_] mint
 * @property [] ruleset
 * @property [_writable_] holderTokenAccount
 * @property [**signer**] tokenAuthority
 * @property [_writable_] rulesetCollector
 * @property [_writable_] collector
 * @property [] authority
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category InitMintManager
 * @category generated
 */
export type InitMintManagerInstructionAccounts = {
  mintManager: web3.PublicKey
  mint: web3.PublicKey
  ruleset: web3.PublicKey
  holderTokenAccount: web3.PublicKey
  tokenAuthority: web3.PublicKey
  rulesetCollector: web3.PublicKey
  collector: web3.PublicKey
  authority: web3.PublicKey
  payer: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const initMintManagerInstructionDiscriminator = 2

/**
 * Creates a _InitMintManager_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitMintManager
 * @category generated
 */
export function createInitMintManagerInstruction(
  accounts: InitMintManagerInstructionAccounts,
  programId = new web3.PublicKey('creatS3mfzrTGjwuLD1Pa2HXJ1gmq6WXb4ssnwUbJez')
) {
  const [data] = InitMintManagerStruct.serialize({
    instructionDiscriminator: initMintManagerInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.mintManager,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.ruleset,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.holderTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.rulesetCollector,
      isWritable: true,
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
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
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
