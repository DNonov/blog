---
title: "Scopes, query builders and missing methods"
draft: false
date: 2024-02-21
tags: ["Programming", "PHP", "Laravel", "Design Patterns"]
---

If your models have fluent APIs you can work on the right level of abstraction
and hide DB specific information. And here is an example of what this looks like.

```php
Order::wherePaid()
    ->whereLocalDelivery()
    ->whereHasExtraPackaging();
```

To enhance your model in Laravel is quite easy.

```php
namespace App\QueryBuilders;

use Illuminate\Database\Eloquent\Builder;

class OrderQueryBuilder extends Builder {
    public function wherePaid(): Builder {
        return $this->where('status', 'PAID');
    }

    public function whereHasExtraPackaging(): Builder {
        return $this->where('extra_packaging', true);
    }

    public function whereLocalDelivery(): Builder {
        return $this->where('local_delivery', true);
    }
}
```
```php
namespace App;

use Illuminate\Database\Eloquent\Model;
use App\QueryBuilders\OrderQueryBuilder;

class Order extends Model {
    public function newEloquentBuilder($query): OrderQueryBuilder {
        return new OrderQueryBuilder($query);
    }
}
```

The trouble is, that none of the query builder's methods are showing up in the
autocomplete of the text editor or IDE. Let's be honest. Once you've got more
than 10 models in a system and pretty much the same amount of query builders you
need an autocomplete. At least I do.

Hopefully, there is PHPDoc and pretty much every editor or IDE reads it. We can
include all the methods implemented on the query builder in the model's PHPDoc.

```php
namespace App;

use Illuminate\Database\Eloquent\Model;
use App\QueryBuilders\OrderQueryBuilder;

/**
 * Order
 *
 * @method static Builder wherePaid()
 * @method static Builder whereHasExtraPackaging()
 * @method static Builder whereLocalDelivery()
 */
class Order extends Model {
    public function newEloquentBuilder($query): OrderQueryBuilder {
        return new OrderQueryBuilder($query);
    }
}
```
Everything is fine now. I can scroll through all my model's methods. 

Of course, the immediate question "What about scopes?". Why would you
do all of this extra work to achieve the same thing with less code?

```php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Order extends Model {
    public function scopeWherePaid($query): Builder {
        return $query->where('status', 'PAID');
    }

    public function scopeWhereHasExtraPackaging($query): Builder {
        return $query->where('extra_packaging', true);
    }

    public function scopeWhereLocalDelivery($query): Builder {
        return $query->where('local_delivery', true);
    }
}
```

Well, this still needs to be commented to get it in the autocomplete.

```php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Order
 *
 * @method static Builder wherePaid()
 * @method static Builder whereHasExtraPackaging()
 * @method static Builder whereLocalDelivery()
 */
class Order extends Model {
    public function scopeWherePaid($query): Builder {
        return $query->where('status', 'PAID');
    }

    public function scopeWhereHasExtraPackaging($query): Builder {
        return $query->where('extra_packaging', true);
    }

    public function scopeWhereLocalDelivery($query): Builder {
        return $query->where('local_delivery', true);
    }
}
```

PHPDoc is required for both of the approaches to get the methods in the
autocomplete. With `QueryBuilder` approach you need an extra file. With
`scopes` you're making the model fatter. Of course, this is a trade-off as with
almost everything in software development. I'd start with `scopes` and as soon
as I've got more than a couple of scopes I'll go for a `QueryBuilder`. I like
separation; makes everything nice and clean.

Every MVC pattern based web framework, like Rails, Django, Laravel, Spring.
Gives you the ability to put your code in some pre-defined boxes. The path of
the least resistance is to put much of your business logic in the controller.
The controller gets bigger and most of the business logic is lost in the
different levels of abstraction and tons of `if` statements. First problem is
the cognitive load when you're dealing with code with high cyclomatic complexity.
Second, your business logic is not abstracted and can't be reused. 



