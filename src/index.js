import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import Todo from "./components/todo/Todo";
// import MainLayout from "./components/cards/MainLayout";
// import Main from "./components/calculator/layout/Main";
// import CardsImages from "./components/CardsImages/CardsImages";
import {Provider} from "react-redux";
import store from "./components/redux/store";
import MainDnd from "./components/dndComponents/MainDnd";
// import '@atlaskit/css-reset';
// import MoodLayout from "./MoodMonth/layout/MoodLayout";
import MoodMonth from "./MoodMonth/MoodMonth";
import TextFieldCustom from "./TextFieldLabelLeftSide/TextFiledCustom";
import BiographyInformation from "./BiographyInformation/BiographyInformation";
import { ConfirmProvider } from 'material-ui-confirm';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
  <ConfirmProvider>
    <Provider store={store}>
    <BiographyInformation/>
  </Provider>
  </ConfirmProvider>
  ,
  document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
