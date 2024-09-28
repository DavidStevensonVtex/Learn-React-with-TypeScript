// Listing 12.5 parameters that don't raise exceptions in the src/Checklist/assertValueCanBeRendered.test.ts file.

import { assert } from "console";
import { assertValueCanBeRendered } from "./assertValueCanBeRendered";

test('should raise exception when not a string or number', () => {
    expect(() => {
        assertValueCanBeRendered(true);
    }).toThrow(
        'value is not a string or a number'
    );
});

test('should not raise exception when string', () => {
    expect(() => {
        assertValueCanBeRendered('something');
    }).not.toThrow();
});