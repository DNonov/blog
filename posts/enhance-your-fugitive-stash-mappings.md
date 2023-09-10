---
title: Enhnace your fugitive stash mappings
slug: enhance-your-fugitive-stash-mappings
tags: 'nvim git programming'
abstract: "If you're a vim/neovim user and your git interactions are through vim-fugitive. Here are some good stash related mappings, that I've found useful."
isPublished: true
publishDate: 11.09.2023
updateDate: 10.09.2023
---

If you're a vim/neovim user and your git interactions are through
vim-fugitive[^1].  By some point, you probably needed to stash some work. And
you probably use the fugitive `:Git stash` command. But plain `git stash` will
create a stash with a random hash. 

``` terminal
$ git stash
Saved working directory and index state WIP on main: 44bc329
```

The annoying part is when you have more than one stash, and you need to
remember the hash. If you use `git stash save` you can provide a
proper name for your stash. 

``` terminal
$ git stash save first-stash
Saved working directory and index state On main: first-stash
```

Then will be easier to manage stashes, which leads to the next part. 
How to list all stashes? You can use `git log -g stash` it's not a very popular
command, but it's very useful. Especially if your workflow is very involved
with stashes.

``` terminal
commit e6d7fbecf32cce82dc2c064aa7aa9559a4e963c2 (refs/stash)
Reflog: stash@{0} (Dimitar Nonov <d.nonov@gmail.com>)
Reflog message: On main: second-stash
Merge: 44bc329 b9bb11b
Author: Dimitar Nonov <d.nonov@gmail.com>
Date:   Sun Sep 10 22:16:58 2023 +0300

    On main: second-stash

commit 26fedbc24545e23001e7f68f5bd32c9c5362fd57
Reflog: stash@{1} (Dimitar Nonov <d.nonov@gmail.com>)
Reflog message: On main: first-stash
Merge: 44bc329 635d5de
Author: Dimitar Nonov <d.nonov@gmail.com>
Date:   Sun Sep 10 22:10:30 2023 +0300

    On main: firs-stash
```

So this is the output of `git log -g stash`. And here comes the best part if
you execute this in vim `vim-fugitive` will open a separate buffer. You'll be
able to check out the stash if press enter on top of the commit. Sure you can
go back to the buffer with all stashes with `<C-o>`.

Now we need to discuss the part with the popping stashes. If you go for the
plain `git stash pop`. You're going to pop the last saved stash. 

``` terminal
$ git stash pop
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   main.txt

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (e6d7fbecf32cce82dc2c064aa7aa9559a4e963c2)
```

In other words `git stash` and `git stash pop` follow `LIFO(Last In First
Out)`. But what if you want to pop the first stash you have pushed `stash@{1}`
without popping `stash@{0}`? 

You can do `git stash pop "stash@{1}"`. Double quotes around the stash
reference are mandatory! If you're using `Git >= 2.11` though, this command is
cleaner `git stash pop 1`.

So we now have all major operations with stashes. How to integrate them in vim?

I've put them as key mappings in `after/plugin/fugative.lua`.

``` lua
vim.keymap.set("n", "<leader>gsl", ':Git log -g stash <CR>');
vim.keymap.set("n", "<leader>gs", ':Git stash save');
vim.keymap.set("n", "<leader>gsp", ':Git stash pop "stash@{0}"');
```

This easily can be translated to `vimscript` and used in vim.

``` vim
nmap <leader>gsl :Git log -g stash<CR>
nmap <leader>gs :Gti stash save
nmap <leader>gsp :Git stash pop "stash@{0}"
```

I've tried to make good mnemonics, but feel free to change them.

`gsl` stands for `git stash list`\
`gs` stands for `git stash save`\
`gsp` stands for `git stash pop`

You can see that only one of them will be immediately executed, this is because
only `<leader>gsl` doesn't need the user's input. On the other hand `<leader>gs` will
get you to `command` mode, and you'll need to add the name of the stash and press
enter. For `<leader>gsp` situation is similar, although if you want to pop
`stash@{0}` you just need to press enter. If you want to pop a different stash
you need to change the `0` with whatever stash index you want.

So, I hope this was helpful, and now you have a better workflow with stashes.

[^1]: [vim-fugitive](https://github.com/tpope/vim-fugitive)
