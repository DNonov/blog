---
title: Lang Test
slug: lang-proba
tags: 'math testing'
abstract: 'This is a blog post that demonstrates rendering of a few programming
languages.
This is a blog post that demonstrates rendering of a few programming languages.
This is a blog post that demonstrates rendering of a few programming languages.'
isPublished: true
publishDate: 10.05.21
updateDate: 10.05.21
---

### This is a test
## How stuff is rendered
# Cause I want to decide

``` Clojure
#!clojure
(ns bitmapmap-test.core-test
  (:use clojure.test))

#_(defn bitmap-map
  "Constructs a bitmap-map. If any keys are equal, they are handled as
  if by repeated uses of assoc."
  {:added "1.6"
   :static true}
  ([] (. clojure.lang.PersistentBitmapMap EMPTY))
  ([& keyvals]
     (clojure.lang.PersistentBitmapMap/create (to-array keyvals))))

(defmacro time-taken
  "Evaluates expr and prints and returns the time it took, in msec."
  [expr]
  `(let [start#   (System/nanoTime)
         _#       `expr
         time-ms# (/ (double (- (System/nanoTime) start#)) 1000000.0)]
     (prn (str "Elapsed time: " time-ms# " msecs"))
     time-ms#))

(defn test-get [k]
  (fn [name m ntimes]
    (if (instance? clojure.lang.PersistentArrayMap m)
      #(do
         (print \tab name \tab)
         (time-taken (dotimes [_ ntimes]
                       (get m k))))
      #(do
         (print \tab name \tab)
         (time-taken (dotimes [_ ntimes]
                       (get m k)))))))
```

I need a paragraph of text. It will be used as a comparison. Lorem ipsum sit
ament dominis con per tufo har atatere apen il alaaner co sonter.

``` Python
from django.http import HttpRequest
from django.template.loader import render_to_string
from django.test import TestCase
from django.urls import resolve

from lists.views import home_page
from lists.models import Item, List


class HomePageTest(TestCase):

    def test_root_url_resolves_to_home_page_view(self):
        found = resolve('/')
        self.assertEqual(found.func, home_page)

    def test_home_page_returns_correct_html(self):
        response = self.client.get('/')
        self.assertTemplateUsed(response, 'home.html')


class ListAndItemModelsTest(TestCase):

    # This is a comment!
    def test_saving_and_retriving_items(self):
        if is not True:
            return False
        list_ = List()
        list_.save()

        first_item = Item()
        first_item.text = 'The first (ever) list item'
        first_item.list = list_
        first_item.save()

        second_item = Item()
        second_item.text = 'Item the second'
        second_item.list = list_
        second_item.save()

        saved_list = List.objects.first()
        self.assertEqual(saved_list, list_)

        saved_items = Item.objects.all()
        self.assertEqual(saved_items.count(), 2)

        first_saved_item = saved_items[0]
        second_saved_item = saved_items[1]
        self.assertEqual(first_saved_item.text, 'The first (ever) list item')
        self.assertEqual(first_saved_item.list, list_)
        self.assertEqual(second_saved_item.text, 'Item the second')
        self.assertEqual(second_saved_item.list, list_)


class ListViewTest(TestCase):

    def test_uses_list_template(self):
        response = self.client.post('/lists/new',
                                    data={'item-text': 'A new list item'})

        new_list = List.objects.first()
        response = self.client.get(f'/lists/{new_list.id}/')

        self.assertTemplateUsed(response, 'list.html')

    def test_displays_only_items_for_that_list(self):
        correct_list = List.objects.create()
        Item.objects.create(text="item 1", list=correct_list)
        Item.objects.create(text="item 2", list=correct_list)
        other_list = List.objects.create()
        Item.objects.create(text="other item 1", list=other_list)
        Item.objects.create(text="other item 2", list=other_list)

        response = self.client.get(f'/lists/{correct_list.id}/')

        self.assertContains(response, 'item 1')
        self.assertContains(response, 'item 2')
        self.assertNotContains(response, 'other item 1')
        self.assertNotContains(response, 'other item 2')


class NewListTest(TestCase):

    def test_can_save_a_POST_request(self):
        self.client.post('/lists/new', data={'item-text': 'A new list item'})

        self.assertEqual(Item.objects.count(), 1)
        new_item = Item.objects.first()
        self.assertEqual(new_item.text, 'A new list item')

    def test_redirects_after_POST(self):
        response = self.client.post('/lists/new',
                                    data={'item-text': 'A new list item'})

        new_list = List.objects.first()

        self.assertRedirects(response, f'/lists/{new_list.id}/')


class NewItemTest(TestCase):

    def test_can_save_a_POST_request_to_an_existing_list(self):
        other_list = List.objects.create()
        correct_list = List.objects.create()

        self.client.post(f'/lists/{correct_list.id}/add-item',
                         data={'item-text': 'A new item for an existing list'})

        self.assertEqual(Item.objects.count(), 1)
        new_item = Item.objects.first()
        self.assertEqual(new_item.text, 'A new item for an existing list')
        self.assertEqual(new_item.list, correct_list)

    def test_redirects_to_list_view(self):
        other_list = List.objects.create()
        correct_list = List.objects.create()

        response = self.client.post(f'/lists/{correct_list.id}/add-item',
                                    data={'item-text': 'A new item for an existing list'})

        self.assertRedirects(response, f'/lists/{correct_list.id}/')

    def test_passes_correct_list_to_template(self):
        other_list = List.objects.create()
        correct_list = List.objects.create()
        response = self.client.get(f'/lists/{correct_list.id}/')

        self.assertEqual(response.context['list'], correct_list)
```

A bit of Maths.

$$\sum_{\forall i}{x_i^{2}}$$


This is a bit more complex but fear not.

$$\left| \nabla \phi \right| = 1$$

$$
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
$$


``` c
#include <stdio.h>
#include <stdlib.h>
#include "parser/mpc.h"

/* Windows compile target */
#ifdef _WIN32

#include <string.h>

static char input[2048];

/* Fake readline function */
char* readline(char* prompt)
{
  fputs(prompt, stdout);
  fgets(buffer, 2048, stdin);
  char* cpy = malloc(strlen(buffer)+1);
  ctrcpy(cpy, buffer);
  cpy[strlen(cpy)-1] = '\0';
  return cpy;
}

/* Fake add_history function */
void add_history(char* unused) {}

/* Linux and Mac complie target */
#else

#include <editline/readline.h>
#include <editline/history.h>

#endif

/* Error types */
enum { LERR_DIV_ZERO, LERR_BAD_OP, LERR_BAD_NUM };

/* Lisp Value types */
enum { LVAL_NUM, LVAL_ERR };

/* Lisp Value data structure */
typedef struct
{
  int type;
  long num;
  int err;
} lval;

/* Number type lval */
lval lval_num(long x)
{
  lval v;
  v.type = LVAL_NUM;
  v.num = x;
  return v;
}

/* Error type lval */
lval lval_err(int x)
{
  lval v;
  v.type = LVAL_ERR;
  v.err = x;
  return v;
}

/* Print an lavl*/
void lval_print(lval v)
{
  switch (v.type)
  {
  case LVAL_NUM: printf("%li", v.num); break;
  case LVAL_ERR:
    if (v.err == LERR_DIV_ZERO) { printf("Error: Division by zero!"); }
    if (v.err == LERR_BAD_OP) { printf("Error: Invalid operator!"); }
    if (v.err == LERR_BAD_NUM) { printf("Error: Invalid number!"); }
    break;
  }
}

/* Print lval_print followed by new line */
void lval_println(lval v ) { lval_print(v); putchar('\n'); }

/* Use operator string to see which operation to perform */
lval eval_operator(lval x, char* operator, lval y)
{
  if (x.type == LVAL_ERR) { return x; }
  if (y.type == LVAL_ERR) { return y; }


  if (strcmp(operator, "+") == 0) { return lval_num(x.num + y.num); }
  if (strcmp(operator, "-") == 0) { return lval_num(x.num - y.num); }
  if (strcmp(operator, "*") == 0) { return lval_num(x.num * y.num); }
  if (strcmp(operator, "/") == 0) {
    return y.num == 0
      ? lval_err(LERR_DIV_ZERO)
      : lval_num(x.num / y.num);
  }
  return lval_err(LERR_BAD_OP);
}

lval eval(mpc_ast_t* t)
{
  if (strstr(t->tag, "number")) {
    /* Check if there is error in conversion */
    errno = 0;
    long x = strtol(t->contents, NULL, 10);
    return errno != ERANGE ? lval_num(x) : lval_err(LERR_BAD_NUM);
  }

  /* The operator is always the second child */
  char* operator = t->children[1]->contents;

  lval x = eval(t->children[2]);

  /* Iterate over the rest of the children and combine */
  int i = 3;
  while (strstr(t->children[i]->tag, "expression")) {
    x = eval_operator(x, operator, eval(t->children[i]));
    i++;
  }

  return x;
}

int main(int argc, char** argv)
{
  /* Create some parsers */
  mpc_parser_t* Number     = mpc_new("number");
  mpc_parser_t* Operator   = mpc_new("operator");
  mpc_parser_t* Expression = mpc_new("expression");
  mpc_parser_t* Lispy      = mpc_new("lispy");

  /* Define them with the following language */
  mpca_lang(MPCA_LANG_DEFAULT,
  "                                                         \
    number     : /-?[0-9]+/;                                \
    operator   : '+' | '-' | '*' | '/';                     \
    expression : <number> | '('<operator> <expression>+')'; \
    lispy      : /^/ <operator> <expression>+ /$/;          \
  ",
  Number, Operator, Expression, Lispy);

  /* Initial repl info */
  puts("Lispy version 0.0.1");
  puts("Press Ctrl+c to Exit\n");

  /* Actual repl */
  while(1)
  {

    char* input = readline("Lispy >>> ");

    add_history(input);

    /* Attempt to Parse the user input */
    mpc_result_t r;
    if (mpc_parse("<stdin>", input, Lispy, &r))
    {
      lval result = eval(r.output);
      lval_println(result);
      mpc_ast_delete(r.output);
    }
    else
    {
      /* Otherwise Print the error */
      mpc_err_print(r.error);
      mpc_err_delete(r.error);
    }

    free(input);
  }

  /* Remove the paresers */
  mpc_cleanup(4, Number, Operator, Expression, Lispy);

  return 0;
}
```

### Functions and class components

The simplest way to define a component is to write a JavaScript function:

``` javascript
function Welcome(props) {
  return <H1>Hello, {props.name}</H1>;
}
```

This function is a valid React component because it accepts a single "props"
(which stands for properties) object argument with data and returns a React
element. We call such components "function components" because they are
literally JavaScript functions.

You can also use an `ES6 class` to define a component:

``` javascript
class Welcome extends React.Component {
  render() {
    return <H1>Hello, {this.props.name}</H1>;
  }
}
```

The above two components are equivalent from React's point of view.

Functions and Class components both have some additional features that we will
discuss in the next section.

### Rendering a Component

Previously, we only encounter React elements that represent DOM tags:

``` javascript
const element = <div />;
```

However, elements can also represent user-defined components:

``` javascript
const element = <Welcome name="Sara" />;
```

When React sees an element representing a user-defined component, it passes JSX
attributes and children to this component as a single object. We call this
object "props".

For example, this code renders "Hello, Sara" on the page:

``` javascript
function Welcome(props) {
  return <H1>Hello, {props.name}</H1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Let's recap what happens in this example:

1. We call `ReactDom.render()` with the `<Welcome  name="Sara" />` element.
2. React call the `Welcome` component with `{name: 'Sara'}` as the props.
3. Our `Welcome` component returns a `<H1>Hello, Sara</H1>` element as the
the result.
4. React DOM efficiently updates the DOM to match `<H1>Hello, Sara</H1>`.

