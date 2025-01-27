[Design System]

Version: 1.0
Author: Bart Kuijpers
Copyright © 2025


This project uses gulp 5 in the design system. This has consequences for your local development environment.
This system has been upgraded for a newer version of node.js to resolve the vulnerabilities that existed in the outdated system.

This system is now running the following versions to run gulp:
Node.js		  =>	18.19.0
NPM		      =>	10.2.3
Gulp CLI	  =>	3.0.0
Gulp Local	=>	5.0.0

To be able to switch between environments we recommend using nvm (node version manager) on your machine.
In the package.json you will encounter overrides, these overrides are applied to use the updated versions 
of packages for which there are no vulnerabilities.

Keep in mind that this system remains under development, so will you encounter any vulnerabilities with an npm install? 
Please report this to the product owner, in which case the design system must be adjusted.

Can we gulp it?
Yes you can!
