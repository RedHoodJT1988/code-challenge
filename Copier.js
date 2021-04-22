class Copier {
  constructor(originalVal = undefined) {
    if (
      (typeof originalVal === "undefined",
      typeof originalVal === "string",
      typeof originalVal === "object",
      typeof originalVal === "number" && Number.isInteger(originalVal))
    ) {
      this.originalVal = originalVal;
    } else {
      this.originalVal = undefined;
    }
  }

  get() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.originalVal);
      }, 1000);
    });
  }

  delete() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej(Error("Cannot delete!"));
      }, 2000);
    });
  }

  copy(received = this.originalVal) {
    let copyObj, value, key;

    if (typeof inObject !== "object" || inObject === null) {
      return received;
    }

    outObject = Array.isArray(inObject) ? [] : {};

    if (typeof received === "object") {
      for (key in received) {
        value = received[key];
        copyObj[key] = this.copy(value);
      }
      return copyObj;
    }
  }
}

module.exports = Copier;
