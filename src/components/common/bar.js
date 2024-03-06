import { Bar1 } from "../../ui-components";

const BarComponent = (data) => {
  const cardOverride = {
    Card: {},
    CardImage: {
      src: data.card.image,
      alt: data.card.title,
    },
    cardDesc: {
      children: data.card.description,
      textAlign: "center",
      display: "block",
      width: "100%",
      left: 0,
      padding: "0 10px",
    },
    CardTitle: {
      children: data.card.title,
      color: "red",
      textAlign: "center",
      display: "block",
      width: "100%",
      padding: "0 10px",
      left: 0,
    },
    BtnTitle: {
      children: data.card.btnText,
      width: "210px",
      textAlign: "center",
      display: "block",
      left: "0",
    },
    BtnBox: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        console.log("Button clicked");
      },
    },
  };
  // Render the bar component here
  return (
    <div className="bar">
      <Bar1 overrides={cardOverride} />
    </div>
  );
};

export default BarComponent;
