import React from "react";

import {
  Column,
  Stack,
  Text,
  List,
  Img,
  Row,
  Grid,
  Button,
  Line,
} from "components";

const ComponentsPage = () => {
  return (
    <>
      <Column className="bg-gray_900 font-oxanium items-center justify-start mx-[auto] 3xl:pb-[111px] lg:pb-[65px] xl:pb-[82px] 2xl:pb-[92px] w-[100%]">
        <div className="bg-purple_500 lg:h-[2px] 2xl:h-[3px] xl:h-[3px] 3xl:h-[4px] w-[100%]"></div>
        <Stack className="lg:h-[1029px] xl:h-[1287px] 2xl:h-[1447px] 3xl:h-[1737px] lg:mt-[149px] xl:mt-[187px] 2xl:mt-[210px] 3xl:mt-[252px] w-[87%]">
          <Column className="absolute bottom-[0] items-center justify-start right-[0] w-[58%]">
            <Column className="items-end justify-start lg:pl-[42px] xl:pl-[52px] 2xl:pl-[59px] 3xl:pl-[71px] lg:pt-[42px] xl:pt-[52px] 2xl:pt-[59px] 3xl:pt-[71px] w-[100%]">
              <Column className="items-center justify-start w-[84%]">
                <Column className="items-center justify-start pr-[3px] py-[3px] w-[57%]">
                  <Text
                    className="bg-clip-text bg-gradient4  font-lato font-normal not-italic text-transparent w-[auto]"
                    variant="body2"
                  >
                    Trade with world’s most trusted and fastest wallets
                  </Text>
                  <Text
                    className="capitalize font-oxanium xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-white_A700 w-[auto]"
                    variant="body10"
                  >
                    wallets we support
                  </Text>
                </Column>
                <List
                  className="lg:gap-[14px] xl:gap-[18px] 2xl:gap-[20px] 3xl:gap-[25px] grid grid-cols-5 min-h-[auto] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="bg-gradient1  items-center justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[100%]">
                    <Column className="bg-gradient1  lg:h-[51px] xl:h-[64px] 2xl:h-[71px] 3xl:h-[86px] items-center justify-start mt-[1px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:w-[50px] xl:w-[63px] 2xl:w-[70px] 3xl:w-[85px]">
                      <Img
                        src="images/img_ellipse3.png"
                        className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] my-[1px] rounded-radius50 w-[99%]"
                        alt="EllipseThree"
                      />
                    </Column>
                    <Text className="Wallet" variant="body5">
                      Metamask
                    </Text>
                  </Column>
                  <Column className="bg-gradient1  items-center justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[100%]">
                    <Column className="bg-gradient1  lg:h-[51px] xl:h-[64px] 2xl:h-[71px] 3xl:h-[86px] items-center justify-start mt-[1px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:w-[50px] xl:w-[63px] 2xl:w-[70px] 3xl:w-[85px]">
                      <Img
                        src="images/img_ellipse3_113X114.png"
                        className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] my-[1px] rounded-radius50 w-[99%]"
                        alt="EllipseThree One"
                      />
                    </Column>
                    <Text className="Wallet" variant="body5">
                      Binance
                    </Text>
                  </Column>
                  <Column className="bg-gradient1  items-center justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[100%]">
                    <Column className="bg-gradient1  lg:h-[51px] xl:h-[64px] 2xl:h-[71px] 3xl:h-[86px] items-center justify-start mt-[1px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:w-[50px] xl:w-[63px] 2xl:w-[70px] 3xl:w-[85px]">
                      <Img
                        src="images/img_ellipse3_1.png"
                        className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] my-[1px] rounded-radius50 w-[99%]"
                        alt="EllipseThree Two"
                      />
                    </Column>
                    <Text className="Wallet" variant="body5">
                      Trust wallet
                    </Text>
                  </Column>
                  <Column className="bg-gradient1  items-center justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[100%]">
                    <Column className="bg-gradient1  lg:h-[51px] xl:h-[64px] 2xl:h-[71px] 3xl:h-[86px] items-center justify-start mt-[1px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:w-[50px] xl:w-[63px] 2xl:w-[70px] 3xl:w-[85px]">
                      <Img
                        src="images/img_ellipse3_2.png"
                        className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] my-[1px] rounded-radius50 w-[99%]"
                        alt="EllipseThree Three"
                      />
                    </Column>
                    <Text
                      className="mb-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] bleedingghost"
                      variant="body5"
                    >
                      Alpha
                    </Text>
                  </Column>
                  <Column className="bg-gradient1  items-center justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[100%]">
                    <Column className="bg-gradient1  lg:h-[51px] xl:h-[64px] 2xl:h-[71px] 3xl:h-[86px] items-center justify-start mt-[1px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:w-[50px] xl:w-[63px] 2xl:w-[70px] 3xl:w-[85px]">
                      <Img
                        src="images/img_ellipse3_3.png"
                        className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] my-[1px] rounded-radius50 w-[99%]"
                        alt="EllipseThree Four"
                      />
                    </Column>
                    <Text className="Wallet" variant="body5">
                      CoinGecko
                    </Text>
                  </Column>
                </List>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] w-[68%]">
              <Column className="items-center justify-start 2xl:p-[1px] xl:p-[1px] lg:p-[1px] 3xl:p-[2px] w-[46%]">
                <Text
                  className="bg-clip-text bg-gradient4  font-lato font-normal not-italic text-transparent w-[auto]"
                  variant="body2"
                >
                  Explore our newly released NFT collection{" "}
                </Text>
                <Text
                  className="capitalize font-oxanium lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-white_A700 w-[auto]"
                  variant="body10"
                >
                  Our collection
                </Text>
              </Column>
              <Stack className="lg:h-[135px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]">
                <Stack className="absolute lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] inset-y-[7%] w-[100%]">
                  <Stack className="absolute lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] w-[100%]">
                    <Row className="absolute inset-y-[9%] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_rectangle31.png"
                        className="2xl:h-[105px] 3xl:h-[126px] lg:h-[75px] xl:h-[94px] rounded-radius15 w-[16%]"
                        alt="RectangleThirtyOne"
                      />
                      <Stack className="xl:h-[118px] 2xl:h-[133px] 3xl:h-[160px] lg:h-[95px] w-[27%]">
                        <Img
                          src="images/img_rectangle30.png"
                          className="absolute 2xl:h-[105px] 3xl:h-[126px] lg:h-[75px] xl:h-[94px] inset-y-[0] my-[auto] right-[0] rounded-radius4167 w-[58%]"
                          alt="RectangleThirty"
                        />
                        <Img
                          src="images/img_rectangle29.png"
                          className="absolute xl:h-[118px] 2xl:h-[133px] 3xl:h-[160px] lg:h-[95px] left-[0] rounded-radius15 w-[74%]"
                          alt="RectangleTwentyNine"
                        />
                      </Stack>
                    </Row>
                    <Row className="absolute items-center justify-between left-[7%] w-[75%]">
                      <Img
                        src="images/img_rectangle28.png"
                        className="xl:h-[118px] 2xl:h-[133px] 3xl:h-[160px] lg:h-[95px] rounded-radius15 w-[27%]"
                        alt="RectangleTwentyEight"
                      />
                      <Img
                        src="images/img_rectangle26.png"
                        className="lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] rounded-radius15 w-[33%]"
                        alt="RectangleTwentySix"
                      />
                    </Row>
                  </Stack>
                  <Img
                    src="images/img_rectangle27.png"
                    className="absolute lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] left-[18%] rounded-radius15 w-[25%]"
                    alt="RectangleTwentySeven"
                  />
                </Stack>
                <Img
                  src="images/img_rectangle25.png"
                  className="absolute lg:h-[135px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] left-[35%] right-[36%] rounded-radius15 w-[29%]"
                  alt="RectangleTwentyFive"
                />
              </Stack>
            </Column>
            <Column className="items-end justify-end lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] pl-[1px] py-[1px] w-[95%]">
              <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[83%]">
                <Row className="items-end justify-between w-[100%]">
                  <Column className="justify-start pr-[3px] py-[3px] w-[53%]">
                    <Text
                      className="capitalize font-lato font-light text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      most loved NFTs of the time
                    </Text>
                    <Text
                      className="capitalize font-oxanium xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] mr-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] text-white_A700 w-[auto]"
                      variant="body10"
                    >
                      hot trending nFTs{" "}
                    </Text>
                  </Column>
                  <Stack className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] w-[10%]">
                    <Text
                      className="absolute capitalize font-medium inset-x-[0] mx-[auto] text-white_A700 top-[26%] w-[max-content]"
                      variant="body6"
                    >
                      view all
                    </Text>
                    <Img
                      src="images/img_frame36718.svg"
                      className="absolute lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[100%]"
                      alt="Frame36718"
                    />
                  </Stack>
                </Row>
                <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[100%]">
                  <Grid className="lg:gap-[4px] 2xl:gap-[6px] xl:gap-[6px] 3xl:gap-[8px] grid grid-cols-4 w-[100%]">
                    <Column className="bg-gradient1  items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius15 w-[100%]">
                      <Stack className="3xl:h-[110px] lg:h-[65px] xl:h-[82px] 2xl:h-[92px] w-[99%]">
                        <Img
                          src="images/img_rectangle25.png"
                          className="NFTPicture"
                          alt="NFTPicture"
                        />
                        <Button
                          className="absolute flex items-center justify-center text-center w-[26%]"
                          leftIcon={
                            <Img
                              src="images/img_clock.svg"
                              className="text-center right-[2%] absolute lg:w-[3px] lg:mr-[2px] xl:w-[4px] xl:mr-[2px] 2xl:w-[5px] 2xl:mr-[3px] 3xl:w-[6px] 3xl:mr-[3px]"
                              alt="clock"
                            />
                          }
                          shape="CustomBorderBL15"
                        >
                          <div className="bg-transparent capitalize font-normal not-italic right-[0] lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] top-[0] tracking-ls1">
                            341
                          </div>
                        </Button>
                      </Stack>
                      <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[56%]">
                        <Img
                          src="images/img_userprofile.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          alt="UserProfile"
                        />
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[3px] pt-[3px] w-[74%]">
                          <Text
                            className="font-oxanium rowonsale"
                            variant="body2"
                          >
                            Monkey ape{" "}
                          </Text>
                          <Text
                            className="font-lato 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] Content2"
                            variant="body9"
                          >
                            By @JSmith
                          </Text>
                        </Column>
                      </Row>
                      <Column className="items-center justify-start mb-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Row className="items-start justify-between w-[28%]">
                            <Text className="rowonsale" variant="body8">
                              on sale
                            </Text>
                            <Img
                              src="images/img_fire.svg"
                              className="fire"
                              alt="fire"
                            />
                          </Row>
                          <Row className="items-start justify-evenly w-[38%]">
                            <Img
                              src="images/img_location.svg"
                              className="fire"
                              alt="location"
                            />
                            <Column className="items-end justify-start mt-[1px] w-[84%]">
                              <Text className="ethCounter" variant="body5">
                                4.89 ETH
                              </Text>
                              <Text className="price" variant="body9">
                                ($ 654,874.86)
                              </Text>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                          <Button
                            className="capitalize font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center w-[95%]"
                            size="lg"
                            variant="OutlinePurpleA200"
                          >
                            buy now
                          </Button>
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-gradient1  items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius15 w-[100%]">
                      <Stack className="3xl:h-[110px] lg:h-[65px] xl:h-[82px] 2xl:h-[92px] w-[99%]">
                        <Img
                          src="images/img_rectangle27.png"
                          className="NFTPicture"
                          alt="NFTPicture One"
                        />
                        <Button
                          className="absolute flex items-center justify-center text-center w-[26%]"
                          leftIcon={
                            <Img
                              src="images/img_clock.svg"
                              className="text-center right-[2%] absolute lg:w-[3px] lg:mr-[2px] xl:w-[4px] xl:mr-[2px] 2xl:w-[5px] 2xl:mr-[3px] 3xl:w-[6px] 3xl:mr-[3px]"
                              alt="clock"
                            />
                          }
                          shape="CustomBorderBL15"
                        >
                          <div className="bg-transparent capitalize font-normal not-italic right-[0] lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] top-[0] tracking-ls1">
                            341
                          </div>
                        </Button>
                      </Stack>
                      <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[44%]">
                        <Img
                          src="images/img_userprofile.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          alt="UserProfile One"
                        />
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[67%]">
                          <Text className="Moonfall" variant="body2">
                            Moonfall
                          </Text>
                          <Text className="ByJSmith_One" variant="body9">
                            By @JSmith
                          </Text>
                        </Column>
                      </Row>
                      <Column className="items-center justify-start mb-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Row className="items-start justify-between w-[28%]">
                            <Text className="rowonsale" variant="body8">
                              on sale
                            </Text>
                            <Img
                              src="images/img_fire.svg"
                              className="fire"
                              alt="fire One"
                            />
                          </Row>
                          <Row className="items-start justify-evenly w-[38%]">
                            <Img
                              src="images/img_location.svg"
                              className="fire"
                              alt="location One"
                            />
                            <Column className="items-end justify-start mt-[1px] w-[84%]">
                              <Text className="ethCounter" variant="body5">
                                4.89 ETH
                              </Text>
                              <Text className="price" variant="body9">
                                ($ 654,874.86)
                              </Text>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                          <Button
                            className="capitalize font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center w-[95%]"
                            size="lg"
                            variant="OutlinePurpleA200"
                          >
                            buy now
                          </Button>
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-gradient1  items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius15 w-[100%]">
                      <Stack className="3xl:h-[110px] lg:h-[65px] xl:h-[82px] 2xl:h-[92px] w-[99%]">
                        <Img
                          src="images/img_rectangle31.png"
                          className="NFTPicture"
                          alt="NFTPicture Two"
                        />
                        <Button
                          className="absolute flex items-center justify-center text-center w-[26%]"
                          leftIcon={
                            <Img
                              src="images/img_clock.svg"
                              className="text-center right-[2%] absolute lg:w-[3px] lg:mr-[2px] xl:w-[4px] xl:mr-[2px] 2xl:w-[5px] 2xl:mr-[3px] 3xl:w-[6px] 3xl:mr-[3px]"
                              alt="clock"
                            />
                          }
                          shape="CustomBorderBL15"
                        >
                          <div className="bg-transparent capitalize font-normal not-italic right-[0] lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] top-[0] tracking-ls1">
                            341
                          </div>
                        </Button>
                      </Stack>
                      <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[60%]">
                        <Img
                          src="images/img_userprofile.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          alt="UserProfile Two"
                        />
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[1px] pt-[1px] w-[76%]">
                          <Text className="Moonfall" variant="body2">
                            Wired Human{" "}
                          </Text>
                          <Text
                            className="font-lato lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] Content2"
                            variant="body9"
                          >
                            By @JSmith
                          </Text>
                        </Column>
                      </Row>
                      <Column className="items-center justify-start mb-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Row className="items-start justify-between w-[28%]">
                            <Text className="rowonsale" variant="body8">
                              on sale
                            </Text>
                            <Img
                              src="images/img_fire.svg"
                              className="fire"
                              alt="fire Two"
                            />
                          </Row>
                          <Row className="items-start justify-evenly w-[38%]">
                            <Img
                              src="images/img_location.svg"
                              className="fire"
                              alt="location Two"
                            />
                            <Column className="items-end justify-start mt-[1px] w-[84%]">
                              <Text className="ethCounter" variant="body5">
                                4.89 ETH
                              </Text>
                              <Text className="price" variant="body9">
                                ($ 654,874.86)
                              </Text>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                          <Button
                            className="capitalize font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center w-[95%]"
                            size="lg"
                            variant="OutlinePurpleA200"
                          >
                            buy now
                          </Button>
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-gradient1  items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius15 w-[100%]">
                      <Stack className="3xl:h-[110px] lg:h-[65px] xl:h-[82px] 2xl:h-[92px] w-[99%]">
                        <Img
                          src="images/img_rectangle26.png"
                          className="NFTPicture"
                          alt="NFTPicture Three"
                        />
                        <Button
                          className="absolute flex items-center justify-center text-center w-[26%]"
                          leftIcon={
                            <Img
                              src="images/img_clock.svg"
                              className="text-center right-[2%] absolute lg:w-[3px] lg:mr-[2px] xl:w-[4px] xl:mr-[2px] 2xl:w-[5px] 2xl:mr-[3px] 3xl:w-[6px] 3xl:mr-[3px]"
                              alt="clock"
                            />
                          }
                          shape="CustomBorderBL15"
                        >
                          <div className="bg-transparent capitalize font-normal not-italic right-[0] lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] top-[0] tracking-ls1">
                            341
                          </div>
                        </Button>
                      </Stack>
                      <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[56%]">
                        <Img
                          src="images/img_userprofile.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          alt="UserProfile Three"
                        />
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[1px] pt-[1px] w-[74%]">
                          <Text className="Moonfall" variant="body2">
                            Racer-To-Go{" "}
                          </Text>
                          <Text className="ByJSmith_One" variant="body9">
                            By @JSmith
                          </Text>
                        </Column>
                      </Row>
                      <Column className="items-center justify-start mb-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Row className="items-start justify-between w-[28%]">
                            <Text className="rowonsale" variant="body8">
                              on sale
                            </Text>
                            <Img
                              src="images/img_fire.svg"
                              className="fire"
                              alt="fire Three"
                            />
                          </Row>
                          <Row className="items-start justify-evenly w-[38%]">
                            <Img
                              src="images/img_location.svg"
                              className="fire"
                              alt="location Three"
                            />
                            <Column className="items-end justify-start mt-[1px] w-[84%]">
                              <Text className="ethCounter" variant="body5">
                                4.89 ETH
                              </Text>
                              <Text className="price" variant="body9">
                                ($ 654,874.86)
                              </Text>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                          <Button
                            className="capitalize font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center w-[95%]"
                            size="lg"
                            variant="OutlinePurpleA200"
                          >
                            buy now
                          </Button>
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-gradient1  items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius15 w-[100%]">
                      <Stack className="3xl:h-[110px] lg:h-[65px] xl:h-[82px] 2xl:h-[92px] w-[99%]">
                        <Img
                          src="images/img_rectangle25.png"
                          className="NFTPicture"
                          alt="NFTPicture Four"
                        />
                        <Button
                          className="absolute flex items-center justify-center text-center w-[26%]"
                          leftIcon={
                            <Img
                              src="images/img_clock.svg"
                              className="text-center right-[2%] absolute lg:w-[3px] lg:mr-[2px] xl:w-[4px] xl:mr-[2px] 2xl:w-[5px] 2xl:mr-[3px] 3xl:w-[6px] 3xl:mr-[3px]"
                              alt="clock"
                            />
                          }
                          shape="CustomBorderBL15"
                        >
                          <div className="bg-transparent capitalize font-normal not-italic right-[0] lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] top-[0] tracking-ls1">
                            341
                          </div>
                        </Button>
                      </Stack>
                      <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[56%]">
                        <Img
                          src="images/img_userprofile.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          alt="UserProfile Four"
                        />
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[3px] pt-[3px] w-[74%]">
                          <Text
                            className="font-oxanium rowonsale"
                            variant="body2"
                          >
                            Monkey ape{" "}
                          </Text>
                          <Text
                            className="font-lato 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] Content2"
                            variant="body9"
                          >
                            By @JSmith
                          </Text>
                        </Column>
                      </Row>
                      <Column className="items-center justify-start mb-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Row className="items-start justify-between w-[28%]">
                            <Text className="rowonsale" variant="body8">
                              on sale
                            </Text>
                            <Img
                              src="images/img_fire.svg"
                              className="fire"
                              alt="fire Four"
                            />
                          </Row>
                          <Row className="items-start justify-evenly w-[38%]">
                            <Img
                              src="images/img_location.svg"
                              className="fire"
                              alt="location Four"
                            />
                            <Column className="items-end justify-start mt-[1px] w-[84%]">
                              <Text className="ethCounter" variant="body5">
                                4.89 ETH
                              </Text>
                              <Text className="price" variant="body9">
                                ($ 654,874.86)
                              </Text>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                          <Button
                            className="capitalize font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center w-[95%]"
                            size="lg"
                            variant="OutlinePurpleA200"
                          >
                            buy now
                          </Button>
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-gradient1  items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius15 w-[100%]">
                      <Stack className="3xl:h-[110px] lg:h-[65px] xl:h-[82px] 2xl:h-[92px] w-[99%]">
                        <Img
                          src="images/img_rectangle27.png"
                          className="NFTPicture"
                          alt="NFTPicture Five"
                        />
                        <Button
                          className="absolute flex items-center justify-center text-center w-[26%]"
                          leftIcon={
                            <Img
                              src="images/img_clock.svg"
                              className="text-center right-[2%] absolute lg:w-[3px] lg:mr-[2px] xl:w-[4px] xl:mr-[2px] 2xl:w-[5px] 2xl:mr-[3px] 3xl:w-[6px] 3xl:mr-[3px]"
                              alt="clock"
                            />
                          }
                          shape="CustomBorderBL15"
                        >
                          <div className="bg-transparent capitalize font-normal not-italic right-[0] lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] top-[0] tracking-ls1">
                            341
                          </div>
                        </Button>
                      </Stack>
                      <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[44%]">
                        <Img
                          src="images/img_userprofile.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          alt="UserProfile Five"
                        />
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[67%]">
                          <Text className="Moonfall" variant="body2">
                            Moonfall
                          </Text>
                          <Text className="ByJSmith_One" variant="body9">
                            By @JSmith
                          </Text>
                        </Column>
                      </Row>
                      <Column className="items-center justify-start mb-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Row className="items-start justify-between w-[28%]">
                            <Text className="rowonsale" variant="body8">
                              on sale
                            </Text>
                            <Img
                              src="images/img_fire.svg"
                              className="fire"
                              alt="fire Five"
                            />
                          </Row>
                          <Row className="items-start justify-evenly w-[38%]">
                            <Img
                              src="images/img_location.svg"
                              className="fire"
                              alt="location Five"
                            />
                            <Column className="items-end justify-start mt-[1px] w-[84%]">
                              <Text className="ethCounter" variant="body5">
                                4.89 ETH
                              </Text>
                              <Text className="price" variant="body9">
                                ($ 654,874.86)
                              </Text>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                          <Button
                            className="capitalize font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center w-[95%]"
                            size="lg"
                            variant="OutlinePurpleA200"
                          >
                            buy now
                          </Button>
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-gradient1  items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius15 w-[100%]">
                      <Stack className="3xl:h-[110px] lg:h-[65px] xl:h-[82px] 2xl:h-[92px] w-[99%]">
                        <Img
                          src="images/img_rectangle31.png"
                          className="NFTPicture"
                          alt="NFTPicture Six"
                        />
                        <Button
                          className="absolute flex items-center justify-center text-center w-[26%]"
                          leftIcon={
                            <Img
                              src="images/img_clock.svg"
                              className="text-center right-[2%] absolute lg:w-[3px] lg:mr-[2px] xl:w-[4px] xl:mr-[2px] 2xl:w-[5px] 2xl:mr-[3px] 3xl:w-[6px] 3xl:mr-[3px]"
                              alt="clock"
                            />
                          }
                          shape="CustomBorderBL15"
                        >
                          <div className="bg-transparent capitalize font-normal not-italic right-[0] lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] top-[0] tracking-ls1">
                            341
                          </div>
                        </Button>
                      </Stack>
                      <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[60%]">
                        <Img
                          src="images/img_userprofile.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          alt="UserProfile Six"
                        />
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[1px] pt-[1px] w-[76%]">
                          <Text className="Moonfall" variant="body2">
                            Wired Human{" "}
                          </Text>
                          <Text
                            className="font-lato lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] Content2"
                            variant="body9"
                          >
                            By @JSmith
                          </Text>
                        </Column>
                      </Row>
                      <Column className="items-center justify-start mb-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Row className="items-start justify-between w-[28%]">
                            <Text className="rowonsale" variant="body8">
                              on sale
                            </Text>
                            <Img
                              src="images/img_fire.svg"
                              className="fire"
                              alt="fire Six"
                            />
                          </Row>
                          <Row className="items-start justify-evenly w-[38%]">
                            <Img
                              src="images/img_location.svg"
                              className="fire"
                              alt="location Six"
                            />
                            <Column className="items-end justify-start mt-[1px] w-[84%]">
                              <Text className="ethCounter" variant="body5">
                                4.89 ETH
                              </Text>
                              <Text className="price" variant="body9">
                                ($ 654,874.86)
                              </Text>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                          <Button
                            className="capitalize font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center w-[95%]"
                            size="lg"
                            variant="OutlinePurpleA200"
                          >
                            buy now
                          </Button>
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-gradient1  items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius15 w-[100%]">
                      <Stack className="3xl:h-[110px] lg:h-[65px] xl:h-[82px] 2xl:h-[92px] w-[99%]">
                        <Img
                          src="images/img_rectangle26.png"
                          className="NFTPicture"
                          alt="NFTPicture Seven"
                        />
                        <Button
                          className="absolute flex items-center justify-center text-center w-[26%]"
                          leftIcon={
                            <Img
                              src="images/img_clock.svg"
                              className="text-center right-[2%] absolute lg:w-[3px] lg:mr-[2px] xl:w-[4px] xl:mr-[2px] 2xl:w-[5px] 2xl:mr-[3px] 3xl:w-[6px] 3xl:mr-[3px]"
                              alt="clock"
                            />
                          }
                          shape="CustomBorderBL15"
                        >
                          <div className="bg-transparent capitalize font-normal not-italic right-[0] lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] top-[0] tracking-ls1">
                            341
                          </div>
                        </Button>
                      </Stack>
                      <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[56%]">
                        <Img
                          src="images/img_userprofile.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          alt="UserProfile Seven"
                        />
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[1px] pt-[1px] w-[74%]">
                          <Text className="Moonfall" variant="body2">
                            Racer-To-Go{" "}
                          </Text>
                          <Text className="ByJSmith_One" variant="body9">
                            By @JSmith
                          </Text>
                        </Column>
                      </Row>
                      <Column className="items-center justify-start mb-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Row className="items-start justify-between w-[28%]">
                            <Text className="rowonsale" variant="body8">
                              on sale
                            </Text>
                            <Img
                              src="images/img_fire.svg"
                              className="fire"
                              alt="fire Seven"
                            />
                          </Row>
                          <Row className="items-start justify-evenly w-[38%]">
                            <Img
                              src="images/img_location.svg"
                              className="fire"
                              alt="location Seven"
                            />
                            <Column className="items-end justify-start mt-[1px] w-[84%]">
                              <Text className="ethCounter" variant="body5">
                                4.89 ETH
                              </Text>
                              <Text className="price" variant="body9">
                                ($ 654,874.86)
                              </Text>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                          <Button
                            className="capitalize font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center w-[95%]"
                            size="lg"
                            variant="OutlinePurpleA200"
                          >
                            buy now
                          </Button>
                          <div className="bg-purple_A200 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"></div>
                        </Row>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="absolute justify-start left-[0] w-[54%]">
            <Column
              className="bg-cover bg-repeat items-center justify-end p-[4px] w-[100%]"
              style={{ backgroundImage: "url('images/img_milkyway.svg')" }}
            >
              <List
                className="xl:gap-[115px] 2xl:gap-[129px] 3xl:gap-[155px] lg:gap-[92px] grid grid-cols-5 min-h-[auto] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] w-[89%]"
                orientation="horizontal"
              >
                <Stack
                  className="bg-cover bg-repeat lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mb-[31px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[52px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_sparkle.png')" }}
                >
                  <Img
                    src="images/img_sparkle.png"
                    className="imagesremovebg"
                    alt="imagesremovebg"
                  />
                </Stack>
                <Stack
                  className="bg-cover bg-repeat lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_sparkle.png')" }}
                >
                  <Img
                    src="images/img_sparkle.png"
                    className="imagesremovebg"
                    alt="imagesremovebg One"
                  />
                </Stack>
                <Stack
                  className="bg-cover bg-repeat lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mt-[40px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[69px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_sparkle.png')" }}
                >
                  <Img
                    src="images/img_sparkle.png"
                    className="imagesremovebg"
                    alt="imagesremovebg Two"
                  />
                </Stack>
                <Stack
                  className="bg-cover bg-repeat lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mb-[40px] xl:mb-[51px] 2xl:mb-[57px] 3xl:mb-[69px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_sparkle.png')" }}
                >
                  <Img
                    src="images/img_sparkle.png"
                    className="imagesremovebg"
                    alt="imagesremovebg Three"
                  />
                </Stack>
                <Stack
                  className="bg-cover bg-repeat lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[56px] 3xl:mb-[67px] mt-[3px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_sparkle.png')" }}
                >
                  <Img
                    src="images/img_sparkle.png"
                    className="imagesremovebg"
                    alt="imagesremovebg Four"
                  />
                </Stack>
              </List>
            </Column>
            <Stack className="lg:h-[135px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] w-[37%]">
              <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                <List
                  className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[28px] grid grid-cols-2 min-h-[auto] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="bg-gradient5  border-bw083 border-solid border-white_A700_66 items-center justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4167 w-[100%]">
                    <Img
                      src="images/img_rectangle3.png"
                      className="3xl:h-[118px] lg:h-[70px] xl:h-[88px] 2xl:h-[99px] mt-[3px] rounded-radius4167 w-[99%]"
                      alt="RectangleThree"
                    />
                    <Column className="items-center justify-start xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[61%]">
                      <Text className="bleedingghost" variant="body2">
                        bleeding ghost
                      </Text>
                      <Text className="price_Eight" variant="body7">
                        $ 152,793.17
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-gradient5  border-bw083 border-solid border-white_A700_66 items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4167 w-[100%]">
                    <Img
                      src="images/img_rectangle30.png"
                      className="3xl:h-[118px] lg:h-[70px] xl:h-[87px] 2xl:h-[98px] mt-[4px] rounded-radius4167 w-[99%]"
                      alt="RectangleThree One"
                    />
                    <Column className="items-center justify-start lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[71%]">
                      <Text className="bleedingghost" variant="body2">
                        Statue of vughae
                      </Text>
                      <Text className="price_Eight" variant="body7">
                        $ 452,968.48
                      </Text>
                    </Column>
                  </Column>
                </List>
              </Column>
              <Column className="absolute bg-gradient5  border-bw083 border-solid border-white_A700_66 items-center justify-start left-[24%] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4167 top-[0] w-[45%]">
                <Img
                  src="images/img_rectangle3_280X287.png"
                  className="3xl:h-[118px] lg:h-[70px] xl:h-[87px] 2xl:h-[98px] mt-[4px] rounded-radius4167 w-[99%]"
                  alt="RectangleThree Two"
                />
                <Column className="items-center justify-start xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[67%]">
                  <Text className="bleedingghost" variant="body2">
                    Living of the art
                  </Text>
                  <Text className="price_Eight" variant="body7">
                    $ 543,576.13
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[72%]">
              <Stack className="lg:h-[42px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[71px] w-[27%]">
                <Text
                  className="absolute text-gray_100 top-[0] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  How it works
                </Text>
                <div className="absolute backdrop-opacity-[0.5] bg-purple_500 blur-[450.00px] lg:h-[42px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] inset-[0] justify-center m-[auto] w-[46%]"></div>
              </Stack>
              <Row className="items-center justify-evenly w-[100%]">
                <List
                  className="gap-[0] grid grid-cols-3 min-h-[auto] w-[84%]"
                  orientation="horizontal"
                >
                  <Row className="items-center justify-between pb-[2px] w-[100%]">
                    <Column className="items-center w-[53%]">
                      <Stack className="bg-gradient1  lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius50 lg:w-[26px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]">
                        <Img
                          src="images/img_claritywallet.svg"
                          className="claritywallet"
                          alt="claritywallet"
                        />
                      </Stack>
                      <Text
                        className="capitalize font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Set up your wallet
                      </Text>
                    </Column>
                    <Line className="bg-white_A700 h-[2px] w-[43%]" />
                  </Row>
                  <Row className="font-worksans items-center justify-center mb-[2px] pb-[2px] w-[100%]">
                    <Column className="items-center w-[61%]">
                      <Stack className="bg-gradient1  lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius50 lg:w-[26px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]">
                        <Img
                          src="images/img_camera.svg"
                          className="claritywallet"
                          alt="camera"
                        />
                      </Stack>
                      <Text
                        className="capitalize font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Create your collection
                      </Text>
                    </Column>
                    <Line className="bg-white_A700 h-[2px] w-[39%]" />
                  </Row>
                  <Row className="font-worksans items-center justify-between pb-[2px] w-[100%]">
                    <Column className="items-center w-[50%]">
                      <Stack className="bg-gradient1  lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius50 lg:w-[26px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]">
                        <Img
                          src="images/img_file.svg"
                          className="claritywallet"
                          alt="file"
                        />
                      </Stack>
                      <Text className="Step3" variant="body3">
                        Add your NFTs
                      </Text>
                    </Column>
                    <Line className="bg-white_A700 h-[2px] w-[37%]" />
                  </Row>
                </List>
                <Column className="font-worksans items-center w-[16%]">
                  <Stack className="bg-gradient1  lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius50 lg:w-[26px] xl:w-[32px] 2xl:w-[37px] 3xl:w-[44px]">
                    <Img
                      src="images/img_volume.svg"
                      className="claritywallet"
                      alt="volume"
                    />
                  </Stack>
                  <Text className="Step3" variant="body3">
                    List them for sale
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_903 border-bw083 border-solid border-white_A700_66 font-lato items-center justify-end lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius4167 w-[19%]">
              <Column className="justify-start mt-[3px] w-[100%]">
                <Text
                  className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Connect Wallet
                </Text>
                <Line className="bg-gray_500_7e h-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]" />
                <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[74%]">
                  <Row className="items-center w-[70%]">
                    <Img
                      src="images/img_ellipse3.png"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="EllipseEighteen"
                    />
                    <Text className="rowellipseeighteen" variant="body5">
                      Metamask
                    </Text>
                  </Row>
                  <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[98%]">
                    <Img
                      src="images/img_ellipse3_113X114.png"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="EllipseEighteen One"
                    />
                    <Text className="rowellipseeighteen" variant="body5">
                      BNB Smart Chain
                    </Text>
                  </Row>
                  <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                    <Img
                      src="images/img_ellipse3_1.png"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="EllipseEighteen Two"
                    />
                    <Text className="rowellipseeighteen" variant="body5">
                      CoinGecko Wallet
                    </Text>
                  </Row>
                  <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[76%]">
                    <Img
                      src="images/img_ellipse3_2.png"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="EllipseEighteen Three"
                    />
                    <Text className="rowellipseeighteen" variant="body5">
                      Trust Wallet
                    </Text>
                  </Row>
                  <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[79%]">
                    <Img
                      src="images/img_ellipse3_3.png"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="EllipseEighteen Four"
                    />
                    <Text className="rowellipseeighteen" variant="body5">
                      Alpha Wallet
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="font-oxanium items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] w-[38%]">
              <Column className="items-center justify-start p-[3px] w-[100%]">
                <Text
                  className="capitalize leading-[normal] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] text-white_A700 w-[97%]"
                  as="h1"
                  variant="h1"
                >
                  EXPLORE, CREATE AND SELL YOUR NFT’S ON SHIHAMI
                </Text>
              </Column>
              <Column className="font-lato items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[96%]">
                <Text
                  className="capitalize font-light text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Shihami is the World’s first and largest NFT/Avatar
                  marketplace
                </Text>
              </Column>
            </Column>
            <Row className="font-oxanium items-center lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] w-[14%]">
              <Img
                src="images/img_rectangle4.png"
                className="lg:h-[24px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[23px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                alt="RectangleFour"
              />
              <Text
                className="text-white_A700 uppercase w-[auto]"
                as="h4"
                variant="h4"
              >
                hihami
              </Text>
            </Row>
            <Row className="font-oxanium items-center lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] w-[10%]">
              <Img
                src="images/img_group4.png"
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[7%]"
                alt="GroupFour"
              />
              <Column className="bg-purple_500 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[85%]">
                <Text className="mb-[2px] bleedingghost" variant="body6">
                  Connect Wallet
                </Text>
              </Column>
              <Img
                src="images/img_group5.png"
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[7%]"
                alt="GroupFive"
              />
            </Row>
            <Column className="bg-gradient6  font-oxanium items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[38%]">
              <Row className="items-center justify-between mb-[2px] w-[94%]">
                <Text className="Navigationbar" variant="body6">
                  explore
                </Text>
                <Text className="Navigationbar" variant="body6">
                  <span className="text-white_A700 font-oxanium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px]">
                    trending nft
                  </span>
                  <span className="text-white_A700 font-oxanium lowercase lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px]">
                    S
                  </span>
                </Text>
                <Text className="Navigationbar" variant="body6">
                  <span className="text-white_A700 font-oxanium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px]">
                    auctioned nft
                  </span>
                  <span className="text-white_A700 font-oxanium lowercase lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px]">
                    s
                  </span>
                </Text>
                <Text className="Navigationbar" variant="body6">
                  influencers
                </Text>
              </Row>
            </Column>
            <Button
              className="flex lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[32px] items-center justify-center lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] rounded-radius50 lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[31px]"
              size="lgIcn"
              variant="icbOutline"
            >
              <Img
                src="images/img_volume_74X74.svg"
                className="flex items-center justify-center"
                alt="volume One"
              />
            </Button>
            <Row className="font-oxanium items-center lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] w-[14%]">
              <Img
                src="images/img_group4.png"
                className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[7%]"
                alt="GroupFour One"
              />
              <Column className="bg-purple_500 items-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[86%]">
                <Text
                  className="capitalize mt-[1px] text-white_A700 w-[auto]"
                  variant="body4"
                >
                  explore more
                </Text>
              </Column>
              <Img
                src="images/img_group5.png"
                className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[7%]"
                alt="GroupFive One"
              />
            </Row>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default ComponentsPage;
