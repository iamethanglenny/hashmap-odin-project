

const HashMap = () => {
    const table = {};
    const keyMap = {};

    function hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    return {
        set: function (key, value) {
            const hashCode = hash(key);
            table[hashCode] = value;
            keyMap[hashCode] = key;
        },

        get: function (key) {
            const hashCode = hash(key);
            return table[hashCode];
        },

        has: function (key) {
            const hashCode = hash(key);
            return table.hasOwnProperty(hashCode);
        },

        remove: function (key) {
            const hashCode = hash(key);
            if (table.hasOwnProperty(hashCode)) {
                delete table[hashCode];
                delete keyMap[hashCode];
                return true;
            }
            return false;
        },

        length: function () {
            return Object.keys(table).length;
        },

        clear: function () {
            Object.keys(table).forEach(hashCode => delete table[hashCode]);
            Object.keys(keyMap).forEach(hashCode => delete keyMap[hashCode]);
        },

        keys: function () {
            return Object.values(keyMap);
        },

        values: function () {
            return Object.values(table);
        },

        entries: function () {
            return Object.keys(keyMap).map(hashCode => [keyMap[hashCode], table[hashCode]]);
        },
    };
};

module.exports = HashMap ;