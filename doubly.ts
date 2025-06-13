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
        this.prev = null
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
}