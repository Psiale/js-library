# 🤟🏽🎸 Book Library - Javascript

This project is part of a series of projects to be completed by students of [Microverse](https://www.microverse.org/).

This project focuses on practicing our gained knowledge in Rails Forms and Helpers.

## 💼 The Project Brief

The specifications and the guide to the project can be found The Odin Project's ['Bare Metal Forms and Helpers'](https://www.theodinproject.com/courses/ruby-on-rails/lessons/forms) page.

This project sees us create a simple site where users can be created and edited. The 'new' user page features a basic form which (over various iterations, finally) uses the form_for Rails helper. Fields for username, email, password and password confirmation, along with presence validation exist for each field.

In addition, there is an edit page which utilises the same fields but a different method (put) in order to edit the users in the database.

> N.B. This page only features a 'new' and an 'edit' page. As it features the correct page redirects as a normal website should have but no subsequent 'show' or 'index' page, advanced past the 'new' or 'edit' pages will (and should!) result in error messages.

## ⚙️ Technologies & Languages Used

- Ruby 2.6.5
- Ruby on Rails 6.0.2.1
- Rubocop 0.79.0
- Stickler CI

## 🏗️ Setup & Usage

### Setup
Using this project should be fairly straight forward. There are however some prerequisites for your system in order to run this program:
 - You must have Ruby installed. Don't know if you have it installed or how to install it? [Follow this guide](https://www.ruby-lang.org/en/documentation/installation/)
 - You must have the Ruby on Rails gem installed. To install, simply run `gem install rails` in your terminal or enter `rails -v` to verify if it is installed already. [Need help? Head here.](http://railsapps.github.io/installing-rails.html)
 - Once you have the above sorted, `cd` into this repository's directory and enter the following into your terminal:
  
        bundle install
- Check that the previous step completed without any major errors and you should be good to go!

### Usage
As this project is limited in scope there are only a couple of things to do!
  - Enter `localhost:3000/users/new` into your brower to create a new user
  - Enter `localhost:3000/users/edit` into your brower to edit a new user

Additionally you can test out that the validations are working by not completing any of the form's fields. The full error messages should be displayed to you stating the missing fields.

## 🕺🏽 Contributions, Issues & Forking

If you have any issues setting up the project or you come across any unintended bugs or problems, please do submit an issue to the [Form and Helper](https://github.com/Qoosim/Form_and_Helper/issues) page.

If you want to make your own changes, modifications or improvements to our project, go ahead and Fork it!
1. [Fork it](https://github.com/Qoosim/Form_and_Helper/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name])
5. Create a new Pull Request

## 👨🏽‍💻 💂🏽‍♂️ Creators



Rory Hellier - [GitHub](https://github.com/Rhelli)

## 🔥 Show Your Support

Give a ⭐️ if you like this project!