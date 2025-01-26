import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} className="hover:text-indigo-500 hover:underline">
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, M2 Chip, 8GB RAM (2022)" href="https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2">
            I was using an Intel-based Window laptop prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="15” MSI GP63 Leopard 8RD, 16GB RAM (2019)" href="https://www.msi.com/Laptop/GP63-Leopard-8RD/Specification">
            The first gaming laptop I bought for playing and working. 
            I usually do coding, run docker containers, sometimes train machine learning models on this laptop and it doesn’t disappoint me. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development Tools">
          <Tool title="Visual Studio Code" href="https://code.visualstudio.com">
            The best code editor I’ve ever used. It includes a built-in terminal, Git integration, supports multiple programming languages and customizable with themes and icon packs for visual appeal.
            I would say it’s the idle choice for developers. 
          </Tool>
          <Tool title="Sublime Text 4" href="https://www.sublimetext.com">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="TablePlus" href="https://tableplus.com">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Search Engines">
          <Tool title="DuckDuckGo" href="https://duckduckgo.com">
            Focuses on privacy and doesn’t track your searches. 
            I use it as a default search engine on all my browsers and recommand to use it.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Artificial Intelligence">
          <Tool title="ChatGPT" href="https://chatgpt.com">
            An AI-powered chatbot that can generate human-like responses to text inputs.
            I have used it mainly for generating code snippets, and even write articles.
            Game changing tool for me!
          </Tool>
          <Tool title="Microsoft Copilot" href="https://copilot.microsoft.com">
            Mainly used on my MSI gaming laptop as it is integrated with Window operating system.
            Responses accuarate solutions and mostly used for machine learning tasks and general IT knowledge.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Learning Platform">
          <Tool title="Udemy" href="https://www.udemy.com">
            One of the leading e-learning platforms with a wide range of courses on various topics.
            Courses are ranged from beginner to advanced levels and you can learn at your own pace.
            Thanks to Udemy, I have learned programming languages, cloud computing and many more.
          </Tool>
          <Tool title="Laracasts" href="https://laracasts.com">
            I would say this is the best platform to learn modern PHP and Laravel framework.
            Not only that, you can learn about frontend frameworks like Vue.js, React.js and it even has devops, testing and tooling sections.
            Some says it’s a Netflix for developers.
            Laracast is an exceptional platform for people who aimed to be full-stacked developers.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
