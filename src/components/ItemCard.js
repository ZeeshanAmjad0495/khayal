import React from 'react';
import { useDispatch } from 'react-redux';

import db from '../firebase/firebase.utils';
import { addItemsToCart } from '../features/cartSlice';

import { Button, Card } from 'antd';
import ShoppingCartOutlined from '@ant-design/icons/ShoppingCartOutlined';

import 'antd/dist/antd.css';
import './ItemCard.css';

const { Meta } = Card;

const ItemCard = ({ image, title, description, price, quantity }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const selectedItem = { image, title, price, quantity };
    dispatch(addItemsToCart(selectedItem));
  };

  return (
    <div className="cards">
      <Card
        className="card"
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={image} />}
      >
        <Meta className="meta" title={title} description={description} />
        <div className="btn">
          <Button
            type="primary"
            className="add-to-cart"
            shape="round"
            size="large"
            ghost="true"
            icon={<ShoppingCartOutlined />}
            onClick={handleOnClick}
          >
            خریدیے
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
