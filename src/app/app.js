import angular from 'angular';

// modules
import uiRouter from '@uirouter/angularjs';
import dragAndDrop from './common/dragAndDrop';
import ngMessages from 'angular-messages';
import ngCookies from 'angular-cookies';

// components
import appComponent from './app.component';
import cabinetComponent from './cabinet/cabinet.component';
import authComponent from './auth/auth.component';
import homeComponent from './cabinet/home/home.component';
import headerComponent from './common/header/header.component';
import signInComponent from './auth/signIn/signIn.component';
import signUpComponent from './auth/signUp/signUp.component';
import boardListComponent from './cabinet/boardList/boardList.component';
import boardComponent from './cabinet/board/board.component';

// routers
import appRouter from './app.router.js'
import cabinetRouter from './cabinet/cabinet.router';
import authRouter from './auth/auth.router';

// services
import usersService from './common/services/users.service';
import todoService from './common/services/todo.service';

// directive
import checkPasswordDirective from './auth/signUp/checkPassword.directive';
import compareToDirective from './common/compareTo/compareTo.directive';

// factory
import authChekerFactory from './common/factories/authChecker.factory';

// style
import './style/main.less';

angular.module('app', [
        uiRouter,
        dragAndDrop,
        ngMessages,
        ngCookies
    ])

    

    .factory(authChekerFactory.$name, authChekerFactory)

    .config(appRouter)
    .config(cabinetRouter)
    .config(authRouter)
    .config(function($httpProvider) {
        $httpProvider.interceptors.push(authChekerFactory.$name)
    })
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })

    .service(usersService.$name, usersService)
    .service(todoService.$name, todoService)

    .directive(checkPasswordDirective.$name, checkPasswordDirective)
    .directive(compareToDirective.$name, compareToDirective)

    .component(appComponent.$name, appComponent)
    .component(authComponent.$name, authComponent)
    .component(cabinetComponent.$name, cabinetComponent)
    .component(homeComponent.$name, homeComponent)
    .component(headerComponent.$name, headerComponent)
    .component(signUpComponent.$name, signUpComponent)
    .component(signInComponent.$name, signInComponent)
    .component(boardListComponent.$name, boardListComponent)
    .component(boardComponent.$name, boardComponent)