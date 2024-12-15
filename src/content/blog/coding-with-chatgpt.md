---
title: "Coding Exclusively with ChatGPT for 30 Days: Lessons and Takeaways"
description: "Learnings and ideas from coding exclusively with conversational AI Models"
date: "2024-01-12"
tags: ["bytes","ai"]
---
Almost six months ago, OpenAI released ChatGPT's Code Interpreter (now named Advanced Data Analysis[^1]). If you're not aware, this function allows you to provide a file input with instructions and have a conversation with an AI Chatbot, built on top of GPT-4. As you ask questions and provide requirements, the chatbot writes code to accomplish the task you've given it and executes the code once complete.

The code being written can be exposed, if you're into that sort of thing. Otherwise, the desired output that you requested is generated and provided as a link that you can download to your own computer. You can take a look at this file and either confirm or deny that it looks as expected.

After seeing Code Interpreter in action, back in July[^2], I challenged myself to never write a line of code myself going forward. Instead, every project I encountered, both for work and personal reasons, would need to be completed using this new tooling.[^3]

## Lessons

Over the course of the past month of undergoing this exercise, I've put together the following learnings that I've discovered from trying to exclusively code with ChatGPT.

### Try, Try, and Try Again

In general, people seem to expect AI models to get something right the first time around. If it's not correct, the model is bad.

Instead, I learned that AI should be treated almost like a Jr. Developer. It's going to make mistakes - and plenty of them. While that may seem frustrating, you'll quickly realize that most of the time, the mistakes are the result of poorly defined requirements on your part.

As the conversation continues, you'll find yourself having to request more and more changes that you didn't actually specify upfront. Other times, you'll have to steer the AI model back on track by explicitly stating "The file you returned had {problem X}. Instead I need it to look like {solution Y}." This process should continue in a loop until the final desired output is achieved.

Expecting great results in one attempt is a poor assumption that sets up the usage of AI for failure. We should expect continuous improvement from these models, not perfection.

### Break Things into Chunks

If you provide an AI model with too many instructions, it can sometimes lose context of the work that needs to be done. This seems to cause a lot of frustration when people expect the AI to perfectly perform 10 tasks in a row from a single request.

There's two possibilities to fix this issue:

1. Break out each step into a separate line of the current conversation.
2. Break out your steps to be performed into entirely different conversations

For option 1, all you need to do is request one thing at a time. Once Step 1 has been completed, ask for Step 2 to be performed to the previous result. Continue asking step by step until you're finished.

For option 2, you need to clearly map out what the input and output of every step is. Your goal is to create new conversations that provide the output of Step 1 as the input of Step 2... and repeat as necessary.

Typically, I would prefer option 2 due to the modularity and visibility into the work being done. You make the execution of tasks modular by ensuring that a single unit of work is 100% accurate at a time.

No matter which route you choose, the same idea holds true. For maximum effectiveness, AI models need problems broken down into their smallest components to have a chance at success.

### Resulting Code is Notebook Friendly, Deployment Poor

The code that AI returns looks functionally equivalent to code that you would find in a Jupyter notebook - a mess of individual code blocks without preserved execution order[^4]. While some might say this improves the overall understanding of what the code is doing, it causes a few additional steps that can be problematic for deployment.

Once you know that Code Interpreter has created something that matches your requirements, you have to prompt it to do two things:

1. **Return an executable python script**

    You'll need to create a prompt that's the effective equivalent of "Return a finalized python script that can be executed on my local machine that runs through all of the steps listed above and results in the previous output."

    The resulting script is usually correct, but the problem again is that if you try to accomplish too many steps in your conversation, you'll sometimes be provided with a python script that is only partially complete. I recommend giving it a once-over to verify it's complete, or ask the model to run the entire script to verify its accuracy.

2. **Return a requirements.txt file**

    In order for you to execute the Python script, you'll also need to know what python packages need to be installed. The easiest way to accomplish this is by creating a prompt that's similar to "Looking at the executable python script you just provided me, create a requirements.txt file." Then all you have to do download the file, navigate to the download location in your terminal, and run pip install -r requirements.txt[^5]

### Context is Limited to Training

When I finished this experiment, GPT-4 models were limited to training data from September 2021. Since then, the models have been updated to use data from April 2023. Regardless, it’s going to be a while until we have models that are up-to-date with the latest and greatest.

This means that the code being written and executed in a sandbox will be using older packages which may come with their own security risks or executional abnormalities. Normally, this didn't cause that much of a problem for me and there are ways around the issue.

If you need your code to use the latest functions from a specific Python package, currently, you'll need to provide it with the extra context beforehand. This can take a few forms:

- You can download the HTML files of documentation and upload this as an initial file, including a prompt that indicates to the AI model that you want it to leverage functions that are documented in the HTML file.
- You can copy/paste relevant endpoints or functions from documentation to provide the model with just enough context into the new functionality. This will require quite a bit more coding knowledge to identify the correct functions.

It's your choice of when you provide this information. If you provide it at the beginning, you can ensure that code will be written with updated logic, but it may not be executable within the code interpreter environment. If you provide it at the end, you can have the model convert any outdated functions, but you'll still be responsible for verifying execution on your own.

In the grand scheme of things, this issue was fairly minor.

### The Ultimate Utility Service, Blocked from the Outside World

ChatGPT performed wonderfully on tasks where there was a clear input file or data structure that could be manipulated.

In fact, it made me wonder if we're really going to need all those free tools that exist on the web. Here's a small list of tasks I found it to be great at:

- Converting file formats
- Extracting images from video, or color schemes from images
- Converting HEX to HSL (or really any measurement format to another)
- Determining if there was a difference between two files and returning the results
- Generating random data or creating random samples from provided data
- Explaining cron schedules or regex

However, there was a limitation on the utility that could be performed. Currently, these services don't talk to the outside world. That means if you want to run a script that executes a GET or POST command against an API, you'll be out of luck. The code itself can be generated, but it can't be tested and run directly within the same platform.

## Final Thoughts

### The Feeling of Efficiency

The experience of getting working code without having to really “work” for it was an absolute dream. My experience represented the best of what engineering has to offer. You could spend your time figuring out how to solve problems rather than figuring out how to construct the syntactical elements that solved that problems.

### Deployment is Tough

But that doesn’t mean it’s without problems. I couldn't just be satisfied creating and running the code in Code Interpreter itself. I don’t want to run something ad hoc. Instead, I needed to discover ways to get the code into deployable pipelines to run on an automated basis. This proved to be a challenge that while not insurmountable, is definitely less beginner friendly.

## Experiencing an Emerging Future

This experiment really led me to believe that the future of engineering will involve coding alongside AI models. Gone are the days of banging your head against a desk trying to figure out why your code isn’t working.

But this shift requires engineers to be better at understanding the context of issues being faced by business users with the ability to clearly explain the context and solution in plain English - a skillset typically reserved for the best product managers.

But I believe that we’re experiencing an emerging new type of engineering work - AIOps. The process of going through the entire software development lifecycle from idea to deployment alongside conversational AI models. Writing code from scratch will be a thing of the past.

If you’re interesting in learning more about my takes on AIOps, an emerging state of engineering, subscribe for future posts!

[^1]: I think the name change is disingenuous to the actual work that can be performed by this tooling. Read more about my thoughts on LinkedIn.

[^2]: Yes, I wrote this post months ago and am only now getting around to publicizing it.

[^3]: In hindsight, this was the best challenge I've ever set for myself. If you have the means, I would really encourage you to take the plunge and experience what the future of engineering is going to look like.

[^4]: Personally, I loathe notebooks and think we're doing data practitioners a disservice by teaching them a notebook first approach to development. Yes, it makes the output of your work easier to see. But is it worth the cost of learning actual development skills? I'll write about it one day…

[^5]: Yes, yes, for all you Pythonistas, you should do this only in a virtual environment.