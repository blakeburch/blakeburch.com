---
title: "Transform Your Data Team into a Performance Powerhouse"
description: "Drive more value for your organization by adopting an action-oriented mindset."
date: "2023-01-06"
tags: ["data","action"]
---

When I was at the Coalesce conference last year, I primarily heard two different types of struggles from the people I chatted with:

- We're overwhelmed with the task of storing and cleaning all of our data.
- We've collected all this data, but we're struggling to get people to actually use it.

Frankly, I left a bit discouraged. “Is this really all data people care about? Is the initial ETL still a big problem for people? Or is this all just skewed because I’m at a transformation vendor’s conference?“ The more I dug, the more it seemed like the answer was “yes”, “yes”, and “probably.” Even with the slightly skewed perspective, data teams still spend an inordinate amount of time and effort focused on gathering and cleaning data. 

While I understand that these tasks are necessary evils that are impossible to escape from, I’ve never encountered a situation where those two activities should be the most important part of the equation. They’re not worth spending all of your time and energy perfecting. They’re just a means to an end.

The real problem arises when data teams don’t stop to understand how the data will actually be used. Everyone just expects that someone, somewhere, will eventually find a use for all that data.

Spoiler alert: You won’t. [^1]

>Ask not what your company can do with data. Ask what data can do for your company.

That’s one of the biggest reasons why [data teams are still seen as a cost center](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-data-driven-enterprise-of-2025). Most data professionals are process people. We get so caught up in developing clean systems and picking the right technology that we lose sight of what we’re building all of this for.

I think it’s worth taking a hard look at ourselves to see how we can shift away from the process and turn into performance-driven powerhouses, laser-focused on the results we drive for the business. What could your data team accomplish if you made subtle shifts to be more action-oriented?

## Qualifying Requests

Picture this: It’s the year 2023 and your data team receives a request to create a new dataset. What do you do? 

Refuse! Go on strike! [^2]

Or…. get promptly back to work to understand exactly what that business user is trying to achieve. Remember, your goal as the data team is not to churn out clean data. It’s to empower business users to answer a question and take action.

Keep in mind that most business users don’t actually know exactly what they want. This can send your data team on a multi-month “wild goose chase” to deliver the mythical dataset that can solve all of their problems.

If you want to avoid geese related activities in the future, it’s your team’s responsibility to take the time to understand business functions and the data related to each function[^3]. Don't take the requests you get at face value. Use what you know about that business unit and make sure you get to the bottom of the following series of questions:

1. What specific question is the requester trying to answer?
2. If they were provided with the answer hypothetically, what action would they take with that answer? 
3. How frequently would the action be taken?
4. What business value would that action achieve?
5. Can that action or business value be achieved through alternative methods or with existing data?

In many cases, the request stops flat in its tracks there. Encouraging your team to help others think critically about the action that data will drive can be a “death knell” to the common data request, avoiding wasted time and effort.

## Testing the Waters
You’ve asked your series of questions and have landed on the fact that, yes, this request actually needs to happen. The expected action is valuable and can only be achieved by the data forged from your team. What do you do?

Create mock data!

Yes, that’s right. You don’t need anything fancy here. Just a Google sheet with a few rows and columns will do. Something that looks like looks and smells just like the real thing, but takes 10% (or less) of the work to build out. All you need to do is scope the structure of the real data without actually pulling it.

The goal here is to suss out if the data you provide can even be used by the requester to answer their question and take the action they desired. Odds are, it probably can’t, so you go through a few rounds of revisions and land in one of two situations; a detailed and approved data structure, or a canceled project. 

Only once the data structure is approved should your team ever focus on extracting and transforming the data. But this time around, you’ll have an action plan in hand to verify your team’s work will deliver business performance.

## Build Data Iteratively, not Exhaustively
Let's say that you've gone through the steps and are committed to helping the sales team. In a world where your data team is driven by requests, you might instinctively think “We should just grab all the data related to SalesMorse[^4] right now. You never know when the team might ask for more.” My good friend Admiral Ackbar has something to say about this... [^5]

Data teams should strive to avoid building giant datasets that contain all the data in the most pristine format possible. It's not a badge of honor. It's not something to take pride in. It’s just costly bits and bytes.

Instead, let the actions drive the data pipeline development. If the action you agreed to only relies on contacts, do you really need to grab companies, deals, activities, etc.? Probably not.[^6] You can always pull that data later when it gets asked for.

This approach may make the data development cycle quite a bit slower, sure. But what does that matter if the data you do load is actively getting used and driving known business objectives?

## Put Your Team in the Driver's Seat
The previous three steps are great ways to make sure your data team is handling data requests in a more effective manner. It practically guarantees that your efforts will be tied to tangible output. But wouldn’t it be even better if your team was the one driving the valuable actions for your company?

### Driving Innovative Actions
Let's be real — my perspective is heavily skewed. Previously, my focus was on Data Innovation[^7] for an [advertising agency](https://www.pmg.com/). Reporting wasn’t the issue I was tasked with of solving (although I still had to do my fair share of it). Instead, I needed to find new opportunities for our clients. Every opportunity came from a question, tied to an action, tied to underlying dataset that we needed to pull. 

- Could we increase ad presence in geographies to see if it would impact real-time store traffic?
- Could we turn off product campaigns when online inventory dipped below a threshold to avoid bad user experiences and low conversion rates when common sizes aren’t available?
- Could we use a promotion calendar to automatically generate and assign ad copy to campaigns?
- Could we scrape social media posts of influencers for brands our retailer sold and increase bids temporarily when they were mentioned to capture extra demand?

The difference was that these requests came directly from our data team, not from other stakeholders. By deeply understanding our client’s business and spending time with the account managers who performed the daily tasks, we were able to build out a list of potential actions that we knew would drive business value.

While these examples are near and dear to my heart, this type of proactive approach to driving business value with data isn’t just limited to advertising. When your data team is in the driver seat, you can cut down on the back-and-forth and quickly develop datasets that are built with new actionable ROI-driving activities in mind. All you have to do is think through a framework of “Action → Value → Data” to unlock a world of new initiatives.

### Driving Boring Actions
While every business has their own innovative opportunities, sometimes the best candidates for action are the boring ones. By encouraging your data team to spend some time shadowing different business units, you can take a good long look at what efforts teams are spending the most amount of time on each day. Things like:

- Spending time analyzing ad performance and rotating in new tests
- Researching keywords to develop an SEO content strategy
- Generating payment invoices for partners
- Developing visuals and writeups for customer meetings
- Sending follow-up emails to employees that haven’t completed a survey

Each of these activities has a clear dataset associated with it and a clear set of steps that can be followed to achieve the desired action. Business users may not make these requests, but that doesn’t mean that your data team shouldn’t think about about tackling them.

And the best part of resolving these boring actions? You don’t even need to make the system better. By simply automating the monotonous work already being performed, you will create a business benefit and a lifetime friend in that department who will now spend less time begrudgingly doing a task. It’s a win-win!

## Pursuing Performance
At the end of the day, every business, no matter the industry, has a wealth of potential use cases. Your data team should exist with a sole purpose to accelerate those use cases with data.

Don’t start with the data. Start with the action.

By shifting focus from ingestion and transformation to action and performance, you can start to become a powerhouse that drives real business value and becomes an integral part of the organization’s success. And who wouldn’t want that?

[^1]: Or maybe you will. I’m not a soothsayer.

[^2]: A running joke from our engineering team that you should “go on strike” if a task isn’t well documented with requirement because working on it as is will be more work in the long run.

[^3]: I’m a big proponent of structuring your data team to be embedded into various business units, rather than living as their own unit, but that’s a different post for a different day.

[^4]: `.. ..-. / .-- . / -.-. .- -. / -... ..- .. .-.. -.. / --- -. / - --- .--. / --- ..-. / .---- ... / .- -. -.. / ----- ... --..-- / ... ..- .-. . .-.. -.-- / ... .- .-.. . ... / - . .- -- ... / -.-. --- ..- .-.. -.. / -... ..- .. .-.. -.. / --- -. / - --- .--. / --- ..-. / -.. --- - ... / .- -. -.. / -.. .- ... .... . ... .-.-.-`

[^5]: Somehow, I found it funnier to include this reference because I actually don’t like Star Wars.

[^6]: Or for the developers reading this, YAGNI.

[^7]: A title I made up because it sounded cool. To be fair, we did some pretty cool things for the time.