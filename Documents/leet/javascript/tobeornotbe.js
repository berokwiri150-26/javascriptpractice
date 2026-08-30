var expect = function(val) {
    // toBe(val);
    function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
              throw new Error("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
              throw new Error("Equal")
            }
        }
    }
    };
}