import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Pulsechain, including Pulse and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Pulse.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly PULSE: Currency = new Currency(18, 'PLS', 'Pulse')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.PULSE`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const PULSE = Currency.PULSE
export { PULSE }
