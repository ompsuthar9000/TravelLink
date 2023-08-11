class erorhandler extends Error {
  constructor(message, statuscode) {
    super(message);
    statuscode = this.statuscode;
  }
}

module.exports = erorhandler;
