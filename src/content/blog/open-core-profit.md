---
title: "The Incompatibility of Open Core and Profit"
description: "Can we really trust Open Core companies?"
date: "2023-02-28"
tags: ["bytes"]
---
In the data community, open core products are all the rage right now. Some tout it as the future. Many think it’s the only way to build trust with vendors that handle something as sensitive as your data.

There are a lot of benefits that come along with a gravitational shift towards open core companies. Transparency. Flexibility. Portability. However, it’s important to take a closer look at driving forces behind this business model. These businesses are playing into marketing gimmicks that trick developers into adoption, with a long-term playbook that hardly represents the product developers initially fell in love with.

For a business model built on transparency, the motives of these companies feel anything but transparent.

From my perspective, blindly rallying behind a business with an open core business model is a recipe for disaster that may lead to future disappointment and failure. The very nature of the business model creates a conflicting set of incentives that are incompatible with its ability to make money.

## What is Open Core?

Open core is a relatively new model[^1] where a business exists to commercialize open source software. This can take many forms[^2], but the most common structure is to create an open-source software product that you also try to monetize. It has become particularly popularized in the world of funding.

Let’s take the following companies[^3]:

- Airbyte - $181.2M in funding
- dbt - $414.4M in funding
- Prefect - $46M in funding
- Dagster/Elementl - $15.8M in funding
- Great Expectations/Superconductive - $61M in funding
- DataHub/Acryl Data - $9M in funding
- DuckDB/Mother Duck - $47.5M in funding
- Supabase - $116.1M in funding
- Superset/Preset - $48.4M in funding

While most companies don’t reveal their valuation, we can roughly estimate it to be about 10x of the amount raised.

So how can all these seemingly free products be valued at these insane figures?

The answer lies in the familiar business model of social media companies.

1. Aquire users.
2. Get them addicted to your product.
3. Find a way to monetize them.

## Why Open Core?

When targeting a technical audience, there are a lot of incentives to build open core businesses:

- Developers feel more trust in the technology when they have the ability to look under the hood.[^4]
- Developers will always advocate for cool new technology they enjoy using.[^5]
- Developers have confidence that they won’t have to uproot their own business processes if the company goes under.
- Developers have the ability to take their skills from one company to another.

While these are important factors, when a business chooses to to build a product open source, it isn’t for these charitable reasons. It’s a marketing expense.

> "If you're not paying for the product, then you are the product." </br>
> — Tristan Harris, The Social Dilemma

The open core business model has effectively become a marketing ploy to get technical people to trust and extol the product under the guise of community.

But there is no community. Just unpaid sales staff who insert your product into every conversation and unpaid support personnel who help your users troubleshoot their issues. Both provide valuable datapoints for long-term engagement and viability.

From the outside perspective, the open core strategy appears to be working.

## Monetization Strategies

With the main product being entirely open source, there are 3 main monetization strategies that open core businesses use right now.

### Licenses for Commercial Use
In some cases, the license of an open core product maintains that commercial use requires payment, but personal use is entirely free. This model is typically employed by more enterprise facing products like RStudio and Oracle’s Java. From an outsider’s perspective, this seems relatively hard to enforce.

### Support and Training
Since most people that use your open source product rely on other users for troubleshooting, some companies find it advantageous to sell monthly subscriptions that allow companies to get priority support directly from the development team, alongside prioritized feature requests. As an added bonus, many of these also include training and onboarding.

### Hosted Cloud Product
Most open source products have to be run on a machine somewhere, whether that’s on your local laptop or a server on the cloud. Why not outsource the hassle of infrastructure maintenance to the company that developed the product? Open core businesses often decide to launch a cloud version of their product that anyone can access from the web, with a few extra features built in.

This is the most prevalent (and problematic) monetization strategy, which I’ll be focusing most of my energy on dissecting the issues that are pervasive with it.

## The Open Core Strategy

Let’s break down the go-to-market playbook for most modern open core businesses.

- Step 1: Launch an open source product.
- Step 2: Get users and encourage them to star the repository.
- Step 3: Raise funds based on your userbase and stars.
- Step 4: Grow the team to focus on both product and community growth for a span of 1-2 years.
- Step 5: Introduce the cloud version of your product. Initially, maintain development parity between your core and cloud products. Make sure users know your commitment to the original product that made the company great.
- Step 6: Invest in more personnel to support the cloud product.
- Step 7: Incentivize cloud usage by all means necessary. After all, that’s how you make money.
- Step 8: **???**

I don’t think we’ve seen enough open core products to really know what happens for Step 8 and beyond, but the economics don’t paint the most flattering picture.

When you break down the go-to-market strategy, it’s easy to see that open core is just freemium with extra steps. The goal is to get as many people reliant on the open source product as possible so they can eventually be monetized.

The free product you use is propped up by the deep pockets of venture capitalists, and at some point, rent is going to come due. Open core companies need to make a significant return for investors or it will not have been worth it. It may not be tomorrow. It may take 5 years. But rest assured, the pressure will take hold at some point.

When that inevitably happens, the most likely outcome is that the open source product will stagnate and be “good enough” while the majority of development focus goes towards the money maker. New features only get added to the cloud product.

Of course, companies will make promises that this will never happen. But these promises exist to assuage the concerns of the current moment, not to guarantee a future state. It’s important to keep up appearances after all.

To me, these promises feel similar to companies that make an acquisition and say “Acquired Inc. will retain full autonomy over their operations”. Three years later, you see people jumping ship because heavy-handed changes started coming in from the parent organization.[^6]

## Misaligned Incentives
As an open core business, how do you kick off the monetization process?

For most SaaS businesses, freemium products give you access to the full product with limited features and upsells built into the UI. You may even be given a glimmer of the "whole kit and caboodle" for a time-limited trial. The product is purposefully designed so that once you're hooked on using the product, you’ll inevitably run into minor annoyances and roadblocks that hopefully convince you to hand over your credit card[^7]. Determining those crucial "missing features" can take years of experimentation.

Open core businesses have more of an uphill battle to convert users because they started by giving fully featured access which they then have to limit by omission. That gives open core products two main selling points to convince users to convert to their paid product:

- Additional Features
- Reduced Friction

In both cases, the outcome is the same: the original open source product becomes stagnant.

## Additional Features
There always comes a time where engineering must prioritize features for the paid cloud product. This typically starts to manifest itself in minor quality-of-life enhancements like:

- In-depth analytics and metadata on product usage out of the box.
- Programmatic access and management through an API.
- User access management, audit logs, and other security measures.
- Native integrations with existing project management, logging, or CI/CD platforms.

Most of these options are just basic enhancements. Nice-to-haves. It’s the carrot on a stick to get you moving in the “right” direction. You could build these out on your own, but it would probably be time consuming.

The other side of feature development is where open core starts to come apart at the seams. Companies decide to:

- Create entirely new products that aren’t open source.
- Extend existing functionality with options that can only be achieved or resolved with the paid product’s servers.

As a result of this shift in priority, the open source product will inevitably start to stagnate. It’s simply not economically viable to continue adding functionality to a product that does not generate any revenue.

## Reduced Friction
The biggest way that paid cloud products reduce friction is by eliminating the engineering grunt work it takes to get something up and running on cloud infrastructure. With the paid product, there are no CLIs to run, configuration files to write, or docker containers to spin up. Just log in and start using the product. This incentive is fairly straightforward.

But there are more subtle ways to reduce friction as well. You could always make the initial unpaid product experience worse in comparison.

You might be thinking - why would anyone purposefully make their product worse?

New customers typically start their journey with getting started guides. I’ve seen a handful of open core companies that demonstrate all of their getting started guides through their paid product. At the end you might find a stray comment indicating that you can perform the same tasks with the open source product. If you manage to find that tutorial, it can be riddled with small errors that make it tougher to get something working, compared to the flawless paid experience.

In this case, you don’t have to make the product any worse. You just have to make sure the initial onboarding experience for your paid product is better than your free product. When current users are singing your praises, newcomers are more likely to put up with a less than ideal experience to try out your free product, but they may cave and just start with the paid product’s better experience.

Is this intentional? Maybe not, but the cynic in me can’t help but think it’s by design.

## Marketing Priority
In fact, this prioritization shift in onboarding can also be seen in the company’s marketing. Partners are incentivized to push integrations and use cases with the cloud product. The website emphasizes call-to-action buttons for the cloud product, just like any other paid SaaS business. Blog posts only cover updates for the cloud product.

The business directive is that the paid product matters above all else, because it’s the only way to make the business viable.

In a way, it feels like targeted gaslighting to make newcomers believe that the cloud product is the only product that exists.

And it works! I’ve had countless conversations with people in the industry who were unaware when these open core companies offered a free open source version that they could run locally. Either that or they considered it to be a worse product overall.

## Creating Better Open Source Incentives

Open core’s misaligned incentives stem from the order in which monetization is achieved. It’s always the last step that will get figured out eventually.

Instead, I believe that by creating a clear vision for monetization and baking open source into that model from the outset, you can align the incentives better while still catering to developer desires. There’s a few forms I’ve seen this come in that feel more transparent and honest.[^8]

### Open Source Interface, Proprietary Data
[Sanity.io](https://www.sanity.io) is one of my favorite new products that manages to nail the often conflicting goals of open source and profit.

Sanity is a headless CMS that makes the contents of their editor 100% open-source and extendable. The editor can be run locally or self-hosted, all while supporting automatic saves, version control management, and “multiplayer mode” via both API and UI.

So how do they achieve these features? By keeping the database cloud-hosted and proprietary.

Sanity has an incentive to continue investing in their editor, because without improvements here, no one will put data into their proprietary database. The more open their editor is, the more ways people will use it to add data. Since they monetize based on usage of the data, more data entered translates to more uses, which translates to more revenue.

They are never incentivized to open source their secret sauce because self-hosting the database could never result in the seamless nature of automatic saves and collaborative editing. When you use Sanity, you’re signing up knowing in full what parts will remain proprietary.

### Source Available, Clear Expectations
While heavily debated in the community if source available should really be considered open source, I think it’s a step towards being more honest about the mission of the business — transparency. The "source available" model, also known as "Fair-code", ensures that developers have the ability to see what’s running under the hood of your product, but prevents outsiders from monetizing it.[^9]

Companies like n8n.io are pioneering this strategy, building their product from the ground up with transparency in mind. The cloud product stays 100% in sync with the free product. However, both the cloud and local product have limitations in place based on the number of users or workflows you want to run.

This approach incentivizes the business to continue providing the source code for all of their features to maintain the trust of their to their user base. Users no longer have to worry about features being excluded as the product progresses because limitations were made clear from the outset, similar to a typical freemium plan.

### Open Source Components
There’s also a strategy to open up less proprietary parts of the business to the world. Orchestration tools like [Shipyard](https://www.shipyardapp.com) keep the UI and execution logic proprietary, while making the low-code templates [100% open source](https://github.com/shipyardapp/shipyard-blueprints)[^10]. This helps increase the trust and portability of the product, despite being low-code. Anyone can run the integrations on their own machine - but the magic of what you pay for is in the workflow builder and automated execution.

A similar model applies for ETL tools like Stitch who open source their “taps” and “targets” as an open source product called Singer. These can all be executed and tested locally, but the cloud product experience of selecting sources and destinations and scheduling them to run in the background is far better than working with cron and CLIs.

The incentives of open source components align better with business growth too. By charging based on usage, the business wants to increase the amount of data being transferred by their platform. The easiest way to do this is by offering more integrations and datasets to choose from. Building integrations in an open way continues building trust, prevents a future bait and switch, and gives reassurance of future portability. When you open source business components, you create an expectation that the business is forced to live up to.

## Conclusion
Despite what some readers might think, I’m not rooting for these open core companies to fail. Really. I admire the open source community and the incredible projects being worked on that can be easily shared to move our industry forward.

I just believe that more businesses can find ways to make open source contributions core to their business, without resorting to the typical open core strategy. There’s a lot of nuance in creating better aligned incentives.

Saying that “Open Source = Good, Proprietary = Bad” is too simplistic. Adopting this mentality leads to businesses that take advantage of unsuspecting victims.

We should all be asking tougher questions and having higher expectations of the tools that proudly wear the open core badge. Are these companies inherently deserving of our trust? Are they living up to the ideals of open source? Are they incentivized in the right ways?

We should all be more realistic about how we assess the tools and businesses we work with. That’s the only way we can look out for the long-term health of the tooling ecosystem[^11].

[^1]: Sure, there are companies like Redis, ElasticSearch, and Neo4j… but these companies are still relatively new in the grand scheme of business.

[^2]: Open core companies that build themselves on top of someone else’s open source code, like Astronomer, are entirely different stories that seem to not run into odd incentive issues laid out in this article.

[^3]: There are quite a few more that could make this list, but these are more recent ones in the data space that I’m aware of.

[^4]: I really wish there was a statistic on this, but I’ve never met someone that’s actually scoped the entirety of the source code before choosing to use an open source product.

[^5]: This truth fuels the front page of Hacker News.

[^6]: Most recently the [Salesforce and Slack](https://archive.ph/vjgMy) culture clash

[^7]: My personal favorite experience here was using Hotjar for 2 years. Through a lot of testing on their side, they eventually decided to take away my ability to filter for users hitting specific pages. That was possibly the easiest decision I’ve ever made to fork over a credit card.

[^8]: If you know of other open source incentive models that aren’t inherently open core, I’d love to know about it. Baked-in incentive structures fascinate me.

[^9]: Believe me, if an open source product gets popular enough, AWS, Azure, and Google Cloud will all attempt to monetize it. Just look at tools like ElasticSearch or Airflow.

[^10]: Disclaimer: I run Shipyard, but I’m not writing this article to make a sales pitch.

[^11]: If I missed anything in my arguments here or you have other examples of open-source being integrated into the business model, please let me know. I’m not an expert. I’m just a guy that has opinions and doesn’t want to see open core companies set people up for disappointment.