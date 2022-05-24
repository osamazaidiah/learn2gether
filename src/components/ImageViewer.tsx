import { useState, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";

const ImagesList = {
  "triangle for areas": "area/triangles/triangle.PNG",
  "Area of triangle: base and height": "area/triangles/areatrihalfbase.PNG",
  "Area of triangle: two sides and an angle":
    "area/triangles/areatrihalfab.PNG",
  "Area of triangle: example1-image": "area/triangles/Example01-2.jpg",
  "Area of triangle: example1-problem": "area/triangles/Example01-1.jpg",
  "Area of triangle: exer01": "area/triangles/Exer01.jpg",
  "Area of triangle: exer02": "area/triangles/Exer02.jpg",
  "Area of triangle: exer03": "area/triangles/Exer03.jpg",
  //Circles and sectors
  "Circles:eq1": "area/circlesAndSectors/equations01.jpg",
  "Circles:eq2": "area/circlesAndSectors/equations02.png",
  "Circles:part01": "area/circlesAndSectors/example01.png",
  "Circles:part02": "area/circlesAndSectors/example02.png",
  "Circles:part03": "area/circlesAndSectors/03exercise.png",
  "Circles:part04": "area/circlesAndSectors/04pizzaorsector.png",
  "Circles:part05": "area/circlesAndSectors/05example.png",
  "Circles:part06": "area/circlesAndSectors/06exercise.png",
  "Circles:part07": "area/circlesAndSectors/07Example.png",
  "Circles:part08": "area/circlesAndSectors/sectorex1.jpg",
  "Circles:part09": "area/circlesAndSectors/sectorex2.jpg",
  "Circles:part10": "area/circlesAndSectors/sectorex3.jpg",
  "Circles:part11-answers": "area/circlesAndSectors/sectorex1-3answers.jpg"
};
type AppImages = keyof typeof ImagesList;

export default function ImageViewer({
  imageDescription,
  maxWidth = 300,
  minWidth = 100
}: {
  imageDescription: AppImages;
  maxWidth?: number;
  minWidth?: number;
}) {
  const [image, setImage] = useState("");

  useEffect(() => {
    (function (imageSubfolderFileName) {
      import(`../assets/${imageSubfolderFileName}`).then((image) =>
        setImage(image.default)
      );
    })(ImagesList[imageDescription]);
  }, [imageDescription]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {image === "" ? (
        <Typography>Loading...</Typography>
      ) : (
        <div style={{ minWidth: "100%" }}>
          <img src={image} style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
}
