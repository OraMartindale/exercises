Git: The Great and Powerful

---

```shell
~/Code > git init your_repo
Initialized empty Git repository in .../Code/your_repo/.git/
```

+++

```shell
~/Code/your_repo (master) > ls -l .git/
total 24
-rw-r--r--   1 ora  staff   23 Jun 22 22:33 HEAD
-rw-r--r--   1 ora  staff  137 Jun 22 22:33 config
-rw-r--r--   1 ora  staff   73 Jun 22 22:33 description
drwxr-xr-x  12 ora  staff  408 Jun 22 22:33 hooks
drwxr-xr-x   3 ora  staff  102 Jun 22 22:33 info
drwxr-xr-x   4 ora  staff  136 Jun 22 22:33 objects
drwxr-xr-x   4 ora  staff  136 Jun 22 22:33 refs
```

@[9](refs directory)
@[8](objects directory)
@[3](special ref called HEAD)

+++

Refs 

```shell
~/Code/your_repo (master) > ls -l .git/refs/
total 0
drwxr-xr-x  2 ora  staff   68 Jun 25 18:23 heads
drwxr-xr-x  2 ora  staff   68 Jun 25 18:23 tags
```
+++

Objects

```shell
~/Code/your_repo (master) > ls -l .git/objects/
total 0
drwxr-xr-x  2 ora  staff   68 Jun 22 22:49 info
drwxr-xr-x  2 ora  staff   68 Jun 22 22:49 pack
```

+++

HEAD

```shell
~/Code/your_repo (master) > cat .git/HEAD
ref: refs/heads/master
```

---

First file and first commit

```shell
~/Code/your_repo (master) > echo 'Test A' > a.txt
```

```shell
~/Code/your_repo (master) > git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	a.txt
~/Code/your_repo (master) > git add a.txt
~/Code/your_repo (master) > git commit -m 'Initial Commit'
[master (root-commit) fe1849b] Initial Commit
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt
```
 
---

Commit Hash

```shell
~/Code/your_repo (master) > git commit -m 'Initial Commit'
[master (root-commit) fe1849b] Initial Commit
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt
```
@[2](The short hash number fe1849b)

```shell
~/Code/your_repo (master) > ls -l .git/refs/heads/
total 8
-rw-r--r--  1 ora  staff  41 Jun 22 22:47 master
~/Code/your_repo (master) > cat .git/refs/heads/master
fe1849b4941e07ac5b4f1b079ee40d991ab6a260
```
@[5](This is the full hash)

---

Object Storage

```shell
~/Code/your_repo (master) > ls -l .git/objects
total 0
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 6e
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 99
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 fe
drwxr-xr-x  2 ora  staff   68 Jun 22 22:33 info
drwxr-xr-x  2 ora  staff   68 Jun 22 22:33 pack
```

@[3-5]
@[5](This one starts with "fe", the same 2 letters as our new hash)

+++

Directories are the first 2 characters of hash

```shell
~/Code/your_repo (master) > ls -l .git/objects/6e
total 8
-r--r--r--  1 ora  staff   22 Jun 22 22:47 1f5175fa2857fc46ca6d4427218d8e570f9e69
~/Code/your_repo (master) > ls -l .git/objects/99
total 8
-r--r--r--  1 ora  staff   49 Jun 22 22:47 7e03b14109d3602e290b6d370255bb8cab8ff6
~/Code/your_repo (master) > ls -l .git/objects/fe
total 8
-r--r--r--  1 ora  staff  131 Jun 25 18:27 1849b4941e07ac5b4f1b079ee40d991ab6a260
```

implication: that can be a max of 256 directories

+++

Object Types

Tree object
```shell
~/Code/your_repo (master) > git cat-file -p 997e03b14109d3602e290b6d370255bb8cab8ff6
100644 blob 6e1f5175fa2857fc46ca6d4427218d8e570f9e69	a.txt
```

+++

Object Types

Blob object
```shell
~/Code/your_repo (master) > git cat-file -p 6e1f5175fa2857fc46ca6d4427218d8e570f9e69
Test A
```

+++

Object Types

Commit object
```shell
~/Code/your_repo (master) > git cat-file -p fe1849b4941e07ac5b4f1b079ee40d991ab6a260
tree 997e03b14109d3602e290b6d370255bb8cab8ff6
author Ora Martindale <ora@martindale.org> 1498433262 -0500
committer Ora Martindale <ora@martindale.org> 1498433262 -0500

Initial Commit
```

---

<!--- Let's add a remote --->
```shell
~/Code/your_repo (master) > git remote add add origin https://github.com/OraMartindale/your_repo.git
```

<!--- And see what happened to the remotes directory --->
Nothing refs for that remote yet:
```shell
~/Code/your_repo (master) > ls -l .git/refs/
total 0
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 heads
drwxr-xr-x  2 ora  staff   68 Jun 25 18:23 tags
```

+++

```shell
~/Code/your_repo (master) > git push --set-upstream origin master
Counting objects: 3, done.
Writing objects: 100% (3/3), 217 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/OraMartindale/your_repo.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
```

+++

Now it's there:
```shell
~/Code/your_repo (master) > ls -l .git/refs/
total 0
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 heads
drwxr-xr-x  3 ora  staff  102 Jun 25 18:42 remotes
drwxr-xr-x  2 ora  staff   68 Jun 25 18:23 tags
```

@[4]

+++

```shell
~/Code/your_repo (master) > ls -l .git/refs/remotes/
total 0
drwxr-xr-x  3 ora  staff  102 Jun 25 17:18 origin
```

@[3]

+++

```shell
~/Code/your_repo (master) > ls -l .git/refs/remotes/origin
total 8
-rw-r--r--  1 ora  staff   41 Jun 25 17:18 master
```

@[3]

+++

```shell
~/Code/your_repo (master) > cat .git/refs/remotes/origin/master
fe1849b4941e07ac5b4f1b079ee40d991ab6a260
```

@[2](Same hash)

---

<!---  --->
```shell
~/Code/your_repo (master) > git fetch
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), done.
From https://github.com/OraMartindale/your_repo
   fe1849b..14ea5ec  master     -> origin/master
```

<!--- The remote's master branch now points to the newest commit --->
```shell
~/Code/your_repo (master) > cat .git/refs/remotes/origin/master 
14ea5eced7cc597863d143daafb5c4d0f5a77c16
```

<!--- The objects directory has changed... --->
```shell
~/Code/your_repo (master) > ls -l .git/objects
total 0
drwxr-xr-x  3 ora  staff  102 Jun 25 18:51 14
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 6e
drwxr-xr-x  3 ora  staff  102 Jun 25 18:51 8d
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 99
drwxr-xr-x  3 ora  staff  102 Jun 25 18:51 d4
drwxr-xr-x  3 ora  staff  102 Jun 25 18:51 e8
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 fe
drwxr-xr-x  2 ora  staff   68 Jun 22 22:33 info
drwxr-xr-x  2 ora  staff   68 Jun 22 22:33 pack
```

<!--- But the directory has not changed yet. --->
```shell
~/Code/your_repo (master) > ls -l
total 8
-rw-r--r--   1 ora  staff    7 Jun 22 22:46 a.txt
```

<!--- And the master branch's pointer has not changed --->
```shell
~/Code/your_repo (master) > cat .git/refs/heads/master
fe1849b4941e07ac5b4f1b079ee40d991ab6a260
```

---

<!--- Now let's merge those changes in. --->
```shell
~/Code/your_repo (master) > git merge
Updating fe1849b..14ea5ec
Fast-forward
 dir/b.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 dir/b.txt
```

<!--- and now the directory exists: --->
```shell
~/Code/your_repo (master) > ls -l
total 8
-rw-r--r--   1 ora  staff    7 Jun 22 22:46 a.txt
drwxr-xr-x   3 ora  staff  102 Jun 25 17:25 dir
```

---

<!--- The master is now pointing to a different hash --->
```shell
~/Code/your_repo (master) > cat .git/refs/heads/master
14ea5eced7cc597863d143daafb5c4d0f5a77c16
```

```shell
~/Code/your_repo (master) > git cat-file -p b0fbf3922e664911cdb0b3124c44ec00807b4ba4
tree e88b3470bfea9773150a652fc1a14ddf039e7825
parent fe1849b4941e07ac5b4f1b079ee40d991ab6a260
author OraMartindale <OraMartindale@users.noreply.github.com> 1498434677 -0500
committer GitHub <noreply@github.com> 1498434677 -0500
```

@[3](The parent of this commit is the previous commit.)

---

Branches
```shell
~/Code/your_repo (master) > git branch new_branch
```

+++

```shell
~/Code/your_repo (master) > git branch
* master
  new_branch
```

+++

```shell
~/Code/your_repo (master) > ls -l .git/objects/
total 0
drwxr-xr-x  3 ora  staff  102 Jun 25 18:51 14
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 6e
drwxr-xr-x  3 ora  staff  102 Jun 25 18:51 8d
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 99
drwxr-xr-x  3 ora  staff  102 Jun 25 18:51 d4
drwxr-xr-x  3 ora  staff  102 Jun 25 18:51 e8
drwxr-xr-x  3 ora  staff  102 Jun 25 18:27 fe
drwxr-xr-x  2 ora  staff   68 Jun 25 18:23 info
drwxr-xr-x  2 ora  staff   68 Jun 25 18:23 pack
```

+++

```shell
~/Code/your_repo (master) > ls -l .git/refs/heads/
total 16
-rw-r--r--  1 ora  staff  41 Jun 25 19:00 master
-rw-r--r--  1 ora  staff  41 Jun 25 19:13 new_branch
```

+++

```shell
~/Code/your_repo (master) > cat .git/refs/heads/master 
14ea5eced7cc597863d143daafb5c4d0f5a77c16
~/Code/your_repo (master) > cat .git/refs/heads/new_branch 
14ea5eced7cc597863d143daafb5c4d0f5a77c16
```

+++

```shell
~/Code/your_repo (master) > git checkout new_branch 
Switched to branch 'new_branch'
~/Code/your_repo (new_branch) > cat .git/HEAD 
ref: refs/heads/new_branch
```

+++

```shell
~/Code/your_repo (new_branch) > echo 'Test C' > c.txt
~/Code/your_repo (new_branch) > git add c.txt
~/Code/your_repo (new_branch) > git commit -m 'Add new file on new branch.'
[new_branch 2f354d1] Add new file on new branch.
 1 file changed, 1 insertion(+)
 create mode 100644 c.txt
```

+++

```shell
~/Code/your_repo (new_branch) > cat .git/refs/heads/master 
14ea5eced7cc597863d143daafb5c4d0f5a77c16
~/Code/your_repo (new_branch) > cat .git/refs/heads/new_branch 
2f354d1009288442c53f1dc0a0c43def619efade
```

@[2](Since we didn't update anything on the master branch, it's pointer hasn't changed)
@[4](The pointer for the new branch has)

+++

```shell
~/Code/your_repo (new_branch) > git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
~/Code/your_repo (master) > git merge new_branch --no-ff
Merge made by the 'recursive' strategy.
 c.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 c.txt
```

```shell
~/Code/your_repo (master) > cat .git/refs/heads/master 
a0113f743cf5ed582ed38242c87f325130a3d4d8
```

```shell
~/Code/your_repo (master) > git cat-file -p a0113f743cf5ed582ed38242c87f325130a3d4d8
tree 6278a16a5f71e279c276b5097dedf2e925e71b95
parent 14ea5eced7cc597863d143daafb5c4d0f5a77c16
parent 2f354d1009288442c53f1dc0a0c43def619efade
author Ora Martindale <ora@martindale.org> 1498436737 -0500
committer Ora Martindale <ora@martindale.org> 1498436737 -0500

Merge branch 'new_branch'
```

@[3-4](This commit has 2 parents)

```shell
~/Code/your_repo (master) > git log --oneline --graph
*   a0113f7 Merge branch 'new_branch'
|\  
| * 2f354d1 Add new file on new branch.
|/  
* 14ea5ec Create b.txt
* fe1849b Initial Commit
```
@[2-6]


---

Resources
[Git](https://www.git-scm.com/)
[Git Tip of the Week](http://alblue.bandlem.com/2011/12/git-tip-of-week-finale.html)
[GitHub](https://guides.github.com/)
[BitBucket](https://confluence.atlassian.com/get-started-with-bitbucket/)

---

The End!