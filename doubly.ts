class Nodez{
    data : number;
    prev : Nodez | null;
    next : Nodez | null;

    constructor(data : number, prev : Nodez | null){
        this.data = data;
        this.next = null;
        this.prev = prev 
    }
}

class Doubly{
    head : Nodez | null;
    prev : Nodez | null;

    constructor(){
        this.head = null
        //this.prev = null
    }

    insertAtEnd(data : number){
        
        const newData = new Nodez(data, null)

        if(this.head == null){
           const newNode = newData;
           this.head = newNode;
           this.prev = null;
        }else if(this.head != null){
            let current = this.head;
            
            while(current.next != null){
                 current =  current.next;
            }
            current.next = newData;
            newData.prev = current;
        }
    }

    insertAtBeginning(data: number): number[]{
        const dataTobeAdded = new Nodez(data, null)
        //let continuousData = new Nodez(datas, null)

        if(this.head == null){
            const firstData = dataTobeAdded;
            this.head = firstData;
        }else if(this.head != null){
              let presentHead = this.head;

              dataTobeAdded.next = presentHead;
              presentHead.prev = dataTobeAdded;
              this.head = dataTobeAdded;
        }

        const result: number [] = [];
        let current = this.head;

        while(current!= null){
            result.push(current.data);
             current.next
        }
        return result;
    }

    traverseToindex(index: number){
        let counter = 0;
        let current = this.head;

        while(counter !== null && counter < index){
            current = current?.next as Nodez;
            counter++;
        }

        return current;
    }
    insertAtPosition(data : number, position : number){

        //create a node for the new data
        const newNodey = new Nodez(data, null)
        //loop thru the node
        const prevNode = this.traverseToindex(position -1)
        //create a variable to store the nodeBeforeIndex
        let nodeBeforeIndex = prevNode
        //create a variable to hold the nodeBeforeIndex.next
        let holdingNode = nodeBeforeIndex?.next
        //assign the new node to the holding node
        holdingNode = newNodey
        //and also the nodeBeforeIndex
         nodeBeforeIndex =  newNodey 
        
}

    remove(index:number){
        const prevNode = this.traverseToindex(index-1);
        const nodeTodelete = prevNode?.next
    }

    reverse(){
       
    }

}

const testNode =  new Nodez(12,null);
console.log(testNode);
const doubNode = new Doubly();
console.log(doubNode.head)
console.log(doubNode.insertAtBeginning(15))


//remove, reverse of doubly linked list, o


//implement circular
//application for singly, doubly and all
//implement singly ND DOUBLY FPR BOTH QUEUE AND STACK
