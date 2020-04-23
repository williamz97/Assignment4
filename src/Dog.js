import React, { Component } from 'react';

function Dog(props) {
    return (
        <img src={props.url} style={styles.img_styles} />
    )
}

const styles = {
  img_styles:{
    height: 300,
    width: 300,
  }
}

export default Dog;