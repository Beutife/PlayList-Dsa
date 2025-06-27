var SinglyNode = /** @class */ (function () {
    function SinglyNode(value) {
        this.value = value;
        this.next = null;
    }
    return SinglyNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList(value) {
        this.head = new SinglyNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    SinglyLinkedList.prototype.append = function (value) {
        //we need to create node with our value
        //Let the tail point to the new node
        //Set the tail to the node
        //increase the lemgth
        var newNodess = new SinglyNode(value);
        var currentTail = this.tail;
        currentTail.next = newNodess;
        this.tail = newNodess;
        this.length++;
    };
    SinglyLinkedList.prototype.prepend = function (value) {
        //create a node with our value 
        //assign head to new node 
        //set the head to new node 
        //increase length
        var nodeNew = new SinglyNode(value);
        //nodeNew = this.head
        //nodeNew = this.head
        this.head = nodeNew;
        nodeNew.next = this.head;
        this.head = nodeNew;
        this.length++;
    };
    //move to an index
    SinglyLinkedList.prototype.traverseToindex = function (index) {
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    };
    SinglyLinkedList.prototype.insert = function (value, index) {
        if (index >= this.length) {
            this.append(value);
            return "Index too large, but value has been added";
        }
        if (index == 0) {
            this.prepend(value);
        }
        //create a node
        var newNode = new SinglyNode(value);
        // create a variable to store node before index => nodeBeforeIndex
        var nodeBeforeIndex = this.traverseToindex(index - 1);
        //create a holding Node variable that stores the nodeBeforeIndex.next
        var holdingNode = nodeBeforeIndex.next;
        //Set the nodeBeforeIndex.next tothe new Node
        nodeBeforeIndex.next = newNode;
        //let holdingnot = new node
        newNode.next = holdingNode;
        //increase length
        this.length++;
    };
    SinglyLinkedList.prototype.deleteAtBeginning = function () {
        if (!this.head)
            return "No head";
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = this.head;
        }
    };
    SinglyLinkedList.prototype.deleteAtEnd = function () {
        if (!this.head)
            return "No head";
        if (this.length === 1) {
            this.head = this.tail = null;
            this.length = 0;
            return;
        }
        var current = this.head;
        while (current.next && current.next.next !== this.tail) {
            {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
            this.length--;
        }
    };
    SinglyLinkedList.prototype.deleteAtMid = function (index) {
        if (index >= this.length || index < 0) {
            return "Index out of bounds";
        }
        if (index === 0) {
            this.deleteAtBeginning();
            return "Deleted at beginning";
        }
        if (index === this.length - 1) {
            this.deleteAtEnd();
            return "Deleted at end";
        }
        var nodeBeforeIndex = this.traverseToindex(index - 1);
        var nodeToDelete = nodeBeforeIndex.next;
        var nodeAfterIndex = nodeToDelete.next;
        // If nodeToDelete is not null, we can safely delete it
        if (nodeToDelete) {
            nodeBeforeIndex.next = nodeToDelete.next;
            this.length--;
        }
        return "Deleted at index " + index;
    };
    SinglyLinkedList.prototype.reverse = function () {
        var prev = null;
        var current = this.head;
        var next = null;
        while (current) {
            next = current.next; // Store the next node
            current.next = prev; // Reverse the link
            prev = current; // Move prev to current
            current = next; // Move to the next node
        }
        // After reversing, update head and tail
        this.tail = this.head;
        this.head = prev;
    };
    return SinglyLinkedList;
}());
var ourSinglyList = new SinglyLinkedList(30);
ourSinglyList.append(40);
ourSinglyList.prepend(20);
ourSinglyList.insert(40, 3);
ourSinglyList.deleteAtBeginning();
ourSinglyList.deleteAtEnd();
ourSinglyList.deleteAtMid(1);
ourSinglyList.reverse();
console.log(ourSinglyList);
//assignment 
// delete - beginning , end , mid
