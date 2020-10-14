import React from "react";
import { Document, Page, pdfjs  } from 'react-pdf';
import cv_file from "./TD_cv.pdf";
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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



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
                <h1>About Me</h1>
                <p>Hi, my name is Tomasz and this is my personal webpage/portfolio</p>
                <p>Below you can find my curriculum vitae</p>
                <Document
                    file={cv_file}
                >
                    <Page pageNumber={1} />
                </Document>
                <h1>Technologies</h1>
                {create_table()}
            </div>
        </div>
    );
}