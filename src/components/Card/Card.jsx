import styles from "./Card.module.css";

const Card = ({ name, winner, logo, players }) => {
  //   const bgStyle = {
  //     backgroundImage: "url(" + logo + ")",
  //     backgroundPosition: "center",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //   };

  return (
    <div className={styles.card}>
      <div className={styles.infos}>
        <h2>{name}</h2>
        <h3>{winner}</h3>
        <img src={`${logo}`} alt="logo" />
        <div className={styles.players}>
          <ul>
            {players &&
              players.map((player) => (
                <li key={player}>
                  <img src={player.flag} alt="Flag" className={styles.flag} />
                  {player.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
