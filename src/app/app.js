import angular from 'angular';

// modules
import uiRouter from '@uirouter/angularjs';
import dragAndDrop from './common/dragAndDrop';

// components
import appComponent from './app.component';
import cabinetComponent from './cabinet/cabinet.component';
import authComponent from './auth/auth.component';
import homeComponent from './cabinet/home/home.component';
import headerComponent from './common/header/header.component';
import signInComponent from './auth/signIn/signIn.component';
import signUpComponent from './auth/signUp/signUp.component';
import boardListComponent from './cabinet/boardList/boardList.component';

// routers
import appRouter from './app.router.js'
import cabinetRouter from './cabinet/cabinet.router';
import authRouter from './auth/auth.router';

// services
import authService from './common/services/auth.service';

// directive
import checkPasswordDirective from './auth/signUp/checkPassword.directive';

// style
import './style/main.less';


angular.module('app', [
        uiRouter,
        dragAndDrop
    ])

    .config(appRouter)
    .config(cabinetRouter)
    .config(authRouter)
    // .config(function($locationProvider) {
    //     $locationProvider.html5Mode(true);
    // })

    .service(authService.$name, authService)

    .directive(checkPasswordDirective.$name, checkPasswordDirective)

    .component(appComponent.$name, appComponent)
    .component(authComponent.$name, authComponent)
    .component(cabinetComponent.$name, cabinetComponent)
    .component(homeComponent.$name, homeComponent)
    .component(headerComponent.$name, headerComponent)
    .component(signUpComponent.$name, signUpComponent)
    .component(signInComponent.$name, signInComponent)
    .component(boardListComponent.$name, boardListComponent)