import React, {createContext, useState} from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Providers = props => {
    const{
        users: initialSelectedUsers,
        children
    } = props;

    const [users, setUsers] = useState(initialUsers);
    const [selectedUser, setSelectedUser] = useState(initialSelectedUsers);

    const addNewUser = userName => {
        const newUser = {id: new Date().getTime().toString(), name:userName};
        setUsers(users.concat([newUser]));
    };
    const usersContext = {
        users,
        setUsers,
        selectedUser,
        addNewUser
    };
return <Context.Provider value = {usersContext}>{children}</Context.Provider>
};

export const {Consumer} = Context;

Provider.PropTypes = {
    users: PropTypes.array,
    selectedUser: PropTypes.objetct

};
Providers.defaultProps = {
    users: [],
    selectedUser: {}
};

