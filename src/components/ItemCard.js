import React from 'react';

import { Card } from 'antd';
import { Button } from 'antd';
import ShoppingCartOutlined from '@ant-design/icons/ShoppingCartOutlined';

import 'antd/dist/antd.css';
import './ItemCard.css';

const { Meta } = Card;

const ItemCard = ({ image, title, description, price }) => {
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
        <div class="btn">
          <Button
            type="primary"
            className="add-to-cart"
            shape="round"
            size="large"
            ghost="true"
            icon={<ShoppingCartOutlined />}
          >
            خریدیے
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
