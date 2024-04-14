<h1 style="font-weight: 900"> Google Books API Search </h1>

Through using the Google Books API v1, users are to search through the library and use filers such as 'title', 'author', 'category', etc. to find a book to read. 

<h1 style="font-weight: 900"> Screenshots </h1>

## 1. 

![Beautiful.....](./assets/morsecode.png)

## What did I use to create it?

This project uses:

-   React
-   HTML
-   SCSS

## Features of the Project:

-  Users are able to search for books and other resources with a variety of filters ('title', 'author', 'category', etc.)
-  If users are not interested in spending money, there is a 'free' filter.
-  Or, if users want to avoid those kind of materials, they can opt to search for 'paid' books and other high quality materials. 
-  When users cick on a title, they are able to get a more detailed overview of the resource.
-  Each expanded view provides users with a detailed description, general product information, history of the author and reviews of the title (currently, a lot of the data that is being used is AI generated and simply a placeholder until legitimate data can be obtained).
-  The expanded view is dynamic and depending on the salability of the material, it will either be available for purchase, a sample will be available or - for free resources - will be made available to the user. 

<h1 style="font-weight: 900"> Here are some of the lessons I learnt:</h1>

### Using React:

### Hooks (useState, useEffect, useRef):

-  This was my first real project in React. Using the hooks was a great experience and opportunity for me to better understand how they are used and the utility of them. It feels there is a certain 'React' way of thinking and approaching projects. This allowed me to further get into - and understand - that mindset. 
  
### Components:

- Similarly to previous projects, in the beginning, my approach wasn't very flexible or verbose. For example, I would create highly specific components that could never be used again. However, towards the end of the project, I was starting to become more comfortable with creating more dynamic components that could be used throughout even other projects, if required. (e.g. I designed a custom button component that would either be a real button or a link (an anchor tag element) that would appear as a button).

### Context:

- As we learnt more about React, prop drilling became a problem for me. It was hard to keep track of props and often cluttered other intermediate components - unnecessarily. After learning context, it made it a lot easier to utilise props that were required in a variety of components aross the app. (e.g. I created a Search context that allowed for me to track whether a search had been initiated or not, and was able to share the search term across components throughout the app)

## What I want to include in the future:

## Have more functionality:

-   [ ] Allow users to create lists of books (wishlists &/or 'to-read' lists)
-   [ ] Utilise real data to provide reviews on the materials and their authors 
-   [ ] Find a way to provide users with a sample of the resource (links provide by the API were often dead)
-   [ ] Utilise more animation and 3D models (however, it could interrput with the UI)

## Thank You!

Thank you for taking the time to look at this project. I really hope you enjoy it.
Feel free to reach out and ask any questions.

[Tim Broderick]
