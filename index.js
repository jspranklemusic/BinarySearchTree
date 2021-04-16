class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
}//end class Node

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

//INVERTING the tree
  invert(){
    function invertTree(node){
      if(!node) return;
      let left = node.left;
      let right = node.right;
      node.left = right;
      node.right = left;
      invertTree(node.left);
      invertTree(node.right);
    }
    invertTree(this.root)
    return this;
  }

  //INSERT method
  insert(value){
    var newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    } 
      var current = this.root;
      if(value === current.value) return this;
      while(true){
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          }else{
            current = current.left;
          }
        }else if(value > current.value){
          if(current.right === null){
            current.right = newNode;
            return this;
          }else{
            current = current.right;
          }
        }
      }
    
  }
  //SEARCH method
  search(value){
    if(this.root === null) return false;
    var current = this.root;
    while(current){
      if(value < current.value){
        current = current.left;
      } else  if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  

}///end class BinarySearchTree

var myTree = new BinarySearchTree();
myTree.insert(50);
myTree.insert(60);
myTree.insert(55);
myTree.insert(80);
myTree.insert(40);
myTree.insert(30);
myTree.insert(45);
console.log("LEFT: ",myTree.root.left)
console.log("RIGHT", myTree.root.right)
myTree.invert();
console.log("LEFT: ",myTree.root.left)
console.log("RIGHT", myTree.root.right)




