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
 * @category InitializeMint
 * @category generated
 */
export const InitializeMintStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'InitializeMintInstructionArgs')
/**
 * Accounts required by the _InitializeMint_ instruction
 *
 * @property [_writable_] mintManager
 * @property [**signer**] mint
 * @property [] ruleset
 * @property [_writable_] targetTokenAccount
 * @property [**signer**] target
 * @property [_writable_] rulesetCollector
 * @property [_writable_] collector
 * @property [**signer**] authority
 * @property [**signer**] payer
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category InitializeMint
 * @category generated
 */
export type InitializeMintInstructionAccounts = {
  mintManager: web3.PublicKey
  mint: web3.PublicKey
  ruleset: web3.PublicKey
  targetTokenAccount: web3.PublicKey
  target: web3.PublicKey
  rulesetCollector: web3.PublicKey
  collector: web3.PublicKey
  authority: web3.PublicKey
  payer: web3.PublicKey
  rent?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const initializeMintInstructionDiscriminator = 10

/**
 * Creates a _InitializeMint_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitializeMint
 * @category generated
 */
export function createInitializeMintInstruction(
  accounts: InitializeMintInstructionAccounts,
  programId = new web3.PublicKey('creatS3mfzrTGjwuLD1Pa2HXJ1gmq6WXb4ssnwUbJez')
) {
  const [data] = InitializeMintStruct.serialize({
    instructionDiscriminator: initializeMintInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.mintManager,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.ruleset,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.targetTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.target,
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
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.associatedTokenProgram,
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
