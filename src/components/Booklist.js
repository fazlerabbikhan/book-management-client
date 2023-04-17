import React from "react";
import Table from "./Table";

const Booklist = () => {

    return (
        <div className="border rounded-xl my-10 overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Table></Table>
                    </tbody>
                    <button>Edit</button>
                    <button>Delete</button>
                </table>
            </div>
    );
};

export default Booklist;