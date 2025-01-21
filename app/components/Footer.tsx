"use client";

import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { navigationItems } from "./Navbar";

export function Footer() {
    const socialLinks = [
        {
            icon: <FiGithub size={20} />,
            href: "https://github.com/alleny0o",
            label: "GitHub"
        },
        {
            icon: <CiLinkedin size={20} />,
            href: "https://www.linkedin.com/in/allenyoo/",
            label: "LinkedIn"
        },
        {
            icon: <CiInstagram size={20} />,
            href: "https://www.instagram.com/frostyyallen/",
            label: "Instagram"
        },
    ];

    return (
        <footer id="footer" className="border-t-[0.5px] bg-gray-100 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {navigationItems.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.href} 
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact Me</h3>
                        <address className="text-muted-foreground not-italic">
                            <p>Allen Yoo</p>
                            <p className="mt-2">
                                <a 
                                    href="mailto:ayoo123@terpmail.umd.edu"
                                    className="hover:text-foreground transition-colors"
                                >
                                    ayoo123@terpmail.umd.edu
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Allen Yoo. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}