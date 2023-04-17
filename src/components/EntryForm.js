import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import Table from "./Table";

const EntryForm = () => {

    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {},
        onSubmit: (book) => {
            setBooks([...books, book]);
            navigate('/booklist');
        }
    });

    console.log(books);

    return (
        <div>
            <h1 className="text-4xl text-center text-sky-600 mt-5">Book Management</h1>
            <form className="my-10" onSubmit={formik.handleSubmit}>

                <div>
                    <div>
                        <label htmlFor="title">
                            Title<span className="text-red-600">*</span>
                        </label>
                        <input
                            className="input mx-36 input-bordered input-primary max-w-xs"
                            placeholder="Enter Title of the Book"
                            id="title"
                            name="title"
                            type="text"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="publisher">
                            Publisher<span className="text-red-600">*</span>
                        </label>
                        <input
                            className="input mx-28 input-bordered input-primary max-w-xs"
                            placeholder="Enter Name of the Publisher"
                            id="publisher"
                            name="publisher"
                            type="text"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.publisher}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="age">
                            Age of the Publisher<span className="text-red-600">*</span>
                        </label>
                        <input
                            className="input mx-8 input-bordered input-primary max-w-xs"
                            placeholder="Age of the Publisher in Years"
                            id="age"
                            name="age"
                            type="number"
                            min={1}
                            required
                            onChange={formik.handleChange}
                            value={formik.values.age}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="date">
                            Publication Date<span className="text-red-600">*</span>
                        </label>
                        <input
                            className="input mx-14 input-bordered input-primary max-w-xs"
                            placeholder="Date of publication"
                            id="date"
                            name="date"
                            type="date"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.date}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="type">
                            Type<span className="text-red-600">*</span>
                        </label>
                        <select
                            className="input mx-36 input-bordered input-primary  max-w-xs"
                            id="type"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.type}
                        >
                            <option>Sci-fi</option>
                            <option>Drama</option>
                            <option>Novel</option>
                        </select>
                    </div>
                </div>

                <button
                    className="flex justify-end mt-5 ml-auto btn btn-info"
                    type="submit"
                >
                    Submit
                </button>
            </form >

            {books.map((item, index) => <Table
                            key={index}
                            item={item}
                            index={index}
                        ></Table>
                        )}
        </div >
    );
};

export default EntryForm;