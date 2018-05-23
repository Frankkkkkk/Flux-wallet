import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

const CHANGE='CHANGE';
let _walletState = [];

class WalletStore extends EventEmitter{

  constructor(){
    super();

    //Registers action handler with the Dispatcher.
    Dispatcher.register(this._registerToActions.bind(this));
  }

  //Switches over the action's type when an action is dispatched.
  _registerToActions(action){
    switch(action.actionType){
      case ActionTypes.ADD_NEW_ITEM:
      this._addNewItem(action.payload);
      break;
    }
  }

  //Adds a new item to the list and emits a CHANGED event.
  _addNewItem(item){
    item.id = _walletState.length;
    _walletState.push(item);
    this.emit(CHANGE);
  }

  //Returns thr current store's state.
  getAllItems(){
    return _walletState;
  }

  //Calculate the total budget.
  getTotalBudget(){
    let totalBudget = 0;

    _walletState.forEach((item)=>{
      totalBudget += parseFloat(item.amount);
    });
    return totalBudget;
  }

  //Hooks aReact component's callback to the CHANGED event.
  addChangeListener(callback){
    this.on(CHANGE,callback);
  }

  //Removes the listener from the changed event.
  removeChangeListener(callback){
    this.removelistener(CHANGE,callback);
  }
}

export default new WalletStore();
