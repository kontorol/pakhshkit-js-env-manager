//@flow
import KontorolRuleAction from './kontorol-rule-action';

export default class KontorolAccessControlModifyRequestHostRegexAction extends KontorolRuleAction {
  /**
   * @member - Request host regex pattern
   * @type {string}
   */
  pattern: string;
  /**
   * @member - Request host regex replacement
   * @type {string}
   */
  replacement: string;
  /**
   * @member - serverNodeId to generate replacment host from
   * @type {number}
   */
  replacmenServerNodeId: number;

  /**
   * @constructor
   * @param {Object} data - The response
   */
  constructor(data: Object) {
    super(data);
    this.pattern = data.pattern;
    this.replacement = data.replacement;
    this.replacmenServerNodeId = data.replacmenServerNodeId;
  }
}
