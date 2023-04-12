import styles from './LogoButton.module.css';

function LogoButton() {
  const bg = {
    backgroundImage: 'url(./src/img/html.png )',
    backgroundSize: 'cover',
  };
  return <div style={bg}></div>;
}

export default LogoButton;
