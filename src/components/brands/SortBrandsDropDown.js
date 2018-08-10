import React from 'react';

class SortBrandsDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropdown: false,
      selectedName: props.sortBrandsDropDown.sortBy,
    };
  }

  toggleDropDown = () => {
    this.setState({
      toggleDropDown: !this.state.toggleDropDown,
    });
  };

  handleSorting = (index, name) => () => {
    this.setState({
      selectedName: name,
    });
    this.props.onSelectSortMethod(index);
  };

  render() {
    const { sortBrandsDropDown, selectedFilter, selectedSortValue } = this.props;
    const { selectedName, toggleDropDown } = this.state;
    return (
      <div className="l-col l-col--12 l-md-col--6 l-lg-col--4 brands-filter-sorting">
        {selectedFilter === 'allItems' && (
          <div
            className={`c-filter ${toggleDropDown && 'is-active'}`}
            onClick={this.toggleDropDown}
          >
            <button className="c-button c-button--filter js-filter-button">
              {selectedName}
              <i className="button-icon button-icon--dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11">
                  <path
                    fill="#C2A572"
                    fillRule="evenodd"
                    d="M6.90685425,33.6568542 L8.65685425,33.6568542 L8.65685425,26.6568542 L1.65685425,26.6568542 L1.65685425,28.4068542 L6.90685425,28.4068542 L6.90685425,33.6568542 Z"
                    transform="rotate(45 33.835 14.036)"
                  />
                </svg>
              </i>
            </button>
            <div className="c-filter__nav">
              <ul>
                <li
                  className={`${selectedSortValue === 1 ? 'active' : ''}`}
                  onClick={this.handleSorting(1, sortBrandsDropDown.sortByNormal)}
                >
                  {sortBrandsDropDown.sortByNormal}
                </li>
                <li
                  className={`${selectedSortValue === 2 ? 'active' : ''}`}
                  onClick={this.handleSorting(2, sortBrandsDropDown.sortByAz)}
                >
                  {sortBrandsDropDown.sortByAz}
                </li>
                <li
                  className={`${selectedSortValue === 3 ? 'active' : ''}`}
                  onClick={this.handleSorting(3, sortBrandsDropDown.sortByBrandType)}
                >
                  {sortBrandsDropDown.sortByBrandType}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SortBrandsDropDown;
