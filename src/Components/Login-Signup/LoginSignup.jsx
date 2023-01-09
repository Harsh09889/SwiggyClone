import React, { useEffect, useRef } from "react";
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
	useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import CustomFont from "./customFont";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../Redux/Auth/AuthActions";
import { useNavigate } from "react-router-dom";
function LoginSignup({ open, loadlogin }) {
	const [switchLogin, setSwitchLogin] = useState(loadlogin);
	const [loginState, setLoginState] = useState({
		phn: 0,
		password: "",
	});

	const [signupState, setSignupState] = useState({
		phn: 0,
		username: "",
		name: "",
		password: "",
	});

	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const auth = useSelector((state) => state.auth.auth.isAuth);
	const error = useSelector((state) => state.auth.auth.error);
	const registerStatus = useSelector((state) => state.auth.auth.registerStatus);
	const firstRender = useRef(0);
	const dispatch = useDispatch();
	const toast = useToast();
	const [trackSignup, setTrackSignup] = useState(0);

	function handleLogin() {
		if (!loginState.phn || !loginState.password) {
			toast({
				title: "Please fill all the details...",
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		} else {
			dispatch(login({ ...loginState, phn: +loginState.phn }));
		}
	}

	function handleSignup() {
		if (
			!signupState.name ||
			!signupState.phn ||
			!signupState.username ||
			!signupState.password
		) {
			toast({
				title: "Please fill all the details...",
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		} else if (!signupState.phn.length === 10) {
			toast({
				title: "Enter a valid Phone number",
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		} else {
			const registerDetails = { ...signupState, phn: +signupState.phn };
			console.log(registerDetails);
			dispatch(register(registerDetails));
		}
		setTrackSignup(trackSignup + 1);
	}

	useEffect(() => {
		if (firstRender.current > 1) {
			console.log(firstRender.current);
			if (auth) {
				toast({
					title: "Login successful!!",
					status: "success",
					duration: 2000,
					isClosable: true,
					position: "top",
				});
				onClose();
				setLoginState({
					phn: 0,
					password: "",
				});
				navigate("/");
			} else {
				error &&
					toast({
						title: error,
						status: "error",
						duration: 2000,
						isClosable: true,
						position: "top",
					});
			}
		}

		firstRender.current++;
	}, [auth, error]);

	useEffect(() => {
		if (firstRender.current > 3) {
			console.log("inside open", firstRender.current);
			if (isOpen) onClose();
			else onOpen();
		}
		firstRender.current++;
	}, [open]);

	const firstRenderRegister = useRef(0);
	useEffect(() => {
		if (firstRenderRegister.current > 1) {
			if (registerStatus === 201) {
				toast({
					title: "Register successful!!",
					status: "success",
					duration: 2000,
					isClosable: true,
					position: "top",
				});

				dispatch(
					login({ phn: +signupState.phn, password: signupState.password })
				);
				setSignupState({
					phn: 0,
					username: "",
					name: "",
					password: "",
				});
			} else if (registerStatus >= 400) {
				toast({
					title: "Register Not Successful Please after some time!!",
					status: "error",
					duration: 2000,
					isClosable: true,
					position: "top",
				});
			}
		}
		firstRenderRegister.current++;
	}, [registerStatus]);

	//signup switch
	const handlespanSignUp = () => {
		setSwitchLogin(false);
	};

	const handlespanClick = () => {
		setSwitchLogin(true);
	};
	return (
		<Box>
			<Drawer
				onClose={onClose}
				isOpen={isOpen}
				size={"md"}>
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
										value={loginState.phn || ""}
										name='phn'
										onChange={(e) =>
											setLoginState((p) => ({
												...p,
												[e.target.name]: e.target.value.replace(/[^0-9]/g, ""),
											}))
										}
										mt={"40px"}
									/>
									<Input
										placeholder={"Password"}
										padding={"34px"}
										name='password'
										onChange={(e) =>
											setLoginState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
										value={loginState.password}
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
										onClick={handleLogin}
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
								</Box>
							</>
						) : (
							//SIGNUP
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
											Sign up
										</Text>
										<Text>
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
										name='phn'
										value={signupState.phn || ""}
										onChange={(e) =>
											setSignupState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
										type={"number"}
										mt={"40px"}
									/>

									<Input
										placeholder={"User_Name"}
										padding={"34px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"text"}
										name='username'
										value={signupState.username}
										onChange={(e) =>
											setSignupState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
									/>
									<Input
										placeholder={"Name"}
										padding={"34px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"text"}
										name='name'
										value={signupState.name}
										onChange={(e) =>
											setSignupState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
									/>
									<Input
										placeholder={"Password"}
										padding={"34px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"password"}
										name='password'
										value={signupState.password}
										onChange={(e) =>
											setSignupState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
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
										padding={"27px"}
										onClick={handleSignup}>
										CONTINUE
									</Button>
									<Text
										mt={"5px"}
										fontSize={"12px"}>
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
