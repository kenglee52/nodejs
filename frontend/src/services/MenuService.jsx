export const getAllMenus = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/menu",{
            method: "GET"
        });
        if(response.status === 200){
            const responseData = await response.json();
            return responseData;
        }
    } catch (error) {
        console.log(error);
    }
}