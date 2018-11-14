import angular from 'angular';

import '@uirouter/angularjs';

import './style/main.less';

import appComponent from './app.component';
import cabinetComponent from './cabinet/cabinet.component';
import loginComponent from './login/login.component';
import homeComponent from './cabinet/home/home.component';
import headerComponent from './common/header/header.component';

import router from './app.router';

const MODULE_NAME = 'app';
export default MODULE_NAME;

angular.module(MODULE_NAME, ['ui.router'])

    .config(router)

    .component(appComponent.$name, appComponent)
    .component(loginComponent.$name, loginComponent)
    .component(cabinetComponent.$name, cabinetComponent)
    .component(homeComponent.$name, homeComponent)
    .component(headerComponent.$name, headerComponent)