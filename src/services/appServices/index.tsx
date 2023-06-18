import HttpServices from "../httpServices";
import { ENDPOINTS } from "../helpers/endpoints";

class AppService extends HttpServices {
  /* All Venues*/
  static allVenues() {
    return this.get(ENDPOINTS.getAllVenues, {});
  }
}

export default AppService;
