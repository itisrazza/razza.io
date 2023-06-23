#!/usr/bin/env node

/*!
 * Razza's Website - New Page Script
 */

const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const yaml = require("yaml");
const slugify = require("slugify")

program
    .requiredOption("--title <title>", "Sets the page title")
    .option("--slug <slug>", "Sets a custom slug")
    .option("--section <section>", "Sets the tags")
    .parse();

const options = program.opts();
    
const page = {
    title: options.title,
    slug: options.slug ?? slugify(options.title).toLowerCase(),
    date: new Date().toISOString().substring(0, 10),
    section: options.section ?? ""
}

const pageMarkdownPath = (page) => `_posts/${page.date}-${page.slug}.md`;
const pageAssetsPath = (page) => `assets/notes/${page.date}-${page.slug}`;

function createPage(page) {
    const frontMatter = {
        layout: "post",
        title: page.title,
        date: page.date,
        categories: `notes ${page.section}`.trim()
    };

    fs.writeFileSync(
        pageMarkdownPath(page), 
        "---\n" + 
            yaml.stringify(frontMatter) +
            "---\n\n" +
            "TODO: Write page content here."
    );
}

function createPageAssets(page) {
    fs.mkdirSync(pageAssetsPath(page));
    fs.copyFileSync(
        path.join("assets", "transparent.png"),
        path.join(pageAssetsPath(page), "masthead.png")
    );
}

createPage(page);
createPageAssets(page);
