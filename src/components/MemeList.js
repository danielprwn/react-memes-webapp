import { useEffect } from "react";
import List from "@material-ui/core/List";
import Meme from "./Memes";

//The function of scrolling to the top of the page after render and displaying memes on the website
function ScrollMemesTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const MemeList = ({ array }) => {
  const memeElement = (array) =>
    array.map((meme) => <Meme key={meme.id} {...meme} />);

  return (
    <>
      <ScrollMemesTop />
      <List>{memeElement(array)}</List>
    </>
  );
};

export default MemeList;
