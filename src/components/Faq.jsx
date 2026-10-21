import { faqSection, faqs } from "../data/faq";
import { Link } from "../lib/router";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <Reveal as="section" className="section faq" id="preguntas">
      <div className="wrap faq-layout">
        <div>
          <p className="eyebrow">{faqSection.eyebrow}</p>
          <h2>{faqSection.title}</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>
                {item.answer}
                {item.link && (
                  <>
                    {" "}
                    <Link to={item.link.href}>{item.link.label}</Link>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
