# Lumen Notepad

This is a simple note-taking app built with [Laravel Lumen](https://lumen.laravel.com) and [React](https://reactjs.org). [Tailwind CSS](https://tailwindcss.com) makes it pretty.

## Demo Link
See the demo here: [Heroku](https://calm-depths-05469.herokuapp.com/)

## How to run the app
### Local Testing Requirements
- PHP 7.4+
- [Composer](https://getcomposer.org) installed
- SQLite Extension enabled in **php.ini**
- NPM to compile the frontend files

### Finally, the instruction manual!
1. Clone this repo and `cd` to the newly downloaded directory
2. Create a new `database.sqlite` file inside `database/`
3. Copy or rename `.env.example` to `.env`
4. Run `$ php composer install` to install your Composer (PHP) dependencies
5. Then run `$ php artisan jwt:secret` to populate your JWT Secret Key which is needed for authentication
6. Run `$ php artisan migrate` to create your pre-defined tables (located in `database/migrations`)
7. Run `$ php artisan db:seed` to seed the database with the given user credentials (the password is already hashed)
8. Run `$ npx mix watch` -- this will compile your npm dependencies
9. In another terminal, run `$ php -S localhost:80 -t public`
10. Open up localhost in your favorite browser
11. username: **test@test.com** / password: **$sh4rpspr1nG$**

Play around, try fake login credentials to view the authentication error.

Create a note or edit an existing note, and delete any notes you decide to discard.

😊

## License
This is licensed AS IS under the MIT License.