import angular from 'angular';

import '@uirouter/angularjs';

import './style/main.less';

import appComponent from './app.component';
import cabinetComponent from './cabinet/cabinet.component';
import loginComponent from './login/login.component';
import homeComponent from './cabinet/home/home.component';
import headerComponent from './common/header/header.component';
import signInComponent from './login/signIn/signIn.component';
import signUpComponent from './login/signUp/signUp.component';

import appRouter from './app.router.js'
import cabinetRouter from './cabinet/cabinet.router';
import loginRouter from './login/login.router';

import loginService from './common/services/login.service';

import checkPasswordDirective from './login/signUp/checkPassword.directive';

const MODULE_NAME = 'app';
export default MODULE_NAME;

import './style/main.less';


angular.module(MODULE_NAME, ['ui.router'])

    .config(appRouter)
    .config(cabinetRouter)
    .config(loginRouter)

    .service(loginService.$name, loginService)

    .directive(checkPasswordDirective.$name, checkPasswordDirective)

    .component(appComponent.$name, appComponent)
    .component(loginComponent.$name, loginComponent)
    .component(cabinetComponent.$name, cabinetComponent)
    .component(homeComponent.$name, homeComponent)
    .component(headerComponent.$name, headerComponent)
    .component(signUpComponent.$name, signUpComponent)
    .component(signInComponent.$name, signInComponent)