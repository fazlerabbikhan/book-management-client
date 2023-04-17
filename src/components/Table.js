import React from "react";

const Table = ({ item, index }) => {

    const { title, publisher, age, date, type } = item;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{publisher}</td>
            <td>{age}</td>
            <td>{date}</td>
            <td>{type}</td>
        </tr>
    );
};

export default Table;