import React, {Component} from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import {Table, Container, Input, Button, Label, FormGroup, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Expenses extends Component {
    emptyItem = {
        description: '',
        expensesDate: new Date(),
        id: 104,
        location: '',
        category: {id: 1, name: 'Travel'}
    }

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            Categories: [],
            Expenses: [],
            date: new Date(),
            item: this.emptyItem
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    async handleSubmit(event) {
        const item = this.state.item;
        await fetch(`/api/expenses`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(item);
    }

    handleDateChange(date) {
        let item = {...this.state.item};
        item.expensesDate = date;
        this.setState({item});
    }

    async remove(id) {
        await fetch(`/api/expenses/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }

            }).then(() => {
            let updatedExpenses = [...this.state.Expenses].filter(i => i.id !== id);
            this.setState({Expenses: updatedExpenses});
        });
    }

    async componentDidMount() {
        const responseCategories = await fetch('/api/categories');
        const bodyCategories = await responseCategories.json();
        this.setState({Categories: bodyCategories, isLoading: false});

        const responseExpenses = await fetch('/api/expenses');
        const bodyExpenses = await responseExpenses.json();
        this.setState({Expenses: bodyExpenses, isLoading: false});
        console.log(bodyExpenses);
    }

    render() {
        const title = <h3>Add Expense(s)</h3>;
        const {Categories} = this.state;
        const {Expenses, isLoading} = this.state;

        if (isLoading)
            return (<div>Loading...</div>)

        let optionList =
            Categories.map((category) =>
                <option value={category.id} key={category.id}>
                    {category.name}
                </option>
            )

        let rows =
            Expenses.map(expense =>
                <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{expense.location}</td>
                    <td><Moment date={expense.expensesDate} format="YYYY/MM/DD"/></td>
                    <td>{expense.category.name}</td>
                    <td><Button size="sm" color="danger" onClick={() =>
                        this.remove(expense.id)}>Delete</Button></td>
                </tr>
            )

        return (
            <div>
                <AppNav/>
                <Container>
                    {title}

                    {/* subject name or title of category */}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="description">Title</Label>
                            <Input type="description" name="description" id="description"
                                   onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>

                        {/* category */}
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <select onChange={this.handleChange}>
                                {optionList}
                            </select>
                        </FormGroup>

                        {/* date */}
                        <FormGroup>
                            <Label for="city">Date</Label>
                            <DatePicker selected={this.state.item.expensesDate}
                                        onChange={this.handleDateChange()}/>
                        </FormGroup>

                        {/* name of location */}
                        <div className="row">
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" id="location"
                                       onChange={this.handleChange}/>
                            </FormGroup>
                        </div>

                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>
                            {''} {/* space in between save and cancel buttons */}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
                {''}

                <Container>
                    <h3>Expense List</h3>
                    <Table className='mt-4'>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th width="10%">Location</th>
                            <th>Date</th>
                            <th width="30%">Description</th>
                            <th width="10%">Action</th>
                        </tr>
                        </thead>

                        <tbody>
                        {rows}
                        </tbody>

                    </Table>
                </Container>

                }

            </div>
        );
    }
}

export default Expenses;