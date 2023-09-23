import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = ({ greeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting()
      .then((response) => {
        const { greeting } = response.data;
        console.log('Random greeting:', greeting);
      })
      .catch((error) => console.error(error));
  }, [fetchRandomGreeting]);

  return <div>{greeting}</div>;
};

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

const mapDispatchToProps = {
  fetchRandomGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
