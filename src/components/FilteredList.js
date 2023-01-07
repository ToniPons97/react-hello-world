import { useMemo, useState } from "react";


export const FilteredList = ({ users }) => {
    const [usersList, setUsersList] = useState(users);
    
    const filterUsers = (usersList) => {
        const filteredList = usersList.filter(user => user.age > 18);
        setUsersList(filteredList);
    }

    useMemo(() => filterUsers(usersList), [users]);

    return (
        <div>
            <h1>Filtered List</h1>
            <ul>
                {usersList.map(user => <li key={crypto.randomUUID()}>{user.name}</li>)}
            </ul>
        </div>
    );

}

export default FilteredList;