class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    buildTree(...array) {
        if (array.length === 0) return null;
        let Arr = array;
        this.root = new Node(Arr[0]);
        for (let i = 1; i < Arr.length; i++) {
            let current = this.root;
            while (true) {
                if (Arr[i] === current.value) {
                    break;
                }

                else if (Arr[i] > current.value) {
                    if (current.right === null) {
                        current.right = new Node(Arr[i]);
                        break;
                    }
                    current = current.right;
                }
                else {
                    if (current.left === null) {
                        current.left = new Node(Arr[i]);
                        break;
                    }
                    current = current.left;
                }
            }
        }

        return this.root;
    }


    includes(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this.root;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) {
                break;
            }
            else if (value > current.value) {
                if (current.right === null) {
                    current.right = new Node(value);
                    break;
                }
                current = current.right;
            }
            else {
                if (current.left === null) {
                    current.left = new Node(value);
                    break;
                }
                current = current.left;
            }
        }
    }
    deleteItem(value) {
        if (!this.includes(value)) return null;
        let current = this.root;
        let previous = null;
        let mark = null;
        while (current) {
            if (value < current.value) {
                previous = current;
                mark = "left";
                current = current.left;
            }
            else if (value > current.value) {
                previous = current;
                mark = "right";
                current = current.right;
            }
            else {
                if (!current.left && !current.right) {
                    if (!previous) this.root = null; // current is root
                    else if (mark === "left") {
                        previous.left = null;
                    }
                    else {
                        previous.right = null;
                    }
                }
                else if (current.left && !current.right) {
                    if (!previous) {
                        this.root = current.left;
                    }
                    else if (mark === "left") {
                        previous.left = current.left;
                    }
                    else {
                        previous.right = current.left;
                    }
                }
                else if (!current.left && current.right) {
                    if (!previous) {
                        this.root = current.right;
                    }
                    else if (mark === "left") {
                        previous.left = current.right;
                    }
                    else {
                        previous.right = current.right;
                    }
                }
                else {
                    let successorParent = current;
                    let successor = current.right;

                    while (successor.left) {
                        successorParent = successor;
                        successor = successor.left;
                    }
                    current.value = successor.value;
                    if (successorParent.left === successor) {
                        successorParent.left = successor.right;
                    } else {
                        successorParent.right = successor.right;
                    }
                }

                return this.root;
            }
        }
        return this.root;
    }
}