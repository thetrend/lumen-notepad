<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'users'], function () use ($router) {
        $router->post('/login', ['uses' => 'AuthController@login']);
        $router->get('/user', ['uses' => 'UserController@getUser']);
    });
    $router->group(['prefix' => 'notes'], function () use ($router) {
        $router->get('/', ['uses' => 'NoteController@getNotes']);
        $router->get('/note/{id}', ['uses' => 'NoteController@getNote']);
        $router->delete('/note/{id}', ['uses' => 'NoteController@delete']);
        $router->put('/note/{id}', ['uses' => 'NoteController@edit']);
        $router->post('/create', ['uses' => 'NoteController@create']);
    });
});

$router->get('/', function () {
    return view('ui');
});

$router->get('/{any}', function () {
    return view('ui');
});