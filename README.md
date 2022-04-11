# restart

# Admin
* [Canvas](https://awsrestart.instructure.com/)
* Contact the lecturer for Zoom & Discord links.

* Classes run from 9:45AM-3PM Mon-Thu and 10AM-2PM Fri.
* Student Expectations: ~5 hours of lectures and ~3 hours of homework 5 days/week.

# Supplementary Videos
* [1963 Timesharing - How Computers Work](https://www.youtube.com/watch?v=Q07PhW5sCEk) - Still relevant
* [1982 UNIX](https://www.youtube.com/watch?v=tc4ROCJYbm0) - See Brian Kernighan's demo @ 4:00. Also still relevant.
* [Hackers: The History of Hacking](https://www.youtube.com/watch?v=FufYSx2_6Bg)

* [Socratica - Python Tutorial](https://www.youtube.com/watch?v=bY6m6_IIN94&list=PLi01XoE8jYohWFPpC17Z-wWhPOSuh8Er-)
* [TechWithTim - The Complete Python Course for Beginners](https://www.youtube.com/watch?v=sxTmJE4k0ho)


# Core Topics
* Career
* Cloud Foundations
* Linux
* Networking
* Python Programming
* Databases
* AWS
* Exam Preparation

# Week 1

### Day 1
* Basic Computing Concepts
* Brief history of computing & operating systems
* CPU / Central Processing Unit
* [Moore's Law](https://upload.wikimedia.org/wikipedia/commons/0/00/Moore%27s_Law_Transistor_Count_1970-2020.png)
* RAM/Memory
* Storage: Mechanical Hard Drives, Solid State Drives (SSD), Tape Storage, CD/DVD/BluRay
* Brief history of Cloud Computing

### Day 2
* Virtual Machines & Amazon Machine Images (AMIs)
* Database Basics: Relation vs Non-Relational/NoSQL (Key-Value, Document/Object, Graph)
* EC2 Lab demonstration - Deploying a virtual machine
* Shared Responsibility Model Basics
* Memcached & Redis Basics (get/set): [Try Redis](https://try.redis.io/)
* [StackShare](https://stackshare.io/)

### Day 3
* Amazon S3 Basics
* Brief history of Internet (Phreaking, Dialup, ADSL, Fibre)
* Brief history of World Wide Web, HTML, and using [archive.org](http://archive.org/)
* Linux Basics: `cd`, `mkdir`, `pwd`, `ls`, `man`, `/bin directory`, running programs.
* [Linux Directory Structure](https://linuxhandbook.com/linux-directory-structure/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line) - Bookmark this for use later in the course.

### Day 4
* AWS Compute Options: EC2, Lambda, ECS, and others.
* [Hypervisor](https://en.wikipedia.org/wiki/Hypervisor) vs [Containers](https://aws.amazon.com/getting-started/deep-dive-containers/)
* Infrastructure as a Service (IaaS)
* Platform as a Service (PaaS) - e.g. Heroku, ElasticBeanstalk
* Software as a Service (SaaS)
* Function as a Service (FaaS)
* Continuous Integration / Continuous Deployment (CI/CD)
* Infrastructure as Code (IaC) Basics
* Application Programming Interfaces (APIs)
* [RosettaCode](http://www.rosettacode.org/wiki/Hello_world/Text)
* Installing `python3` with `sudo yum install python3`

### Day 5
* Personal branding workshop
* Python String data type `str`
* Python Numerics data types `int`, `float`
* Print to console `print()`
* Takes input from console `input()`

# Week 2
### Day 1
* Python: Lists `my_list = [1, "hello", 3.14]`, Tuples `my_tuple = (4, "blah", 1.23)`
* Functions (`def my_function():`)
* Conditionals (`if`/`else`/`elif`)
* Comments (`#`)
* Debugging: Breakpoints, Stepping, Inspecting values

### Day 2
* Python Dictionaries `my_dictionaries = {"innovation": "something new"}`
* Python Boolean type `my_bool = True | False`
* Nested data types: Lists within Dictionary, Dictionaries within List, Lists within List (2D array)
* Using `pip`
* [awesome-python](https://github.com/vinta/awesome-python) - List of popular Python packages
* Using `pylint`
* Local vs. Global scope
* Classes (basics - grouping of data and functions/methods)
* Interpreted programming languages vs compiled programming languages
* AI brief introduction - Tensorflow, Keras, PyTorch
* Sets `my_set = {1, 3, 'hello', 3, 5}`, Intersection and Union methods
* List slices & some methods (append, insert)

* [Keybr.com](https://www.keybr.com/) - Learn to touch type & speed up your typing.

### Day 3
* Python conditionals: `if`, `elif`, `else`
* Exceptions, custom exceptions with `raise`, `try`, `except`, `else`, `finally`
* Combine exception handling with functions and `return`
* `assert` and raising `AssertionError`
* [Sentry](https://sentry.io) for error tracking
* Create / `import` modules in Python
* Using `pytest` and `assert` statement for software testing.
* Continuous Integration providers: Travis-CI, CircleCI
* [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development) basics: Standups, Kanban, Sprints, [Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development))
* GitHub platform in depth: Forking, Pull requests, Topics, Issue tracking, Project Management, Contributors / Bus Factor, etc

### Day 4
* Using loops (`while`, `for`, `range`, `enumerate`)
* List comprehensions aka easily making a list from an iterable.
* Looping through dictionaries using `.keys()`, `.values()`, and `.items()`.
* Printing with `f-strings`
* More testing with `pytest`
* More on using modules
* [Entry point](https://en.wikipedia.org/wiki/Entry_point)
* Python's `in` keyword (`'b' in ['a', 'b', 'c']`, and in `for` loops)
* Using `turtle` for small visualizations and understanding loops

### Day 5
* How git is used for teams of software engineers to collaborate
* How to create a Github repo, also called a `remote` repository
* `git clone` from `remote` repository
* `git init`
* `git add remote` if there isn't `remote` repository linked already
* see status of staged and unstaged changes with `git status`
* view git history with `git log`
* `git commit`
* `git branch`
* `git checkout`
* `git pull` from `remote` repository
* `git push` from local to `remote` repository
* rewrite git history, squash N number of commits history with `git rebase -i HEAD~N`

# Week 3
### Day 1
* Kernel / Daemons
* Python Revision
* Command Line Revision
* Git Revision

### Day 2
* Linux Basics Revision
* Linux GUI vs CLI
* Continuous Integration, Continuous Delivery, Continuous Deployment concepts
* `which`, `alias`, `unalias`, `export`, `unset`, `env`, `less`, `sudo !!`, `cat`, `sleep`
* `PATH`, accessing environment variables e.g. `$HOME` and setting `PATH`, `.bashrc` basics. 
* `/proc` basics
* Processes & Process ID's
* Job control basics: `Ctrl-Z`, `bg`, `fg`, Running a task in the background with `&`
* `strace` basics & system calls (syscalls) overview/purpose
* File Descriptors and `/proc/<process_id>/fd/`, `stdin`, `stdout`, `stderr` - More on these later.
* tmux Basics: Prefix key (`Ctrl-B`), Vsplit `%`, Hsplit `"`, New window `c`, Next window `n`, Previous window `p`, Switching panes `arrow keys`
* Types of interprocess communication: [Wikipedia - Inter-process Communication](https://en.wikipedia.org/wiki/Inter-process_communication)

### Day 3
* More Linux: `head`, `tail`, `file`, Symbolic Links (symlinks), Permission basics: `chmod +x` (so far)
* `/etc/passwd`
* `chsh`, `/etc/shells` and different shell examples (`zsh`, `fish`)
* `gcc` (aka `cc`) and compiling simple C programs
* `/lib` directory, shared objects (`.so` and equivalent `.dll` files)
* Binary ([ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format)) vs Text ([Shell script](https://en.wikipedia.org/wiki/Shell_script)) and `#!` at the top of scripts.
* Using `time.sleep(30)` in Python and the `nanosleep()` syscall.
* Created a simple shell script
* [awesome-shell](https://github.com/alebcay/awesome-shell) - List of great programs

### Day 4
* Linux `cd`, `pwd`, `ls *` (list all files in nested folders) vs. `ls`
* `cp`, `mv`, `mkdir`, `nano`
* Python `argsparser` to run Python program with customizable input
* Makefile, and Makefile command with input
* Makefile command shortcut to run Python program with customizable input
* Explained on a high level what API is, and most common API command `GET`, `POST`, `PUT`, `DELETE`
* More Linux: `useradd`, `groupadd`, `sudo su -`, `/etc/sudoers`, `/etc/passwd`, `/etc/group`, `/etc/shadow`, `vipw`, `vigr`, and `vipw -s` (don't edit these files directly)
* `!!`, `!$`, `history` and `!<n>`
* More Bash scripting & handling arguments (`$1`, `$2`, etc in Bash & `sys.argv` in Python)
* Linux permissions: [chmod codes cheat sheet](https://gist.github.com/juanarbol/c44e736be70279c1fd5d68aa24f9d8be), `ugo+rwx` (symbolic), `421` (numeric), output of `ls -al`
* [LinuxJourney.com](https://linuxjourney.com/) - Thanks Ben
* [Bash Cheat Sheet](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/bash.sh) - Plan to learn these during your career

Optional vim stuff:
* [Vim Adventures](https://vim-adventures.com/) - Thanks Jarryd
* [VSCode Vim Plugin](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) - Optional
* [VSCode Learn Vim Plugin](https://marketplace.visualstudio.com/items?itemName=vintharas.learn-vim) - Also optional
* [Advanced vim cheatsheet](https://vim.rtorr.com/) - Bookmark for later in your career if you decide to use vim.

### Day 5
* CV workshops
* Flows and conditions with Linux bash scripting: `if else elif`, `for loop with {1..N}`, `for loop with StringArray()`, `case`, `conditions []`

Other resources for interview preps:
* Algorithm coding interview: https://leetcode.com/
* All topics in Tech interview: https://interviewing.io/
* General programming interview, not algorithm heavy: https://exercism.org/ 
* System design interview: https://github.com/donnemartin/system-design-primer

Book recommendations:
* https://www.amazon.com/System-Design-Interview-Insiders-Guide-ebook/dp/B08B3FWYBX
* https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/1736049119

# Week 4
* Revision
* More on containerization vs virtualization.
* Architecture Basics: ARM vs x86 / x64 (aka amd64 or x86_64)
* Virtualbox Snapshots & Amazon Machine Images
* Demos/Presentations of useful utilities
* Debugging a non-ELF binary named `googlr` (created in Swift)
* Matthew: `atop`, `gitmux`, `nnn`
* [Dotfiles](https://dotfiles.github.io/) - Configure your own setups.
* Joe: `image-scraper`, `imgp`, `tiv`, and cool mod to Alice's pokemon guesser game
* Asimina: `cointop`, `has`
* Michael J: `prettyping`, `gogh` & debugging shell scripts
* Installing Python 3.10 from source and using `grep`.
* Installing Go (see office hours recording) and extracting compressed files with `tar`.
* Installing Rust (also office hours)

* Friday: Good Friday (No class)

# Week 5
* Topics covered will be added here.

Monday: Easter Monday (No class)

# Week 6
* Topics covered will be added here.

Monday: ANZAC Day (No class)

# Week 7
* Topics covered will be added here.


# Week 8
* Topics covered will be added here.


# Week 9
* Topics covered will be added here.

# Week 10
* Topics covered will be added here.

# Week 11
* Topics covered will be added here.

# Week 12
* Topics covered will be added here.

Monday: Queen's Birthday (No class)
