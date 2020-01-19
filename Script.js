class Node{
    constructor(data,next = null){
        this.data = data ;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0;
    }
// Insert first node
insertFirst(data){
    this.head = new Node(data, this.head);
    this.size++;
}

// Insert last node
insertlast(data){
    let node = new Node(data);
    let current;
    
    if(!this.head){
        this.head = node;
    }
    else{
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
}

// Insert at index
inserAt(data, index){
    if(index > 0 && index > this.size){
        return;
    }
    if (index ===0) {
        this.head = newNode(data, this.head);
        return;
    }
    const node = new Node(data);
    let current , previous;

    current = this.head;
    let count = 0;

    while (count < index) {
        previous = current;
        count++;
        current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
}

// Get at index
getAt(index){
    let current = this.head;
    let count = 0;

    while (current) {
        if (count == index) {
           console.log(current.data); 
        }
        count ++;
        current = current.next;
    }
    return null;
}

// Remove at index

// Clear list

// Print list data
    printListData(){
            let current = this.head;
    }
    while (current) {
        console.log(current.data);
        current = current.next;
        
    }

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertlast(400);
// ll.inserAt(500, 3)

ll.printListData();