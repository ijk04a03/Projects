class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}


class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(16).fill(null);
        this.sizeOfHM = 0;
    }

    hash(key) {
        key = String(key);
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
        }

        return (hash >>> 0) % this.capacity; //hash>>>0 makes hash an unsigned 32 bit int and the whole expression gives us an array index;
    }

    set(key, value) {
        const index = this.hash(key);
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            current = current.next;
        }

        const newNode = new Node(key, value, this.buckets[index]);

        this.buckets[index] = newNode;
        this.sizeOfHM++;
    }


    get(key) {
        for (let bucket of this.buckets) {
            let current = bucket;
            while (current) {
                if (current.key === key) return current.value;
                current = current.next;
            }
        }
        return null;
    }

    has(key) {
        for (let bucket of this.buckets) {
            let current = bucket;
            while (current) {
                if (current.key === key) return true;
                current = current.next;
            }
        }
        return null;
    }

    length() {
        return this.sizeOfHM;
    }

    clear() {
        for (let bucket of this.buckets) {
            bucket = null;
        }
    }
    keys() {
        let arr = new Array;
        for (let bucket of this.buckets) {
            let current = bucket;
            while (current) {
                if (current.key) arr.push(current.key);
                current = current.next;
            }
        }
        return arr;
    }

    values() {
        let arr = new Array;
        for (let bucket of this.buckets) {
            let current = bucket;
            while (current) {
                if (current.key) arr.push(current.value);
                current = current.next;
            }
        }
        return arr;
    }

    entries() {
        let arr = new Array;
        for (let bucket of this.buckets) {
            let current = bucket;
            while (current) {
                if (current.key) arr.push([this.hash(current.key), current.key, current.value]);
                current = current.next;
            }
        }
        return arr;
    }

}

export { HashMap, Node }