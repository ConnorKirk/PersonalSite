---
title: "CloudFormation Rules"
date: 2022-01-20
author: Connor Kirkpatrick
slug: cloudformation-rules
categories:
  - cloudformation
tags: []
---

CloudFormation Rules are a lesser known feature that allow you to validate parameters of CloudFormation templates. 
Use Rules to improve the user experience of deploying templates by failing faster and providing helpful error messages.

## TLDR

Use the Rules section in CloudFormation to validate paramters 
```yaml
Rules:
  OnlyUsEast1:
    Assertions:
      - Assert:
          Fn::Equals:
            - !Ref AWS::Region
            - us-east-1
        AssertDescription: |
          This template can only be deployed in the us-east-1 region.
          This is because the ACM Certificate must be created in us-east-1
```

## Failing Faster

Often, CloudFormation templates have limitations that can't be expressed in options allowed by parameters. 
For example, a template could only work in certain regions. This is often the case where it creates resources not available in all AWS regions.

Whilst a template with invalid parameters will fail, it can be a frustrating experience for the user. It may take 20+ minutes for a template to create some resources, fail, and clean itself up. The error message received by the user may not be clear how to solve the problem.

Using Rules to validate parameters can improve the user experience by shortening the feedback loop. Templates with invalid parameters will fail faster. A rule can include an error message to give useful information to help the user.

## More Information

* This [AWS Blogpost](https://aws.amazon.com/blogs/mt/how-to-perform-cross-parameter-validation-using-aws-cloudformation-rules-and-assertions/) goes into much further depth on the topic

* [AWS CloudFormation Rules - Documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/rules-section-structure.html)