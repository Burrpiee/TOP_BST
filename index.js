import Tree from './bst.js';

function randomArray() {
    let i = 0;
    let array = new Array;
    while (i < 10) {
        array.push(Math.floor(Math.random() * 100));
        i++;
    }
    return array;
}

const bst = new Tree(randomArray());
console.log(bst.isBalanced());

const levelOrderResults = new Array;
bst.levelOrderForEach((node) => {
    levelOrderResults.push(node.data);
});
console.log(levelOrderResults);

const inOrderResults = new Array;
bst.inOrderForEach((node) => {
    inOrderResults.push(node.data);
})
console.log(inOrderResults);

const preOrderResults = new Array;
bst.preOrderForEach((node) => {
    preOrderResults.push(node.data);
});
console.log(preOrderResults);

const postOrderResults = new Array;
bst.postOrderForEach((node) => {
    postOrderResults.push(node.data);
});
console.log(postOrderResults);

// Unbalancing the tree
bst.insert(101);
bst.insert(110);
bst.insert(200);

console.log(bst.isBalanced());

bst.rebalance();
console.log(bst.isBalanced());