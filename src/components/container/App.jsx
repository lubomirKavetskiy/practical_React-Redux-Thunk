import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {CharactersList} from '../presentational/CharactersList.jsx';
import {fetchCharacters} from '../../actions/index.js';

const App = ({isLoading, characters, getCharacters}) => {
  useEffect(() => {
    getCharacters();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return characters.length ? (
    <div>
      <h2>The list below is being pulled via the usual http external api.</h2>
      <CharactersList data={characters} />
    </div>
  ) : null;
};

//(state)=>({isLoading: state.isLoading, characters: state.characters})
const mapStateToProps = ({isLoading, characters}) => ({
  isLoading,
  characters,
});

const mapDispatchToProps = dispatch => ({
  getCharacters: () => {
    dispatch(fetchCharacters());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
