// Listing 9.13 Use assertIsPosts function in src/posts/getPosts.ts file

import { PostData } from "./types";

export async function getPosts(): Promise<PostData[]> {
    console.log("getPosts", process.env.REACT_APP_API_URL);
    const response = await fetch(
        process.env.REACT_APP_API_URL!
    );

    const body = (await response.json()) as unknown;
    assertIsPosts(body);
    return body;
}

export function assertIsPosts(
    postsData: unknown
): asserts postsData is PostData[] {

    if (!Array.isArray(postsData)) {
        throw new Error("posts isn't an array");
    }

    if (postsData.length === 0) {
        return;
    }

    postsData.forEach((post) => {
        if (!("id" in post)) {
            throw new Error("post doesn't contain id");
        }
        // The current version of json-server1 does not support non-string IDs for entities. 
        // Per typicode/json-server#1473:
        // https://github.com/typicode/json-server/issues/1473
        if (typeof post.id !== 'string') {
            throw new Error("id is not a string");
        }
        if (!("title" in post)) {
            throw new Error("post doesn't contain title");
        }
        if (typeof post.title !== "string") {
            throw new Error("title is not a string");
        }
        if (!("description" in post)) {
            throw new Error("post doesn't contain description");
        }
        if (typeof post.description !== "string") {
            throw new Error("description is not a string");
        }
    });
}