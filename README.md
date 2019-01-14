# README

#### Make sure you have the following (it should be safe to get the latest versions of all of the following):
1. `Ruby ~v2.5`
2. `npm > 5.2` (mine is 6.4.1)
3. yarn

#### To start the server run the following commands then go to localhost:3000
1. `rails s -p 3001` in `/triphelp`. This runs the server on port 3001 vs the default 3000
2. `yarn start` in `/triphelp/client` (or `yarn --cwd client start` in `/triphelp`)

#### We are using rails in api mode for the backend and react for the frontend. Here are the examples I based the setup on:
1. <https://x-team.com/blog/get-in-full-stack-shape-with-rails-5-1-webpacker-and-reactjs/>
2. <https://blog.heroku.com/a-rock-solid-modern-web-stack>

#### Environment
1. All the views is handled in the `/client` directory (react). 
2. The routing is handled in `/client/src/App.js`
3. All the backend should be handled the normal rails way. Api calls should be made through rails and served by api to the react frontend
4. Here is the rails guide just in case <https://guides.rubyonrails.org/getting_started.html>
5. We are using postgres for the db (because thats what heroku likes)

#### We use semantic ui (we are using this for styling instead of bootstrap)
1. https://react.semantic-ui.com/

#### We are going to use 2 spaces instead of 4 spaces/tabs
```
if using sublime, you can change default spacing settings for each file type by going to preferences -> settings - syntax specific
{
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "detect_indentation": false
}
```
