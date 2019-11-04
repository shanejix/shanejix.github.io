import React from "react";

import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

function NavCard({ title, desc, img, actions }) {
  
  const actionsArr = actions.map((action, idx) => {
    return (
      <Icon
        key={idx}
        type={action.type}
        onClick={() => {
          window.open(action.url);
        }}
      />
    );
  });

  return (
    <Card
      style={{
        width: 300,
        margin: 10
      }}
      // cover={
      //   <img
      //     alt="example"
      //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      //   />
      // }
      actions={[...actionsArr]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={title}
        description={desc}
      />
    </Card>
  );
}

export default NavCard;
