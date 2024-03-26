export default async function deleteCar(carID: string) {
    const response = await fetch(`http://localhost:5050/api/v1/cars/${carID}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        throw new Error("Failed to delete car")
    }

    return await response.json()
};  
