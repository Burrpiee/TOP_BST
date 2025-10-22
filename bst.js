
class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        // For reference, new Set removes duplicate values
        // .sort sorts them in ascending order
        this.root = this.buildTree(Array.from(new Set(array)).sort((a, b) => a - b));
    }

    buildTree(array) {
        if (array.length = 0) return null;

        const mid = Math.floor(array.length / 2);
        const root = new Node(array[mid]);

        root.left = this.buildTree(array.slice(0, mid));
        root.right = this.buildTree(array.slice(mid + 1))

        return root
    }

    // Function given by project to visual BST
    prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

    insert(value , root = this.root) {
        if (root = null) return new Node(value);

        if(value < root.data) {
            root.left = this.insert(value, root.left);
        } else {
            root.right = this.insert(value. root.right);
        }

        return root;
    }

    deleteItem(value, root = this.root)  {
        if (root === null) return root;
        
        if(root.data > value) {
            root.left = this.deleteItem(value, root.left);
        } else if (root.data < value) {
            root.right = this.deleteItem(value, root.right);
        } else { //If root = value
            if (root.right === null) {
                return root.left;
            }
            if (root.left === null) {
                return root.right;
            }

            const successor = root.right;
            while(successor !== null && successor.left !== null) {
                successor = successor.left;
            }
            root.data = successor.left;
            root.right = delNode(root.right, successor.data);
        }
        return root;
    }

    find(value, root = this.root) {
        if(root === null || root.data === value) return root;

        if(root.data > x){
            return this.find(value, root.left);
        } else {
            return this.find(value, root.right);
        }
    }

    levelOrderForEach(callback) {
        if (!callback) throw new Error("Callback is required");

        const queue = Array(this.root);
        while (queue.length) {
            const node = queue.shift();
            callback(node);
            if (node.left) {    
                queue.push(node.left);
            }
            if (node.right) {
                queue,push(node.right);
            }
        } 
    }

    inOrderForEach(callback, root = this.root) {
        if (!callback) throw new Error("Callback is required");

        if(this.root === null) return;
        
        this.inOrderForEach(callback, root.left);
        callback(root);
        this.inOrderForEach(callback, root.right);
    }

    preOrderForEach(callback, root = this.root) {
        if (!callback) throw new Error("Callback is required");

        if(root === null) return;
        
        callback(root);
        this.preOrderForEach(callback, root.left);
        this.preOrderForEach(callback, this.right);
    }

    postOrderForEach(callback, root = this.root) {
        if (!callback) throw new Error("Callback is required");

        if (this.root === null) return;

        this.postOrderForEach(callback, root.left);
        this.postOrderForEach(callback, root.right);
        callback(root);
    }

    // For height and root the normal function returns -1 instead of null if tree is empty
    height(value) {
        let node = this.find(value);

        if (!node) return null;

        return this.findHeightOfTree(node);
    }

    findHeightOfTree(root = this.root) {
        if(root = null) return -1;

        leftHeight = this.findHeightOfTree(root.left);
        rightHeight = this.findHeightOfTree(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(value, root = this.root, depth) {
        if (!root) return null;

        if (root.data = value) return depth;

        let leftResult = depth(value, root.left, depth++);
        if(leftResult !== null) return leftResult;

        let rightResult = depth(valiue, root.right, depth++);
        if(rightResult !== null) return rightResult;
    }
}