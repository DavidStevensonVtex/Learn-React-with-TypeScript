// Listing 12.3 Testing exceptions in the src/Checklist/assertValueCanBeRendered.test.ts file.

import { assert } from "console";
import { assertValueCanBeRendered } from "./assertValueCanBeRendered";

test('should raise exception when not a string or number', () => {
    expect(() => {
        assertValueCanBeRendered(true);
    }).toThrow(
        'value is not a string or a number'
    );
});