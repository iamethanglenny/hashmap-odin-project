const HashMap = () => {

    return {
        hash: function (key) {
            let hashCode = 0;
      
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
              hashCode = primeNumber * hashCode + key.charCodeAt(i);
            }
         
            return hashCode;
        },

        set: function (key, value) {

        },

        get: function (key) {

        },

        has: function (key) {

        },

        remove: function (key) {

        },

        length: function () {

        },

        clear: function () {

        },

        keys: function () {

        },

        values: function () {

        },

        entries: function () {

        },
    };
};