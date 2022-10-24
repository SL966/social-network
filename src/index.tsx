import './index.css';
import {renderTree} from "./renderTree";
import store from "./redux/redux-store";

store.subscribe(() => {
    debugger;
    console.log('store subscribe')
    renderTree();
});
renderTree();








