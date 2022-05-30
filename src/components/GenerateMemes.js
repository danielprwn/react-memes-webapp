import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Input from "@mui/material/Input";
import { CardMedia } from "@material-ui/core";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 660,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    borderRadius: 4,
    flexGrow: 1,
    padding: 12,
    marginBottom: "5%",
  },
}));

const GenerateMemes = () => {
  const classes = useStyles();
  const [topText, setTopText] = useState("");
  const [bottomText, setbottomText] = useState("");
  const [allMemeImages, setAllMemeImages] = useState([]);
  const [randomImage, setRandomImage] = useState(
    "http://i.imgflip.com/tau4.jpg"
  );

  //Pobieranie bazdy danych memów z API za pomocą fetch
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        setAllMemeImages(memes);
      });
  }, []);

  // Śledzenie wpisywanego tekstu mema top i bottom
  const handleChangeTop = (event) => {
    const top = event.target.value;
    setTopText(top);
  };
  const handleChangeBottom = (event) => {
    const bottom = event.target.value;
    setbottomText(bottom);
  };

  //Losowe generowanie grafik memów
  const randomMeme = (event) => {
    event.preventDefault();
    let items = allMemeImages;
    let item = items[Math.floor(Math.random() * items.length)];
    setRandomImage(item.url);
  };

  //Wyświetlanie grafik memów oraz możliwość pobrania gotowego mema
  const capture = () => {
    const divToDisplay = document.getElementById("meme");
    html2canvas(divToDisplay, {
      allowTaint: true,
      useCORS: true,
      scrollY: -window.scrollY,
      scrollX: -window.scrollX,
    }).then(function (canvas) {
      let url = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "downloaded-mem.png";
      link.href = url;
      link.click();
    });
  };

  return (
    <Card className={classes.root}>
      <Input
        type="text"
        name="topText"
        placeholder="Top text here..."
        value={topText}
        onChange={handleChangeTop}
        autoComplete="off"
      />
      <br></br>
      <Input
        type="text"
        name="bottomText"
        placeholder="Bottom text here..."
        value={bottomText}
        onChange={handleChangeBottom}
        autoComplete="off"
      />
      <br></br>
      <Button
        id="randomMeme"
        onClick={randomMeme}
        variant="contained"
        color="success"
      >
        Change Mem!
      </Button>
      <br></br>
      <Button
        id="capture"
        onClick={capture}
        variant="contained"
        color="success"
      >
        Download Your Mem! ⬇
      </Button>
      <br></br>

      <Card className={classes.root} id="meme">
        <div style={{ position: "relative" }}>
          <CardMedia
            style={{ height: "100%", width: "100%", paddingTop: "1%" }}
            component="img"
            image={randomImage}
            title="Random Memes"
            alt="random memes"
          />
          <div
            style={{
              fontSize: 35,
              fontWeight: 700,
              position: "absolute",
              wordBreak: "break-word",
              color: "white",
              textShadow: 100,
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {" "}
            {topText}
          </div>

          <div
            style={{
              fontSize: 35,
              fontWeight: 700,
              position: "bottom",
              wordBreak: "break-word",
              color: "white",
              top: 10,
              left: "50%",
              transform: "translateY(-100%)",
              marginLeft: 90,
              marginRight: 90,
            }}
          >
            {bottomText}
          </div>
        </div>
      </Card>
    </Card>
  );
};

export default GenerateMemes;
