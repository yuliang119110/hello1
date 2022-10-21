import React from "react";

import { Column, Row, Text, Img, Button } from "components";

const HowToUsePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-dmsans items-center justify-start mx-[auto] xl:pb-[112px] 2xl:pb-[126px] 3xl:pb-[151px] lg:pb-[89px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <div className="bg-purple_500 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[100%]"></div>
            <Row className="items-end justify-between 3xl:mt-[118px] lg:mt-[69px] xl:mt-[87px] 2xl:mt-[98px] w-[86%]">
              <Row className="items-start justify-evenly w-[21%]">
                <Text
                  className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rowfaizansayani"
                  variant="body6"
                >
                  Faizan Sayani
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[19px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] lg:w-[18px] xl:w-[23px] 2xl:w-[25px] 3xl:w-[31px]"
                  alt="arrowright"
                />
                <Text className="mt-[2px] rowfaizansayani" variant="body6">
                  How To Use
                </Text>
              </Row>
              <a
                href={"https://www.figma.com/@faizansayani"}
                target="_blank"
                className="mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[13px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] underline rowfaizansayani"
                rel="noreferrer"
              >
                @FaizanSayani
              </a>
            </Row>
          </Column>
          <Column className="justify-end xl:ml-[107px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] 3xl:mt-[119px] lg:mt-[70px] xl:mt-[88px] 2xl:mt-[99px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[71%]">
            <Column className="justify-start w-[80%]">
              <Text className="text-gray_901 w-[auto]" variant="body1">
                How To Use
              </Text>
              <Column className="justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]">
                <Text className="rowfaizansayani" variant="body6">
                  Welcome to the Shihami Landing page. As said, you can use this
                  file for any of your purpose
                </Text>
                <Text
                  className="font-normal leading-[normal] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] not-italic text-gray_901 w-[83%]"
                  variant="body6"
                >
                  The file is made using the Atomic design system and is
                  splitted in four parts:
                  <br />
                  <br />
                  Design tokens
                  <br />
                  Atoms
                  <br />
                  Molecules
                  <br />
                  Organisms
                </Text>
              </Column>
            </Column>
            <Column className="justify-start 2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[76px] xl:mt-[95px] w-[100%]">
              <Text className="text-gray_901 w-[auto]" variant="body1">
                How Can I Use This For My Purpose
              </Text>
              <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[100%]">
                <Text className="rowfaizansayani" variant="body6">
                  Shihami landing page is basically a concept model for the NFT
                  business where you can sell and purchase your NFT.
                </Text>
                <Column className="justify-start lg:mt-[42px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[71px] w-[80%]">
                  <Text className="columnjustcopyandp" variant="body6">
                    Just copy and paste the component, asset, color, font, and
                    any other element you want.
                  </Text>
                  <Column className="justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[79%]">
                    <Column className="justify-start w-[100%]">
                      <Text className="columnjustcopyandp" variant="body6">
                        You can also copy everything by following the keys
                        mentioned below
                      </Text>
                      <Row className="font-poppins items-center lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[35%]">
                        <Row className="items-center justify-between w-[36%]">
                          <Button
                            className="flex lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] items-center justify-center lg:w-[24px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[41px]"
                            shape="icbRoundedBorder4"
                            size="mdIcn"
                            variant="icbOutlineGray200"
                          >
                            <Img
                              src="images/img_map.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                              alt="map"
                            />
                          </Button>
                          <Button
                            className="font-semibold lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-center lg:w-[24px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[41px]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineGray200"
                          >
                            A
                          </Button>
                        </Row>
                        <Column className="items-center lg:ml-[18px] xl:ml-[23px] 2xl:ml-[25px] 3xl:ml-[31px] w-[5%]">
                          <Text
                            className="font-light text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            +
                          </Text>
                        </Column>
                        <Row className="items-center justify-between lg:ml-[18px] xl:ml-[23px] 2xl:ml-[25px] 3xl:ml-[31px] w-[36%]">
                          <Button
                            className="flex lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] items-center justify-center lg:w-[24px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[41px]"
                            shape="icbRoundedBorder4"
                            size="mdIcn"
                            variant="icbOutlineGray200"
                          >
                            <Img
                              src="images/img_map.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                              alt="map One"
                            />
                          </Button>
                          <Button
                            className="font-semibold lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-center lg:w-[24px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[41px]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineGray200"
                          >
                            C
                          </Button>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[72%]">
                      <Text className="columnjustcopyandp" variant="body6">
                        Open your lovely project and paste all the things
                      </Text>
                      <Row className="font-poppins items-center lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[18%]">
                        <Button
                          className="flex lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] items-center justify-center lg:w-[24px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[41px]"
                          shape="icbRoundedBorder4"
                          size="mdIcn"
                          variant="icbOutlineGray200"
                        >
                          <Img
                            src="images/img_map.svg"
                            className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                            alt="map Two"
                          />
                        </Button>
                        <Button
                          className="font-semibold lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-center lg:w-[24px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[41px]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineGray200"
                        >
                          V
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default HowToUsePage;
