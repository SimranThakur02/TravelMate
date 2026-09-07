import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function RoamBudget() {
    const [mode, setMode] = useState("solo");
    const [expenses, setExpenses] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        currency: "INR",
        category: "Food",
        paidBy: ""
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const addExpense = () => {

        if (!formData.title || !formData.amount)
            return;

        setExpenses([
            ...expenses,
            {
                id: Date.now(),
                ...formData
            }
        ]);

        setFormData({
            title: "",
            amount: "",
            currency: "INR",
            category: "Food",
            paidBy: ""
        });
    };
    const resetForm = () => {

        setFormData({
            title: "",
            amount: "",
            currency: "INR",
            category: "Food",
            paidBy: ""
        });

    };
    const totalAmount = expenses.reduce(
        (sum, expense) =>
            sum + Number(expense.amount),
        0
    );
    return (
        <>
            <Navbar />

            <section className="budget-hero">

                <div className="budget-content">

                    <span className="budget-badge">
                        💰 RoamBudget
                    </span>

                    <h1>
                        Track expenses.
                        <br />
                        Travel smarter.
                    </h1>

                    <p>
                        Manage solo trips and group adventures
                        with powerful expense tracking.
                    </p>

                    <div className="budget-mode">

                        <button
                            className={mode === "solo" ? "active-mode" : ""}
                            onClick={() => setMode("solo")}
                        >
                            Solo
                        </button>

                        <button
                            className={mode === "group" ? "active-mode" : ""}
                            onClick={() => setMode("group")}
                        >
                            Group
                        </button>

                    </div>

                </div>

            </section>
            <section className="expense-section">

                <div className="expense-form-card">

                    <h2>Add New Expense</h2>

                    <form>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Expense Title"
                        />

                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Amount"
                        />
                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                        >
                            <option>INR</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option>Food</option>
                            <option>Transport</option>
                            <option>Stay</option>
                            <option>Shopping</option>
                            <option>Other</option>
                        </select>

                        {mode === "group" && (

                            <input
                                type="text"
                                name="paidBy"
                                value={formData.paidBy}
                                onChange={handleChange}
                                placeholder="Paid By"
                            />

                        )}

                        <div className="expense-buttons">

                            <button
                                type="button"
                                className="add-btn"
                                onClick={addExpense}
                            >
                                Add Expense
                            </button>

                            <button
                                type="button"
                                className="reset-btn"
                                onClick={resetForm}
                            >
                                Reset
                            </button>

                        </div>

                    </form>

                </div>

            </section>
            <section className="budget-dashboard">

                {/* Recent Expenses */}

                <div className="recent-expenses">

                    <h2>Recent Expenses</h2>

                    {expenses.length === 0 ? (

                        <p>No expenses added yet.</p>

                    ) : (

                        expenses.map((expense) => (

                            <div
                                className="expense-item"
                                key={expense.id}
                            >

                                <div>
                                    <h4>{expense.title}</h4>

                                    <p>{expense.category}</p>
                                </div>

                                <strong>
                                    ₹{expense.amount}
                                </strong>

                            </div>

                        ))

                    )}

                </div>

                {/* Summary */}

                <div className="summary-card">

                    <h2>Total Summary</h2>

                    <div className="summary-total">

                        ₹{totalAmount}

                    </div>

                    <div className="summary-row">
                        <span>Food</span>
                        <span>₹350</span>
                    </div>

                    <div className="summary-row">
                        <span>Transport</span>
                        <span>₹500</span>
                    </div>

                    <div className="summary-row">
                        <span>Stay</span>
                        <span>₹2200</span>
                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default RoamBudget;