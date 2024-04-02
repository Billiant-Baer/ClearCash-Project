import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const [budgets, setBudgets] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [remainingIncome, setRemainingIncome] = useState("");
    const navigate = useNavigate();

    const addMonthlyIncome = () => {
        if (monthlyIncome !== "") {
            const newBudget = {
                title: "Monthly Income",
                amount: parseFloat(monthlyIncome),
            };
            setBudgets([...budgets, newBudget]);
            setRemainingIncome(parseFloat(monthlyIncome));
            setMonthlyIncome("");
        }
    };
    const addBudget = () => {
        if (title !== "" && amount !== "") {
            const newBudget = { title, amount: parseFloat(amount) };
            setBudgets([...budgets, newBudget]);
            setRemainingIncome((prevIncome) => prevIncome - parseFloat(amount));
            setTitle("");
            setAmount("");
        }
    };

    const deleteBudget = (index, budgetAmount, budgetTitle) => {
        const updatedBudgets = [...budgets];
        updatedBudgets.splice(index, 1);
        setBudgets(updatedBudgets);
        if (budgetTitle === "Monthly Income") {
            setRemainingIncome(0);
        } else {
            setRemainingIncome(
                (prevIncome) => prevIncome + parseFloat(budgetAmount)
            );
        }
    };

    const handleViewBudget = () => {
        navigate("/show", {
            state: { budgets: budgets, remainingIncome: remainingIncome },
        });
    };

    return (
        <div>
            <h1 className="text-center mt-1 ">Create Your Budget</h1>
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Monthly Income"
                    aria-label="Monthly Income"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                />
            </div>
            <button className="btn btn-outline-info mt-2 mb-4 " onClick={addMonthlyIncome}> Add Monthly Income</button>
            <h1>Expenses</h1>
            <input
                type="text"
                className="form-control "
                placeholder="Title"
                aria-label="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <div className="col">
                <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <span className="input-group-text">.00</span>
                </div>
            </div>
            <button className="btn btn-outline-info" onClick={addBudget}>
                Add
            </button>

            <button
                className="btn btn-outline-info m-2"
                onClick={handleViewBudget}
            >
                View Budget
            </button>
            <Link className="btn btn-outline-info m-2 " to={"/show"}>Go back</Link>

            <div>
                {remainingIncome !== "" && (
                    <div>
                        <h1 className="text-center">
                            Remaining Monthly Income: ${remainingIncome}
                        </h1>
                    </div>
                )}
            </div>

            {budgets.length > 0 && (
                <div>
                    <div className="container">
                        <h1 className="text-center">Your Expenses</h1>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {budgets.map((budget, index) => (
                                    <tr key={index}>
                                        <td>{budget.title}</td>
                                        <td>${budget.amount}.00</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    deleteBudget(
                                                        index,
                                                        budget.amount,
                                                        budget.title
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Create;
