import React from "react";
import { styled } from "styled-components";

const AboutPage = () => {
  return (
    <div className="font-original-surfer text-lg sm:text-xl md:text-2xl mt-10 sm:mt-16 md:mt-30 mx-4 sm:mx-10 md:mx-20 lg:mx-30 leading-relaxed">
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
