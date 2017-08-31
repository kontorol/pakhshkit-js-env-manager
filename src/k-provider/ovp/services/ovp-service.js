//@flow
import MultiRequestBuilder from '../../multi-request-builder'
import Configuration from '../config'

const config = Configuration.get();
const SERVICE_NAME: string = "multirequest";

/**
 * Base for all ovp services
 * @classdesc
 */
export default class OvpService {
  /**
   * Gets a new instance of MultiRequestBuilder with ovp params
   * @function getMultirequest
   * @param {string} ks The ks
   * @param {string} partnerId The partner ID
   * @returns {MultiRequestBuilder} The multi request builder
   * @static
   */
  static getMultirequest(ks: string, partnerId?: number): MultiRequestBuilder {
    let ovpParams = config.serviceParams;
    Object.assign(ovpParams, {ks: ks});
    if (partnerId) {
      Object.assign(ovpParams, {partnerId: partnerId});
    }
    let multiReq = new MultiRequestBuilder();
    multiReq.method = "POST";
    multiReq.service = SERVICE_NAME;
    multiReq.baseUrl = config.beUrl;
    multiReq.params = ovpParams;
    return multiReq;
  }
}