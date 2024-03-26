export default async function getUser(token: string){
    const response = await fetch(`http://localhost:5050/api/v1/auth/me`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    if(!response.ok){
        throw new Error("Failed to fetch user")
    }

    return await response.json()
} 