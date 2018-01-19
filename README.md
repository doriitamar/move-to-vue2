# AngularJS :arrow_right: Vue2
A nice way to move from AngularJS to Vue2. This repository features a five-step exercise showing you the ropes of [Vue2](vuejs.org), [vue-router](https://router.vuejs.org/) and [vuex](vuex.vuejs.org) with references for videos and relevant documentation while comparing Vue's features to Angular's so the transition from AngularJS to Vue will be as fast and effective as possible.
This exercise won't make you a Vue hero, but it'll get you started and make you feel comfy diving into Vue's ecosystem.

Table of contents:



----
## Getting Started
Nothing special. Make sure you have either `npm` or `yarn` installed. (`npm` comes bundled with [Node.js](https://nodejs.org/en/)) and the [Vue Devtools](https://github.com/vuejs/vue-devtools). All of the exersices were meant to be backend agnostic and you can run them on every backend of choice, my examples are using Webpack's dev server, which is super easy to deal with. So, whenever you're ready, jump to the first step!

## Exercise #1: Meet Convoyage
Before starting the exercise, please [watch Laracasts' videos, episodes 1-6](laracasts.com/series/learn-vue-2-step-by-step/episodes/1) and read [The essentials]() exculiding Components.

**Convoyage** tracks and logs freight convoys accross the country. It offers a nice-simple table view for the dispatcher at the office. This is a rough idea of what it would look like:
![](https://image.prntscr.com/image/okv4OFMRSJerlZsMaEI07w.png)

**Things you get:**
+ [convoies.json]() - An array of convoies.
+ [convoyProps.json]() - An array of convoy properties (To be displayed in the description box)
+ [convoyBrief.json]() - An array of brief convoy properties (To be displayed in the table)

**Features that should be implemented:**
+ A table view displaying convoys brief information (currently hardcoded)
+ Once clicking on a convoy - a description box should appear, displaying all of the other convoy details.
+ Filtering table rows
+ Sorting table by column, reversing the order when clicking again on the same column.
+ If any convoy is `inMotion` then it's row will be painted yellow-ish, and if it has `arrived` paint the row with green-ish colors.

**Notes and insights:**
+ You don't have to load the given JSONs asyncly as for now, just copy their values and use them as hardcoded variables.
+ For this exercise, think of the Vue instance as your Angular controller, and it's `data` property as your `$scope`.
+ Many of angular built-in directives such as `ng-class`, `ng-click` etc. have their Vue equivalent - with `bind`ing attributes and `on` for catching events. Use the shorthands!
+ Read about `v-for`, it's essentially an `ng-repeat`.
+ Vue doesn't have `orderBy` or `filter` in `v-for` like angular. Think how you can take advantage of the `computed` properties in order to implement the filter and sorting features.
+ `v-model` is an `ng-model` equivalent and `v-if` is `ng-if`, I hope you get the hang of it.

Good luck!
If you wish to see my "solution" you can `checkout first-exrc` :smile:

----
## Exercise #2: Components Refactor
So the last exercise was a bit angular-ish. Now you'll be introduced to Vue's powerful component system by watching [episodes 7-16](laracasts.com/series/learn-vue-2-step-by-step/episodes/1) and by reading the [Components](https://vuejs.org/v2/guide/components.html) section in the official documentation.


**Things to be done:**
+ Refactor the last exercise so you'll have the following component tree:
  + A Wrapper Component `App.vue`
    + A navbar component
    + A _hero_/_jumbotron_ [functional component]() (why?)
    + A convoy table component
    + A convoy description component
+ The convoy table and description should communicate in order to acheive the same functionality as before.

**Notes and insights:**
+ You can use vue-cli's `simple-webpack` template to get things going fast.
+ Refactor your code using the `.vue` component template.
+ Use the `name` property when defining a new component, it'll be much easier to track and debug
+ Every component has it's own "scope" with it's own data.
+ camelCase vs kebab-case is like in angular directives.
+ Remeber that `data` must be a function! (It can return an object)
+ The parent component passing props, and the child component is emitting events. Props cannot be directly mutated.
+ Binding expressions to props is easy, using `v-bind`.

You can `checkout second-exrc` for my solution.

----

## Exercise #3: Axios
This is a quick exercise, designed to make things be a little closer to what they would be in real life. We would now want to load the JSON data asyncly - using `axios`.
So please, watch [episodes 17 - 21](laracasts.com/series/learn-vue-2-step-by-step/episodes/1) (22-23 are optional, if you know webpack just skip them) and make sure you've read and familiar with the [lifecycle hooks](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks). You'll be using some.


**Things to be done:**
+ Refactor those hardcoded JSONs. `GET` them with axios from your backend - so they'll be loaded once the App component is loaded.
+ Add a Clock on the navbar which initially gets the current time from [World Clock API](http://worldclockapi.com/api/json/utc/now) and updates it every second.(Have I heard about a clock component?)

![](https://image.prntscr.com/image/wIlPWIzjRrymV-nsCrpE_Q.png)
<center> Just a simple clock </center>


**Notes and insights:**
+ Webpack's dev server serves all files, so you can just `GET` them in axios!
+ Unlike angular, Vue doesn't have it's own `$http` so we're using third party libraries. You can implement those AJAX requests in vanilla javascript if you would like, but axios gives a cleaner experince.
+ Unlike angular directives, there are handful of hooks we can take advantage of in the initialization process of the component. Use them to load things!

---

## Exercise 4: Routing
Watch [episodes 24-29](laracasts.com/series/learn-vue-2-step-by-step/episodes/1) and take a look at the [vue-router](https://router.vuejs.org/) documentation. We won't dive into this, but instead, it'll give you a general idea of how basic routing is implemented in Vue and let you explore all of the neat features of vue-router.

**Things to be done:**
+ Make a layout component, in which the `router-view` will live
+ Make a route for the table view
+ Make a route for a new Map view (which should'nt be actually a map, just another view)


**Notes and insights:**
+ `router-view` is much like `ng-view`
+ Unlike angular, you can have multiple (named) `router-view`s and even nested `router-views` how amazing is that? huh?
+ Each route is linked to a component, usually a page component but can be any component.
+ You can get information about the routing using `$route` defiend in every component (It's more or less like the `$location` service in angular!)
+ Use `<router-link to="">` instead of the traditional `<a href="">` to avoid routing bugs


---

## Exercise 5: Shared State
Finish watching [Laracast's videos](laracasts.com/series/learn-vue-2-step-by-step/episodes/1) and take a look at the [vuex](https://vuex.vuejs.org/) documentation. You can read it all, it's not that long at all. but, more specifically, read up until "App Structure". It'll also get you going, but make sure you understand the concpets of shared state and know what are mutations, actions and getters.

**Things to be done:**
+ Put all convoy deata on the shared state:
  + It means that they'll have mutation methods (like setters) and load actions.
  + I dont really want to enforce any implementation so I don't get specific but make sure to put only shared component data on the state, private properties such as the sort key of the table should'nt be on the scope!
+ Add a "Dispatch new convoy" page, where there will be a form and once submitted, the new convoy will be added to the state (`addConvoy` mutation?)

**Notes and insights:**
+ Read about modules in the vuex documentation for larger projects implementations
+ Shared state makes it much easier to transmit data between any components.


---

# Summary
I hope that those simple exercises made you dive into Vue waters. You'll get comfy using the documentation and ecosystem. 

---

# Contribution
Please, feel free to translate the guide and exercises to your own language, find bugs, change exercises or anything else, I'll be glad!

