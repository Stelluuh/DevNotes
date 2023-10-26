# Collaborating using Git and Gihub | Branches, Pull Requests, Merging vs Rebasing:

## Branching in Git/Github
- If project has many features, you should create a branch for each contained feature. These are merged into the main branch once your changes are finalized.

### Create a branch

Currently, your github page should only have a main branch:
![Alt text](<images/main github page.png>)

```git branch``` - allows you to see what current branch you are on
![Alt text](<images/git branch.png>)

```git checkout -b branch-name``` - allows you to create a new branch in the same repository
![Alt text](<images/git checkout -b.png>)
- from here you can add files and make changes to the files. Once that is done, you can use ```git add . ``` and ```git commit -m ``` to push. 
![Alt text](<images/git add and commit.png>)

However, if you try pushing, you will get this error: 
![Alt text](<images/git push error.png>)
This means git doesn't know yet where to push our changes from this local branch to. 
To fix this, use ```git push --set-upstream origin name-of-branch```. 
![Alt text](<images/git push set-upstream.png>)

Now our github page should include the new branch that we created. We can also switch to the different branches to view the changes that were made.
![Alt text](<images/github page with new branch1.png>)

You can also see that if you are currently working on a branch and you made a ```git push```, you will see that github will prompt you to make a ```pull``` request.

## Pull Request on Github