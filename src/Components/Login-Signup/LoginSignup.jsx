import React, { useEffect } from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  Text,
  DrawerCloseButton,
  Image,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import CustomFont from "./customFont";
function LoginSignup({ open, loadlogin }) {
  const [switchLogin, setSwitchLogin] = useState(loadlogin);

  useEffect(() => {
    if (isOpen) onClose();
    else onOpen();
  }, [open]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlespanClick = () => {
    setSwitchLogin(true);
  };
  //signup switch
  const handlespanSignUp = () => {
    setSwitchLogin(false);
  };

  return (
    <Box>
      {/* <Box display={"flex"} gap={"20px"} justifyContent={"center"}>
        <Button mb={"100px"} borderRadius={"0px"} onClick={onOpen}>
          Login
        </Button>
        <Button
          borderRadius={"0px"}
          color={"white"}
          colorScheme={"black"}
          bg={"black"}
          onClick={onOpen}
        >
          Sign up
        </Button>
      </Box> */}
      <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            {switchLogin ? (
              <>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  w={"80%"}
                  mt={"5%"}
                >
                  <Box>
                    <Text color={"black"} fontSize={"33px"}>
                      Login
                    </Text>
                    <Text>
                      or{" "}
                      <span
                        onClick={handlespanSignUp}
                        style={{
                          color: "#fc8019",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        create an account
                      </span>
                    </Text>
                  </Box>
                  <Box w={"28%"}>
                    <Image
                      src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                      }
                    ></Image>
                  </Box>
                </Box>
                <Box w={"72%"}>
                  <Input
                    placeholder={"Phone number"}
                    padding={"34px"}
                    borderRadius={"0px"}
                    w={"100%"}
                    type={"number"}
                    mt={"40px"}
                  />
                  <Input
                    placeholder={"Password"}
                    padding={"34px"}
                    borderRadius={"0px"}
                    w={"100%"}
                    type={"password"}
                    mb={"24px"}
                  />
                  <Button
                    fontSize={"14px"}
                    colorScheme={"#fc8019"}
                    fontWeight={"bold"}
                    color={"white"}
                    borderRadius={"0px"}
                    w={"100%"}
                    bg={"#fc8019"}
                    padding={"27px"}
                  >
                    LOGIN
                  </Button>
                  <Text mt={"5px"} fontSize={"12px"}>
                    By clicking on Login, I accept the Terms & Conditions &
                    Privacy Policy
                  </Text>
                </Box>
              </>
            ) : (
              //SIGNUP
              <>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  w={"80%"}
                  mt={"5%"}
                >
                  <Box>
                    <Text color={"black"} fontSize={"33px"}>
                      Sign up
                    </Text>
                    <Text>
                      <span
                        onClick={handlespanClick}
                        style={{
                          color: "#fc8019",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        login to your account
                      </span>
                    </Text>
                  </Box>
                  <Box w={"28%"}>
                    <Image
                      src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                      }
                    ></Image>
                  </Box>
                </Box>
                <Box w={"72%"}>
                  <Input
                    placeholder={"Phone number"}
                    padding={"34px"}
                    borderRadius={"0px"}
                    w={"100%"}
                    type={"number"}
                    mt={"40px"}
                  />

                  <Input
                    placeholder={"Email"}
                    padding={"34px"}
                    borderRadius={"0px"}
                    w={"100%"}
                    type={"email"}
                  />
                  <Input
                    placeholder={"User_Name"}
                    padding={"34px"}
                    borderRadius={"0px"}
                    w={"100%"}
                    type={"text"}
                  />
                  <Input
                    placeholder={"Password"}
                    padding={"34px"}
                    borderRadius={"0px"}
                    w={"100%"}
                    type={"password"}
                  />
                  <Text
                    color={"#5D8ED5"}
                    mt={"25px"}
                    mb={"16px"}
                    fontSize={"16px"}
                  >
                    Have a referral code?
                  </Text>

                  <Button
                    colorScheme={"#fc8019"}
                    fontSize={"14px"}
                    fontWeight={"bold"}
                    color={"white"}
                    borderRadius={"0px"}
                    w={"100%"}
                    bg={"#fc8019"}
                    padding={"27px"}
                  >
                    CONTINUE
                  </Button>
                  <Text mt={"5px"} fontSize={"12px"}>
                    By creating an account, I accept the Terms & Conditions &
                    Privacy Policy
                  </Text>
                </Box>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default LoginSignup;
