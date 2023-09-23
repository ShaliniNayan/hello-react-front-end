import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingsThunk } from '../redux/slices/greetingsSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsThunk());
  }, [dispatch]);

  return (
    <>
      <h1>Hey</h1>
      <p>{greeting}</p>
    </>
  );
};

export default Greeting;
