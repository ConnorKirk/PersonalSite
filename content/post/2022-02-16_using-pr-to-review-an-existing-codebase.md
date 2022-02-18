---
title: "Reviewing existing codebases with Pull requests"
date: 2022-02-16
author: Connor Kirkpatrick
slug: using-pr-to-review-an-existing-codebase
categories:
  - linux
tags: []
---

## tldr

1. Create a new empty branch and add an empty commit. 
2. Push the empty branch. 
3. Create a new pull request, using the branch to be reviewed as the _source_, and the empty branch as the _target_.

```sh
git switch --orphan "pr-review" && git commit -m "empty" --allow-empty
```

## Motivation

Often you need to review a small existing codebase and provide feedback. 
The tools for reviewing pull requests (aka merge request) are perfect for this, but don't work for reviewing an existing code base.
Pull reqests work by comparing two branches. 
You can create a diff of an entire codebase by creating an branch with no history to compare the codebase to.

