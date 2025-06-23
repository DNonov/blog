---
title: "Power law in codebases"
date: 2025-06-23
draft: false
tags: ["Programming", "Statistics", "Bash", "Git", "Mathematics"]
---

There's an interesting pattern that can be found in most codebases. The number of
changes per file follows a power-law[^1]. It's not safe to say that the Pareto
principle[^2] is at play (80% of the changes occur in 20% of the files) in
every codebase. But you'll be pretty close to these values.

Here is a bash script that will create a frequency distribution of changes per
file.

```bash
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

function get_changed_files() {
    git log --name-only --pretty=format:
}

function clean_filenames() {
    grep --invert-match '^$' | sed 's/[[:space:]]*$//' | tr -d '\r'
}

function create_frequency_distribution() {
    sort | uniq --count | sort --numeric-sort --reverse
}

get_changed_files \
    | clean_filenames \
    | create_frequency_distribution
```

For a better visual experience, get the top 50 files and pipe them into a pager
like `less`.

``` bash
./changes-frequency-script.sh | head -n 50 | less
```

or save all the data into a `CSV` file for further analysis (e.g. plotting, report
generating, spreadsheet analysis) 

``` bash
./changes-frequency-script.sh | head -n 50 | awk '{print $2 "," $1 }' >> changes_frequency_file.csv
```

I ran the script across four open source project repositories and took their
top 20 files.

```csv
# Rails top 20 files

2501 activerecord/CHANGELOG.md
1562 actionpack/CHANGELOG
1348 activerecord/CHANGELOG
1215 activerecord/lib/active_record/base.rb
1098 actionpack/CHANGELOG.md
1056 activesupport/CHANGELOG.md
 909 activerecord/lib/active_record/associations.rb
 892 Gemfile
 869 Gemfile.lock
 867 railties/CHANGELOG.md
 846 activerecord/lib/active_record/connection_adapters/postgresql_adapter.rb
 815 guides/source/configuring.md
 787 railties/CHANGELOG
 786 actionpack/lib/action_dispatch/routing/mapper.rb
 738 activerecord/lib/active_record/relation/query_methods.rb
 681 railties/test/generators/app_generator_test.rb
 677 activesupport/CHANGELOG
 613 activerecord/lib/active_record/relation.rb
 598 activerecord/lib/active_record/connection_adapters/abstract_adapter.rb
 593 activerecord/lib/active_record/connection_adapters/abstract_mysql_adapter.rb
```

```csv
# Laravel top 20 files

1572 src/Illuminate/Foundation/Application.php
 903 src/Illuminate/Database/Eloquent/Model.php
 772 src/Illuminate/Database/Query/Builder.php
 666 composer.json
 603 src/Illuminate/Database/Eloquent/Builder.php
 565 src/Illuminate/Validation/Validator.php
 545 tests/Validation/ValidationValidatorTest.php
 517 src/Illuminate/Support/Collection.php
 510 tests/Support/SupportCollectionTest.php
 489 src/Illuminate/Routing/Router.php
 466 tests/Database/DatabaseQueryBuilderTest.php
 405 CHANGELOG.md
 394 tests/Database/DatabaseEloquentModelTest.php
 365 src/Illuminate/Support/Str.php
 324 src/Illuminate/Http/Request.php
 319 src/Illuminate/Support/helpers.php
 316 src/Illuminate/Routing/Route.php
 315 src/Illuminate/Database/Eloquent/Relations/BelongsToMany.php
 314 src/Illuminate/Foundation/helpers.php
 288 src/Illuminate/Container/Container.php
```

```csv
# Django top 20 files

1104 AUTHORS
 603 django/db/models/query.py
 577 django/db/models/sql/query.py
 538 docs/ref/settings.txt
 525 django/db/models/fields/__init__.py
 511 django/db/models/base.py
 480 django/contrib/admin/options.py
 468 docs/internals/deprecation.txt
 463 django/db/models/fields/related.py
 456 docs/ref/models/querysets.txt
 447 docs/ref/contrib/admin/index.txt
 432 tests/admin_views/tests.py
 423 docs/ref/django-admin.txt
 359 django/test/testcases.py
 358 django/db/models/sql/compiler.py
 358 django/conf/global_settings.py
 354 docs/ref/models/fields.txt
 349 docs/releases/1.8.txt
 340 docs/ref/templates/builtins.txt
 339 docs/releases/1.7.txt
```

``` csv
# Nginx top 20 files

608 src/http/ngx_http_core_module.c
548 src/http/ngx_http_request.c
523 src/core/nginx.h
520 docs/xml/nginx/changes.xml
494 src/http/ngx_http_upstream.c
483 .hgtags
378 src/event/ngx_event_openssl.c
324 src/event/ngx_event_quic.c
275 src/http/modules/ngx_http_proxy_module.c
259 src/http/ngx_http_request.h
243 src/http/modules/perl/nginx.pm
239 src/http/ngx_http_core_module.h
228 src/core/nginx.c
224 src/http/ngx_http.c
198 src/http/modules/ngx_http_fastcgi_module.c
196 src/event/ngx_event.c
179 auto/modules
170 auto/sources
167 src/event/ngx_event.h
165 src/http/ngx_http.h
```

If we ignore files like changelogs and authors files, since they are not a
functional part of the system. The files with the most changes are either part of
the system's core functionality or some kind of external dependency files.

This is a very good strategy to explore an unknown system. Focus on the top
files, which are the core functionality of the system. Check out the content of
those files; read the commit messages with `git log --follow`. You can get a
lot of valuable information pretty quickly.

Another use case is to find the most critical parts of the system. In order to
test them more and refactor them if it's needed. Testing the right parts of the
system will save time and resources while making it more reliable. Refactoring
is a good idea as well, since you'll probably spend more time there and want
the system to be clean and nice in the most impactful places.


[^1]: [Power-law](https://en.wikipedia.org/wiki/Power_law)
[^2]: [Pareto Principle](https://en.wikipedia.org/wiki/Pareto_principle)
