import { MailIcon } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="title">Contact</h2>
      <h3 className="inline-flex items-center text-lg">
        email:
        <a
          href="mailto:samayrshah4@gmail.com"
          className="ml-2 underline text-blue-400"
        >
          samayrshah4@gmail.com
        </a>
      </h3>
    </section>
  )
}

export default Contact
