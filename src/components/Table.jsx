

import React from "react";
import '../App.css';
const agents = [
    {"id": 1, "agent_code": "AGT001", "first_name": "John", "last_name": "Doe", "gmail": "john.doe@gmail.com"},
    {"id": 2, "agent_code": "AGT002", "first_name": "Jane", "last_name": "Smith", "gmail": "jane.smith@gmail.com"},
    {"id": 3, "agent_code": "AGT003", "first_name": "Emily", "last_name": "Johnson", "gmail": "emily.johnson@gmail.com"},
    {"id": 4, "agent_code": "AGT004", "first_name": "Michael", "last_name": "Williams", "gmail": "michael.williams@gmail.com"},
    {"id": 5, "agent_code": "AGT005", "first_name": "Mary", "last_name": "Brown", "gmail": "mary.brown@gmail.com"},
    {"id": 6, "agent_code": "AGT006", "first_name": "David", "last_name": "Jones", "gmail": "david.jones@gmail.com"},
    {"id": 7, "agent_code": "AGT007", "first_name": "Linda", "last_name": "Garcia", "gmail": "linda.garcia@gmail.com"},
    {"id": 8, "agent_code": "AGT008", "first_name": "James", "last_name": "Martinez", "gmail": "james.martinez@gmail.com"},
    {"id": 9, "agent_code": "AGT009", "first_name": "Patricia", "last_name": "Hernandez", "gmail": "patricia.hernandez@gmail.com"},
    {"id": 10, "agent_code": "AGT010", "first_name": "Robert", "last_name": "Lopez", "gmail": "robert.lopez@gmail.com"},
    {"id": 11, "agent_code": "AGT011", "first_name": "Jennifer", "last_name": "Wilson", "gmail": "jennifer.wilson@gmail.com"},
    {"id": 12, "agent_code": "AGT012", "first_name": "Charles", "last_name": "Anderson", "gmail": "charles.anderson@gmail.com"},
    {"id": 13, "agent_code": "AGT013", "first_name": "Elizabeth", "last_name": "Thomas", "gmail": "elizabeth.thomas@gmail.com"},
    {"id": 14, "agent_code": "AGT014", "first_name": "Christopher", "last_name": "Taylor", "gmail": "christopher.taylor@gmail.com"},
    {"id": 15, "agent_code": "AGT015", "first_name": "Susan", "last_name": "Moore", "gmail": "susan.moore@gmail.com"},
    {"id": 16, "agent_code": "AGT016", "first_name": "Daniel", "last_name": "Jackson", "gmail": "daniel.jackson@gmail.com"},
    {"id": 17, "agent_code": "AGT017", "first_name": "Karen", "last_name": "Martin", "gmail": "karen.martin@gmail.com"},
    {"id": 18, "agent_code": "AGT018", "first_name": "Matthew", "last_name": "Lee", "gmail": "matthew.lee@gmail.com"},
    {"id": 19, "agent_code": "AGT019", "first_name": "Nancy", "last_name": "Perez", "gmail": "nancy.perez@gmail.com"},
    {"id": 20, "agent_code": "AGT020", "first_name": "Anthony", "last_name": "Thompson", "gmail": "anthony.thompson@gmail.com"},
    {"id": 21, "agent_code": "AGT021", "first_name": "Jessica", "last_name": "White", "gmail": "jessica.white@gmail.com"},
    {"id": 22, "agent_code": "AGT022", "first_name": "Brian", "last_name": "Harris", "gmail": "brian.harris@gmail.com"},
    {"id": 23, "agent_code": "AGT023", "first_name": "Linda", "last_name": "Clark", "gmail": "linda.clark@gmail.com"},
    {"id": 24, "agent_code": "AGT024", "first_name": "Steven", "last_name": "Robinson", "gmail": "steven.robinson@gmail.com"},
    {"id": 25, "agent_code": "AGT025", "first_name": "Sarah", "last_name": "Lewis", "gmail": "sarah.lewis@gmail.com"},
    {"id": 26, "agent_code": "AGT026", "first_name": "Kevin", "last_name": "Walker", "gmail": "kevin.walker@gmail.com"},
    {"id": 27, "agent_code": "AGT027", "first_name": "Mary", "last_name": "Hall", "gmail": "mary.hall@gmail.com"},
    {"id": 28, "agent_code": "AGT028", "first_name": "George", "last_name": "Allen", "gmail": "george.allen@gmail.com"},
    {"id": 29, "agent_code": "AGT029", "first_name": "Barbara", "last_name": "Young", "gmail": "barbara.young@gmail.com"},
    {"id": 30, "agent_code": "AGT030", "first_name": "Daniel", "last_name": "King", "gmail": "daniel.king@gmail.com"}
];

const Table = () => {
    return (
        <div className="table-container">
            <h2>Agent Table</h2>
            <table id="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Agent Code</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gmail</th>
                    </tr>
                </thead>
                <tbody>
                    {agents.map(agent => (
                        <tr key={agent.id}>
                            <td>{agent.id}</td>
                            <td>{agent.agent_code}</td>
                            <td>{agent.first_name}</td>
                            <td>{agent.last_name}</td>
                            <td>{agent.gmail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
