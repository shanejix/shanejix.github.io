import React from "react";

import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

function NavCard({ title, desc, img, actions }) {
  img =img || "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

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
      // cover={<img alt="" src="" />}
      actions={[...actionsArr]}
    >
      <Meta avatar={<Avatar src={img} />} title={title} description={desc} />
    </Card>
  );
}

export default NavCard;
