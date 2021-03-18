import AliceCarousel from 'react-alice-carousel';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/images/forest.jpg" width="50rem" onDragStart={handleDragStart} />,
  <img src="/images/feu.jpg" width="50rem" onDragStart={handleDragStart} />,
  <img src="/images/canoe.jpg" width="50rem" onDragStart={handleDragStart} />,
];

export default function Caroussel() {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}