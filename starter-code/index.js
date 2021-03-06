class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.items.length;
    }
  }
  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      return this.items.reduce((acc, val) => acc + val, 0);
    }
  }
}
module.exports = SortedList;
