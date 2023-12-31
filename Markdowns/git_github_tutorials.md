# Collaborating using Git and Github | Branches, Pull Requests, Merging vs Rebasing:

## Branching in Git/Github
- If project has many features, you should create a branch for each contained feature. These are merged into the main branch once your changes are finalized.

### Create a branch

Currently, your github page should only have a main branch:

![Alt text](<images/main github page.png>)

```git branch``` - allows you to see what current branch you are on

![Alt text](<images/git branch.png>)

```git checkout -b branch-name``` - allows you to create a new branch in the same repository

![Alt text](<images/git checkout -b.png>)

from here you can add files and make changes to the files. Once that is done, you can use ```git add . ``` and ```git commit -m ``` to push. 

![Alt text](<images/git add and commit.png>)

However, if you try pushing, you will get this error: 

![Alt text](<images/git push error.png>)

This means git doesn't know yet where to push our changes from this local branch to. 
To fix this, use ```git push --set-upstream origin name-of-branch```. 

![Alt text](<images/git push set-upstream.png>)

Now our github page should include the new branch that we created. We can also switch to the different branches to view the changes that were made.

![Alt text](<images/github page with new branch1.png>)

You can also see that if you are currently working on a branch and you made a ```git push```, you will see that github will prompt you to make a **pull request**.

## Pull Request on Github

- Click on 'Compare & pull request' button on your github, which will bring you to this page:
![Alt text](<images/pull request on Github.png>)
What a pull request is, is just a way of letting your team know what changes you are pushing into the **main** branch.
- good for allowing more discussion of these changes
- keeping a log of all the features you are pushing.
- write a detailed title
- You can add someone to review these changes by clicking the gear button under the reviewers tab on the right hand side
![Alt text](<images/Detailed pull request and reviewers.png>)

To continue, click on **Create pull request** button.
- note that you can keep adding to the pull request once you make it and you can view a lot of your commits there.

## Reviewing A Pull Request
- At the top of the page, you can see a tab that says 'Pull Requests 1'. If you click on it, it will bring you a page where it shows the pull request that was just created with the title. Click on it to open.
![Alt text](<images/pull request review 1.png>)

- Click on 'Add your review' button. This will show you the files that are different and also the different commits.
- Click on 'Review Changes' button on the far right side of the page. You can add comments, approve, or Request the changes. 
- Approve the request and submit.

This will bring you to another page and if you scroll down to the button you will see the changes were approved and a button that says 'Merge pull request'. 
![Alt text](<images/pull request review 2.png>)
Since the branch has no conflicts with the base branch, you can complete the pull request by clicking 'Confirm Merge' button. 



## Git Rebase or Git Merge
Let's say that the main branch has more commits than what your local branch has and the work you need to do is relevant to the feature that you are working on. To incorporate the changes in the main branch into your branch, you can use ```git merge``` or ```git rebase```.
- first swith over to the main branch by typing ```git checkout main``` in your terminal. You can use ```git branch``` to view which branch you are currently on (green is the current branch).
- Next, type ```git pull``` to pull those new commits. 

![Alt text](<images/git pull from main branch.png>)

Its good practice to keep pulling from the main branch as often as you can to make sure that everything is up to date.

## Rebase original branch
- moves the entire branch to begin at the most recent version of main. This means that instead of using a merge commit, rebasing re-writes the project history by creating new commits for each commit in your personal branch. This benefits you by giving you a clean linear project history. However, this loses traceability.  To use this, type ```git rebase``` into your terminal. You should receive a message that says:

**'First, rewinding head to replay your work on top of it...'**

What this means we are going back so that the start of your local branch ('stella') is the start of the last commit of the main branch. So any files that were in the main, and not in your branch, should now show up in your branch. 

## Merging
Lets say that you and a collaborator were working on a feature for the same file, for example a hello.txt file. You complete a ```git add .``` and ```git commit request``` and forget to ```git push```. You go back to main branch and pull the changes that your partner made by using ```git pull```. When you make that pull, it shouls say something like this:

![Alt text](<images/git pull fast-forwad.png>)

which means that someone also updated that hello.txt

Next you go back to your own branch using ```git checkout branch-name``` (in this case git checkout stella) and you will see a message saying: 
**Your branch and 'origin/stella' have diverged and have 4 adn 1 different commits each, respectively**
This is because when we were editing our hello.txt file, we did not PUSH our changes so the remote and local branch have different commits. To fix this, use ```git pull```. A merge commit will then pop up saying that its merging the remote branch into our local branch:

![Alt text](<images/Merge local and main branch message.png>)
you can either add a commit message or just leave it as it and once you exit that, it will say that the merge was made using a **recursive strategy** what this means is that the local branch and remote branch are now merged together. 

you can now use ```git push``` to push the changes into the remote branch.

## Merge Conflicts
[Click here to resolve merge conflics in VScode](https://code.visualstudio.com/docs/sourcecontrol/overview#_merge-conflicts)
