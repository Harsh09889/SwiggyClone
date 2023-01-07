import React from "react";
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
function LoginSignup({}) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [switchLogin, setSwitchLogin] = useState(false);
	const [size, setSize] = React.useState("");

	const sizes = "md";
	const handleClick = (newSize) => {
		setSize(newSize);
		setSwitchLogin(true);

		onOpen();
	};
	const handleClickforSignUp = (newSize) => {
		setSize(newSize);
		setSwitchLogin(false);
		onOpen();
	};
	//login switch
	const handlespanClick = () => {
		setSwitchLogin(true);
	};
	//signup switch
	const handlespanSignUp = () => {
		setSwitchLogin(false);
	};

	return (
		<Box>
			<Box
				display={"flex"}
				gap={"20px"}
				justifyContent={"center"}>
				<Button
					mb={"100px"}
					borderRadius={"0px"}
					onClick={() => handleClick(sizes)}>
					Login
				</Button>
				<Button
					borderRadius={"0px"}
					color={"white"}
					colorScheme={"black"}
					bg={"black"}
					onClick={() => handleClickforSignUp(sizes)}>
					Sign up
				</Button>
			</Box>
			<Drawer
				onClose={onClose}
				isOpen={isOpen}
				size={size}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />

					<DrawerHeader></DrawerHeader>

					<DrawerBody
						zIndex={1000000}
						background={"white"}>
						{switchLogin ? (
							<>
								<Box
									display={"flex"}
									justifyContent={"space-between"}
									w={"80%"}
									mt={"5%"}>
									<Box>
										<Text
											color={"black"}
											fontSize={"33px"}>
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
												}}>
												create an account
											</span>
										</Text>
									</Box>
									<Box w={"28%"}>
										<Image
											src={
												"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
											}></Image>
									</Box>
								</Box>
								<Box w={"72%"}>
									<Input
										placeholder={"Phone number"}
										padding={"34px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"number"}
										mb={"24px"}
										mt={"40px"}
									/>
									<Button
										fontSize={"14px"}
										colorScheme={"#fc8019"}
										fontWeight={"bold"}
										color={"white"}
										borderRadius={"0px"}
										w={"100%"}
										bg={"#fc8019"}
										padding={"27px"}>
										LOGIN
									</Button>
									<Text
										mt={"5px"}
										fontSize={"12px"}>
										By clicking on Login, I accept the Terms & Conditions &
										Privacy Policy
									</Text>
								</Box>{" "}
							</>
						) : (
							//SIGNUP
							<>
								{" "}
								<Box
									display={"flex"}
									justifyContent={"space-between"}
									w={"80%"}
									mt={"5%"}>
									<Box>
										<Text
											color={"black"}
											fontSize={"33px"}>
											{" "}
											Sign up
										</Text>
										<Text>
											or{" "}
											<span
												onClick={handlespanClick}
												style={{
													color: "#fc8019",
													cursor: "pointer",
													fontSize: "14px",
												}}>
												login to your account
											</span>
										</Text>
									</Box>
									<Box w={"28%"}>
										<Image
											src={
												"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
											}></Image>
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
										placeholder={"Name"}
										padding={"34px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"text"}
									/>
									<Input
										placeholder={"Email"}
										padding={"34px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"email"}
									/>
									<Text
										color={"#5D8ED5"}
										mt={"25px"}
										mb={"16px"}
										fontSize={"16px"}>
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
										padding={"27px"}>
										CONTINUE
									</Button>
									<Text
										mt={"5px"}
										fontSize={"12px"}>
										By creating an account, I accept the Terms & Conditions &
										Privacy Policy
									</Text>
								</Box>{" "}
							</>
						)}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}
export default LoginSignup;
