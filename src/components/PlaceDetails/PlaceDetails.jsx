import React from 'react';
import { Typography, Box, Button, Card, CardMedia, CardContent, CardAction, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab'

import useStyles from './styles'

const PlaceDetails = ({ place }) => {
  console.log(`debug placedetails`, place)
  console.log(`debug name`, place.name)
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 300}}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
      } 
      title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;