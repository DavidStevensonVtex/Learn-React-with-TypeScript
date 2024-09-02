// Listing 8.7 Create the src/api/authorize.ts file.

export function authorize(id: string): Promise<string[]> {
    return new Promise(resolve =>
        setTimeout(() => resolve(["admin"]), 1000));
}