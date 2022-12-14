import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCart } from '../redux/slices/cart/selectors';
import { clearItems } from '../redux/slices/cart/slice';

import CartEmpty from '../componets/CartEmpty';
import CartItemBlock from '../componets/CartItemBlock';
import SvgGenerator from '../SvgGenerator/SvgGenerator';

const Cart: React.FC = () => {
    const { items, totalPrice } = useSelector(selectCart);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    return (
        <>
            {items.length !== 0 ? (
                <div className="container container--cart">
                    <div className="cart">
                        <div className="cart__top">
                            <h2 className="content__title">
                                {/* <SvgGenerator id="basket-black" /> */}
                                Корзина
                            </h2>
                            <div
                                className="cart__clear"
                                onClick={() => {
                                    dispatch(clearItems());
                                }}>
                                <SvgGenerator id="cart-clear" />
                                <span>Очистить корзину</span>
                            </div>
                        </div>
                        <div className="content__items">
                            {items.map((item: any) => (
                                <CartItemBlock {...item} key={item.id} />
                            ))}
                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span>
                                    Всего пицц: <b>{totalCount} шт.</b>
                                </span>
                                <span>
                                    Сумма заказа: <b>{totalPrice.toLocaleString()} ₽</b>
                                </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <div
                                    onClick={() => {
                                        nav(-1);
                                    }}
                                    className="button button--outline button--add go-back-btn">
                                    <SvgGenerator id="go-back" />

                                    <span>Вернуться назад</span>
                                </div>
                                <div className="button pay-btn">
                                    <span>Оплатить сейчас</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <CartEmpty />
            )}
        </>
    );
};
export default Cart;
