import React from 'react'
function Body1(){

    async function clicked(){
        const data={
            "name":"Silu",
            "email":"sahoo@gmail.com"
        }
        try{
            const response = await fetch('http://localhost:4000/api/auth',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            return response.json(data)
        }catch(err){
            console.log('Fill again!!')
        }
    }
    return <button onClick={()=>clicked()}>Click</button>
}
export default Body1;