class Nodes{
    data : number;
    next : Nodes | null

    constructor(data: number){
        this.data = data;
        this.next = null
    }
}

class singleNode{
    head : Nodes | null;

    constructor(){
        this.head = null;
    }

    insert(data: number){
      const newNode = new Nodes(data)

      if(!this.head ){
       this.head = newNode;
    }else{
        let currentHead = this.head;
        
        while(currentHead.next != null){
             currentHead = currentHead.next
        }
       if(currentHead.next === null){
        currentHead.next = newNode;
       }
    }
    }   

}