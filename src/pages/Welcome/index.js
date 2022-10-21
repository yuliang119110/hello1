import React from "react";

import { Column, Row, Text, Stack, Img, Button } from "components";

const WelcomePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-dmsans items-center justify-start mx-[auto] lg:pb-[38px] xl:pb-[48px] 2xl:pb-[54px] 3xl:pb-[64px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <div className="bg-purple_500 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[100%]"></div>
          <Row className="items-start justify-between 2xl:mt-[103px] 3xl:mt-[124px] lg:mt-[73px] xl:mt-[92px] w-[86%]">
            <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[81%]">
              <Column className="justify-start lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
                <Column className="justify-start w-[76%]">
                  <Text className="text-gray_901 w-[auto]" variant="body1">
                    WELCOME DESIGNERS
                  </Text>
                  <Column className="items-center justify-start lg:mt-[46px] xl:mt-[57px] 2xl:mt-[64px] 3xl:mt-[77px] w-[100%]">
                    <Text
                      className="font-normal leading-[normal] not-italic text-gray_901 w-[98%]"
                      variant="body6"
                    >
                      Thank you for downloading my project.
                      <br />
                      Hope it’ll be helpful for you and you’ll enjoy using this
                      in your projects and practices
                    </Text>
                    <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[100%]">
                      <Text
                        className="absolute bottom-[0] rowfaizansayani"
                        variant="body6"
                      >
                        Give a heart to this figma file and follow me to get
                        updated from my recent posts{" "}
                      </Text>
                      <Img
                        src="images/img_favorite.svg"
                        className="absolute lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] left-[15%] top-[0] w-[2%]"
                        alt="favorite"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="justify-start 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[76px] xl:mt-[96px] w-[74%]">
                  <Text className="text-gray_901 w-[auto]" variant="body1">
                    Have an amazing project? Let’s Discuss:
                  </Text>
                  <Text className="font-bold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[13px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-gray_901 underline w-[auto]">
                    sayanifaizan@gmail.com
                  </Text>
                </Column>
                <Column className="justify-start 3xl:mt-[115px] lg:mt-[68px] xl:mt-[85px] 2xl:mt-[96px] 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[100%]">
                  <Text className="text-gray_901 w-[auto]" variant="body1">
                    Why I Made This
                  </Text>
                  <Text
                    className="font-normal leading-[normal] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] not-italic text-gray_901 w-[95%]"
                    variant="body6"
                  >
                    “Shihami” is an NFT marketplace where you can buy NFTs and
                    sell your bought ones to another buyer. This landing page is
                    made totally to help my figmates get started for their
                    projects
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start lg:mt-[42px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[71px] w-[71%]">
                <Text className="text-gray_901 w-[auto]" variant="body1">
                  WHO I AM?
                </Text>
                <Row className="items-center justify-between lg:mt-[23px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Row className="items-end justify-between w-[38%]">
                    <Img
                      src="images/img_ellipse1.png"
                      className="lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] rounded-radius50 lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]"
                      alt="EllipseOne"
                    />
                    <Column className="justify-start mb-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[69%]">
                      <Text
                        className="font-bold text-gray_901 w-[auto]"
                        variant="body6"
                      >
                        Faizan Sayani
                      </Text>
                      <Text
                        className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] rowfaizansayani"
                        variant="body6"
                      >
                        UX & Game Designer{" "}
                      </Text>
                    </Column>
                  </Row>
                  <Row className="font-segoeui items-start justify-between pt-[1px] w-[53%]">
                    <Row className="items-center w-[25%]">
                      <Button
                        className="flex lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"
                        size="smIcn"
                        variant="icbFillIndigoA200"
                      >
                        <Img
                          src="images/img_vector.svg"
                          className="flex items-center justify-center"
                          alt="Vector"
                        />
                      </Button>
                      <a
                        href={"https://www.behance.net/FaizanSayani"}
                        target="_blank"
                        className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Behance
                      </a>
                    </Row>
                    <Row className="items-start justify-center w-[23%]">
                      <Button
                        className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                        shape="icbCircleBorder10"
                        size="smIcn"
                        variant="icbGradientPink600Pink300"
                      >
                        <Img
                          src="images/img_globe.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px]"
                          alt="globe"
                        />
                      </Button>
                      <a
                        href={"https://dribbble.com/designitfaizan"}
                        target="_blank"
                        className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Dribble
                      </a>
                    </Row>
                    <Row className="items-start mt-[1px] w-[24%]">
                      <Button
                        className="flex lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] items-center justify-center mb-[1px] lg:w-[12px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbFillLightblue800"
                      >
                        <Img
                          src="images/img_linkedin.svg"
                          className="flex items-center justify-center"
                          alt="linkedin"
                        />
                      </Button>
                      <a
                        href={
                          "https://www.linkedin.com/in/faizan-sayani-3b8363145/"
                        }
                        target="_blank"
                        className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 underline w-[auto]"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </Row>
                  </Row>
                </Row>
              </Column>
            </Column>
            <a
              href={"https://www.figma.com/@faizansayani"}
              target="_blank"
              className="lg:text-[13px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] underline rowfaizansayani"
              rel="noreferrer"
            >
              @FaizanSayani
            </a>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default WelcomePage;
