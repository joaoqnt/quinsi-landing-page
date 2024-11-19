import React from "react";

const Card = ({ icon, title, text }) => {
  return (
    <div style={styles.card}>
      <div style={styles.iconWrapper}>
        <div style={styles.icon}>{icon}</div>
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.text}>{text}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    position: "relative",
    border: "1px solid #E0E0E0", // Borda cinza bem claro
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#FFF",
    width: "300px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    marginTop: "40px", // Deixa espaço para o ícone
  },
  iconWrapper: {
    position: "absolute",
    top: "-25px", // Metade para fora
    left: "16px",
    zIndex: 1,
  },
  icon: {
    backgroundColor: "#EFEFFD", // Fundo roxo claro
    color: "#5D31FF", // Cor do ícone
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  content: {
    marginTop: "20px", // Ajusta para alinhar corretamente o conteúdo
    textAlign: "left", // Alinha o conteúdo à esquerda
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0 0 8px",
    color: "#333",
    textAlign: "left", // Garante o alinhamento à esquerda
  },
  text: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
    margin: 0,
    textAlign: "left", // Garante o alinhamento à esquerda
  },
};


export default Card;
