---
title: Django-test
slug: django-test
tags: 'python math'
abstract: 'This is a blog post that demonstrates rendering of a few programming
languages.
This is a blog post that demonstrates rendering of a few programming languages.
This is a blog post that demonstrates rendering of a few programming languages.'
isPublished: true
publishDate: 10.07.2021
updateDate: 10.05.21
---

~~~ Python
from django.db import models

from billing.models import BillingProfile

ADDRESS_TYPE = (
    ("billing", "Billing"),
    ("shipping", "Shipping"))


class Address(models.Model):
    billing_profile = models.ForeignKey(BillingProfile, models.CASCADE)
    address_type = models.CharField(max_length=120, choices=ADDRESS_TYPE)
    address_line_1 = models.CharField(max_length=120)
    address_line_2 = models.CharField(max_length=120, null=True, blank=True)
    city = models.CharField(max_length=120)
    country = models.CharField(max_length=120)
    post_code = models.CharField(max_length=120)

    def __str__(self):
        return str(self.billing_profile)

    def get_address(self):
        return "{line1},{line2},{city},{country},{post_code}"\
            .format(line1=self.address_line_1,
                    line2=self.address_line_2 or "",
                    city=self.city,
                    country=self.country,
                    post_code=self.post_code)
~~~

~~~ Python
from django.conf import settings
from django.db import models
from django.db.models.signals import pre_save, m2m_changed

from products.models import Product

User = settings.AUTH_USER_MODEL
nullable_key = models.SET_NULL


class CartManager(models.Manager):

    def new_or_get_existing(self, request):
        cart_id       = request.session.get("cart_id", None)
        existing_cart = self.get_queryset().filter(id=cart_id)

        if existing_cart.count() == 1:
            is_new_cart = False
            cart        = existing_cart.first()

            if request.user.is_authenticated and cart.user is None:
                cart.user = request.user
                cart.save()
        else:
            is_new_cart = True
            cart = Cart.objects.new(user=request.user)
            request.session["cart_id"] = cart.id
        return cart, is_new_cart

    @property
    def new(self, user=None):
        current_user = None

        if user is not None:
            if user.is_authenticated:
                current_user = user

        return self.model.objects.create(user=current_user)
~~~

~~~ Javascript
/**
 * Parse a string (price representation) to an integer.
 *
 * Product's price is represented as string in the JSON response.
 * By replacing the separator with empty string we can get the penny value of
 * that price and then parse it to 'Int'.
 *
 * @example PriceParser('1,20') // 120
 * PriceParser('1.20') // 120
 * @param {String} price
 * @returns {Number}
 */
function PriceParser(price) {
  // TODO: Price have to be parsed to decimal.
  const integerPrice = parseInt(price.replace(/(\.|,)/, ''), 10);

  if (integerPrice > Number.MAX_SAFE_INTEGER) {
    throw new Error(`${integerPrice} is larger than MAX_SAFE_INTEGER !`);
  }

  return integerPrice;
}

// Polyfill Number.MAX_SAFE_INTEGER
if (!Number.MAX_SAFE_INTEGER) {
  Number.MAX_SAFE_INTEGER = 9007199254740991;
}
export default PriceParser;
~~~

~~~ JSX
import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

import {connect} from 'react-redux';
import {removeProduct} from '../../store/actions/cart/removeProduct';
import PriceDisplay from '../../services/PriceDisplay';

import Title from '../commons/Title';
import CartRow from '../CartRow';
import Button from '../commons/Button';
import Input from '../commons/Input';
import CheckBox from '../commons/CheckBox';

class Cart extends React.Component {

  removeProduct = product => () => {
    this.props.removeProduct(product);
  }

  render() {
    return(
      <div className="cart">
        <Title  content="Your Order" />
        {this.props.cart.products && this.props.cart.products.map(product => {
          return (
            <CartRow
              key={product.title + Math.random()}
              quantity={product.quantity}
              title={product.title}
              price={PriceDisplay(product.price)}
              onClick={this.removeProduct(product)}
            />

          );
        })}
        {this.props.cart.products[0] === undefined ?
          <CartRow
            type="total"
            title="Empty order!"
          />
          :
          <CartRow
            type="total"
            title="Subtotal:"
            price={PriceDisplay(this.props.cart.subTotal)}
          />}
        <Title type="middle" content="Bonuses" />
        <Input placeholder="Friend's email that you recommend" />
        <CartRow type="total" title="Is it your first order?" />
        <CheckBox />
        <Title type="middle" content="Contact" />
        <Input placeholder="Email" />
        <Title type="middle" content="Address" />
        <Input placeholder="Street" />
        <Input placeholder="Town" />
        <Input placeholder="Postcode" />
        <CartRow type="total" title="Terms and conditions" />
        <CheckBox />
        <Button content="ORDER" />
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.object,
  removeProduct: PropTypes.func
};

const mapStateToProps = ({cart}) => ({cart});
export default connect(mapStateToProps, {removeProduct})(Cart);
~~~


~~~ vim
" Generate doc comment
function! lib#GenerateDOCComment()
  let l    = line('.')
  let i    = indent(l)
  let pre  = repeat(' ',i)
  let text = getline(l)
  let params   = matchstr(text,'([^)]*)')
  let paramPat = '\([$a-zA-Z_0-9]\+\)[, ]*\(.*\)'
  echomsg params
  let vars = []
  let m    = ' '
  let ml = matchlist(params,paramPat)
  while ml!=[]
    let [_,var;rest]= ml
    let vars += [pre.' * @param '.var]
    let ml = matchlist(rest,paramPat,0)
  endwhile
  let comment = [pre.'/**',pre.' * '] + vars + [pre.' */']
  call append(l-1,comment)
  call cursor(l+1,i+3)
endfunction
~~~

~~~ idris
isLeap : Integer -> Bool
isLeap year = (mod year 400 == 0) ||
              ((mod year 4 == 0) && not (mod year 100 == 0))

numberOfDays : Integer -> Integer -> Integer
numberOfDays year 2 = if isLeap year then 29 else 28
numberOfDays _ 9 = 30
numberOfDays _ 4 = 30
numberOfDays _ 6 = 30
numberOfDays _ 11 = 30
numberOfDays _ _ = 31

validDate : Integer -> Integer -> Integer -> Bool
validDate year month day = (day >= 1) &&
                           (day <= numberOfDays year month) &&
                           (month >= 1) &&
                           (month <= 12)



data Date : Integer -> Integer -> Integer -> Type where
  makeDate : (y:Integer) -> (m:Integer) -> (d:Integer) -> so (validDate y m d)
            -> Date ymd

~~~

~~~ diff
-ADDRSESS_TYPE = (
+ADDRESS_TYPE = (
     ("billing", "Billing"),
     ("shipping", "Shipping"))


 class Address(models.Model):
     billing_profile = models.ForeignKey(BillingProfile, models.CASCADE)
-    address_type = models.CharField(max_length=120, choices=ADDRSESS_TYPE)
+    address_type = models.CharField(max_length=120, choices=ADDRESS_TYPE)
~~~
