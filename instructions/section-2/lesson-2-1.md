[< Back to Overview](../../README.md)

# Lesson 2.1: Introduction to Git

This assignment will teach you the following:

- Repositories
- Commits
- History
- GitHub

---

## Instructions

### Getting Started:

Note:  The images show forking of eridanus-intro.  Please use fenrir-repo for this class.  

Fork this GitHub repository to create your own working version:

![Fork Assignment: Step 1](../assets/fork-assignment/fork-step-1.png)

On the new screen be sure your GitHub username is selected then click the green Create Fork button:

![Fork Assignment: Step 2](../assets/fork-assignment/fork-step-2.png)

You should be directed to your forked GitHub repository.  You'll know it's yours because your GitHub username will be in the top left instead of Code-the-Dream-School:

![Fork Assignment: Step 3](../assets/fork-assignment/fork-step-3.png)

Click the "Code" button (1) make sure you have HTTPS selected (2) and copy the URL (3) for your repository:

![Fork Assignment: Step 4](../assets/fork-assignment/fork-step-4.png)

Clone this repository so that the code is available on your local machine:

> Hint: Run this command from the directory where you want to store your code

> Note: Replace `<url>` with the URL you copied in the previous step

    git clone <url>

Navigate to the directory you just cloned in your terminal:

    cd intro-to-programming

Create a new local branch to work on separate from the `main` branch:

    git checkout -b lesson-2-1

Now, open the project directory in your code editor and continue to the next section.

### Task List:

- [x] Create a file called `index.html`
- [x] Type your name into the file and save

### Final Step:

Check the status of your local repository to double-check the changes you made:

    git status

Stage the file(s) that you edited:

    git add .

Check the status again and notice that the changes from before are now staged:

    git status

Create a commit for the changes you made and add a message describing the changes you made:

> Note: Replace `<message>` with your message (example - "created index.html file")

    git commit -m "<message>"

Push your commit to the remote repository (visible in GitHub):

    git push

Check the log to make sure your commit has been published:

    git log --oneline

Create a pull request and submit:

[View instructions](../common/how-to-pull-request.md)

---

Created by [Code the Dream](https://www.codethedream.org)
