/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link MintManager}
 * @category Accounts
 * @category generated
 */
export type MintManagerArgs = {
  accountType: number
  version: number
  mint: web3.PublicKey
  authority: web3.PublicKey
  ruleset: web3.PublicKey
}
/**
 * Holds the data for the {@link MintManager} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class MintManager implements MintManagerArgs {
  private constructor(
    readonly accountType: number,
    readonly version: number,
    readonly mint: web3.PublicKey,
    readonly authority: web3.PublicKey,
    readonly ruleset: web3.PublicKey
  ) {}

  /**
   * Creates a {@link MintManager} instance from the provided args.
   */
  static fromArgs(args: MintManagerArgs) {
    return new MintManager(
      args.accountType,
      args.version,
      args.mint,
      args.authority,
      args.ruleset
    )
  }

  /**
   * Deserializes the {@link MintManager} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [MintManager, number] {
    return MintManager.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link MintManager} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey
  ): Promise<MintManager> {
    const accountInfo = await connection.getAccountInfo(address)
    if (accountInfo == null) {
      throw new Error(`Unable to find MintManager account at ${address}`)
    }
    return MintManager.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'mTok58Lg4YfcmwqyrDHpf7ogp599WRhzb6PxjaBqAxS'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, mintManagerBeet)
  }

  /**
   * Deserializes the {@link MintManager} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [MintManager, number] {
    return mintManagerBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link MintManager} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return mintManagerBeet.serialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link MintManager}
   */
  static get byteSize() {
    return mintManagerBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link MintManager} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      MintManager.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link MintManager} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === MintManager.byteSize
  }

  /**
   * Returns a readable version of {@link MintManager} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      accountType: this.accountType,
      version: this.version,
      mint: this.mint.toBase58(),
      authority: this.authority.toBase58(),
      ruleset: this.ruleset.toBase58(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const mintManagerBeet = new beet.BeetStruct<
  MintManager,
  MintManagerArgs
>(
  [
    ['accountType', beet.u8],
    ['version', beet.u8],
    ['mint', beetSolana.publicKey],
    ['authority', beetSolana.publicKey],
    ['ruleset', beetSolana.publicKey],
  ],
  MintManager.fromArgs,
  'MintManager'
)
