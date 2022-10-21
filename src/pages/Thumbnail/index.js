import React from "react";

import { Stack, Column, Img, Text, List, Row, Button } from "components";

const ThumbnailPage = () => {
  return (
    <>
      <Stack className="bg-gray_900 font-inter lg:h-[555px] xl:h-[694px] 2xl:h-[781px] 3xl:h-[937px] mx-[auto] w-[100%]">
        <Stack className="absolute bottom-[0] 2xl:h-[1047px] 3xl:h-[1257px] lg:h-[744px] xl:h-[931px] w-[100%]">
          <Column
            className="absolute bg-cover bg-repeat justify-end lg:p-[46px] xl:p-[58px] 2xl:p-[66px] 3xl:p-[79px] top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_group1.png')" }}
          >
            <Column className="justify-start 3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[84px] mt-[1px] w-[35%]">
              <Stack className="bg-gradient2  2xl:h-[108px] 3xl:h-[129px] lg:h-[77px] xl:h-[96px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] rounded-radius30 w-[45%]">
                <Img
                  src="images/img_frame4.svg"
                  className="absolute lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] inset-[0] justify-center m-[auto] w-[75%]"
                  alt="FrameFour"
                />
              </Stack>
              <Text
                className="leading-[125.00%] 2xl:mt-[106px] 3xl:mt-[127px] lg:mt-[75px] xl:mt-[94px] text-white_A700 tracking-ls1 w-[100%]"
                as="h3"
                variant="h3"
              >
                Complete Responsive
                <br />
                Website Landing Page
              </Text>
              <Column className="justify-start 3xl:mt-[119px] lg:mt-[70px] xl:mt-[88px] 2xl:mt-[99px] w-[88%]">
                <List
                  className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="justify-start w-[100%]">
                    <Row className="items-start w-[94%]">
                      <Button
                        className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineDeeppurple600"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[7px] xl:h-[9px] 2xl:h-[10px] 3xl:h-[11px]"
                          alt="checkmark"
                        />
                      </Button>
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[3px] text-white_A700 tracking-ls1 w-[auto]"
                        variant="body3"
                      >
                        Fully Customizable
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <Button
                        className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineDeeppurple600"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[7px] xl:h-[9px] 2xl:h-[10px] 3xl:h-[11px]"
                          alt="checkmark One"
                        />
                      </Button>
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-white_A700 tracking-ls1 w-[auto]"
                        variant="body3"
                      >
                        Minimalist & Modern
                      </Text>
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Row className="items-start w-[100%]">
                      <Button
                        className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center mb-[1px] lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineDeeppurple600"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[7px] xl:h-[9px] 2xl:h-[10px] 3xl:h-[11px]"
                          alt="checkmark One"
                        />
                      </Button>
                      <Text className="Checkbox2" variant="body3">
                        Figma Auto Layout
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[95%]">
                      <Button
                        className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineDeeppurple600"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[7px] xl:h-[9px] 2xl:h-[10px] 3xl:h-[11px]"
                          alt="checkmark One One"
                        />
                      </Button>
                      <Text className="Checkbox2" variant="body3">
                        Organized Layers
                      </Text>
                    </Row>
                  </Column>
                </List>
                <Column className="bg-gradient3  items-center justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius30 w-[65%]">
                  <Row className="items-start lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pl-[4px] py-[4px] w-[100%]">
                    <Text
                      className="my-[1px] text-white_A700 tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ☀️
                    </Text>
                    <Text
                      className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      04 Screens
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
          <Stack className="absolute 2xl:h-[1047px] 3xl:h-[1257px] lg:h-[744px] xl:h-[931px] right-[0] w-[49%]">
            <Stack className="absolute lg:h-[517px] xl:h-[646px] 2xl:h-[727px] 3xl:h-[872px] top-[0] w-[100%]">
              <Stack className="absolute lg:h-[403px] xl:h-[504px] 2xl:h-[566px] 3xl:h-[679px] top-[0] w-[100%]">
                <Img
                  src="images/img_image.png"
                  className="absolute lg:h-[167px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] right-[7%] top-[0] w-[79%]"
                  alt="Image One"
                />
                <Img
                  src="images/img_image_594X768.png"
                  className="absolute bottom-[0] lg:h-[317px] xl:h-[397px] 2xl:h-[446px] 3xl:h-[535px] left-[0] w-[81%]"
                  alt="Image Two"
                />
                <Img
                  src="images/img_image_541X167.png"
                  className="absolute lg:h-[289px] xl:h-[361px] 2xl:h-[407px] 3xl:h-[488px] right-[0] top-[0] w-[18%]"
                  alt="Image Three"
                />
              </Stack>
              <Img
                src="images/img_image_577X282.png"
                className="absolute bottom-[0] lg:h-[308px] xl:h-[385px] 2xl:h-[434px] 3xl:h-[520px] right-[0] w-[30%]"
                alt="Image Four"
              />
            </Stack>
            <Img
              src="images/img_image_221X396.png"
              className="absolute bottom-[0] lg:h-[118px] xl:h-[148px] 2xl:h-[166px] 3xl:h-[200px] right-[0] w-[42%]"
              alt="Image Five"
            />
          </Stack>
        </Stack>
        <Img
          src="images/img_rectangle23791.png"
          className="absolute bottom-[0] lg:h-[481px] xl:h-[602px] 2xl:h-[677px] 3xl:h-[812px] right-[16%] w-[43%]"
          alt="Rectangle23791"
        />
      </Stack>
    </>
  );
};

export default ThumbnailPage;
