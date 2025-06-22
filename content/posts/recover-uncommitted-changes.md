---
title: "Recover uncommitted changes"
draft: false
date: 2024-06-19
tags: ["Git", "Terminal", "Bash", "Programming"]
---

Deleting an uncommitted file is a rare yet painful event. Especially if we have
spent a couple of hours working on it. It's useful to know there's a chance to
recover the change. If the change has been staged we can find it as a `dangling
blob` with `git fsck`[^1].

Git will create a `dangling blog` every time we stage a change. So even if we
remove a file or stage another change on top of the old one theoretically, we've
got a chance to recover.

We can get all dangling blobs with this.

```bash
git fsck --full --unreachable --lost-found

Checking object directories: 100% (256/256), done.
unreachable blob a65c803815a7ef4d7094507d7f290702dd9b728a
unreachable blob 8b0d18a21094b08039a7c6631b6be2c9467b3d2e
```

Then check the content of a blob.

``` bash
git show a65c803815a7ef4d7094507d7f290702dd9b728a
```

If we try this on a repository with long history. Chances are we're going to
get way too many blobs. So, we won't be able to get the one we need. We can
create a short bash script to help.


```bash
touch /usr/local/bin/recover_changes
chmod +x /usr/local/bin/recover_changes
```

Bear in mind we have to put the scrip in our `PATH`. So, we can execute it
from everywhere.

``` bash
#!/usr/bin/env bash

set -euo pipefail

function fail () {
    echo "FAIL: $*" >&2
    exit 1
}

if ! command -v git > /dev/null 2>&1; then
    fail "Git is not installed or not available in PATH."
fi

if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    fail "This is not a git repository!"
fi

function get_all_unreachable() {
    git fsck --full --no-reflogs --unreachable --lost-found 2> /dev/null
}

function get_only_blobs() {
    grep blob
}

function get_hash_values() {
    cut -d\  -f3
}

function print_changes() {
    while read change
        do printf "blob: $change\n"; git cat-file -p $change
        printf "\n----------------------------------------------------------\n"
    done
}

get_all_unreachable \
    | get_only_blobs \
    | get_hash_values \
    | print_diffs > recovered_changes.txt
```

It's handy to have an alias in the `.gitconfig` file.

```bash
[alias]
  recover-ch = "!bash ~/bin/recover_changes"
```

So we can execute the script and create a file `recovered_changes.txt`, which
contains all the changes, separated by dashed lines.

```bash
git recover-ch
```


[^1]: [git fsck](https://git-scm.com/docs/git-fsck)
