class Queue {

    constructor() {

         this.items = [];
    }
  
    enqueue(element) {
         this.items.push(element);
    }
  
    isEmpty() {
         return this.items.length == 0;
    }
  
    dequeue() {
        if (this.isEmpty()) return 'underflow';
        return this.items.shift();
    }
  
    front()  {
      if (this.isEmpty()) {
        return 'No elements in queue';
      }
      return this.items[0];
    }
  

    
    printQueue() {
      var str = '';
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + ' ';
      }
      return str;
    }
  }