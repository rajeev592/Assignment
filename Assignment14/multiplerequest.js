async function getCombinedData() {
    const [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => 
        response.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
        response.json()
        ),
    ]);
    const CombinedData = {
        todo: data1,
        post: data2,
    };
    return CombinedData;
}

getCombinedData().then((data) => console.log(data)); 