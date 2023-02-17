import React , {useState} from "react";
import "./footer.css"
import * as Icons from "react-icons/fa";
import { Link } from "react-scroll";
import {useMatch , useResolvedPath} from "react-router-dom"
function subscribe(){
	alert('subscribed');
}


const Footer = () => {
	const url = "https://www.linkedin.com/company/moonglade-links/";
	const icons = [[<Icons.FaTwitter /> , url ], [<Icons.FaFacebook /> , url] , [<Icons.FaInstagram /> , url] , [<Icons.FaSkype /> , url] , [<Icons.FaLinkedin /> , url]]

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
					<li class = "links"><a href = {item[1]}>{item[0]}</a></li>
					);
				})}
			</ul>

		</div>
		<div class = "usefulLinks">
		<p class = "footerpara">Useful Links</p>
		<ul class = "footerlist">
			<li class = "flist"><a href = "/" spy={true} smooth={true} offset={50} duration={500}>Home</a></li>
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
		<div class = "flex-footer">
		<textarea rows = "2" cols = "35" placeholder="Enter your email"></textarea>
				<div class = "hover">
                <button type = "Submit" class = "button" >Subscribe</button>
				</div>
		</div>
		<div>


		</div>
	</div>
	</footer>
);
};
export default Footer;
