
  function queue() {
      this.items = [];

      queue.prototype.enqueue = function (element) {
        this.items.push(element);
      }

      queue.prototype.dequeue = function () {
        return this.items.shift();
      }

      queue.prototype.front = function () {
        return this.items[0]
      }

      queue.prototype.isEmpty = function () {
        if (this.items.length == 0) {
          return true;
        } else {
          return false;
        }
      }

      queue.prototype.size = function () {
        return this.items.length + 1;
      }
    }
