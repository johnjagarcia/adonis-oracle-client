"use strict";
const Test = use("App/Models/Test");

class TestController {
  async index() {
    return await Test.all();
  }
}

module.exports = TestController;
