import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { embed } from './reducer';

const store = createStore(embed, applyMiddleware(thunk));

export default store