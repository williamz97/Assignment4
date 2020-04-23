import React, { Component } from 'react';
import Dog from '../Dog';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: []
        }
        this.loadData = this.loadData.bind(this)
    }

    loadData() {
        fetch("https://dog.ceo/api/breeds/image/random/1")
        .then(res => res.json())
        .then((data) => {
        this.setState({ dogs: data.message })
        })
    }

    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 5000)
    }
    render() {
        const dogList = this.state.dogs.map((url) => {
            return <Dog img_src={url}/>
        })
        return (
            <nav>
                <Link to="/"><h2>Back to Homepage</h2></Link>
                {dogList}
            </nav>
        );
    }
}

export default Nav;