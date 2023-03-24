import {
  flowRendererV2,
  flowStyles
} from "./chunk-EOFYUWAN.js";
import {
  flowDb,
  parser$1
} from "./chunk-7ATSJL6V.js";
import "./chunk-CP6YMG74.js";
import "./chunk-VULYN4AW.js";
import "./chunk-DXZ34BT3.js";
import "./chunk-USXZDK7N.js";
import "./chunk-FW64QRZY.js";
import "./chunk-JFSUWAWN.js";
import {
  require_dist
} from "./chunk-EC3SWANV.js";
import "./chunk-CSNIX52Q.js";
import "./chunk-TLYBA5CB.js";
import {
  setConfig
} from "./chunk-DZI4X7H7.js";
import "./chunk-UJE3BKP7.js";
import "./chunk-67OERBGY.js";
import "./chunk-H4UUJPWB.js";
import {
  require_dayjs_min
} from "./chunk-YHKWKQF3.js";
import {
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/mermaid/dist/flowDiagram-v2-4c9a7611.js
var import_sanitize_url = __toESM(require_dist(), 1);
var import_dayjs = __toESM(require_dayjs_min(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-4c9a7611-Q2OJVL3R.js.map
