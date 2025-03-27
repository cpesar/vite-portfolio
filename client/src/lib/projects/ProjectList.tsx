import ProjectData from "./ProjectData/projectData";
import { Card, Carousel } from "antd";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";

import { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import styled from "styled-components";

const { Meta } = Card;

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<Element>;
}

const ProjectList = () => {
  const carouselRef = useRef<CarouselRef>(null);

  const CustomPrevArrow = (props: ArrowProps) => (
    <PrevButton onClick={props.onClick}>
      <ImArrowLeft />
    </PrevButton>
  );

  const CustomNextArrow = (props: ArrowProps) => (
    <NextButton onClick={props.onClick}>
      <ImArrowRight />
    </NextButton>
  );

  const carouselProps = {
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <StyledCarousel
        ref={carouselRef}
        {...carouselProps}
        className="project-carousel"
      >
        {ProjectData.map((project, index) => (
          <CarouselSlide key={index}>
            <SlideContainer>
              <ProjectCard
                hoverable
                cover={
                  <ImageContainer>
                    <ProjectImage alt={project.title} src={project.img} />
                  </ImageContainer>
                }
                actions={[
                  project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                  ),
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>,
                ].filter(Boolean)}
              >
                <Meta
                  title={project.title}
                  description={
                    project.description || "No description available"
                  }
                />
              </ProjectCard>
            </SlideContainer>
          </CarouselSlide>
        ))}
      </StyledCarousel>
    </CarouselContainer>
  );
};

export default ProjectList;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 40px;
  position: relative;
`;

const StyledCarousel = styled(Carousel)`
  &.project-carousel .slick-slide {
    padding: 0 10px;
    box-sizing: border-box;
    height: auto;
  }

  &.project-carousel .slick-track {
    display: flex !important;
  }

  &.project-carousel .slick-slide > div {
    height: 100%;
    display: flex;
  }

  & .ant-card-meta-description {
    height: 50px;
    overflow: hidden;
  }

  & .ant-card-body {
    height: 100px;
    overflow: hidden;
  }

  & .ant-card {
    display: flex;
    flex-direction: column;
  }

  & .ant-card-cover {
    flex: 0 0 auto;
  }

  & .ant-card-body {
    flex: 1 0 auto;
  }

  & .ant-card-actions {
    flex: 0 0 auto;
  }

  /* Position the dots further down */
  & .slick-dots {
    bottom: -30px;
  }

  /* Style for the navigation arrows */
  & .slick-prev,
  & .slick-next {
    font-size: 24px;
    color: #333;
    z-index: 10;
  }

  & .slick-prev {
    left: -40px;
  }

  & .slick-next {
    right: -40px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #333;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(NavButton)`
  left: -30px;
`;

const NextButton = styled(NavButton)`
  right: -30px;
`;

const SlideContainer = styled.div`
  padding: 40px 10px;
  height: 100%;
  display: flex;
  //   background: transparent;
`;

const ProjectCard = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  //   background: transparent;
`;

const ImageContainer = styled.div`
  height: 350px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselSlide = styled.div`
  height: 100%;
  display: flex;
`;
