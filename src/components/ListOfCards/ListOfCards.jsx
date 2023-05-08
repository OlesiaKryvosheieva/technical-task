import { Card } from "components/Card/Card"
import { getUsers } from "operations/UsersApi"
import { useEffect, useState } from "react";


export const ListOfCards= () => {
const [users, setUsers] = useState([])

useEffect(()=> {
    setUsers(getUsers());
}, [])

    return <div>
       {users.map(user => {
           return  <Card key={user.id} tweets={user.tweets} followers={user.followers}/>
        })} 
    </div>

} 