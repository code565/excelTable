if (typeof Node.prototype.getRootNode !== "function") {
  Node.prototype.getRootNode = function () {
    let node = this;
    while (node.parentNode) {
      node = node.parentNode;
    }
    return node;
  };
}
