import React from "react";
import "./footer.css"
import * as Icons from "react-icons/fa";
import { Link } from "react-scroll";
import {useMatch , useResolvedPath} from "react-router-dom"
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
			<li class = "flist"><Link to = "Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
			<li class = "flist"><Link to = "About" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
			<li class = "flist">Solutions</li>
			<li class = "flist"><Link to = "whyMoonglade" spy={true} smooth={true} offset={50} duration={500}>Why MoongladeLinks</Link></li>
			<li class = "flist">Privacy Policy</li>
		</ul>
		</div>

		<div class = "solutions">
		<p class = "footerpara">Solutions</p>
		<ul class = "footerlist">
			<li class = "flist"><a href = "AppConsulting">App Consulting</a></li>
			<li class = "flist"><a href = "BrandPromotion">Brand Promotion</a></li>
			<li class = "flist"><a href = "PerformanceMarketing">Performance Mareting</a></li>
			<li class = "flist"><a href = "LeadGeneration">Lead Generation</a></li>
		</ul>
		</div>
		<textarea rows = "2" cols = "35" placeholder="Enter your email"></textarea>
                <button type = "Submit" class = "button">Subscribe</button>

		<div>


		</div>
	</div>
	</footer>
);
};
export default Footer;
