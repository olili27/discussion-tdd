import { assert } from "chai"
import { describe, it } from "node:test"
import multiply  from "../multiply.js";


describe("multiplication function", () => {
    /* if u don't want a test case to be run u can use it.skip() instead of it()

    it.skip("it should multiply 1 by 1 and return 1", () => {
        assert.equal(multiply(1, 1), 1);
     });
     */

    it("it should multiply 1 by 1 and return 1", () => {
      assert.equal(multiply(1, 1), 1);
    });

    it("it should multiply 2 by 2 and return 4", () => {
      assert.equal(multiply(2, 2), 4);
    //   assert.strictEqual(multiply(2, 2), 4);
    });

    it("it should multiply 3 by 3 and return 9", () => {
      assert.equal(multiply(3, 3), 9);
    });
});

