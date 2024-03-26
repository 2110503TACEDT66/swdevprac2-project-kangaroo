import { GetCars, filterProps } from "@/types"

export async function getCars() :Promise<GetCars>{
    //const { manufacturer, year, model, color, limit} = filters
    const response = await fetch("http://localhost:5050/api/v1/cars")
     //console.log( "hi",await response.json())
    if(!response.ok){
        throw new Error("Fail to fetch cars")
    }
    return await response.json()
    
};

//http://localhost:5050/api/v1/cars?Brand=${manufacturer}&Year=${year}&Model=${model}&Color=${color}&limit=${limit}
//filters: filterProps