class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
    }

    append(value) {
        const current = new Node(value);

        if (!this.headNode) {
            this.headNode = current;
            this.tailNode = current;
            return this;
        }

        this.tailNode.next = current;
        this.tailNode = current;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);

        this.headNode = newNode;
        if (!this.tailNode) {
            this.tailNode = newNode;
        }
        return this;
    }

    size() {
        let current = this.headNode;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    head() {
        if (this.headNode) return this.headNode.value;
        else return undefined;
    }

    tail() {
        if (this.tailNode) return this.tailNode.value;
        else return undefined;
    }
    at(index) {

        if (index < 0) {
            return undefined;
        }
        let i = index;
        let current = this.headNode;
        while (current && i) {
            current = current.next;
            i--;
        }
        return current ? current.value : undefined;
    }
    pop() {
        if (!this.headNode) {
            return undefined;
        }

        const popped = this.headNode;
        this.headNode = this.headNode.next;
        if (!this.headNode) {
            this.tailNode = null;
        }
        popped.next = null;
        return popped.value;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    findIndex(value) {
        let current = this.headNode;
        let count = 0;
        while (current) {
            if (current.value === value) {
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }
    toString() {
        if (!this.headNode) {
            return '';
        }
        let current = this.headNode;
        let string = "";
        while (current) {
            string += `( ${current.value} ) ->`;
            current = current.next;
        }
        return string + " null ";
    }

    insertAt(index, ...values) {
        if (index < 0 || index > this.size()) {
            throw new Error("Index out of bounds");
        }

        if (values.length === 0) {
            return this;
        }

        // Insert at beginning
        if (index === 0) {
            for (let i = values.length - 1; i >= 0; i--) {
                this.prepend(values[i]);
            }

            return this;
        }

        // Find node immediately before insertion point
        let previousNode = this.headNode;

        for (let i = 1; i < index; i++) {
            previousNode = previousNode.next;
        }

        const currentNode = previousNode.next;

        // Insert values one by one
        for (const value of values) {
            const newNode = new Node(value, currentNode);

            previousNode.next = newNode;
            previousNode = newNode;
        }

        // If we inserted at the end, update tail
        if (!currentNode) {
            this.tailNode = previousNode;
        }

        return this;
    }

}


module.exports = {
    Node,
    LinkedList,
};
