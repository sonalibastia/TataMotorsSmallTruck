import React from "react";
import { useParams } from "react-router-dom";
import Knowmorebtn from "./Knowmorebtn";
import Knowinput from "./knowinput";
import GallerySection from "./GallerySection";

export default function Knowmore() {
  const { title } = useParams(); 

  return (
    <>
      <Knowmorebtn title={title} />
      {/* <Knowmoreprogress title={title} /> */}
      <GallerySection title={title}/>
      <Knowinput title={title} />
    </>
  );
}
