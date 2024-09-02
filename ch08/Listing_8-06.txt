// Listing 8.6 Creating the src/api/authorize.ts file.

export type User = {
    id: string;
    name: string;
};

export function authenticate(): Promise<User | undefined> {
    return new Promise(resolve =>
        setTimeout(() => resolve({ id: "1", name: "Bob" }), 1000));
}