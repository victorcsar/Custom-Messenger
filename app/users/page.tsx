'use client'

import { signOut } from "next-auth/react";

const Users =() => {
    return(
        <button onClick={()=> signOut()}>sair</button>
    );
}

export default Users;