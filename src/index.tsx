import './index.css';
import {renderTree} from "./renderTree";
import {store} from "./redux/state";

store._subscribe(renderTree)
renderTree();





