// Listing 12.1 Testing isChecked in the src/Checklist/isChecked.test.ts file.

import { isChecked } from "./isChecked";

test('should be true when in checkedIds', () => {
    const result = isChecked([1, 2, 3], 2);
    expect(result).toBe(true);
});

test('should return false when not in checkedIds', () => {
    const result = isChecked([1, 2, 3], 4);
    expect(result).toBe(false);
});