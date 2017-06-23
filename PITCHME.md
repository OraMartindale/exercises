Git: The Great and Powerful

---

```shell
~/Code > git init your_repo
Initialized empty Git repository in .../Code/your_repo/.git/
```

---

Refs

```shell
~/Code > cd your_repo/.git
~/Code/your_repo/.git (GIT_DIR!) > ls -l
total 24
drwxr-xr-x   9 ora  staff  306 Jun 22 22:33 .
drwxr-xr-x   4 ora  staff  136 Jun 22 22:33 ..
-rw-r--r--   1 ora  staff   23 Jun 22 22:33 HEAD
-rw-r--r--   1 ora  staff  137 Jun 22 22:33 config
-rw-r--r--   1 ora  staff   73 Jun 22 22:33 description
drwxr-xr-x  12 ora  staff  408 Jun 22 22:33 hooks
drwxr-xr-x   3 ora  staff  102 Jun 22 22:33 info
drwxr-xr-x   4 ora  staff  136 Jun 22 22:33 objects
drwxr-xr-x   4 ora  staff  136 Jun 22 22:33 refs
~/Code/your_repo/.git (GIT_DIR!) > cat HEAD
ref: refs/heads/master
~/Code/your_repo/.git (GIT_DIR!) > cd refs/heads/
~/Code/your_repo/.git/refs/heads (GIT_DIR!) > ls -l
total 0
drwxr-xr-x  2 ora  staff   68 Jun 22 22:33 .
drwxr-xr-x  4 ora  staff  136 Jun 22 22:33 ..
```

---

Objects

```shell
~/Code/your_repo/.git/objects (GIT_DIR!) > ls -l
total 0
drwxr-xr-x  4 ora  staff  136 Jun 22 22:49 .
drwxr-xr-x  9 ora  staff  306 Jun 22 22:57 ..
drwxr-xr-x  2 ora  staff   68 Jun 22 22:49 info
drwxr-xr-x  2 ora  staff   68 Jun 22 22:49 pack
```

---

First file and first commit

```shell
~/Code/your_repo (master) > echo 'Test A' > a.txt
~/Code/your_repo (master) > git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	a.txt

nothing added to commit but untracked files present (use "git add" to track)
~/Code/your_repo (master) > git add a.txt
~/Code/your_repo (master) > git commit -m 'Initial Commit'
[master (root-commit) 34fe8f3] Initial Commit
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt
 ```
 
---

Commit Hash

```shell
~/Code/your_repo (master) > git commit -m 'Initial Commit'
[master (root-commit) 34fe8f3] Initial Commit
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt
```
@[2]

```shell
~/Code/your_repo/.git (GIT_DIR!) > cat HEAD
ref: refs/heads/master
```

```shell
/Users/ora/Code/your_repo/.git/refs/heads
~/Code/your_repo/.git/refs/heads (GIT_DIR!) > ls -l
total 8
-rw-r--r--  1 ora  staff  41 Jun 22 22:47 master
~/Code/your_repo/.git/refs/heads (GIT_DIR!) > cat master
34fe8f3329fa096da5d53deeb78e436c2b1bd173
```

---

Objects

```shell
~/Code/your_repo/.git/objects (GIT_DIR!) > ls -l
total 0
drwxr-xr-x   7 ora  staff  238 Jun 22 22:47 .
drwxr-xr-x  12 ora  staff  408 Jun 22 22:47 ..
drwxr-xr-x   3 ora  staff  102 Jun 22 22:47 34
drwxr-xr-x   3 ora  staff  102 Jun 22 22:47 6e
drwxr-xr-x   3 ora  staff  102 Jun 22 22:47 99
drwxr-xr-x   2 ora  staff   68 Jun 22 22:33 info
drwxr-xr-x   2 ora  staff   68 Jun 22 22:33 pack
```

@[7-9]

---

Directories are the first 2 characters of hash

```shell
~/Code/your_repo/.git/objects (GIT_DIR!) > ls -l 34
total 8
drwxr-xr-x  3 ora  staff  102 Jun 22 22:47 .
drwxr-xr-x  7 ora  staff  238 Jun 22 22:47 ..
-r--r--r--  1 ora  staff  131 Jun 22 22:47 fe8f3329fa096da5d53deeb78e436c2b1bd173
~/Code/your_repo/.git/objects (GIT_DIR!) > ls -l 6e
total 8
drwxr-xr-x  3 ora  staff  102 Jun 22 22:47 .
drwxr-xr-x  7 ora  staff  238 Jun 22 22:47 ..
-r--r--r--  1 ora  staff   22 Jun 22 22:47 1f5175fa2857fc46ca6d4427218d8e570f9e69
~/Code/your_repo/.git/objects (GIT_DIR!) > ls -l 99
total 8
drwxr-xr-x  3 ora  staff  102 Jun 22 22:47 .
drwxr-xr-x  7 ora  staff  238 Jun 22 22:47 ..
-r--r--r--  1 ora  staff   49 Jun 22 22:47 7e03b14109d3602e290b6d370255bb8cab8ff6
```

implication: that can be a max of 256 directories

---


```shell
~/Code/your_repo/.git/objects (GIT_DIR!) > git cat-file -p 34fe8f3329fa096da5d53deeb78e436c2b1bd173
tree 997e03b14109d3602e290b6d370255bb8cab8ff6
author Ora Martindale <ora@martindale.org> 1498189642 -0500
committer Ora Martindale <ora@martindale.org> 1498189642 -0500

Initial Commit
~/Code/your_repo/.git/objects (GIT_DIR!) > git cat-file -p 997e03b14109d3602e290b6d370255bb8cab8ff6
100644 blob 6e1f5175fa2857fc46ca6d4427218d8e570f9e69	a.txt
~/Code/your_repo/.git/objects (GIT_DIR!) > git cat-file -p 6e1f5175fa2857fc46ca6d4427218d8e570f9e69
Test A
```

---

The End!