import React from "react";
import { styled } from "styled-components";

const AboutPage = () => {
  return (
    <div className="font-original-surfer text-2xl mt-30 ml-30 mr-30">
      {" "}
      <Name>Chris</Name> grew up in Maryland and has called Utah home for the
      last decade. Those who have worked with Chris know him as a detail
      oriented, results driven, passionate web developer.
      <br />
      <br /> Chris holds a Business degree from Towson University and a
      certificate from the coding bootcamp at the University of Utah, making him
      a well-rounded hire with a lot to offer. <br />
      <br /> When Chris is not in front of his computer you can find him on a
      board at the beach or in the mountains.
    </div>
  );
};

export default AboutPage;

const Name = styled.span`
  text-align: center;
  color: #f9ca24;
`;
