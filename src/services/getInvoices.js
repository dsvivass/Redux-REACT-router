export default async function getInvoices( all = false) {

    if (all) {
        const request = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await request.json()
    }

    return [];
}