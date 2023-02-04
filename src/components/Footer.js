import React from "react";
import "./footer.css"
import * as Icons from "react-icons/fa";

function subscribe(){
	alert('subscribed');
}

const Footer = () => {
	const icons = [<Icons.FaTwitter /> , <Icons.FaFacebook /> , <Icons.FaInstagram /> , <Icons.FaSkype /> , <Icons.FaLinkedin />]
return (
	<footer>
	<div class = "footer">
		<div class = "MoongladeLinks">
			<h1>MOONGLADE LINKS </h1>
			<p>Connecting Brands With
				<br/>Better World</p>
			<ul class = "social">
				{icons.map((item)=>{
					return(
					<li class = "links">{item}</li>
					);
				})}
			</ul>

		</div>
		<div class = "usefulLinks">
		<p class = "footerpara">Useful Links</p>
		<ul class = "footerlist">
			<li>Home</li>
			<li>About</li>
			<li>Solutions</li>
			<li>Why MoongladeLinks</li>
			<li>Privacy Policy</li>
		</ul>
		</div>

		<div class = "solutions">
		<p class = "footerpara">Solutions</p>
		<ul class = "footerlist">
			<li>Mobile App&Game Marketing</li>
			<li>Brand Promotion</li>
			<li>Performance Marketing</li>
			<li>Lead Generation</li>
		</ul>
		</div>
		<textarea rows = "2" cols = "35" placeholder="Enter your email"></textarea>
                <button class = "button">Subscribe</button>

		<div>


		</div>
	</div>
	</footer>
);
};
export default Footer;
