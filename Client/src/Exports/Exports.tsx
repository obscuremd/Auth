import { lazy } from "react";
import AvatarUi from "../Ui/Avatar";
import ButtonUI from "../Ui/Button";
import TextUi from "../Ui/Text";
import CardComponent from "../Components/Card";
import HeroComponent from "../Components/Hero";
import MenuComponent from "../Components/Menu";

import Logo from '../assets/Logo.svg'
import InputUi from "../Ui/Input";

//Logo
export { Logo}

// Ui
export const Avatar = AvatarUi;
export const Button = ButtonUI
export const Text = TextUi
export const Input = InputUi

// Components
export const Card = CardComponent
export const Hero = HeroComponent
export const Menu = MenuComponent

// screens
export const Overview = lazy(()=> import('../Screens/Overview'))
export const Drivers = lazy(()=> import('../Screens/Drivers'))
export const Order = lazy(()=> import('../Screens/Order'))
export const UserReviews = lazy(()=> import('../Screens/UserReviews'))

