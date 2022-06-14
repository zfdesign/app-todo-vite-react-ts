Not your regular TODO App!
----------

### Vite, React, TypeScript, Cypress

This is a playground project exploring Vite, React, TypeScript TODO app solution. Time boxing the solution to a little longer than couple of hours. 

It uses Vite as a development setup, Vite is a _fast and lean_ Developer build tool, flow, utilising the latest browser support for ESModules. It also produces a bundle on `npm run build` for production. See more at: https://vitejs.dev/

React used as it is a popular framework, however some parts maybe incomplete. There is no persistent store, code could be improved (as always), by breaking down to smaller components for example and following `agreed naming`, folder structure etc. 

There is no much emphasis on styling. Possible solutions can be project specific, or adopting third party solution e.g Styles Components, Material UI etc. 

Cypress has a lot of popularity amongst developers, scoring high in the  ‘The State of JS’ surveys. Vite has been topping up the scores too. Assumption is that happy developers deliver faster due to speed and uncomplicated configuration. Developers can focus on delivering on the application logic. 

As mentioned above more could be done on presentation, structuring the project, breaking down the components to smaller, more manageable pieces. 
More complete test coverage e.g. unit, devices, performance, visual regression, accessibility etc.
Integrate with a service to provide the data persistence. 
Added functionality such as editing, organising and sorting the TO DO items, adding completion date, notification reminders etc. to make a more complete solution. 

### Note on tests

Running End to End tests: `yarn test` should be just enough. However if for some reason that does not work, please be aware that `yarn dev` may need to be run in a separate Terminal window, along side `yarn test:e2e`. 

Once Cypress window has loaded, select `E2E Testing`, optionally select browser and follow up with `Start E2E testing in ...` button. In the Browser select Specs and `app.cy.js` file on the page. 

When running `yarn test:ci` cypress will run in the Terminal (CommandLine) record the session video that can be found in `./cypress/videos/`.