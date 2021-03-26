import AliceCarousel from 'react-alice-carousel';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/images/forest.jpg" width="300rem" height="auto" onDragStart={handleDragStart} />,
  <img src="/images/feu.jpg" width="300rem" onDragStart={handleDragStart} />,
  <img src="/images/canoe.jpg" width="300rem" onDragStart={handleDragStart} />,
];

export default function Caroussel() {
  return (
    <AliceCarousel 
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}autoPlay items={items} />
  );
}