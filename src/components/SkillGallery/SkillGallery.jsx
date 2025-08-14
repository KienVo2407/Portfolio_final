// Photogallery.jsx
import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import './SkillGallery.scss';

//images
import  aftereffect from '/about/Logo/aftereffect.png';
import  dimension from '/about/Logo/dimension.png';
import  googleads from '/about/Logo/googleads.png';
import  illustration from '/about/Logo/illustration.png';
import  indesign from '/about/Logo/indesign.png';
import  photoshop from '/about/Logo/photoshop.png';
import  premeire from '/about/Logo/premeire.png';
import  react from '/about/Logo/react.png';
import  sql from '/about/Logo/sql.png';
// import look10 from './assets/PhotoGallery/look10.webp';
// import look11 from './assets/PhotoGallery/look11.webp';
// import look12 from './assets/PhotoGallery/look12.webp';
// import look13 from './assets/PhotoGallery/look13.webp';


const images = [
{
src: aftereffect,
alt: 'After Effect Logo',
},
{
src: dimension,
alt: 'After Effect Logo',
},
{
src: googleads,
alt: 'Google Ads Logo',
},
{
src: illustration,
alt: 'Illustration Logo',
},
{
src: indesign,
alt: 'Indesign Logo',
},
{
src: photoshop,
alt: 'Photoshop Logo',
},
{
src: premeire,
alt: 'Premiere Logo',
},
{
src: react,
alt: 'React Logo',
},
{
src: sql,
alt: 'SQL Logo',
 }
// {
// src: look10,
// alt: 'Colorful Decora-inspired outfit posing in front of a
// Harajuku-style mural wall',
// },
// {
// src: look11,
// alt: 'Vintage-inspired colorful floral dress in Shinsekai, Osaka, with
// matching hat and sunglasses',
// },

// {
// src: look8,
// alt: 'Graffiti backdrop with colorful decora fashion, featuring
// rainbow overalls and handmade accessories',
// },
// {
// src: look13,
// alt: 'Vintage-inspired colorful floral dress in Shinsekai, Osaka, with
// matching hat and sunglasses',
// },
];

const SkillGallery = ({ direction = 'ltr' }) => {
const options = {
type: 'loop',
drag: 'free',
arrows: false,
pagination: false,
autoWidth: true,
autoHeight: true,
direction: direction, // 'ltr' or 'rtl'
autoScroll: {
speed: direction === 'rtl' ? -1 : 1,
pauseOnHover: false,
pauseOnFocus: false,
},
breakpoints: {
600: {
autoScroll: {
speed: direction === 'rtl' ? -0.3 : 0.3,
},
},
},
};

return (
<div className="photo-gallery-wrapper">
<Splide options={options} extensions={{ AutoScroll }}>
{images.map((img, index) => (
<SplideSlide key={index}>
<div className="photo-slide">
<img src={img.src} alt={img.alt} />
</div>
</SplideSlide>
))}
</Splide>
</div>
);
};

export default SkillGallery;