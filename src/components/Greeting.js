import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingData = useSelector((state) => state.greetings);

  const handleClick = () => {
    dispatch(fetchGreeting());
  };

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <section>
      <h3>Hello react app</h3>
      <p>
        Greetings:
        {greetingData}
      </p>
      <button type="button" className="helloBtn" onClick={handleClick}>Get Greeting Randomnly</button>
    </section>
  );
};

export default Greeting;
