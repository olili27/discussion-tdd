import { assert } from "chai"
import { describe, it } from "node:test"
import multiply  from "../multiply.js";


describe("multiplication function", () => {
    it("it should multiply 1 by 1 and return 1", () => {
        assert.equal(multiply(1, 1), 1);
    });
});


