fetch("https://swapi.dev/api/people/1")
    .then((response) => response.json())
    .then((data: unknown) => {
        // console.log("data", data);
        if (isCharacter(data)) {
            console.log("name", data.name);
        }
    });

function isCharacter(character: any): character is { name: string } {
    return "name" in character;
}