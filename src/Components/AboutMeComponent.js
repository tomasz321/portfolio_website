import React from "react";
import my_photo from "../Images/my_photoPNG.PNG"
import AboutMeCarouselComponent from "./AboutMeCarouselComponent";
import postgres_logo from "../icons/postgresql/postgresql-original.svg";
import bitbucket_logo from "../icons/bitbucket/bitbucket-original.svg";
import bootstrap_logo from "../icons/bootstrap/bootstrap-plain.svg";
import django_logo from "../icons/django/django-original.svg";
import docker_logo from "../icons/docker/docker-original.svg";
import git_logo from "../icons/git/git-original.svg";
import github_logo from "../icons/github/github-original.svg";
import gitlab_logo from "../icons/gitlab/gitlab-original.svg";
import html5_logo from "../icons/html5/html5-original.svg";
import java_logo from "../icons/java/java-original.svg";
import javascript_logo from "../icons/javascript/javascript-plain.svg";
import linux_logo from "../icons/linux/linux-original.svg";
import pycharm_logo from "../icons/pycharm/pycharm-original.svg";
import python_logo from "../icons/python/python-original.svg";
import slack_logo from "../icons/slack/slack-original.svg";



export default function AboutMe() {

    function create_table() {
        const logos = [postgres_logo, bitbucket_logo, bootstrap_logo, django_logo, docker_logo, git_logo, github_logo,
        gitlab_logo, html5_logo, java_logo, javascript_logo, linux_logo, pycharm_logo, python_logo, slack_logo]
        const listLogos = logos.map((logo) => <li className="about-me-logo" key={logo.toString()}><img src={logo}
            alt="Logo"
            /></li>)
        return (
            <ul>{listLogos}</ul>
        )
    }

    return (
        <div className="AboutMe">
            <div className="section-content">
                <h1>Hi, I'm Tomasz</h1>
                <img src={my_photo} height={300} className="my-photo" alt="My face"/>
                <p>A delevoper from Gdańsk, Poland. I love creating products, that people can benefit from.</p>
                <AboutMeCarouselComponent />
                <h1>Technologies</h1>
                {create_table()}
            </div>
        </div>
    );
}