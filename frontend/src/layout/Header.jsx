import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Header = () => {
	return <header className="sticky top-0 z-[1] mx-auto  flex w-full  flex-wrap items-center justify-between border-b border-gray-100 bg-background font-sans font-bold uppercase text-text-primary backdrop-blur-[100px]">
		<Logo />
		<h1 className="space-x-3">AlFirdous Funeral/Washing Service</h1>
		<Navbar />
	</header>;
};

export default Header;
