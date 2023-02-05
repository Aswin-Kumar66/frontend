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
			<li class = "flist">Home</li>
			<li class = "flist">About</li>
			<li class = "flist">Solutions</li>
			<li class = "flist">Why MoongladeLinks</li>
			<li class = "flist">Privacy Policy</li>
		</ul>
		</div>

		<div class = "solutions">
		<p class = "footerpara">Solutions</p>
		<ul class = "footerlist">
			<li class = "flist">Mobile App&Game Marketing</li>
			<li class = "flist">Brand Promotion</li>
			<li class = "flist">Performance Marketing</li>
			<li class = "flist">Lead Generation</li>
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
