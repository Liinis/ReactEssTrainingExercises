//exercise 02_02

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

//exercise 02_03
/*
import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

const title = React.createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'Hello World'
)

ReactDOM.render(
    title,
    document.getElementById('root')
)*/

// exercise 02_04
//import React, { Component } from 'react'
//import { render }from 'react-dom'

/*var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}*/

/*const title = React.createElement(
    'ul',
    {id: 'title', className: 'header', style: style},
    React.createElement(
        'li',
        {},
        'item on our list'
    )
)
*/

/*
ReactDOM.render(
    <div style={style}>
        <h1 id="heading-element">Hello world</h1>
        <p>We're glad you're here!</p>
    </div>,
    
    document.getElementById('root')
)*/

// exercise 3_01
/*
class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Everyone</h1>
            </div>
        )

    }
}

ReactDOM.render(<Message />, document.getElementById('root')
)
*/
//exercise 3_03
/*
let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}
const getPercent = decimal => {         //exrecise 3_04
    return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal)
}

const SkiDayCounter = ({total, powder, backcountry, goal}) => {    //exercise 3_05
    return (
        <section>
        <div>
       <p>Total Days: {total}</p>
       </div>
       <div>
       <p>Powder Days: {powder}</p>
       </div>
       <div>
       <p>Backcountry Days: {backcountry}</p>
       </div>
       <div>
       <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
       </div>
   </section>
    )
} 

render(
    <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>, 
    document.getElementById('root')
)

//exercise 3_02

/*
class Message extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{color: this.props.color}}>
                {this.props.msg}
                </h1>
                <p>I'll check back in {this.props.minutes} minutes</p>
            </div>
        )

    }
}

ReactDOM.render(
<Message color="blue" msg="how are you?" minutes={5}/>, 
document.getElementById('root')
)
*/

//exercise 4_01

import React from 'react'
import { render } from 'react-dom'
//import PropTypes from 'prop-types' //exercise 05_06
import Library from './Library'


let bookList = [    // exercise 04_02
    {"title": "the sun also", "author": "Ernest Hemingway", "pages": 320},
    {"title": "madagaskar", "author": "Ernest", "pages": 26},
    {"title": "PIPPI", "author": "Astrid Lindgren", "pages": 320},
    {"title": "Emil i lönneberga", "author": "Astrid Lindgren", "pages": 320}
]


/*
const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes': 'no'}</p>
        </section>
    )
}

//exercise 4_6
const Hiring = () => 
<div>
    <p>The library is hiring. Go to www.library.com/jobs for more</p>
</div>

const NotHiring = () =>
<div>
    <p>The library is not hiring. Check back later for more info.</p>
</div>

//const Library = ({books}) => {
    //exercise 4_03
/*class Library extends React.Component {

    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000 }
        ]
    }

    state = { 
        open: true,
        freeBookmark: false,        //exercise 4_05
        hiring: true,
        data: [],                  //exercise 5_2
        loading: false
    }
    
    componentDidMount() {      //exercise5_1
        //console.log("The component is now mounted!")
        this.setState({loading: true})  //exercise 5_2
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate() {
        console.log("The component just updated")
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render () {
        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? "loading..."
                    : <div> 
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the Week!</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100}/>
                                    </div>
                            )
                        })}
                    </div>
                        }
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => 
                    <Book 
                    key={i}
                    title={book.title} 
                    author={book.author} 
                    pages={book.pages}
                    freeBookmark={this.state.freeBookmark}/>
                )}
                
            </div>
        )
    }

    }
	
Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}
*/
render(
		<Library books={bookList}/>,
	document.getElementById('root')
)



//exercise 5_04
/*
class FavouriteColorForm extends React.Component {
    state = { value: ''}

    newColor = e =>
    this.setState({ value: e.target.value })

    submit = e => {
        console.log( `New Color: $this.state.value}`)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favourite Color:
                    <input 
                    type="color" 
                    onChange={this.newColor}/>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}
render(
    <FavouriteColorForm />,
document.getElementById('root')
)
*/