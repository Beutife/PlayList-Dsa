var Nodez = /** @class */ (function () {
    function Nodez(data, prev) {
        this.data = data;
        this.next = null;
        this.prev = prev;
    }
    return Nodez;
}());
var Doubly = /** @class */ (function () {
    function Doubly() {
        this.head = null;
        this.prev = null;
    }
    Doubly.prototype.insertAtEnd = function (data) {
        var newData = new Nodez(data, null);
        if (this.head == null) {
            var newNode = newData;
            this.head = newNode;
            this.prev = null;
        }
        else if (this.head != null) {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newData;
            newData.prev = current;
        }
    };
    Doubly.prototype.insertAtBeginning = function (data) {
        var dataTobeAdded = new Nodez(data, null);
        //let continuousData = new Nodez(datas, null)
        if (this.head == null) {
            var firstData = dataTobeAdded;
            this.head = firstData;
        }
        else if (this.head != null) {
            var presentHead = this.head;
            dataTobeAdded.next = presentHead;
            presentHead.prev = dataTobeAdded;
            this.head = dataTobeAdded;
        }
    };
    return Doubly;
}());
var testNode = new Nodez(12, null);
console.log(testNode);
var doubNode = new Doubly();
console.log(doubNode.head);
console.log(doubNode.insertAtBeginning(15));
