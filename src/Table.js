import React, { useState } from "react";
import Data from "./Table.json";
import "./Table.css";
function Table() {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);
  return (
    <div className="tableWrap">
      <div>
        <AddMember setData={setData} />
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>email</th>
              <th>phone</th>
              <th>Action</th>
            </thead>

            {data.map((current) =>
              editState === current.id ? (
                <EditMember current={current} data={data} setData={setData} />
              ) : (
                <tr>
                  <td>{current.ID}</td>
                  <td>{current.Name}</td>
                  <td>{current.email}</td>
                  <td>{current.phone}</td>

                  <td>
                    <button
                      type="button"
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );
  function handleUpdate(event) {
    event.preventDefault();
    const ID = event.target.elements.ID.value;
    const Name = event.target.elements.Name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const updatedData = data.map((d) =>
      d.id === editState
        ? { ...d, ID: ID, Name: Name, email: email, phone: phone }
        : d
    );
    setEditState(-1);
    setData(updatedData);
  }
  function handleEdit(id) {
    setEditState(id);
  }
  function handleDelete(id) {
    const updatedData = data.filter((d) => id !== d.id);
    setData(updatedData);
  }
}

function EditMember({ current, data, setData }) {
  function handleID(event) {
    const ID = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, ID: ID } : d
    );
    setData(updatedData);
  }
  function handleName(event) {
    const Name = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, Name: Name } : d
    );
    setData(updatedData);
  }
  function handleemail(event) {
    const email = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, email: email } : d
    );
    setData(updatedData);
  }
  function handlephone(event) {
    const phone = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, phone: phone } : d
    );
    setData(updatedData);
  }

  return (
    <tr>
      <td>
        {" "}
        <input
          type="text"
          onChange={handleID}
          value={current.ID}
          name="ID"
          placeholder="Enter ID"
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          onChange={handleName}
          value={current.Name}
          name="Name"
          placeholder="Enter Name"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleemail}
          value={current.eail}
          name="email"
          placeholder="Enter email"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlephone}
          value={current.phone}
          name="phone"
          placeholder="Enter ph no"
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}

function AddMember({ setData }) {
  function handleValues(event) {
    event.preventDefault();
    const Name = event.target.elements.Name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const newMember = {
      ID: 1005,
      Name,
      email,
      phone
    };
    setData((prevData) => prevData.concat(newMember));
  }
  return (
    <form className="addForm" onSubmit={handleValues}>
      <input type="text" name="Name" placeholder="Enter Name" />
      <input type="text" name="email" placeholder="Enter email" />
      <input type="text" name="phone" placeholder="Enter ph no" />
      <button> Add </button>
    </form>
  );
}
export default Table;
