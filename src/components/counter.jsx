import React, { Component } from 'react';

class Counter extends Component {
    state= {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement = product =>{
        this.setState({ count: this.state.count + 1});
    }

    // doHandleIncrement = () =>{
    //     this.handleIncrement({ id: 1 });
    // }
    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>no tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }
    render() {
        // return(
        //     <div>
        //         { this.state.tags.length === 0 && "Please create a new tag!" }
        //         { this.renderTags() }
        //     </div>
        // );
        let classes = this.getBadgeClasses(); 
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span className={classes}>{this.formatCount()}</span>
                <button
                    onClick={ () => this.handleIncrement(1)}
                    className="btn btn-secondary btn-sm">Increment</button>
                {/* <ul>
                    {
                        this.state.tags.map(tag => <li key={tag}> {tag} </li>)
                    }
                </ul> */}
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return  count === 0 ? 'Zero':  count;
    }
}
 
export default Counter;