class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const createNode = (value = null, nextNode = null) => ({
    value,
    nextNode,
});

class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.headNode) {
            this.headNode = newNode;
            this.tailNode = newNode;
            return this;
        }

        this.tailNode.nextNode = newNode;
        this.tailNode = newNode;
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
        let count = 0;
        let current = this.headNode;

        while (current) {
            count += 1;
            current = current.nextNode;
        }

        return count;
    }

    head() {
        return this.headNode ? this.headNode.value : undefined;
    }

    tail() {
        return this.tailNode ? this.tailNode.value : undefined;
    }

    at(index) {
        if (index < 0) {
            return undefined;
        }

        let current = this.headNode;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            current = current.nextNode;
            currentIndex += 1;
        }

        return current ? current.value : undefined;
    }

    pop() {
        if (!this.headNode) {
            return undefined;
        }

        const removedValue = this.headNode.value;
        this.headNode = this.headNode.nextNode;

        if (!this.headNode) {
            this.tailNode = null;
        }

        return removedValue;
    }

    contains(value) {
        let current = this.headNode;

        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }

        return false;
    }

    findIndex(value) {
        let index = 0;
        let current = this.headNode;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index += 1;
        }

        return -1;
    }

    toString() {
        if (!this.headNode) {
            return '';
        }

        const values = [];
        let current = this.headNode;

        while (current) {
            values.push(`( ${current.value} )`);
            current = current.nextNode;
        }

        return `${values.join(' -> ')} -> null`;
    }

    insertAt(index, ...values) {
        if (index < 0 || index > this.size()) {
            throw new RangeError('Index out of bounds');
        }

        if (values.length === 0) {
            return this;
        }

        if (index === 0) {
            const reversedValues = [...values].reverse();

            for (const value of reversedValues) {
                this.headNode = new Node(value, this.headNode);
            }

            if (!this.tailNode) {
                this.tailNode = this.headNode;
            }

            return this;
        }

        let previousNode = this.headNode;
        let currentNode = this.headNode;
        let currentIndex = 0;

        while (currentNode && currentIndex < index) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            currentIndex += 1;
        }

        for (const value of values) {
            const newNode = new Node(value, currentNode);

            if (previousNode === currentNode) {
                this.headNode = newNode;
            } else {
                previousNode.nextNode = newNode;
            }

            previousNode = newNode;
        }

        if (!this.tailNode || this.tailNode.nextNode) {
            let lastNode = this.headNode;
            while (lastNode && lastNode.nextNode) {
                lastNode = lastNode.nextNode;
            }
            this.tailNode = lastNode;
        }

        return this;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            throw new RangeError('Index out of bounds');
        }

        if (index === 0) {
            const removedValue = this.headNode.value;
            this.headNode = this.headNode.nextNode;

            if (!this.headNode) {
                this.tailNode = null;
            }

            return removedValue;
        }

        let previousNode = this.headNode;
        let currentNode = this.headNode.nextNode;
        let currentIndex = 1;

        while (currentNode && currentIndex < index) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            currentIndex += 1;
        }

        const removedValue = currentNode.value;
        previousNode.nextNode = currentNode.nextNode;

        if (!currentNode.nextNode) {
            this.tailNode = previousNode;
        }

        return removedValue;
    }
}

const createLinkedList = (initialValues = []) => {
    const list = new LinkedList();

    initialValues.forEach((value) => list.append(value));

    return list;
};

module.exports = {
    Node,
    createNode,
    LinkedList,
    createLinkedList,
};
