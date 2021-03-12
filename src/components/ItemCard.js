import React from 'react';
import { useDispatch } from 'react-redux';

import db from '../firebase/firebase.utils';
import { addItemToCart } from '../features/cartSlice';

import { Card } from 'antd';
import { Button } from 'antd';
import ShoppingCartOutlined from '@ant-design/icons/ShoppingCartOutlined';

import 'antd/dist/antd.css';
import './ItemCard.css';

const { Meta } = Card;

const ItemCard = ({ image, title, description, price }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const selectedItem = { image, title, price };
    dispatch(addItemToCart(selectedItem));

    db.collection('orders').add({
      title: title,
      imageUrl: image,
      price: price,
    });
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
        {price}
        <div className="btn">
          <Button
            type="primary"
            className="add-to-cart"
            shape="round"
            size="large"
            ghost="true"
            icon={<ShoppingCartOutlined />}
            onClick={() => handleOnClick()}
          >
            خریدیے
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
