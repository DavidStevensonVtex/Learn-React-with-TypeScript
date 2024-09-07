// Listing 9.10 Define getPosts function in src/posts/getPosts.ts file

export async function getPosts() {
    console.log("getPosts", process.env.REACT_APP_API_URL);
    const response = await fetch(
        process.env.REACT_APP_API_URL!
    );

    const body = await response.json();
    return body;
}