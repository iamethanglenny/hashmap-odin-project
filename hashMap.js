const HashMap = (initialCapacity = 16) => {
    let table = new Array(initialCapacity);
    let keyMap = new Array(initialCapacity);
    let entriesCount = 0;
    const loadFactorThreshold = 0.75;

    function hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    function resize() {
        const oldTable = table;
        const oldKeyMap = keyMap;
        const newCapacity = table.length * 2;

        table = new Array(newCapacity);
        keyMap = new Array(newCapacity);
        entriesCount = 0;

        // Reinsert all old entries into the new table
        for (let i = 0; i < oldTable.length; i++) {
            if (oldTable[i] !== undefined) {
                set(oldKeyMap[i], oldTable[i]);
            }
        }
    }

    function set(key, value) {
        const index = hash(key) % table.length;

        if (table[index] === undefined) {
            entriesCount++;
        }
        table[index] = value;
        keyMap[index] = key;

        // Resize if load factor exceeds threshold
        if (entriesCount / table.length > loadFactorThreshold) {
            resize();
        }
    }

    return {
        set,
        get: function (key) {
            const index = hash(key) % table.length;
            return table[index];
        },
        has: function (key) {
            const index = hash(key) % table.length;
            return table[index] !== undefined;
        },
        remove: function (key) {
            const index = hash(key) % table.length;
            if (table[index] !== undefined) {
                delete table[index];
                delete keyMap[index];
                entriesCount--;
                return true;
            }
            return false;
        },
        length: function () {
            return entriesCount;
        },
        clear: function () {
            table = new Array(initialCapacity);
            keyMap = new Array(initialCapacity);
            entriesCount = 0;
        },
        keys: function () {
            return keyMap.filter(key => key !== undefined);
        },
        values: function () {
            return table.filter(value => value !== undefined);
        },
        entries: function () {
            return table.reduce((acc, value, index) => {
                if (value !== undefined) {
                    acc.push([keyMap[index], value]);
                }
                return acc;
            }, []);
        }
    };
};

module.exports = HashMap;
