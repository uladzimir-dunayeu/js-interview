var expect = function(val) {
    const expectedValue = val;

    return {
        toBe: function(toBeValue) {
            if (expectedValue === toBeValue) {
                return {value: true};
            }
            return {error: "Not Equal"}
        },
        notToBe: function(notToBeValue) {
            if (expectedValue !== notToBeValue) {
                return {value: true};
            }
            return {error: "Equal"}
        }
    }
};


console.log(expect(5).toBe(5));
console.log(expect(5).toBe(10));