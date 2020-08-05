import React, {Component} from 'react';
import AppNav from "./AppNav";

class Category extends Component {
    state = {
        isLoading: true,
        Categories: [] //creating an array of categories
    }

    //sync - send a request then wait for the response
    //async - no need to wait if request is sent
    async componentDidMount() {
        const response = await fetch('/api/categories')
        const body = await response.json();
        this.setState({Categories: body, isLoading: false});
    }

    render() {
        const {Categories, isLoading} = this.state;
        if (isLoading)
            return (<div>Loading...</div>)

        return (
            <div>
                <AppNav/>
                <h2>Categories</h2>
                {
                    //looping through arrayed category
                    Categories.map(category =>
                        <div id={category.id}>
                            {category.name}
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Category;