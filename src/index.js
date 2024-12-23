// @ts-check
//
//  Created by Chen Mingliang on 24/11/28.
//  illuspas@msn.com
//  Copyright (c) 2024 NodeMedia. All rights reserved.
//

const logger = require("./core/logger.js");
const Package = require("../package.json");
const Context = require("./core/context.js");
const NodeHttpServer = require("./server/http_server.js");
const NodeRtmpServer = require("./server/rtmp_server.js");

class NodeMediaServer {
  constructor(config) {
    logger.level = "debug";
    this.ctx = new Context(config);
    this.httpServer = new NodeHttpServer(this.ctx);
    this.rtmpServer = new NodeRtmpServer(this.ctx);
  }

  run() {

    this.httpServer.run();
    this.rtmpServer.run();
    
  }

  stop() {
    this.httpServer.stop();
    this.rtmpServer.stop();
  }
}

module.exports = NodeMediaServer;
