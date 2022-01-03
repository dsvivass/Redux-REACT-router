export default async function getData(id) {

    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await request.json();

}