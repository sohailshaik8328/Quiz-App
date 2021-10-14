import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: null };
  }
  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((categories) => {
        this.setState({ categories: categories.trivia_categories });
      });
  }
  render() {
    return (
      <>
        {this.state.categories ? (
          <section className="p-20 w-5/6 mx-auto">
            <h2 className="text-center text-3xl font-bold mb-10">Select Category</h2>
            <div className="mx-auto flex flex-wrap">
              {this.state.categories.map((category) => {
                return (
                  <button
                    onClick={(event) => {
                      this.props.handleAddCategory(event, category);
                    }}
                    className={
                      this.props.category === category
                        ? 'px-3 py-2 rounded-md text-white bg-red-400 mb-5 mx-2 font-bold hover:bg-green-600'
                        : 'px-3 py-2 rounded-md text-white bg-green-600 mb-5 mx-2 font-bold hover:bg-red-400'
                    }
                    key={category.id}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Category;
