var Nodez = /** @class */ (function () {
    function Nodez(data, prev) {
        this.data = data;
        this.next = null;
        this.prev = prev;
    }
    return Nodez;
}());
var Doubly = /** @class */ (function () {
    function Doubly(head) {
        this.head = head;
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
        var result = [];
        var current = this.head;
        while (current != null) {
            result.push(current.data);
            current.next;
        }
        return result;
    };
    Doubly.prototype.traverseToindex = function (index) {
        var counter = 0;
        var current = this.head;
        while (counter !== null && counter < index) {
            current = current === null || current === void 0 ? void 0 : current.next;
            counter++;
        }
        return current;
    };
    Doubly.prototype.insertAtPosition = function (data, position) {
        //create a node for the new data
        var newNodey = new Nodez(data, null);
        //loop thru the node
        var prevNode = this.traverseToindex(position - 1);
        //create a variable to store the nodeBeforeIndex
        var nodeBeforeIndex = prevNode;
        //create a variable to hold the nodeBeforeIndex.next
        var holdingNode = nodeBeforeIndex === null || nodeBeforeIndex === void 0 ? void 0 : nodeBeforeIndex.next;
        //assign the new node to the holding node
        holdingNode = newNodey;
        //and also the nodeBeforeIndex
        nodeBeforeIndex = newNodey;
    };
    Doubly.prototype.remove = function (index) {
        var prevNode = this.traverseToindex(index - 1);
        var nodeTodelete = prevNode === null || prevNode === void 0 ? void 0 : prevNode.next;
    };
    Doubly.prototype.reverse = function () {
    };
    return Doubly;
}());
// const testNode =  new Nodez(12,null);
// console.log(testNode);
var doubNode = new Doubly(null);
console.log(doubNode.head);
console.log(doubNode.insertAtBeginning(15));
//remove, reverse of doubly linked list, o
//implement circular
//application for singly, doubly and all
//implement singly ND DOUBLY FPR BOTH QUEUE AND STACK
