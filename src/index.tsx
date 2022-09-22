import React from 'react';
import './index.css';
import {renderTree} from "./renderTree";
import {store} from "./state";

store._subscribe(renderTree)
renderTree();





