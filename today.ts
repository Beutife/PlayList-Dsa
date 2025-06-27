class SinglyNode{
    value : number;
    next : SinglyNode |null

    constructor(value: number){
       this.value = value;
       this.next = null;
    }
}

class SinglyLinkedList{
    head : SinglyNode;
    tail: SinglyNode ;
    private length: number;

    constructor(value: number){
       this.head = new SinglyNode(value);
       this.tail = this.head;
       this.length = 1
    }

    append(value : number){
      //we need to create node with our value
      //Let the tail point to the new node
      //Set the tail to the node
      //increase the lemgth

      const newNodess = new SinglyNode(value)

      let currentTail = this.tail;

      currentTail.next = newNodess as SinglyNode

      this.tail = newNodess

      this.length ++;
    }

    prepend(value: number){
     //create a node with our value 
     //assign head to new node 
     //set the head to new node 
     //increase length

     const nodeNew = new SinglyNode(value)

     //nodeNew = this.head
     //nodeNew = this.head
     this.head = nodeNew

     nodeNew.next = this.head;

     this.head = nodeNew;

     this.length++;

    }

    //move to an index
    traverseToindex(index: number){
        let counter = 0;
        let current = this.head;

        while(counter !== index){
            current = current.next as SinglyNode
            counter++;
        }
        return current;
    }

    insert(value: number, index : number ){

        if(index >= this.length){
            this.append(value);
            return "Index too large, but value has been added"
        }

        if(index == 0){
            this.prepend(value)
        }
        //create a node
        const newNode = new SinglyNode(value)
        // create a variable to store node before index => nodeBeforeIndex
        const nodeBeforeIndex = this.traverseToindex(index - 1)
        //create a holding Node variable that stores the nodeBeforeIndex.next
        const holdingNode = nodeBeforeIndex.next
        //Set the nodeBeforeIndex.next tothe new Node
        nodeBeforeIndex.next = newNode
        //let holdingnot = new node
        newNode.next = holdingNode
        //increase length
        this.length ++;
    }

    deleteAtBeginning() {
        if (!this.head) return "No head";
        this.head = this.head.next as SinglyNode;
        this.length--;
        if (this.length === 0) {
            this.tail = this.head;
        }
    }

    deleteAtEnd(){
        if(!this.head) return "No head";
        if(this.length === 1){
            this.head = this.tail = null as any;
            this.length = 0;
            return;
        }
        let current = this.head;
        
        while(current.next && current.next.next !== this.tail){{
            current = current.next as SinglyNode;
        }
        current.next = null;
        this.tail = current;
        this.length--;
    }  
    }

    deleteAtMid(index: number){

       if(index >= this.length || index < 0){
           return "Index out of bounds";   
        }
        if(index === 0){
            this.deleteAtBeginning();
            return "Deleted at beginning";
        }
        if(index === this.length - 1){
            this.deleteAtEnd();
            return "Deleted at end";
        }

        let nodeBeforeIndex = this.traverseToindex(index - 1);
        let nodeToDelete = nodeBeforeIndex.next as SinglyNode;
        let nodeAfterIndex = nodeToDelete.next as SinglyNode;
        // If nodeToDelete is not null, we can safely delete it
        if(nodeToDelete){
            nodeBeforeIndex.next = nodeToDelete.next;
            this.length--;
        }
        return "Deleted at index " + index;
        }

        reverse(){
            let prev: SinglyNode | null = null;
            let current: SinglyNode | null = this.head;
            let next: SinglyNode | null = null; 
            
            while(current){
                next = current.next as SinglyNode | null; // Store the next node
                current.next = prev; // Reverse the link
                prev = current; // Move prev to current
                current = next; // Move to the next node
            }
            // After reversing, update head and tail
            this.tail = this.head;
            this.head = prev as SinglyNode;
        }
}

const ourSinglyList  = new SinglyLinkedList(30);

ourSinglyList.append(40)
ourSinglyList.prepend(20)
ourSinglyList.insert(40, 3)
ourSinglyList.deleteAtBeginning()
ourSinglyList.deleteAtEnd()
ourSinglyList.deleteAtMid(1)
ourSinglyList.reverse()

console.log(ourSinglyList)


//assignment 
// delete - beginning , end , mid