class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}
// function IOB() {
//     if (index < 0 || index >= buckets.length) {
//         throw new Error("Trying to access index out of bounds");
//     }
//     else return false;
// }

class hashmap {
    constructor() {
        this.MAX_AVG_LOAD_FACTOR = 8;
        this.MAX_CHAIN_LENGTH = 16;
        this.buckets = new Array(16).fill(null);
        this.size = 0;
    }

    hashKey(key, bucketCount = this.buckets.length) {
        key = String(key);

        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash << 13) - hash + key.charCodeAt(i);
        }

        return (hash >>> 0) % bucketCount; //hash>>>0 makes hash an unsigned 32 bit int and the whole expression gives us an array index
    }

    chainLength(node) {
        let length = 0;

        while (node) {
            length++;
            node = node.next;
        }

        return length;
    }

    put(key, value) {
        const index = this.hashKey(key);

        let current = this.buckets[index];

        // Existing key → update value
        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }

            current = current.next;
        }

        // New key → add to front of linked list
        const newNode = new Node(
            key,
            value,
            this.buckets[index]
        );

        this.buckets[index] = newNode;

        this.size++;

        this.checkResize();
    }

    contains(key) {
        const index = this.hashKey(key);

        let current = this.buckets[index];

        while (current) {
            if (current.key === key) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    get(key) {
        const index = this.hashKey(key);

        let current = this.buckets[index];

        while (current) {
            if (current.key === key) {
                return current.value;
            }

            current = current.next;
        }

        return undefined;
    }

    checkResize() {
        let maxChain = 0;

        for (const bucket of this.buckets) {
            maxChain = Math.max(
                maxChain,
                this.chainLength(bucket)
            );
        }

        const avgLoadFactor =
            this.size / this.buckets.length;

        if (
            avgLoadFactor >= this.MAX_AVG_LOAD_FACTOR ||
            maxChain >= this.MAX_CHAIN_LENGTH
        ) {
            this.rehash();
        }
    }

    rehash() {
        const oldBuckets = this.buckets;
        const newBucketCount = oldBuckets.length * 2;

        const newBuckets =
            new Array(newBucketCount).fill(null);

        for (let i = 0; i < oldBuckets.length; i++) {
            let current = oldBuckets[i];

            while (current) {
                const next = current.next;

                const newIndex =
                    this.hashKey(current.key, newBucketCount);

                current.next = newBuckets[newIndex];
                newBuckets[newIndex] = current;

                current = next;
            }
        }

        this.buckets = newBuckets;
    }

    bucketCount() {
        return this.buckets.length;
    }
}