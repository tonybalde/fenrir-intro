[< Back to Overview](../../README.md)

# Lesson 6.1: AJAX Basics

This assignment will teach you the following:

- AJAX Concepts
- How to use JavaScript to make AJAX requests
- Use AJAX callbacks to respond to server responses
- How to process JSON with JavaScript

---

## Instructions

### Getting Started:

Merge your pull request from the previous lesson (if you haven't already):

[View tutorial](../common/how-to-merge.md)


Checkout your main branch and pull changes:

    git checkout main
    git pull

Create a new local branch to work on separate from the `main` branch:

    git checkout -b lesson-6-1

Now, open the project directory in your code editor and continue to the next section.

### Task List:

#### Add Project Section

- [x] Open your `index.html` file
- [x] Below the "Skills" section, add a new `<section>` element with an `id` attribute of value "projects"
- [x] Inside that element, create a level-two heading that says "Projects"
- [x] After the heading, add an empty unordered list (`<ul>`) element
- [x] Save and refresh your browser

#### Fetch GitHub Repositories

- [x] Open your `index.js` file and start at the bottom
- [x] Create a new `XMLHttpRequest` object and store it in a variable named `githubRequest`
- [x] Call the `open` method on your `githubRequest` object and pass the necessary arguments
  - [x] 1. `method`: the method of your request (in this case, "GET")
  - [x] 2. `url`: the url of your request (in this case, "https://api.github.com/users/{GITHUB_USERNAME}/repos")
- [x] Finally, call the `send` method on your `githubRequest` object to actually send the request
- [x] Save and refresh your browser
  - You should see your XHR request in the DevTools "Network" tab (see screenshot)

<img src="..assets/section-6/../../../assets/section-6/lesson-6-1-xhr.png" alt="XHR Request in Network Tab" width="700" />

> Note: at this point, you have made a request to GitHub for your public repository data but nothing is being done with the data that is returned from the server

#### Handle Response from Server

- [x] Below the last line of code you just wrote, add a "load" event listener on your `githubRequest` object and pass the necessary arguments
  - [x] 1. `event`: the event that is being handled (in this case, "load")
  - [x] 2. `callback`: the function that runs when this event occurs
- [x] Inside the callback function you just created, parse the response and store it in a variable named `repositories`
  - [x] hint: `JSON.parse(this.response)`
- [x] Log the value of `repositories` in the console
- [x] Save and refresh your browser
  - You should see your list of GitHub repositories logged in the console

> Note: at this point, you have the response data but nothing is being displayed on the webpage itself

#### Display Repositories in List

- [x] Start below the line of code you just wrote
- [x] Using "DOM Selection", select the #projects section by `id` and store it in a variable named `projectSection`
- [x] Using "DOM Selection", query the `projectSection` (instead of the entire `document`) to find the `<ul>` element and store it in a variable named `projectList`
- [x] Create a `for` loop to iterate over your `repositories` Array, starting at index 0
- [x] Inside the loop, create a new list item (`li`) element and store it in a variable named `project`
  - hint: `createElement` method
- [x] On the next line, set the inner text of your `project` variable to the current Array element's `name` property
  - hint: access the Array element using bracket notation
- [x] On the next line, append the `project` element to the `projectList` element
  - hint: `appendChild` method
- Save and refresh your browser
  - You should see your list of repositories beneath the "Projects" heading

#### Stretch Goals

These tasks are **entirely optional**, but if you'd like a challenge then do your best to complete each item.

- [x] (Optional) Transform your repository names into `<a>` tags that link to GitHub (hint: `html_url` property)
- [x] (Optional) Display additional information about your repositories (i.e. description, date, etc.)
- [x] (Optional) Customize the styling of your "Projects" section list

### Final Step:

Check the status of your local repository to double-check the changes you made:

    git status

Stage the file(s) that you edited:

    git add .

Check the status again and notice that the changes from before are now staged:

    git status

Create a commit for the changes you made and add a message describing the changes you made:

> Note: Replace `<message>` with your message

    git commit -m "<message>"

Push your commit to the remote repository (visible in GitHub):

    git push

Check the log to make sure your commit has been published:

    git log --oneline

Create a pull request and submit:

[View instructions](../common/how-to-pull-request.md)

---

Created by [Code the Dream](https://www.codethedream.org)
