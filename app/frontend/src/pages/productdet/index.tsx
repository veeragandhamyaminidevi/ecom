import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
const Data=[
    {
    "id":1,
    "title":"Mochi",
    "des":"Mochi (pronounced MOE-chee) is a Japanese dessert made of sweet glutinous rice flour or mochigome. Mochi dough is often tinted with green tea powder (matcha) or other food colorings and wrapped around a sweet center to form a small, bite-sized confection with a chewy, smooth, elastic texture.",
    "img":"/images/pages/th-1.jpg",
    "price":'$1000'
  },
  {
    "id":2,
    "title":"Hayashi rice",
    "des":"Hayashi rice is a dish popular in Japan as a Western-style dish or yōshoku. It usually contains beef, onions, and button mushrooms, in a thick demi-glace sauce which often contains red wine and tomato sauce. This sauce is served atop or alongside steamed rice. The sauce is sometimes topped with a drizzle of fresh cream.",
    "img":"/images/pages/th-2.jpg",
    "price":'$1000'

  },
  {
    "id":3,
    "title":"Okowa",
    "des":"Okowa is a Japanese steamed rice dish made with glutinous rice mixed with meat or vegetables.[1] It is sometimes combined with wild herbs (sansai okowa) and vessel chestnuts (kuri okowa).[2] It is generally boiled glutinous rice blended with Azuki beans to give it red color for festive look, made by boiling regular rice with Azuki beans.",
    "img":"/images/pages/th-3.jpg",
    "price":'$1000'
  },
  {
    "id":4,
    "title":"Kamameshi",
    "des":"Kamameshi literally translates to kettle rice and is a traditional Japanese rice dish cooked in an iron pot called a kama. Kamameshi originally referred to rice that was eaten communally from the kama. Coworkers or family members either ate directly from the kama pot or by transferring the rice to individual bowls.",
    "img":"/images/pages/th-4.jpg",
    "price":'$1000'
  }
  ,
  {
    "id":5,
    "title":"Mochi",
    "des":"Mochi (pronounced MOE-chee) is a Japanese dessert made of sweet glutinous rice flour or mochigome. Mochi dough is often tinted with green tea powder (matcha) or other food colorings and wrapped around a sweet center to form a small, bite-sized confection with a chewy, smooth, elastic texture.",
    "img":"/images/pages/th-1.jpg"
  
  },
  {
    "id":6,
    "title":"Hayashi rice",
    "des":"Hayashi rice is a dish popular in Japan as a Western-style dish or yōshoku. It usually contains beef, onions, and button mushrooms, in a thick demi-glace sauce which often contains red wine and tomato sauce. This sauce is served atop or alongside steamed rice. The sauce is sometimes topped with a drizzle of fresh cream.",
    "img":"/images/pages/th-2.jpg",
    "price":'$1000'
  },
  {
    "id":7,
    "title":"Okowa",
    "des":"Okowa is a Japanese steamed rice dish made with glutinous rice mixed with meat or vegetables.[1] It is sometimes combined with wild herbs (sansai okowa) and vessel chestnuts (kuri okowa).[2] It is generally boiled glutinous rice blended with Azuki beans to give it red color for festive look, made by boiling regular rice with Azuki beans.",
    "img":"/images/pages/th-3.jpg",
    "price":'$1000'
    
  },
  {
    "id":8,
    "title":"Kamameshi",
    "des":"Kamameshi literally translates to kettle rice and is a traditional Japanese rice dish cooked in an iron pot called a kama. Kamameshi originally referred to rice that was eaten communally from the kama. Coworkers or family members either ate directly from the kama pot or by transferring the rice to individual bowls.",
    "img":"/images/pages/th-4.jpg",
    "price":'$1000'
  }
  ] 
  
const ProductDetails = ({}) => {
  const { id } = useParams(); // Get the id parameter from the URL
  const product = Data.find((item: { id: number; }) => item.id === parseInt(id)); // Find the product with the matching id

  if (!product) {
    return (
      <Container>
        <Typography variant="h4">Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ paddingTop: '64px' }}>
        <Typography variant="h4">{product.title}</Typography>
        <Typography>{product.des}</Typography>
        <img src={product.img} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
    </Container>
  );
};

export default ProductDetails;

