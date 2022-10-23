import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchBar,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.search.trim()) {
      toast.error('Type something to find');
      return;
    }
    this.props.onSubmit(this.state.search);
  };
  render() {
    const { search } = this.state;
    return (
      <header>
        <SearchBar>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              type="text"
              autoComplete="off"
              onChange={this.handleChange}
              value={search}
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchBar>
      </header>
    );
  }
}
// SearchBar.PropTypes = { onSubmit: PropTypes.func.isRequired };
