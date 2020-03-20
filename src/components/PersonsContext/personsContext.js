import React from "react";

const PersonsContext = React.createContext(
    {
        personsArr: [],
        filterHandler: undefined
    }
);

export default PersonsContext;