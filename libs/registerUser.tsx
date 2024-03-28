import Swal from 'sweetalert2'

interface FormData {
    name: string;
    tel: string;
    email: string;
    password: string;
    role: string;
  }

export default async function registerUser({name, tel, email, password, role}: FormData) {
    const response = await fetch("http://localhost:5050/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            tel: tel,
            email: email,
            password: password,
            role: role 
        })
    })

    if (!response.ok) {
        throw new Error("Failed to register")
        
    }

    return await response.json()
};
