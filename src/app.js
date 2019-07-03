import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './less/main.less';
import AppRouter from './routers/AppRouter';
import anchorsScroll from './js/modules/module--anchorsScroll';

const Wrapper = () => {
  useEffect(() => {
    anchorsScroll({
      element: 'a',
      offset: 55, // Static for now (nudging ~ height of collapsed header)
      offsetElement: null,
      offsetNudge: 0
    });
  }, []);

  return <AppRouter />;
};
ReactDOM.render(<Wrapper />, document.getElementById('root'));
